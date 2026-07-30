import Image from "next/image";

export default function AboutUs() {
  return (
    <section className="relative w-full h-[60vh] sm:min-h-screen overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/about-us-bg.png"
          alt="NAK Developers residential layout aerial view"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>

      {/* Gradient — left-heavy cream on all screen sizes, same approach as Hero */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            "linear-gradient(to right, #ede8de 0%, #ede8de 38%, #ede8de90 48%, transparent 60%)",
        }}
      />
      {/* Subtle bottom fade */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background: "linear-gradient(to top, #ede8de40 0%, transparent 30%)",
        }}
      />

      {/* NK watermark — bottom left */}
      <div className="absolute bottom-0 left-0 z-20 select-none pointer-events-none overflow-hidden">
        <span
          className="block text-[8rem] sm:text-[12rem] md:text-[16rem] font-black tracking-tighter leading-none"
          style={{ color: "#C9A84C", opacity: 0.12 }}
        >
          NK
        </span>
      </div>

      {/* Content — single unified layout for all screen sizes, same as Hero */}
      <div className="relative z-30 flex flex-col justify-between h-[60vh] sm:min-h-screen px-6 py-6 sm:px-10 md:px-16 lg:px-20 max-w-xl sm:max-w-2xl">

        {/* Top spacer — mirrors Hero's logo slot */}
        <div />

        {/* Main content — vertically centered like Hero's headline block */}
        <div className="flex flex-col gap-3 sm:gap-4">

          {/* Eyebrow */}
          <p className="text-xs sm:text-sm tracking-[0.3em] uppercase font-medium text-[#8a7a5a]">
            A Place To
          </p>

          {/* Headline */}
          <div className="flex flex-col gap-0.5">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase leading-none text-[#1a1a1a] tracking-tight">
              Build Your
            </h2>
            <h2
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase leading-none tracking-tight"
              style={{
                background: "linear-gradient(135deg, #F5D27A 0%, #C9A84C 40%, #A67C2A 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Future
            </h2>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#C9A84C]" />
            <span className="w-1.5 h-1.5 rotate-45 bg-[#C9A84C] inline-block" />
            <span className="h-px w-8 bg-[#C9A84C]" />
          </div>

          {/* Body */}
          <p className="text-sm sm:text-sm md:text-base text-[#4a4030] leading-relaxed max-w-xs sm:max-w-sm md:max-w-md">
            Thoughtfully planned residential plots that blend modern infrastructure,
            lush green spaces, and a prime location to create long-term value for you
            and your family.
          </p>
        </div>

        {/* Bottom spacer — mirrors Hero's bottom row */}
        <div />
      </div>
    </section>
  );
}
