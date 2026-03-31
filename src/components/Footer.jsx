import { FaFacebookF, FaInstagram, FaWhatsapp, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import CompanyLogo from './CompanyLogo';

const WA_LINK = 'https://wa.me/918072574682';

export default function Footer() {
  return (
    <footer id="footer" className="bg-carbon-950 pt-20 pb-10 relative overflow-hidden">
      {/* Top gold gradient glow line */}
      <div className="absolute top-0 left-0 right-0 h-[1.5px]"
        style={{ background: 'linear-gradient(90deg, transparent, #DAA520 30%, #FFD700 70%, transparent)' }} />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px blur-[12px]"
        style={{ background: 'linear-gradient(90deg, #B8860B, #FFD700)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 lg:gap-12 mb-16">

          {/* Brand Col */}
          <div className="md:col-span-5">
            {/* Logo */}
            <a href="#" className="inline-block mb-6 group">
              <CompanyLogo
                className="logo-blend h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                style={{ filter: 'brightness(1.2) drop-shadow(0 0 15px rgba(218,165,32,0.3))' }}
              />
            </a>
            <p className="text-gray-400 text-sm leading-relaxed mb-8 font-light max-w-sm">
              Chennai's premier destination for luxury car accessories. From custom stitch seat covers to next-gen Android systems, we elevate your drive.
            </p>
            {/* Socials */}
            <div className="flex gap-4">
              {[
                { icon: FaFacebookF, url: '#' },
                { icon: FaInstagram, url: '#' }
              ].map((s, idx) => (
                <a key={idx} href={s.url} className="w-10 h-10 rounded-full flex items-center justify-center text-gray-400 hover:text-carbon-950 transition-colors duration-300 border border-white/10 hover:border-brand-gold-bright hover:bg-brand-gold-bright hover:shadow-[0_0_15px_rgba(255,215,0,0.4)]">
                  <s.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Col */}
          <div className="md:col-span-3">
            <h4 className="text-white font-rajdhani font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {['Services', 'Gallery', 'Reviews', 'Contact Us'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-gray-400 hover:text-brand-gold-bright text-sm transition-colors duration-300 font-light flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-gold-dim group-hover:bg-brand-gold-bright transition-colors" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Col */}
          <div className="md:col-span-4 rounded-2xl bg-carbon-900 p-7 border border-brand-gold/10 relative overflow-hidden group hover:border-brand-gold/30 transition-colors duration-500">
            {/* Subtle bg glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/5 rounded-full blur-2xl group-hover:bg-brand-gold/15 transition-colors duration-500 pointer-events-none" />

            <h4 className="text-white font-rajdhani font-bold text-lg mb-6 border-b border-brand-gold/10 pb-4">Reach Out</h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <FaMapMarkerAlt className="w-5 h-5 text-brand-gold-light mt-0.5 flex-shrink-0" />
                <div className="text-sm text-gray-300 font-light leading-relaxed">
                  <span className="text-white font-medium block mb-1">CARZ MOTO Headquarters</span>
                  No: 37, Kithabath Khan Street<br />Triplicane<br />Chennai - 600005
                </div>
              </li>
              <li className="flex items-center gap-4">
                <FaWhatsapp className="w-5 h-5 text-brand-gold-bright flex-shrink-0 drop-shadow-[0_0_8px_rgba(255,215,0,0.4)]" />
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-300 hover:text-brand-gold-bright font-medium transition-colors"
                  onClick={() => typeof fbq !== 'undefined' && fbq('track', 'Lead')}
                >
                  +91 80725 74682
                </a>
              </li>
              <li className="flex items-center gap-4">
                <FaClock className="w-4 h-4 text-brand-gold-dim flex-shrink-0" />
                <span className="text-sm text-gray-500 font-light">Mon - Sun: 10:00 AM - 12:00 PM</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500 font-light">
          <p>© {new Date().getFullYear()} <span className="text-brand-gold-dim font-bold tracking-wider">CARZ MOTO</span>. All rights reserved.</p>
          <p>Handcrafted for luxury automotive detailing.</p>
        </div>
      </div>
    </footer>
  );
}
