import { forwardRef, type HTMLAttributes } from 'react';
import './Container.css';

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ children, size = 'xl', className = '', ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`mi-container mi-container--${size} ${className}`.trim()}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Container.displayName = 'Container';
