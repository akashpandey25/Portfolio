import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleHoverStart = (e) => {
      const target = e.target;
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a') ||
        target.classList.contains('interactive')
      ) {
        setIsHovered(true);
      }
    };

    const handleHoverEnd = () => {
      setIsHovered(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseover', handleHoverStart);
    document.addEventListener('mouseout', handleHoverEnd);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleHoverStart);
      document.removeEventListener('mouseout', handleHoverEnd);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden hidden md:block">
      {/* Outer Glow Ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-cyan-400/40 bg-cyan-500/10 backdrop-blur-[1px] pointer-events-none"
        animate={{
          x: mousePosition.x - (isHovered ? 24 : 16),
          y: mousePosition.y - (isHovered ? 24 : 16),
          width: isHovered ? 48 : 32,
          height: isHovered ? 48 : 32,
          scale: isClicking ? 0.85 : 1,
          borderColor: isHovered ? 'rgba(56, 189, 248, 0.8)' : 'rgba(56, 189, 248, 0.4)',
        }}
        transition={{ type: 'spring', stiffness: 400, damping: 28, mass: 0.5 }}
      />

      {/* Inner Glowing Dot */}
      <motion.div
        className="fixed top-0 left-0 rounded-full bg-cyan-400 shadow-[0_0_12px_#38bdf8] pointer-events-none"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          width: 8,
          height: 8,
          scale: isHovered ? 1.5 : 1,
        }}
        transition={{ type: 'spring', stiffness: 900, damping: 40 }}
      />
    </div>
  );
};

export default CustomCursor;
