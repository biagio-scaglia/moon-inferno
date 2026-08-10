import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react';
import './Button.css';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'inferno' | 'outline' | 'ghost' | 'pixel';
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
    const classNames = [
      'mi-button',
      `mi-button--${variant}`,
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
          <span className="mi-button__spinner" aria-hidden="true">⚡</span>
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
