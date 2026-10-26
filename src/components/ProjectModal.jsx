import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight, Check, Cpu, Layers, ShieldCheck } from 'lucide-react';
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
          className="fixed inset-0 bg-[#07070A]/85 backdrop-blur-xl"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-3xl bg-[#101016] border border-white/[0.12] rounded-2xl shadow-[0_30px_90px_rgba(0,0,0,0.85)] overflow-hidden z-10 my-auto"
        >
          {/* Top Header Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.08] bg-[#07070A]/60">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs text-[#A78BFA] font-semibold">{project.index}</span>
              <span className="text-white/20">/</span>
              <span className="font-mono text-[11px] uppercase tracking-wider text-[#A1A1AA]">
                {project.category}
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full border border-white/10 text-[#A1A1AA] hover:text-white hover:border-white/20 transition-colors focus:outline-none"
              aria-label="Close details"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Image / Header Preview */}
          {project.image && (
            <div className="relative aspect-[16/8] w-full overflow-hidden border-b border-white/[0.08] bg-[#07070A]">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#101016] via-transparent to-transparent opacity-80" />
            </div>
          )}

          {/* Modal Content */}
          <div className="p-6 sm:p-8 space-y-6 max-h-[65vh] overflow-y-auto">
            <div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#F5F5F7] tracking-tight">
                {project.title}
              </h3>
              {project.role && (
                <p className="text-xs font-mono text-[#A78BFA] mt-1">
                  {project.role} {project.period ? `(${project.period})` : ''}
                </p>
              )}
              <p className="text-[#A1A1AA] text-sm sm:text-base mt-3 leading-relaxed">
                {project.longDescription || project.description}
              </p>
            </div>

            {/* Architecture Highlights */}
            {(project.highlights || project.features) && (
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-mono uppercase tracking-widest text-[#F5F5F7] flex items-center gap-2">
                  <Layers className="w-3.5 h-3.5 text-[#A78BFA]" />
                  <span>Architecture & Technical Highlights</span>
                </h4>
                <div className="space-y-2">
                  {(project.highlights || project.features).map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-3 rounded-xl border border-white/[0.07] bg-white/[0.02]"
                    >
                      <Check className="w-3.5 h-3.5 text-[#A78BFA] shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-[#F5F5F7]/90 leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tech Stack */}
            <div className="space-y-2.5 pt-2">
              <h4 className="text-xs font-mono uppercase tracking-widest text-[#A1A1AA] flex items-center gap-2">
                <Cpu className="w-3.5 h-3.5 text-[#60A5FA]" />
                <span>Technologies</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-xs font-mono rounded-md border border-white/10 bg-white/[0.03] text-[#F5F5F7]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions Bar */}
            <div className="pt-4 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-white/15 bg-white/[0.04] text-xs font-mono uppercase tracking-wider text-white hover:bg-white/[0.09] hover:border-[#A78BFA]/50 transition-all"
                  >
                    <FaGithub className="w-4 h-4 text-[#A78BFA]" />
                    <span>View Repository</span>
                    <ArrowUpRight className="w-3 h-3 text-[#A78BFA]" />
                  </a>
                ) : (
                  <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full border border-white/10 bg-white/[0.03] text-xs font-mono text-[#A1A1AA]">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#A78BFA]" />
                    <span>Company Project · Proprietary System</span>
                  </div>
                )}
              </div>

              <button
                onClick={onClose}
                className="text-xs font-mono uppercase tracking-wider text-[#A1A1AA] hover:text-white transition-colors"
              >
                Close Modal [ESC]
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ProjectModal;
