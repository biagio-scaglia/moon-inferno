import { type FC, type HTMLAttributes } from 'react';
import './GlitchText.css';

export interface GlitchTextProps extends HTMLAttributes<HTMLSpanElement> {
  text: string;
  as?: 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'div';
}

export const GlitchText: FC<GlitchTextProps> = ({
  text,
  as: Component = 'span',
  className = '',
  ...props
}) => {
  return (
    <Component
      data-text={text}
      className={`mi-glitch-text ${className}`.trim()}
      {...props}
    >
      {text}
    </Component>
  );
};
