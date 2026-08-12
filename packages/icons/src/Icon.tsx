import { type SVGProps } from 'react';
import './Icon.css';

export interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
  hoverEffect?: 'none' | 'glow' | 'spin' | 'bounce' | 'pulse' | 'scale';
}

export const Icon = ({
  size = 24,
  color = 'currentColor',
  title,
  hoverEffect = 'none',
  children,
  className = '',
  viewBox = '0 0 24 24',
  ...props
}: IconProps) => {
  const hoverClass = hoverEffect !== 'none' ? `mi-icon--hover-${hoverEffect}` : '';

  return (
    <svg
      width={size}
      height={size}
      viewBox={viewBox}
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`mi-icon ${hoverClass} ${className}`.trim()}
      aria-hidden={!title}
      role={title ? 'img' : undefined}
      {...props}
    >
      {title && <title>{title}</title>}
      {children}
    </svg>
  );
};
