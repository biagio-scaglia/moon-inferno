import { forwardRef, type HTMLAttributes } from 'react';
import './Grid.css';

export interface GridProps extends HTMLAttributes<HTMLDivElement> {
  minChildWidth?: string;
  columns?: number;
  cols?: number;
  gap?: number | string;
  responsiveGap?: string;
}

export const Grid = forwardRef<HTMLDivElement, GridProps>(
  (
    {
      children,
      minChildWidth = '300px',
      columns,
      cols,
      gap,
      responsiveGap,
      style,
      className = '',
      ...props
    },
    ref
  ) => {
    const finalColumns = cols ?? columns;
    const rawGap = gap ?? responsiveGap ?? '1.5rem';
    const gapStyle = typeof rawGap === 'number' ? `${rawGap}px` : rawGap;
    const templateColumns = finalColumns
      ? `repeat(${finalColumns}, minmax(0, 1fr))`
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
