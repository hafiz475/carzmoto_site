import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Trust from './components/Trust';
import Offer from './components/Offer';
import CTA from './components/CTA';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

export default function App() {
  return (
    <>
      {/* Noise overlay for premium film grain effect */}
      <div className="noise-overlay" />

      <Navbar />

      <main>
        <Hero />
        <Services />
        <Gallery />
        <Trust />
        <Offer />
        <CTA />
      </main>

      <Footer />
      <WhatsAppFloat />
    </>
  );
}
