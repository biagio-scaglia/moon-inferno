import { Icon, type IconProps } from '../Icon';

export const HtmlIcon = (props: IconProps) => (
  <Icon {...props}>
    <path d="M4 3l1.8 15.5L12 21l6.2-2.5L20 3H4z" />
    <path d="M9 8l-3 4 3 4" />
    <path d="M15 8l3 4-3 4" />
    <line x1="13" y1="7" x2="11" y2="17" />
  </Icon>
);
