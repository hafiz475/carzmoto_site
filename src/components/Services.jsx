import { useEffect, useRef } from 'react';
import { FaCarSide, FaTabletAlt, FaMagic, FaVolumeUp } from 'react-icons/fa';
import seatCoverImg from '../assets/seat-cover.png';
import androidImg from '../assets/android-system.png';
import ambientImg from '../assets/ambient-lighting.png';
import speakersImg from '../assets/speakers.png';

const WA_LINK = 'https://wa.me/918072574682';

const services = [
  {
    id: 'seat-covers',
    icon: FaCarSide,
    title: 'Seat Covers',
    description: 'Premium quality PU leather & fabric seat covers with custom stitching patterns. Durable, stylish, and perfectly fitted for your car.',
    tags: ['Diamond Stitch', 'Waterproof', 'Custom Fit'],
    img: seatCoverImg,
    color: 'from-[#111] to-black',
  },
  {
    id: 'android-systems',
    icon: FaTabletAlt,
    title: 'Android Systems',
    description: 'Next-gen Android head units with GPS, Bluetooth, Wi-Fi & stunning HD displays. Transform your dashboard into a smart cockpit.',
    tags: ['GPS Navigation', 'Bluetooth', 'HD Display'],
    img: androidImg,
    color: 'from-[#1a1a1a] to-black',
  },
  {
    id: 'ambient-lighting',
    icon: FaMagic,
    title: 'Ambient Lighting',
    description: 'Multi-color RGB LED ambient strips under dashboard, doors and footwell. Set the mood with 16 million colors.',
    tags: ['16M Colors', 'App Control', 'Music Sync'],
    img: ambientImg,
    color: 'from-[#222] to-black',
  },
  {
    id: 'sound-systems',
    icon: FaVolumeUp,
    title: 'Speakers & Sound',
    description: 'Crystal clear car audio systems — from premium door speakers to thumping subwoofers. Feel the music like never before.',
    tags: ['High Bass', 'Amplifier', 'Custom Box'],
    img: speakersImg,
    color: 'from-[#111] to-black',
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

    const reveals = sectionRef.current?.querySelectorAll('.reveal-scale, .reveal, .reveal-left, .reveal-right');
    reveals?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="py-24 bg-carbon-900 relative overflow-hidden" ref={sectionRef}>
      {/* Background decoration - Matte Gold */}
      <div className="absolute inset-0 bg-gold-glow opacity-10 pointer-events-none" />
      <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none opacity-20 blur-3xl"
        style={{ background: 'radial-gradient(circle, #DAA520 0%, transparent 60%)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 reveal">
          <span className="text-brand-gold-light text-xs font-bold tracking-[0.35em] uppercase">Premium Upgrades</span>
          <h2 className="font-rajdhani font-black text-4xl sm:text-5xl md:text-6xl mt-4 text-white section-underline">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg mt-8 max-w-xl mx-auto font-light leading-relaxed">
            Unrivaled quality and precision engineering — expertly installed to perfection.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, i) => (
            <div
              key={service.id}
              className="reveal-scale group relative rounded-[2rem] overflow-hidden cursor-pointer bg-carbon-950 border border-brand-gold/10 hover:border-brand-gold/40 transition-colors duration-500"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              {/* Card image container */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.12]"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-90`} />

                {/* React Icon Badge */}
                <div className="absolute top-5 left-5 w-12 h-12 rounded-full bg-black/60 backdrop-blur-md border border-brand-gold/30 flex items-center justify-center text-brand-gold-bright drop-shadow-[0_0_10px_rgba(255,215,0,0.5)] group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-5 h-5" />
                </div>
              </div>

              {/* Card body */}
              <div
                className="p-7 rounded-b-[2rem] relative z-10 bg-transparent"
                style={{ marginTop: '-15px' }}
              >
                <h3 className="font-rajdhani font-bold text-2xl text-white mb-3 group-hover:text-brand-gold-light transition-colors duration-400">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 font-light">
                  {service.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-semibold tracking-wider px-3 py-1.5 rounded-full border border-brand-gold/20 text-brand-gold-light bg-brand-gold/5 group-hover:bg-brand-gold/15 group-hover:border-brand-gold/40 transition-colors duration-400 uppercase"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-brand-gold-bright transition-colors duration-300 tracking-wide uppercase"
                  onClick={() => typeof fbq !== 'undefined' && fbq('track', 'Lead')}
                >
                  Request Quote
                  <svg className="w-4 h-4 text-brand-gold-light group-hover:translate-x-1.5 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>

              {/* Hover glow overlay */}
              <div
                className="absolute inset-0 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-20"
                style={{ boxShadow: 'inset 0 0 30px rgba(218,165,32,0.1)' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
