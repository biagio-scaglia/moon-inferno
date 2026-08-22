import { forwardRef, type HTMLAttributes, type ReactNode } from 'react';
import './Badge.css';

export type BadgeVariant = 'inferno' | 'pixel' | 'success' | 'error' | 'danger' | 'warning' | 'info' | 'outline' | 'ghost' | 'default' | 'primary';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  icon?: ReactNode;
}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ children, variant = 'inferno', icon, className = '', ...props }, ref) => {
    const normalizedVariant = (variant === 'default' || variant === 'primary') ? 'inferno' : variant === 'danger' ? 'error' : variant;

    return (
      <span
        ref={ref}
        className={`mi-badge mi-badge--${normalizedVariant} ${className}`.trim()}
        {...props}
      >
        {icon && <span className="mi-badge__icon">{icon}</span>}
        <span>{children}</span>
      </span>
    );
  }
);

Badge.displayName = 'Badge';
