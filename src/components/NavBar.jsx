import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code2, Sparkles, Send, Download } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-[#04060a]/80 backdrop-blur-xl border-b border-slate-800/80 shadow-2xl shadow-cyan-950/20'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => scrollToSection(e, '#home')}
          className="flex items-center gap-2.5 group cursor-pointer"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 p-[1px] shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-shadow">
            <div className="w-full h-full bg-[#090d16] rounded-[11px] flex items-center justify-center">
              <Code2 className="w-5 h-5 text-cyan-400 group-hover:rotate-12 transition-transform duration-300" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tight text-white flex items-center gap-1">
              Akash Pandey <Sparkles className="w-3.5 h-3.5 text-cyan-400 inline" />
            </span>
            <span className="text-[10px] uppercase tracking-widest text-slate-400 font-medium">Software Engineer</span>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-950/50 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-md">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className={`relative px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                  isActive ? 'text-white' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavTab"
                    className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 border border-cyan-500/30 rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.name}</span>
              </a>
            );
          })}
        </nav>

        {/* Right CTA Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="/Akash_Pandey_Resume.pdf"
            download="Akash_Pandey_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-cyan-400 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 rounded-full backdrop-blur-md transition-all duration-300 hover:border-cyan-500/60 hover:shadow-lg hover:shadow-cyan-500/15"
          >
            <Download className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
            <span>Resume</span>
          </a>

          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, '#contact')}
            className="group relative inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white rounded-full overflow-hidden bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-indigo-500 shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:shadow-cyan-500/40 hover:-translate-y-0.5"
          >
            <span>Let's Talk</span>
            <Send className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6 text-cyan-400" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-[#090d16]/95 backdrop-blur-2xl border-b border-slate-800 overflow-hidden"
          >
            <div className="px-6 pt-4 pb-6 space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className={`block px-4 py-2.5 rounded-xl text-base font-medium transition-colors ${
                    activeSection === item.href.substring(1)
                      ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20'
                      : 'text-slate-300 hover:bg-slate-900/60'
                  }`}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-2 flex flex-col gap-2.5">
                <a
                  href="/Akash_Pandey_Resume.pdf"
                  download="Akash_Pandey_Resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 bg-slate-900 text-cyan-400 border border-cyan-500/30 rounded-xl font-semibold shadow-md"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Resume</span>
                </a>

                <a
                  href="#contact"
                  onClick={(e) => scrollToSection(e, '#contact')}
                  className="w-full flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold shadow-lg shadow-cyan-500/20"
                >
                  <span>Let's Talk</span>
                  <Send className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default NavBar;
