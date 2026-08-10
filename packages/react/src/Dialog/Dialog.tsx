import {
  useEffect,
  useRef,
  useId,
  type FC,
  type ReactNode,
  type HTMLAttributes,
} from 'react';
import { trapFocus, createFocusStore, KEYS } from '@moon-inferno/core';
import { CloseIcon } from '@moon-inferno/icons';
import './Dialog.css';

export interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  variant?: 'default' | 'pixel';
  className?: string;
}

export const Dialog: FC<DialogProps> = ({
  isOpen,
  onClose,
  title,
  children,
  variant = 'default',
  className = '',
}) => {
  const dialogRef = useRef<HTMLDivElement>(null);
  const focusStoreRef = useRef(createFocusStore());
  const titleId = useId();

  useEffect(() => {
    if (isOpen) {
      focusStoreRef.current.save();
      const timer = setTimeout(() => {
        if (dialogRef.current) {
          const firstInput = dialogRef.current.querySelector<HTMLElement>(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          );
          firstInput?.focus();
        }
      }, 50);
      return () => clearTimeout(timer);
    }
    focusStoreRef.current.restore();
    return undefined;
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === KEYS.ESCAPE) {
        onClose();
        event.preventDefault();
      } else if (event.key === KEYS.TAB && dialogRef.current) {
        trapFocus(dialogRef.current, event);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="mi-dialog-backdrop"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? titleId : undefined}
        tabIndex={-1}
        className={`mi-dialog ${variant === 'pixel' ? 'mi-dialog--pixel' : ''} ${className}`.trim()}
      >
        <div className="mi-dialog__header">
          {title && <span id={titleId}>{title}</span>}
          <button
            type="button"
            className="mi-dialog__close-btn"
            onClick={onClose}
            aria-label="Close dialog"
          >
            <CloseIcon size={18} />
          </button>
        </div>
        <div className="mi-dialog__body">{children}</div>
      </div>
    </div>
  );
};

export const DialogFooter: FC<HTMLAttributes<HTMLDivElement>> = ({
  children,
  className = '',
  ...props
}) => (
  <div className={`mi-dialog__footer ${className}`.trim()} {...props}>
    {children}
  </div>
);
