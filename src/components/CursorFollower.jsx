import React, { useEffect, useState } from 'react';

/**
 * CursorFollower Component (Easter Egg)
 * Smoothly tracks mouse coordinates with an illuminated cyber-emerald ring
 * and an electric lime core spark with inertia damping.
 */
export default function CursorFollower() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailing, setTrailing] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let animationFrameId;
    let targetX = -100;
    let targetY = -100;
    let currentX = -100;
    let currentY = -100;

    const handleMouseMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
      setPosition({ x: targetX, y: targetY });
      setIsVisible(true);

      // Check if hovering interactive elements
      const target = e.target;
      if (
        target &&
        (target.tagName === 'BUTTON' ||
          target.tagName === 'A' ||
          target.tagName === 'INPUT' ||
          target.tagName === 'TEXTAREA' ||
          target.closest('button') ||
          target.closest('a') ||
          target.classList.contains('cursor-pointer'))
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Smooth inertia render loop for the trailing spark ring
    const render = () => {
      currentX += (targetX - currentX) * 0.18;
      currentY += (targetY - currentY) * 0.18;
      setTrailing({ x: currentX, y: currentY });
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer Ethereal Emerald Glowing Ring */}
      <div
        className="fixed pointer-events-none z-50 rounded-full transition-transform duration-75 ease-out hidden sm:block transform-gpu"
        style={{
          left: `${trailing.x}px`,
          top: `${trailing.y}px`,
          width: isHovered ? '48px' : '30px',
          height: isHovered ? '48px' : '30px',
          transform: 'translate(-50%, -50%)',
          border: isHovered ? '1.5px solid rgba(163, 230, 53, 0.8)' : '1px solid rgba(16, 185, 129, 0.45)',
          backgroundColor: isHovered ? 'rgba(16, 185, 129, 0.08)' : 'rgba(16, 185, 129, 0.03)',
          boxShadow: isHovered
            ? '0 0 20px rgba(163, 230, 53, 0.4), inset 0 0 10px rgba(16, 185, 129, 0.2)'
            : '0 0 12px rgba(16, 185, 129, 0.25)',
          transition: 'width 0.2s ease, height 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease',
        }}
      />

      {/* Center High-Voltage Lime Core Dot */}
      <div
        className="fixed pointer-events-none z-50 rounded-full hidden sm:block transform-gpu"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: '5px',
          height: '5px',
          transform: 'translate(-50%, -50%)',
          backgroundColor: '#a3e635',
          boxShadow: '0 0 8px #a3e635, 0 0 14px #10b981',
        }}
      />
    </>
  );
}

