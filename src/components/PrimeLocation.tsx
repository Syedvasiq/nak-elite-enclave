"use client";

import { useCallback, useState } from "react";
import dynamic from "next/dynamic";

export const NAK_LAT = 13.9091051;
export const NAK_LNG = 75.5791245;
export const NAK = { lat: NAK_LAT, lng: NAK_LNG, name: "NAK Elite Enclave" };
const mapUrl = "https://www.google.com/maps/place/13%C2%B054'31.9%22N+75%C2%B034'43.3%22E/@13.9091051,75.5791245,19z";

export type Category =
  | "hospitals" | "schools" | "supermarkets" | "mosques"
  | "temples" | "banks" | "pharmacy" | "restaurants"
  | "trainstation" | "petrolstation" | "busstand" | "airport";

export type CategoryDef = {
  label: string;
  color: string;
  icon: string;           // public icon path
  placeType: string;      // Google Places API type
  keyword?: string;       // extra keyword for better results
  radius: number;
};

export const CATEGORIES: Record<Category, CategoryDef> = {
  hospitals:     { label: "Hospitals",      color: "#e53e3e", icon: "/icons/hospital.svg",         placeType: "hospital",              radius: 5000 },
  schools:       { label: "Schools",        color: "#3182ce", icon: "/icons/school.svg",            placeType: "school",                radius: 4000 },
  supermarkets:  { label: "Supermarkets",   color: "#38a169", icon: "/icons/grocery-cart.svg",      placeType: "supermarket",           radius: 4000 },
  mosques:       { label: "Mosques",        color: "#0d9488", icon: "/icons/mosque.svg",            placeType: "mosque",                radius: 4000 },
  temples:       { label: "Temples",        color: "#d97706", icon: "/icons/temples.svg",           placeType: "hindu_temple",          radius: 4000 },
  banks:         { label: "Banks & ATMs",   color: "#7c3aed", icon: "/icons/bank.svg",              placeType: "bank",                  radius: 3000 },
  pharmacy:      { label: "Pharmacy",       color: "#059669", icon: "/icons/pharmacy.svg",          placeType: "pharmacy",              radius: 3000 },
  restaurants:   { label: "Restaurants",    color: "#dc2626", icon: "/icons/restaurant.svg",        placeType: "restaurant",            radius: 3000 },
  trainstation:  { label: "Train Station",  color: "#0f766e", icon: "/icons/train.svg",             placeType: "train_station",         radius: 10000 },
  petrolstation: { label: "Petrol Station", color: "#b45309", icon: "/icons/fuel-pump.svg",         placeType: "gas_station",           radius: 3000 },
  busstand:      { label: "Bus Stand",      color: "#6d28d9", icon: "/icons/scholar-bus-stop.svg",  placeType: "bus_station",           radius: 5000 },
  airport:       { label: "Airport",        color: "#ea580c", icon: "/icons/plane.svg",             placeType: "airport",               radius: 60000 },
};

export type PlaceResult = {
  name: string;
  vicinity: string;
  lat: number;
  lng: number;
  distance: number;
  driveTime: string;
};

const GoogleMap = dynamic(() => import("./GoogleMap"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center bg-[#f0ece0]">
      <div className="text-center text-[#8a7a5a]">
        <div className="mx-auto mb-3 size-10 animate-spin rounded-full border-4 border-[#C9A84C] border-t-transparent" />
        <p className="text-sm font-medium">Loading map…</p>
      </div>
    </div>
  ),
});

function PlaceCard({ place }: { place: PlaceResult }) {
  return (
    <div className="flex min-w-0 items-center justify-between gap-2 rounded-xl border border-[#e9dfc8] bg-[#fffaf2] px-3 py-2.5">
      <div className="min-w-0">
        <p className="truncate text-sm font-semibold text-[#1a1a1a]">{place.name}</p>
        {place.vicinity && <p className="truncate text-[10px] text-[#8a7a5a]">{place.vicinity}</p>}
      </div>
      <span className="shrink-0 rounded-full border border-[#C9A84C]/40 bg-[#fffaf0] px-2 py-0.5 text-[10px] font-bold text-[#92650a] sm:px-2.5 sm:text-[11px]">
        {place.driveTime}
      </span>
    </div>
  );
}

