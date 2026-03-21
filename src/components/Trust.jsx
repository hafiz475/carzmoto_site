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
    color: 'bg-red-600',
  },
  {
    name: 'Priya S.',
    location: 'Anna Nagar, Chennai',
    rating: 5,
    review:
      'The ambient lighting they installed in my Swift is absolutely stunning. My friends are jealous! The color options are amazing and the app control is so convenient. Amazing work by CARZ MOTO!',
    service: 'Ambient Lighting',
    initials: 'PS',
    color: 'bg-purple-700',
  },
  {
    name: 'Karthik M.',
    location: 'T. Nagar, Chennai',
    rating: 5,
    review:
      'Best car speakers upgrade I could have asked for! The bass is powerful and the sound quality is crystal clear. They also helped me pick the right setup within my budget. Absolutely thrilled!',
    service: 'Premium Sound System',
    initials: 'KM',
    color: 'bg-blue-700',
  },
];

function StarRating({ count = 5 }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
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
    <section id="trust" className="py-24 bg-carbon-900 relative overflow-hidden" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Section Header */}
        <div className="text-center mb-16 reveal">
          <span className="text-red-500 text-sm font-semibold tracking-[0.3em] uppercase">Proof of Quality</span>
          <h2 className="font-rajdhani font-black text-4xl sm:text-5xl mt-3 text-white section-underline">
            See The <span className="gradient-text">Difference</span>
          </h2>
        </div>

        {/* Before / After */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {/* Before */}
          <div className="reveal-left group relative rounded-2xl overflow-hidden">
            <div className="absolute top-4 left-4 z-10 bg-gray-800/90 text-gray-300 text-sm font-bold px-3 py-1 rounded-full backdrop-blur border border-white/10">
              BEFORE
            </div>
            <img src={gallery1} alt="Before upgrade" className="w-full h-64 object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-4 left-4">
              <p className="text-gray-300 text-sm">Standard factory setup</p>
              <p className="text-gray-500 text-xs">No upgrades, basic look</p>
            </div>
          </div>

          {/* After */}
          <div className="reveal-right group relative rounded-2xl overflow-hidden">
            <div
              className="absolute top-4 left-4 z-10 text-white text-sm font-bold px-3 py-1 rounded-full"
              style={{ background: 'linear-gradient(135deg, #ff1a1a, #cc0000)', boxShadow: '0 0 12px rgba(255,26,26,0.5)' }}
            >
              AFTER
            </div>
            <img src={seatCover} alt="After upgrade" className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-4 left-4">
              <p className="text-white font-semibold text-sm">CARZ MOTO Premium Upgrade</p>
              <p className="text-red-400 text-xs">Transformed experience ✨</p>
            </div>
            {/* Glow border */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
              style={{ boxShadow: '0 0 25px rgba(255,26,26,0.3), inset 0 0 0 2px rgba(255,26,26,0.5)' }}
            />
          </div>
        </div>

        {/* Testimonials */}
        <div className="text-center mb-10 reveal">
          <h3 className="font-rajdhani font-black text-3xl text-white">
            What Our <span className="gradient-text">Customers Say</span>
          </h3>
          <div className="flex items-center justify-center gap-2 mt-3">
            <StarRating count={5} />
            <span className="text-yellow-400 font-bold">4.9</span>
            <span className="text-gray-500 text-sm">/ 5 from 200+ reviews</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="reveal glass glow-border-red rounded-2xl p-6 transition-all duration-400 hover:border-red-500/40 hover:shadow-lg hover:shadow-red-900/20"
              style={{ transitionDelay: `${i * 0.12}s` }}
            >
              {/* Quote mark */}
              <div className="text-4xl text-red-500/30 font-serif leading-none mb-2">"</div>

              <p className="text-gray-300 text-sm leading-relaxed mb-4">{t.review}</p>

              <StarRating count={t.rating} />

              <div className="flex items-center gap-3 mt-4 pt-4 border-t border-white/10">
                <div className={`${t.color} w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                  {t.initials}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-gray-500 text-xs">{t.location}</p>
                  <p className="text-red-400 text-xs mt-0.5">{t.service}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
