import CustomCursor from './components/CustomCursor';
import NavBar from './components/NavBar';
import ParticleBG from './components/ParticleBG';

import Home from './sections/Home';
import AboutUs from './sections/AboutUs';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Skills from './sections/Skills';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function App() {
  return (
    <div className="relative min-h-screen bg-[#04060a] text-slate-100 font-sans selection:bg-cyan-500 selection:text-black overflow-x-hidden antialiased">
      {/* 3D WebGL Particle Starfield Background Canvas */}
      <ParticleBG />

      {/* Custom Magnetic Glowing Mouse Cursor */}
      <CustomCursor />

      {/* Glassmorphic Floating Header Navigation Bar */}
      <NavBar />

      {/* Main Single-Page 3D Experience Layout */}
      <main className="relative z-10">
        <Home />
        <AboutUs />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
