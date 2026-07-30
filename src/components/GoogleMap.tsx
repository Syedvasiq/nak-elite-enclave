"use client";

import { useEffect, useRef, useCallback } from "react";
import { NAK_LAT, NAK_LNG, CATEGORIES, type Category, type PlaceResult } from "./PrimeLocation";

const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY!;

declare global {
  interface Window {
    initGoogleMap?: () => void;
  }
}

interface Props {
  active: Category;
  onResults: (places: PlaceResult[]) => void;
}

// Returns true if string looks like a Plus Code (e.g. WH6H+94P)
function isPlusCode(s: string) {
  return /^[23456789CFGHJMPQRVWX]{4,8}\+[23456789CFGHJMPQRVWX]{2,3}/i.test(s.trim().split(",")[0]);
}

// Clean vicinity — remove plus code prefix if present
function cleanVicinity(v: string) {
  if (!v) return "";
  const parts = v.split(",");
  if (isPlusCode(parts[0])) parts.shift();
  return parts.join(",").trim();
}

export default function GoogleMap({ active, onResults }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<google.maps.Map | null>(null);
  const activeMarkersRef = useRef<google.maps.Marker[]>([]);
  const legacyServiceRef = useRef<google.maps.places.PlacesService | null>(null);
  const infoWindowRef = useRef<google.maps.InfoWindow | null>(null);
  const activeRef = useRef<Category>(active);
  const searchIdRef = useRef(0);

  // Keep activeRef in sync so async callbacks can check if still relevant
  useEffect(() => { activeRef.current = active; }, [active]);

  const searchNearby = useCallback(async (category: Category) => {
    if (!mapRef.current) return;
    const searchId = ++searchIdRef.current;
    const cat = CATEGORIES[category];
    const nakLatLng = new window.google.maps.LatLng(NAK_LAT, NAK_LNG);

    try {
      const { Place, SearchNearbyRankPreference } = await window.google.maps.importLibrary("places") as google.maps.PlacesLibrary;
      const { places } = await Place.searchNearby({
        fields: ["displayName", "location", "formattedAddress"],
        locationRestriction: { center: nakLatLng, radius: cat.radius },
        includedPrimaryTypes: [cat.placeType],
        maxResultCount: 10,
        rankPreference: SearchNearbyRankPreference.DISTANCE,
      });
      // Stale check — user may have switched category
      if (activeRef.current !== category || searchId !== searchIdRef.current) return;
      if (places.length === 0) { onResults([]); return; }

      const bounds = new window.google.maps.LatLngBounds();
      bounds.extend(nakLatLng);
      const placeResults: PlaceResult[] = [];

      // Keep the current markers visible until the next response is ready, then
      // replace them in one pass. This prevents the blank-frame marker flicker.
      activeMarkersRef.current.forEach((marker) => marker.setMap(null));
      activeMarkersRef.current = [];

      places.filter((place) => place.location).forEach((place) => {
            const loc = place.location!;
            const lat = loc.lat();
            const lng = loc.lng();
            const distMetres = Math.round(window.google.maps.geometry.spherical.computeDistanceBetween(nakLatLng, loc));
            // Approximate local driving time. This avoids an unauthorised
            // Distance Matrix API request and its repeated error/retry cycle.
            const driveText = `${Math.max(1, Math.round(distMetres / 300))} min`;

            const vicinity = cleanVicinity(place.formattedAddress || "");
            const name = place.displayName || "Nearby destination";

            const marker = new window.google.maps.Marker({
              position: { lat, lng },
              map: mapRef.current!,
              optimized: true,
              cursor: "pointer",
              icon: {
                path: window.google.maps.SymbolPath.CIRCLE,
                scale: 11,
                fillColor: cat.color,
                fillOpacity: 1,
                strokeColor: "#ffffff",
                strokeWeight: 2.5,
              },
              zIndex: 10,
            });

            const infoContent = `
              <div style="font-family:sans-serif;padding:6px 4px;min-width:180px;">
                <strong style="font-size:13px;color:#1a1a1a;">${name}</strong><br/>
                ${vicinity ? `<span style="font-size:11px;color:#8a7a5a;">${vicinity}</span><br/>` : ""}
                <span style="font-size:12px;font-weight:bold;color:${cat.color};">🚗 ${driveText}</span>
              </div>`;

            marker.addListener("click", () => {
              infoWindowRef.current?.close();
              infoWindowRef.current = new window.google.maps.InfoWindow({ content: infoContent });
              infoWindowRef.current.open(mapRef.current!, marker);
            });

            bounds.extend({ lat, lng });
            activeMarkersRef.current.push(marker);

            placeResults.push({ name, vicinity, lat, lng, distance: distMetres, driveTime: driveText });
      });

      placeResults.sort((a, b) => a.distance - b.distance);
      onResults(placeResults);
      mapRef.current!.fitBounds(bounds, { top: 60, right: 60, bottom: 60, left: 60 });
    } catch (error) {
      // Some existing projects have the legacy Places API enabled but have not
      // yet enabled Places API (New). Keep the location explorer working for
      // those projects while the Cloud configuration is updated.
      if (!mapRef.current) return;
      legacyServiceRef.current ??= new window.google.maps.places.PlacesService(mapRef.current);
      legacyServiceRef.current.nearbySearch({
        location: nakLatLng,
        radius: cat.radius,
        type: cat.placeType as google.maps.places.PlaceSearchRequest["type"],
      }, (results, status) => {
        if (activeRef.current !== category || searchId !== searchIdRef.current) return;
        if (status !== "OK" || !results?.length) { onResults([]); return; }

        const bounds = new window.google.maps.LatLngBounds();
        bounds.extend(nakLatLng);
        const placeResults: PlaceResult[] = [];
        activeMarkersRef.current.forEach((marker) => marker.setMap(null));
        activeMarkersRef.current = [];

        results.filter((place) => place.geometry?.location).slice(0, 10).forEach((place) => {
          const loc = place.geometry!.location!;
          const lat = loc.lat();
          const lng = loc.lng();
          const distance = Math.round(window.google.maps.geometry.spherical.computeDistanceBetween(nakLatLng, loc));
          const driveTime = `${Math.max(1, Math.round(distance / 300))} min`;
          const vicinity = cleanVicinity(place.vicinity || "");
          const name = place.name || "Nearby destination";
          const marker = new window.google.maps.Marker({
            position: { lat, lng }, map: mapRef.current!, optimized: true, cursor: "pointer",
            icon: { path: window.google.maps.SymbolPath.CIRCLE, scale: 11, fillColor: cat.color, fillOpacity: 1, strokeColor: "#ffffff", strokeWeight: 2.5 }, zIndex: 10,
          });
          marker.addListener("click", () => {
            infoWindowRef.current?.close();
            infoWindowRef.current = new window.google.maps.InfoWindow({ content: `<div style="font-family:sans-serif;padding:6px 4px;min-width:180px;"><strong style="font-size:13px;color:#1a1a1a;">${name}</strong><br/>${vicinity ? `<span style="font-size:11px;color:#8a7a5a;">${vicinity}</span><br/>` : ""}<span style="font-size:12px;font-weight:bold;color:${cat.color};">Drive ~${driveTime}</span></div>` });
            infoWindowRef.current.open(mapRef.current!, marker);
          });
          bounds.extend({ lat, lng });
          activeMarkersRef.current.push(marker);
          placeResults.push({ name, vicinity, lat, lng, distance, driveTime });
        });
        placeResults.sort((a, b) => a.distance - b.distance);
        onResults(placeResults);
        mapRef.current!.fitBounds(bounds, { top: 60, right: 60, bottom: 60, left: 60 });
      });
      console.warn("Places API (New) is unavailable; using the legacy Places fallback.", error);
    }
  }, [onResults]);

  const initMap = useCallback(() => {
    if (!containerRef.current || mapRef.current) return;

    const map = new window.google.maps.Map(containerRef.current, {
      center: { lat: NAK_LAT, lng: NAK_LNG },
      zoom: 14,
      disableDefaultUI: true,
      gestureHandling: "cooperative",
      styles: [
        { featureType: "poi", elementType: "labels", stylers: [{ visibility: "off" }] },
      ],
    });

    mapRef.current = map;
    // NAK Elite Enclave pin
    const nakSvg = encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="48" height="60" viewBox="0 0 48 60">
      <path d="M24 0C10.7 0 0 10.7 0 24c0 18 24 36 24 36s24-18 24-36C48 10.7 37.3 0 24 0z" fill="#1a0e0a" stroke="#C9A84C" stroke-width="3"/>
      <text x="24" y="20" text-anchor="middle" fill="#C9A84C" font-size="8" font-weight="900" font-family="sans-serif">NAK</text>
      <text x="24" y="30" text-anchor="middle" fill="#C9A84C" font-size="7" font-weight="700" font-family="sans-serif">ELITE</text>
    </svg>`);

    const nakMarker = new window.google.maps.Marker({
      position: { lat: NAK_LAT, lng: NAK_LNG },
      map,
      optimized: false,
      cursor: "pointer",
      icon: {
        url: `data:image/svg+xml;charset=UTF-8,${nakSvg}`,
        scaledSize: new window.google.maps.Size(48, 60),
        anchor: new window.google.maps.Point(24, 60),
      },
      zIndex: 100,
    });

    const nakInfo = new window.google.maps.InfoWindow({
      content: `<div style="font-family:sans-serif;padding:4px 2px;">
        <strong style="font-size:13px;color:#1a0e0a;">📍 NAK Elite Enclave</strong><br/>
        <span style="font-size:11px;color:#8a7a5a;">Matturu Road, Shivamogga</span>
      </div>`,
    });
    nakMarker.addListener("click", () => nakInfo.open(map, nakMarker));

    searchNearby(activeRef.current);
  }, [searchNearby]);

  // Load Google Maps script once
  useEffect(() => {
    if (window.google?.maps) {
      initMap();
      return;
    }
    if (document.getElementById("gmap-script")) {
      window.initGoogleMap = initMap;
      return;
    }
    window.initGoogleMap = initMap;
    const script = document.createElement("script");
    script.id = "gmap-script";
    script.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&v=weekly&loading=async&libraries=places,geometry&callback=initGoogleMap`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
    return () => { window.initGoogleMap = undefined; };
  }, [initMap]);

  // Search when category changes
  useEffect(() => {
    if (!mapRef.current) return;
    searchNearby(active);
  }, [active, searchNearby]);

  function zoomIn() { mapRef.current?.setZoom((mapRef.current.getZoom() ?? 14) + 1); }
  function zoomOut() { mapRef.current?.setZoom((mapRef.current.getZoom() ?? 14) - 1); }

  return (
    <>
      <div ref={containerRef} className="h-full w-full" />
      <div className="absolute right-3 top-3 z-[100] flex flex-col gap-1">
        <button onClick={zoomIn} aria-label="Zoom in"
          className="flex size-9 items-center justify-center rounded-lg border border-[#e4d6bd] bg-white text-xl font-bold text-[#1a1a1a] shadow-md transition hover:bg-[#fffaf0] hover:text-[#C9A84C]">
          +
        </button>
        <button onClick={zoomOut} aria-label="Zoom out"
          className="flex size-9 items-center justify-center rounded-lg border border-[#e4d6bd] bg-white text-xl font-bold text-[#1a1a1a] shadow-md transition hover:bg-[#fffaf0] hover:text-[#C9A84C]">
          −
        </button>
      </div>
    </>
  );
}
