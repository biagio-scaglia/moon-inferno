import React, { useRef, type HTMLAttributes, type ReactNode } from 'react';

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
  style,
  ...props
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const glareRef = useRef<HTMLDivElement>(null);
  const animFrameRef = useRef<number | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const glare = glareRef.current;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -maxTilt;
    const rotateY = ((x - centerX) / centerX) * maxTilt;

    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;

    if (animFrameRef.current) {
      cancelAnimationFrame(animFrameRef.current);
    }

    animFrameRef.current = requestAnimationFrame(() => {
      card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`;
      if (glare) {
        glare.style.background = `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255, 255, 255, ${glareOpacity}) 0%, rgba(255, 0, 128, 0.15) 30%, transparent 70%)`;
        glare.style.opacity = '1';
      }
    });
  };

  const handleMouseLeave = () => {
    if (animFrameRef.current) {
      cancelAnimationFrame(animFrameRef.current);
    }
    if (cardRef.current) {
      cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    }
    if (glareRef.current) {
      glareRef.current.style.opacity = '0';
    }
  };

  const classes = ['moon-holocard', `moon-holocard--${variant}`, className].filter(Boolean).join(' ');

  return (
    <div
      ref={cardRef}
      className={classes}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg)',
        transition: 'transform 0.1s ease-out',
        ...style,
      }}
      {...props}
    >
      <div className="moon-holocard__content">{children}</div>

      <div
        ref={glareRef}
        className="moon-holocard__glare"
        style={{ opacity: 0 }}
        aria-hidden="true"
      />
    </div>
  );
};
