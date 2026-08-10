import { forwardRef, type HTMLAttributes } from 'react';
import './Loader.css';

export interface LoaderProps extends HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'inferno' | 'pixel' | 'pulse';
  label?: string;
}

export const Loader = forwardRef<HTMLDivElement, LoaderProps>(
  ({ size = 'md', variant = 'inferno', label = 'Loading...', className = '', ...props }, ref) => {
    return (
      <div
        ref={ref}
        role="status"
        aria-label={label}
        className={`mi-loader mi-loader--${size} mi-loader--${variant} ${className}`.trim()}
        {...props}
      >
        <div className="mi-loader__spinner" aria-hidden="true" />
      </div>
    );
  }
);

Loader.displayName = 'Loader';
