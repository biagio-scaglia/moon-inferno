import { Icon, type IconProps } from '../Icon';

export const TsIcon = (props: IconProps) => (
  <Icon {...props}>
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <line x1="6.5" y1="10" x2="11.5" y2="10" />
    <line x1="9" y1="10" x2="9" y2="16" />
    <polyline points="16.5 10 13.5 10 13.5 13 16.5 13 16.5 16 13.5 16" />
  </Icon>
);
