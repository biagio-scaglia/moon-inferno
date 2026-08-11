import { useState, forwardRef, type HTMLAttributes } from 'react';
import { CopyIcon, CheckIcon } from '@moon-inferno/icons';
import './CodeBlock.css';

export interface CodeBlockProps extends HTMLAttributes<HTMLDivElement> {
  code: string;
  filename?: string;
}

export const CodeBlock = forwardRef<HTMLDivElement, CodeBlockProps>(
  ({ code, filename, className = '', ...props }, ref) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
      navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    };

    return (
      <div ref={ref} className={`mi-codeblock-wrapper ${className}`.trim()} {...props}>
        <div className="mi-codeblock-header">
          <span>{filename || 'bash'}</span>
          <button
            type="button"
            onClick={handleCopy}
            className="mi-codeblock-copy-btn"
            aria-label={copied ? 'Code snippet copied' : 'Copy code to clipboard'}
          >
            {copied ? <CheckIcon size={14} color="var(--mi-color-success)" /> : <CopyIcon size={14} />}
            <span aria-live="polite">{copied ? 'Copied!' : 'Copy'}</span>
          </button>
        </div>
        <pre className="mi-codeblock-pre">
          <code>{code}</code>
        </pre>
      </div>
    );
  }
);

CodeBlock.displayName = 'CodeBlock';
