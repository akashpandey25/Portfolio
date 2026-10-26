import { ArrowUp, Download } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { SiLeetcode, SiGeeksforgeeks } from 'react-icons/si';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 border-t border-white/[0.12] bg-[#07070A] py-12">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand */}
          <div className="flex items-center gap-2">
            <span className="font-display font-extrabold text-lg tracking-tight text-white">
              AKASH®
            </span>
            <span className="text-[#A78BFA] text-base font-mono">*</span>
            <span className="text-xs font-mono text-[#A1A1AA] ml-3 hidden sm:inline">
              Independent Developer · Digital Craftsmanship
            </span>
          </div>

          {/* Copyright & Meta */}
          <div className="text-xs font-mono text-[#A1A1AA] text-center">
            <span>© {new Date().getFullYear()} Akash Pandey. Engineered with React & Tailwind CSS.</span>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/akashpandey25"
                target="_blank"
                rel="noreferrer"
                className="text-[#A1A1AA] hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <FaGithub className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/akashpandey18/"
                target="_blank"
                rel="noreferrer"
                className="text-[#A1A1AA] hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-4 h-4" />
              </a>
              <a
                href="https://leetcode.com/u/akashpandey00480/"
                target="_blank"
                rel="noreferrer"
                className="text-[#A1A1AA] hover:text-[#A78BFA] transition-colors"
                aria-label="LeetCode"
              >
                <SiLeetcode className="w-4 h-4" />
              </a>
              <a
                href="https://www.geeksforgeeks.org/profile/akashpandey00480?tab=activity"
                target="_blank"
                rel="noreferrer"
                className="text-[#A1A1AA] hover:text-[#60A5FA] transition-colors"
                aria-label="GeeksforGeeks"
              >
                <SiGeeksforgeeks className="w-4 h-4" />
              </a>
            </div>

            <span className="w-[1px] h-4 bg-white/10" />

            {/* Back to top */}
            <button
              onClick={scrollToTop}
              className="text-xs font-mono uppercase tracking-wider text-[#A1A1AA] hover:text-white transition-colors flex items-center gap-1 focus:outline-none"
              aria-label="Scroll back to top"
            >
              <span>TOP</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;