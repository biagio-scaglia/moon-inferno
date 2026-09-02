import { useState, type ChangeEvent, type HTMLAttributes } from 'react';
import './SheetEditor.css';

export interface SheetEditorProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  title?: string;
  readOnly?: boolean;
  showLineNumbers?: boolean;
  variant?: 'inferno' | 'pixel' | 'terminal';
}

export const SheetEditor = ({
  value: valueProp,
  defaultValue = '// INFERNO_SCRIPT_NOTE\nconsole.log("Moon-Inferno Sheet Editor active.");\n\nconst status = "ONLINE";',
  onChange,
  title = 'CYBER_SHEET_NOTE.TXT',
  readOnly = false,
  showLineNumbers = true,
  variant = 'inferno',
  className = '',
  ...props
}: SheetEditorProps) => {
  const [internalValue, setInternalValue] = useState(defaultValue);
  const [isPreviewMode, setIsPreviewMode] = useState(false);
  const [copied, setCopied] = useState(false);

  const value = valueProp !== undefined ? valueProp : internalValue;

  const handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const val = e.target.value;
    if (valueProp === undefined) {
      setInternalValue(val);
    }
    onChange?.(val);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleClear = () => {
    if (valueProp === undefined) {
      setInternalValue('');
    }
    onChange?.('');
  };

  const lines = value.split('\n');
  const wordCount = value.trim() ? value.trim().split(/\s+/).length : 0;
  const charCount = value.length;

  return (
    <div className={`mi-sheeteditor mi-sheeteditor--${variant} ${className}`.trim()} {...props}>
      <div className="mi-sheeteditor-header">
        <div className="mi-sheeteditor-title">
          <span>{title}</span>
        </div>
        <div className="mi-sheeteditor-actions">
          <button type="button" className="mi-sheeteditor-btn" onClick={() => setIsPreviewMode(!isPreviewMode)}>
            {isPreviewMode ? 'EDIT' : 'PREVIEW'}
          </button>
          <button type="button" className="mi-sheeteditor-btn" onClick={handleCopy}>
            {copied ? 'COPIED!' : 'COPY'}
          </button>
          {!readOnly && (
            <button type="button" className="mi-sheeteditor-btn" onClick={handleClear}>
              CLEAR
            </button>
          )}
        </div>
      </div>

      <div className="mi-sheeteditor-body">
        {showLineNumbers && !isPreviewMode && (
          <div className="mi-sheeteditor-gutter">
            {lines.map((_, i) => (
              <div key={i}>{i + 1}</div>
            ))}
          </div>
        )}

        {isPreviewMode ? (
          <div className="mi-sheeteditor-preview">{value || <span style={{ color: 'var(--mi-color-text-dim)' }}>Empty sheet.</span>}</div>
        ) : (
          <textarea
            value={value}
            onChange={handleTextChange}
            readOnly={readOnly}
            className="mi-sheeteditor-textarea"
            rows={Math.max(6, lines.length)}
            placeholder="Type your notes or code here..."
            aria-label={title}
          />
        )}
      </div>

      <div className="mi-sheeteditor-footer">
        <span>LINES: {lines.length}</span>
        <span>WORDS: {wordCount}</span>
        <span>CHARS: {charCount}</span>
      </div>
    </div>
  );
};
