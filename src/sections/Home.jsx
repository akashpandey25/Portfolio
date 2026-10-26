import { motion, useMotionValue, useTransform } from 'framer-motion';
import { ArrowDownRight, ArrowUpRight, Terminal } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { SiLeetcode, SiGeeksforgeeks } from 'react-icons/si';

const Home = () => {
  // Parallax tilt physics for the portrait
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-150, 150], [6, -6]);
  const rotateY = useTransform(x, [-150, 150], [-6, 6]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[100svh] pt-28 pb-16 sm:pt-32 sm:pb-24 flex flex-col justify-center overflow-hidden z-10"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Headline & Actions (7 cols) */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* Introductory Label */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md max-w-full"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#A78BFA] animate-pulse shrink-0" />
              <span className="text-[10px] sm:text-xs font-mono uppercase tracking-wider sm:tracking-[0.16em] text-[#A1A1AA] truncate">
                FRONTEND SOFTWARE ENGINEER · REACT.JS
              </span>
            </motion.div>

            {/* Main Headline with deliberate line breaks */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-1"
            >
              <h1 className="font-display text-[clamp(2.1rem,4.5vw,4.75rem)] font-bold tracking-tight leading-[1.04] text-[#F5F5F7]">
                <span className="block">I BUILD DIGITAL</span>
                <span className="block">EXPERIENCES THAT</span>
                <span className="block text-gradient-accent">FEEL DIFFERENT.</span>
              </h1>
            </motion.div>

            {/* Supporting Text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-[#A1A1AA] text-base sm:text-lg max-w-xl font-normal leading-relaxed"
            >
              Frontend Developer with nearly 2 years of experience developing modern web applications using React.js, JavaScript, and contemporary frontend technologies.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              {/* Primary CTA */}
              <button
                onClick={() => scrollTo('work')}
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-[#07070A] font-semibold text-sm hover:bg-[#F5F5F7] transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.25)] focus:outline-none"
              >
                <span>Explore Selected Work</span>
                <ArrowDownRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
              </button>

              {/* Secondary CTA */}
              <button
                onClick={() => scrollTo('contact')}
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/15 bg-white/[0.04] text-[#F5F5F7] font-semibold text-sm hover:bg-white/[0.09] hover:border-[#A78BFA]/50 transition-all duration-300 focus:outline-none"
              >
                <span>Let's Connect</span>
                <ArrowUpRight className="w-4 h-4 text-[#A78BFA] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </motion.div>

            {/* Metadata & Quick Profiles */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="pt-6 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#A1A1AA]"
            >
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400/80" />
                <span>Kolkata, IN · Open to select roles & projects</span>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/akashpandey25"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors"
                  aria-label="GitHub profile"
                >
                  <FaGithub className="w-4 h-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/akashpandey18/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors"
                  aria-label="LinkedIn profile"
                >
                  <FaLinkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://leetcode.com/u/akashpandey00480/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#A78BFA] transition-colors"
                  aria-label="LeetCode profile"
                >
                  <SiLeetcode className="w-4 h-4" />
                </a>
                <a
                  href="https://www.geeksforgeeks.org/profile/akashpandey00480?tab=activity"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#60A5FA] transition-colors"
                  aria-label="GeeksforGeeks profile"
                >
                  <SiGeeksforgeeks className="w-4 h-4" />
                </a>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Editorial Integrated Portrait Composition (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative flex justify-center lg:justify-end"
          >
            {/* Ambient Lighting aura behind portrait */}
            <div
              className="absolute -inset-4 rounded-3xl opacity-30 blur-3xl pointer-events-none"
              style={{
                background: 'radial-gradient(circle, #A78BFA 0%, #60A5FA 40%, transparent 70%)',
              }}
            />

            {/* Interactive Portrait Container */}
            <div
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative w-full max-w-[340px] sm:max-w-[390px] aspect-[4/5] rounded-2xl border border-white/10 bg-[#101016] p-2.5 shadow-[0_30px_80px_rgba(0,0,0,0.8)] perspective-[1000px] overflow-hidden group"
            >
              {/* Subtle top metadata bar inside frame */}
              <div className="flex items-center justify-between px-3 py-2 border-b border-white/[0.08] text-[10px] font-mono text-[#A1A1AA]/80">
                <span className="flex items-center gap-1.5">
                  <Terminal className="w-3 h-3 text-[#A78BFA]" />
                  <span>AKASH.DEV</span>
                </span>
                <span className="tracking-widest">2026 // EDITION</span>
              </div>

              {/* Portrait image frame with 3D tilt */}
              <motion.div
                style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
                transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                className="relative w-full h-[calc(100%-38px)] rounded-xl overflow-hidden mt-2 bg-[#07070A]"
              >
                {/* Real Portrait image */}
                <img
                  src="/akash_profile.jpg"
                  alt="Akash Pandey — Frontend Software Engineer"
                  className="w-full h-full object-cover object-top filter grayscale contrast-110 brightness-95 group-hover:grayscale-0 group-hover:contrast-105 group-hover:scale-105 transition-all duration-700 ease-out"
                />

                {/* Soft bottom vignette so image integrates into dark canvas */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#07070A] via-transparent to-transparent opacity-80" />

                {/* Overlay technical tags on image */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[10px] font-mono p-2 rounded-lg bg-[#07070A]/85 backdrop-blur-md border border-white/10">
                  <div>
                    <div className="text-[#F5F5F7] font-semibold tracking-wide">AKASH PANDEY</div>
                    <div className="text-[#A1A1AA]">Frontend Software Engineer</div>
                  </div>
                  <div className="text-right">
                    <span className="inline-block px-1.5 py-0.5 rounded bg-[#A78BFA]/15 text-[#A78BFA] text-[9px] font-mono border border-[#A78BFA]/30">
                      React · D3.js · Fast API
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 w-full pt-8 flex items-center justify-between text-xs font-mono text-[#A1A1AA]/60">
        <button
          onClick={() => scrollTo('work')}
          className="hover:text-white transition-colors flex items-center gap-2 focus:outline-none"
        >
          <span className="w-6 h-[1px] bg-white/30" />
          <span>SCROLL TO EXPLORE</span>
        </button>
        <span className="hidden sm:inline">22.57° N, 88.36° E</span>
      </div>
    </section>
  );
};

export default Home;