import { useState, forwardRef, type HTMLAttributes, type MouseEvent, type KeyboardEvent } from 'react';
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

    const handleHeaderKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
      if (collapsible && (e.key === 'Enter' || e.key === ' ')) {
        e.preventDefault();
        setIsExpanded(!isExpanded);
      }
    };

    const headerTitle = title || filename || (language ? `code.${language}` : 'code snippet');

    return (
      <div
        ref={ref}
        className={`mi-codeblock-wrapper ${collapsible ? 'mi-codeblock-wrapper--collapsible' : ''} ${className}`.trim()}
        {...props}
      >
        <div
          className={`mi-codeblock-header ${collapsible ? 'mi-codeblock-header--clickable' : ''}`}
          onClick={collapsible ? () => setIsExpanded(!isExpanded) : undefined}
          role={collapsible ? 'button' : undefined}
          tabIndex={collapsible ? 0 : undefined}
          onKeyDown={handleHeaderKeyDown}
          aria-expanded={collapsible ? isExpanded : undefined}
        >
          <div className="mi-codeblock-header-title">
            {collapsible && (
              <span className="mi-codeblock-toggle-icon">
                {isExpanded ? <ChevronUpIcon size={14} /> : <ChevronDownIcon size={14} />}
              </span>
            )}
            <span>{headerTitle}</span>
            {language && <span className="mi-codeblock-lang-tag">{language}</span>}
            {collapsible && (
              <span className="mi-codeblock-collapse-hint">
                {isExpanded ? '(click to collapse)' : '(click to expand full copy-paste code)'}
              </span>
            )}
          </div>

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
