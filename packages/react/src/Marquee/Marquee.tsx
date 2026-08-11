import { forwardRef, type ReactNode, type HTMLAttributes } from 'react';
import './Marquee.css';

export interface MarqueeProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  speed?: number;
  direction?: 'left' | 'right';
  pauseOnHover?: boolean;
  variant?: 'default' | 'pixel';
}

export const Marquee = forwardRef<HTMLDivElement, MarqueeProps>(
  (
    {
      children,
      speed = 25,
      direction = 'left',
      pauseOnHover = true,
      variant = 'default',
      className = '',
      ...props
    },
    ref
  ) => {
    const animationStyle = { animationDuration: `${speed}s` };

    return (
      <div
        ref={ref}
        role="region"
        aria-label="Marquee content"
        className={`mi-marquee mi-marquee--${direction} ${pauseOnHover ? 'mi-marquee--pause' : ''} ${variant === 'pixel' ? 'mi-marquee--pixel' : ''} ${className}`.trim()}
        {...props}
      >
        <div className="mi-marquee__track" style={animationStyle}>
          {children}
        </div>
        <div className="mi-marquee__track" style={animationStyle} aria-hidden="true">
          {children}
        </div>
      </div>
    );
  }
);

Marquee.displayName = 'Marquee';
