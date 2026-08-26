import { ArrowUp, Code2, Heart, Sparkles, Download } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { SiLeetcode, SiCodechef, SiGeeksforgeeks } from 'react-icons/si';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 border-t border-slate-800/80 bg-[#04060a]/90 backdrop-blur-xl py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Brand & Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 p-[1px]">
              <div className="w-full h-full bg-[#090d16] rounded-[11px] flex items-center justify-center">
                <Code2 className="w-5 h-5 text-cyan-400" />
              </div>
            </div>
            <div>
              <span className="text-base font-bold text-white flex items-center gap-1">
                Akash Pandey <Sparkles className="w-3.5 h-3.5 text-cyan-400 inline" />
              </span>
              <p className="text-xs text-slate-400 font-mono">
                Software Engineer • Full Stack Developer Portfolio
              </p>
            </div>
          </div>

          {/* Copyright & Built with Love */}
          <div className="text-center text-xs text-slate-400">
            <p>© {new Date().getFullYear()} Akash Pandey. All Rights Reserved.</p>
            <p className="mt-1 flex items-center justify-center gap-1">
              Crafted with <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline" /> using React 19, D3.js & Tailwind CSS
            </p>
          </div>

          {/* Social & Coding Icons & Back to Top */}
          <div className="flex items-center gap-4">
            <a
              href="/Akash_Pandey_Resume.pdf"
              download="Akash_Pandey_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="px-3 py-2 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/20 hover:border-cyan-500/60 transition-all flex items-center gap-1.5 text-xs font-semibold"
              title="Download Resume"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>

            <div className="flex flex-wrap items-center gap-2">
              <a
                href="https://github.com/akashpandey25"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
                title="GitHub"
              >
                <FaGithub className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/akashpandey18/"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
                title="LinkedIn"
              >
                <FaLinkedin className="w-4 h-4" />
              </a>
              <a
                href="https://leetcode.com/u/akashpandey00480/"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-amber-400 hover:border-amber-500/40 transition-colors"
                title="LeetCode"
              >
                <SiLeetcode className="w-4 h-4" />
              </a>
              <a
                href="https://www.codechef.com/users/akashpandey18"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-amber-500 hover:border-amber-500/40 transition-colors"
                title="CodeChef"
              >
                <SiCodechef className="w-4 h-4" />
              </a>
              <a
                href="https://www.geeksforgeeks.org/profile/akashpandey00480?tab=activity"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors"
                title="GeeksforGeeks"
              >
                <SiGeeksforgeeks className="w-4 h-4" />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="p-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-lg shadow-cyan-500/20 hover:scale-105 transition-transform"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;