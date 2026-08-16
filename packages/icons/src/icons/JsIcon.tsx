import { Icon, type IconProps } from '../Icon';

export const JsIcon = (props: IconProps) => (
  <Icon {...props}>
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M8 12v3a2 2 0 0 1-2 2H5" />
    <path d="M14 17a2 2 0 0 0 2-2v-1.5a1.5 1.5 0 0 0-1.5-1.5h-1a1.5 1.5 0 0 1-1.5-1.5V10a2 2 0 0 1 2-2h2" />
  </Icon>
);
