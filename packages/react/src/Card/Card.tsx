import { forwardRef, type FC, type HTMLAttributes } from 'react';
import './Card.css';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'pixel';
  isInteractive?: boolean;
}

export const CardHeader: FC<HTMLAttributes<HTMLDivElement>> = ({
  children,
  className = '',
  ...props
}) => (
  <div className={`mi-card__header ${className}`.trim()} {...props}>
    {children}
  </div>
);

export const CardBody: FC<HTMLAttributes<HTMLDivElement>> = ({
  children,
  className = '',
  ...props
}) => (
  <div className={`mi-card__body ${className}`.trim()} {...props}>
    {children}
  </div>
);

export const CardFooter: FC<HTMLAttributes<HTMLDivElement>> = ({
  children,
  className = '',
  ...props
}) => (
  <div className={`mi-card__footer ${className}`.trim()} {...props}>
    {children}
  </div>
);

export const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      children,
      variant = 'default',
      isInteractive = false,
      className = '',
      ...props
    },
    ref
  ) => {
    const classNames = [
      'mi-card',
      variant === 'pixel' ? 'mi-card--pixel' : '',
      isInteractive ? 'mi-card--interactive' : '',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div ref={ref} className={classNames} {...props}>
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';
