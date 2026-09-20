import { motion, useMotionValue, useTransform } from 'framer-motion';

const HeroTechVisual = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-180, 180], [12, -12]);
  const rotateY = useTransform(x, [-180, 180], [-12, 12]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-full min-h-[300px] sm:min-h-[360px] flex items-center justify-center p-4 perspective-[1200px]"
    >
      <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.12),transparent_45%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.18),transparent_30%)] blur-2xl" />
      <div className="absolute h-52 w-52 rounded-full border border-cyan-400/20 animate-pulse" />
      <div className="absolute h-72 w-72 rounded-full border border-indigo-400/20 animate-[spin_18s_linear_infinite]" />
      <div className="absolute h-80 w-80 rounded-full border border-purple-400/10 animate-[spin_25s_linear_infinite_reverse]" />

      <motion.div
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        transition={{ type: 'spring', stiffness: 180, damping: 18 }}
        className="relative w-full max-w-[260px] sm:max-w-[300px] rounded-[28px] bg-slate-950/80 border border-slate-700/80 p-3 sm:p-4 shadow-[0_25px_70px_rgba(34,211,238,0.18)] backdrop-blur-2xl group cursor-grab active:cursor-grabbing"
      >
        <div className="absolute -inset-[1.5px] rounded-[28px] bg-gradient-to-br from-cyan-400 via-indigo-500 to-violet-500 opacity-70 blur-sm group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative overflow-hidden rounded-[22px] border border-slate-700 bg-slate-900 shadow-inner shadow-slate-950/80">
          <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between px-3 py-2">
            <span className="rounded-full border border-cyan-400/40 bg-cyan-500/10 px-2 py-1 text-[9px] font-mono uppercase tracking-[0.2em] text-cyan-300">
              React
            </span>
            <span className="rounded-full border border-indigo-400/40 bg-indigo-500/10 px-2 py-1 text-[9px] font-mono uppercase tracking-[0.2em] text-indigo-300">
              UI / Data
            </span>
          </div>

          <div className="relative h-[255px] sm:h-[300px] overflow-hidden">
            <img
              src="/akash_profile.jpg"
              alt="Akash Pandey"
              className="h-full w-full object-cover object-top saturate-110 contrast-105 brightness-95 transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#020817]/85 via-[#020817]/15 to-transparent" />
            <div className="absolute inset-x-3 bottom-3 z-10 flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/60 px-3 py-2 backdrop-blur-md">
              <div>
                <div className="text-[10px] uppercase tracking-[0.24em] text-slate-400">Profile</div>
                <div className="text-sm font-semibold text-white">Akash Pandey</div>
              </div>
              <div className="flex h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_14px_rgba(52,211,153,0.9)]" />
            </div>
          </div>
        </div>

        <div className="absolute -left-3 top-8 z-20 hidden rounded-xl border border-cyan-400/30 bg-slate-950/80 px-2 py-1 text-[10px] font-mono text-cyan-300 shadow-lg shadow-cyan-500/10 sm:block">
          Frontend
        </div>
        <div className="absolute -right-2 bottom-10 z-20 hidden rounded-xl border border-violet-400/30 bg-slate-950/80 px-2 py-1 text-[10px] font-mono text-violet-300 shadow-lg shadow-violet-500/10 sm:block">
          CTI / D3
        </div>
      </motion.div>
    </div>
  );
};

export default HeroTechVisual;
