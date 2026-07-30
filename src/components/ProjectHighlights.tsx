import Image from "next/image";

const highlights = [
  {
    image: "/prmiumum-infrasturue.png",
    number: "01",
    title: "PREMIUM INFRASTRUCTURE",
    sectionIcon: <InfraIcon />,
    features: [
      { icon: <RoadIcon />, label: "Wide Internal Roads" },
      { icon: <ElecIcon />, label: "Underground Electricity" },
      { icon: <WaterIcon />, label: "Water Supply" },
      { icon: <DrainIcon />, label: "Storm Water Drainage" },
      { icon: <PlotIcon />, label: "Demarcated Plots" },
    ],
  },
  {
    image: "/hero-bg.png",
    number: "02",
    title: "SAFE & SECURE COMMUNITY",
    sectionIcon: <ShieldIcon />,
    features: [
      { icon: <GateIcon />, label: "Gated Entrance" },
      { icon: <SecurityIcon />, label: "24/7 Security" },
      { icon: <CctvIcon />, label: "CCTV Surveillance" },
      { icon: <WallIcon />, label: "Boundary Wall" },
      { icon: <AccessIcon />, label: "Controlled Access" },
    ],
  },
  {
    image: "/greener-way.png",
    number: "03",
    title: "A GREENER WAY OF LIVING",
    sectionIcon: <TreeBigIcon />,
    features: [
      { icon: <ParkIcon />, label: "Landscaped Park" },
      { icon: <GreenIcon />, label: "Green Belt" },
      { icon: <WalkIcon />, label: "Walking Trails" },
      { icon: <PlayIcon />, label: "Children's Play Area" },
      { icon: <SpaceIcon />, label: "Open Spaces" },
    ],
  },
  {
    image: "/built-for-tommrow.png",
    number: "04",
    title: "BUILT FOR TOMORROW",
    sectionIcon: <LeafIcon />,
    features: [
      { icon: <RainIcon />, label: "Rainwater Harvesting" },
      { icon: <SolarIcon />, label: "Solar Street Lighting" },
      { icon: <EvIcon />, label: "EV Charging Ready" },
      { icon: <WasteIcon />, label: "Waste Management" },
      { icon: <SustainIcon />, label: "Sustainable Planning" },
    ],
  },
];

