import { motion } from 'framer-motion';
import { Terminal, GraduationCap, ArrowUpRight } from 'lucide-react';

const coreFocusAreas = [
  {
    title: 'Interactive Data Visualizations',
    desc: 'Crafting force-directed graphs, STIX 2.1 network explorers, and dynamic multi-hop threat visualizers using D3.js and SVG.',
  },
  {
    title: 'Component Architecture & Design Systems',
    desc: 'Building modular, reusable React component systems with high performance, strict state boundaries, and accessible interactions.',
  },
  {
    title: 'API Integration & Pipeline Traversal',
    desc: 'Connecting complex REST & GraphQL endpoints, coordinating Fast API graph traversals, and handling large IOC datasets with React Query.',
  },
  {
    title: 'Algorithmic Problem Solving',
    desc: 'Solid foundations in Data Structures, Algorithms, OOP, and DBMS, with 300+ problems solved across LeetCode & GFG.',
  },
];

const AboutUs = () => {
  return (
    <section id="about" className="relative py-28 sm:py-36 z-10">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="border-t border-white/[0.12] pt-12 pb-16">
          <div className="space-y-3">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#A78BFA] flex items-center gap-2">
              <span>02 // IDENTITY & CRAFT</span>
            </span>
            <h2 className="font-display text-[clamp(2.25rem,4.5vw,4.25rem)] font-extrabold text-[#F5F5F7] tracking-tight leading-none">
              ENGINEERING MEETS CRAFT.
            </h2>
          </div>
        </div>

        {/* Asymmetric Two-Column Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Narrative & Educational Background (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-8"
          >
            {/* Primary Biography Statement */}
            <div className="space-y-6">
              <p className="font-display text-xl sm:text-2xl text-white font-medium leading-relaxed">
                Frontend Developer with nearly 2 years of experience developing modern web applications using React.js, JavaScript, and contemporary frontend technologies.
              </p>

              <p className="text-[#A1A1AA] text-base leading-relaxed">
                At <span className="text-white font-medium">Genetic Web Technologies Pvt. Ltd.</span>, I develop and maintain a React-based Cyber Threat Intelligence (CTI) platform built upon OpenCTI, providing analysts with search, investigation, visualization, and enrichment capabilities for STIX 2.1 threat intelligence data. Focused on writing maintainable code, delivering responsive interfaces, and developing scalable, user-focused solutions in Agile teams.
              </p>
            </div>

            {/* Academic & Problem Solving Box */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              
              {/* Education Card */}
              <div className="p-6 rounded-2xl border border-white/[0.12] bg-[#101016] space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-[#A1A1AA]">
                  <span className="flex items-center gap-1.5 text-[#A78BFA]">
                    <GraduationCap className="w-4 h-4" />
                    <span>EDUCATION</span>
                  </span>
                  <span>2020 – 2024</span>
                </div>
                <div>
                  <h4 className="text-base font-bold text-white font-display">
                    B. Tech in Computer Science & Engineering
                  </h4>
                  <p className="text-xs text-[#A1A1AA] mt-1">
                    Siliguri Institute of Technology, West Bengal
                  </p>
                </div>
                <div className="pt-2 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono">
                  <span className="text-[#A1A1AA]">Cumulative CGPA</span>
                  <span className="text-white font-bold bg-[#A78BFA]/15 px-2 py-0.5 rounded border border-[#A78BFA]/30">
                    8.73 / 10
                  </span>
                </div>
              </div>

              {/* Problem Solving Card */}
              <div className="p-6 rounded-2xl border border-white/[0.12] bg-[#101016] space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-[#A1A1AA]">
                  <span className="flex items-center gap-1.5 text-[#60A5FA]">
                    <Terminal className="w-4 h-4" />
                    <span>PROBLEM SOLVING</span>
                  </span>
                  <span>LEETCODE & GFG</span>
                </div>
                <div>
                  <h4 className="text-base font-bold text-white font-display">
                    300+ DSA Problems Solved
                  </h4>
                  <p className="text-xs text-[#A1A1AA] mt-1">
                    Data Structures, Algorithms, OOP, and DBMS Fundamentals
                  </p>
                </div>
                <div className="pt-2 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono">
                  <span className="text-[#A1A1AA]">Profiles</span>
                  <div className="flex items-center gap-3">
                    <a
                      href="https://leetcode.com/u/akashpandey00480/"
                      target="_blank"
                      rel="noreferrer"
                      className="text-[#A78BFA] hover:underline flex items-center gap-1"
                    >
                      <span>LeetCode</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                    <span className="text-white/20">·</span>
                    <a
                      href="https://www.geeksforgeeks.org/profile/akashpandey00480?tab=activity"
                      target="_blank"
                      rel="noreferrer"
                      className="text-[#60A5FA] hover:underline flex items-center gap-1"
                    >
                      <span>GFG</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right Column: Technical Discipline & Focus Areas (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-4"
          >
            <div className="text-xs font-mono uppercase tracking-widest text-[#A1A1AA] pb-2">
              // AREAS OF SPECIALIZATION
            </div>

            <div className="space-y-3">
              {coreFocusAreas.map((area, idx) => (
                <div
                  key={area.title}
                  className="p-5 rounded-2xl border border-white/[0.1] bg-[#101016]/80 hover:border-white/20 transition-all duration-300 space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-bold text-white font-display">
                      {area.title}
                    </h4>
                    <span className="text-[10px] font-mono text-[#A78BFA]">
                      0{idx + 1}
                    </span>
                  </div>
                  <p className="text-xs text-[#A1A1AA] leading-relaxed">
                    {area.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Engineering Principles Ribbon */}
            <div className="p-4 rounded-xl border border-white/[0.08] bg-white/[0.02] text-xs font-mono text-[#A1A1AA] flex items-center justify-between">
              <span>WORKFLOW: AGILE · FEATURE-BRANCH</span>
              <span className="text-emerald-400">CI/CD READY</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutUs;