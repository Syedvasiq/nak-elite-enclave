"use client";

import { useState } from "react";

const goldGrad = "linear-gradient(135deg,#F5D27A 0%,#C9A84C 40%,#A67C2A 100%)";

const priceData = [
  { year: "2010", price: 180,  growth: null },
  { year: "2012", price: 260,  growth: 44 },
  { year: "2014", price: 380,  growth: 46 },
  { year: "2016", price: 520,  growth: 37 },
  { year: "2018", price: 720,  growth: 38 },
  { year: "2020", price: 880,  growth: 22 },
  { year: "2022", price: 1250, growth: 42 },
  { year: "2024", price: 1800, growth: 44 },
  { year: "2025*", price: 2200, growth: 22 },
];

const reasons = [
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5" className="w-6 h-6"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/><path d="M3 9h18"/><circle cx="12" cy="5" r="1" fill="#C9A84C"/></svg>,
    title: "Secured Gated Community",
    desc: "24/7 security, CCTV surveillance, and controlled access — your family and investment stay protected round the clock.",
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5" className="w-6 h-6"><circle cx="12" cy="8" r="4"/><path d="M12 12v9"/><path d="M9 21h6"/><path d="M7 10c-2 1-3 3-3 5h16c0-2-1-4-3-5"/></svg>,
    title: "Landscaped Green Spaces",
    desc: "Dedicated parks, tree-lined avenues, and open spaces that enhance lifestyle and boost property value over time.",
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5" className="w-6 h-6"><path d="M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h11a2 2 0 012 2v3"/><rect x="9" y="11" width="14" height="10" rx="2"/><circle cx="12" cy="16" r="1" fill="#C9A84C"/><circle cx="20" cy="16" r="1" fill="#C9A84C"/></svg>,
    title: "Wide Internal Roads",
    desc: "12m main road and 9m internal roads ensure smooth connectivity, better resale value, and premium living standards.",
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5" className="w-6 h-6"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>,
    title: "Faster Appreciation",
    desc: "Gated community plots in Shivamogga have historically appreciated 2–3× faster than standalone plots in the same area.",
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5" className="w-6 h-6"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
    title: "Ready Infrastructure",
    desc: "Underground drainage, street lighting, water supply, and electricity — all in place before you build.",
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5" className="w-6 h-6"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/><path d="M15 13h2"/><path d="M15 17h2"/></svg>,
    title: "Bank Loan Approved",
    desc: "RERA-compliant layout with clear titles makes it easy to secure home loans from leading banks and NBFCs.",
  },
];

const milestones = [
  { year: "2010", event: "Shivamogga declared district HQ",      impact: "Land demand surged 40%" },
  { year: "2013", event: "NH-206 expansion & bypass road",       impact: "Peripheral land prices doubled" },
  { year: "2017", event: "Shivamogga Airport announced",         impact: "Realty boom in 10km radius" },
  { year: "2019", event: "Smart City Mission inclusion",         impact: "Infrastructure investment ₹2,000 Cr+" },
  { year: "2022", event: "Airport inaugurated by PM Modi",       impact: "Premium plots hit ₹1,200/sqft" },
  { year: "2024", event: "IT & industrial corridor planned",     impact: "Demand up 35% YoY" },
];

