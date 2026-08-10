import { forwardRef, type HTMLAttributes, type ReactNode } from 'react';
import './Badge.css';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'inferno' | 'pixel' | 'success' | 'error' | 'outline';
  icon?: ReactNode;
}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ children, variant = 'inferno', icon, className = '', ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={`mi-badge mi-badge--${variant} ${className}`.trim()}
        {...props}
      >
        {icon && <span className="mi-badge__icon">{icon}</span>}
        <span>{children}</span>
      </span>
    );
  }
);

Badge.displayName = 'Badge';
