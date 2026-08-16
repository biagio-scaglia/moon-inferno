import { Icon, type IconProps } from '../Icon';

export const NpmIcon = (props: IconProps) => (
  <Icon {...props}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M8 5v14" />
    <path d="M13 5v8h4V5" />
    <path d="M17 13v6" />
  </Icon>
);
