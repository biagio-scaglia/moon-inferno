import { useState, type ChangeEvent, type HTMLAttributes } from 'react';
import './ColorPicker.css';

export interface ColorPickerProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  value?: string;
  defaultValue?: string;
  onChange?: (color: string) => void;
  presetColors?: string[];
  showPresets?: boolean;
  label?: string;
  variant?: 'inferno' | 'pixel';
}

const DEFAULT_PRESETS = [
  '#FF4D00', // Inferno Red-Orange
  '#00FF66', // Terminal Green
  '#00E5FF', // Y2K Cyber Cyan
  '#FF00A0', // Neon Pink
  '#FFD700', // Cyber Gold
  '#9D00FF', // Purple
  '#FFFFFF', // Pure White
  '#14121A', // Dark Obsidian
];

export const ColorPicker = ({
  value: valueProp,
  defaultValue = '#FF4D00',
  onChange,
  presetColors = DEFAULT_PRESETS,
  showPresets = true,
  label = 'HEX',
  variant = 'inferno',
  className = '',
  ...props
}: ColorPickerProps) => {
  const [internalColor, setInternalColor] = useState(defaultValue);
  const color = valueProp !== undefined ? valueProp : internalColor;

  const handleColorChange = (newColor: string) => {
    if (valueProp === undefined) {
      setInternalColor(newColor);
    }
    onChange?.(newColor);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value;
    if (!val.startsWith('#')) {
      val = `#${val}`;
    }
    handleColorChange(val);
  };

  return (
    <div
      className={`mi-colorpicker ${variant === 'pixel' ? 'mi-colorpicker--pixel' : ''} ${className}`.trim()}
      {...props}
    >
      <div className="mi-colorpicker-control">
        <button
          type="button"
          className="mi-colorpicker-swatch-btn"
          style={{ backgroundColor: color }}
          aria-label={`Color preview swatch: ${color}`}
        >
          <input
            type="color"
            value={color.length === 7 ? color : '#FF4D00'}
            onChange={(e) => handleColorChange(e.target.value)}
            className="mi-colorpicker-native-input"
            aria-label="Pick color"
          />
        </button>

        <span style={{ fontSize: '0.75rem', color: 'var(--mi-color-text-muted, #94A3B8)' }}>{label}</span>

        <input
          type="text"
          value={color}
          onChange={handleInputChange}
          className="mi-colorpicker-input"
          maxLength={7}
          aria-label="Hex color string value"
        />
      </div>

      {showPresets && presetColors.length > 0 && (
        <div className="mi-colorpicker-presets" role="group" aria-label="Preset color swatches">
          {presetColors.map((preset) => (
            <button
              key={preset}
              type="button"
              className={`mi-colorpicker-preset-swatch ${color.toLowerCase() === preset.toLowerCase() ? 'mi-colorpicker-preset-swatch--active' : ''}`}
              style={{ backgroundColor: preset }}
              onClick={() => handleColorChange(preset)}
              aria-label={`Select preset color ${preset}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};
