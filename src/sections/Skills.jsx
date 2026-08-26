import { motion } from 'framer-motion';
import { Cpu, Code, Database, Box, Bot } from 'lucide-react';

const skillCategories = [
  {
    title: 'Languages & Core CS',
    icon: Code,
    color: 'from-cyan-500 to-blue-600',
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
    icon: Box,
    color: 'from-indigo-500 to-purple-600',
    skills: [
      'React.js',
      'HTML5 & CSS3 Architecture',
      'Material UI & Tailwind CSS v4',
      'SVG Graphics & Motion Animation',
    ],
  },
  {
    title: 'Backend, APIs & Databases',
    icon: Database,
    color: 'from-emerald-500 to-teal-600',
    skills: [
      'Node.js & Express APIs',
      'GraphQL',
      'REST API System Design',
      'PostgreSQL & Schema Design',
    ],
  },
  {
    title: 'Tools & AI-Assisted Workflows',
    icon: Bot,
    color: 'from-amber-500 to-orange-600',
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

        {/* Section Header */}
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
            Structured around Akash's proficiency across Languages, Frontend, GraphQL, PostgreSQL, and AI workflows.
          </motion.p>
        </div>

        {/* Skill Category Cards Grid */}
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
                className="glass-panel-interactive p-6 sm:p-8 rounded-3xl space-y-6"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
                  <div className={`p-3 rounded-2xl bg-gradient-to-r ${cat.color} text-white shadow-lg`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    {cat.title}
                  </h3>
                </div>

                {/* Skill Pills / Badges */}
                <div className="flex flex-wrap gap-2.5 pt-1">
                  {cat.skills.map((skill) => (
                    <motion.div
                      key={skill}
                      whileHover={{ scale: 1.03, y: -2 }}
                      className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/40 text-slate-200 text-sm font-medium transition-all hover:shadow-md hover:shadow-cyan-500/10 group cursor-default"
                    >
                      <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${cat.color} group-hover:scale-125 transition-transform`} />
                      <span>{skill}</span>
                    </motion.div>
                  ))}
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