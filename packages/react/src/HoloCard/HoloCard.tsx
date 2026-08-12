import React, { useState, useRef, type HTMLAttributes, type ReactNode } from 'react';

export interface HoloCardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'inferno' | 'cyber' | 'y2k';
  maxTilt?: number;
  glareOpacity?: number;
  children: ReactNode;
}

export const HoloCard: React.FC<HoloCardProps> = ({
  variant = 'inferno',
  maxTilt = 15,
  glareOpacity = 0.4,
  className = '',
  children,
  ...props
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transformStr, setTransformStr] = useState<string>('perspective(1000px) rotateX(0deg) rotateY(0deg)');
  const [glarePos, setGlarePos] = useState<{ x: number; y: number; opacity: number }>({
    x: 50,
    y: 50,
    opacity: 0,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -maxTilt;
    const rotateY = ((x - centerX) / centerX) * maxTilt;

    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;

    setTransformStr(`perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`);
    setGlarePos({ x: glareX, y: glareY, opacity: glareOpacity });
  };

  const handleMouseLeave = () => {
    setTransformStr('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
    setGlarePos((prev) => ({ ...prev, opacity: 0 }));
  };

  const classes = ['moon-holocard', `moon-holocard--${variant}`, className].filter(Boolean).join(' ');

  return (
    <div
      ref={cardRef}
      className={classes}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStr }}
      {...props}
    >
      <div className="moon-holocard__content">{children}</div>

      <div
        className="moon-holocard__glare"
        style={{
          background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(255, 255, 255, ${glarePos.opacity}) 0%, rgba(255, 0, 128, 0.15) 30%, transparent 70%)`,
          opacity: glarePos.opacity > 0 ? 1 : 0,
        }}
        aria-hidden="true"
      />
    </div>
  );
};
