import { Icon, type IconProps } from '../Icon';

export const RankDiamondIcon = (props: IconProps) => (
  <Icon {...props}>
    <path d="M6 3h12l4 6-10 12L2 9z" />
    <path d="M11 3l-4 6 5 12" />
    <path d="M13 3l4 6-5 12" />
    <path d="M2 9h20" />
  </Icon>
);
