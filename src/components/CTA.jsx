import { useEffect, useRef } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WA_LINK = 'https://wa.me/918072574682';

export default function CTA() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll('.reveal, .reveal-scale').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 bg-black relative overflow-hidden" ref={sectionRef}>
      {/* Glow rings in background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] sm:w-[800px] sm:h-[800px] rounded-full border border-brand-gold/10 animate-ping-slow pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] rounded-full border border-brand-gold/20 animate-ping-slow pointer-events-none" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] rounded-full bg-brand-gold/5 blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center">

        <h2 className="reveal font-rajdhani font-black text-4xl sm:text-5xl md:text-6xl text-white mb-6 leading-tight">
          Ready for a <span className="gradient-text">Premium Upgrade</span>?
        </h2>
        <p className="reveal text-gray-400 text-base sm:text-lg mb-14 max-w-2xl mx-auto font-light leading-relaxed">
          Don't settle for basic. Give your car the luxury treatment it deserves. Connect with us on WhatsApp to craft your perfect interior.
        </p>

        {/* Big CTA Button */}
        <div className="reveal-scale relative group inline-block">
          {/* Animated glow blur behind button */}
          <div className="absolute -inset-1 rounded-full blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500"
            style={{ background: 'linear-gradient(135deg, #FFD700, #DAA520)', animation: 'btnPulseGold 2.5s infinite' }}
          />

          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex items-center gap-4 bg-carbon-950 text-white font-rajdhani font-bold text-xl sm:text-2xl px-10 py-5 sm:py-6 rounded-full overflow-hidden border border-brand-gold/30 hover:border-brand-gold/60 transition-colors"
            onClick={() => typeof fbq !== 'undefined' && fbq('track', 'Lead')}
          >
            {/* Button internal gradient hover effect */}
            <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500"
              style={{ background: 'linear-gradient(135deg, #FFD700, #B8860B)' }}
            />

            <FaWhatsapp className="relative z-10 w-6 h-6 sm:w-8 sm:h-8 text-brand-gold-bright drop-shadow-[0_0_8px_rgba(255,215,0,0.5)] group-hover:scale-110 transition-transform duration-300" />
            <span className="relative z-10 tracking-wide text-brand-gold-light">Reserve Your Spot</span>
          </a>
        </div>

        {/* Small Trust Badges */}
        <div className="reveal flex flex-wrap justify-center gap-6 sm:gap-12 mt-16 text-sm text-gray-500 font-medium">
          <div className="flex items-center gap-2.5">
            <svg className="w-5 h-5 text-brand-gold-dim" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            Certified Experts
          </div>
          <div className="flex items-center gap-2.5">
            <svg className="w-5 h-5 text-brand-gold-dim" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            Flawless Finish
          </div>
          <div className="flex items-center gap-2.5">
            <svg className="w-5 h-5 text-brand-gold-dim" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
            Guaranteed Quality
          </div>
        </div>

      </div>
    </section>
  );
}
