import { forwardRef, type InputHTMLAttributes } from 'react';
import './Slider.css';

export interface SliderProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'value' | 'onChange'> {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  label?: string;
  showValue?: boolean;
}

export const Slider = forwardRef<HTMLInputElement, SliderProps>(
  (
    {
      value,
      onChange,
      min = 0,
      max = 100,
      step = 1,
      label,
      showValue = true,
      disabled,
      className = '',
      id,
      ...props
    },
    ref
  ) => {
    const inputId = id || (label ? `mi-slider-${label.toLowerCase().replace(/\s+/g, '-')}` : undefined);

    return (
      <div className={`mi-slider-container ${className}`.trim()}>
        {(label || showValue) && (
          <div className="mi-slider-header">
            {label && <label htmlFor={inputId}>{label}</label>}
            {showValue && <span>{value}</span>}
          </div>
        )}
        <input
          ref={ref}
          type="range"
          id={inputId}
          min={min}
          max={max}
          step={step}
          value={value}
          disabled={disabled}
          onChange={(e) => onChange(Number(e.target.value))}
          className="mi-slider-input"
          {...props}
        />
      </div>
    );
  }
);

Slider.displayName = 'Slider';
