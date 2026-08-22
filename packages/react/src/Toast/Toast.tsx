import {
  useState,
  createContext,
  useContext,
  useCallback,
  type ReactNode,
  type FC,
} from 'react';
import { CloseIcon } from '@moon-inferno/icons';
import './Toast.css';

export type ToastVariant = 'inferno' | 'pixel' | 'success' | 'error' | 'danger' | 'warning' | 'info' | 'default' | 'primary';

export interface ToastItem {
  id: string;
  title?: string | undefined;
  description?: string | undefined;
  message?: string | undefined;
  variant?: ToastVariant | undefined;
  duration?: number | undefined;
}

export type ToastInput =
  | string
  | {
      title?: string;
      description?: string;
      message?: string;
      variant?: ToastVariant;
      duration?: number;
    };

interface ToastContextType {
  addToast: (
    input: ToastInput,
    options?: Omit<ToastItem, 'id' | 'message' | 'title' | 'description'>
  ) => void;
  removeToast: (id: string) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const addToast = useCallback(
    (
      input: ToastInput,
      options?: Omit<ToastItem, 'id' | 'message' | 'title' | 'description'>
    ) => {
      const id = Math.random().toString(36).substring(2, 9);
      let title: string | undefined;
      let description: string | undefined;
      let message: string | undefined;
      let variant: ToastVariant = 'inferno';
      let duration = 4000;

      if (typeof input === 'string') {
        message = input;
        if (options?.variant) variant = options.variant;
        if (options?.duration !== undefined) duration = options.duration;
      } else {
        title = input.title;
        description = input.description;
        message = input.message;
        if (input.variant) variant = input.variant;
        if (input.duration !== undefined) duration = input.duration;
      }

      if (variant === 'default' || variant === 'primary') {
        variant = 'inferno';
      } else if (variant === 'danger') {
        variant = 'error';
      }

      const newToast: ToastItem = {
        id,
        title,
        description,
        message,
        variant,
      };

      setToasts((prev) => [...prev, newToast]);

      if (duration > 0) {
        setTimeout(() => {
          removeToast(id);
        }, duration);
      }
    },
    [removeToast]
  );

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <div className="mi-toast-container" aria-live="polite" role="status">
        {toasts.map((toast) => (
          <div key={toast.id} className={`mi-toast mi-toast--${toast.variant}`}>
            <div className="mi-toast__content">
              {toast.title && <strong className="mi-toast__title">{toast.title}</strong>}
              {(toast.description || toast.message) && (
                <p className="mi-toast__description">{toast.description || toast.message}</p>
              )}
            </div>
            <button
              type="button"
              className="mi-toast__close-btn"
              onClick={() => removeToast(toast.id)}
              aria-label="Close notification"
            >
              <CloseIcon size={14} />
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};
