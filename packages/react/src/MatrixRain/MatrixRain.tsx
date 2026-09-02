import { useEffect, useRef, type FC } from 'react';
import { isReducedMotionPreferred } from '@moon-inferno/core';
import './MatrixRain.css';

export interface MatrixRainProps {
  color?: string;
  fontSize?: number;
  speed?: number;
  className?: string;
}

export const MatrixRain: FC<MatrixRainProps> = ({
  color = '#FF4D00',
  fontSize = 14,
  speed = 33,
  className = '',
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    if (isReducedMotionPreferred()) {
      return undefined;
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) return undefined;

    let animationFrameId: number;
    let drops: number[] = [];

    const chars = '0123456789ABCDEFMOONINFERNO⚡λΨΞ010101';

    const resize = () => {
      const parent = canvas.parentElement || document.body;
      canvas.width = parent.clientWidth;
      canvas.height = parent.clientHeight;
      const columns = Math.max(1, Math.floor(canvas.width / fontSize));
      if (drops.length !== columns) {
        drops = Array.from({ length: columns }, () => Math.floor(Math.random() * -100));
      }
    };

    resize();
    window.addEventListener('resize', resize);

    let lastTime = 0;
    const render = (time: number) => {
      if (time - lastTime >= speed) {
        lastTime = time;

        ctx.fillStyle = 'rgba(10, 9, 13, 0.15)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = color;
        ctx.font = `${fontSize}px monospace`;

        for (let i = 0; i < drops.length; i++) {
          const char = chars[Math.floor(Math.random() * chars.length)] || '0';
          const dropVal = drops[i];

          if (dropVal !== undefined) {
            const x = i * fontSize;
            const y = dropVal * fontSize;

            ctx.fillText(char, x, y);

            if (y > canvas.height && Math.random() > 0.975) {
              drops[i] = 0;
            } else {
              drops[i] = dropVal + 1;
            }
          }
        }
      }
      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [color, fontSize, speed]);

  return <canvas ref={canvasRef} className={`mi-matrix-rain ${className}`.trim()} aria-hidden="true" />;
};
