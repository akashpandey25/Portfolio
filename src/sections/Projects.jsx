import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FolderGit2, ExternalLink, Eye, Sparkles } from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';
import ProjectModal from '../components/ProjectModal';

const projectCategories = ['All', 'Full-Stack', 'Frontend & Data Vis', 'UI Systems'];

const projectsData = [
  {
    id: 1,
    title: 'GymBuddy — Workout Planning & Tracking App',
    category: 'Full-Stack',
    description: 'Full-stack fitness application for personalized workout plans, exercise logs, and progress history built with React, Node.js, Express, and PostgreSQL.',
    longDescription: 'GymBuddy is an end-to-end fitness application designed for personalized workout routine creation, exercise logging, and progress history tracking. Features a robust relational database schema built with PostgreSQL, RESTful APIs built with Node.js/Express, and a responsive React frontend.',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1000&q=80',
    tags: ['React', 'Vite', 'Node.js', 'Express', 'PostgreSQL', 'Claude AI', 'Stitch UI'],
    features: [
      'Relational database schema & REST APIs for exercise logs and user progress history',
      'Personalized workout plan generator and interactive logging UI',
      'Accelerated prototyping & debugging utilizing Claude AI workflows',
      'UI/UX workflow design created with Stitch',
    ],
    liveUrl: 'https://github.com/akashpandey25/gymbuddy',
    githubUrl: 'https://github.com/akashpandey25/gymbuddy',
  },
  {
    id: 2,
    title: 'Cyber Threat Intelligence (CTI) Platform',
    category: 'Frontend & Data Vis',
    description: 'React-based cyber threat intelligence platform built on OpenCTI to search, investigate, visualize, and enrich STIX 2.1 data for analysts.',
    longDescription: 'Built and maintained a React-based CTI platform on top of OpenCTI, enabling analysts to search, investigate, visualize, and enrich STIX 2.1 threat intelligence data. The platform includes interactive graph exploration, intelligence search workflows for IPs, domains, URLs, and hashes, and integrated external enrichment feeds such as VirusTotal, Shodan, ZoomEye, MITRE ATT&CK, AlienVault, and URLhaus.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=80',
    tags: ['React', 'D3.js', 'FastAPI', 'OpenCTI', 'STIX 2.1', 'Material UI', 'React Query'],
    features: [
      'Developed an interactive STIX graph explorer with multi-hop relationship visualization, node expansion, and force-directed graph interactions',
      'Implemented IP, domain, URL, and hash search workflows with backend resolution and custom graph traversal using FastAPI',
      'Added multi-hop BFS traversal, deduplication, and graph-size limiting to efficiently surface related STIX entities',
      'Built reusable dashboards, filters, charts, and server-side pagination for large IOC and report datasets using React Query',
      'Integrated intelligence enrichment feeds including VirusTotal, Shodan, ZoomEye, MITRE ATT&CK, AlienVault, and URLhaus',
    ],
    liveUrl: 'https://github.com/Dhanushaksha/cti-mainApp',
    githubUrl: 'https://github.com/Dhanushaksha/cti-mainApp',
  },
  {
    id: 3,
    title: 'To-Do List Task Management App',
    category: 'Full-Stack',
    description: 'Clean, responsive task management application built with React for organizing daily routines, priorities, and workflow productivity.',
    longDescription: 'A modern, interactive task manager app designed for seamless task categorization, status tracking, filter views, and clean user state management.',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=1000&q=80',
    tags: ['React', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'UI Design'],
    features: [
      'Interactive task creation, inline editing, priority filtering, and completion status',
      'Clean state management and responsive cross-device layout',
      'Modular React component design and smooth user transitions',
    ],
    liveUrl: 'https://github.com/akashpandey25/To-Do-List-App',
    githubUrl: 'https://github.com/akashpandey25/To-Do-List-App',
  },
  {
    id: 4,
    title: 'Modern Developer Portfolio Website',
    category: 'UI Systems',
    description: 'High-performance interactive developer portfolio built with React 19, Vite, Framer Motion, and Tailwind CSS v4.',
    longDescription: 'A sleek, glassmorphic portfolio platform featuring interactive SVG tech architecture diagrams, dark obsidian visual themes, responsive component structures, and smooth scroll interactions.',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1000&q=80',
    tags: ['React 19', 'Vite', 'Tailwind CSS v4', 'Framer Motion', 'JavaScript'],
    features: [
      'Interactive 2D Cyber Tech Node Visualizer with SVG and Framer Motion',
      'Ambient HTML5 Canvas particle network backdrop',
      'Responsive glassmorphic UI card system with dark obsidian theme',
      'Optimized Vite production bundle with zero-lag framerates',
    ],
    liveUrl: 'http://localhost:5174/',
    githubUrl: 'https://github.com/akashpandey25',
  },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeCategory === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="relative py-24 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-widest"
          >
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Akash's Projects</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white"
          >
            Featured <span className="text-gradient-cyan">Projects & Work</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-base sm:text-lg"
          >
            Highlighting full-stack applications, STIX threat intelligence graph visualizations, and modern UI systems.
          </motion.p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {projectCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-sm font-semibold rounded-full transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-lg shadow-cyan-500/25'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group glass-panel-interactive rounded-3xl overflow-hidden flex flex-col justify-between"
              >
                {/* Project Image Container */}
                <div className="relative h-60 w-full overflow-hidden bg-slate-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090d16] via-transparent to-transparent opacity-90" />

                  {/* Top Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-slate-950/80 text-cyan-400 border border-slate-800 backdrop-blur-md">
                      {project.category}
                    </span>
                  </div>

                  {/* Hover Overlay Button */}
                  <div className="absolute inset-0 bg-cyan-950/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="px-4 py-2.5 rounded-xl bg-white text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow-xl hover:scale-105 transition-transform"
                    >
                      <Eye className="w-4 h-4 text-cyan-600" />
                      <span>View Details</span>
                    </button>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-6 sm:p-8 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors flex items-center justify-between">
                      {project.title}
                    </h3>
                    <p className="text-slate-300 text-sm line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-[11px] font-mono rounded-md bg-slate-900 text-slate-300 border border-slate-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Card Bottom Links */}
                  <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="text-xs font-semibold text-cyan-400 hover:underline flex items-center gap-1"
                    >
                      <span>Explore Case Study</span> &rarr;
                    </button>
                    <div className="flex items-center gap-3">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-slate-400 hover:text-white transition-colors"
                        aria-label="GitHub Repository"
                      >
                        <FaGithub className="w-4 h-4" />
                      </a>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-slate-400 hover:text-cyan-400 transition-colors"
                        aria-label="Live Demo / Repository"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal Viewer */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
};

export default Projects;