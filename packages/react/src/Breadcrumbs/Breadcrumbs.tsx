import React, { forwardRef, type HTMLAttributes, type ReactNode } from 'react';
import './Breadcrumbs.css';

export interface BreadcrumbItemData {
  id?: string | undefined;
  label: ReactNode;
  href?: string | undefined;
  icon?: ReactNode | undefined;
  isCurrent?: boolean | undefined;
  onClick?: React.MouseEventHandler<HTMLElement> | undefined;
}

export interface BreadcrumbsProps extends HTMLAttributes<HTMLElement> {
  items?: BreadcrumbItemData[] | undefined;
  separator?: ReactNode | undefined;
  variant?: 'default' | 'pixel' | 'ghost' | undefined;
  children?: ReactNode | undefined;
}

export interface BreadcrumbItemProps extends Omit<HTMLAttributes<HTMLLIElement>, 'onClick'> {
  href?: string | undefined;
  icon?: ReactNode | undefined;
  isCurrent?: boolean | undefined;
  separator?: ReactNode | undefined;
  onClick?: React.MouseEventHandler<HTMLElement> | undefined;
  children: ReactNode;
}

export const BreadcrumbItem = forwardRef<HTMLLIElement, BreadcrumbItemProps>(
  ({ href, icon, isCurrent = false, separator = '/', onClick, children, className = '', ...props }, ref) => {
    return (
      <li
        ref={ref}
        className={`mi-breadcrumb-item ${isCurrent ? 'mi-breadcrumb-item--current' : ''} ${className}`.trim()}
        {...props}
      >
        {isCurrent ? (
          <span className="mi-breadcrumb-current" aria-current="page">
            {icon && <span className="mi-breadcrumb-icon">{icon}</span>}
            <span>{children}</span>
          </span>
        ) : href ? (
          <a href={href} className="mi-breadcrumb-link" onClick={onClick}>
            {icon && <span className="mi-breadcrumb-icon">{icon}</span>}
            <span>{children}</span>
          </a>
        ) : (
          <button type="button" className="mi-breadcrumb-button" onClick={onClick}>
            {icon && <span className="mi-breadcrumb-icon">{icon}</span>}
            <span>{children}</span>
          </button>
        )}

        {!isCurrent && (
          <span className="mi-breadcrumb-separator" aria-hidden="true">
            {separator}
          </span>
        )}
      </li>
    );
  }
);

BreadcrumbItem.displayName = 'BreadcrumbItem';

export const Breadcrumbs = forwardRef<HTMLElement, BreadcrumbsProps>(
  ({ items, separator = '/', variant = 'default', children, className = '', ...props }, ref) => {
    return (
      <nav
        ref={ref}
        aria-label="Breadcrumb"
        className={`mi-breadcrumbs mi-breadcrumbs--${variant} ${className}`.trim()}
        {...props}
      >
        <ol className="mi-breadcrumbs__list">
          {items
            ? items.map((item, index) => (
                <BreadcrumbItem
                  key={item.id ?? index}
                  href={item.href}
                  icon={item.icon}
                  isCurrent={item.isCurrent ?? index === items.length - 1}
                  separator={separator}
                  onClick={item.onClick}
                >
                  {item.label}
                </BreadcrumbItem>
              ))
            : children}
        </ol>
      </nav>
    );
  }
);

Breadcrumbs.displayName = 'Breadcrumbs';
