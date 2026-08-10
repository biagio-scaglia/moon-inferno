import { forwardRef, type HTMLAttributes } from 'react';
import './SignalLight.css';

export interface SignalLightProps extends HTMLAttributes<HTMLDivElement> {
  status?: 'online' | 'offline' | 'warning' | 'busy';
  pulse?: boolean;
  label?: string;
}

export const SignalLight = forwardRef<HTMLDivElement, SignalLightProps>(
  ({ status = 'online', pulse = true, label, className = '', ...props }, ref) => {
    return (
      <div ref={ref} className={`mi-signal-light ${className}`.trim()} {...props}>
        <span
          className={`mi-signal-beacon mi-signal-beacon--${status} ${pulse ? 'mi-signal-beacon--pulse' : ''}`}
          aria-hidden="true"
        />
        {label && <span>{label}</span>}
      </div>
    );
  }
);

SignalLight.displayName = 'SignalLight';
