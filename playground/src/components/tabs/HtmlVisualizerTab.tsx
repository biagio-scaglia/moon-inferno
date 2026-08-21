import React from 'react';
import { Card, CardHeader, CardBody, Stack, MoonHtmlVisualizer, Badge, CodeBlock } from '@moon-inferno/react';
import { HtmlIcon, CssIcon, SparklesIcon, ShieldIcon, LayersIcon } from '@moon-inferno/icons';

export const HtmlVisualizerTab: React.FC = () => {
  return (
    <Stack gap="2rem">
      {/* Header Banner */}
      <Card variant="default">
        <CardHeader>
          <Stack direction="row" justify="space-between" align="center" style={{ width: '100%' }}>
            <Stack direction="row" align="center" gap="0.75rem">
              <HtmlIcon size={24} color="var(--mi-color-primary)" />
              <div>
                <h2 style={{ margin: 0, fontSize: '1.25rem' }}>HTML &amp; CSS Live Visualizer (MoonLivePreview)</h2>
                <span style={{ fontSize: '0.8rem', color: 'var(--mi-color-text-muted)' }}>
                  Interactive live sandboxed previewer with real-time editing, CDN stylesheet injection, and responsive viewports.
                </span>
              </div>
            </Stack>
            <Badge variant="pixel" icon={<SparklesIcon size={12} />}>LIVE SANDBOX</Badge>
          </Stack>
        </CardHeader>
        <CardBody>
          <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--mi-color-text-muted)' }}>
            Test pure HTML and CSS with Moon-Inferno styles without compiling or running bundlers. The visualizer automatically links the global CDN stylesheet, provides side-by-side editing, handles WebKit and Firefox rendering normalization, and allows exporting standalone HTML documents with 1 click.
          </p>
        </CardBody>
      </Card>

      {/* Main Interactive Visualizer */}
      <MoonHtmlVisualizer
        height="640px"
        title="MOON-INFERNO // HTML &amp; CSS LIVE HUD"
        defaultTab="split"
        enableCdnInjection={true}
        enableCrtOverlay={true}
      />

      {/* Features Overview */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
        <Card>
          <CardHeader>
            <Stack direction="row" align="center" gap="0.5rem">
              <LayersIcon size={18} color="var(--mi-color-primary)" />
              <h3 style={{ margin: 0, fontSize: '0.95rem' }}>Multi-Mode Workspace</h3>
            </Stack>
          </CardHeader>
          <CardBody>
            <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--mi-color-text-muted)' }}>
              Switch seamlessly between Split View (editor + canvas), Full Live Preview, Pure HTML Source, and Custom CSS Styles with line counters and tab navigation.
            </p>
          </CardBody>
        </Card>

        <Card>
          <CardHeader>
            <Stack direction="row" align="center" gap="0.5rem">
              <ShieldIcon size={18} color="var(--mi-color-primary)" />
              <h3 style={{ margin: 0, fontSize: '0.95rem' }}>Cross-Browser Engine</h3>
            </Stack>
          </CardHeader>
          <CardBody>
            <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--mi-color-text-muted)' }}>
              100% normalized across WebKit (Chrome, Safari, Edge) and Gecko (Firefox) for native <code>&lt;select&gt;</code>, <code>&lt;meter&gt;</code>, <code>&lt;progress&gt;</code>, and retro scrollbars.
            </p>
          </CardBody>
        </Card>

        <Card>
          <CardHeader>
            <Stack direction="row" align="center" gap="0.5rem">
              <CssIcon size={18} color="var(--mi-color-primary)" />
              <h3 style={{ margin: 0, fontSize: '0.95rem' }}>Instant CDN Bundle</h3>
            </Stack>
          </CardHeader>
          <CardBody>
            <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--mi-color-text-muted)' }}>
              Export standalone, self-contained <code>.html</code> files ready to deploy anywhere or copy the unified HTML snippet directly to your clipboard.
            </p>
          </CardBody>
        </Card>
      </div>

      {/* Code Usage Snippet */}
      <Card>
        <CardHeader>
          <h3 style={{ margin: 0, fontSize: '1rem' }}>React Component API (MoonHtmlVisualizer)</h3>
        </CardHeader>
        <CardBody>
          <CodeBlock
            filename="MoonHtmlVisualizerExample.tsx"
            code={`import { MoonHtmlVisualizer } from 'moon-inferno';

export default function MyLiveEditor() {
  return (
    <MoonHtmlVisualizer
      title="CUSTOM CYBER PREVIEW"
      defaultTab="split"
      height="560px"
      theme="moon-inferno"
      enableCdnInjection={true}
      enableCrtOverlay={true}
      allowExport={true}
      initialHtml='<button class="mi-button mi-button--inferno">Cyber Button</button>'
      initialCss='body { padding: 2rem; }'
      onHtmlChange={(code) => console.log('HTML Updated:', code)}
    />
  );
}`}
          />
        </CardBody>
      </Card>
    </Stack>
  );
};
