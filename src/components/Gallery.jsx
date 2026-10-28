import { useEffect, useRef } from 'react';
import gallery1 from '../assets/gallery-1.png';
import seatCover from '../assets/seat-cover.png';
import androidSys from '../assets/android-system.png';
import ambientLight from '../assets/ambient-lighting.png';
import speakers from '../assets/speakers.png';
import { waLink, trackLead } from '../whatsapp';

const galleryItems = [
  { img: gallery1, label: 'Seat Cover Installation', span: 'col-span-2 row-span-2' },
  { img: androidSys, label: 'Android Head Unit', span: '' },
  { img: ambientLight, label: 'Ambient Lighting', span: '' },
  { img: speakers, label: 'Sound System', span: '' },
  { img: seatCover, label: 'Premium Leather Seats', span: '' },
];

export default function Gallery() {
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
    <section id="gallery" className="py-24 bg-carbon-950 relative overflow-hidden" ref={sectionRef}>
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(218,165,32,0.06) 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span className="text-brand-gold-light text-xs font-bold tracking-[0.35em] uppercase">Our Work</span>
          <h2 className="font-rajdhani font-black text-4xl sm:text-5xl md:text-6xl mt-4 text-white section-underline">
            Installation <span className="gradient-text">Gallery</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg mt-8 max-w-xl mx-auto font-light leading-relaxed">
            Real installs done by our expert team. Every car gets the premium treatment.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4 auto-rows-[160px] sm:auto-rows-[240px]">
          {galleryItems.map((item, i) => (
            <div
              key={i}
              className={`reveal-scale group relative rounded-2xl overflow-hidden ${item.span}`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <img
                src={item.img}
                alt={item.label}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.15]"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />

              {/* Brand gradient border on hover */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  boxShadow: 'inset 0 0 0 2px rgba(218,165,32,0.6), inset 0 0 25px rgba(184,134,11,0.4)',
                }}
              />

              {/* Label — always visible on phones (no hover), revealed on hover from sm up */}
              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-5 sm:translate-y-4 sm:group-hover:translate-y-0 sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-500">
                <p className="text-white font-rajdhani font-bold text-base sm:text-xl tracking-wide">{item.label}</p>
                <div className="flex items-center gap-2 mt-1.5">
                  <div className="w-8 h-0.5 rounded-full bg-brand-gold-light" />
                  <span className="text-brand-gold-light text-xs font-semibold tracking-wider">CARZ MOTO</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA below gallery */}
        <div className="text-center mt-14 reveal">
          <p className="text-gray-400 text-sm mb-5 font-light">
            Want to see your car here? Book your slot today!
          </p>
          <a
            href={waLink("Hi CARZ MOTO, I'd like to book an installation.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 font-semibold px-8 py-3.5 rounded-full transition-all duration-400 hover:scale-105 group"
            style={{
              background: 'rgba(218,165,32,0.05)',
              border: '1px solid rgba(218,165,32,0.4)',
              color: '#DAA520',
            }}
            onClick={() => trackLead('Gallery')}
          >
            Book Installation
            <svg className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
