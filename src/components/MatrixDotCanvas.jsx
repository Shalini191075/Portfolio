import React, { useEffect, useRef } from 'react';

/**
 * MatrixDotCanvas Component
 * Renders an interactive Cyber-Emerald matrix-dot grid on HTML5 canvas.
 * Features:
 * - 3D perspective / undulating sine wave effect
 * - Interactive mouse ripple & perspective displacement
 * - Proximity-based neon lime & emerald intensity flare
 * - Touch-enabled for mobile responsiveness
 * - HiDPI / Retina display crispness support
 */
export default function MatrixDotCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse coordinates tracking with smooth damping
    const mouse = {
      x: -1000,
      y: -1000,
      targetX: -1000,
      targetY: -1000,
      active: false,
      radius: 180,
    };

    // Responsive dot grid configuration
    const spacing = 36; // spacing between grid dots in pixels
    let cols = Math.ceil(width / spacing) + 2;
    let rows = Math.ceil(height / spacing) + 2;
    let time = 0;

    // Handle high DPI screens
    const handleResize = () => {
      if (!canvas) return;
      const dpr = window.devicePixelRatio || 1;
      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.scale(dpr, dpr);

      cols = Math.ceil(width / spacing) + 2;
      rows = Math.ceil(height / spacing) + 2;
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.targetX = -1000;
      mouse.targetY = -1000;
      mouse.active = false;
    };

    const handleTouchMove = (e) => {
      if (e.touches.length > 0) {
        const rect = canvas.getBoundingClientRect();
        mouse.targetX = e.touches[0].clientX - rect.left;
        mouse.targetY = e.touches[0].clientY - rect.top;
        mouse.active = true;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleMouseLeave);

    // Render loop
    const render = () => {
      time += 0.025;

      // Smooth mouse interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.1;
      mouse.y += (mouse.targetY - mouse.y) * 0.1;

      // Clear with matte carbon background
      ctx.fillStyle = '#0d1117';
      ctx.fillRect(0, 0, width, height);

      // Cyber subtle vignette gradient
      const vignette = ctx.createRadialGradient(
        width / 2,
        height * 0.45,
        100,
        width / 2,
        height * 0.45,
        Math.max(width, height) * 0.8
      );
      vignette.addColorStop(0, 'rgba(16, 185, 129, 0.04)');
      vignette.addColorStop(0.5, 'rgba(13, 17, 23, 0.4)');
      vignette.addColorStop(1, '#0d1117');
      ctx.fillStyle = vignette;
      ctx.fillRect(0, 0, width, height);

      // Render dots
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const originX = c * spacing;
          const originY = r * spacing;

          // Natural undulating wave motion
          const waveX = Math.sin(time + r * 0.18 + c * 0.12) * 2;
          const waveY = Math.cos(time + c * 0.2 + r * 0.15) * 2.5;

          // Distance and displacement relative to cursor
          const dx = originX - mouse.x;
          const dy = originY - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          let posX = originX + waveX;
          let posY = originY + waveY;
          let dotRadius = 1.25;
          let alpha = 0.22;
          let color = '16, 185, 129'; // emerald rgb

          // Mouse ripple & displacement physics
          if (dist < mouse.radius) {
            const factor = 1 - dist / mouse.radius; // 0 to 1
            const push = Math.sin(factor * Math.PI) * 16;
            const angle = Math.atan2(dy, dx);

            posX += Math.cos(angle) * push;
            posY += Math.sin(angle) * push;

            // Enlarge dot near cursor
            dotRadius = 1.25 + factor * 2.8;
            alpha = 0.35 + factor * 0.65;

            // Transition from emerald to bright lime when close to cursor
            if (factor > 0.45) {
              color = '163, 230, 53'; // bright lime
            }
          }

          // Draw the matrix dot
          ctx.beginPath();
          ctx.arc(posX, posY, dotRadius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${color}, ${alpha})`;
          ctx.fill();

          // If very close to cursor, add soft neon glow
          if (dist < mouse.radius * 0.45) {
            ctx.beginPath();
            ctx.arc(posX, posY, dotRadius * 2.2, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(163, 230, 53, 0.18)`;
            ctx.fill();
          }
        }
      }

      // Draw faint cyber connection beam to nearest dots if mouse is active
      if (mouse.active && mouse.x > 0 && mouse.y > 0) {
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 4, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(163, 230, 53, 0.8)';
        ctx.shadowColor = '#10b981';
        ctx.shadowBlur = 12;
        ctx.fill();
        ctx.shadowBlur = 0; // reset
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 block w-full h-full"
      style={{ background: '#0d1117' }}
    />
  );
}

