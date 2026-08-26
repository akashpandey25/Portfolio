import { motion, useMotionValue, useTransform } from 'framer-motion';

const HeroTechVisual = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-150, 150], [10, -10]);
  const rotateY = useTransform(x, [-150, 150], [-10, 10]);

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
      className="w-full h-full min-h-[300px] sm:min-h-[360px] relative flex items-center justify-center p-4 perspective-1000"
    >
      {/* Ambient Radial Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 via-indigo-500/15 to-purple-600/10 rounded-3xl blur-3xl pointer-events-none" />

      {/* 3D Interactive Card Container */}
      <motion.div
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        className="relative w-full max-w-[250px] sm:max-w-[290px] rounded-3xl bg-slate-950/80 border border-slate-800 p-3 sm:p-4 shadow-2xl shadow-cyan-500/20 backdrop-blur-2xl group cursor-grab active:cursor-grabbing"
      >
        {/* Holographic Glowing Border Accent */}
        <div className="absolute -inset-[1px] bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-500 rounded-3xl opacity-40 group-hover:opacity-75 blur-sm transition-opacity pointer-events-none" />

        {/* Profile Image Container */}
        <div className="relative w-full h-[250px] sm:h-[290px] rounded-2xl overflow-hidden border border-slate-700/80 bg-slate-900 group-hover:border-cyan-500/50 transition-colors">
          <img
            src="/akash_profile.jpg"
            alt="Akash Pandey"
            className="w-full h-full object-cover object-top scale-105 group-hover:scale-110 transition-transform duration-500"
          />

          {/* Subtle Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#04060a]/60 via-transparent to-transparent pointer-events-none" />
        </div>
      </motion.div>
    </div>
  );
};

export default HeroTechVisual;