export default function PrimeLocation() {
  const [active, setActive] = useState<Category>("hospitals");
  const [places, setPlaces] = useState<PlaceResult[]>([]);
  const [loading, setLoading] = useState(false);
  const activeData = CATEGORIES[active];
  const selectedMapUrl = `https://www.google.com/maps/search/${encodeURIComponent(activeData.label + " near Shivamogga")}/@${NAK_LAT},${NAK_LNG},14z`;

  function handleCategory(key: Category) {
    setActive(key);
    setPlaces([]);
    setLoading(true);
  }

  const handleResults = useCallback((results: PlaceResult[]) => {
    setPlaces(results);
    setLoading(false);
  }, []);

  return (
    <section className="overflow-hidden bg-[#fbf8f1] px-4 py-10 text-[#1d1917] sm:px-6 sm:py-14 lg:px-10">

      {/* Header */}
      <header className="mb-6 max-w-3xl text-left sm:mb-8">
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-[#8a7a5a]">Prime Location</p>
        <h2 className="font-black text-[2rem] uppercase leading-[0.95] tracking-tight text-[#1a1a1a] sm:text-4xl md:text-5xl">
          Everything{" "}
          <span style={{ background: "linear-gradient(135deg,#F5D27A 0%,#C9A84C 40%,#A67C2A 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            Within
          </span>{" "}
          Easy Reach
        </h2>
        <div className="my-3 flex items-center gap-3">
          <span className="h-px w-8 bg-[#C9A84C]" />
          <span className="inline-block h-1.5 w-1.5 rotate-45 bg-[#C9A84C]" />
          <span className="h-px w-8 bg-[#C9A84C]" />
        </div>
        <p className="max-w-xl text-[13px] leading-relaxed text-[#4a4030] sm:text-sm">
          Strategically located on Matturu Road, Shivamogga — seamless access to everything within reach.
        </p>
      </header>

      {/* Map + Right Panel */}
      <div className="mx-auto grid w-full min-w-0 max-w-[1400px] gap-4 lg:grid-cols-[minmax(0,1fr)_320px] xl:grid-cols-[minmax(0,1fr)_360px]">

        {/* Map — order-2 on mobile, order-1 on desktop */}
        <div className="relative order-2 h-[320px] overflow-hidden rounded-2xl border border-[#e4d6bd] shadow-md sm:h-[420px] lg:order-1 lg:h-[640px]">
          <GoogleMap active={active} onResults={handleResults} />
          <a href={mapUrl} target="_blank" rel="noreferrer"
            className="absolute bottom-3 left-3 z-[1000] max-w-[calc(100%-1.5rem)] rounded-lg bg-white/95 px-3 py-1.5 text-[11px] font-semibold text-[#9d6514] shadow-sm transition hover:bg-white sm:text-xs">
            View exact location ↗
          </a>
        </div>

        {/* Right Panel — order-1 on mobile, order-2 on desktop */}
        <div className="order-1 flex min-w-0 flex-col gap-4 lg:order-2">

          {/* 12 Category Icons Grid */}
          <div className="rounded-2xl border border-[#e4d6bd] bg-white/70 p-3 shadow-sm sm:p-4">
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#8a7a5a]">Explore Nearby</p>
            <div className="grid min-w-0 grid-cols-3 gap-2 sm:grid-cols-4">
              {(Object.keys(CATEGORIES) as Category[]).map((key) => {
                const cat = CATEGORIES[key];
                const isActive = key === active;
                return (
                  <button key={key} onClick={() => handleCategory(key)}
                    className={`flex min-h-[76px] flex-col items-center justify-center gap-1 rounded-xl border p-2 transition-all duration-200 sm:min-h-[84px] sm:gap-1.5 sm:p-2.5 ${
                      isActive ? "shadow-md scale-105" : "border-[#ede5d8] bg-white hover:border-[#C9A84C] hover:scale-105"
                    }`}
                    style={isActive ? { backgroundColor: cat.color + "15", borderColor: cat.color } : {}}>
                    <span className="flex size-7 items-center justify-center sm:size-8">
                      <img src={cat.icon} alt={cat.label} width={22} height={22}
                        style={{ opacity: isActive ? 1 : 0.45 }} />
                    </span>
                    <span className="w-full break-words text-center text-[8px] font-bold uppercase leading-tight sm:text-[9px]"
                      style={{ color: isActive ? cat.color : "#4a4030" }}>
                      {cat.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Results Panel */}
          <div className="flex flex-1 flex-col rounded-2xl border border-[#e4d6bd] bg-white/70 p-3 shadow-sm sm:p-4">
            <div className="mb-3 flex items-center gap-2">
              <span className="flex size-9 items-center justify-center rounded-full"
                style={{ backgroundColor: activeData.color + "18" }}>
                <img src={activeData.icon} alt={activeData.label} width={18} height={18} />
              </span>
              <div>
                <p className="text-[10px] font-medium uppercase tracking-widest text-[#8a7a5a]">Nearby</p>
                <h3 className="font-black text-base uppercase leading-none text-[#1a1a1a]">{activeData.label}</h3>
              </div>
            </div>

            {loading ? (
              <div className="flex flex-1 items-center justify-center py-8">
                <div className="size-6 animate-spin rounded-full border-2 border-t-transparent" style={{ borderColor: "#C9A84C" }} />
              </div>
            ) : places.length === 0 ? (
              <p className="py-6 text-center text-xs text-[#8a7a5a]">Click a category to see nearby places</p>
            ) : (
              <div className="flex flex-col gap-2 overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden" style={{ maxHeight: 210 }}>
                {places.map((place) => (
                  <PlaceCard key={place.name + place.lat} place={place} />
                ))}
              </div>
            )}

            <a href={selectedMapUrl} target="_blank" rel="noreferrer"
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl border border-[#C9A84C] px-3 py-2.5 text-[11px] font-bold uppercase tracking-[0.08em] text-[#92650a] transition hover:bg-[#C9A84C] hover:text-white sm:text-xs sm:tracking-widest"
              style={{ background: "linear-gradient(135deg,#F5D27A 0%,#C9A84C 40%,#A67C2A 100%)", color: "white", border: "none" }}>
              Open in Google Maps →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
