import { forwardRef, type HTMLAttributes } from 'react';
import './Avatar.css';

export interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  name?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'circle' | 'pixel';
}

export const Avatar = forwardRef<HTMLDivElement, AvatarProps>(
  ({ src, alt, name, size = 'md', variant = 'circle', className = '', ...props }, ref) => {
    const initials = name
      ? name
          .split(' ')
          .map((n) => n[0])
          .slice(0, 2)
          .join('')
          .toUpperCase()
      : 'MI';

    return (
      <div
        ref={ref}
        className={`mi-avatar mi-avatar--${size} mi-avatar--${variant} ${className}`.trim()}
        {...props}
      >
        {src ? (
          <img src={src} alt={alt || name || 'Avatar'} className="mi-avatar-img" />
        ) : (
          <span>{initials}</span>
        )}
      </div>
    );
  }
);

Avatar.displayName = 'Avatar';

export interface AvatarGroupProps extends HTMLAttributes<HTMLDivElement> {
  max?: number;
}

export const AvatarGroup = forwardRef<HTMLDivElement, AvatarGroupProps>(
  ({ children, className = '', ...props }, ref) => {
    return (
      <div ref={ref} className={`mi-avatar-group ${className}`.trim()} {...props}>
        {children}
      </div>
    );
  }
);

AvatarGroup.displayName = 'AvatarGroup';
