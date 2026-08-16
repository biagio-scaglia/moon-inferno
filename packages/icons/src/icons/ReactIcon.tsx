import { Icon, type IconProps } from '../Icon';

export const ReactIcon = (props: IconProps) => (
  <Icon {...props}>
    <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(0 12 12)" />
    <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(60 12 12)" />
    <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(120 12 12)" />
    <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
  </Icon>
);
