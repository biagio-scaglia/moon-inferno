import { type SVGProps } from 'react';

export interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

export const Icon = ({
  size = 24,
  color = 'currentColor',
  title,
  children,
  className = '',
  viewBox = '0 0 24 24',
  ...props
}: IconProps) => {
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
      className={`mi-icon ${className}`.trim()}
      aria-hidden={!title}
      role={title ? 'img' : undefined}
      {...props}
    >
      {title && <title>{title}</title>}
      {children}
    </svg>
  );
};
