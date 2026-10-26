import { motion } from 'framer-motion';
import { Layers, Database, Terminal, Cpu } from 'lucide-react';

const skillCategories = [
  {
    index: '01',
    category: 'FRONTEND & LANGUAGES',
    icon: Layers,
    accent: '#A78BFA',
    description:
      'Developing modern, responsive web applications using React.js, JavaScript, and contemporary frontend styling.',
    skills: [
      { name: 'React', role: 'Core Framework' },
      { name: 'JavaScript (ES6+)', role: 'Programming Language' },
      { name: 'Tailwind CSS', role: 'Utility Styling' },
      { name: 'HTML5 & CSS3', role: 'Semantic Standards' },
      { name: 'React Hooks', role: 'Component Lifecycle' },
      { name: 'Redux', role: 'State Management' },
      { name: 'Core Java', role: 'Programming Language' },
      { name: 'SQL', role: 'Database Querying' },
    ],
  },
  {
    index: '02',
    category: 'FRONTEND ENGINEERING',
    icon: Terminal,
    accent: '#60A5FA',
    description:
      'Designing reusable component architectures, managing complex application state, and building user-focused solutions.',
    skills: [
      { name: 'Component Design', role: 'System Architecture' },
      { name: 'Reusable Components', role: 'Modular Library' },
      { name: 'Frontend Architecture', role: 'Scalable Patterns' },
      { name: 'API Integration', role: 'REST & GraphQL' },
      { name: 'Responsive Design', role: 'Cross-Device Layouts' },
      { name: 'Interactive Visualizations', role: 'D3.js & SVG' },
    ],
  },
  {
    index: '03',
    category: 'BACKEND, APIS & DATABASES',
    icon: Database,
    accent: '#A78BFA',
    description:
      'Integrating RESTful and GraphQL endpoints, handling data pipelines, and structuring relational database queries.',
    skills: [
      { name: 'Node.js', role: 'Runtime Environment' },
      { name: 'REST APIs', role: 'API Integration' },
      { name: 'GraphQL', role: 'Data Fetching' },
      { name: 'PostgreSQL', role: 'Relational Database' },
      { name: 'MySQL', role: 'Relational Database' },
      { name: 'Fast API', role: 'Traversal & Graph Search' },
    ],
  },
  {
    index: '04',
    category: 'CONCEPTS, TOOLS & PRACTICES',
    icon: Cpu,
    accent: '#60A5FA',
    description:
      'Computer science fundamentals, engineering tools, containerization, and modern AI-assisted development workflows.',
    skills: [
      { name: 'Git & GitHub', role: 'Feature-Branch Workflow' },
      { name: 'Data Structures & Algorithms', role: '300+ Solved' },
      { name: 'OOP & DBMS', role: 'Core Fundamentals' },
      { name: 'Postman', role: 'API Testing & Workflows' },
      { name: 'Docker', role: 'Containerization' },
      { name: 'VS Code & Antigravity', role: 'Developer Tooling' },
      { name: 'Debugging', role: 'Root-Cause Analysis' },
      { name: 'Claude (AI Development)', role: 'AI-Assisted Workflows' },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="relative py-28 sm:py-36 z-10">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="border-t border-white/[0.12] pt-12 pb-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#A78BFA] flex items-center gap-2">
                <span>04 // CAPABILITIES</span>
              </span>
              <h2 className="font-display text-[clamp(2.25rem,4.5vw,4.25rem)] font-extrabold text-[#F5F5F7] tracking-tight leading-none">
                TECHNICAL SKILLS
              </h2>
            </div>
            <p className="text-[#A1A1AA] text-sm sm:text-base max-w-md font-normal leading-relaxed">
              Technical stack directly verified across production web applications, CTI platforms, and algorithmic problem solving.
            </p>
          </div>
        </div>

        {/* Technical Capabilities Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {skillCategories.map((group, idx) => {
            const Icon = group.icon;

            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="p-7 sm:p-9 rounded-2xl border border-white/[0.1] bg-[#101016]/80 hover:border-white/20 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  
                  {/* Category Header */}
                  <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-white">
                        <Icon className="w-4 h-4 text-[#A78BFA]" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono tracking-widest uppercase text-[#A1A1AA]">
                          {group.index} // DOMAIN
                        </span>
                        <h3 className="font-display text-lg sm:text-xl font-bold text-white tracking-tight">
                          {group.category}
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* Domain Description */}
                  <p className="text-xs text-[#A1A1AA] leading-relaxed">
                    {group.description}
                  </p>

                  {/* Skills List with clean metadata */}
                  <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {group.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="p-3 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/15 transition-all duration-200"
                      >
                        <div className="text-xs font-semibold text-white">
                          {skill.name}
                        </div>
                        <div className="text-[10px] font-mono text-[#A1A1AA] mt-0.5">
                          {skill.role}
                        </div>
                      </div>
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