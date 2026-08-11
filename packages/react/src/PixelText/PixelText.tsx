import { forwardRef, type ElementType, type ReactNode, type HTMLAttributes } from 'react';
import './PixelText.css';

export interface PixelTextProps extends HTMLAttributes<HTMLElement> {
  text?: string;
  children?: ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  as?: ElementType;
}

export const PixelText = forwardRef<HTMLElement, PixelTextProps>(
  ({ text, children, size = 'md', as: Component = 'span', className = '', ...props }, ref) => {
    const content = text ?? children;
    return (
      <Component
        ref={ref}
        className={`mi-pixel-text mi-pixel-text--${size} ${className}`.trim()}
        {...props}
      >
        {content}
      </Component>
    );
  }
);

PixelText.displayName = 'PixelText';
