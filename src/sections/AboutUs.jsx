import { motion } from 'framer-motion';
import { User, GraduationCap, CheckCircle, Sparkles, BrainCircuit } from 'lucide-react';

const stats = [
  { label: 'Years Experience', value: '~2 Yrs' },
  { label: 'B.Tech CGPA', value: '8.73/10' },
  { label: 'DSA Solved', value: '300+' },
  { label: 'UI Speed Gain', value: '30-40%' },
];

const highlights = [
  'Built and maintained a React-based Cyber Threat Intelligence (CTI) platform on top of OpenCTI for STIX 2.1 investigation and enrichment',
  'Developed interactive STIX graph explorers with D3.js, multi-hop tracing, and dynamic node expansion for threat analysis workflows',
  'Implemented backend search and traversal services using FastAPI for IOC resolution, graph aggregation, deduplication, and related-entity discovery',
  'Created reusable React + Material UI dashboards, filters, and server-side pagination for large IOC and report datasets',
  'Integrated external intelligence feeds including VirusTotal, Shodan, ZoomEye, MITRE ATT&CK, AlienVault, and URLhaus',
];

const AboutUs = () => {
  return (
    <section id="about" className="relative py-24 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-widest"
          >
            <User className="w-3.5 h-3.5" />
            <span>About Akash</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white"
          >
            Frontend Focus, <span className="text-gradient-cyan">Full-Stack Capability</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-base sm:text-lg"
          >
            Engineering scalable web applications, interactive data visualizations, and robust API workflows.
          </motion.p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* Left Column: Glass Bio Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 glass-panel p-8 sm:p-10 rounded-3xl space-y-6 flex flex-col justify-between"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                Engineering Reusable UI & Complex Data Flows <Sparkles className="w-5 h-5 text-cyan-400" />
              </h3>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                I am a frontend-centric software engineer with almost 2 years of experience working on React and JavaScript technologies. At <span className="text-cyan-400 font-semibold">Genetic Web Technologies Pvt. Ltd.</span>, I develop core modules for a Cyber Threat Intelligence (CTI) platform built upon OpenCTI, providing analysts with search, investigation, visualization, and enrichment capabilities for STIX 2.1 threat intelligence data.
              </p>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                Experienced in developing reusable component libraries, interactive data visualizations with D3.js, and integrating REST and GraphQL APIs. Proficient in working within Agile frameworks with rapid iteration cycles to build responsive and user-centric features.
              </p>
            </div>

            {/* Bullet Highlights */}
            <div className="space-y-3 pt-2">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-200">{item}</span>
                </div>
              ))}
            </div>

            {/* Education Summary Box */}
            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">B. Tech in Computer Science & Engineering</h4>
                  <p className="text-xs text-slate-400">Siliguri Institute of Technology, West Bengal (2020 – 2024)</p>
                </div>
              </div>
              <div className="text-right shrink-0">
                <span className="text-xs uppercase text-slate-400 block font-mono">CGPA</span>
                <span className="text-sm font-bold text-cyan-400">8.73 / 10</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Stats Grid & Problem Solving Highlight */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-panel-interactive p-6 rounded-3xl flex flex-col justify-center items-center text-center space-y-2"
              >
                <span className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">
                  {stat.value}
                </span>
                <span className="text-xs sm:text-sm font-medium text-slate-400">
                  {stat.label}
                </span>
              </motion.div>
            ))}

            {/* Problem Solving / DSA Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="col-span-2 glass-panel p-6 rounded-3xl border-cyan-500/30 bg-gradient-to-br from-cyan-950/30 via-slate-900/60 to-indigo-950/30 space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase font-mono tracking-wider text-cyan-400 font-semibold flex items-center gap-1.5">
                  <BrainCircuit className="w-4 h-4" /> Strong Problem Solving
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                  300+ Problems
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300">
                Solid foundation in Data Structures, Algorithms, Object-Oriented Programming (OOP), and DBMS. Solved over 300 problems across LeetCode and GFG.
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutUs;