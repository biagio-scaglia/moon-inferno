import { forwardRef, type HTMLAttributes } from 'react';
import './Stack.css';

export interface StackProps extends HTMLAttributes<HTMLDivElement> {
  direction?: 'row' | 'column';
  gap?: number | string;
  align?: 'start' | 'center' | 'end' | 'stretch';
  justify?: 'start' | 'center' | 'end' | 'between';
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

    const classNames = [
      'mi-stack',
      `mi-stack--${direction}`,
      `mi-stack--align-${align}`,
      `mi-stack--justify-${justify}`,
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
