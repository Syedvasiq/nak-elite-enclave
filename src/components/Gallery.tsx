"use client";

import Image from "next/image";
import { useState } from "react";

const galleryItems = [
  {
    number: "01",
    title: "BIRD'S EYE VIEW",
    desc: "A complete aerial view of the entire layout showcasing all plots, roads and green spaces.",
    image: "/layout.png",
    size: "large", // top large image
  },
  {
    number: "02",
    title: "GRAND ENTRANCE",
    desc: "A welcoming entrance that sets the tone for a premium living experience.",
    image: "/hero-bg.png",
    size: "medium",
  },
  {
    number: "03",
    title: "CENTRAL BOULEVARD",
    desc: "Wide internal roads lined with greenery for a peaceful and premium drive.",
    image: "/prmiumum-infrasturue.png",
    size: "medium",
  },
  {
    number: "04",
    title: "LANDSCAPED PARK",
    desc: "Beautifully designed park with walking paths, seating areas and children's play zone.",
    image: "/greener-way.png",
    size: "medium",
  },
  {
    number: "05",
    title: "INTERNAL ROAD VIEW",
    desc: "Well-planned roads with proper infrastructure and tree-lined streets.",
    image: "/built-for-tommrow.png",
    size: "medium",
  },
  {
    number: "06",
    title: "AERIAL PERSPECTIVE",
    desc: "A higher perspective showcasing the entire community in its natural surroundings.",
    image: "/layout-front-sun-set-view.png",
    size: "wide", // bottom wide image
  },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState<null | typeof galleryItems[0]>(null);

  return (
    <section className="w-full bg-[#0d0b08] overflow-hidden pb-[25px]">

      {/* ── MAIN CONTAINER ── */}
      <div className="flex flex-col lg:flex-row w-full min-h-[600px]">

        {/* LEFT — Title panel */}
        <div className="w-full lg:w-[220px] xl:w-[260px] flex-shrink-0 flex flex-col justify-start px-8 pt-10 pb-8 lg:pb-0 border-b lg:border-b-0 lg:border-r border-white/10">
          {/* Top divider */}
          <div className="flex items-center gap-3 mb-5">
            <span className="h-px w-8 bg-[#C9A84C]" />
            <span className="w-1.5 h-1.5 rotate-45 bg-[#C9A84C] inline-block" />
            <span className="h-px w-8 bg-[#C9A84C]" />
          </div>

          <h2 className="font-black text-3xl uppercase leading-none tracking-tight text-white sm:text-4xl">
            Project{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #F5D27A 0%, #C9A84C 40%, #A67C2A 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Gallery
            </span>
          </h2>

          {/* Bottom divider */}
          <div className="flex items-center gap-3 mb-5">
            <span className="h-px w-8 bg-[#C9A84C]" />
            <span className="w-1.5 h-1.5 rotate-45 bg-[#C9A84C] inline-block" />
            <span className="h-px w-8 bg-[#C9A84C]" />
          </div>

          <p
            className="text-sm font-semibold mb-3"
            style={{
              background: "linear-gradient(135deg, #F5D27A 0%, #C9A84C 40%, #A67C2A 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Experience Every Perspective
          </p>
          <p className="text-xs text-white/50 leading-relaxed">
            Explore the beauty of NAK Developers' thoughtfully planned community
            through different angles and perspectives.
          </p>
        </div>

        {/* RIGHT — Grid */}
        <div className="flex-1 flex flex-col gap-1">

          {/* ROW 1 — Bird's eye view (large) + label overlay */}
          <div
            className="relative w-full cursor-pointer group"
            style={{ height: "300px" }}
            onClick={() => setLightbox(galleryItems[0])}
          >
            <Image
              src={galleryItems[0].image}
              alt={galleryItems[0].title}
              fill
              quality={90}
              className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
              sizes="100vw"
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition" />
            {/* North compass */}
            <div className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full border border-[#C9A84C]/60 bg-black/50 flex items-center justify-center">
              <span className="text-[#C9A84C] text-xs font-black">N</span>
            </div>
            {/* Label */}
            <div className="absolute bottom-0 left-0 z-10 flex items-end gap-3 p-4">
              <div className="flex flex-col">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[#C9A84C] text-[0.6rem] font-bold tracking-widest">{galleryItems[0].number}</span>
                  <span className="h-px w-6 bg-[#C9A84C]/50" />
                  <span className="text-white text-xs font-bold tracking-widest uppercase">{galleryItems[0].title}</span>
                </div>
                <p className="text-white/60 text-[0.6rem] max-w-xs">{galleryItems[0].desc}</p>
              </div>
            </div>
          </div>

          {/* ROW 2 — 4 medium images */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-1">
            {galleryItems.slice(1, 5).map((item) => (
              <div
                key={item.number}
                className="relative cursor-pointer group overflow-hidden"
                style={{ height: "180px" }}
                onClick={() => setLightbox(item)}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  quality={90}
                  className="object-cover object-center group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 640px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-black/45 group-hover:bg-black/30 transition" />
                {/* Label */}
                <div className="absolute bottom-0 left-0 right-0 z-10 p-3">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <span className="text-[#C9A84C] text-[0.5rem] font-bold tracking-widest">{item.number}</span>
                    <span className="h-px w-4 bg-[#C9A84C]/50" />
                    <span className="text-white text-[0.6rem] font-bold tracking-wide uppercase leading-tight">{item.title}</span>
                  </div>
                  <p className="text-white/50 text-[0.5rem] leading-tight line-clamp-2">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* ROW 3 — Wide aerial image */}
          <div
            className="relative w-full cursor-pointer group overflow-hidden"
            style={{ height: "160px" }}
            onClick={() => setLightbox(galleryItems[5])}
          >
            <Image
              src={galleryItems[5].image}
              alt={galleryItems[5].title}
              fill
              quality={90}
              className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/25 transition" />
            <div className="absolute bottom-0 left-0 z-10 p-4">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[#C9A84C] text-[0.6rem] font-bold tracking-widest">{galleryItems[5].number}</span>
                <span className="h-px w-6 bg-[#C9A84C]/50" />
                <span className="text-white text-xs font-bold tracking-widest uppercase">{galleryItems[5].title}</span>
              </div>
              <p className="text-white/55 text-[0.6rem] max-w-sm">{galleryItems[5].desc}</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── LIGHTBOX ── */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative w-full max-w-4xl rounded-xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full" style={{ aspectRatio: "16/9" }}>
              <Image
                src={lightbox.image}
                alt={lightbox.title}
                fill
                quality={95}
                className="object-cover"
                sizes="100vw"
              />
            </div>
            {/* Caption */}
            <div className="bg-[#0d0b08] px-6 py-4 flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[#C9A84C] text-xs font-bold tracking-widest">{lightbox.number}</span>
                  <span className="h-px w-6 bg-[#C9A84C]/50" />
                  <span className="text-white text-sm font-bold tracking-widest uppercase">{lightbox.title}</span>
                </div>
                <p className="text-white/50 text-xs">{lightbox.desc}</p>
              </div>
              <button
                onClick={() => setLightbox(null)}
                className="text-white/40 hover:text-white text-xl leading-none ml-4 flex-shrink-0"
              >
                ✕
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
