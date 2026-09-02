import { useRef, useEffect, type HTMLAttributes } from 'react';
import './MoonConsoleLogger.css';

export interface ConsoleLogEntry {
  id?: string | number;
  timestamp?: string;
  type?: 'info' | 'warn' | 'error' | 'success';
  message: string;
}

export interface MoonConsoleLoggerProps extends HTMLAttributes<HTMLDivElement> {
  logs: ConsoleLogEntry[];
  title?: string;
  maxLines?: number;
  autoScroll?: boolean;
  variant?: 'terminal' | 'inferno';
}

export const MoonConsoleLogger = ({
  logs,
  title = 'LIVE_BLOCKCHAIN_LOGGER',
  maxLines = 100,
  autoScroll = true,
  variant = 'terminal',
  className = '',
  ...props
}: MoonConsoleLoggerProps) => {
  const bodyRef = useRef<HTMLDivElement>(null);
  const latestLog = logs.length > 0 ? logs[logs.length - 1] : null;

  useEffect(() => {
    if (autoScroll && bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [logs, autoScroll]);

  const visibleLogs = logs.slice(-maxLines);

  return (
    <div
      className={`mi-consolelogger ${variant === 'inferno' ? 'mi-consolelogger--inferno' : ''} ${className}`.trim()}
      {...props}
    >
      {/* WCAG Accessibility: Screen readers receive new log entries via aria-live polite */}
      <div className="mi-sr-only" aria-live="polite" aria-atomic="false">
        {latestLog ? `Console log [${latestLog.type || 'info'}]: ${latestLog.message}` : ''}
      </div>

      <div className="mi-consolelogger-header">
        <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{title}</span>
        <span style={{ opacity: 0.7, flexShrink: 0 }}>{logs.length} LOGS</span>
      </div>

      <div ref={bodyRef} className="mi-consolelogger-body">
        {visibleLogs.length === 0 ? (
          <span style={{ opacity: 0.5 }}>Awaiting console log stream...</span>
        ) : (
          visibleLogs.map((log, index) => (
            <div key={log.id || index} className="mi-consolelogger-line">
              <span className="mi-consolelogger-meta">
                {log.timestamp && (
                  <span className="mi-consolelogger-timestamp">
                    [{log.timestamp}]
                  </span>
                )}
                <span className={`mi-consolelogger-type mi-consolelogger-type--${log.type || 'info'}`}>
                  {log.type ? log.type.toUpperCase() : 'INFO'}:
                </span>
              </span>
              <span className="mi-consolelogger-message">{log.message}</span>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export const ConsoleLogger = MoonConsoleLogger;
