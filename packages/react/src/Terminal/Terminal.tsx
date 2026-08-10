import {
  useState,
  useRef,
  useEffect,
  type FC,
  type FormEvent,
} from 'react';
import './Terminal.css';

export interface TerminalLine {
  id: string;
  type: 'input' | 'output' | 'error';
  text: string;
}

export interface TerminalProps {
  title?: string;
  initialLines?: TerminalLine[];
  onCommand?: (command: string) => string | void;
  promptSymbol?: string;
  className?: string;
}

export const Terminal: FC<TerminalProps> = ({
  title = 'TERMINAL // MOON-INFERNO OS',
  initialLines = [],
  onCommand,
  promptSymbol = '>',
  className = '',
}) => {
  const [lines, setLines] = useState<TerminalLine[]>(initialLines);
  const [inputVal, setInputVal] = useState('');
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollTop = contentRef.current.scrollHeight;
    }
  }, [lines]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const cmd = inputVal.trim();
    if (!cmd) return;

    const inputLine: TerminalLine = {
      id: String(Date.now()),
      type: 'input',
      text: cmd,
    };

    let resultLine: TerminalLine | null = null;
    if (onCommand) {
      const output = onCommand(cmd);
      if (output) {
        resultLine = {
          id: String(Date.now() + 1),
          type: 'output',
          text: output,
        };
      }
    }

    setLines((prev) => [...prev, inputLine, ...(resultLine ? [resultLine] : [])]);
    setInputVal('');
  };

  return (
    <div className={`mi-terminal ${className}`.trim()}>
      <div className="mi-terminal__titlebar">
        <div className="mi-terminal__dots">
          <span className="mi-terminal__dot mi-terminal__dot--red" />
          <span className="mi-terminal__dot mi-terminal__dot--yellow" />
          <span className="mi-terminal__dot mi-terminal__dot--green" />
        </div>
        <span>{title}</span>
        <span />
      </div>
      <div ref={contentRef} className="mi-terminal__content">
        {lines.map((line) => (
          <div key={line.id} className={`mi-terminal__line mi-terminal__line--${line.type}`}>
            {line.type === 'input' && (
              <span className="mi-terminal__prompt">{promptSymbol}</span>
            )}
            <span>{line.text}</span>
          </div>
        ))}
        <form onSubmit={handleSubmit} className="mi-terminal__input-form">
          <span className="mi-terminal__prompt">{promptSymbol}</span>
          <input
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            className="mi-terminal__input"
            aria-label="Terminal input"
            autoCapitalize="off"
            autoCorrect="off"
          />
        </form>
      </div>
    </div>
  );
};
