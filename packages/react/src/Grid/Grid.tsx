import { forwardRef, type HTMLAttributes } from 'react';
import './Grid.css';

export interface GridProps extends HTMLAttributes<HTMLDivElement> {
  minChildWidth?: string;
  columns?: number;
  gap?: number | string;
}

export const Grid = forwardRef<HTMLDivElement, GridProps>(
  (
    {
      children,
      minChildWidth = '300px',
      columns,
      gap = '1.5rem',
      style,
      className = '',
      ...props
    },
    ref
  ) => {
    const gapStyle = typeof gap === 'number' ? `${gap}px` : gap;
    const templateColumns = columns
      ? `repeat(${columns}, minmax(0, 1fr))`
      : `repeat(auto-fit, minmax(${minChildWidth}, 1fr))`;

    return (
      <div
        ref={ref}
        className={`mi-grid ${className}`.trim()}
        style={{
          gridTemplateColumns: templateColumns,
          gap: gapStyle,
          ...style,
        }}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Grid.displayName = 'Grid';
