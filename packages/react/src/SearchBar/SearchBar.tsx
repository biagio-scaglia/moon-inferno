import { forwardRef, useState, useRef, type HTMLAttributes, type KeyboardEvent } from 'react';
import { SearchIcon, CloseIcon } from '@moon-inferno/icons';
import './SearchBar.css';

export interface SearchBarProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  onSearch?: (value: string) => void;
  placeholder?: string;
  variant?: 'inferno' | 'pixel' | 'terminal' | 'ghost';
  shortcutKey?: string;
  clearable?: boolean;
  autoFocus?: boolean;
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const SearchBar = forwardRef<HTMLInputElement, SearchBarProps>(
  (
    {
      value: controlledValue,
      defaultValue = '',
      onChange,
      onSearch,
      placeholder = 'Search...',
      variant = 'inferno',
      shortcutKey,
      clearable = true,
      autoFocus = false,
      disabled = false,
      size = 'md',
      className = '',
      ...props
    },
    ref
  ) => {
    const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue);
    const isControlled = controlledValue !== undefined;
    const value = isControlled ? controlledValue : uncontrolledValue;
    const inputRef = useRef<HTMLInputElement>(null);

    const handleInputChange = (val: string) => {
      if (!isControlled) {
        setUncontrolledValue(val);
      }
      onChange?.(val);
    };

    const handleClear = () => {
      handleInputChange('');
      onSearch?.('');
      if (ref && 'current' in ref && ref.current) {
        ref.current.focus();
      } else if (inputRef.current) {
        inputRef.current.focus();
      }
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        onSearch?.(value);
      } else if (e.key === 'Escape' && clearable && value) {
        handleClear();
      }
    };

    return (
      <div
        role="search"
        className={`mi-searchbar mi-searchbar--${variant} mi-searchbar--${size} ${disabled ? 'mi-searchbar--disabled' : ''} ${className}`.trim()}
        {...props}
      >
        <span className="mi-searchbar-icon" aria-hidden="true">
          <SearchIcon size={size === 'sm' ? 14 : size === 'lg' ? 20 : 16} />
        </span>

        <input
          ref={ref || inputRef}
          type="text"
          value={value}
          placeholder={placeholder}
          disabled={disabled}
          autoFocus={autoFocus}
          onChange={(e) => handleInputChange(e.target.value)}
          onKeyDown={handleKeyDown}
          className="mi-searchbar-input"
          aria-label={placeholder}
        />

        <div className="mi-searchbar-actions">
          {clearable && value && (
            <button
              type="button"
              onClick={handleClear}
              className="mi-searchbar-clear"
              aria-label="Clear search"
              tabIndex={0}
            >
              <CloseIcon size={14} />
            </button>
          )}

          {shortcutKey && (
            <kbd className="mi-searchbar-shortcut" aria-label={`Shortcut ${shortcutKey}`}>
              {shortcutKey}
            </kbd>
          )}
        </div>
      </div>
    );
  }
);

SearchBar.displayName = 'SearchBar';
