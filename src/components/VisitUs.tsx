import Image from "next/image";

const PHONE = "9035022229";
const PHONE_DISPLAY = "+91 9035 022 229";
const EMAIL = "info@nakdevelopers.com";
const ADDRESS = "N.A.K. Complex, M.K.K. Main Road,\nKarnataka 577202";
const MAPS_URL = "https://www.google.com/maps/place/13%C2%B054'31.9%22N+75%C2%B034'43.3%22E/@13.908846,75.578686,17z/data=!3m1!4b1!4m4!3m3!8m2!3d13.908846!4d75.578686";
const WHATSAPP_URL = `https://wa.me/91${PHONE}?text=${encodeURIComponent("Hi, I'm interested in NAK Elite Enclave. Please share more details.")}`;

export default function VisitUs() {
  return (
    <section className="relative w-full overflow-hidden">

      {/* Background — hero-bg.png full cover */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.png"
          alt="NAK Elite Enclave"
          fill
          priority
          quality={90}
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>

      {/* Same left-heavy dark gradient as Hero */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/92 via-black/65 to-black/15" />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-20 flex flex-col min-h-[500px] sm:min-h-[520px] md:min-h-[560px] px-6 py-10 sm:px-10 md:px-14 lg:px-20 max-w-lg sm:max-w-xl">

        {/* Eyebrow */}
        <p className="text-[0.6rem] tracking-[0.4em] uppercase font-medium text-[#C9A84C] mb-4">
          Visit Our Project
        </p>

        {/* Project name */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase leading-none text-white tracking-tight mb-1">
          NAK Elite
        </h2>
        <h2
          className="text-4xl sm:text-5xl md:text-6xl font-black uppercase leading-none tracking-tight mb-5"
          style={{
            background: "linear-gradient(135deg, #F5D27A 0%, #C9A84C 40%, #A67C2A 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Enclave
        </h2>

        {/* Divider */}
        <div className="flex items-center gap-3 mb-6">
          <span className="h-px w-8 bg-[#C9A84C]" />
          <span className="w-1.5 h-1.5 rotate-45 bg-[#C9A84C] inline-block" />
          <span className="h-px w-8 bg-[#C9A84C]" />
        </div>

        {/* Contact items */}
        <div className="flex flex-col gap-4 mb-8">

          {/* Address */}
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-full border border-[#C9A84C]/50 flex items-center justify-center flex-shrink-0 mt-0.5">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-[#C9A84C]">
                <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-2.078 3.698-5.141 3.698-9.319C20 5.372 16.418 2 12 2S4 5.372 4 10.008c0 4.178 1.754 7.24 3.699 9.319a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.144.742zM12 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"/>
              </svg>
            </div>
            <div>
              <p className="text-white text-sm leading-snug whitespace-pre-line">{ADDRESS}</p>
            </div>
          </div>

          {/* Call */}
          <a href={`tel:+91${PHONE}`} className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-full border border-[#C9A84C]/50 flex items-center justify-center flex-shrink-0 group-hover:border-[#C9A84C] transition">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4 text-[#C9A84C]">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.1 1.18 2 2 0 012.08 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.11 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
              </svg>
            </div>
            <div>
              <p className="text-[#C9A84C] text-[0.6rem] tracking-widest uppercase font-bold mb-0.5">Call Us</p>
              <p className="text-white text-sm">{PHONE_DISPLAY}</p>
            </div>
          </a>

          {/* WhatsApp */}
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-full border border-[#C9A84C]/50 flex items-center justify-center flex-shrink-0 group-hover:border-[#C9A84C] transition">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-[#C9A84C]">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </div>
            <div>
              <p className="text-[#C9A84C] text-[0.6rem] tracking-widest uppercase font-bold mb-0.5">WhatsApp</p>
              <p className="text-white text-sm">{PHONE_DISPLAY}</p>
            </div>
          </a>

          {/* Email */}
          <a href={`mailto:${EMAIL}`} className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-full border border-[#C9A84C]/50 flex items-center justify-center flex-shrink-0 group-hover:border-[#C9A84C] transition">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4 text-[#C9A84C]">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="M2 7l10 7 10-7"/>
              </svg>
            </div>
            <div>
              <p className="text-[#C9A84C] text-[0.6rem] tracking-widest uppercase font-bold mb-0.5">Email Us</p>
              <p className="text-white text-sm">{EMAIL}</p>
            </div>
          </a>
        </div>

        {/* QR + Scan for location */}
        <div className="flex items-center gap-4">
          <a href={MAPS_URL} target="_blank" rel="noopener noreferrer"
            className="flex-shrink-0 hover:scale-105 transition">
            <div className="w-16 h-16 bg-white rounded-lg p-1.5 flex items-center justify-center">
              <img
                src="/nak-location-qr.svg"
                alt="Scan for Google Maps location"
                className="w-full h-full object-contain"
              />
            </div>
          </a>
          <div>
            <p className="text-[#C9A84C] text-[0.6rem] tracking-widest uppercase font-bold mb-1">Scan for Location</p>
            <p className="text-white/55 text-[0.6rem] leading-relaxed">Open in Google Maps<br />for easy directions</p>
          </div>
        </div>

        {/* Bottom tagline — over image area */}
      </div>

      {/* Bottom right tagline — visible on the image side */}
      <div className="absolute bottom-8 right-6 sm:right-10 md:right-16 lg:right-20 z-20 max-w-xs text-right hidden sm:block">
        <p className="text-white text-xl md:text-2xl font-light italic leading-snug mb-1">
          A Destination.
        </p>
        <p className="text-white text-xl md:text-2xl font-light italic leading-snug mb-4">
          A Decision for Generations.
        </p>
        <p className="text-white/60 text-xs leading-relaxed">
          Come explore NAK Elite Enclave and experience<br />
          thoughtful planning, premium infrastructure,<br />
          and a community designed for the future.
        </p>
      </div>
    </section>
  );
}
