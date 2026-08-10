import {
  useState,
  useRef,
  useId,
  useEffect,
  forwardRef,
  type HTMLAttributes,
} from 'react';
import { ArrowDownIcon, CheckIcon } from '@moon-inferno/icons';
import './Select.css';

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  options: SelectOption[];
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  label?: string;
  disabled?: boolean;
}

export const Select = forwardRef<HTMLDivElement, SelectProps>(
  (
    {
      options,
      value,
      onChange,
      placeholder = 'Select an option...',
      label,
      disabled = false,
      className = '',
      id,
      ...props
    },
    ref
  ) => {
    const [isOpen, setIsOpen] = useState(false);
    const [highlightedIndex, setHighlightedIndex] = useState(0);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const buttonRef = useRef<HTMLButtonElement | null>(null);

    const generatedId = useId();
    const selectId = id || generatedId;
    const listboxId = `listbox-${selectId}`;

    const selectedOption = options.find((opt) => opt.value === value);

    useEffect(() => {
      const handleClickOutside = (e: MouseEvent) => {
        if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
          setIsOpen(false);
        }
      };
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleKeyDown = (e: React.KeyboardEvent) => {
      if (disabled) return;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (!isOpen) {
          setIsOpen(true);
        } else {
          setHighlightedIndex((prev) => (prev + 1) % options.length);
        }
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (!isOpen) {
          setIsOpen(true);
        } else {
          setHighlightedIndex((prev) => (prev - 1 + options.length) % options.length);
        }
      } else if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        if (isOpen) {
          const opt = options[highlightedIndex];
          if (opt && !opt.disabled) {
            onChange?.(opt.value);
            setIsOpen(false);
          }
        } else {
          setIsOpen(true);
        }
      } else if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    return (
      <div
        ref={(node) => {
          containerRef.current = node;
          if (typeof ref === 'function') ref(node);
          else if (ref) ref.current = node;
        }}
        className={`mi-select-container ${className}`.trim()}
        {...props}
      >
        {label && <label className="mi-select-label">{label}</label>}
        <button
          ref={buttonRef}
          type="button"
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          aria-controls={listboxId}
          disabled={disabled}
          onClick={() => setIsOpen(!isOpen)}
          onKeyDown={handleKeyDown}
          className="mi-select-button"
        >
          <span>{selectedOption ? selectedOption.label : placeholder}</span>
          <ArrowDownIcon size={16} style={{ transform: isOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.15s ease' }} />
        </button>

        {isOpen && (
          <ul id={listboxId} role="listbox" className="mi-select-dropdown">
            {options.map((opt, idx) => {
              const isSelected = opt.value === value;
              const isHighlighted = idx === highlightedIndex;
              return (
                <li
                  key={opt.value}
                  role="option"
                  aria-selected={isSelected}
                  onClick={() => {
                    if (!opt.disabled) {
                      onChange?.(opt.value);
                      setIsOpen(false);
                    }
                  }}
                  onMouseEnter={() => setHighlightedIndex(idx)}
                  className={`mi-select-option ${isSelected ? 'mi-select-option--selected' : ''} ${isHighlighted ? 'mi-select-option--highlighted' : ''}`}
                >
                  <span>{opt.label}</span>
                  {isSelected && <CheckIcon size={14} />}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    );
  }
);

Select.displayName = 'Select';
