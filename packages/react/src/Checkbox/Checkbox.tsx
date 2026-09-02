import { forwardRef, useId, type InputHTMLAttributes } from 'react';
import { CheckIcon } from '@moon-inferno/icons';
import './Checkbox.css';

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  description?: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, description, disabled, className = '', id, ...props }, ref) => {
    const generatedId = useId();
    const inputId = id || generatedId;
    const descId = description ? `${inputId}-desc` : undefined;

    return (
      <label
        htmlFor={inputId}
        className={`mi-checkbox-label ${disabled ? 'mi-checkbox-label--disabled' : ''} ${className}`.trim()}
      >
        <input
          ref={ref}
          type="checkbox"
          id={inputId}
          aria-describedby={descId}
          disabled={disabled}
          className="mi-checkbox-input"
          {...props}
        />
        <span className="mi-checkbox-box" aria-hidden="true">
          <CheckIcon size={14} />
        </span>
        {(label || description) && (
          <span className="mi-checkbox-text">
            {label && <span>{label}</span>}
            {description && <span id={descId} className="mi-checkbox-description">{description}</span>}
          </span>
        )}
      </label>
    );
  }
);

Checkbox.displayName = 'Checkbox';
