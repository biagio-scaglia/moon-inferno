import { Icon, type IconProps } from '../Icon';

export const BadgeStyleIcon = (props: IconProps) => (
  <Icon {...props}>
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879a1.5 1.5 0 0 0 1.687-1.488v-1.141a2 2 0 0 1 2-2h1.5A4.375 4.375 0 0 0 20 12.875V12c0-5.523-4.477-10-10-10z" />
    <circle cx="7.5" cy="7.5" r="1.25" fill="currentColor" />
    <circle cx="12" cy="6.5" r="1.25" fill="currentColor" />
    <circle cx="16.5" cy="8.5" r="1.25" fill="currentColor" />
    <circle cx="6.5" cy="12.5" r="1.25" fill="currentColor" />
  </Icon>
);
