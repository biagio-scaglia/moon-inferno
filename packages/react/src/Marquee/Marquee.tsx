import { forwardRef, useState, type ReactNode, type HTMLAttributes } from 'react';
import './Marquee.css';

export interface MarqueeProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  speed?: number;
  direction?: 'left' | 'right';
  pauseOnHover?: boolean;
  pauseOnFocus?: boolean;
  isPaused?: boolean;
  defaultPaused?: boolean;
  onPauseToggle?: (isPaused: boolean) => void;
  showPauseButton?: boolean;
  pauseButtonPosition?: 'left' | 'right';
  variant?: 'default' | 'pixel';
}

export const Marquee = forwardRef<HTMLDivElement, MarqueeProps>(
  (
    {
      children,
      speed = 25,
      direction = 'left',
      pauseOnHover = true,
      pauseOnFocus = true,
      isPaused: isPausedProp,
      defaultPaused = false,
      onPauseToggle,
      showPauseButton = true,
      pauseButtonPosition = 'right',
      variant = 'default',
      className = '',
      ...props
    },
    ref
  ) => {
    const [internalPaused, setInternalPaused] = useState(defaultPaused);
    const isPaused = isPausedProp !== undefined ? isPausedProp : internalPaused;

    const handleTogglePause = () => {
      const nextState = !isPaused;
      if (isPausedProp === undefined) {
        setInternalPaused(nextState);
      }
      onPauseToggle?.(nextState);
    };

    const animationStyle = { animationDuration: `${speed}s` };

    return (
      <div
        ref={ref}
        className={[
          'mi-marquee',
          `mi-marquee--${direction}`,
          pauseOnHover ? 'mi-marquee--pause-hover' : '',
          pauseOnFocus ? 'mi-marquee--pause-focus' : '',
          isPaused ? 'mi-marquee--paused' : 'mi-marquee--playing',
          variant === 'pixel' ? 'mi-marquee--pixel' : '',
          showPauseButton ? `mi-marquee--has-controls mi-marquee--controls-${pauseButtonPosition}` : '',
          className,
        ].filter(Boolean).join(' ')}
        {...props}
      >
        <div className="mi-marquee__viewport">
          <div className="mi-marquee__track" style={animationStyle}>
            {children}
          </div>
          <div className="mi-marquee__track" style={animationStyle} aria-hidden="true">
            {children}
          </div>
        </div>

        {showPauseButton && (
          <button
            type="button"
            className="mi-marquee__toggle-btn"
            aria-label={isPaused ? 'Play marquee scrolling text animation (WCAG 2.2.2)' : 'Pause marquee scrolling text animation (WCAG 2.2.2)'}
            aria-pressed={isPaused}
            onClick={handleTogglePause}
          >
            {isPaused ? (
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            ) : (
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
              </svg>
            )}
            <span className="mi-marquee__toggle-label">{isPaused ? 'PLAY' : 'PAUSE'}</span>
          </button>
        )}
      </div>
    );
  }
);

Marquee.displayName = 'Marquee';
