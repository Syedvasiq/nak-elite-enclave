import Image from "next/image";

const floatingLabels = [
  { top: "8%",  left: "38%", title: "WIDE INTERNAL ROADS", sub: "9M & 12M ROADS",          icon: <RoadIcon /> },
  { top: "8%",  left: "65%", title: "24/7 SECURITY",       sub: "GATED COMMUNITY",          icon: <ShieldIcon /> },
  { top: "42%", left: "30%", title: "COMMERCIAL PLOTS",    sub: "PLOTS 1 - 5",              icon: <PlotIcon /> },
  { top: "38%", left: "72%", title: "LANDSCAPED PARK",     sub: "& OPEN SPACES",            icon: <TreeIcon /> },
  { top: "58%", left: "72%", title: "WATER SUPPLY",        sub: "& DRAINAGE SYSTEM",        icon: <WaterIcon /> },
  { top: "72%", left: "38%", title: "GRAND ENTRANCE",      sub: "12M MAIN ENTRY ROAD",      icon: <GateIcon /> },
];

const stats = [
  {
    number: "70",
    unit: "PREMIUM PLOTS",
    desc: "Well-planned residential plots for your dream home.",
    icon: <PlotIcon />,
  },
  {
    number: "12M",
    unit: "MAIN ENTRANCE ROAD",
    desc: "Grand entry with wide and smooth access.",
    icon: <RoadIcon />,
  },
  {
    number: "",
    unit: "LANDSCAPED PARK",
    desc: "Lush green spaces for relaxation and recreation.",
    icon: <TreeIcon />,
  },
  {
    number: "",
    unit: "STREET LIGHTS & UNDERGROUND ELECTRICITY",
    desc: "Modern infrastructure for a seamless living.",
    icon: <LightIcon />,
  },
  {
    number: "",
    unit: "WATER SUPPLY & DRAINAGE",
    desc: "Reliable systems for clean water and better living.",
    icon: <WaterIcon />,
  },
  {
    number: "",
    unit: "SAFE & SECURE ENVIRONMENT",
    desc: "Peace of mind with gated security and CCTV.",
    icon: <ShieldIcon />,
  },
];

