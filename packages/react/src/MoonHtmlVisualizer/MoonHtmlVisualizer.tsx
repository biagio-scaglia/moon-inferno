import {
  useState,
  useEffect,
  useRef,
  useCallback,
  type HTMLAttributes,
  type ChangeEvent,
} from 'react';
import {
  HtmlIcon,
  CssIcon,
  EyeIcon,
  CopyIcon,
  CheckIcon,
  RefreshIcon,
  SparklesIcon,
  ExternalLinkIcon,
  LayersIcon,
} from '@moon-inferno/icons';
import './MoonHtmlVisualizer.css';

export type VisualizerViewMode = 'preview' | 'html' | 'css' | 'split';
export type VisualizerViewport = 'desktop' | 'tablet' | 'mobile';
export type VisualizerTheme = 'moon-inferno' | 'terminal' | 'y2k';

export interface VisualizerPreset {
  id: string;
  name: string;
  html: string;
  css: string;
}

export interface MoonHtmlVisualizerProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  initialHtml?: string;
  initialCss?: string;
  title?: string;
  defaultTab?: VisualizerViewMode;
  theme?: VisualizerTheme;
  enableCdnInjection?: boolean;
  enableCrtOverlay?: boolean;
  allowExport?: boolean;
  allowViewportResize?: boolean;
  allowThemeSwitch?: boolean;
  height?: string | number;
  variant?: 'inferno' | 'pixel' | 'terminal';
  presets?: VisualizerPreset[];
  onHtmlChange?: (html: string) => void;
  onCssChange?: (css: string) => void;
}

const DEFAULT_PRESETS: VisualizerPreset[] = [
  {
    id: 'cyber-cards',
    name: 'Cyber Cards & Controls',
    html: `<div class="demo-wrapper">
  <div class="mi-card">
    <div class="mi-card-header">
      <h3 style="margin: 0; font-size: 1rem; color: var(--mi-color-primary);">TACTICAL NODE // AUTH</h3>
    </div>
    <div class="mi-card-body" style="display: flex; flex-direction: column; gap: 1rem;">
      <input type="text" class="mi-input" placeholder="Operator Call-Sign..." value="CYBER_GHOST" />
      <select class="mi-select">
        <option>Role: Core Netrunner</option>
        <option>Role: Systems Architect</option>
        <option>Role: Security Enforcer</option>
      </select>
      <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
        <button class="mi-button mi-button--inferno" onclick="alert('Access Granted!')">Execute Protocol</button>
        <button class="mi-button mi-button--outline">Abort</button>
      </div>
    </div>
  </div>
</div>`,
    css: `.demo-wrapper {
  max-width: 500px;
  margin: 1.5rem auto;
  padding: 1rem;
}`,
  },
  {
    id: 'rpg-hud',
    name: 'RPG Gaming HUD',
    html: `<div class="hud-container">
  <header style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
    <h2 style="margin: 0; font-size: 1.1rem; color: var(--mi-color-primary);">COMMANDER HUD</h2>
    <span class="mi-badge mi-badge--inferno">LVL 99</span>
  </header>
  
  <div style="display: flex; flex-direction: column; gap: 0.85rem;">
    <div>
      <div style="display: flex; justify-content: space-between; font-size: 0.75rem; margin-bottom: 4px;">
        <span>HEALTH (HP)</span>
        <span>85/100</span>
      </div>
      <meter class="mi-health-meter mi-health-meter--health" value="85" min="0" max="100"></meter>
    </div>

    <div>
      <div style="display: flex; justify-content: space-between; font-size: 0.75rem; margin-bottom: 4px;">
        <span>MANA (MP)</span>
        <span>60/100</span>
      </div>
      <meter class="mi-health-meter mi-health-meter--mana" value="60" min="0" max="100"></meter>
    </div>

    <div>
      <div style="display: flex; justify-content: space-between; font-size: 0.75rem; margin-bottom: 4px;">
        <span>SHIELD (SP)</span>
        <span>100/100</span>
      </div>
      <meter class="mi-health-meter mi-health-meter--shield" value="100" min="0" max="100"></meter>
    </div>
  </div>
</div>`,
    css: `.hud-container {
  max-width: 480px;
  margin: 1rem auto;
  padding: 1.25rem;
  background: var(--mi-color-surface, #1E1B26);
  border: 2px solid var(--mi-color-border-accent, #FF4D00);
  border-radius: 6px;
  box-shadow: var(--mi-shadow-glow);
}`,
  },
  {
    id: 'terminal-matrix',
    name: 'Matrix Data Stream',
    html: `<div class="matrix-box">
  <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--mi-color-border); padding-bottom: 0.5rem; margin-bottom: 1rem;">
    <span style="font-weight: 700; color: var(--mi-color-primary);">NODE STREAM // 0xFF90</span>
    <span class="mi-badge mi-badge--success">ACTIVE</span>
  </div>
  <table class="mi-table mi-table--striped" style="width: 100%;">
    <thead>
      <tr>
        <th>ID</th>
        <th>DAEMON</th>
        <th>PING</th>
        <th>STATE</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>#001</td>
        <td>CRT-SYNTH</td>
        <td>4ms</td>
        <td><span class="mi-badge mi-badge--success">OK</span></td>
      </tr>
      <tr>
        <td>#002</td>
        <td>SHADOW-AI</td>
        <td>12ms</td>
        <td><span class="mi-badge mi-badge--inferno">BUSY</span></td>
      </tr>
    </tbody>
  </table>
</div>`,
    css: `.matrix-box {
  max-width: 580px;
  margin: 1rem auto;
  padding: 1.25rem;
  background: var(--mi-color-bg-subtle, #14121A);
  border: 1px solid var(--mi-color-border, #332D40);
  border-radius: 4px;
}`,
  },
];

