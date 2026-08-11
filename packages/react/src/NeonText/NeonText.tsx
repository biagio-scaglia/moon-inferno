import { forwardRef, type ElementType, type ReactNode, type HTMLAttributes } from 'react';
import './NeonText.css';

export interface NeonTextProps extends HTMLAttributes<HTMLElement> {
  text?: string;
  children?: ReactNode;
  color?: 'inferno' | 'cyan' | 'green' | 'magenta';
  flicker?: boolean;
  as?: ElementType;
}

export const NeonText = forwardRef<HTMLElement, NeonTextProps>(
  ({ text, children, color = 'inferno', flicker = false, as: Component = 'span', className = '', ...props }, ref) => {
    const content = text ?? children;
    return (
      <Component
        ref={ref}
        className={`mi-neon-text mi-neon-text--${color} ${flicker ? 'mi-neon-text--flicker' : ''} ${className}`.trim()}
        {...props}
      >
        {content}
      </Component>
    );
  }
);

NeonText.displayName = 'NeonText';
