import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[60vh] sm:min-h-screen overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.png"
          alt="NAK Developers Premium Community"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>

      {/* Gradient — left-heavy on all screen sizes, same as desktop */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/90 via-black/55 to-black/10" />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

      {/* Content — single layout for all screen sizes */}
      <div className="relative z-20 flex flex-col justify-between min-h-[60vh] sm:min-h-screen px-6 py-6 sm:px-10 md:px-16 lg:px-20 max-w-xl sm:max-w-2xl">

        {/* Logo */}
        <div>
          <Image
            src="/logo.png"
            alt="NAK Developers & Builders Logo"
            width={160}
            height={100}
            className="object-contain w-32 sm:w-36 md:w-44"
            priority
          />
        </div>

        {/* Headline */}
        <div className="flex flex-col gap-3 sm:gap-4">
          <Divider />

          <div className="flex flex-col gap-1">
            <p className="text-white text-xl sm:text-2xl md:text-3xl font-light tracking-widest uppercase">
              Crafting
            </p>
            <p
              className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-wide leading-none"
              style={{
                background: "linear-gradient(135deg, #F5D27A 0%, #C9A84C 40%, #A67C2A 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Premium
            </p>
            <p className="text-white text-xl sm:text-2xl md:text-3xl font-light tracking-widest uppercase">
              Communities
            </p>
          </div>

          <Divider />

          <div className="flex flex-col gap-1 mt-1">
            <p
              className="text-xs sm:text-sm tracking-[0.3em] uppercase font-medium"
              style={{ color: "#C9A84C" }}
            >
              Premium Residential Layout
            </p>
            <p className="text-white text-xl sm:text-xl md:text-2xl tracking-[0.25em] uppercase font-semibold">
              Shimoga
            </p>
          </div>

          <Divider />
        </div>

        {/* Bottom row */}
        <div className="flex items-center justify-end sm:hidden">
          <LocationBadge />
        </div>
        <div className="hidden sm:block" />
      </div>

      {/* Location badge — bottom right, desktop */}
      <div className="absolute bottom-8 right-6 sm:right-10 md:right-16 lg:right-20 z-20 hidden sm:flex">
        <LocationBadge />
      </div>
    </section>
  );
}

function Divider() {
  return (
    <div className="flex items-center gap-3">
      <span className="h-px w-8 bg-[#C9A84C]" />
      <span className="w-1.5 h-1.5 rotate-45 bg-[#C9A84C] inline-block" />
      <span className="h-px w-8 bg-[#C9A84C]" />
    </div>
  );
}

function LocationBadge() {
  return (
    <div className="flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/30 rounded-full px-4 py-2.5">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-4 h-4 text-white flex-shrink-0"
      >
        <path
          fillRule="evenodd"
          d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-2.078 3.698-5.141 3.698-9.319C20 5.372 16.418 2 12 2S4 5.372 4 10.008c0 4.178 1.754 7.24 3.699 9.319a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.144.742zM12 13a3 3 0 100-6 3 3 0 000 6z"
          clipRule="evenodd"
        />
      </svg>
      <span className="text-white text-xs font-semibold tracking-widest uppercase whitespace-nowrap">
        Matturu Road, Shimoga
      </span>
    </div>
  );
}
