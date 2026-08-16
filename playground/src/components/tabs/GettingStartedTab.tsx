import React from 'react';
import { Stack, PixelContainer, CodeBlock, Card, CardHeader, CardBody } from '@moon-inferno/react';
import { SparklesIcon, CodeIcon } from '@moon-inferno/icons';

export const GettingStartedTab: React.FC = () => {
  return (
    <Stack gap="2rem">
      {/* 1. All-in-One vs Modular Installation */}
      <PixelContainer title="1. INSTALL VIA PACKAGE MANAGERS (NPM / PNPM / YARN / BUN)">
        <Stack gap="1rem">
          <p style={{ margin: 0, color: '#F8FAFC', fontWeight: 600, fontSize: '0.875rem' }}>
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

      {/* 2. Bootstrap-Style CDN Link (Vanilla HTML / No Bundler) */}
      <Card>
        <CardHeader>
          <Stack direction="row" align="center" gap="0.5rem">
            <SparklesIcon size={18} /> 2. Bootstrap-Style CDN &lt;link&gt; (Vanilla HTML &amp; Static Sites)
          </Stack>
        </CardHeader>
        <CardBody>
          <Stack gap="1.25rem">
            <p style={{ margin: 0, color: '#F8FAFC', fontWeight: 600, fontSize: '0.875rem' }}>
              Want to use Moon-Inferno without React or a build tool, just like Bootstrap? Include the CDN stylesheet link directly in your HTML <code>&lt;head&gt;</code>:
            </p>

            <CodeBlock
              filename="index.html (<head> CDN Link)"
              code={`<!-- Moon-Inferno Full CSS Bundle via jsDelivr CDN -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/moon-inferno/dist/styles.css">

<!-- Or via UNPKG CDN -->
<link rel="stylesheet" href="https://unpkg.com/moon-inferno/dist/styles.css">`}
            />

            <p style={{ margin: 0, color: '#F8FAFC', fontWeight: 600, fontSize: '0.875rem' }}>
              Complete Copy-Paste Pure HTML Template:
            </p>

            <CodeBlock
              collapsible
              title="FULL COPY-PASTE VANILLA HTML TEMPLATE (BOOTSTRAP-STYLE)"
              code={`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Moon-Inferno Vanilla HTML Demo</title>

  <!-- 1. Moon-Inferno CDN Stylesheet (Bootstrap-style) -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/moon-inferno/dist/styles.css">

  <!-- 2. Retro Google Fonts (VT323, Orbitron, JetBrains Mono) -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&family=Orbitron:wght@700&family=VT323&display=swap" rel="stylesheet">
</head>
<body data-theme="moon-inferno" style="background: #0A090D; color: #F8FAFC; padding: 2rem; font-family: 'JetBrains Mono', monospace;">

  <div class="mi-container" style="max-width: 800px; margin: 0 auto;">
    <!-- Brand Headline -->
    <h1 style="color: #FF4D00; font-family: 'Orbitron', sans-serif;">MOON-INFERNO STATIC</h1>
    <p style="color: #94A3B8;">Styled purely via CDN &lt;link&gt; with zero JavaScript bundlers.</p>

    <!-- Buttons -->
    <div style="display: flex; gap: 1rem; margin: 1.5rem 0; flex-wrap: wrap;">
      <button class="mi-button mi-button--inferno">Inferno Button</button>
      <button class="mi-button mi-button--pixel">Pixel Button</button>
      <button class="mi-button mi-button--outline">Outline Button</button>
    </div>

    <!-- Retro Card -->
    <div class="mi-card" style="margin-top: 1.5rem;">
      <div class="mi-card-header">
        <strong>CYBERNETIC_NODE_01</strong>
      </div>
      <div class="mi-card-body">
        <p style="margin: 0;">Full WCAG 2.1 AA accessible retro aesthetic powered by Moon-Inferno CSS design tokens.</p>
        <div style="margin-top: 1rem;">
          <span class="mi-badge mi-badge--inferno">STATUS: ONLINE</span>
        </div>
      </div>
    </div>
  </div>

</body>
</html>`}
            />
          </Stack>
        </CardBody>
      </Card>

      {/* 3. React Setup & Provider */}
      <PixelContainer title="3. REACT APPLICATION ROOT SETUP">
        <Stack gap="1rem">
          <p style={{ margin: 0, color: '#F8FAFC', fontWeight: 600, fontSize: '0.875rem' }}>
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

      {/* 4. First Component Usage */}
      <Card>
        <CardHeader>
          <Stack direction="row" align="center" gap="0.5rem">
            <CodeIcon size={18} /> 4. First Component Usage in React
          </Stack>
        </CardHeader>
        <CardBody>
          <Stack gap="1rem">
            <p style={{ margin: 0, color: '#F8FAFC', fontWeight: 600, fontSize: '0.875rem' }}>
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
    </Stack>
  );
};
