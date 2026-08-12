import React, { useState, useRef, useEffect, type HTMLAttributes } from 'react';

export interface DatePickerProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange' | 'value'> {
  value?: Date | null;
  onChange?: (date: Date) => void;
  minDate?: Date;
  maxDate?: Date;
  variant?: 'inferno' | 'pixel' | 'ghost';
  placeholder?: string;
  label?: string;
  disabled?: boolean;
}

const DAYS_OF_WEEK = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

export const DatePicker: React.FC<DatePickerProps> = ({
  value = null,
  onChange,
  minDate,
  maxDate,
  variant = 'inferno',
  placeholder = 'Select date...',
  label,
  disabled = false,
  className = '',
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentMonth, setCurrentMonth] = useState<Date>(() => value || new Date());
  const [focusedDate, setFocusedDate] = useState<Date>(() => value || new Date());

  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (value) {
      setCurrentMonth(new Date(value.getFullYear(), value.getMonth(), 1));
      setFocusedDate(value);
    }
  }, [value]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const year = currentMonth.getFullYear();
  const month = currentMonth.getMonth();

  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const days: (Date | null)[] = [];
  for (let i = 0; i < firstDayOfMonth; i++) {
    days.push(null);
  }
  for (let d = 1; d <= daysInMonth; d++) {
    days.push(new Date(year, month, d));
  }

  const handlePrevMonth = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentMonth(new Date(year, month - 1, 1));
  };

  const handleNextMonth = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentMonth(new Date(year, month + 1, 1));
  };

  const isDateDisabled = (date: Date) => {
    if (minDate && date < new Date(minDate.getFullYear(), minDate.getMonth(), minDate.getDate())) {
      return true;
    }
    if (maxDate && date > new Date(maxDate.getFullYear(), maxDate.getMonth(), maxDate.getDate(), 23, 59, 59)) {
      return true;
    }
    return false;
  };

  const handleSelectDate = (date: Date) => {
    if (isDateDisabled(date) || disabled) return;
    if (onChange) {
      onChange(date);
    }
    setIsOpen(false);
    triggerRef.current?.focus();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen) {
      if (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowDown') {
        e.preventDefault();
        setIsOpen(true);
      }
      return;
    }

    let nextDate = new Date(focusedDate);

    switch (e.key) {
      case 'Escape':
        e.preventDefault();
        setIsOpen(false);
        triggerRef.current?.focus();
        break;

      case 'ArrowLeft':
        e.preventDefault();
        nextDate.setDate(nextDate.getDate() - 1);
        break;

      case 'ArrowRight':
        e.preventDefault();
        nextDate.setDate(nextDate.getDate() + 1);
        break;

      case 'ArrowUp':
        e.preventDefault();
        nextDate.setDate(nextDate.getDate() - 7);
        break;

      case 'ArrowDown':
        e.preventDefault();
        nextDate.setDate(nextDate.getDate() + 7);
        break;

      case 'PageUp':
        e.preventDefault();
        nextDate.setMonth(nextDate.getMonth() - 1);
        break;

      case 'PageDown':
        e.preventDefault();
        nextDate.setMonth(nextDate.getMonth() + 1);
        break;

      case 'Home':
        e.preventDefault();
        nextDate = new Date(nextDate.getFullYear(), nextDate.getMonth(), 1);
        break;

      case 'End':
        e.preventDefault();
        nextDate = new Date(nextDate.getFullYear(), nextDate.getMonth() + 1, 0);
        break;

      case 'Enter':
      case ' ':
        e.preventDefault();
        handleSelectDate(focusedDate);
        return;

      default:
        return;
    }

    if (nextDate.getMonth() !== currentMonth.getMonth() || nextDate.getFullYear() !== currentMonth.getFullYear()) {
      setCurrentMonth(new Date(nextDate.getFullYear(), nextDate.getMonth(), 1));
    }
    setFocusedDate(nextDate);
  };

  const formattedValue = value
    ? value.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
    : '';

  const classes = [
    'moon-datepicker',
    `moon-datepicker--${variant}`,
    disabled ? 'moon-datepicker--disabled' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classes} ref={containerRef} onKeyDown={handleKeyDown} {...props}>
      {label && <label className="moon-datepicker__label">{label}</label>}

      <button
        ref={triggerRef}
        type="button"
        className="moon-datepicker__trigger"
        onClick={() => !disabled && setIsOpen(!isOpen)}
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        disabled={disabled}
      >
        <span className={formattedValue ? 'moon-datepicker__value' : 'moon-datepicker__placeholder'}>
          {formattedValue || placeholder}
        </span>
        <span className="moon-datepicker__icon" aria-hidden="true">
          📅
        </span>
      </button>

      {isOpen && (
        <div
          className="moon-datepicker__popover"
          role="dialog"
          aria-modal="true"
          aria-label="Date Picker Calendar"
        >
          {/* Header Controls */}
          <div className="moon-datepicker__header">
            <button
              type="button"
              className="moon-datepicker__nav-btn"
              onClick={handlePrevMonth}
              aria-label="Previous month"
            >
              &lt;
            </button>
            <span className="moon-datepicker__month-title">
              {MONTH_NAMES[month]} {year}
            </span>
            <button
              type="button"
              className="moon-datepicker__nav-btn"
              onClick={handleNextMonth}
              aria-label="Next month"
            >
              &gt;
            </button>
          </div>

          {/* Days Header */}
          <div className="moon-datepicker__weekdays">
            {DAYS_OF_WEEK.map((day) => (
              <div key={day} className="moon-datepicker__weekday">
                {day}
              </div>
            ))}
          </div>

          {/* Grid Days */}
          <div className="moon-datepicker__grid" role="grid" ref={gridRef}>
            {days.map((date, idx) => {
              if (!date) {
                return <div key={`empty-${idx}`} className="moon-datepicker__day--empty" />;
              }

              const isSelected =
                value &&
                date.getDate() === value.getDate() &&
                date.getMonth() === value.getMonth() &&
                date.getFullYear() === value.getFullYear();

              const isFocused =
                date.getDate() === focusedDate.getDate() &&
                date.getMonth() === focusedDate.getMonth() &&
                date.getFullYear() === focusedDate.getFullYear();

              const isDisabled = isDateDisabled(date);

              const dayClasses = [
                'moon-datepicker__day',
                isSelected ? 'moon-datepicker__day--selected' : '',
                isFocused ? 'moon-datepicker__day--focused' : '',
                isDisabled ? 'moon-datepicker__day--disabled' : '',
              ]
                .filter(Boolean)
                .join(' ');

              return (
                <button
                  key={date.toISOString()}
                  type="button"
                  role="gridcell"
                  tabIndex={isFocused ? 0 : -1}
                  aria-selected={Boolean(isSelected)}
                  aria-disabled={isDisabled}
                  className={dayClasses}
                  onClick={() => handleSelectDate(date)}
                >
                  {date.getDate()}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
