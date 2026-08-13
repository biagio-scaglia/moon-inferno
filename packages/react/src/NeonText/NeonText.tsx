import { forwardRef, type ElementType, type ReactNode, type HTMLAttributes } from 'react';
import './NeonText.css';

export interface NeonTextProps extends HTMLAttributes<HTMLElement> {
  text?: string;
  children?: ReactNode;
  color?: 'inferno' | 'cyan' | 'green' | 'magenta';
  size?: 'sm' | 'md' | 'lg' | 'xl' | string;
  flicker?: boolean;
  as?: ElementType;
}

export const NeonText = forwardRef<HTMLElement, NeonTextProps>(
  (
    {
      text,
      children,
      color = 'inferno',
      size = 'md',
      flicker = false,
      as: Component = 'span',
      className = '',
      style,
      ...props
    },
    ref
  ) => {
    const content = text ?? children;
    const isPresetSize = ['sm', 'md', 'lg', 'xl'].includes(size);
    const sizeStyle = !isPresetSize && size ? { fontSize: size } : {};

    return (
      <Component
        ref={ref}
        className={`mi-neon-text mi-neon-text--${color} ${isPresetSize ? `mi-neon-text--${size}` : ''} ${flicker ? 'mi-neon-text--flicker' : ''} ${className}`.trim()}
        style={{ ...sizeStyle, ...style }}
        {...props}
      >
        {content}
      </Component>
    );
  }
);

NeonText.displayName = 'NeonText';
