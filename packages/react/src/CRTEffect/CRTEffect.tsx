import { useState, useEffect, type FC } from 'react';
import { isReducedMotionPreferred, onReducedMotionChange } from '@moon-inferno/core';
import './CRTEffect.css';

export interface CRTEffectProps {
  scanlines?: boolean;
  flicker?: boolean;
  className?: string;
}

export const CRTEffect: FC<CRTEffectProps> = ({
  scanlines = true,
  flicker = true,
  className = '',
}) => {
  const [reducedMotion, setReducedMotion] = useState(isReducedMotionPreferred());

  useEffect(() => {
    return onReducedMotionChange(setReducedMotion);
  }, []);

  return (
    <div className={`mi-crt-overlay ${className}`.trim()} aria-hidden="true">
      {scanlines && <div className="mi-crt-scanlines" />}
      {flicker && !reducedMotion && <div className="mi-crt-flicker" />}
    </div>
  );
};
