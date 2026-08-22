import {
  useState,
  useId,
  createContext,
  useContext,
  forwardRef,
  type ReactNode,
  type HTMLAttributes,
} from 'react';
import { ArrowDownIcon } from '@moon-inferno/icons';
import './Accordion.css';

export type AccordionVariant = 'inferno' | 'pixel' | 'terminal';

interface AccordionContextType {
  variant?: AccordionVariant;
}

const AccordionContext = createContext<AccordionContextType>({ variant: 'inferno' });

export interface AccordionItemProps {
  id?: string;
  title: ReactNode;
  children: ReactNode;
  defaultOpen?: boolean;
  variant?: AccordionVariant;
}

export const AccordionItem = ({
  id,
  title,
  children,
  defaultOpen = false,
  variant: itemVariant,
}: AccordionItemProps) => {
  const context = useContext(AccordionContext);
  const variant = itemVariant || context.variant || 'inferno';
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const generatedId = useId();
  const itemId = id || generatedId;
  const headerId = `accordion-header-${itemId}`;
  const panelId = `accordion-panel-${itemId}`;

  return (
    <div className={`mi-accordion-item mi-accordion-item--${variant} ${isOpen ? 'mi-accordion-item--open' : ''}`}>
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
  variant?: AccordionVariant;
}

export const Accordion = forwardRef<HTMLDivElement, AccordionProps>(
  ({ children, variant = 'inferno', className = '', ...props }, ref) => {
    return (
      <AccordionContext.Provider value={{ variant }}>
        <div ref={ref} className={`mi-accordion mi-accordion--${variant} ${className}`.trim()} {...props}>
          {children}
        </div>
      </AccordionContext.Provider>
    );
  }
);

Accordion.displayName = 'Accordion';
