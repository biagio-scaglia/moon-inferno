import { Icon, type IconProps } from '../Icon';

export const BadgeFlexboxIcon = (props: IconProps) => (
  <Icon {...props}>
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M7 8v8" />
    <path d="M12 8v8" />
    <path d="M17 8v8" />
    <path d="M5 12h14" />
  </Icon>
);
