import React, { useEffect, type ReactNode, type HTMLAttributes } from 'react';
import { MenuIcon, CloseIcon } from '@moon-inferno/icons';

export interface NavbarProps extends HTMLAttributes<HTMLElement> {
  variant?: 'inferno' | 'pixel' | 'ghost';
  isSticky?: boolean;
  children: ReactNode;
}

export const Navbar: React.FC<NavbarProps> = ({
  variant = 'inferno',
  isSticky = true,
  className = '',
  children,
  ...props
}) => {
  const classes = [
    'moon-navbar',
    `moon-navbar--${variant}`,
    isSticky ? 'moon-navbar--sticky' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <header className={classes} role="banner" {...props}>
      <div className="moon-navbar__container">{children}</div>
    </header>
  );
};

export interface NavbarBrandProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const NavbarBrand: React.FC<NavbarBrandProps> = ({ className = '', children, ...props }) => {
  return (
    <div className={`moon-navbar__brand ${className}`} {...props}>
      {children}
    </div>
  );
};

export interface NavbarContentProps extends HTMLAttributes<HTMLDivElement> {
  align?: 'start' | 'center' | 'end';
  children: ReactNode;
}

export const NavbarContent: React.FC<NavbarContentProps> = ({
  align = 'start',
  className = '',
  children,
  ...props
}) => {
  const classes = ['moon-navbar__content', `moon-navbar__content--${align}`, className]
    .filter(Boolean)
    .join(' ');

  return (
    <nav className={classes} role="navigation" aria-label="Main Navigation" {...props}>
      {children}
    </nav>
  );
};

export interface NavbarItemProps extends HTMLAttributes<HTMLDivElement> {
  isActive?: boolean;
  children: ReactNode;
}

export const NavbarItem: React.FC<NavbarItemProps> = ({
  isActive = false,
  className = '',
  children,
  ...props
}) => {
  const classes = ['moon-navbar__item', isActive ? 'moon-navbar__item--active' : '', className]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export interface NavbarMenuToggleProps extends HTMLAttributes<HTMLButtonElement> {
  isOpen: boolean;
  onToggle: () => void;
  icon?: ReactNode;
  ariaLabel?: string;
}

export const NavbarMenuToggle: React.FC<NavbarMenuToggleProps> = ({
  isOpen,
  onToggle,
  icon,
  ariaLabel = 'Toggle navigation menu',
  className = '',
  ...props
}) => {
  return (
    <button
      type="button"
      className={`moon-navbar__toggle ${isOpen ? 'moon-navbar__toggle--open' : ''} ${className}`}
      onClick={onToggle}
      aria-label={ariaLabel}
      aria-expanded={isOpen}
      {...props}
    >
      {icon ? (
        icon
      ) : (
        <span className="moon-navbar__toggle-icon" aria-hidden="true">
          {isOpen ? <CloseIcon size={20} /> : <MenuIcon size={20} />}
        </span>
      )}
    </button>
  );
};

export interface NavbarMenuProps extends HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
  onClose?: () => void;
  children: ReactNode;
}

export const NavbarMenu: React.FC<NavbarMenuProps> = ({
  isOpen,
  onClose,
  className = '',
  children,
  ...props
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen && onClose) {
        onClose();
      }
    };

    const handleResize = () => {
      if (window.innerWidth > 768 && isOpen && onClose) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className={`moon-navbar__menu ${className}`}
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation Menu"
      {...props}
    >
      <div className="moon-navbar__menu-content">{children}</div>
    </div>
  );
};
