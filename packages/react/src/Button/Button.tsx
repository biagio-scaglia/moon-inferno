import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react';
import { ZapIcon } from '@moon-inferno/icons';
import './Button.css';

export type ButtonVariant = 'inferno' | 'outline' | 'ghost' | 'pixel' | 'default' | 'primary' | 'danger' | 'success';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = 'inferno',
      size = 'md',
      isLoading = false,
      disabled,
      leftIcon,
      rightIcon,
      className = '',
      type = 'button',
      ...props
    },
    ref
  ) => {
    const normalizedVariant = (variant === 'default' || variant === 'primary') ? 'inferno' : variant;

    const classNames = [
      'mi-button',
      `mi-button--${normalizedVariant}`,
      `mi-button--${size}`,
      isLoading ? 'mi-button--loading' : '',
      disabled ? 'mi-button--disabled' : '',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <button
        ref={ref}
        type={type}
        className={classNames}
        disabled={disabled || isLoading}
        aria-busy={isLoading}
        {...props}
      >
        {isLoading ? (
          <span className="mi-button__spinner" aria-hidden="true">
            <ZapIcon size={16} />
          </span>
        ) : (
          leftIcon && <span className="mi-button__icon">{leftIcon}</span>
        )}
        <span>{children}</span>
        {!isLoading && rightIcon && <span className="mi-button__icon">{rightIcon}</span>}
      </button>
    );
  }
);

Button.displayName = 'Button';
