import { forwardRef, type InputHTMLAttributes } from 'react';
import './Switch.css';

export interface SwitchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
}

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  ({ label, disabled, className = '', id, ...props }, ref) => {
    const inputId = id || (label ? `mi-switch-${label.toLowerCase().replace(/\s+/g, '-')}` : undefined);

    return (
      <label
        htmlFor={inputId}
        className={`mi-switch-label ${disabled ? 'mi-switch-label--disabled' : ''} ${className}`.trim()}
      >
        <input
          ref={ref}
          type="checkbox"
          role="switch"
          id={inputId}
          disabled={disabled}
          className="mi-switch-input"
          {...props}
        />
        <span className="mi-switch-track" aria-hidden="true">
          <span className="mi-switch-thumb" />
        </span>
        {label && <span>{label}</span>}
      </label>
    );
  }
);

Switch.displayName = 'Switch';
