import {
  forwardRef,
  createContext,
  useContext,
  type InputHTMLAttributes,
  type HTMLAttributes,
} from 'react';
import './Radio.css';

interface RadioContextType {
  name?: string;
  value?: string | undefined;
  onChange?: (value: string) => void;
}

const RadioContext = createContext<RadioContextType | undefined>(undefined);

export interface RadioGroupProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  name: string;
  value?: string;
  onChange?: (value: string) => void;
}

export const RadioGroup = forwardRef<HTMLDivElement, RadioGroupProps>(
  ({ name, value, onChange, children, className = '', ...props }, ref) => {
    return (
      <RadioContext.Provider
        value={{
          name,
          value,
          onChange: (val: string) => onChange?.(val),
        }}
      >
        <div ref={ref} role="radiogroup" className={`mi-radio-group ${className}`.trim()} {...props}>
          {children}
        </div>
      </RadioContext.Provider>
    );
  }
);

RadioGroup.displayName = 'RadioGroup';

export interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  value: string;
  label?: string;
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ value, label, disabled, className = '', id, onChange, ...props }, ref) => {
    const context = useContext(RadioContext);
    const radioName = props.name || context?.name;
    const isChecked = props.checked ?? (context?.value !== undefined ? context.value === value : undefined);
    const inputId = id || (label ? `mi-radio-${label.toLowerCase().replace(/\s+/g, '-')}` : undefined);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(e);
      context?.onChange?.(value);
    };

    return (
      <label
        htmlFor={inputId}
        className={`mi-radio-label ${disabled ? 'mi-radio-label--disabled' : ''} ${className}`.trim()}
      >
        <input
          ref={ref}
          type="radio"
          id={inputId}
          name={radioName}
          value={value}
          checked={isChecked}
          disabled={disabled}
          onChange={handleChange}
          className="mi-radio-input"
          {...props}
        />
        <span className="mi-radio-circle" aria-hidden="true" />
        {label && <span>{label}</span>}
      </label>
    );
  }
);

Radio.displayName = 'Radio';
