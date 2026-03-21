import { useEffect, useRef } from 'react';

const WA_LINK = 'https://wa.me/918072574682';

const offers = [
  { icon: '💺', text: 'Seat Cover Fitting', price: '₹1999', note: 'Starting price' },
  { icon: '📱', text: 'Android System', price: '₹4999', note: 'Including installation' },
  { icon: '💡', text: 'Ambient Lighting', price: '₹2499', note: 'Full car kit' },
  { icon: '🔊', text: 'Sound System', price: '₹3499', note: 'Speaker pair + wiring' },
];

export default function Offer() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="offer"
      className="py-24 relative overflow-hidden"
      ref={sectionRef}
      style={{
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1a0000 40%, #300000 60%, #0a0a0a 100%)',
      }}
    >
      {/* Decorative glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 50% at 50% 50%, rgba(255,26,26,0.12) 0%, transparent 70%)',
        }}
      />

      {/* Diagonal stripes decoration */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #ff1a1a 0, #ff1a1a 1px, transparent 0, transparent 50%)',
          backgroundSize: '20px 20px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Badge */}
        <div className="flex justify-center mb-6 reveal">
          <div
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-bold text-white"
            style={{
              background: 'linear-gradient(135deg, #ff1a1a, #cc0000)',
              boxShadow: '0 0 20px rgba(255,26,26,0.5)',
            }}
          >
            🔥 LIMITED TIME OFFER
          </div>
        </div>

        {/* Main Offer Text */}
        <div className="text-center mb-4 reveal">
          <h2 className="font-rajdhani font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white leading-tight">
            Starting From
          </h2>
          <div
            className="font-rajdhani font-black text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-none mt-2"
            style={{
              background: 'linear-gradient(135deg, #ff1a1a, #ff6b6b, #ffb3b3)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: 'none',
              filter: 'drop-shadow(0 0 30px rgba(255,26,26,0.4))',
            }}
          >
            ₹1999
          </div>
        </div>

        {/* Free installation badge */}
        <div className="flex justify-center mb-14 reveal">
          <div className="flex items-center gap-2.5 glass border border-green-500/30 px-6 py-3 rounded-full text-green-400 font-semibold text-lg"
            style={{ boxShadow: '0 0 20px rgba(34,197,94,0.2)' }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Free Installation Available
          </div>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {offers.map((offer, i) => (
            <div
              key={offer.text}
              className="reveal glass glow-border-red rounded-2xl p-5 text-center hover:border-red-500/60 transition-all duration-400 hover:-translate-y-1"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="text-3xl mb-3">{offer.icon}</div>
              <div className="text-gray-400 text-sm mb-1">{offer.text}</div>
              <div className="text-red-400 font-black text-2xl font-rajdhani">{offer.price}</div>
              <div className="text-gray-600 text-xs mt-1">{offer.note}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center reveal">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-white font-bold text-lg px-10 py-4 rounded-full btn-glow-green transition-all duration-300 hover:scale-105"
            style={{ background: 'linear-gradient(135deg, #25d366, #128c7e)' }}
            onClick={() => { if (typeof fbq !== 'undefined') fbq('track', 'Lead'); }}
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Claim This Offer Now
          </a>
          <p className="text-gray-500 text-sm mt-4">
            📍 Walk-in available · 🕐 Mon–Sat, 9am–7pm
          </p>
        </div>
      </div>
    </section>
  );
}
