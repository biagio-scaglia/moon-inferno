import React from 'react';
import { Stack, Grid, Card, CardHeader, CardBody, CodeBlock, Button, Badge } from '@moon-inferno/react';
import { SettingsIcon, FlameIcon, TerminalIcon, SunIcon } from '@moon-inferno/icons';

export interface CssThemesTabProps {
  currentTheme: 'moon-inferno' | 'terminal' | 'y2k';
  onThemeChange: (theme: 'moon-inferno' | 'terminal' | 'y2k') => void;
}

export const CssThemesTab: React.FC<CssThemesTabProps> = ({ currentTheme, onThemeChange }) => {
  return (
    <Stack gap="2rem">
      {/* Interactive Theme Switcher */}
      <Card>
        <CardHeader>
          <Stack direction="row" align="center" gap="0.5rem">
            <SettingsIcon size={18} /> Interactive Theme Selector &amp; Tokens
          </Stack>
        </CardHeader>
        <CardBody>
          <Stack gap="1.5rem">
            <p style={{ margin: 0, color: 'var(--mi-color-text)', fontWeight: 600, fontSize: '0.875rem' }}>
              Moon-Inferno provides 3 built-in signature themes. Switch themes live to see instant CSS custom property cascades across the UI:
            </p>

            <Grid minChildWidth="220px" gap="1rem">
              <Button
                variant={currentTheme === 'moon-inferno' ? 'inferno' : 'outline'}
                leftIcon={<FlameIcon size={16} />}
                onClick={() => onThemeChange('moon-inferno')}
              >
                Solar Inferno {currentTheme === 'moon-inferno' && <Badge variant="inferno" style={{ marginLeft: '0.5rem' }}>Active</Badge>}
              </Button>

              <Button
                variant={currentTheme === 'terminal' ? 'inferno' : 'outline'}
                leftIcon={<TerminalIcon size={16} />}
                onClick={() => onThemeChange('terminal')}
              >
                Terminal CRT Green {currentTheme === 'terminal' && <Badge variant="inferno" style={{ marginLeft: '0.5rem' }}>Active</Badge>}
              </Button>

              <Button
                variant={currentTheme === 'y2k' ? 'inferno' : 'outline'}
                leftIcon={<SunIcon size={16} />}
                onClick={() => onThemeChange('y2k')}
              >
                Y2K Cyber Silver {currentTheme === 'y2k' && <Badge variant="inferno" style={{ marginLeft: '0.5rem' }}>Active</Badge>}
              </Button>
            </Grid>

            <CodeBlock
              filename="data-theme attribute usage (HTML / React)"
              code={`<!-- Set theme on body or any container tag -->
<body data-theme="moon-inferno">
  <!-- All children inherit Solar Inferno tokens -->
</body>

<!-- Or in React with MoonProvider -->
<MoonProvider defaultTheme="terminal">
  <App />
</MoonProvider>`}
            />
          </Stack>
        </CardBody>
      </Card>

      {/* CSS Custom Property Reference Table */}
      <Card>
        <CardHeader>
          <Stack direction="row" align="center" gap="0.5rem">
            <SettingsIcon size={18} /> Core CSS Design Tokens
          </Stack>
        </CardHeader>
        <CardBody>
          <Stack gap="1rem">
            <p style={{ margin: 0, color: 'var(--mi-color-text)', fontWeight: 600, fontSize: '0.875rem' }}>
              All primitives are styled with standard CSS variables. You can override any token in your global stylesheet:
            </p>

            <CodeBlock
              filename="custom-theme.css (Token Overrides)"
              code={`:root {
  /* Brand Accent Colors */
  --mi-color-primary: #FF4D00;
  --mi-color-primary-hover: #FF6A26;
  --mi-color-primary-active: #E04400;

  /* Surfaces & Backgrounds */
  --mi-color-bg: #0A090D;
  --mi-color-bg-surface: #121017;
  --mi-color-bg-subtle: #1C1824;

  /* High-Contrast Accessible Text */
  --mi-color-text: #F8FAFC;
  --mi-color-text-muted: #94A3B8;
  --mi-color-text-dim: #64748B;

  /* Borders & Focus Rings (WCAG 2.1 AA) */
  --mi-color-border: #332D40;
  --mi-color-focus-ring: #FF4D00;

  /* Typography Fonts */
  --mi-font-mono: 'JetBrains Mono', monospace;
  --mi-font-pixel: 'VT323', monospace;
  --mi-font-heading: 'Orbitron', sans-serif;
}`}
            />
          </Stack>
        </CardBody>
      </Card>

      {/* CDN Link Quickstart */}
      <Card>
        <CardHeader>
          <Stack direction="row" align="center" gap="0.5rem">
            <FlameIcon size={18} /> Bootstrap-Style CDN &lt;link&gt; Integration
          </Stack>
        </CardHeader>
        <CardBody>
          <Stack gap="1rem">
            <p style={{ margin: 0, color: 'var(--mi-color-text)', fontWeight: 600, fontSize: '0.875rem' }}>
              Import Moon-Inferno styling and theme tokens in ANY website using a CDN link:
            </p>
            <CodeBlock
              filename="index.html (<head> tag)"
              code={`<!-- 1. Full Moon-Inferno CSS Bundle via jsDelivr CDN -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/moon-inferno/dist/styles.css">

<!-- 2. Or Core Design Tokens Only -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@moon-inferno/core/dist/index.css">`}
            />
          </Stack>
        </CardBody>
      </Card>
    </Stack>
  );
};
