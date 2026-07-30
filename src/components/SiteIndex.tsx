"use client";

import Image from "next/image";
import { useState } from "react";
import plotsData from "../../public/data/plots.json";

type Plot = {
  id: number;
  block: string;
  area: string;
  facing: string;
  road: string;
  status: string;
};

const plots: Plot[] = plotsData;

const legend = [
  { color: "#4a7c59", label: "Residential Plots" },
  { color: "#c4a265", label: "Commercial Plots" },
  { color: "#1a1a1a", label: "12m Main Road" },
  { color: "#555",    label: "9m Internal Road" },
  { color: "#3d6e4e", label: "Landscaped Park" },
  { color: "transparent", border: "#888", label: "Block Boundary" },
  { color: "#C9A84C", label: "Entrance / Exit" },
];

const WHATSAPP_NUMBER = "919035022229";

export default function SiteIndex() {
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({ plotId: "", name: "", phone: "", city: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  function getPlotData(id: number) {
    return plots.find((p) => p.id === id) ?? null;
  }

  function openEnquiry() {
    setForm({ plotId: "", name: "", phone: "", city: "" });
    setErrors({});
    setShowModal(true);
  }

  function validate() {
    const e: Record<string, string> = {};
    if (!form.plotId)                  e.plotId = "Please select a plot";
    if (!form.name.trim())             e.name   = "Name is required";
    if (!/^\d{10}$/.test(form.phone))  e.phone  = "Enter a valid 10-digit number";
    if (!form.city.trim())             e.city   = "City is required";
    return e;
  }

  function sendToWhatsApp() {
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }

    const plotInfo = getPlotData(Number(form.plotId));
    const msg = [
      `🏡 *Plot Enquiry — NAK Developers*`,
      ``,
      `📌 Plot No: *${String(form.plotId).padStart(2, "0")}*`,
      plotInfo ? `   Block: ${plotInfo.block}` : "",
      plotInfo ? `   Area: ${plotInfo.area}` : "",
      plotInfo ? `   Facing: ${plotInfo.facing}` : "",
      plotInfo ? `   Road: ${plotInfo.road}` : "",
      ``,
      `👤 Name: *${form.name}*`,
      `📞 Phone: *${form.phone}*`,
      `🏙️ City: *${form.city}*`,
    ].filter(Boolean).join("\n");

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank");
    setShowModal(false);
  }

  const selectedPlot = form.plotId ? getPlotData(Number(form.plotId)) : null;

  return (
    <section className="w-full bg-[#f5f0e8]">
      <div className="flex flex-col lg:flex-row w-full">

        {/* LEFT PANEL */}
        <div className="w-full lg:w-[420px] xl:w-[480px] flex-shrink-0 bg-[#f5f0e8] px-8 py-10 flex flex-col gap-6 border-b lg:border-b-0 lg:border-r border-[#e0d5c0]">
          <div>
            <p className="text-xs tracking-[0.35em] uppercase text-[#9a8a6a] mb-4">Site Index</p>
            <h2 className="text-4xl sm:text-5xl font-black uppercase text-[#1a1a1a] leading-tight">Find Your</h2>
            <h2
              className="text-4xl sm:text-5xl font-black uppercase leading-tight"
              style={{ background: "linear-gradient(135deg,#F5D27A 0%,#C9A84C 40%,#A67C2A 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}
            >
              Perfect Plot
            </h2>
            <p className="text-xs text-[#5a4e3a] leading-relaxed">
              Explore the thoughtfully planned layout featuring premium residential
              plots, landscaped open spaces, and well-connected internal roads.
            </p>
          </div>

          <button
            onClick={openEnquiry}
            className="w-full py-3 rounded-xl font-bold text-sm text-[#1a1a1a] tracking-widest uppercase flex items-center justify-center gap-2 hover:opacity-90 transition shadow-md"
            style={{ background: "linear-gradient(135deg,#F5D27A 0%,#C9A84C 40%,#A67C2A 100%)" }}
          >
            Enquire Now →
          </button>

          <div>
            <p className="text-[0.55rem] tracking-[0.3em] uppercase text-[#9a8a6a] mb-3 font-semibold">Legend</p>
            <div className="flex flex-col gap-2">
              {legend.map((l) => (
                <div key={l.label} className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-sm flex-shrink-0"
                    style={{ backgroundColor: l.color, border: l.border ? `1px solid ${l.border}` : "none" }} />
                  <span className="text-[0.6rem] text-[#5a4e3a]">{l.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT — Image with right edge gap */}
        <div className="flex-1 flex items-center justify-end bg-[#f5f0e8] py-6 pr-5">
          <div className="relative w-full rounded-xl overflow-hidden shadow-md border border-[#e0d5c0]" style={{ aspectRatio: "1000/560" }}>
            <Image
              src="/layout.png"
              alt="NAK Developers Site Layout"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 75vw"
              priority
            />
          </div>
        </div>
      </div>

      {/* Enquiry Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="relative w-full max-w-md bg-[#12100a] border border-[#C9A84C]/40 rounded-2xl shadow-2xl p-6">
            <button onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-white/40 hover:text-white text-lg leading-none">✕</button>

            <div className="mb-5">
              <p className="text-[0.55rem] tracking-[0.35em] uppercase text-[#C9A84C] mb-1">NAK Developers</p>
              <h3 className="text-lg font-bold text-white">Plot Enquiry</h3>
              <p className="text-xs text-white/40 mt-0.5">Fill in your details and we'll reach you on WhatsApp</p>
            </div>

            <div className="flex flex-col gap-4">

              {/* Plot dropdown */}
              <div className="flex flex-col gap-1">
                <label className="text-[0.6rem] uppercase tracking-widest text-[#C9A84C] font-semibold">Select Plot *</label>
                <select
                  value={form.plotId}
                  onChange={(e) => setForm({ ...form, plotId: e.target.value })}
                  className="w-full bg-[#1e1a10] border border-[#C9A84C]/30 rounded-lg px-3 py-2.5 text-white text-sm focus:outline-none focus:border-[#C9A84C] appearance-none"
                  style={{ backgroundImage: "none" }}
                >
                  <option value="">-- Choose a plot --</option>
                  {plots.map((p) => (
                    <option key={p.id} value={p.id} disabled={p.status === "Sold"}
                      className={p.status === "Sold" ? "text-red-400" : "text-white"}>
                      Plot {String(p.id).padStart(2, "0")} — {p.block}{p.status === "Sold" ? " (Sold)" : ""}
                    </option>
                  ))}
                </select>
                {errors.plotId && <span className="text-[0.58rem] text-red-400">{errors.plotId}</span>}
                {selectedPlot && (
                  <div className="mt-1 flex flex-wrap gap-2">
                    <span className="rounded-full border border-[#C9A84C]/40 bg-[#1e1a10] px-3 py-1 text-[0.6rem] font-semibold text-[#C9A84C]">
                      {selectedPlot.area}
                    </span>
                    <span className="rounded-full border border-[#C9A84C]/40 bg-[#1e1a10] px-3 py-1 text-[0.6rem] font-semibold text-white/70">
                      {selectedPlot.facing} Facing
                    </span>
                    <span className="rounded-full border border-[#C9A84C]/40 bg-[#1e1a10] px-3 py-1 text-[0.6rem] font-semibold text-white/70">
                      {selectedPlot.road}
                    </span>
                    <span className={`rounded-full border px-3 py-1 text-[0.6rem] font-bold ${
                      selectedPlot.status === "Available"
                        ? "border-green-500/40 bg-green-900/20 text-green-400"
                        : "border-red-500/40 bg-red-900/20 text-red-400"
                    }`}>
                      {selectedPlot.status}
                    </span>
                  </div>
                )}
              </div>

              {/* Name */}
              <div className="flex flex-col gap-1">
                <label className="text-[0.6rem] uppercase tracking-widest text-[#C9A84C] font-semibold">Your Name *</label>
                <input type="text" placeholder="Enter your full name" value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-[#1e1a10] border border-[#C9A84C]/30 rounded-lg px-3 py-2.5 text-white text-sm placeholder-white/25 focus:outline-none focus:border-[#C9A84C]" />
                {errors.name && <span className="text-[0.58rem] text-red-400">{errors.name}</span>}
              </div>

              {/* Phone */}
              <div className="flex flex-col gap-1">
                <label className="text-[0.6rem] uppercase tracking-widest text-[#C9A84C] font-semibold">Phone Number *</label>
                <input type="tel" placeholder="10-digit mobile number" value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value.replace(/\D/g, "").slice(0, 10) })}
                  className="w-full bg-[#1e1a10] border border-[#C9A84C]/30 rounded-lg px-3 py-2.5 text-white text-sm placeholder-white/25 focus:outline-none focus:border-[#C9A84C]" />
                {errors.phone && <span className="text-[0.58rem] text-red-400">{errors.phone}</span>}
              </div>

              {/* City */}
              <div className="flex flex-col gap-1">
                <label className="text-[0.6rem] uppercase tracking-widest text-[#C9A84C] font-semibold">City *</label>
                <input type="text" placeholder="Your city" value={form.city}
                  onChange={(e) => setForm({ ...form, city: e.target.value })}
                  className="w-full bg-[#1e1a10] border border-[#C9A84C]/30 rounded-lg px-3 py-2.5 text-white text-sm placeholder-white/25 focus:outline-none focus:border-[#C9A84C]" />
                {errors.city && <span className="text-[0.58rem] text-red-400">{errors.city}</span>}
              </div>

              <button onClick={sendToWhatsApp}
                className="w-full py-3 mt-1 rounded-xl font-bold text-sm text-[#1a1a1a] tracking-widest uppercase flex items-center justify-center gap-2 hover:opacity-90 transition"
                style={{ background: "linear-gradient(135deg,#F5D27A 0%,#C9A84C 40%,#A67C2A 100%)" }}>
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Send on WhatsApp
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
