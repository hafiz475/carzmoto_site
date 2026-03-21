import { useEffect, useRef } from 'react';
import seatCover from '../assets/seat-cover.png';
import gallery1 from '../assets/gallery-1.png';

const testimonials = [
  {
    name: 'Vikram R.',
    location: 'Porur, Chennai',
    rating: 5,
    review:
      'Got my Innova fitted with premium seat covers and Android system. The quality is insane — feels like a brand new car. The team was super professional and installation was done in 2 hours. 10/10 would recommend!',
    service: 'Seat Covers + Android System',
    initials: 'VR',
    color: 'from-carbon-800 to-black',
  },
  {
    name: 'Priya S.',
    location: 'Anna Nagar, Chennai',
    rating: 5,
    review:
      'The ambient lighting they installed in my Swift is absolutely stunning. My friends are jealous! The color options are amazing and the app control is so convenient. Amazing work by CARZ MOTO!',
    service: 'Ambient Lighting',
    initials: 'PS',
    color: 'from-carbon-900 to-carbon-950',
  },
  {
    name: 'Karthik M.',
    location: 'T. Nagar, Chennai',
    rating: 5,
    review:
      'Best car speakers upgrade I could have asked for! The bass is powerful and the sound quality is crystal clear. They also helped me pick the right setup within my budget. Absolutely thrilled!',
    service: 'Premium Sound System',
    initials: 'KM',
    color: 'from-carbon-700 to-carbon-900',
  },
];

function StarRating({ count = 5 }) {
  return (
    <div className="flex gap-1 justify-center sm:justify-start">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-brand-gold-bright" style={{ filter: 'drop-shadow(0 0 4px rgba(255,215,0,0.6))' }} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Trust() {
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
    <section id="trust" className="py-24 bg-carbon-950 relative overflow-hidden" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-20 reveal">
          <span className="text-brand-gold-light text-xs font-bold tracking-[0.35em] uppercase">Proof of Quality</span>
          <h2 className="font-rajdhani font-black text-4xl sm:text-5xl md:text-6xl mt-4 text-white section-underline">
            See The <span className="gradient-text">Difference</span>
          </h2>
        </div>

        {/* Before / After */}
        <div className="grid lg:grid-cols-2 gap-8 mb-24">
          {/* Before */}
          <div className="reveal-left group relative rounded-[2rem] overflow-hidden bg-carbon-900 border border-white/5">
            <div className="absolute top-5 left-5 z-10 bg-black/60 text-gray-300 text-[10px] font-black tracking-widest uppercase px-4 py-1.5 rounded-full backdrop-blur-md border border-white/10">
              BEFORE
            </div>
            <img src={gallery1} alt="Before upgrade" className="w-full h-72 sm:h-80 object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-[1.5s]" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-gray-300 text-lg font-rajdhani font-bold mb-1">Standard factory setup</p>
              <div className="w-8 h-0.5 bg-gray-600 rounded-full mb-2" />
              <p className="text-gray-500 text-sm font-light">Basic look, lacking luxury and advanced features.</p>
            </div>
          </div>

          {/* After */}
          <div className="reveal-right group relative rounded-[2rem] overflow-hidden bg-black border border-brand-gold/20">
            <div
              className="absolute top-5 left-5 z-10 text-carbon-950 text-[10px] font-black tracking-[0.2em] uppercase px-5 py-2 rounded-full shadow-lg border border-brand-gold"
              style={{ background: 'linear-gradient(135deg, #FFD700, #DAA520)', boxShadow: '0 0 15px rgba(218,165,32,0.4)' }}
            >
              AFTER
            </div>
            <img src={seatCover} alt="After upgrade" className="w-full h-72 sm:h-80 object-cover transition-transform duration-[1.5s] group-hover:scale-[1.05]" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-white text-xl sm:text-2xl font-rajdhani font-bold mb-1">CARZ MOTO Premium Upgrade</p>
              <div className="w-12 h-1.5 rounded-full mb-2" style={{ background: 'linear-gradient(90deg, #DAA520, #FFD700)' }} />
              <p className="text-brand-gold-bright text-sm font-semibold tracking-wide flex items-center gap-1.5">
                Transformed experience
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" /></svg>
              </p>
            </div>
            {/* Glow border */}
            <div className="absolute inset-0 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
              style={{ boxShadow: 'inset 0 0 0 2px rgba(218,165,32,0.5), inset 0 0 40px rgba(184,134,11,0.2)' }}
            />
          </div>
        </div>

        {/* Testimonials */}
        <div className="text-center mb-14 reveal">
          <h3 className="font-rajdhani font-black text-3xl sm:text-4xl text-white">
            Trusted By <span className="gradient-text">Enthusiasts</span>
          </h3>
          <div className="flex items-center justify-center gap-3 mt-4">
            <StarRating count={5} />
            <span className="text-white font-black text-xl">4.9</span>
            <span className="text-gray-500 text-sm font-medium tracking-wide">/ 5 from 500+ reviews</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="reveal glass-dark glow-border-gold rounded-[2rem] p-7 sm:p-8 transition-all duration-500 hover:-translate-y-2 group"
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              {/* Quote mark icon */}
              <div className="text-5xl text-brand-gold/10 font-serif leading-[0] mb-6 font-black scale-y-[-1] inline-block transition-colors duration-300 group-hover:text-brand-gold/30">"</div>

              <p className="text-gray-300 text-[15px] leading-relaxed mb-6 font-light">{t.review}</p>

              <StarRating count={t.rating} />

              <div className="flex items-center gap-4 mt-6 pt-6 border-t border-brand-gold/10">
                <div className={`bg-gradient-to-br ${t.color} border border-brand-gold/30 w-12 h-12 rounded-full flex items-center justify-center text-brand-gold-bright font-black text-lg flex-shrink-0 shadow-[0_0_15px_rgba(218,165,32,0.1)] group-hover:shadow-[0_0_20px_rgba(218,165,32,0.3)] transition-all duration-300`}>
                  {t.initials}
                </div>
                <div>
                  <p className="text-white font-rajdhani font-bold text-lg tracking-wide">{t.name}</p>
                  <p className="text-gray-500 text-xs">{t.location}</p>
                  <p className="text-brand-gold-light text-[11px] uppercase tracking-wider mt-1 font-bold">{t.service}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
