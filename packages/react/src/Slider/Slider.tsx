import { forwardRef, useMemo, type InputHTMLAttributes } from 'react';
import './Slider.css';

export interface SliderProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'value' | 'onChange'> {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  label?: string;
  showValue?: boolean;
  variant?: 'inferno' | 'pixel';
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
      variant = 'inferno',
      disabled,
      className = '',
      id,
      style,
      ...props
    },
    ref
  ) => {
    const inputId = id || (label ? `mi-slider-${label.toLowerCase().replace(/\s+/g, '-')}` : undefined);

    const percentage = useMemo(() => {
      if (max <= min) return 0;
      return Math.min(100, Math.max(0, ((value - min) / (max - min)) * 100));
    }, [value, min, max]);

    const trackStyle = {
      background: `linear-gradient(90deg, var(--mi-color-primary, #FF4D00) 0%, var(--mi-color-primary, #FF4D00) ${percentage}%, var(--mi-color-bg, #0A090D) ${percentage}%, var(--mi-color-bg, #0A090D) 100%)`,
      ...style,
    };

    return (
      <div className={`mi-slider-container ${variant === 'pixel' ? 'mi-slider-container--pixel' : ''} ${className}`.trim()}>
        {(label || showValue) && (
          <div className="mi-slider-header">
            {label && <label htmlFor={inputId}>{label}</label>}
            {showValue && <span>{value}</span>}
          </div>
        )}
        <div className="mi-slider-track-wrapper">
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
            style={trackStyle}
            aria-valuenow={value}
            aria-valuemin={min}
            aria-valuemax={max}
            {...props}
          />
        </div>
      </div>
    );
  }
);

Slider.displayName = 'Slider';
