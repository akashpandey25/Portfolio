import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Sparkles, Building2, GraduationCap } from 'lucide-react';

const experiences = [
  {
    role: 'Software Engineer (Frontend)',
    company: 'Genetic Web Technologies Pvt. Ltd.',
    location: 'Remote',
    period: 'September 2024 – Present',
    description: 'Developed and maintained a React-based Cyber Threat Intelligence (CTI) platform built upon OpenCTI, providing analysts with search, investigation, visualization, and enrichment capabilities for STIX 2.1 threat intelligence data.',
    achievements: [
      'Developed and maintained a React-based Cyber Threat Intelligence (CTI) platform built upon OpenCTI, providing analysts with search, investigation, visualization, and enrichment capabilities for STIX 2.1 threat intelligence data.',
      'Created an interactive STIX graph explorer using React and D3.js, supporting multi-hop relationship exploration, node expansion, and interactive force-directed graphs.',
      'Implemented IP, domain, URL, and hash search workflows, with STIX object resolution, data transformation, aggregation, and custom graph traversal handled by FastAPI.',
      'Implemented multi-hop BFS traversal, deduplication, and graph-size limiting in the backend to efficiently traverse and return related STIX entities.',
      'Built reusable React + Material UI components, dashboards, filters, charts, and server-side pagination/filtering for large IOC and report datasets using React Query.',
      'Integrated threat-intelligence enrichment and feeds including VirusTotal, Shodan, ZoomEye, MITRE ATT&CK, AlienVault, and URLhaus.',
      'Collaborated in Agile sprints with rapid iteration cycles, utilizing Git’s feature-branch workflow in a cross-functional team setting.',
    ],
    tech: ['React', 'D3.js', 'FastAPI', 'STIX 2.1', 'OpenCTI', 'Material UI', 'React Query', 'Git'],
  },
  {
    role: 'B. Tech in Computer Science & Engineering',
    company: 'Siliguri Institute of Technology',
    location: 'West Bengal, India',
    period: '2020 – 2024',
    description: 'Graduated with CGPA 8.73 / 10. Focused on Data Structures, Algorithms, Software Engineering, DBMS, and Object-Oriented Programming.',
    achievements: [
      'Graduated with CGPA: 8.73 / 10 with strong focus on computer science fundamentals',
      'Solved over 300 Data Structures & Algorithms problems across LeetCode and GFG',
      'Engineered full-stack fitness web application Gym Buddy using React and Node.js REST API',
    ],
    tech: ['Core Java', 'JavaScript (ES6+)', 'SQL', 'Data Structures & Algorithms', 'DBMS', 'OOP'],
  },
  {
    role: 'Higher Secondary Education (Class XII - PCM)',
    company: 'KR Saraswati Vidya Mandir',
    location: 'Jhumari Telaiya, Jharkhand',
    period: '2017 – 2019',
    description: 'Completed Class 12th Board Examination with 64.8% aggregate, specializing in Physics, Chemistry, and Mathematics.',
    achievements: [
      'Scored 64.8% in Senior Secondary Board Examination',
      'Specialized in Physics, Chemistry, and Mathematics (PCM)',
    ],
    tech: ['Physics', 'Chemistry', 'Mathematics'],
  },
  {
    role: 'Secondary Education (Class X)',
    company: 'KR Saraswati Vidya Mandir',
    location: 'Jhumari Telaiya, Jharkhand',
    period: '2016 – 2017',
    description: 'Completed Class 10th Board Examination with 8.4 CGPA.',
    achievements: [
      'Achieved 8.4 CGPA in Secondary School Board Examination',
      'Built strong core foundations in Mathematics and General Science',
    ],
    tech: ['Science', 'Mathematics', 'English', 'Social Science'],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="relative py-24 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-widest"
          >
            <Briefcase className="w-3.5 h-3.5" />
            <span>Professional Journey</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white"
          >
            Experience & <span className="text-gradient-cyan">Education</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-base sm:text-lg"
          >
            Akash's professional timeline, achievements, and academic background.
          </motion.p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Glowing Vertical Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-indigo-500 to-cyan-500 opacity-30 shadow-[0_0_15px_#38bdf8] -translate-x-1/2 hidden sm:block" />

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className={`relative flex flex-col sm:flex-row items-center gap-8 ${
                  idx % 2 === 0 ? 'sm:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Center Pulse Node */}
                <div className="absolute left-4 sm:left-1/2 top-6 -translate-x-1/2 w-8 h-8 rounded-full bg-[#090d16] border-2 border-cyan-400 shadow-[0_0_15px_#38bdf8] flex items-center justify-center z-20 hidden sm:flex">
                  <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                </div>

                {/* Content Glass Card */}
                <div className="w-full sm:w-[calc(50%-2.5rem)] glass-panel-interactive p-6 sm:p-8 rounded-3xl space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                    <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-400 text-xs">
                      <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                      {exp.role}
                    </h3>
                    <h4 className="text-sm font-semibold text-cyan-400 flex items-center gap-1.5 mt-1">
                      {idx >= 1 ? <GraduationCap className="w-4 h-4" /> : <Building2 className="w-4 h-4" />} {exp.company}
                    </h4>
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Key Achievements */}
                  <div className="space-y-1.5 pt-1">
                    {exp.achievements.map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <Sparkles className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5 pt-3">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 text-[11px] font-mono rounded-md bg-slate-900 text-slate-300 border border-slate-800"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;