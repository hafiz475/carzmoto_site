import { useEffect, useRef } from 'react';
import gallery1 from '../assets/gallery-1.png';
import seatCover from '../assets/seat-cover.png';
import androidSys from '../assets/android-system.png';
import ambientLight from '../assets/ambient-lighting.png';
import speakers from '../assets/speakers.png';

// We'll reuse some images for the gallery grid
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
    sectionRef.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="gallery" className="py-24 bg-black relative overflow-hidden" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14 reveal">
          <span className="text-red-500 text-sm font-semibold tracking-[0.3em] uppercase">Our Work</span>
          <h2 className="font-rajdhani font-black text-4xl sm:text-5xl mt-3 text-white section-underline">
            Installation <span className="gradient-text">Gallery</span>
          </h2>
          <p className="text-gray-400 text-lg mt-6 max-w-xl mx-auto">
            Real installs done by our expert team. Every car gets the premium treatment.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 auto-rows-[200px] sm:auto-rows-[220px]">
          {galleryItems.map((item, i) => (
            <div
              key={i}
              className={`reveal group relative rounded-xl overflow-hidden cursor-pointer ${item.span}`}
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <img
                src={item.img}
                alt={item.label}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-400" />

              {/* Red glow border on hover */}
              <div
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                style={{ boxShadow: 'inset 0 0 0 2px rgba(255,26,26,0.6)' }}
              />

              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-400">
                <p className="text-white font-semibold text-sm">{item.label}</p>
                <div className="flex items-center gap-1 mt-1">
                  <div className="w-4 h-0.5 bg-red-500" />
                  <span className="text-red-400 text-xs">CARZ MOTO</span>
                </div>
              </div>

              {/* Corner accent */}
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-8 h-8 rounded-full bg-red-500/20 border border-red-500/50 flex items-center justify-center">
                  <svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA below gallery */}
        <div className="text-center mt-10 reveal">
          <p className="text-gray-400 text-sm mb-4">
            Want to see your car here? Book today!
          </p>
          <a
            href="https://wa.me/918072574682"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-red-500/50 text-red-400 hover:bg-red-500/10 font-semibold px-6 py-2.5 rounded-full transition-all duration-300"
            onClick={() => { if (typeof fbq !== 'undefined') fbq('track', 'Lead'); }}
          >
            Book Installation
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