export default function ProjectHighlights() {
  return (
    <section className="w-full overflow-hidden bg-[#fbfaf7] text-[#1d2022]">

      {/* Section Header — left aligned */}
      <header className="px-5 pb-4 pt-10 text-left sm:pb-5 sm:pt-14">
        <p className="text-xs sm:text-sm tracking-[0.3em] uppercase font-medium text-[#8a7a5a] mb-3">
          Project Highlights
        </p>

        <h2 className="text-3xl sm:text-4xl md:text-[2.7rem] font-black uppercase leading-none text-[#1a1a1a] tracking-tight">
          Designed for Modern Living
        </h2>
        <h2
          className="text-3xl sm:text-4xl md:text-[2.7rem] font-black uppercase leading-none tracking-tight"
          style={{
            background: "linear-gradient(135deg, #F5D27A 0%, #C9A84C 40%, #A67C2A 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Built for a Better Tomorrow
        </h2>

        <div className="my-3 flex items-center gap-3">
          <span className="h-px w-8 bg-[#C9A84C]" />
          <span className="w-1.5 h-1.5 rotate-45 bg-[#C9A84C] inline-block" />
          <span className="h-px w-8 bg-[#C9A84C]" />
        </div>

        <p className="max-w-md text-sm leading-relaxed text-[#4a4030]">
          Every element of the community has been carefully planned to provide comfort,
          security and long-term value.
        </p>
      </header>

      {/* Rows */}
      <div className="flex flex-col px-5 pb-5">
        {highlights.map((item) => (
          <HighlightRow key={item.number} item={item} />
        ))}
      </div>
    </section>
  );
}

function HighlightRow({ item }: { item: (typeof highlights)[0] }) {
  return (
    <article className="flex w-full flex-col border-t border-[#e9e1d5] lg:h-[198px] lg:flex-row">

      {/* Image — mobile: short banner with overlay; desktop: left panel */}
      <div className="relative h-40 w-full shrink-0 overflow-hidden sm:h-52 lg:h-full lg:w-[54%] [clip-path:polygon(0_0,100%_0,96%_100%,0_100%)] lg:[clip-path:polygon(0_0,100%_0,96%_100%,0_100%)]">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover object-center"
          sizes="(max-width: 1023px) 100vw, 54vw"
        />
        {/* Mobile overlay: number + title on image */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent lg:hidden" />
        <div className="absolute bottom-3 left-4 flex items-baseline gap-2 lg:hidden">
          <span
            className="font-black text-2xl leading-none"
            style={{
              background: "linear-gradient(135deg, #F5D27A 0%, #C9A84C 40%, #A67C2A 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >{item.number}</span>
          <h3 className="font-black uppercase text-base leading-none text-white tracking-tight">{item.title}</h3>
        </div>
      </div>

      {/* Content */}
      <div className="flex min-w-0 flex-1 flex-col justify-center bg-[#fbfaf7] px-4 py-4 sm:px-6 sm:py-5 lg:px-4 xl:px-6">

        {/* Icon + number + title — desktop only */}
        <div className="mb-3 hidden items-center gap-4 lg:flex">
          <div className="flex size-16 shrink-0 items-center justify-center rounded-full border border-[#C9A84C]/60 text-[#C9A84C]">
            <span className="size-8">{item.sectionIcon}</span>
          </div>
          <div className="flex items-baseline gap-3">
            <p
              className="font-black text-2xl leading-none"
              style={{
                background: "linear-gradient(135deg, #F5D27A 0%, #C9A84C 40%, #A67C2A 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >{item.number}</p>
            <h3 className="font-black uppercase text-xl leading-none text-[#1a1a1a]">{item.title}</h3>
          </div>
        </div>

        {/* Mobile: icon row above features */}
        <div className="mb-3 flex items-center gap-3 lg:hidden">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-full border border-[#C9A84C]/60 text-[#C9A84C]">
            <span className="size-5">{item.sectionIcon}</span>
          </div>
          <span className="text-xs font-medium uppercase tracking-widest text-[#8a7a5a]">Features</span>
        </div>

        <div className="grid grid-cols-3 gap-2 sm:grid-cols-3 lg:grid-cols-5">
          {item.features.map((f) => (
            <div key={f.label} className="flex min-h-[68px] flex-col items-center justify-center rounded-xl border border-[#C9A84C]/30 px-1 py-2 text-center sm:min-h-[76px]">
              <div className="mb-1 size-4 text-[#C9A84C] sm:size-5">
                {f.icon}
              </div>
              <span className="text-[9px] font-medium leading-[1.25] text-[#4a4030] sm:text-[10px]">
                {f.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}

/* ── Section Icons (large) ── */
function InfraIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full"><path d="M5 21L7.5 3"/><path d="M19 21L16.5 3"/><line x1="12" y1="6" x2="12" y2="8" strokeLinecap="round"/><line x1="12" y1="11" x2="12" y2="13" strokeLinecap="round"/><line x1="12" y1="16" x2="12" y2="18" strokeLinecap="round"/></svg>;
}
function ShieldIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full"><path d="M12 2L4 6v6c0 5 3.5 9.7 8 11 4.5-1.3 8-6 8-11V6L12 2z"/><circle cx="12" cy="12" r="2.5"/></svg>;
}
function TreeBigIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full"><circle cx="12" cy="8" r="5"/><line x1="12" y1="13" x2="12" y2="21"/><line x1="9" y1="21" x2="15" y2="21"/></svg>;
}
function LeafIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full"><path d="M12 22V12"/><path d="M12 12C12 12 4 9 4 4c4 0 8 3 8 8z"/><path d="M12 12C12 12 20 9 20 4c-4 0-8 3-8 8z"/></svg>;
}

/* ── Feature Icons (small) ── */
function RoadIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full"><path d="M5 21L7.5 3"/><path d="M19 21L16.5 3"/><line x1="12" y1="6" x2="12" y2="8" strokeLinecap="round"/><line x1="12" y1="11" x2="12" y2="13" strokeLinecap="round"/><line x1="12" y1="16" x2="12" y2="18" strokeLinecap="round"/></svg>;
}
function ElecIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full"><path d="M13 2L4.5 13.5H11L10 22L19.5 10.5H13L13 2Z"/></svg>;
}
function WaterIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full"><path d="M12 2C12 2 5 10 5 15a7 7 0 0014 0c0-5-7-13-7-13z"/></svg>;
}
function DrainIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="12" cy="12" r="4"/><line x1="12" y1="3" x2="12" y2="8"/><line x1="12" y1="16" x2="12" y2="21"/><line x1="3" y1="12" x2="8" y2="12"/><line x1="16" y1="12" x2="21" y2="12"/></svg>;
}
function PlotIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full"><rect x="3" y="3" width="8" height="8"/><rect x="13" y="3" width="8" height="8"/><rect x="3" y="13" width="8" height="8"/><rect x="13" y="13" width="8" height="8"/></svg>;
}
function GateIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full"><rect x="2" y="4" width="3" height="16" rx="0.5"/><rect x="19" y="4" width="3" height="16" rx="0.5"/><path d="M5 8h5.5M5 12h5.5M5 16h5.5"/><path d="M13.5 8H19M13.5 12H19M13.5 16H19"/><line x1="11" y1="8" x2="11" y2="16"/><line x1="13" y1="8" x2="13" y2="16"/></svg>;
}
function SecurityIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full"><path d="M12 2L4 6v6c0 5 3.5 9.7 8 11 4.5-1.3 8-6 8-11V6L12 2z"/></svg>;
}
function CctvIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full"><path d="M2 8h12l3-3 3 3v5l-3 3-3-3H2V8z"/><line x1="9" y1="16" x2="9" y2="20"/><line x1="6" y1="20" x2="12" y2="20"/></svg>;
}
function WallIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full"><rect x="2" y="4" width="20" height="4"/><rect x="2" y="12" width="20" height="4"/><line x1="6" y1="8" x2="6" y2="12"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="18" y1="8" x2="18" y2="12"/></svg>;
}
function AccessIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/><circle cx="12" cy="16" r="1.5" fill="currentColor"/></svg>;
}
function ParkIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full"><circle cx="12" cy="8" r="4"/><circle cx="8" cy="12" r="3"/><circle cx="16" cy="12" r="3"/><line x1="12" y1="12" x2="12" y2="21"/></svg>;
}
function GreenIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full"><path d="M12 21C12 21 5 17 5 9a7 7 0 0114 0c0 8-7 12-7 12z"/><line x1="12" y1="21" x2="12" y2="9"/></svg>;
}
function WalkIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full"><circle cx="12" cy="4" r="1.5"/><path d="M9 9l1.5 3 3-1.5 2 4.5"/><path d="M7 20l2-4 3 2 2-4"/></svg>;
}
function PlayIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full"><path d="M4 20h16"/><path d="M7 20V10l5-6 5 6v10"/><line x1="10" y1="20" x2="10" y2="14"/><line x1="14" y1="20" x2="14" y2="14"/></svg>;
}
function SpaceIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>;
}
function RainIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full"><path d="M20 17.58A5 5 0 0018 8h-1.26A8 8 0 104 15.25"/><line x1="8" y1="19" x2="8" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/><line x1="16" y1="19" x2="16" y2="21"/></svg>;
}
function SolarIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full"><circle cx="12" cy="12" r="4"/><line x1="12" y1="2" x2="12" y2="4"/><line x1="12" y1="20" x2="12" y2="22"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="2" y1="12" x2="4" y2="12"/><line x1="20" y1="12" x2="22" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>;
}
function EvIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/><line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/></svg>;
}
function WasteIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 102.13-9.36L1 10"/><path d="M12 8v4l3 3"/></svg>;
}
function SustainIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full"><path d="M12 22V12"/><path d="M12 12C12 12 4 9 4 4c4 0 8 3 8 8z"/><path d="M12 12C12 12 20 9 20 4c-4 0-8 3-8 8z"/></svg>;
}

