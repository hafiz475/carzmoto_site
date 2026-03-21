import { useEffect, useRef } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WA_LINK = 'https://wa.me/918072574682';

export default function Offer() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll('.reveal, .reveal-scale, .reveal-left').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="offer" className="py-24 relative overflow-hidden bg-carbon-900 border-y border-brand-gold/10" ref={sectionRef}>
      {/* Dynamic gradient background */}
      <div className="absolute inset-0 bg-dark-gold-gradient opacity-50 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none blur-[120px] opacity-20"
        style={{ background: 'radial-gradient(circle, #DAA520 0%, #B8860B 50%, transparent 80%)' }} />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 grid-overlay opacity-30 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 text-center">

        {/* Header Ribbon */}
        <div className="reveal inline-flex items-center gap-3 px-6 py-2.5 mb-10 rounded-full border shadow-[0_0_20px_rgba(218,165,32,0.15)] bg-carbon-950/80 backdrop-blur"
          style={{ borderColor: 'rgba(218,165,32,0.4)', color: '#FFD700' }}>
          <svg className="w-4 h-4 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
          <span className="text-xs font-black tracking-[0.25em] uppercase">Limited Time Upgrade Promo</span>
          <svg className="w-4 h-4 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
        </div>

        {/* Main Price Headings */}
        <h2 className="reveal font-rajdhani font-black text-white leading-tight mb-2" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}>
          Packages Starting
        </h2>
        <div className="reveal-scale font-rajdhani font-black tracking-tighter shimmer-gold glow-gold-text mb-16"
          style={{ fontSize: 'clamp(5.5rem, 15vw, 11rem)', lineHeight: 0.85 }}
        >
          ₹1999
        </div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-3 gap-6 mb-16 max-w-4xl mx-auto">
          {[
            { tag: '01', title: 'Flawless Fitment', desc: 'Expert installation at no extra cost' },
            { tag: '02', title: '1-Year Warranty', desc: 'On all Android & Audio hardware' },
            { tag: '03', title: 'Doorstep Service', desc: 'Convenience at your location*' },
          ].map((item, i) => (
            <div key={i} className="reveal-left bg-carbon-950/80 backdrop-blur p-7 rounded-2xl border border-brand-gold/20 transition-all duration-300 hover:scale-105 hover:border-brand-gold/60 hover:shadow-[0_0_30px_rgba(218,165,32,0.15)] group"
              style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="text-brand-gold-dim font-black text-4xl mb-4 opacity-40 group-hover:opacity-100 transition-opacity duration-300">{item.tag}</div>
              <h4 className="text-white font-rajdhani font-bold text-xl mb-2">{item.title}</h4>
              <p className="text-gray-400 text-sm font-light leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="reveal mt-8 flex flex-col items-center">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col sm:flex-row items-center justify-center gap-3 font-rajdhani font-black tracking-wide text-xl sm:text-2xl px-10 py-5 sm:py-6 rounded-full text-carbon-950 transition-all duration-300 hover:scale-110 btn-glow-gold"
            style={{ background: 'linear-gradient(135deg, #FFD700 0%, #DAA520 100%)' }}
            onClick={() => typeof fbq !== 'undefined' && fbq('track', 'Lead')}
          >
            Claim Offer on WhatsApp
            <FaWhatsapp className="w-6 h-6 sm:w-8 sm:h-8 group-hover:rotate-12 transition-transform duration-300" />
          </a>
          <p className="text-gray-500 text-sm mt-6 font-light">Fast replies guaranteed. Secure your spot directly on WhatsApp.</p>
        </div>
      </div>
    </section>
  );
}
