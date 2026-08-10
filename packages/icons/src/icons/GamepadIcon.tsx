import { Icon, type IconProps } from '../Icon';

export const GamepadIcon = (props: IconProps) => (
  <Icon {...props}>
    <line x1="6" y1="12" x2="10" y2="12" />
    <line x1="8" y1="10" x2="8" y2="14" />
    <circle cx="15" cy="13" r="1" />
    <circle cx="18" cy="11" r="1" />
    <rect x="2" y="6" width="20" height="12" rx="4" />
  </Icon>
);
