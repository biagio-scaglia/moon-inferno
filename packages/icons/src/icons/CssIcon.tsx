import { Icon, type IconProps } from '../Icon';

export const CssIcon = (props: IconProps) => (
  <Icon {...props}>
    <path d="M8 4H6a2 2 0 0 0-2 2v4a2 2 0 0 1-2 2 2 2 0 0 1 2 2v4a2 2 0 0 0 2 2h2" />
    <path d="M16 4h2a2 2 0 0 1 2 2v4a2 2 0 0 0 2 2 2 2 0 0 0-2 2v4a2 2 0 0 1-2 2h-2" />
    <line x1="10" y1="10" x2="14" y2="10" />
    <line x1="10" y1="14" x2="14" y2="14" />
    <line x1="11" y1="8.5" x2="11" y2="15.5" />
    <line x1="13" y1="8.5" x2="13" y2="15.5" />
  </Icon>
);
