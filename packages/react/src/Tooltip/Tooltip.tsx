import {
  useState,
  useId,
  type FC,
  type ReactElement,
  type HTMLAttributes,
  cloneElement,
} from 'react';
import './Tooltip.css';

export interface TooltipProps {
  content: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
  children: ReactElement<HTMLAttributes<HTMLElement>>;
  className?: string;
}

export const Tooltip: FC<TooltipProps> = ({
  content,
  position = 'top',
  children,
  className = '',
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const tooltipId = useId();

  const show = () => setIsVisible(true);
  const hide = () => setIsVisible(false);

  const childProps = children.props as HTMLAttributes<HTMLElement> & {
    onMouseEnter?: (e: React.MouseEvent) => void;
    onMouseLeave?: (e: React.MouseEvent) => void;
    onFocus?: (e: React.FocusEvent) => void;
    onBlur?: (e: React.FocusEvent) => void;
  };

  const trigger = cloneElement(children, {
    'aria-describedby': isVisible ? tooltipId : undefined,
    onMouseEnter: (e: React.MouseEvent) => {
      show();
      childProps.onMouseEnter?.(e);
    },
    onMouseLeave: (e: React.MouseEvent) => {
      hide();
      childProps.onMouseLeave?.(e);
    },
    onFocus: (e: React.FocusEvent) => {
      show();
      childProps.onFocus?.(e);
    },
    onBlur: (e: React.FocusEvent) => {
      hide();
      childProps.onBlur?.(e);
    },
  });

  return (
    <div className="mi-tooltip-wrapper">
      {trigger}
      {isVisible && (
        <div
          id={tooltipId}
          role="tooltip"
          className={`mi-tooltip mi-tooltip--${position} ${className}`.trim()}
        >
          {content}
        </div>
      )}
    </div>
  );
};
