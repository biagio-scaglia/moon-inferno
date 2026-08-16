import { Icon, type IconProps } from '../Icon';

export const HtmlIcon = (props: IconProps) => (
  <Icon {...props}>
    <polyline points="7 8 3 12 7 16" />
    <polyline points="17 8 21 12 17 16" />
    <line x1="14" y1="5" x2="10" y2="19" />
  </Icon>
);
