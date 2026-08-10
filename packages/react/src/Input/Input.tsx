import { forwardRef, useId, type InputHTMLAttributes } from 'react';
import './Input.css';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  errorMessage?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      helperText,
      errorMessage,
      id: customId,
      className = '',
      disabled,
      ...props
    },
    ref
  ) => {
    const generatedId = useId();
    const inputId = customId || generatedId;
    const helperId = `${inputId}-helper`;
    const errorId = `${inputId}-error`;

    const isError = Boolean(errorMessage);
    const describedBy = [
      helperText ? helperId : null,
      isError ? errorId : null,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div className="mi-input-field">
        {label && (
          <label htmlFor={inputId} className="mi-input-label">
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          disabled={disabled}
          aria-invalid={isError}
          aria-describedby={describedBy || undefined}
          className={`mi-input ${isError ? 'mi-input--error' : ''} ${className}`.trim()}
          {...props}
        />
        {isError ? (
          <span id={errorId} className="mi-input-helper mi-input-helper--error">
            {errorMessage}
          </span>
        ) : (
          helperText && (
            <span id={helperId} className="mi-input-helper">
              {helperText}
            </span>
          )
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
