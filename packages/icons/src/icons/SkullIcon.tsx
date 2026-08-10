import { Icon, type IconProps } from '../Icon';

export const SkullIcon = (props: IconProps) => (
  <Icon {...props}>
    <circle cx="9" cy="12" r="1" />
    <circle cx="15" cy="12" r="1" />
    <path d="M8 20v2h3v-2h2v2h3v-2" />
    <path d="M12 4a8 8 0 0 0-8 8c0 3.5 2 6 4 7v1a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-1c2-1 4-3.5 4-7a8 8 0 0 0-8-8z" />
  </Icon>
);
