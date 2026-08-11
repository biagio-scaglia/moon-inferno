import { useState, useEffect, forwardRef, type HTMLAttributes } from 'react';
import './TypingText.css';

export interface TypingTextProps extends HTMLAttributes<HTMLSpanElement> {
  text?: string;
  children?: string;
  speed?: number;
  cursorChar?: string;
  onComplete?: () => void;
}

export const TypingText = forwardRef<HTMLSpanElement, TypingTextProps>(
  ({ text, children, speed = 50, cursorChar = '_', onComplete, className = '', ...props }, ref) => {
    const targetText = text ?? children ?? '';
    const [displayedText, setDisplayedText] = useState('');

    useEffect(() => {
      let index = 0;
      setDisplayedText('');

      const interval = setInterval(() => {
        if (index < targetText.length) {
          setDisplayedText((prev) => prev + targetText.charAt(index));
          index++;
        } else {
          clearInterval(interval);
          onComplete?.();
        }
      }, speed);

      return () => clearInterval(interval);
    }, [targetText, speed, onComplete]);

    return (
      <span ref={ref} aria-label={targetText} className={`mi-typing-text ${className}`.trim()} {...props}>
        <span>{displayedText}</span>
        <span className="mi-typing-cursor" aria-hidden="true">{cursorChar}</span>
      </span>
    );
  }
);

TypingText.displayName = 'TypingText';
