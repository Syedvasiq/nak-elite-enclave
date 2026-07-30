import Image from "next/image";

export default function MasterPlan() {
  return (
    <>
      {/* ── DESKTOP ── */}
      <section className="hidden sm:flex w-full bg-[#f0ebe0] overflow-hidden">

        {/* LEFT — solid cream panel with text */}
        <div className="flex-none w-[25%] lg:w-[24%] bg-[#f0ebe0] flex flex-col justify-center px-8 md:px-10 lg:px-12 py-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-8 bg-[#C9A84C]" />
            <span className="w-1.5 h-1.5 rotate-45 bg-[#C9A84C] inline-block" />
            <span className="h-px w-8 bg-[#C9A84C]" />
          </div>

          <p className="text-[0.6rem] tracking-[0.35em] uppercase font-medium text-[#9a8a6a] mb-5">
            Master Plan
          </p>

          <div className="flex flex-col leading-[1.05] mb-5">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1a1a1a]">Thoughtfully</h2>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1a1a1a]">Planned.</h2>
            <h2
              className="text-2xl md:text-3xl lg:text-4xl font-bold"
              style={{
                background: "linear-gradient(135deg, #F5D27A 0%, #C9A84C 40%, #A67C2A 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Beautifully
            </h2>
            <h2
              className="text-2xl md:text-3xl lg:text-4xl font-bold"
              style={{
                background: "linear-gradient(135deg, #F5D27A 0%, #C9A84C 40%, #A67C2A 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Connected.
            </h2>
          </div>

          <div className="flex items-center gap-3 mb-5">
            <span className="h-px w-8 bg-[#C9A84C]" />
            <span className="w-1.5 h-1.5 rotate-45 bg-[#C9A84C] inline-block" />
            <span className="h-px w-8 bg-[#C9A84C]" />
          </div>

          <p className="text-xs md:text-sm text-[#5a4e3a] leading-relaxed">
            Every plot, road, green space, and commercial frontage has been carefully
            planned to create a modern residential community.
          </p>
        </div>

        {/* RIGHT — image column with label cards above and below */}
        <div className="flex-1 flex flex-col bg-[#f0ebe0] pt-5 pb-5 pr-6">

          {/* Top label cards — above the image */}
          <div className="flex justify-around items-end px-2 gap-3 mb-0">
            <TopCard title="COMMERCIAL FRONTAGE" sub="Plots 1 - 5" icon={<BuildingIcon />} />
            <TopCard title="RESIDENTIAL PLOTS" sub="1 - 62" icon={<HouseIcon />} />
            <TopCard title="12m MAIN ROAD" sub="" icon={<RoadIcon />} />
          </div>

          {/* The layout image — aspect ratio preserves full image without cropping */}
          <div className="relative w-full rounded-sm overflow-hidden" style={{ aspectRatio: "16/7" }}>
            <Image
              src="/layout.png"
              alt="NAK Developers Master Plan Layout"
              fill
              priority
              className="object-cover object-center"
              sizes="75vw"
            />
          </div>

          {/* Bottom label cards — below the image */}
          <div className="flex justify-around items-start px-2 gap-3 mt-0">
            <BottomCard title="GRAND ENTRANCE" sub="" icon={<GateIcon />} />
            <BottomCard title="GREEN BELT" sub="" icon={<LeafIcon />} />
            <BottomCard title="LANDSCAPED PARK" sub="" icon={<TreeIcon />} />
            <BottomCard title="9m INTERNAL ROAD" sub="" icon={<RoadIcon />} />
          </div>
        </div>
      </section>

      {/* ── MOBILE — content on top, image below ── */}
      <section className="sm:hidden w-full bg-[#f0ebe0] overflow-hidden">

        {/* Text content — full width */}
        <div className="w-full px-6 pt-8 pb-4">
          <div className="flex items-center gap-3 mb-3">
            <span className="h-px w-8 bg-[#C9A84C]" />
            <span className="w-1.5 h-1.5 rotate-45 bg-[#C9A84C] inline-block" />
            <span className="h-px w-8 bg-[#C9A84C]" />
          </div>

          <p className="text-[0.6rem] tracking-[0.35em] uppercase font-medium text-[#9a8a6a] mb-3">
            Master Plan
          </p>

          <div className="flex flex-col mb-4">
            <h2 className="text-3xl font-bold leading-tight text-[#1a1a1a]">Thoughtfully Planned.</h2>
            <h2
              className="text-3xl font-bold leading-tight"
              style={{
                background: "linear-gradient(135deg, #F5D27A 0%, #C9A84C 40%, #A67C2A 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Beautifully Connected.
            </h2>
          </div>

          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-8 bg-[#C9A84C]" />
            <span className="w-1.5 h-1.5 rotate-45 bg-[#C9A84C] inline-block" />
            <span className="h-px w-8 bg-[#C9A84C]" />
          </div>

          <p className="text-sm text-[#4a4030] leading-relaxed">
            Every plot, road, green space, and commercial frontage has been carefully
            planned to create a modern residential community.
          </p>
        </div>

        {/* Top label cards — compact for mobile, no overflow */}
        <div className="grid grid-cols-3 gap-1.5 px-3 pb-0 bg-[#f0ebe0]">
          <MobileCard title="COMMERCIAL FRONTAGE" sub="Plots 1-5" icon={<BuildingIcon />} />
          <MobileCard title="RESIDENTIAL PLOTS" sub="1-62" icon={<HouseIcon />} />
          <MobileCard title="12m MAIN ROAD" sub="" icon={<RoadIcon />} />
        </div>
        {/* connector lines */}
        <div className="grid grid-cols-3 gap-1.5 px-3 bg-[#f0ebe0]">
          {[0,1,2].map(i => (
            <div key={i} className="flex justify-center">
              <div className="w-px h-4 bg-[#C9A84C]/60" />
            </div>
          ))}
        </div>

        {/* Image — full width */}
        <div className="relative w-full" style={{ aspectRatio: "16/9" }}>
          <Image
            src="/layout.png"
            alt="NAK Developers Master Plan Layout"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>

        {/* connector lines */}
        <div className="grid grid-cols-4 gap-1.5 px-3 bg-[#f0ebe0]">
          {[0,1,2,3].map(i => (
            <div key={i} className="flex justify-center">
              <div className="w-px h-4 bg-[#C9A84C]/60" />
            </div>
          ))}
        </div>
        {/* Bottom label cards */}
        <div className="grid grid-cols-4 gap-1.5 px-3 pb-6 bg-[#f0ebe0]">
          <MobileCard title="GRAND ENTRANCE" sub="" icon={<GateIcon />} />
          <MobileCard title="GREEN BELT" sub="" icon={<LeafIcon />} />
          <MobileCard title="LANDSCAPED PARK" sub="" icon={<TreeIcon />} />
          <MobileCard title="9m INTERNAL ROAD" sub="" icon={<RoadIcon />} />
        </div>
      </section>
    </>
  );
}

/* Mobile label card — fits inside grid cell, no overflow */
function MobileCard({ icon, title, sub }: { icon: React.ReactNode; title: string; sub: string }) {
  return (
    <div className="flex flex-col items-center gap-1 bg-[#1c1c1c] border border-[#C9A84C]/35 text-white rounded px-2 py-2 w-full">
      <span className="text-[#C9A84C] flex-shrink-0 w-4 h-4">{icon}</span>
      <div className="flex flex-col items-center text-center">
        <span className="text-[0.45rem] tracking-wide uppercase font-bold text-[#C9A84C] leading-tight">
          {title}
        </span>
        {sub && <span className="text-[0.4rem] text-white/65 leading-tight mt-0.5">{sub}</span>}
      </div>
    </div>
  );
}

/* Top card — connector line below */
function TopCard({ icon, title, sub }: { icon: React.ReactNode; title: string; sub: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center gap-2 bg-[#1c1c1c] border border-[#C9A84C]/40 text-white rounded px-3 py-2.5 shadow-lg">
        <span className="text-[#C9A84C] flex-shrink-0 w-6 h-6">{icon}</span>
        <div className="flex flex-col">
          <span className="text-[0.6rem] tracking-[0.1em] uppercase font-bold text-[#C9A84C] leading-tight whitespace-nowrap">
            {title}
          </span>
          {sub && <span className="text-[0.55rem] text-white/70 leading-tight mt-0.5">{sub}</span>}
        </div>
      </div>
      {/* Line going down to image */}
      <div className="w-px h-8 bg-[#C9A84C]/70" />
    </div>
  );
}

/* Bottom card — connector line above */
function BottomCard({ icon, title, sub }: { icon: React.ReactNode; title: string; sub: string }) {
  return (
    <div className="flex flex-col items-center">
      {/* Line going up to image */}
      <div className="w-px h-8 bg-[#C9A84C]/70" />
      <div className="flex items-center gap-2 bg-[#1c1c1c] border border-[#C9A84C]/40 text-white rounded px-3 py-2.5 shadow-lg">
        <span className="text-[#C9A84C] flex-shrink-0 w-6 h-6">{icon}</span>
        <div className="flex flex-col">
          <span className="text-[0.6rem] tracking-[0.1em] uppercase font-bold text-[#C9A84C] leading-tight whitespace-nowrap">
            {title}
          </span>
          {sub && <span className="text-[0.55rem] text-white/70 leading-tight mt-0.5">{sub}</span>}
        </div>
      </div>
    </div>
  );
}

/* ── Icons ── */
function BuildingIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
      <rect x="3" y="4" width="7" height="17" rx="0.5" />
      <rect x="14" y="9" width="7" height="12" rx="0.5" />
      <circle cx="6.5" cy="8" r="0.6" fill="currentColor" />
      <circle cx="6.5" cy="12" r="0.6" fill="currentColor" />
      <circle cx="6.5" cy="16" r="0.6" fill="currentColor" />
      <circle cx="17.5" cy="13" r="0.6" fill="currentColor" />
      <circle cx="17.5" cy="17" r="0.6" fill="currentColor" />
    </svg>
  );
}

function HouseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
      <path d="M3 10.5L12 3l9 7.5" />
      <rect x="5" y="10" width="14" height="11" rx="0.5" />
      <rect x="9.5" y="15" width="5" height="6" />
    </svg>
  );
}

function RoadIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
      <path d="M5 21L7.5 3" />
      <path d="M19 21L16.5 3" />
      <line x1="12" y1="6" x2="12" y2="8" strokeLinecap="round" />
      <line x1="12" y1="11" x2="12" y2="13" strokeLinecap="round" />
      <line x1="12" y1="16" x2="12" y2="18" strokeLinecap="round" />
    </svg>
  );
}

function GateIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
      <rect x="2" y="4" width="3" height="16" rx="0.5" />
      <rect x="19" y="4" width="3" height="16" rx="0.5" />
      <path d="M5 8h5.5M5 12h5.5M5 16h5.5" />
      <path d="M13.5 8H19M13.5 12H19M13.5 16H19" />
      <line x1="11" y1="8" x2="11" y2="16" />
      <line x1="13" y1="8" x2="13" y2="16" />
    </svg>
  );
}

function LeafIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
      <path d="M12 21C12 21 5 17 5 9a7 7 0 0114 0c0 8-7 12-7 12z" />
      <line x1="12" y1="21" x2="12" y2="9" />
    </svg>
  );
}

function TreeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
      <path d="M12 3L7.5 10H10L6 17H11V21H13V17H18L14 10H16.5L12 3Z" />
    </svg>
  );
}
