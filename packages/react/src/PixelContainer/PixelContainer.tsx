import { forwardRef, type HTMLAttributes } from 'react';
import './PixelContainer.css';

export type PixelContainerVariant = 'inferno' | 'pixel' | 'terminal' | 'y2k';

export interface PixelContainerProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  onClose?: () => void;
  variant?: PixelContainerVariant;
}

export const PixelContainer = forwardRef<HTMLDivElement, PixelContainerProps>(
  ({ title, onClose, variant = 'pixel', children, className = '', ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`mi-pixel-container mi-pixel-container--${variant} ${className}`.trim()}
        {...props}
      >
        {title && (
          <div className="mi-pixel-container__titlebar">
            <span>{title}</span>
            <div className="mi-pixel-container__controls">
              <span className="mi-pixel-container__btn" aria-hidden="true">-</span>
              <span className="mi-pixel-container__btn" aria-hidden="true">+</span>
              {onClose && (
                <button
                  type="button"
                  onClick={onClose}
                  className="mi-pixel-container__btn"
                  aria-label="Close window"
                >
                  X
                </button>
              )}
            </div>
          </div>
        )}
        <div className="mi-pixel-container__body">{children}</div>
      </div>
    );
  }
);

PixelContainer.displayName = 'PixelContainer';
