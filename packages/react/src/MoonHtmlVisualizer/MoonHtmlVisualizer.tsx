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

export type VisualizerViewMode = 'split' | 'preview' | 'html' | 'css';
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
      <h3 style="margin: 0; font-size: 1.1rem; color: var(--mi-color-primary);">TACTICAL NODE // AUTH</h3>
    </div>
    <div class="mi-card-body" style="display: flex; flex-direction: column; gap: 1rem;">
      <input type="text" class="mi-input" placeholder="Operator Call-Sign..." value="CYBER_GHOST" />
      <select class="mi-select">
        <option>Role: Core Netrunner</option>
        <option>Role: Systems Architect</option>
        <option>Role: Security Enforcer</option>
      </select>
      <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
        <button class="mi-button mi-button--inferno" onclick="alert('Access Granted to Node!')">Execute Protocol</button>
        <button class="mi-button mi-button--pixel">Pixel Mode</button>
        <button class="mi-button mi-button--outline">Abort</button>
      </div>
    </div>
  </div>
</div>`,
    css: `.demo-wrapper {
  max-width: 540px;
  margin: 1.5rem auto;
  padding: 1rem;
}`,
  },
  {
    id: 'rpg-hud',
    name: 'RPG Gaming HUD & Gauges',
    html: `<div class="hud-container">
  <header style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; border-bottom: 1px solid var(--mi-color-border); padding-bottom: 0.5rem;">
    <div>
      <h2 style="margin: 0; font-size: 1.2rem; color: var(--mi-color-primary);">COMMANDER HUD</h2>
      <span style="font-size: 0.75rem; color: var(--mi-color-text-muted);">STATUS: COMBAT ENGAGED</span>
    </div>
    <span class="mi-badge mi-badge--inferno">LVL 99</span>
  </header>
  
  <div style="display: flex; flex-direction: column; gap: 1rem;">
    <div>
      <div style="display: flex; justify-content: space-between; font-size: 0.8rem; margin-bottom: 4px;">
        <span>HEALTH (HP)</span>
        <span style="color: #FF4D00; font-weight: bold;">85/100</span>
      </div>
      <meter class="mi-health-meter mi-health-meter--health" value="85" min="0" max="100"></meter>
    </div>

    <div>
      <div style="display: flex; justify-content: space-between; font-size: 0.8rem; margin-bottom: 4px;">
        <span>MANA (MP)</span>
        <span style="color: #00E5FF; font-weight: bold;">60/100</span>
      </div>
      <meter class="mi-health-meter mi-health-meter--mana" value="60" min="0" max="100"></meter>
    </div>

    <div>
      <div style="display: flex; justify-content: space-between; font-size: 0.8rem; margin-bottom: 4px;">
        <span>SHIELD (SP)</span>
        <span style="color: #FF00E5; font-weight: bold;">100/100</span>
      </div>
      <meter class="mi-health-meter mi-health-meter--shield" value="100" min="0" max="100"></meter>
    </div>
  </div>
