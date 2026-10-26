import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Download } from 'lucide-react';

const navLinks = [
  { name: 'Work', href: '#work' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sectionIds = ['home', 'work', 'about', 'experience', 'skills', 'contact'];
      const scrollPos = window.scrollY + 220;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileOpen]);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? 'py-4 bg-[#07070A]/85 backdrop-blur-xl border-b border-white/[0.08]'
            : 'py-6 bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between">
          
          {/* Brand Left: AKASH® * */}
          <a
            href="#home"
            onClick={(e) => scrollToSection(e, '#home')}
            className="flex items-center gap-1.5 group cursor-pointer focus:outline-none"
            aria-label="Akash Pandey - Return to top"
          >
            <span className="font-display font-extrabold text-xl tracking-tight text-white group-hover:text-white/90 transition-colors">
              AKASH®
            </span>
            <span className="text-[#A78BFA] text-base font-mono inline-block group-hover:rotate-45 transition-transform duration-300">
              *
            </span>
          </a>

          {/* Desktop Navigation Center */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className={`text-sm tracking-tight transition-all duration-200 relative py-1 focus:outline-none ${
                    isActive
                      ? 'text-white font-medium'
                      : 'text-[#A1A1AA] hover:text-white'
                  }`}
                >
                  <span>{item.name}</span>
                  {isActive && (
                    <motion.span
                      layoutId="navUnderline"
                      className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#A78BFA]"
                      transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Desktop Right Actions: Resume & Let's Talk */}
          <div className="hidden md:flex items-center gap-6">
            <a
              href="/Akash_Pandey_Resume.pdf"
              download="Akash_Pandey_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="text-xs tracking-wider uppercase font-mono text-[#A1A1AA] hover:text-white flex items-center gap-1.5 transition-colors focus:outline-none"
            >
              <Download className="w-3.5 h-3.5 text-[#A78BFA]" />
              <span>Resume</span>
            </a>

            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, '#contact')}
              className="group inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-mono text-white px-4 py-2 rounded-full border border-white/15 bg-white/[0.04] hover:bg-white/[0.09] hover:border-[#A78BFA]/50 transition-all duration-300 focus:outline-none"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#A78BFA] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Animated Hamburger Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 text-white focus:outline-none"
            aria-label={mobileOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileOpen}
          >
            <span
              className={`w-6 h-[1.5px] bg-white transition-all duration-300 ${
                mobileOpen ? 'rotate-45 translate-y-[7.5px]' : ''
              }`}
            />
            <span
              className={`w-6 h-[1.5px] bg-white transition-opacity duration-300 ${
                mobileOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`w-6 h-[1.5px] bg-white transition-all duration-300 ${
                mobileOpen ? '-rotate-45 -translate-y-[7.5px]' : ''
              }`}
            />
          </button>
        </div>
      </header>

      {/* Full-Screen Dark Mobile Navigation Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-[#07070A]/98 backdrop-blur-2xl flex flex-col justify-between p-8 pt-24 md:hidden"
          >
            {/* Top Close Row */}
            <div className="absolute top-6 left-6 right-6 flex items-center justify-between">
              <span className="font-display font-extrabold text-xl tracking-tight text-white">
                AKASH® <span className="text-[#A78BFA] font-mono">*</span>
              </span>
              <button
                onClick={() => setMobileOpen(false)}
                className="w-10 h-10 flex items-center justify-center text-white/80 hover:text-white text-2xl font-light focus:outline-none"
                aria-label="Close Menu"
              >
                ✕
              </button>
            </div>

            {/* Menu Links */}
            <nav className="flex flex-col gap-6 my-auto">
              <span className="text-[11px] font-mono tracking-widest uppercase text-[#A1A1AA]/60">
                // NAVIGATION
              </span>
              {navLinks.map((item, idx) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 * idx, duration: 0.3 }}
                  className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-white hover:text-[#A78BFA] transition-colors flex items-center justify-between"
                >
                  <span>{item.name}</span>
                  <span className="text-sm font-mono text-[#A1A1AA] font-normal">
                    0{idx + 1}
                  </span>
                </motion.a>
              ))}

              <motion.a
                href="/Akash_Pandey_Resume.pdf"
                download="Akash_Pandey_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.35, duration: 0.3 }}
                className="font-display text-2xl font-semibold tracking-tight text-[#A78BFA] hover:text-white transition-colors flex items-center gap-2 pt-2"
              >
                <Download className="w-5 h-5" />
                <span>Download Resume</span>
              </motion.a>
            </nav>

            {/* Mobile Footer Info */}
            <div className="pt-6 border-t border-white/10 space-y-3">
              <div className="text-xs font-mono text-[#A1A1AA]">
                akashpandey00480@gmail.com
              </div>
              <div className="flex items-center justify-between text-xs font-mono text-[#A1A1AA]/70">
                <span>Kolkata, IN · Remote</span>
                <a
                  href="#contact"
                  onClick={(e) => scrollToSection(e, '#contact')}
                  className="text-white hover:underline flex items-center gap-1"
                >
                  Let's Connect ↗
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavBar;
