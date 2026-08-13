import { useState, useEffect, type FC } from 'react';
import { isReducedMotionPreferred, onReducedMotionChange } from '@moon-inferno/core';
import './CRTEffect.css';

export interface CRTEffectProps {
  scanlines?: boolean;
  flicker?: boolean;
  intensity?: 'subtle' | 'medium' | 'high' | number;
  className?: string;
}

export const CRTEffect: FC<CRTEffectProps> = ({
  scanlines = true,
  flicker = true,
  intensity = 'medium',
  className = '',
}) => {
  const [reducedMotion, setReducedMotion] = useState(isReducedMotionPreferred());

  useEffect(() => {
    return onReducedMotionChange(setReducedMotion);
  }, []);

  const opacity =
    typeof intensity === 'number'
      ? intensity
      : intensity === 'subtle'
      ? 0.3
      : intensity === 'high'
      ? 0.85
      : 0.55;

  return (
    <div
      className={`mi-crt-overlay ${className}`.trim()}
      style={{ opacity }}
      aria-hidden="true"
    >
      {scanlines && <div className="mi-crt-scanlines" />}
      {flicker && !reducedMotion && <div className="mi-crt-flicker" />}
    </div>
  );
};
