import { Icon, type IconProps } from '../Icon';

export const RankSilverIcon = (props: IconProps) => (
  <Icon {...props}>
    <circle cx="12" cy="13" r="7" />
    <path d="M7.5 18.5L6 22l6-2 6 2-1.5-3.5" />
    <path d="M10 11a2 2 0 1 1 4 0c0 1-1 2-2 2h-2v1h4" />
  </Icon>
);
