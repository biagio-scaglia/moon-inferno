import { Icon, type IconProps } from '../Icon';

export const JsIcon = (props: IconProps) => (
  <Icon {...props}>
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <polyline points="8 10 8 15 6 15" />
    <polyline points="16 10 12.5 10 12.5 13 16 13 16 16 12.5 16" />
  </Icon>
);
