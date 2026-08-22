import { type HTMLAttributes } from 'react';
import './MoonHealthMeter.css';

export interface MoonHealthMeterProps extends HTMLAttributes<HTMLDivElement> {
  value?: number;
  current?: number;
  max?: number;
  label?: string;
  type?: 'health' | 'mana' | 'energy' | 'shield';
  showPercentage?: boolean;
  variant?: 'inferno' | 'pixel' | 'terminal';
}

export const MoonHealthMeter = ({
  value,
  current,
  max = 100,
  label,
  type = 'health',
  showPercentage = true,
  variant = 'inferno',
  className = '',
  ...props
}: MoonHealthMeterProps) => {
  const actualValue = value !== undefined ? value : current !== undefined ? current : 0;
  const percentage = Math.min(100, Math.max(0, (actualValue / max) * 100));
  const defaultLabel = label || type.toUpperCase();

  return (
    <div
      className={`mi-healthmeter ${variant === 'pixel' ? 'mi-healthmeter--pixel' : ''} ${className}`.trim()}
      {...props}
    >
      <div className="mi-healthmeter-header">
        <span>{defaultLabel}</span>
        {showPercentage && <span>{actualValue} / {max} ({percentage.toFixed(0)}%)</span>}
      </div>

      <div className="mi-healthmeter-track">
        {/* Native HTML5 meter for 100% semantic accessibility */}
        <meter
          min={0}
          max={max}
          value={actualValue}
          aria-label={`${defaultLabel}: ${actualValue} of ${max}`}
          className="mi-healthmeter-native"
        >
          {percentage.toFixed(0)}%
        </meter>

        <div
          className={`mi-healthmeter-bar mi-healthmeter-bar--${type}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

export const HealthMeter = MoonHealthMeter;
