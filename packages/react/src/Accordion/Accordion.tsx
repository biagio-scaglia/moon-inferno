import {
  useState,
  useId,
  forwardRef,
  type ReactNode,
  type HTMLAttributes,
} from 'react';
import { ArrowDownIcon } from '@moon-inferno/icons';
import './Accordion.css';

export interface AccordionItemProps {
  id?: string;
  title: ReactNode;
  children: ReactNode;
  defaultOpen?: boolean;
}

export const AccordionItem = ({
  id,
  title,
  children,
  defaultOpen = false,
}: AccordionItemProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const generatedId = useId();
  const itemId = id || generatedId;
  const headerId = `accordion-header-${itemId}`;
  const panelId = `accordion-panel-${itemId}`;

  return (
    <div className={`mi-accordion-item ${isOpen ? 'mi-accordion-item--open' : ''}`}>
      <button
        type="button"
        id={headerId}
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={() => setIsOpen(!isOpen)}
        className="mi-accordion-header"
      >
        <span>{title}</span>
        <span className="mi-accordion-icon" aria-hidden="true">
          <ArrowDownIcon size={16} />
        </span>
      </button>
      {isOpen && (
        <div
          id={panelId}
          role="region"
          aria-labelledby={headerId}
          className="mi-accordion-content"
        >
          {children}
        </div>
      )}
    </div>
  );
};

export interface AccordionProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const Accordion = forwardRef<HTMLDivElement, AccordionProps>(
  ({ children, className = '', ...props }, ref) => {
    return (
      <div ref={ref} className={`mi-accordion ${className}`.trim()} {...props}>
        {children}
      </div>
    );
  }
);

Accordion.displayName = 'Accordion';
