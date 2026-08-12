import {
  type ReactNode,
  type TableHTMLAttributes,
  type HTMLAttributes,
  type TdHTMLAttributes,
  type ThHTMLAttributes,
} from 'react';
import './Table.css';

export interface TableProps extends TableHTMLAttributes<HTMLTableElement> {
  children: ReactNode;
  variant?: 'default' | 'pixel' | 'inferno';
  striped?: boolean;
  hoverable?: boolean;
  compact?: boolean;
}

export const Table = ({
  children,
  variant = 'inferno',
  striped = true,
  hoverable = true,
  compact = false,
  className = '',
  ...props
}: TableProps) => {
  return (
    <div
      className={`mi-table-wrapper ${variant === 'pixel' ? 'mi-table-wrapper--pixel' : ''}`.trim()}
    >
      <table
        className={[
          'mi-table',
          striped ? 'mi-table--striped' : '',
          hoverable ? 'mi-table--hoverable' : '',
          compact ? 'mi-table--compact' : '',
          className,
        ].filter(Boolean).join(' ')}
        {...props}
      >
        {children}
      </table>
    </div>
  );
};

export const TableHeader = ({ children, className = '', ...props }: HTMLAttributes<HTMLTableSectionElement>) => (
  <thead className={`mi-table-header ${className}`.trim()} {...props}>
    {children}
  </thead>
);

export const TableBody = ({ children, className = '', ...props }: HTMLAttributes<HTMLTableSectionElement>) => (
  <tbody className={`mi-table-body ${className}`.trim()} {...props}>
    {children}
  </tbody>
);

export const TableRow = ({ children, className = '', ...props }: HTMLAttributes<HTMLTableRowElement>) => (
  <tr className={`mi-table-row ${className}`.trim()} {...props}>
    {children}
  </tr>
);

export const TableHead = ({ children, className = '', ...props }: ThHTMLAttributes<HTMLTableCellElement>) => (
  <th className={`mi-table-head ${className}`.trim()} {...props}>
    {children}
  </th>
);

export const TableCell = ({ children, className = '', ...props }: TdHTMLAttributes<HTMLTableCellElement>) => (
  <td className={`mi-table-cell ${className}`.trim()} {...props}>
    {children}
  </td>
);

export const TableCaption = ({ children, className = '', ...props }: HTMLAttributes<HTMLTableCaptionElement>) => (
  <caption className={`mi-table-caption ${className}`.trim()} {...props}>
    {children}
  </caption>
);
