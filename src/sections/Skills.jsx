import { motion } from 'framer-motion';
import { Cpu, Code, Database, Box, Bot } from 'lucide-react';

const skillCategories = [
  {
    title: 'Languages & Core CS',
    label: 'Foundation',
    icon: Code,
    color: 'from-cyan-500 to-blue-600',
    accent: 'text-cyan-300 border-cyan-500/30 bg-cyan-500/10',
    skills: [
      'JavaScript (ES6+)',
      'Java',
      'SQL',
      'Data Structures & Algorithms',
      'OOP & DBMS Concepts',
    ],
  },
  {
    title: 'Data Visualization & UI Frameworks',
    label: 'Frontend',
    icon: Box,
    color: 'from-indigo-500 to-violet-600',
    accent: 'text-indigo-300 border-indigo-500/30 bg-indigo-500/10',
    skills: [
      'React.js',
      'HTML5 & CSS3 Architecture',
      'Material UI & Tailwind CSS v4',
      'SVG Graphics & Motion Animation',
    ],
  },
  {
    title: 'Backend, APIs & Databases',
    label: 'Systems',
    icon: Database,
    color: 'from-emerald-500 to-teal-600',
    accent: 'text-emerald-300 border-emerald-500/30 bg-emerald-500/10',
    skills: [
      'Node.js & Express APIs',
      'GraphQL',
      'REST API System Design',
      'PostgreSQL & Schema Design',
    ],
  },
  {
    title: 'Tools & AI-Assisted Workflows',
    label: 'Workflow',
    icon: Bot,
    color: 'from-amber-500 to-orange-600',
    accent: 'text-amber-300 border-amber-500/30 bg-amber-500/10',
    skills: [
      'Git & GitHub Feature-Branch Workflow',
      'Claude (AI-Assisted Dev & Debugging)',
      'Antigravity IDE & Stitch (UI/UX Workflows)',
      'VS Code & IntelliJ Debugging',
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="relative py-24 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-widest"
          >
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Skills</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white"
          >
            Skill Matrix & <span className="text-gradient-cyan">Tooling</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-base sm:text-lg"
          >
            Structured around Akash's proficiency across modern frontend engineering, API design, data systems, and AI-enabled workflows.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/80 p-6 sm:p-7 shadow-[0_0_0_1px_rgba(148,163,184,0.05),0_18px_60px_rgba(15,23,42,0.55)] transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/30 hover:shadow-[0_0_0_1px_rgba(34,211,238,0.15),0_22px_70px_rgba(34,211,238,0.12)]"
              >
                <div className={`absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br ${cat.color} opacity-20 blur-3xl transition-all duration-500 group-hover:opacity-30`} />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_30%)]" />

                <div className="relative space-y-5">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-r ${cat.color} text-white shadow-lg shadow-cyan-900/30`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.22em] text-slate-400">{cat.label}</p>
                        <h3 className="text-xl font-bold text-white">{cat.title}</h3>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2.5 pt-1">
                    {cat.skills.map((skill) => (
                      <motion.div
                        key={skill}
                        whileHover={{ scale: 1.02, y: -2 }}
                        className={`inline-flex items-center gap-2 rounded-xl border px-3.5 py-2 text-sm font-medium text-slate-200 ${cat.accent} shadow-inner shadow-slate-900/40 transition-all duration-200 hover:border-white/20`}
                      >
                        <span className={`h-2 w-2 rounded-full bg-gradient-to-r ${cat.color}`} />
                        <span>{skill}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;