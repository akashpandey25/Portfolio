import { motion } from 'framer-motion';
import { Briefcase, Building2, Calendar, MapPin, Check, Download, GraduationCap } from 'lucide-react';

const experiences = [
  {
    type: 'work',
    role: 'Frontend Software Engineer',
    company: 'Genetic Web Technologies Pvt. Ltd.',
    location: 'Remote',
    period: 'September 2024 – Present',
    description:
      'Developed and maintained a React-based Cyber Threat Intelligence (CTI) platform built upon OpenCTI, providing analysts with search, investigation, visualization, and enrichment capabilities for STIX 2.1 threat intelligence data.',
    achievements: [
      'Developed and maintained a React-based Cyber Threat Intelligence (CTI) platform built upon OpenCTI, providing analysts with search, investigation, visualization, and enrichment capabilities for STIX 2.1 threat intelligence data.',
      'Created an interactive STIX graph explorer using React and D3.js, supporting multi-hop relationship exploration, node expansion, and interactive force-directed graphs.',
      'Implemented IP, domain, URL, and hash search workflows, with STIX object resolution, data transformation, aggregation, and custom graph traversal handled by Fast API.',
      'Implemented multi-hop BFS traversal, deduplication, and graph-size limiting in the backend to efficiently traverse and return related STIX entities.',
      'Built reusable React + Material UI components, dashboards, filters, charts, and server-side pagination/filtering for large IOC and report datasets using React Query.',
      'Collaborated in Agile sprints with rapid iteration cycles, utilizing Git’s feature-branch workflow in a cross-functional team setting.',
    ],
    tech: ['React', 'D3.js', 'Fast API', 'STIX 2.1', 'OpenCTI', 'Material UI', 'React Query', 'Git'],
  },
  {
    type: 'education',
    role: 'B. Tech in Computer Science & Engineering',
    company: 'Siliguri Institute of Technology',
    location: 'West Bengal, India',
    period: '2020 – 2024',
    description:
      'Siliguri Institute of Technology, West Bengal | CGPA: 8.73 / 10',
    achievements: [
      'Graduated with CGPA: 8.73 / 10 in Computer Science & Engineering.',
      'Solved over 300 Data Structures & Algorithms problems across LeetCode and GFG.',
      'Built full-stack fitness application Gym Buddy using React (Vite) and Node.js REST API with PostgreSQL database (Supabase).',
    ],
    tech: ['Core Java', 'JavaScript (ES6+)', 'SQL', 'Data Structures & Algorithms', 'DBMS', 'OOP'],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="relative py-28 sm:py-36 z-10">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="border-t border-white/[0.12] pt-12 pb-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#A78BFA] flex items-center gap-2">
                <span>03 // TRAJECTORY</span>
              </span>
              <h2 className="font-display text-[clamp(2.25rem,4.5vw,4.25rem)] font-extrabold text-[#F5F5F7] tracking-tight leading-none">
                EXPERIENCE & JOURNEY
              </h2>
            </div>
            
            <a
              href="/Akash_Pandey_Resume.pdf"
              download="Akash_Pandey_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-white border border-white/15 px-5 py-2.5 rounded-full hover:bg-white/[0.06] hover:border-[#A78BFA]/50 transition-all self-start md:self-auto"
            >
              <Download className="w-3.5 h-3.5 text-[#A78BFA]" />
              <span>Full Curriculum Vitae (PDF)</span>
            </a>
          </div>
        </div>

        {/* Minimalist Editorial Timeline List */}
        <div className="space-y-12">
          {experiences.map((item, idx) => (
            <motion.div
              key={item.role + item.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="p-6 sm:p-10 rounded-2xl border border-white/[0.1] bg-[#101016]/80 hover:border-white/20 transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10">
                
                {/* Meta Column (4 cols) */}
                <div className="lg:col-span-4 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#A78BFA]">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.period}</span>
                  </div>

                  <div>
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                      {item.role}
                    </h3>
                    <p className="text-sm text-[#F5F5F7]/80 font-medium mt-1 flex items-center gap-1.5">
                      {item.type === 'work' ? (
                        <Building2 className="w-3.5 h-3.5 text-[#A78BFA]" />
                      ) : (
                        <GraduationCap className="w-3.5 h-3.5 text-[#60A5FA]" />
                      )}
                      <span>{item.company}</span>
                    </p>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-mono text-[#A1A1AA]">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{item.location}</span>
                  </div>

                  {/* Technology labels */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {item.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded text-[10px] font-mono border border-white/[0.08] bg-white/[0.02] text-[#A1A1AA]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Details Column (8 cols) */}
                <div className="lg:col-span-8 space-y-4 lg:border-l lg:border-white/[0.08] lg:pl-10">
                  <p className="text-sm text-[#A1A1AA] leading-relaxed">
                    {item.description}
                  </p>

                  <div className="space-y-2.5 pt-2">
                    {item.achievements.map((bullet, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2.5 text-xs text-[#F5F5F7]/90 leading-relaxed">
                        <Check className="w-3.5 h-3.5 text-[#A78BFA] shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;