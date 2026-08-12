import {
  useState,
  useRef,
  useEffect,
  type ReactNode,
  type ReactElement,
  type HTMLAttributes,
  type ButtonHTMLAttributes,
  cloneElement,
} from 'react';
import './Dropdown.css';

export interface DropdownProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  align?: 'start' | 'end';
  variant?: 'default' | 'pixel' | 'inferno';
}

export interface DropdownItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  icon?: ReactNode;
  destructive?: boolean;
  disabled?: boolean;
  onSelect?: () => void;
}

export const DropdownItem = ({
  children,
  icon,
  destructive = false,
  disabled = false,
  onSelect,
  className = '',
  onClick,
  ...props
}: DropdownItemProps) => {
  return (
    <button
      type="button"
      role="menuitem"
      disabled={disabled}
      className={[
        'mi-dropdown-item',
        destructive ? 'mi-dropdown-item--destructive' : '',
        disabled ? 'mi-dropdown-item--disabled' : '',
        className,
      ].filter(Boolean).join(' ')}
      onClick={(e) => {
        if (disabled) return;
        onClick?.(e);
        onSelect?.();
      }}
      {...props}
    >
      {icon && <span className="mi-dropdown-item-icon">{icon}</span>}
      <span>{children}</span>
    </button>
  );
};

export const DropdownSection = ({ title, children }: { title: string; children: ReactNode }) => (
  <div className="mi-dropdown-section">
    <div className="mi-dropdown-section-title">{title}</div>
    {children}
  </div>
);

export const DropdownDivider = () => <div className="mi-dropdown-divider" role="separator" />;

export const DropdownTrigger = ({ children }: { children: ReactNode }) => <>{children}</>;
export const DropdownMenu = ({ children }: { children: ReactNode }) => <>{children}</>;

export const Dropdown = ({
  children,
  align = 'start',
  variant = 'default',
  className = '',
  ...props
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isOpen) return;
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  let triggerElement: ReactElement<{ children?: ReactNode; onClick?: (e: unknown) => void }> | null = null;
  let menuElement: ReactNode = null;

  if (Array.isArray(children)) {
    children.forEach((child) => {
      const element = child as ReactElement<{ children?: ReactNode }>;
      if (element?.type === DropdownTrigger) {
        triggerElement = element.props.children as ReactElement<{ children?: ReactNode; onClick?: (e: unknown) => void }>;
      } else if (element?.type === DropdownMenu) {
        menuElement = element.props.children;
      }
    });
  }

  const renderTrigger = () => {
    if (triggerElement && typeof triggerElement === 'object' && 'props' in triggerElement) {
      const elementProps = (triggerElement as ReactElement<{ onClick?: (e: unknown) => void }>).props || {};
      return cloneElement(triggerElement, {
        'aria-haspopup': 'menu',
        'aria-expanded': isOpen,
        onClick: (e: unknown) => {
          elementProps.onClick?.(e);
          setIsOpen(!isOpen);
        },
      } as Record<string, unknown>);
    }
    return (
      <div onClick={() => setIsOpen(!isOpen)} tabIndex={0} role="button" aria-haspopup="menu" aria-expanded={isOpen}>
        {triggerElement}
      </div>
    );
  };

  return (
    <div ref={containerRef} className={`mi-dropdown ${className}`.trim()} {...props}>
      <div className="mi-dropdown__trigger">{renderTrigger()}</div>

      {isOpen && (
        <div
          role="menu"
          className={`mi-dropdown__menu mi-dropdown__menu--${align} ${variant === 'pixel' ? 'mi-dropdown__menu--pixel' : ''}`.trim()}
          tabIndex={-1}
        >
          {menuElement}
        </div>
      )}
    </div>
  );
};
