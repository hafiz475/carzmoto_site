import { useState, useEffect } from 'react';

const WA_LINK = 'https://wa.me/918072574682';

const WaIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Offers', href: '#offer' },
    { label: 'Contact', href: '#footer' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass-dark py-2.5 shadow-xl shadow-black/60' : 'bg-transparent py-4'
      }`}
    >
      {/* Top accent line */}
      {scrolled && (
        <div
          className="absolute top-0 left-0 right-0 h-[1.5px]"
          style={{ background: 'linear-gradient(90deg, transparent, #DAA520 50%, transparent)' }}
        />
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">

        {/* Logo */}
        <a href="#" className="flex items-center gap-0 group" aria-label="CARZ MOTO Home">
          <img
            src={`${import.meta.env.BASE_URL}assets/company_logo.png`}
            alt="CARZ MOTO"
            className="logo-blend h-12 sm:h-14 w-auto object-contain transition-all duration-400 group-hover:scale-105"
            style={{ filter: 'brightness(1.15) contrast(1.1) drop-shadow(0 0 12px rgba(218,165,32,0.4))' }}
          />
        </a>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="relative text-gray-300 hover:text-white font-medium tracking-wide text-sm transition-colors duration-300 group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-300 rounded-full"
                  style={{ background: 'linear-gradient(90deg, #DAA520, #FFD700)' }}
                />
              </a>
            </li>
          ))}
        </ul>

        {/* WhatsApp CTA — Desktop */}
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 text-carbon-950 font-bold px-6 py-2.5 rounded-full text-sm transition-all duration-300 hover:scale-105 btn-glow-gold"
          style={{ background: 'linear-gradient(135deg, #FFD700, #B8860B)' }}
          onClick={() => typeof fbq !== 'undefined' && fbq('track', 'Lead')}
        >
          <WaIcon />
          Chat on WhatsApp
        </a>

        {/* Hamburger — Mobile */}
        <button
          className="md:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-lg border border-brand-gold/30 hover:bg-brand-gold/10 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span className={`hamburger-line block w-5 h-0.5 bg-brand-gold-light rounded-full ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`hamburger-line block w-5 h-0.5 bg-brand-gold-light rounded-full ${mobileOpen ? 'opacity-0 scale-x-0' : ''}`} />
          <span className={`hamburger-line block w-5 h-0.5 bg-brand-gold-light rounded-full ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ${
          mobileOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="glass-dark mt-1 mx-3 rounded-2xl px-4 py-4 flex flex-col gap-1 border border-brand-gold/20 shadow-xl"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="flex items-center gap-3 text-gray-300 hover:text-white py-3 border-b border-brand-gold/10 last:border-0 transition-colors duration-200"
              onClick={() => setMobileOpen(false)}
            >
              <span className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ background: 'linear-gradient(135deg, #FFD700, #DAA520)' }}
              />
              <span className="font-medium">{link.label}</span>
            </a>
          ))}
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 flex items-center justify-center gap-2 text-carbon-950 font-bold py-3.5 rounded-full text-sm btn-glow-gold"
            style={{ background: 'linear-gradient(135deg, #FFD700, #B8860B)' }}
            onClick={() => { setMobileOpen(false); typeof fbq !== 'undefined' && fbq('track', 'Lead'); }}
          >
            <WaIcon />
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </nav>
  );
}
