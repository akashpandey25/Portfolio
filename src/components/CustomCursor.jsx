import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isFinePointer, setIsFinePointer] = useState(false);

  useEffect(() => {
    // Only enable on desktop with fine mouse pointer and without reduced motion
    const fineQuery = window.matchMedia('(pointer: fine)');
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    if (!fineQuery.matches || motionQuery.matches) {
      setIsFinePointer(false);
      return;
    }
    setIsFinePointer(true);

    const handleMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleOver = (e) => {
      const target = e.target;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.getAttribute('role') === 'button' ||
        target.classList.contains('interactive')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseover', handleOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseover', handleOver);
    };
  }, [isVisible]);

  if (!isFinePointer || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden select-none">
      {/* Outer subtle aura */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border pointer-events-none"
        animate={{
          x: pos.x - (isHovered ? 24 : 14),
          y: pos.y - (isHovered ? 24 : 14),
          width: isHovered ? 48 : 28,
          height: isHovered ? 48 : 28,
          borderColor: isHovered ? 'rgba(167, 139, 250, 0.6)' : 'rgba(255, 255, 255, 0.2)',
          backgroundColor: isHovered ? 'rgba(167, 139, 250, 0.08)' : 'transparent',
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 30, mass: 0.3 }}
      />

      {/* Center precision dot */}
      <motion.div
        className="fixed top-0 left-0 rounded-full bg-white pointer-events-none shadow-[0_0_8px_rgba(255,255,255,0.8)]"
        animate={{
          x: pos.x - 2.5,
          y: pos.y - 2.5,
          width: 5,
          height: 5,
          scale: isHovered ? 1.4 : 1,
        }}
        transition={{ type: 'spring', stiffness: 1000, damping: 45 }}
      />
    </div>
  );
};

export default CustomCursor;
