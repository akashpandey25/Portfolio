import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Check, ShieldCheck } from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';
import ProjectModal from '../components/ProjectModal';

const projects = [
  {
    id: 'cti-platform',
    index: '01',
    category: 'COMPANY SYSTEM · CYBER THREAT INTELLIGENCE',
    title: 'Cyber Threat Intelligence Platform',
    role: 'Frontend Software Engineer · Genetic Web Technologies Pvt. Ltd.',
    period: 'September 2024 – Present',
    description:
      'Developed and maintained a React-based Cyber Threat Intelligence (CTI) platform built upon OpenCTI, providing analysts with search, investigation, visualization, and enrichment capabilities for STIX 2.1 threat intelligence data.',
    image: '/cti_platform.jpg',
    tags: ['React', 'D3.js', 'Fast API', 'OpenCTI', 'STIX 2.1', 'Material UI', 'React Query', 'Git'],
    highlights: [
      'Developed and maintained a React-based Cyber Threat Intelligence (CTI) platform built upon OpenCTI, providing analysts with search, investigation, visualization, and enrichment capabilities for STIX 2.1 threat intelligence data.',
      'Created an interactive STIX graph explorer using React and D3.js, supporting multi-hop relationship exploration, node expansion, and interactive force-directed graphs.',
      'Implemented IP, domain, URL, and hash search workflows, with STIX object resolution, data transformation, aggregation, and custom graph traversal handled by Fast API.',
      'Implemented multi-hop BFS traversal, deduplication, and graph-size limiting in the backend to efficiently traverse and return related STIX entities.',
      'Built reusable React + Material UI components, dashboards, filters, charts, and server-side pagination/filtering for large IOC and report datasets using React Query.',
      'Collaborated in Agile sprints with rapid iteration cycles, utilizing Git’s feature-branch workflow in a cross-functional team setting.',
    ],
    githubUrl: null,
    liveUrl: null,
    isCompanyProject: true,
    accent: '#A78BFA',
  },
  {
    id: 'gym-buddy',
    index: '02',
    category: 'FULL-STACK APPLICATION · FITNESS & TRACKING',
    title: 'Gym Buddy — Workout Planning & Tracking App',
    role: 'Full-Stack Developer',
    period: '2024',
    description:
      'Built the full-stack fitness web application using React (Vite) and Node.js REST API with PostgreSQL database (Supabase) to help users build personalized exercise routines, log workouts, and maintain their fitness journey.',
    image: '/gym_buddy.jpg',
    tags: ['React (Vite)', 'Node.js', 'REST API', 'PostgreSQL', 'Supabase', 'JavaScript'],
    highlights: [
      'Built the full-stack fitness web application using React (Vite) and Node.js REST API with PostgreSQL database (Supabase).',
      'developed a custom workout engine covering over 65 exercises and including dynamic time-based planning at 4 levels.',
      'Created the muscle group conflict scoring system which allows to dynamically replace exercises that utilize the same equipment',
      'Implemented the session logging system with Supabase which stores all necessary information of the generated workout plans in a structured manner.',
    ],
    githubUrl: 'https://github.com/akashpandey25/gymbuddy',
    liveUrl: 'https://github.com/akashpandey25/gymbuddy',
    isCompanyProject: false,
    accent: '#60A5FA',
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="work" className="relative py-28 sm:py-36 z-10">
      {/* Hidden anchor for backwards compatibility */}
      <div id="projects" className="absolute -top-10" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="border-t border-white/[0.12] pt-12 pb-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#A78BFA] flex items-center gap-2">
                <span>01 // SHOWCASE</span>
              </span>
              <h2 className="font-display text-[clamp(2.25rem,4.5vw,4.25rem)] font-extrabold text-[#F5F5F7] tracking-tight leading-none">
                SELECTED WORK
              </h2>
            </div>
            <p className="text-[#A1A1AA] text-sm sm:text-base max-w-md font-normal leading-relaxed">
              Production systems and applications built according to real-world engineering standards.
            </p>
          </div>
        </div>

        {/* Editorial Project Layouts */}
        <div className="space-y-24 sm:space-y-36">
          {projects.map((project, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="group relative"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center ${
                  isEven ? '' : 'lg:grid-flow-dense'
                }`}>

                  {/* Project Visual Column (7 cols) */}
                  <div className={`lg:col-span-7 ${isEven ? '' : 'lg:col-start-6'}`}>
                    <div className="relative rounded-2xl overflow-hidden border border-white/[0.12] bg-[#101016] shadow-[0_20px_60px_rgba(0,0,0,0.6)] group-hover:border-white/25 transition-all duration-500">
                      
                      {/* Top browser/metadata hairline bar */}
                      <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.08] bg-[#07070A]/80 text-[11px] font-mono text-[#A1A1AA]">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-white/20" />
                          <span className="w-2 h-2 rounded-full bg-white/20" />
                          <span className="w-2 h-2 rounded-full bg-white/20" />
                          <span className="ml-2 text-white/60">{project.id}.view</span>
                        </div>
                        <span className="uppercase tracking-widest text-[#A78BFA]">{project.category.split('·')[0]}</span>
                      </div>

                      {/* Visual Content Container */}
                      <div className="relative aspect-[16/10] overflow-hidden bg-[#07070A] flex items-center justify-center">
                        <img
                          src={project.image}
                          alt={project.title}
                          loading="lazy"
                          className="w-full h-full object-cover object-top filter contrast-[1.05] brightness-95 group-hover:scale-105 group-hover:brightness-105 transition-all duration-700 ease-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#101016]/90 via-transparent to-transparent opacity-60" />

                        {/* Hover Overlay Button to open details */}
                        <div className="absolute inset-0 bg-[#07070A]/50 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <button
                            onClick={() => setSelectedProject(project)}
                            className="px-5 py-2.5 rounded-full bg-white text-[#07070A] font-semibold text-xs uppercase tracking-wider flex items-center gap-2 shadow-2xl hover:scale-105 transition-transform"
                          >
                            <span>Inspect Technical Details</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Project Information Column (5 cols) */}
                  <div className={`lg:col-span-5 space-y-6 ${
                    isEven ? '' : 'lg:col-start-1 lg:row-start-1'
                  }`}>
                    
                    {/* Index & Category */}
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-2xl sm:text-3xl font-extrabold text-[#A78BFA]">
                        {project.index}
                      </span>
                      <span className="text-white/20">/</span>
                      <span className="text-xs font-mono uppercase tracking-widest text-[#A1A1AA]">
                        {project.category}
                      </span>
                    </div>

                    {/* Title & Role */}
                    <div className="space-y-1">
                      <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#F5F5F7] tracking-tight group-hover:text-white transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs font-mono text-[#A78BFA]">
                        {project.role}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-[#A1A1AA] text-sm sm:text-base leading-relaxed">
                      {project.description}
                    </p>

                    {/* Key Technical Highlights */}
                    <ul className="space-y-2 pt-1 border-t border-white/[0.08]">
                      {project.highlights.slice(0, 3).map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs text-[#F5F5F7]/85">
                          <Check className="w-3.5 h-3.5 text-[#A78BFA] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Technology Badges */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-md text-[11px] font-mono border border-white/10 bg-white/[0.03] text-[#A1A1AA]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Links */}
                    <div className="flex items-center gap-4 pt-3">
                      {project.githubUrl ? (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-white hover:text-[#A78BFA] transition-colors"
                        >
                          <FaGithub className="w-4 h-4" />
                          <span>Source Code</span>
                          <ArrowUpRight className="w-3 h-3 text-[#A78BFA]" />
                        </a>
                      ) : (
                        <div className="inline-flex items-center gap-2 text-[11px] font-mono text-[#A1A1AA] bg-white/[0.04] px-3 py-1.5 rounded-full border border-white/10">
                          <ShieldCheck className="w-3.5 h-3.5 text-[#A78BFA]" />
                          <span>Company Project (Proprietary)</span>
                        </div>
                      )}

                      <button
                        onClick={() => setSelectedProject(project)}
                        className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#A1A1AA] hover:text-white transition-colors ml-auto focus:outline-none"
                      >
                        <span>Deep Dive</span>
                        <span>→</span>
                      </button>
                    </div>

                  </div>

                </div>
              </motion.article>
            );
          })}
        </div>

      </div>

      {/* Interactive Project Technical Details Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default Projects;