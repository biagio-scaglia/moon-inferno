import React from 'react';
import { Stack, Card, CardHeader, CardBody, Grid } from '@moon-inferno/react';
import { ShieldIcon, CheckIcon, LayersIcon } from '@moon-inferno/icons';

export const ArchitectureTab: React.FC = () => {
  return (
    <Stack gap="2rem">
      <Card>
        <CardHeader>
          <Stack direction="row" align="center" gap="0.5rem">
            <ShieldIcon size={18} /> Why Moon-Inferno? (Design Philosophy)
          </Stack>
        </CardHeader>
        <CardBody>
          <Stack gap="1rem">
            <p>
              Modern web UI libraries have converged on uniform, sterile enterprise dashboards. While functional, they strip websites of individuality, character, and visual experimentation.
            </p>
            <p>
              Created by <strong>Biagio Scaglia</strong>, Moon-Inferno exists to reclaim expressive web design without reverting to inaccessible practices. It combines radical visual aesthetics (retro web, Y2K, cyberpunk, CRT, pixel art) with rock-solid semantic foundations, screen reader support, keyboard navigation, and responsive behavior.
            </p>
          </Stack>
        </CardBody>
      </Card>

      <Grid minChildWidth="300px" gap="1.5rem">
        <Card>
          <CardHeader>
            <Stack direction="row" align="center" gap="0.5rem">
              <CheckIcon size={18} /> Accessibility Requirements (WCAG 2.1 AA)
            </Stack>
          </CardHeader>
          <CardBody>
            <Stack gap="0.75rem">
              <p><strong>High-Contrast Focus Rings:</strong> Keyboard focus rings powered by :focus-visible.</p>
              <p><strong>WAI-ARIA Attributes:</strong> Native roles for dialog, combobox, tablist, status, and tooltip.</p>
              <p><strong>Full Keyboard Navigation:</strong> Tab, Esc, Enter, Space, and Arrow Key directionals.</p>
              <p><strong>Reduced Motion Safety:</strong> Automatic animation disablement when prefers-reduced-motion is active.</p>
            </Stack>
          </CardBody>
        </Card>

        <Card>
          <CardHeader>
            <Stack direction="row" align="center" gap="0.5rem">
              <LayersIcon size={18} /> Monorepo Package Ecosystem
            </Stack>
          </CardHeader>
          <CardBody>
            <Stack gap="0.75rem">
              <p><strong>@moon-inferno/core:</strong> Design tokens, CSS variables, and accessibility utilities.</p>
              <p><strong>@moon-inferno/react:</strong> Production-ready React component primitives and universal styles.</p>
              <p><strong>@moon-inferno/themes:</strong> Official color palettes (Inferno, Terminal, Y2K).</p>
              <p><strong>@moon-inferno/icons:</strong> Custom vector SVG iconography system.</p>
            </Stack>
          </CardBody>
        </Card>
      </Grid>
    </Stack>
  );
};
