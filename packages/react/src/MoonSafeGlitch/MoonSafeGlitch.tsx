import { useState, useEffect, type ElementType, type HTMLAttributes } from 'react';
import './MoonSafeGlitch.css';

export interface MoonSafeGlitchProps extends HTMLAttributes<HTMLElement> {
  text: string;
  as?: ElementType;
  intensity?: 'low' | 'medium' | 'high';
  disabled?: boolean;
}

export const MoonSafeGlitch = ({
  text,
  as: Component = 'span',
  intensity = 'medium',
  disabled = false,
  className = '',
  ...props
}: MoonSafeGlitchProps) => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const shouldGlitch = !disabled && !prefersReducedMotion;

  return (
    <Component
      data-text={text}
      className={`mi-safeglitch ${shouldGlitch ? 'mi-safeglitch--active' : ''} ${className}`.trim()}
      {...props}
    >
      {text}
    </Component>
  );
};

export const SafeGlitch = MoonSafeGlitch;
