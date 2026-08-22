import { Icon, type IconProps } from '../Icon';

export const RankGoldIcon = (props: IconProps) => (
  <Icon {...props}>
    <circle cx="12" cy="13" r="7" />
    <path d="M7 18.5L5 22l7-2.5 7 2.5-2-3.5" />
    <path d="M12 9v8" />
    <path d="M10 11l2-2" />
    <path d="M10 17h4" />
  </Icon>
);
