import { useEffect } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

import CustomCursor from './components/CustomCursor';
import NavBar from './components/NavBar';
import CinematicBackground from './components/CinematicBackground';

import Home from './sections/Home';
import Projects from './sections/Projects';
import AboutUs from './sections/AboutUs';
import Experience from './sections/Experience';
import Skills from './sections/Skills';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function App() {
  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion) {
      return;
    }

    // Initialize smooth inertial agency scrolling
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.5,
    });

    let animationFrameId;
    function raf(time) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }
    animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#07070A] text-[#F5F5F7] selection:bg-[#A78BFA]/30 selection:text-white overflow-x-hidden antialiased">
      {/* Cinematic Ambient Atmosphere Background */}
      <CinematicBackground />

      {/* Refined Desktop Precision Cursor */}
      <CustomCursor />

      {/* Fixed Agency Header Navigation */}
      <NavBar />

      {/* Main Narrative Flow */}
      <main className="relative z-10">
        <Home />
        <Projects />
        <AboutUs />
        <Experience />
        <Skills />
        <Contact />
      </main>

      {/* Minimalist Footer */}
      <Footer />
    </div>
  );
}

export default App;
