import heroBg from '../assets/hero-bg.png';

const WA_LINK = 'https://wa.me/918072574682';

function handleWAClick() {
  if (typeof fbq !== 'undefined') fbq('track', 'Lead');
  window.open(WA_LINK, '_blank', 'noopener,noreferrer');
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90 z-10" />

      {/* Red glow radial in center-bottom */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] z-10 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(255,26,26,0.18) 0%, transparent 70%)',
        }}
      />

      {/* Animated grid lines */}
      <div
        className="absolute inset-0 z-10 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,26,26,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,26,26,0.3) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        {/* Eyebrow tag */}
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full glass glow-border-red text-sm font-medium text-red-400 tracking-widest uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
          Premium Car Accessories — Chennai
        </div>

        {/* Heading */}
        <h1 className="font-rajdhani font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-tight mb-6">
          <span className="gradient-text">Upgrade Your</span>
          <br />
          <span className="text-white">Car Experience</span>
          <span className="ml-3">🚗🔥</span>
        </h1>

        {/* Sub-heading */}
        <p className="text-gray-300 text-lg sm:text-xl md:text-2xl font-light mb-10 max-w-2xl mx-auto leading-relaxed">
          Premium Seat Covers, Android Systems, Ambient Lighting & More
          <span className="text-red-400 font-semibold"> in Chennai</span>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={handleWAClick}
            className="group relative flex items-center gap-3 bg-green-500 hover:bg-green-400 text-white font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 btn-glow-green"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Chat on WhatsApp
          </button>
          <a
            href="#services"
            className="flex items-center gap-2 text-gray-300 hover:text-white font-semibold text-base border border-white/20 px-7 py-4 rounded-full hover:border-red-500/50 transition-all duration-300"
          >
            Explore Services
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>

        {/* Stats row */}
        <div className="mt-16 grid grid-cols-3 gap-6 max-w-lg mx-auto">
          {[
            { value: '500+', label: 'Cars Done' },
            { value: '4.9★', label: 'Avg Rating' },
            { value: '₹1999', label: 'Starting At' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-black text-red-400 glow-red-text">{stat.value}</div>
              <div className="text-gray-500 text-xs sm:text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-gray-500">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-0.5 h-10 bg-gradient-to-b from-gray-500 to-transparent" />
      </div>
    </section>
  );
}
