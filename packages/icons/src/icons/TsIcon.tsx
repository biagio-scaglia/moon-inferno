import { Icon, type IconProps } from '../Icon';

export const TsIcon = (props: IconProps) => (
  <Icon {...props}>
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M6 9h4" />
    <path d="M8 9v7" />
    <path d="M13 16a2 2 0 0 0 2-2v-1.5a1.5 1.5 0 0 0-1.5-1.5h-1a1.5 1.5 0 0 1-1.5-1.5V9a2 2 0 0 1 2-2h2" />
  </Icon>
);