</div>`,
    css: `.hud-container {
  max-width: 520px;
  margin: 1.25rem auto;
  padding: 1.5rem;
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
    <span class="mi-badge mi-badge--success">ONLINE</span>
  </div>
  <table class="mi-table mi-table--striped" style="width: 100%;">
    <thead>
      <tr>
        <th>NODE ID</th>
        <th>DAEMON</th>
        <th>PING</th>
        <th>STATUS</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>#NODE-001</code></td>
        <td>CRT-SYNTH</td>
        <td>4ms</td>
        <td><span class="mi-badge mi-badge--success">OK</span></td>
      </tr>
      <tr>
        <td><code>#NODE-002</code></td>
        <td>SHADOW-AI</td>
        <td>12ms</td>
        <td><span class="mi-badge mi-badge--inferno">OPTIMAL</span></td>
      </tr>
      <tr>
        <td><code>#NODE-003</code></td>
        <td>QUANTUM-MESH</td>
        <td>88ms</td>
        <td><span class="mi-badge mi-badge--warning">STANDBY</span></td>
      </tr>
    </tbody>
  </table>
</div>`,
    css: `.matrix-box {
  max-width: 600px;
  margin: 1.25rem auto;
  padding: 1.5rem;
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
  height = '580px',
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
  const [splitActiveTab, setSplitActiveTab] = useState<'html' | 'css'>('html');
  const [currentTheme, setCurrentTheme] = useState<VisualizerTheme>(initialTheme);
  const [viewport, setViewport] = useState<VisualizerViewport>('desktop');
  const [crtActive, setCrtActive] = useState(enableCrtOverlay);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [announcement, setAnnouncement] = useState('');

  const iframeRef = useRef<HTMLIFrameElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Generate full standalone HTML document with embedded fallback styles for instant offline render
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
  <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;600;700&display=swap" rel="stylesheet">
  
  <!-- Moon-Inferno CDN Stylesheet -->
  ${
    enableCdnInjection
      ? '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/moon-inferno@0.3.8/dist/styles.css">'
      : ''
  }

  <style>
    /* Instant Theme Tokens Fallback */
    :root, [data-theme="moon-inferno"] {
      --mi-color-bg: #0A090D;
      --mi-color-bg-subtle: #14121A;
      --mi-color-surface: #1E1B26;
      --mi-color-border: #332D40;
      --mi-color-border-accent: #FF4D00;
      --mi-color-primary: #FF4D00;
      --mi-color-primary-hover: #FF661A;
      --mi-color-primary-active: #FF2E00;
      --mi-color-primary-text: #050406;
      --mi-color-text: #F1F5F9;
      --mi-color-text-muted: #94A3B8;
      --mi-color-text-dim: #64748B;
      --mi-color-focus-ring: #FF4D00;
      --mi-color-success: #00FF66;
      --mi-color-error: #FF0033;
      --mi-color-warning: #FFB700;
      --mi-shadow-glow: 0 0 16px rgba(255, 77, 0, 0.45);
      --mi-shadow-pixel: 3px 3px 0px #000000;
      --mi-font-mono: 'JetBrains Mono', monospace;
      --mi-radius-sm: 2px;
      --mi-radius-base: 4px;
      --mi-radius-md: 8px;
      --mi-radius-full: 9999px;
    }
    [data-theme="terminal"] {
      --mi-color-bg: #05130A;
      --mi-color-bg-subtle: #0B2213;
      --mi-color-surface: #10331C;
      --mi-color-border: #1A542E;
      --mi-color-border-accent: #00FF66;
      --mi-color-primary: #00FF66;
      --mi-color-primary-hover: #33FF85;
      --mi-color-primary-active: #00CC52;
      --mi-color-primary-text: #05130A;
      --mi-color-text: #00FF66;
      --mi-color-text-muted: #66FF99;
      --mi-color-text-dim: #26994D;
      --mi-color-focus-ring: #00FF66;
      --mi-shadow-glow: 0 0 16px rgba(0, 255, 102, 0.45);
      --mi-shadow-pixel: 3px 3px 0px #000000;
    }
    [data-theme="y2k"] {
      --mi-color-bg: #0F0E17;
      --mi-color-bg-subtle: #1B1A2E;
      --mi-color-surface: #2A2845;
      --mi-color-border: #4D4775;
      --mi-color-border-accent: #00E5FF;
      --mi-color-primary: #00E5FF;
      --mi-color-primary-hover: #52EDFF;
      --mi-color-primary-active: #00B4CC;
      --mi-color-primary-text: #0F0E17;
      --mi-color-text: #F8FAFC;
      --mi-color-text-muted: #CBD5E1;
      --mi-color-text-dim: #8B85C1;
      --mi-color-focus-ring: #00E5FF;
      --mi-shadow-glow: 0 0 16px rgba(0, 229, 255, 0.45);
      --mi-shadow-pixel: 3px 3px 0px #0F0E17;
    }

    /* Core Document Layout */
    html, body {
      margin: 0;
      padding: 1.25rem;
      font-family: var(--mi-font-mono, 'JetBrains Mono', monospace);
      background-color: var(--mi-color-bg, #0A090D);
      color: var(--mi-color-text, #F1F5F9);
      min-height: 100%;
      box-sizing: border-box;
      transition: background-color 0.2s ease, color 0.2s ease;
    }
    * {
      box-sizing: border-box;
    }

    /* Base Component Primitives */
    .mi-card {
      background-color: var(--mi-color-surface, #1E1B26);
      border: 1px solid var(--mi-color-border, #332D40);
      border-radius: var(--mi-radius-base, 4px);
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
      overflow: hidden;
    }
    .mi-card-header {
      padding: 0.85rem 1rem;
      border-bottom: 1px solid var(--mi-color-border, #332D40);
      background-color: var(--mi-color-bg-subtle, #14121A);
    }
    .mi-card-body {
      padding: 1rem;
    }
    .mi-button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      padding: 0.5rem 1.15rem;
      font-family: var(--mi-font-mono, monospace);
      font-size: 0.875rem;
      font-weight: 700;
      border-radius: var(--mi-radius-base, 4px);
      cursor: pointer;
      border: 2px solid transparent;
      outline: none;
      transition: all 0.15s ease;
      text-decoration: none;
    }
    .mi-button--inferno {
      background-color: var(--mi-color-primary, #FF4D00);
      color: var(--mi-color-primary-text, #050406);
      border-color: var(--mi-color-primary, #FF4D00);
    }
    .mi-button--inferno:hover {
      background-color: var(--mi-color-primary-hover, #FF661A);
      box-shadow: var(--mi-shadow-glow);
    }
    .mi-button--pixel {
      background-color: var(--mi-color-bg-subtle, #14121A);
      color: var(--mi-color-primary, #FF4D00);
      border: 2px solid var(--mi-color-primary, #FF4D00);
      box-shadow: 2px 2px 0px #000;
    }
    .mi-button--outline {
      background-color: transparent;
      color: var(--mi-color-primary, #FF4D00);
      border-color: var(--mi-color-primary, #FF4D00);
    }
    .mi-badge {
      display: inline-flex;
      align-items: center;
      padding: 0.2rem 0.5rem;
      font-size: 0.75rem;
      font-weight: 700;
      border-radius: 2px;
      letter-spacing: 0.05em;
    }
    .mi-badge--inferno {
      background: rgba(255, 77, 0, 0.15);
      color: #FF8533;
      border: 1px solid #FF661A;
    }
    .mi-badge--success {
      background: rgba(0, 255, 102, 0.15);
      color: #00FF66;
      border: 1px solid #00FF66;
    }
    .mi-badge--warning {
      background: rgba(255, 183, 0, 0.15);
      color: #FFB700;
      border: 1px solid #FFB700;
    }
    .mi-input {
      width: 100%;
      padding: 0.6rem 0.85rem;
      font-family: inherit;
      font-size: 0.875rem;
      background: var(--mi-color-bg-subtle, #14121A);
      color: var(--mi-color-text, #F1F5F9);
      border: 1px solid var(--mi-color-border, #332D40);
      border-radius: 4px;
      outline: none;
    }
    .mi-input:focus {
      border-color: var(--mi-color-focus-ring, #FF4D00);
      box-shadow: var(--mi-shadow-glow);
    }
    select.mi-select {
      width: 100%;
      padding: 0.6rem 2rem 0.6rem 0.85rem;
      font-family: inherit;
      font-size: 0.875rem;
      background-color: var(--mi-color-surface, #1E1B26);
      color: var(--mi-color-text, #F1F5F9);
      border: 1px solid var(--mi-color-border, #332D40);
      border-radius: 4px;
      outline: none;
      cursor: pointer;
      appearance: none;
      -moz-appearance: none;
      -webkit-appearance: none;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23FF4D00' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
      background-repeat: no-repeat;
      background-position: right 0.75rem center;
    }
    meter.mi-health-meter {
      width: 100%;
      height: 18px;
      background: #0A090D !important;
      border: 1px solid var(--mi-color-border, #332D40);
      border-radius: 4px;
      display: block;
      overflow: hidden;
      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.8);
      appearance: none;
      -webkit-appearance: none;
      -moz-appearance: none;
    }
    meter.mi-health-meter::-webkit-meter-bar { background: #0A090D; }
    meter.mi-health-meter::-webkit-meter-optimum-value,
    meter.mi-health-meter--health::-webkit-meter-optimum-value {
      background: linear-gradient(90deg, #CC0029, #FF0033 60%, #FF4D00);
      box-shadow: 0 0 10px #FF0033;
    }
    meter.mi-health-meter--mana::-webkit-meter-optimum-value {
      background: linear-gradient(90deg, #0055FF, #00AAFF 60%, #00E5FF);
      box-shadow: 0 0 10px #00E5FF;
    }
    meter.mi-health-meter--shield::-webkit-meter-optimum-value {
      background: linear-gradient(90deg, #7700FF, #AA00FF 60%, #FF00E5);
      box-shadow: 0 0 10px #FF00E5;
    }
    meter.mi-health-meter::-moz-meter-bar {
      background: linear-gradient(90deg, #CC0029, #FF0033 60%, #FF4D00) !important;
    }
    meter.mi-health-meter--mana::-moz-meter-bar {
      background: linear-gradient(90deg, #0055FF, #00AAFF 60%, #00E5FF) !important;
    }
    meter.mi-health-meter--shield::-moz-meter-bar {
      background: linear-gradient(90deg, #7700FF, #AA00FF 60%, #FF00E5) !important;
    }
    .mi-table {
      width: 100%;
      border-collapse: collapse;
      font-size: 0.85rem;
    }
    .mi-table th, .mi-table td {
      padding: 0.6rem 0.75rem;
      border-bottom: 1px solid var(--mi-color-border, #332D40);
      text-align: left;
    }
    .mi-table th {
      color: var(--mi-color-primary, #FF4D00);
      background-color: var(--mi-color-bg-subtle, #14121A);
    }
    .mi-table--striped tbody tr:nth-child(even) {
      background-color: rgba(255, 255, 255, 0.02);
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

  // Update iframe contents live
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
        <div className="mi-visualizer__tabs" role="tablist" aria-label="Visualizer Mode">
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
        {/* Split View Left Column: Tabbed Editor (HTML & CSS) */}
        {viewMode === 'split' && (
          <div className="mi-visualizer__pane mi-visualizer__pane--editor">
            <div className="mi-visualizer__pane-header">
              <div className="mi-visualizer__pane-tabs">
                <button
                  type="button"
                  className={`mi-visualizer__pane-tab ${splitActiveTab === 'html' ? 'mi-visualizer__pane-tab--active' : ''}`}
                  onClick={() => setSplitActiveTab('html')}
                >
                  <HtmlIcon size={13} /> HTML
                </button>
                <button
                  type="button"
                  className={`mi-visualizer__pane-tab ${splitActiveTab === 'css' ? 'mi-visualizer__pane-tab--active' : ''}`}
                  onClick={() => setSplitActiveTab('css')}
                >
                  <CssIcon size={13} /> CSS
                </button>
              </div>
              <span className="mi-visualizer__pane-info">
                {splitActiveTab === 'html'
                  ? `${htmlCode.split('\n').length} lines`
                  : `${cssCode.split('\n').length} lines`}
              </span>
            </div>

            {splitActiveTab === 'html' ? (
              <textarea
                className="mi-visualizer__textarea"
                value={htmlCode}
                onChange={handleHtmlChange}
                placeholder="<!-- Insert Moon-Inferno HTML markup here -->"
                aria-label="HTML Code Editor"
                spellCheck={false}
              />
            ) : (
              <textarea
                className="mi-visualizer__textarea"
                value={cssCode}
                onChange={handleCssChange}
                placeholder="/* Insert custom CSS rules here */"
                aria-label="CSS Code Editor"
                spellCheck={false}
              />
            )}
          </div>
        )}

        {/* HTML Dedicated Editor */}
        {viewMode === 'html' && (
          <div className="mi-visualizer__pane mi-visualizer__pane--editor mi-visualizer__pane--full">
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

        {/* CSS Dedicated Editor */}
        {viewMode === 'css' && (
          <div className="mi-visualizer__pane mi-visualizer__pane--editor mi-visualizer__pane--full">
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

        {/* Live Interactive Preview Canvas (Shown in Split or Preview mode) */}
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
