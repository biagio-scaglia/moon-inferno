import { useState, forwardRef, type HTMLAttributes, type MouseEvent } from 'react';
import { CopyIcon, CheckIcon, ChevronDownIcon, ChevronUpIcon } from '@moon-inferno/icons';
import './CodeBlock.css';

export interface CodeBlockProps extends HTMLAttributes<HTMLDivElement> {
  code: string;
  filename?: string;
  language?: string;
  collapsible?: boolean;
  defaultExpanded?: boolean;
  title?: string;
}

export const CodeBlock = forwardRef<HTMLDivElement, CodeBlockProps>(
  (
    {
      code,
      filename,
      language,
      collapsible = false,
      defaultExpanded = false,
      title,
      className = '',
      ...props
    },
    ref
  ) => {
    const [copied, setCopied] = useState(false);
    const [isExpanded, setIsExpanded] = useState(!collapsible || defaultExpanded);

    const handleCopy = (e: MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    };

    const headerTitle = title || filename || (language ? `code.${language}` : 'code snippet');

    return (
      <div
        ref={ref}
        className={`mi-codeblock-wrapper ${collapsible ? 'mi-codeblock-wrapper--collapsible' : ''} ${className}`.trim()}
        {...props}
      >
        <div className="mi-codeblock-header">
          {collapsible ? (
            <button
              type="button"
              className="mi-codeblock-header-title mi-codeblock-header-title--clickable"
              onClick={() => setIsExpanded(!isExpanded)}
              aria-expanded={isExpanded}
              style={{ background: 'none', border: 'none', padding: 0, font: 'inherit', color: 'inherit', textAlign: 'left', display: 'flex', alignItems: 'center', cursor: 'pointer' }}
            >
              <span className="mi-codeblock-toggle-icon">
                {isExpanded ? <ChevronUpIcon size={14} /> : <ChevronDownIcon size={14} />}
              </span>
              <span>{headerTitle}</span>
              {language && <span className="mi-codeblock-lang-tag">{language}</span>}
              <span className="mi-codeblock-collapse-hint">
                {isExpanded ? '(click to collapse)' : '(click to expand)'}
              </span>
            </button>
          ) : (
            <div className="mi-codeblock-header-title">
              <span>{headerTitle}</span>
              {language && <span className="mi-codeblock-lang-tag">{language}</span>}
            </div>
          )}

          <button
            type="button"
            onClick={handleCopy}
            className="mi-codeblock-copy-btn"
            aria-label={copied ? 'Code snippet copied' : 'Copy code to clipboard'}
          >
            {copied ? <CheckIcon size={14} color="var(--mi-color-success)" /> : <CopyIcon size={14} />}
            <span aria-live="polite">{copied ? 'Copied!' : 'Copy Code'}</span>
          </button>
        </div>

        {isExpanded && (
          <pre className="mi-codeblock-pre">
            <code data-language={language} className={language ? `language-${language}` : undefined}>{code}</code>
          </pre>
        )}
      </div>
    );
  }
);

CodeBlock.displayName = 'CodeBlock';