export default function VisionOfTomorrow() {
  return (
    <section className="relative w-full bg-[#0d0d0d]">

      {/* ── TOP PART — image with overlays ── */}
      <div className="relative w-full" style={{ minHeight: "520px" }}>

        {/* Background sunset image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/layout-front-sun-set-view.png"
            alt="NAK Developers Vision of Tomorrow"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>

        {/* Dark overlay — heavier on left for readability */}
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/85 via-black/40 to-black/10" />
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/70 via-transparent to-transparent" />



        {/* Left text content */}
        <div className="relative z-20 flex flex-col justify-center min-h-[520px] px-6 py-10 sm:px-10 md:px-14 lg:px-20">
          <p className="text-[0.6rem] tracking-[0.35em] uppercase font-medium text-[#C9A84C] mb-3">
            &nbsp;
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white uppercase leading-tight mb-1">
            A Vision Of
          </h2>
          <h2
            className="text-5xl sm:text-6xl md:text-7xl font-black uppercase leading-none mb-4"
            style={{
              background: "linear-gradient(135deg, #F5D27A 0%, #C9A84C 40%, #A67C2A 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Tomorrow
          </h2>

          {/* Gold divider with leaf */}
          <div className="flex items-center gap-2 mb-4">
            <span className="h-px w-8 bg-[#C9A84C]" />
            <span className="text-[#C9A84C] w-4 h-4"><LeafIcon /></span>
            <span className="h-px w-8 bg-[#C9A84C]" />
          </div>

          <p className="text-xs sm:text-sm text-white/80 uppercase tracking-widest font-medium mb-1">
            A Masterfully Planned Community
          </p>
          <p className="text-xs sm:text-sm text-white/80 uppercase tracking-widest font-medium mb-4">
            For A{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #F5D27A 0%, #C9A84C 40%, #A67C2A 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Better Life
            </span>
          </p>

          <p className="text-xs sm:text-sm text-white/65 leading-relaxed max-w-xs">
            From wide roads and green spaces to modern infrastructure and secure living,
            every detail is designed for a vibrant and sustainable future.
          </p>
        </div>
      </div>

      {/* ── BOTTOM PART — dark stats bar ── */}
      <div className="bg-[#0f0d08] border-t border-[#C9A84C]/20">

        {/* "A Community That Has It All" — full width header on mobile */}
        <div className="px-6 py-6 sm:hidden border-b border-[#C9A84C]/15">
          <p className="text-xs font-bold uppercase tracking-widest text-white leading-tight mb-2">
            A Community That Has It All
          </p>
          <div className="flex items-center gap-2 mb-2">
            <span className="h-px w-6 bg-[#C9A84C]" />
            <span className="text-[#C9A84C] w-3 h-3"><LeafIcon /></span>
            <span className="h-px w-6 bg-[#C9A84C]" />
          </div>
          <p className="text-[0.6rem] text-white/50 leading-relaxed">
            Thoughtfully designed amenities and infrastructure that elevate everyday
            living and secure your future.
          </p>
        </div>

        {/* Stats grid — 2x3 on mobile, single row on desktop */}
        <div className="grid grid-cols-2 sm:hidden divide-x divide-y divide-[#C9A84C]/15">
          {stats.map((stat) => (
            <div key={stat.unit} className="flex flex-col items-center text-center px-4 py-6 gap-2">
              <span className="text-[#C9A84C] w-7 h-7">{stat.icon}</span>
              {stat.number && (
                <p className="text-2xl font-black leading-none"
                  style={{
                    background: "linear-gradient(135deg, #F5D27A 0%, #C9A84C 40%, #A67C2A 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}>
                  {stat.number}
                </p>
              )}
              <p className="text-[0.5rem] font-bold uppercase tracking-widest text-white leading-tight max-w-[90px]">
                {stat.unit}
              </p>
              <p className="text-[0.5rem] text-white/40 leading-relaxed max-w-[100px]">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Desktop — single row layout (unchanged) */}
        <div className="hidden sm:flex flex-row divide-x divide-[#C9A84C]/15">
          {/* First cell — community text */}
          <div className="flex flex-col justify-center px-6 py-8 w-[20%] px-8">
            <p className="text-xs font-bold uppercase tracking-widest text-white leading-tight mb-3">
              A Community<br />That Has It All
            </p>
            <div className="flex items-center gap-2 mb-3">
              <span className="h-px w-6 bg-[#C9A84C]" />
              <span className="text-[#C9A84C] w-3 h-3"><LeafIcon /></span>
              <span className="h-px w-6 bg-[#C9A84C]" />
            </div>
            <p className="text-[0.6rem] text-white/50 leading-relaxed">
              Thoughtfully designed amenities and infrastructure that elevate everyday
              living and secure your future.
            </p>
          </div>

          {/* 5 stat cells */}
          {stats.slice(0, 5).map((stat) => (
            <div key={stat.unit} className="flex flex-col justify-center items-center text-center px-4 py-8 flex-1 gap-3">
              <span className="text-[#C9A84C] w-8 h-8">{stat.icon}</span>
              {stat.number && (
                <p className="text-3xl md:text-4xl font-black leading-none"
                  style={{
                    background: "linear-gradient(135deg, #F5D27A 0%, #C9A84C 40%, #A67C2A 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}>
                  {stat.number}
                </p>
              )}
              <p className="text-[0.55rem] font-bold uppercase tracking-widest text-white leading-tight max-w-[100px]">
                {stat.unit}
              </p>
              <p className="text-[0.55rem] text-white/45 leading-relaxed max-w-[110px]">
                {stat.desc}
              </p>
            </div>
          ))}

          {/* Last stat */}
          <div className="flex flex-col justify-center items-center text-center px-4 py-8 flex-1 gap-3">
            <span className="text-[#C9A84C] w-8 h-8"><ShieldIcon /></span>
            <p className="text-[0.55rem] font-bold uppercase tracking-widest text-white leading-tight max-w-[100px]">
              Safe & Secure Environment
            </p>
            <p className="text-[0.55rem] text-white/45 leading-relaxed max-w-[110px]">
              Peace of mind with gated security and CCTV.
            </p>
          </div>
        </div>

        {/* Bottom tagline */}
        <div className="flex flex-wrap items-center justify-center gap-3 py-4 border-t border-[#C9A84C]/15 px-4">
          {["WELL PLANNED", "WELL CONNECTED", "WELL PROTECTED", "WELL WORTH IT"].map((tag, i) => (
            <div key={tag} className="flex items-center gap-3">
              {i > 0 && <span className="w-1 h-1 rounded-full bg-[#C9A84C]" />}
              <span className="text-[0.55rem] tracking-[0.2em] uppercase text-[#C9A84C] font-semibold whitespace-nowrap">
                {tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Icons ── */
function RoadIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full"><path d="M5 21L7.5 3"/><path d="M19 21L16.5 3"/><line x1="12" y1="6" x2="12" y2="8" strokeLinecap="round"/><line x1="12" y1="11" x2="12" y2="13" strokeLinecap="round"/><line x1="12" y1="16" x2="12" y2="18" strokeLinecap="round"/></svg>;
}
function ShieldIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full"><path d="M12 2L4 6v6c0 5 3.5 9.7 8 11 4.5-1.3 8-6 8-11V6L12 2z"/><circle cx="12" cy="12" r="2" fill="currentColor"/></svg>;
}
function PlotIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full"><rect x="3" y="3" width="8" height="8"/><rect x="13" y="3" width="8" height="8"/><rect x="3" y="13" width="8" height="8"/><rect x="13" y="13" width="8" height="8"/></svg>;
}
function TreeIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full"><circle cx="12" cy="8" r="5"/><line x1="12" y1="13" x2="12" y2="21"/><line x1="9" y1="21" x2="15" y2="21"/></svg>;
}
function WaterIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full"><path d="M12 2C12 2 5 10 5 15a7 7 0 0014 0c0-5-7-13-7-13z"/></svg>;
}
function GateIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full"><rect x="2" y="4" width="3" height="16" rx="0.5"/><rect x="19" y="4" width="3" height="16" rx="0.5"/><path d="M5 8h5.5M5 12h5.5M5 16h5.5"/><path d="M13.5 8H19M13.5 12H19M13.5 16H19"/></svg>;
}
function LightIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full"><line x1="12" y1="2" x2="12" y2="6"/><path d="M12 6a4 4 0 100 8 4 4 0 000-8z"/><line x1="12" y1="14" x2="12" y2="22"/><line x1="9" y1="19" x2="15" y2="19"/></svg>;
}
function LeafIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full"><path d="M12 22V12"/><path d="M12 12C12 12 4 9 4 4c4 0 8 3 8 8z"/><path d="M12 12C12 12 20 9 20 4c-4 0-8 3-8 8z"/></svg>;
}
