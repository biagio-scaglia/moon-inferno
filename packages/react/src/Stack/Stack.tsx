import { forwardRef, type HTMLAttributes } from 'react';
import './Stack.css';

export interface StackProps extends HTMLAttributes<HTMLDivElement> {
  direction?: 'row' | 'column';
  gap?: number | string;
  align?: 'start' | 'center' | 'end' | 'stretch';
  justify?: 'start' | 'center' | 'end' | 'between' | 'space-between' | 'around';
  wrap?: boolean;
}

export const Stack = forwardRef<HTMLDivElement, StackProps>(
  (
    {
      children,
      direction = 'column',
      gap = '1rem',
      align = 'stretch',
      justify = 'start',
      wrap = false,
      style,
      className = '',
      ...props
    },
    ref
  ) => {
    const gapStyle = typeof gap === 'number' ? `${gap}px` : gap;
    const normalizedJustify = justify === 'space-between' ? 'between' : justify;

    const classNames = [
      'mi-stack',
      `mi-stack--${direction}`,
      `mi-stack--align-${align}`,
      `mi-stack--justify-${normalizedJustify}`,
      wrap ? 'mi-stack--wrap' : 'mi-stack--nowrap',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div
        ref={ref}
        className={classNames}
        style={{ gap: gapStyle, ...style }}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Stack.displayName = 'Stack';