export const MoonHtmlVisualizer = ({
  initialHtml = DEFAULT_PRESETS[0]?.html || '',
  initialCss = DEFAULT_PRESETS[0]?.css || '',
  title = 'HTML & CSS LIVE VISUALIZER',
  defaultTab = 'split',
  theme: initialTheme = 'moon-inferno',
  enableCdnInjection = true,
  enableCrtOverlay = true,
  allowExport = true,
  allowViewportResize = true,
  allowThemeSwitch = true,
  height = '560px',
  variant = 'inferno',
  presets = DEFAULT_PRESETS,
  onHtmlChange,
  onCssChange,
  className = '',
  ...props
}: MoonHtmlVisualizerProps) => {
  const [htmlCode, setHtmlCode] = useState(initialHtml);
  const [cssCode, setCssCode] = useState(initialCss);
  const [viewMode, setViewMode] = useState<VisualizerViewMode>(defaultTab);
  const [currentTheme, setCurrentTheme] = useState<VisualizerTheme>(initialTheme);
  const [viewport, setViewport] = useState<VisualizerViewport>('desktop');
  const [crtActive, setCrtActive] = useState(enableCrtOverlay);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [announcement, setAnnouncement] = useState('');

  const iframeRef = useRef<HTMLIFrameElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Generate full standalone HTML document for iframe
  const generateDocument = useCallback(
    (html: string, css: string, theme: VisualizerTheme) => {
      return `<!DOCTYPE html>
<html lang="en" data-theme="${theme}">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Moon-Inferno Preview</title>
  
  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;600;700&family=Press+Start+2P&display=swap" rel="stylesheet">
  
  <!-- Moon-Inferno CDN Stylesheet -->
  ${
    enableCdnInjection
      ? '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/moon-inferno@0.3.7/dist/styles.css">'
      : ''
  }

  <style>
    :root {
      color-scheme: dark;
    }
    body {
      margin: 0;
      padding: 1.25rem;
      font-family: var(--mi-font-mono, 'JetBrains Mono', monospace);
      background-color: var(--mi-color-bg, #0A090D);
      color: var(--mi-color-text, #F1F5F9);
      min-height: 100vh;
      box-sizing: border-box;
      transition: background-color 0.2s ease, color 0.2s ease;
    }
    * {
      box-sizing: border-box;
    }
    /* User Custom CSS */
    ${css}
  </style>
</head>
<body>
  ${html}
</body>
</html>`;
    },
    [enableCdnInjection]
  );

  // Update iframe contents
  useEffect(() => {
    if (iframeRef.current) {
      const doc = generateDocument(htmlCode, cssCode, currentTheme);
      iframeRef.current.srcdoc = doc;
    }
  }, [htmlCode, cssCode, currentTheme, generateDocument]);

  // Handle ESC key for fullscreen
  useEffect(() => {
    const handleKeyDown = (e: globalThis.KeyboardEvent) => {
      if (e.key === 'Escape' && isFullscreen) {
        setIsFullscreen(false);
        setAnnouncement('Exited fullscreen mode');
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isFullscreen]);

  const handleHtmlChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const val = e.target.value;
    setHtmlCode(val);
    onHtmlChange?.(val);
  };

  const handleCssChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const val = e.target.value;
    setCssCode(val);
    onCssChange?.(val);
  };

  const handleCopyCode = async () => {
    try {
      const fullDoc = generateDocument(htmlCode, cssCode, currentTheme);
      await navigator.clipboard.writeText(fullDoc);
      setCopied(true);
      setAnnouncement('Full standalone HTML & CSS copied to clipboard');
      setTimeout(() => setCopied(false), 2200);
    } catch {
      setAnnouncement('Failed to copy code to clipboard');
    }
  };

  const handleDownloadHtml = () => {
    const fullDoc = generateDocument(htmlCode, cssCode, currentTheme);
    const blob = new Blob([fullDoc], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `moon-inferno-${currentTheme}-preview.html`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    setAnnouncement('Downloaded preview as standalone HTML file');
  };

  const handlePresetSelect = (presetId: string) => {
    const found = presets.find((p) => p.id === presetId);
    if (found) {
      setHtmlCode(found.html);
      setCssCode(found.css);
      onHtmlChange?.(found.html);
      onCssChange?.(found.css);
      setAnnouncement(`Loaded preset: ${found.name}`);
    }
  };

  const getViewportWidth = () => {
    switch (viewport) {
      case 'mobile':
        return '375px';
      case 'tablet':
        return '768px';
      default:
        return '100%';
    }
  };

  return (
    <div
      ref={containerRef}
      role="region"
      aria-label={title}
      className={[
        'mi-visualizer',
        `mi-visualizer--${variant}`,
        isFullscreen ? 'mi-visualizer--fullscreen' : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      style={{ height: isFullscreen ? '100vh' : height }}
      {...props}
    >
      {/* Screen Reader Live Announcements */}
      <div className="mi-sr-only" aria-live="polite">
        {announcement}
      </div>

      {/* Top Main Command Toolbar */}
      <div className="mi-visualizer__toolbar">
        <div className="mi-visualizer__brand">
          <span className="mi-visualizer__icon">
            <SparklesIcon size={16} color="var(--mi-color-primary)" />
          </span>
          <span className="mi-visualizer__title">{title}</span>
        </div>

        {/* View Mode Navigation Tabs */}
        <div className="mi-visualizer__tabs" role="tablist" aria-label="Visualizer Tabs">
          <button
            type="button"
            role="tab"
            aria-selected={viewMode === 'split'}
            className={`mi-visualizer__tab ${viewMode === 'split' ? 'mi-visualizer__tab--active' : ''}`}
            onClick={() => {
              setViewMode('split');
              setAnnouncement('Switched to Split View');
            }}
          >
            <LayersIcon size={14} /> Split View
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={viewMode === 'preview'}
            className={`mi-visualizer__tab ${viewMode === 'preview' ? 'mi-visualizer__tab--active' : ''}`}
            onClick={() => {
              setViewMode('preview');
              setAnnouncement('Switched to Live Preview');
            }}
          >
            <EyeIcon size={14} /> Preview
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={viewMode === 'html'}
            className={`mi-visualizer__tab ${viewMode === 'html' ? 'mi-visualizer__tab--active' : ''}`}
            onClick={() => {
              setViewMode('html');
              setAnnouncement('Switched to HTML Editor');
            }}
          >
            <HtmlIcon size={14} /> HTML
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={viewMode === 'css'}
            className={`mi-visualizer__tab ${viewMode === 'css' ? 'mi-visualizer__tab--active' : ''}`}
            onClick={() => {
              setViewMode('css');
              setAnnouncement('Switched to CSS Editor');
            }}
          >
            <CssIcon size={14} /> CSS
          </button>
        </div>

        {/* Quick Actions & Controls */}
        <div className="mi-visualizer__actions">
          {/* Preset Selector */}
          {presets.length > 0 && (
            <select
              className="mi-visualizer__select"
              aria-label="Select Code Template Preset"
              onChange={(e) => handlePresetSelect(e.target.value)}
              defaultValue=""
            >
              <option value="" disabled>
                Load Preset...
              </option>
              {presets.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.name}
                </option>
              ))}
            </select>
          )}

          {/* Theme Switcher */}
          {allowThemeSwitch && (
            <div className="mi-visualizer__btn-group" role="group" aria-label="Visualizer Theme">
              <button
                type="button"
                className={`mi-visualizer__btn-pill ${currentTheme === 'moon-inferno' ? 'mi-visualizer__btn-pill--active' : ''}`}
                onClick={() => setCurrentTheme('moon-inferno')}
                title="Inferno Theme"
              >
                Inferno
              </button>
              <button
                type="button"
                className={`mi-visualizer__btn-pill ${currentTheme === 'terminal' ? 'mi-visualizer__btn-pill--active' : ''}`}
                onClick={() => setCurrentTheme('terminal')}
                title="Terminal Theme"
              >
                Terminal
              </button>
              <button
                type="button"
                className={`mi-visualizer__btn-pill ${currentTheme === 'y2k' ? 'mi-visualizer__btn-pill--active' : ''}`}
                onClick={() => setCurrentTheme('y2k')}
                title="Y2K Theme"
              >
                Y2K
              </button>
            </div>
          )}

          {/* Viewport Resizer */}
          {allowViewportResize && (
            <div className="mi-visualizer__btn-group" role="group" aria-label="Viewport Size">
              <button
                type="button"
                className={`mi-visualizer__btn-pill ${viewport === 'desktop' ? 'mi-visualizer__btn-pill--active' : ''}`}
                onClick={() => setViewport('desktop')}
                title="Desktop View (100%)"
              >
                100%
              </button>
              <button
                type="button"
                className={`mi-visualizer__btn-pill ${viewport === 'tablet' ? 'mi-visualizer__btn-pill--active' : ''}`}
                onClick={() => setViewport('tablet')}
                title="Tablet View (768px)"
              >
                768px
              </button>
              <button
                type="button"
                className={`mi-visualizer__btn-pill ${viewport === 'mobile' ? 'mi-visualizer__btn-pill--active' : ''}`}
                onClick={() => setViewport('mobile')}
                title="Mobile View (375px)"
              >
                375px
              </button>
            </div>
          )}

          {/* CRT Overlay Switch */}
          <button
            type="button"
            className={`mi-visualizer__btn-icon ${crtActive ? 'mi-visualizer__btn-icon--active' : ''}`}
            onClick={() => setCrtActive(!crtActive)}
            title={crtActive ? 'Disable CRT Scanlines' : 'Enable CRT Scanlines'}
            aria-label="Toggle CRT Scanline Effect"
          >
            CRT
          </button>

          {/* Copy Button */}
          <button
            type="button"
            className="mi-visualizer__btn-action"
            onClick={handleCopyCode}
            aria-label="Copy Full Code"
            title="Copy Standalone Document"
          >
            {copied ? (
              <>
                <CheckIcon size={14} color="#00FF66" /> Copied!
              </>
            ) : (
              <>
                <CopyIcon size={14} /> Copy All
              </>
            )}
          </button>

          {/* Download HTML Button */}
          {allowExport && (
            <button
              type="button"
              className="mi-visualizer__btn-action"
              onClick={handleDownloadHtml}
              aria-label="Download HTML file"
              title="Download HTML File"
            >
              <ExternalLinkIcon size={14} /> Export .html
            </button>
          )}

          {/* Fullscreen Button */}
          <button
            type="button"
            className="mi-visualizer__btn-icon"
            onClick={() => setIsFullscreen(!isFullscreen)}
            aria-label={isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
            title={isFullscreen ? 'Exit Fullscreen (Esc)' : 'Fullscreen View'}
          >
            <RefreshIcon size={14} />
          </button>
        </div>
      </div>

      {/* Main Workspace Body */}
      <div className={`mi-visualizer__body mi-visualizer__body--${viewMode}`}>
        {/* HTML Source Editor */}
        {(viewMode === 'html' || viewMode === 'split') && (
          <div className="mi-visualizer__pane mi-visualizer__pane--editor">
            <div className="mi-visualizer__pane-header">
              <span className="mi-visualizer__pane-badge">
                <HtmlIcon size={13} /> HTML SOURCE
              </span>
              <span className="mi-visualizer__pane-info">{htmlCode.split('\n').length} lines</span>
            </div>
            <textarea
              className="mi-visualizer__textarea"
              value={htmlCode}
              onChange={handleHtmlChange}
              placeholder="<!-- Insert Moon-Inferno HTML markup here -->"
              aria-label="HTML Code Editor"
              spellCheck={false}
            />
          </div>
        )}

        {/* CSS Source Editor */}
        {(viewMode === 'css' || viewMode === 'split') && (
          <div className="mi-visualizer__pane mi-visualizer__pane--editor">
            <div className="mi-visualizer__pane-header">
              <span className="mi-visualizer__pane-badge">
                <CssIcon size={13} /> CUSTOM CSS
              </span>
              <span className="mi-visualizer__pane-info">{cssCode.split('\n').length} lines</span>
            </div>
            <textarea
              className="mi-visualizer__textarea"
              value={cssCode}
              onChange={handleCssChange}
              placeholder="/* Insert custom styles or theme overrides */"
              aria-label="CSS Code Editor"
              spellCheck={false}
            />
          </div>
        )}

        {/* Live Interactive Preview Canvas */}
        {(viewMode === 'preview' || viewMode === 'split') && (
          <div className="mi-visualizer__pane mi-visualizer__pane--preview">
            <div className="mi-visualizer__pane-header">
              <span className="mi-visualizer__pane-badge">
                <EyeIcon size={13} /> LIVE SANDBOX PREVIEW
              </span>
              <span className="mi-visualizer__pane-info">
                THEME: {currentTheme.toUpperCase()} // RES: {viewport.toUpperCase()} ({getViewportWidth()})
              </span>
            </div>

            <div className="mi-visualizer__canvas-container">
              <div
                className={`mi-visualizer__frame-wrapper ${crtActive ? 'mi-visualizer__frame-wrapper--crt' : ''}`}
                style={{ width: getViewportWidth() }}
              >
                <iframe
                  ref={iframeRef}
                  title="Moon-Inferno Live Sandbox Render Frame"
                  sandbox="allow-scripts allow-same-origin allow-modals"
                  className="mi-visualizer__iframe"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export const HtmlCssVisualizer = MoonHtmlVisualizer;
export const HtmlVisualizer = MoonHtmlVisualizer;
export const MoonLivePreview = MoonHtmlVisualizer;
