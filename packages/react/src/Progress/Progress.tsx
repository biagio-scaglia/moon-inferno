import { forwardRef, type HTMLAttributes } from 'react';
import './Progress.css';

export interface ProgressProps extends HTMLAttributes<HTMLDivElement> {
  value: number;
  max?: number;
  label?: string;
  showValue?: boolean;
  variant?: 'inferno' | 'pixel' | 'striped';
  animated?: boolean;
}

export const Progress = forwardRef<HTMLDivElement, ProgressProps>(
  (
    {
      value,
      max = 100,
      label,
      showValue = true,
      variant = 'inferno',
      animated = false,
      className = '',
      ...props
    },
    ref
  ) => {
    const percentage = Math.min(100, Math.max(0, Math.round((value / max) * 100)));

    return (
      <div ref={ref} className={`mi-progress-container ${className}`.trim()} {...props}>
        {(label || showValue) && (
          <div className="mi-progress-header">
            {label && <span>{label}</span>}
            {showValue && <span>{percentage}%</span>}
          </div>
        )}
        <div
          role="progressbar"
          aria-valuenow={value}
          aria-valuemin={0}
          aria-valuemax={max}
          className={`mi-progress-track mi-progress-track--${variant}`}
        >
          <div
            className={`mi-progress-bar ${variant === 'striped' || animated ? 'mi-progress-bar--striped' : ''} ${animated ? 'mi-progress-bar--animated' : ''}`}
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    );
  }
);

Progress.displayName = 'Progress';
