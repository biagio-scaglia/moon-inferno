import React, { useState } from 'react';
import { Stack, PixelContainer, CodeBlock, Card, CardHeader, CardBody, Button, Table, TableHeader, TableRow, TableHead, TableBody, TableCell, Badge } from '@moon-inferno/react';
import { SparklesIcon, CodeIcon, LayersIcon, CheckIcon, ReactIcon, HtmlIcon } from '@moon-inferno/icons';

export const GettingStartedTab: React.FC = () => {
  const [quickstartMode, setQuickstartMode] = useState<'react' | 'html'>('react');

  return (
    <Stack gap="2rem">
      {/* Interactive Mode Selector */}
      <Card>
        <CardBody>
          <Stack direction="row" align="center" justify="between" wrap gap="1rem">
            <Stack gap="0.25rem">
              <strong style={{ fontSize: '1.05rem', color: 'var(--mi-color-text)' }}>CHOOSE YOUR INTEGRATION STACK</strong>
              <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--mi-color-text-muted)' }}>
                Toggle between modern React JSX package usage or zero-build Vanilla HTML CDN &lt;link&gt; (like Bootstrap):
              </p>
            </Stack>
            <Stack direction="row" gap="0.5rem">
              <Button
                size="sm"
                variant={quickstartMode === 'react' ? 'inferno' : 'outline'}
                onClick={() => setQuickstartMode('react')}
                leftIcon={<ReactIcon size={16} />}
              >
                React JSX
              </Button>
              <Button
                size="sm"
                variant={quickstartMode === 'html' ? 'inferno' : 'outline'}
                onClick={() => setQuickstartMode('html')}
                leftIcon={<HtmlIcon size={16} />}
              >
                Pure HTML (CDN Link)
              </Button>
            </Stack>
          </Stack>
        </CardBody>
      </Card>

      {/* Conditionally Rendered Content Based on Quickstart Mode */}
      {quickstartMode === 'react' ? (
        <>
          {/* 1. All-in-One vs Modular Installation */}
          <PixelContainer title="1. INSTALL VIA PACKAGE MANAGERS (NPM / PNPM / YARN / BUN)">
            <Stack gap="1rem">
              <p style={{ margin: 0, color: 'var(--mi-color-text)', fontWeight: 600, fontSize: '0.875rem' }}>
                Install the all-in-one bundle or modular individual packages:
              </p>
              <CodeBlock filename="npm (All-in-One)" code="npm install moon-inferno" />
              <CodeBlock filename="pnpm (All-in-One)" code="pnpm add moon-inferno" />
              <CodeBlock filename="yarn / bun (All-in-One)" code="yarn add moon-inferno\n# or\nbun add moon-inferno" />
              <CodeBlock
                collapsible
                title="VIEW MODULAR PACKAGE INSTALLATION"
                code={`# Modular packages installation:
npm install @moon-inferno/core @moon-inferno/react @moon-inferno/themes @moon-inferno/icons

# or with pnpm:
pnpm add @moon-inferno/core @moon-inferno/react @moon-inferno/themes @moon-inferno/icons`}
              />
            </Stack>
          </PixelContainer>

          {/* 2. React Setup & Provider */}
          <PixelContainer title="2. REACT APPLICATION ROOT SETUP">
            <Stack gap="1rem">
              <p style={{ margin: 0, color: 'var(--mi-color-text)', fontWeight: 600, fontSize: '0.875rem' }}>
                Wrap your React root inside <code>&lt;MoonProvider&gt;</code> and import the global styles:
              </p>
              <CodeBlock
                collapsible
                title="FULL COPY-PASTE REACT MAIN.TSX SETUP"
                code={`import React from 'react';
import ReactDOM from 'react-dom/client';
import { MoonProvider } from 'moon-inferno';
import 'moon-inferno/styles.css';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MoonProvider defaultTheme="moon-inferno">
      <App />
    </MoonProvider>
  </React.StrictMode>
);`}
              />
            </Stack>
          </PixelContainer>

          {/* 3. First Component Usage in React */}
          <Card>
            <CardHeader>
              <Stack direction="row" align="center" gap="0.5rem">
                <CodeIcon size={18} /> 3. First Component Usage in React
              </Stack>
            </CardHeader>
            <CardBody>
              <Stack gap="1rem">
                <p style={{ margin: 0, color: 'var(--mi-color-text)', fontWeight: 600, fontSize: '0.875rem' }}>
                  Import components and icons directly into your pages:
                </p>
                <CodeBlock
                  collapsible
                  title="FULL COPY-PASTE COMPONENT DEMO"
                  code={`import { Button, Card, CardHeader, CardBody, Badge, Stack } from 'moon-inferno';
import { FlameIcon, ZapIcon } from 'moon-inferno';

export function CyberDashboard() {
  return (
    <Card>
      <CardHeader>
        <Stack direction="row" align="center" gap="0.5rem">
          <FlameIcon size={20} color="#FF4D00" />
          <h3>Subsystem Node 01</h3>
        </Stack>
      </CardHeader>
      <CardBody>
        <Stack gap="1rem">
          <Badge variant="inferno" icon={<ZapIcon size={12} />}>OVERCLOCKED</Badge>
          <Button variant="inferno">Initiate Warp Link</Button>
        </Stack>
      </CardBody>
    </Card>
  );
}`}
                />
              </Stack>
            </CardBody>
          </Card>
        </>
      ) : (
        <>
          {/* 1. CDN <link> Inclusion */}
          <PixelContainer title="1. BOOTSTRAP-STYLE CDN <LINK> (VANILLA HTML / NO BUNDLER)">
            <Stack gap="1rem">
              <p style={{ margin: 0, color: 'var(--mi-color-text)', fontWeight: 600, fontSize: '0.875rem' }}>
                Include the CDN stylesheet directly in your HTML <code>&lt;head&gt;</code> without any build tools:
              </p>
              <CodeBlock
                filename="index.html (<head> CDN Link)"
                code={`<!-- 1. Moon-Inferno Full CSS Bundle via jsDelivr CDN -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/moon-inferno/dist/styles.css">

<!-- Or via UNPKG CDN -->
<link rel="stylesheet" href="https://unpkg.com/moon-inferno/dist/styles.css">`}
              />
            </Stack>
          </PixelContainer>

          {/* 2. Full Copy-Paste Vanilla HTML Template */}
          <Card>
            <CardHeader>
              <Stack direction="row" align="center" gap="0.5rem">
                <SparklesIcon size={18} /> 2. Complete Copy-Paste Pure HTML Template
              </Stack>
            </CardHeader>
            <CardBody>
              <Stack gap="1.25rem">
                <p style={{ margin: 0, color: 'var(--mi-color-text)', fontWeight: 600, fontSize: '0.875rem' }}>
                  A production-ready static HTML starter featuring buttons, cards, badges, and Google Fonts:
                </p>

                <CodeBlock
                  collapsible
                  title="FULL COPY-PASTE VANILLA HTML STARTER (BOOTSTRAP-STYLE)"
                  code={`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Moon-Inferno Static HTML Starter</title>

  <!-- 1. Moon-Inferno CDN Stylesheet (Bootstrap-style) -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/moon-inferno/dist/styles.css">

  <!-- 2. Retro Google Fonts (VT323, Orbitron, JetBrains Mono) -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&family=Orbitron:wght@700&family=VT323&display=swap" rel="stylesheet">
</head>
<body data-theme="moon-inferno" style="background: #0A090D; color: #F8FAFC; padding: 2rem; font-family: 'JetBrains Mono', monospace;">

  <div class="mi-container" style="max-width: 850px; margin: 0 auto;">
    <!-- Brand Headline -->
    <h1 style="color: #FF4D00; font-family: 'Orbitron', sans-serif;">MOON-INFERNO STATIC</h1>
    <p style="color: #94A3B8;">Styled purely via CDN &lt;link&gt; with zero JavaScript bundlers.</p>

    <!-- Buttons -->
    <div style="display: flex; gap: 1rem; margin: 1.5rem 0; flex-wrap: wrap;">
      <button class="mi-button mi-button--inferno">Inferno Button</button>
      <button class="mi-button mi-button--pixel">Pixel Button</button>
      <button class="mi-button mi-button--outline">Outline Button</button>
      <button class="mi-button mi-button--ghost">Ghost Button</button>
    </div>

    <!-- Retro Card -->
    <div class="mi-card" style="margin-top: 1.5rem;">
      <div class="mi-card-header">
        <strong>CYBERNETIC_NODE_01</strong>
      </div>
      <div class="mi-card-body">
        <p style="margin: 0 0 1rem 0;">Full WCAG 2.1 AA accessible retro aesthetic powered by Moon-Inferno CSS design tokens.</p>
        <div>
          <span class="mi-badge mi-badge--inferno">STATUS: ONLINE</span>
          <span class="mi-badge mi-badge--success" style="margin-left: 0.5rem;">VERIFIED</span>
        </div>
      </div>
      <div class="mi-card-footer">
        <button class="mi-button mi-button--inferno mi-button--sm">Connect Telemetry</button>
      </div>
    </div>
  </div>

</body>
</html>`}
                />
              </Stack>
            </CardBody>
          </Card>

          {/* 3. Pure HTML CSS Class Reference Table */}
          <Card>
            <CardHeader>
              <Stack direction="row" align="center" gap="0.5rem">
                <LayersIcon size={18} /> 3. Pure HTML Class Reference &amp; Cheat Sheet
              </Stack>
            </CardHeader>
            <CardBody>
              <Stack gap="1.5rem">
                <p style={{ margin: 0, color: 'var(--mi-color-text)', fontWeight: 600, fontSize: '0.875rem' }}>
                  Use any of the following CSS classes directly on standard HTML elements:
                </p>

                <Table variant="inferno" striped hoverable>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Component / Feature</TableHead>
                      <TableHead>HTML Tag</TableHead>
                      <TableHead>CSS Classes Available</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell style={{ fontWeight: 'bold' }}>Buttons</TableCell>
                      <TableCell><code>&lt;button&gt;</code>, <code>&lt;a&gt;</code></TableCell>
                      <TableCell><code>.mi-button</code>, <code>.mi-button--inferno</code>, <code>.mi-button--pixel</code>, <code>.mi-button--outline</code>, <code>.mi-button--ghost</code>, <code>.mi-button--sm</code>, <code>.mi-button--md</code>, <code>.mi-button--lg</code></TableCell>
                      <TableCell><Badge variant="success" icon={<CheckIcon size={12} />}>CDN READY</Badge></TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell style={{ fontWeight: 'bold' }}>Cards</TableCell>
                      <TableCell><code>&lt;div&gt;</code>, <code>&lt;article&gt;</code></TableCell>
                      <TableCell><code>.mi-card</code>, <code>.mi-card-header</code>, <code>.mi-card-body</code>, <code>.mi-card-footer</code></TableCell>
                      <TableCell><Badge variant="success" icon={<CheckIcon size={12} />}>CDN READY</Badge></TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell style={{ fontWeight: 'bold' }}>Badges</TableCell>
                      <TableCell><code>&lt;span&gt;</code></TableCell>
                      <TableCell><code>.mi-badge</code>, <code>.mi-badge--inferno</code>, <code>.mi-badge--pixel</code>, <code>.mi-badge--success</code>, <code>.mi-badge--error</code>, <code>.mi-badge--warn</code>, <code>.mi-badge--outline</code></TableCell>
                      <TableCell><Badge variant="success" icon={<CheckIcon size={12} />}>CDN READY</Badge></TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell style={{ fontWeight: 'bold' }}>Pixel Frame</TableCell>
                      <TableCell><code>&lt;div&gt;</code></TableCell>
                      <TableCell><code>.mi-pixel-container</code>, <code>.mi-pixel-container__header</code>, <code>.mi-pixel-container__content</code></TableCell>
                      <TableCell><Badge variant="success" icon={<CheckIcon size={12} />}>CDN READY</Badge></TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell style={{ fontWeight: 'bold' }}>Form Inputs</TableCell>
                      <TableCell><code>&lt;input&gt;</code>, <code>&lt;textarea&gt;</code></TableCell>
                      <TableCell><code>.mi-input</code>, <code>.mi-input-container</code>, <code>.mi-input-label</code>, <code>.mi-input-helper</code></TableCell>
                      <TableCell><Badge variant="success" icon={<CheckIcon size={12} />}>CDN READY</Badge></TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell style={{ fontWeight: 'bold' }}>Health &amp; Mana Bars</TableCell>
                      <TableCell><code>&lt;meter&gt;</code>, <code>&lt;div&gt;</code></TableCell>
                      <TableCell><code>.mi-health-meter</code>, <code>.mi-health-meter--health</code>, <code>.mi-health-meter--mana</code>, <code>.mi-health-meter--energy</code>, <code>.mi-health-meter--shield</code></TableCell>
                      <TableCell><Badge variant="success" icon={<CheckIcon size={12} />}>CDN READY</Badge></TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell style={{ fontWeight: 'bold' }}>Data Tables</TableCell>
                      <TableCell><code>&lt;table&gt;</code></TableCell>
                      <TableCell><code>.mi-table</code>, <code>.mi-table--inferno</code>, <code>.mi-table--striped</code>, <code>.mi-table--hoverable</code></TableCell>
                      <TableCell><Badge variant="success" icon={<CheckIcon size={12} />}>CDN READY</Badge></TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell style={{ fontWeight: 'bold' }}>Progress Bars</TableCell>
                      <TableCell><code>&lt;div&gt;</code></TableCell>
                      <TableCell><code>.mi-progress</code>, <code>.mi-progress--inferno</code>, <code>.mi-progress--pixel</code>, <code>.mi-progress--striped</code></TableCell>
                      <TableCell><Badge variant="success" icon={<CheckIcon size={12} />}>CDN READY</Badge></TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell style={{ fontWeight: 'bold' }}>Avatars</TableCell>
                      <TableCell><code>&lt;div&gt;</code>, <code>&lt;img&gt;</code></TableCell>
                      <TableCell><code>.mi-avatar</code>, <code>.mi-avatar--sm</code>, <code>.mi-avatar--md</code>, <code>.mi-avatar--lg</code>, <code>.mi-avatar--pixel</code>, <code>.mi-avatar--circle</code></TableCell>
                      <TableCell><Badge variant="success" icon={<CheckIcon size={12} />}>CDN READY</Badge></TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell style={{ fontWeight: 'bold' }}>Signal Lights</TableCell>
                      <TableCell><code>&lt;div&gt;</code></TableCell>
                      <TableCell><code>.mi-signal-light</code>, <code>.mi-signal-light--online</code>, <code>.mi-signal-light--warning</code>, <code>.mi-signal-light--busy</code>, <code>.mi-signal-light--offline</code></TableCell>
                      <TableCell><Badge variant="success" icon={<CheckIcon size={12} />}>CDN READY</Badge></TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell style={{ fontWeight: 'bold' }}>Retro Text FX</TableCell>
                      <TableCell><code>&lt;h1&gt;</code>..<code>&lt;h6&gt;</code>, <code>&lt;span&gt;</code></TableCell>
                      <TableCell><code>.mi-glitch-text</code>, <code>.mi-pixel-text</code>, <code>.mi-neon-text</code>, <code>.mi-marquee</code></TableCell>
                      <TableCell><Badge variant="success" icon={<CheckIcon size={12} />}>CDN READY</Badge></TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell style={{ fontWeight: 'bold' }}>Layout Primitives</TableCell>
                      <TableCell><code>&lt;div&gt;</code></TableCell>
                      <TableCell><code>.mi-container</code>, <code>.mi-stack</code>, <code>.mi-grid</code></TableCell>
                      <TableCell><Badge variant="success" icon={<CheckIcon size={12} />}>CDN READY</Badge></TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </Stack>
            </CardBody>
          </Card>
        </>
      )}
    </Stack>
  );
};
