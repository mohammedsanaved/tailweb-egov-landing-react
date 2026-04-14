import { useState, useEffect } from 'react';

import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatusBar from './components/StatusBar';
import Approach from './components/Approach';
import Story from './components/Story';
import Digit from './components/Digit';
// import CTA from './components/CTA';
import Footer from './components/Footer';
import Support from './components/Support';
import LatestSection from './components/LatestSection';

/* ── Main App ───────────────────────────────────────────────────── */
export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* <style>{css}</style> */}
      {/* ── NAVBAR ─────────────────── */}
      <Navbar scrolled={scrolled} />
      {/* ── HERO ───────────────────── */}
      <Hero />
      {/* ── STATS BAR ──────────────── */}
      <StatusBar />
      {/* ── BOLD APPROACHES ────────── */}
      <Approach />
      {/* ── SUSTAINING CHANGE ──────── */}
      <Story />
      {/* ── DIGIT ──────────────────── */}
      <Digit />
      {/* ── LATEST (FEATURE SECTION) ── */}
      <LatestSection />
      {/* ── SUPPORTERS ─────────────── */}
      <Support />
      {/* ── FOOTER ─────────────────── */}
      <Footer />
    </>
  );
}
