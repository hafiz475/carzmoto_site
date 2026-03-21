import { useEffect, useRef } from 'react';
import seatCoverImg from '../assets/seat-cover.png';
import androidImg from '../assets/android-system.png';
import ambientImg from '../assets/ambient-lighting.png';
import speakersImg from '../assets/speakers.png';

const WA_LINK = 'https://wa.me/918072574682';

const services = [
  {
    id: 'seat-covers',
    icon: '🪑',
    title: 'Seat Covers',
    description: 'Premium quality PU leather & fabric seat covers with custom stitching patterns. Durable, stylish, and perfectly fitted for your car.',
    tags: ['Diamond Stitch', 'Waterproof', 'Custom Fit'],
    img: seatCoverImg,
    color: 'from-red-900/30 to-black',
  },
  {
    id: 'android-systems',
    icon: '📱',
    title: 'Android Systems',
    description: 'Next-gen Android head units with GPS, Bluetooth, Wi-Fi & stunning HD displays. Transform your dashboard into a smart cockpit.',
    tags: ['GPS Navigation', 'Bluetooth', 'HD Display'],
    img: androidImg,
    color: 'from-blue-900/30 to-black',
  },
  {
    id: 'ambient-lighting',
    icon: '💡',
    title: 'Ambient Lighting',
    description: 'Multi-color RGB LED ambient strips under dashboard, doors and footwell. Set the mood with 16 million colors.',
    tags: ['16M Colors', 'App Control', 'Music Sync'],
    img: ambientImg,
    color: 'from-purple-900/30 to-black',
  },
  {
    id: 'sound-systems',
    icon: '🔊',
    title: 'Speakers & Sound',
    description: 'Crystal clear car audio systems — from premium door speakers to thumping subwoofers. Feel the music like never before.',
    tags: ['High Bass', 'Amplifier', 'Custom Box'],
    img: speakersImg,
    color: 'from-orange-900/30 to-black',
  },
];

export default function Services() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const reveals = sectionRef.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    reveals?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="py-24 bg-carbon-900 relative overflow-hidden" ref={sectionRef}>
      {/* Background decoration */}
      <div className="absolute inset-0 bg-red-glow opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16 reveal">
          <span className="text-red-500 text-sm font-semibold tracking-[0.3em] uppercase">What We Offer</span>
          <h2 className="font-rajdhani font-black text-4xl sm:text-5xl md:text-6xl mt-3 text-white section-underline">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-gray-400 text-lg mt-6 max-w-xl mx-auto">
            Everything your car needs — installed by certified experts right here in Chennai.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <div
              key={service.id}
              className="reveal group relative rounded-2xl overflow-hidden cursor-pointer"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              {/* Card image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${service.color}`} />
                <div className="absolute top-4 left-4 text-3xl">{service.icon}</div>
              </div>

              {/* Card body */}
              <div
                className="glass glow-border-red p-5 rounded-b-2xl transition-all duration-400 group-hover:border-red-500/60"
                style={{
                  borderTop: 'none',
                  background: 'rgba(10,10,10,0.9)',
                }}
              >
                <h3 className="font-rajdhani font-bold text-xl text-white mb-2 group-hover:text-red-400 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-0.5 rounded-full border border-red-500/30 text-red-400 bg-red-500/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-green-400 font-semibold hover:text-green-300 transition-colors duration-300"
                  onClick={() => { if (typeof fbq !== 'undefined') fbq('track', 'Lead'); }}
                >
                  Enquire Now
                  <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>

              {/* Hover glow overlay */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                style={{ boxShadow: 'inset 0 0 30px rgba(255,26,26,0.15), 0 0 30px rgba(255,26,26,0.15)' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
