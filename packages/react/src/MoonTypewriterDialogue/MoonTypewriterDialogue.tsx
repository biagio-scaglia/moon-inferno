import { useState, useEffect, useRef, type ReactNode, type HTMLAttributes } from 'react';
import './MoonTypewriterDialogue.css';

export interface MoonTypewriterDialogueProps extends HTMLAttributes<HTMLDivElement> {
  text: string;
  speaker?: string;
  avatar?: ReactNode;
  speed?: number;
  onComplete?: () => void;
  variant?: 'inferno' | 'pixel' | 'terminal';
}

export const MoonTypewriterDialogue = ({
  text,
  speaker = 'INFERNO_AI',
  avatar,
  speed = 30,
  onComplete,
  variant = 'inferno',
  className = '',
  ...props
}: MoonTypewriterDialogueProps) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isFinished, setIsFinished] = useState(false);

  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  useEffect(() => {
    setDisplayedText('');
    setIsFinished(false);
    let index = 0;

    const timer = setInterval(() => {
      if (index < text.length) {
        setDisplayedText(text.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
        setIsFinished(true);
        onCompleteRef.current?.();
      }
    }, speed);

    return () => clearInterval(timer);
  }, [text, speed]);

  const variantClass = variant === 'pixel' ? 'mi-typewriter-box--pixel' : variant === 'terminal' ? 'mi-typewriter-box--terminal' : '';

  return (
    <div
      className={`mi-typewriter-box ${variantClass} ${className}`.trim()}
      {...props}
    >
      {/* WCAG Accessibility: Screen readers receive the full text immediately via aria-live polite */}
      <div className="mi-sr-only" aria-live="polite" aria-atomic="true">
        {speaker ? `${speaker} says: ` : ''}{text}
      </div>

      <div className="mi-typewriter-header">
        {avatar && <div className="mi-typewriter-avatar">{avatar}</div>}
        {speaker && <div className="mi-typewriter-speaker">{speaker}</div>}
      </div>

      <div className="mi-typewriter-body" aria-hidden="true">
        {displayedText}
        {!isFinished && <span className="mi-typewriter-cursor" />}
      </div>

      {isFinished && <div className="mi-typewriter-complete-indicator">▼ PRESS ANY KEY</div>}
    </div>
  );
};

export const TypewriterDialogue = MoonTypewriterDialogue;
