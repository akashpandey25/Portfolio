import { useEffect, useState } from 'react';

const CinematicBackground = () => {
  const [mousePos, setMousePos] = useState({ x: 50, y: 30 });
  const [hasPointer, setHasPointer] = useState(true);

  useEffect(() => {
    // Check if device supports fine pointer (mouse/trackpad)
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch) {
      setHasPointer(false);
      return;
    }

    const handleMouseMove = (e) => {
      // Calculate normalized percentage coordinates
      const x = Math.round((e.clientX / window.innerWidth) * 100);
      const y = Math.round((e.clientY / window.innerHeight) * 100);
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none"
    >
      {/* Base Canvas Color */}
      <div className="absolute inset-0 bg-[#07070A]" />

      {/* Atmospheric Top Glows */}
      <div
        className="absolute -top-[20vw] -left-[10vw] w-[50vw] h-[50vw] rounded-full blur-[140px] opacity-25"
        style={{
          background: 'radial-gradient(circle, #A78BFA 0%, rgba(167, 139, 250, 0) 70%)',
        }}
      />
      <div
        className="absolute -top-[15vw] -right-[10vw] w-[45vw] h-[45vw] rounded-full blur-[140px] opacity-20"
        style={{
          background: 'radial-gradient(circle, #60A5FA 0%, rgba(96, 165, 250, 0) 70%)',
        }}
      />

      {/* Subtle Mouse-Follow Ambient Spotlight */}
      {hasPointer && (
        <div
          className="absolute inset-0 transition-opacity duration-700 ease-out"
          style={{
            background: `radial-gradient(650px circle at ${mousePos.x}% ${mousePos.y}%, rgba(167, 139, 250, 0.08) 0%, rgba(96, 165, 250, 0.04) 40%, transparent 80%)`,
          }}
        />
      )}

      {/* Subtle Architectural Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.4) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.4) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
          maskImage: 'radial-gradient(ellipse 75% 65% at 50% 40%, black 40%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 75% 65% at 50% 40%, black 40%, transparent 100%)',
        }}
      />

      {/* Tactile Noise Texture */}
      <div className="absolute inset-0 noise-bg pointer-events-none" />
    </div>
  );
};

export default CinematicBackground;
