import { useState, useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WA_LINK = 'https://wa.me/918072574682';

function handleWAClick() {
  if (typeof fbq !== 'undefined') fbq('track', 'Lead');
  window.open(WA_LINK, '_blank', 'noopener,noreferrer');
}

/* Animated floating particle dots - pure gold theme */
function Particles() {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    delay: Math.random() * 5,
    dur: Math.random() * 4 + 4,
    color: i % 2 === 0 ? '#DAA520' : '#FFD700',
  }));
  return (
    <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            background: p.color,
            opacity: 0.5,
            animation: `particlePulse ${p.dur}s ${p.delay}s ease-in-out infinite alternate`,
            boxShadow: `0 0 ${p.size * 4}px ${p.color}`,
          }}
        />
      ))}
      <style>{`
        @keyframes particlePulse {
          0%   { opacity: 0.1; transform: translateY(0px) scale(0.8); }
          100% { opacity: 0.8; transform: translateY(-20px) scale(1.3); }
        }
      `}</style>
    </div>
  );
}

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-carbon-900"
    >
      {/* ── Matte Black & Gold CSS Background Focus ── */}
      {/* Base deep radial gradient */}
      <div className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 50% 30%, #1a1a1a 0%, #0a0a0a 60%, #000000 100%)'
        }}
      />
      {/* Subtle gold spotlight behind logo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] w-[1000px] h-[600px] rounded-full pointer-events-none opacity-20 blur-[100px]"
        style={{ background: 'radial-gradient(circle, #DAA520 0%, transparent 70%)' }}
      />
      {/* Bottom accent glow */}
      <div className="absolute bottom-0 left-0 right-0 h-64 pointer-events-none opacity-30 blur-3xl"
        style={{ background: 'radial-gradient(ellipse 80% 100% at 50% 100%, #B8860B 0%, transparent 70%)' }}
      />

      {/* Luxury Grid Overlay */}
      <div className="absolute inset-0 grid-overlay opacity-30 pointer-events-none" />

      {/* Gold Particles */}
      <Particles />

      {/* ── Main Content ── */}
      <div className="relative z-20 flex flex-col items-center text-center px-4 w-full max-w-[90vw] md:max-w-6xl mx-auto pt-16">

        {/* ── MASSIVE LOGO ── */}
        <div
          className={`w-full max-w-4xl md:max-w-5xl mx-auto mb-8 transition-all duration-1000 ${loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
          style={{ transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)' }}
        >
          <div className="relative w-full flex justify-center">
            {/* Extremely subtle halo */}
            <div className="absolute inset-0 rounded-full blur-[80px] pointer-events-none opacity-30"
              style={{ background: 'radial-gradient(circle, #DAA520 0%, transparent 60%)', transform: 'scale(1.1)' }}
            />
            <img
              src={`${import.meta.env.BASE_URL}assets/company_logo.png`}
              alt="CARZ MOTO"
              className="logo-blend relative z-10 w-full h-auto max-h-[50vh] object-contain drop-shadow-[0_0_25px_rgba(218,165,32,0.4)] animate-logo-entrance"
            />
          </div>
        </div>

        {/* Sub-heading / Tagline */}
        <p
          className={`text-gray-400 mb-12 max-w-2xl leading-relaxed transition-all duration-700 delay-300 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          style={{ fontSize: 'clamp(1rem, 2.5vw, 1.25rem)' }}
        >
          Premium Seat Covers, Android Systems, Ambient Lighting & High-End Audio.
          <br className="hidden sm:block" />
          <span className="shimmer-gold font-medium tracking-wide"> Elevated Customization in Chennai.</span>
        </p>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-5 mb-16 transition-all duration-700 delay-500 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          {/* WhatsApp Primary */}
          <button
            onClick={handleWAClick}
            className="group flex items-center gap-3 text-carbon-950 font-black tracking-wide px-8 py-4 sm:py-5 rounded-full text-base sm:text-lg transition-all duration-300 hover:scale-[1.03] btn-glow-gold"
            style={{ background: 'linear-gradient(135deg, #FFD700, #DAA520)' }}
          >
            <FaWhatsapp className="w-6 h-6 sm:w-7 sm:h-7" />
            BOOK YOUR CRUISE
          </button>

          {/* Secondary Explore */}
          <a
            href="#services"
            className="group flex items-center gap-2 font-semibold px-8 py-4 sm:py-5 rounded-full text-sm sm:text-base border transition-all duration-300 hover:scale-[1.03]"
            style={{
              background: 'rgba(218,165,32,0.05)',
              borderColor: 'rgba(218,165,32,0.4)',
              color: '#DAA520',
            }}
          >
            Explore Upgrades
            <svg className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>

        {/* Stats Row */}
        <div
          className={`grid grid-cols-3 gap-4 sm:gap-10 max-w-xl mx-auto w-full transition-all duration-700 delay-[600ms] ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          {[
            { value: '500+', label: 'Cars Upgraded' },
            { value: '4.9 ★', label: 'Client Rating' },
            { value: '₹1999', label: 'Starting At' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                className="font-rajdhani font-black text-3xl sm:text-4xl shimmer-gold mb-1"
              >
                {stat.value}
              </div>
              <div className="text-gray-500 text-[10px] sm:text-xs tracking-[0.2em] font-medium uppercase">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
        <span className="text-brand-gold-dim text-[9px] uppercase tracking-[0.3em] font-bold">Discover</span>
        <div
          className="w-5 h-8 rounded-full border border-brand-gold/30 flex items-start justify-center pt-1.5 opacity-80"
        >
          <div
            className="w-1 h-2 rounded-full bg-brand-gold-light"
            style={{ animation: 'scrollDot 1.8s ease-in-out infinite' }}
          />
        </div>
        <style>{`
          @keyframes scrollDot {
            0%, 100% { transform: translateY(0); opacity: 1; }
            50%       { transform: translateY(8px); opacity: 0.3; }
          }
        `}</style>
      </div>
    </section>
  );
}
