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

export interface ToastItem {
  id: string;
  message: string;
  variant?: 'inferno' | 'success' | 'error' | 'info';
  duration?: number;
}

interface ToastContextType {
  addToast: (message: string, options?: Omit<ToastItem, 'id' | 'message'>) => void;
  removeToast: (id: string) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const addToast = useCallback(
    (message: string, options?: Omit<ToastItem, 'id' | 'message'>) => {
      const id = Math.random().toString(36).substring(2, 9);
      const duration = options?.duration ?? 4000;

      const newToast: ToastItem = {
        id,
        message,
        variant: options?.variant ?? 'inferno',
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
            <span>{toast.message}</span>
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
