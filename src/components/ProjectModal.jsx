import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Sparkles, CheckCircle2, Layers, Cpu } from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#04060a]/80 backdrop-blur-xl"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          className="relative w-full max-w-4xl bg-[#090d16]/95 border border-slate-700/60 rounded-3xl shadow-2xl shadow-cyan-500/10 overflow-hidden z-10 my-auto glass-panel"
        >
          {/* Header Bar */}
          <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-slate-900">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#090d16] via-[#090d16]/40 to-transparent" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2.5 rounded-full bg-slate-950/70 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-900 transition-colors z-20"
              aria-label="Close modal"
            >
              <X className="w-5 h-5 text-cyan-400" />
            </button>

            {/* Category Tag */}
            <div className="absolute bottom-6 left-6 sm:left-8 flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                {project.category}
              </span>
            </div>
          </div>

          {/* Body Content */}
          <div className="p-6 sm:p-8 space-y-6">
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white flex items-center gap-2">
                {project.title} <Sparkles className="w-5 h-5 text-cyan-400" />
              </h3>
              <p className="text-slate-300 text-sm sm:text-base mt-2 leading-relaxed">
                {project.longDescription || project.description}
              </p>
            </div>

            {/* Key Features List */}
            {project.features && (
              <div>
                <h4 className="text-sm uppercase tracking-wider font-semibold text-cyan-400 flex items-center gap-1.5 mb-3">
                  <Layers className="w-4 h-4" /> Key Architecture Features
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {project.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-slate-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tech Stack Badges */}
            <div>
              <h4 className="text-sm uppercase tracking-wider font-semibold text-indigo-400 flex items-center gap-1.5 mb-3">
                <Cpu className="w-4 h-4" /> Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 text-xs font-medium rounded-lg bg-slate-800/80 text-slate-200 border border-slate-700/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center gap-4">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-indigo-500 shadow-lg shadow-cyan-500/25 transition-all"
                >
                  <span>Live Preview</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-all"
                >
                  <FaGithub className="w-4 h-4 text-cyan-400" />
                  <span>View Source Code</span>
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ProjectModal;
