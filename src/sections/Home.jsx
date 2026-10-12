import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Terminal, Download, Mail, MapPin, Phone } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { SiLeetcode, SiCodechef, SiGeeksforgeeks } from 'react-icons/si';
import HeroTechVisual from '../components/HeroTechVisual';

const Home = () => {
  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column: Hero Text */}
          <div className="lg:col-span-7 space-y-8 text-left">
            {/* Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs sm:text-sm font-medium backdrop-blur-md"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span>Software Engineer • Frontend</span>
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4"
            >
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
                Hi, I'm <span className="text-gradient-cyan">Akash Pandey</span>
              </h1>
              <p className="text-xl sm:text-2xl text-slate-200 font-semibold">
                Frontend-Centric Software Engineer
              </p>
              <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed">
                Frontend-centric software engineer with almost 2 years of experience working on React and JavaScript technologies. Experienced in developing reusable component libraries, interactive data visualizations, and integrating REST and GraphQL APIs within Agile frameworks.
              </p>
            </motion.div>

            {/* Quick Contact Chips */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="flex flex-wrap gap-4 text-xs font-mono text-slate-300"
            >
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" /> India
              </span>
              <a
                href="mailto:akashpandey00480@gmail.com"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-cyan-400" /> akashpandey00480@gmail.com
              </a>
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800">
                <Phone className="w-3.5 h-3.5 text-indigo-400" /> +91 8825279154
              </span>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-2xl font-semibold text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 hover:-translate-y-0.5"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="/Akash_Pandey_Resume.pdf"
                download="Akash_Pandey_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl font-semibold text-cyan-400 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 hover:border-cyan-500/60 backdrop-blur-md transition-all duration-300 shadow-lg hover:shadow-cyan-500/20"
              >
                <Download className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
                <span>Download Resume</span>
              </a>

              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-cyan-500/50 backdrop-blur-md transition-all duration-300"
              >
                <Terminal className="w-4 h-4 text-cyan-400" />
                <span>Get In Touch</span>
              </a>
            </motion.div>

            {/* Social Icons & Coding Profiles Row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4"
            >
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Profiles:</span>
                <div className="flex flex-wrap items-center gap-2">
                  <a
                    href="https://github.com/akashpandey25"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
                    title="GitHub: akashpandey25"
                  >
                    <FaGithub className="w-4 h-4" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/akashpandey18/"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
                    title="LinkedIn: akashpandey18"
                  >
                    <FaLinkedin className="w-4 h-4" />
                  </a>
                  <a
                    href="https://leetcode.com/u/akashpandey00480/"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-amber-400 hover:border-amber-500/40 transition-colors"
                    title="LeetCode: akashpandey00480"
                  >
                    <SiLeetcode className="w-4 h-4" />
                  </a>
                  <a
                    href="https://www.codechef.com/users/akashpandey18"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-amber-500 hover:border-amber-500/40 transition-colors"
                    title="CodeChef: akashpandey18"
                  >
                    <SiCodechef className="w-4 h-4" />
                  </a>
                  <a
                    href="https://www.geeksforgeeks.org/profile/akashpandey00480?tab=activity"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors"
                    title="GeeksforGeeks: akashpandey00480"
                  >
                    <SiGeeksforgeeks className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-slate-400 bg-slate-950/60 px-3 py-1.5 rounded-lg border border-slate-800">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>React • GraphQL • JavaScript • PostgreSQL • Node.js</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Interactive Tech Architecture Visualizer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative w-full h-[340px] sm:h-[390px] rounded-3xl glass-panel p-2 shadow-2xl shadow-cyan-500/10 overflow-hidden">
              <HeroTechVisual />

              {/* Floating Badge overlay */}
              {/* <div className="absolute bottom-4 left-4 right-4 p-3 rounded-2xl bg-slate-950/80 backdrop-blur-md border border-slate-800 flex items-center justify-between text-xs">
                <span className="text-slate-300 flex items-center gap-1.5 font-medium">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
                  Interactive 3D Profile Card
                </span>
                <span className="text-cyan-400 font-mono">Akash Pandey</span>
              </div> */}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Home;