export default function InvestmentPlan() {
  const [activeTab, setActiveTab] = useState<"why" | "growth" | "milestones">("why");
  const maxPrice = Math.max(...priceData.map((d) => d.price));

  return (
    <section className="bg-[#fbf8f1] px-4 py-16 text-[#1a1a1a] sm:px-6 lg:px-10">

      {/* Header */}
      <div className="mx-auto mb-10 max-w-[1400px]">
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-[#8a7a5a]">Smart Investment</p>
        <h2 className="font-black text-3xl uppercase leading-none tracking-tight text-[#1a1a1a] sm:text-4xl md:text-5xl">
          Why Invest in{" "}
          <span style={{ background: goldGrad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            NAK Elite Enclave
          </span>
        </h2>
        <div className="my-3 flex items-center gap-3">
          <span className="h-px w-8 bg-[#C9A84C]" />
          <span className="inline-block h-1.5 w-1.5 rotate-45 bg-[#C9A84C]" />
          <span className="h-px w-8 bg-[#C9A84C]" />
        </div>
        <p className="max-w-2xl text-sm leading-relaxed text-[#4a4030]">
          Shivamogga's real estate has grown over{" "}
          <span className="font-semibold text-[#C9A84C]">12× in 15 years</span>. A gated community plot here isn't just a home — it's a high-yield asset.
        </p>
      </div>

      {/* Tabs */}
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-8 flex flex-wrap gap-2">
          {([
            { key: "why",        label: "Why Gated Community" },
            { key: "growth",     label: "Price Growth Chart" },
            { key: "milestones", label: "City Milestones" },
          ] as const).map(({ key, label }) => (
            <button key={key} onClick={() => setActiveTab(key)}
              className={`rounded-full px-5 py-2 text-xs font-bold uppercase tracking-widest transition-all ${
                activeTab === key
                  ? "text-[#1a1a1a] shadow-md"
                  : "border border-[#C9A84C]/40 bg-white text-[#8a7a5a] hover:border-[#C9A84C] hover:text-[#C9A84C]"
              }`}
              style={activeTab === key ? { background: goldGrad } : {}}>
              {label}
            </button>
          ))}
        </div>

        {/* WHY GATED COMMUNITY */}
        {activeTab === "why" && (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map((r) => (
              <div key={r.title}
                className="rounded-2xl border border-[#e4d6bd] bg-white p-6 transition-all duration-300 hover:border-[#C9A84C]/60 hover:shadow-md">
                <div className="mb-4 flex size-12 items-center justify-center rounded-xl"
                  style={{ background: "linear-gradient(135deg,#fdf6e3,#f5ead0)", border: "1px solid #C9A84C40" }}>
                  {r.icon}
                </div>
                <h3 className="mb-2 font-black text-sm uppercase tracking-wide text-[#1a1a1a]">{r.title}</h3>
                <p className="text-xs leading-relaxed text-[#4a4030]">{r.desc}</p>
              </div>
            ))}
          </div>
        )}

        {/* PRICE GROWTH CHART */}
        {activeTab === "growth" && (
          <div className="rounded-2xl border border-[#e4d6bd] bg-white p-6 sm:p-8">
            <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-widest text-[#8a7a5a]">Shivamogga Land Price</p>
                <p className="font-black text-2xl text-[#1a1a1a]">₹180 → ₹2,200 <span className="text-sm font-normal text-[#C9A84C]">per sqft</span></p>
              </div>
              <div className="rounded-xl border border-[#C9A84C]/40 bg-[#fffaf2] px-4 py-2 text-center">
                <p className="text-[10px] uppercase tracking-widest text-[#8a7a5a]">15-Year Return</p>
                <p className="font-black text-xl" style={{ background: goldGrad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>~12.2×</p>
              </div>
            </div>

            {/* Bar Chart */}
            <div className="flex items-end gap-2 sm:gap-3" style={{ height: 220 }}>
              {priceData.map((d, i) => {
                const heightPct = (d.price / maxPrice) * 100;
                const isLast = i === priceData.length - 1;
                return (
                  <div key={d.year} className="group relative flex flex-1 flex-col items-center justify-end gap-1" style={{ height: "100%" }}>
                    {/* Tooltip */}
                    <div className="absolute bottom-full mb-2 hidden group-hover:flex flex-col items-center z-10">
                      <div className="rounded-lg border border-[#e4d6bd] bg-white px-3 py-2 text-center shadow-xl">
                        <p className="text-[10px] text-[#8a7a5a]">{d.year}</p>
                        <p className="text-sm font-black text-[#1a1a1a]">₹{d.price}</p>
                        {d.growth && <p className="text-[10px] text-green-600 font-semibold">+{d.growth}%</p>}
                      </div>
                      <span className="h-2 w-2 rotate-45 border-b border-r border-[#e4d6bd] bg-white" style={{ marginTop: -4 }} />
                    </div>

                    {/* Bar */}
                    <div
                      className="w-full rounded-t-lg transition-all duration-300 group-hover:opacity-80"
                      style={{
                        height: `${heightPct}%`,
                        background: isLast ? goldGrad : "linear-gradient(180deg,#C9A84C66 0%,#C9A84C22 100%)",
                        border: isLast ? "1px solid #C9A84C" : "1px solid #C9A84C44",
                      }}
                    />
                    <p className="text-[8px] text-[#8a7a5a] sm:text-[9px]">{d.year}</p>
                  </div>
                );
              })}
            </div>

            <p className="mt-4 text-[10px] text-[#8a7a5a]">* 2025 projected. Data based on Shivamogga residential land market trends. Past performance is indicative, not guaranteed.</p>

            {/* Stats row */}
            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                { label: "2010 Price", value: "₹180/sqft" },
                { label: "2025 Price", value: "₹2,200/sqft" },
                { label: "CAGR",       value: "~18% p.a." },
                { label: "Total Growth", value: "1,122%" },
              ].map((s) => (
                <div key={s.label} className="rounded-xl border border-[#e4d6bd] bg-[#fffaf2] p-3 text-center">
                  <p className="text-[10px] uppercase tracking-widest text-[#8a7a5a]">{s.label}</p>
                  <p className="mt-1 font-black text-base text-[#1a1a1a]">{s.value}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CITY MILESTONES */}
        {activeTab === "milestones" && (
          <div className="rounded-2xl border border-[#e4d6bd] bg-white p-6 sm:p-8">
            <p className="mb-6 text-xs uppercase tracking-widest text-[#8a7a5a]">Key events that drove Shivamogga's real estate boom</p>
            <div className="relative">
              <div className="absolute left-[72px] top-0 h-full w-px bg-[#C9A84C]/30 sm:left-[88px]" />
              <div className="flex flex-col gap-6">
                {milestones.map((m) => (
                  <div key={m.year} className="flex items-start gap-4 sm:gap-6">
                    <div className="w-16 shrink-0 text-right sm:w-20">
                      <span className="font-black text-sm" style={{ background: goldGrad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                        {m.year}
                      </span>
                    </div>
                    <div className="relative z-10 mt-1 shrink-0">
                      <div className="size-3 rounded-full border-2 border-[#C9A84C] bg-[#fbf8f1]" />
                    </div>
                    <div className="flex-1 rounded-xl border border-[#e4d6bd] bg-[#fffaf2] p-4 hover:border-[#C9A84C]/50 transition-colors">
                      <p className="font-bold text-sm text-[#1a1a1a]">{m.event}</p>
                      <p className="mt-1 text-xs font-semibold text-green-700">{m.impact}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 rounded-xl border border-[#C9A84C]/40 bg-[#fffaf2] p-5 text-center">
              <p className="text-xs text-[#8a7a5a] mb-1">The next growth driver is already here</p>
              <p className="font-black text-lg text-[#1a1a1a]">
                IT Corridor + Airport ={" "}
                <span style={{ background: goldGrad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  Exponential Growth Ahead
                </span>
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
