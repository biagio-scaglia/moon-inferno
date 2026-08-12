import { Card, CardHeader, CardBody, Stack, Table, TableHeader, TableHead, TableBody, TableRow, TableCell, TableCaption } from '@moon-inferno/react';
import { ShieldIcon } from '@moon-inferno/icons';

export const AccessibilitySpecTab = () => {
  return (
    <Stack gap="2rem">
      <Card>
        <CardHeader>
          <Stack direction="row" align="center" gap="0.5rem">
            <ShieldIcon size={18} /> Official WAI-ARIA & Screen Reader Specification Matrix
          </Stack>
        </CardHeader>
        <CardBody>
          <Stack gap="1.5rem">
            <p style={{ margin: 0, color: 'var(--mi-color-text-muted)', fontSize: '0.9rem' }}>
              Every Moon-Inferno component is engineered with strict WCAG 2.1 AA compliance, keyboard navigation, ARIA semantics, and screen-reader audio transcript fallbacks.
            </p>

            <Table variant="inferno" striped hoverable>
              <TableCaption>Moon-Inferno Accessibility Specification Audit</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>COMPONENT</TableHead>
                  <TableHead>KEYBOARD SHORTCUTS</TableHead>
                  <TableHead>ARIA ROLES & ATTRIBUTES</TableHead>
                  <TableHead>SCREEN READER VOICE TRANSCRIPT</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell style={{ fontWeight: 'bold' }}>MoonTypewriterDialogue</TableCell>
                  <TableCell><code>Enter / Space / Any key</code> (advance/skip)</TableCell>
                  <TableCell><code>aria-live="polite"</code>, <code>aria-atomic="true"</code></TableCell>
                  <TableCell><em>"[Speaker] says: Full speech text read immediately without waiting for typewriter animation."</em></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={{ fontWeight: 'bold' }}>MoonRPGGrid</TableCell>
                  <TableCell><code>ArrowUp/Down/Left/Right</code>, <code>Space/Enter</code></TableCell>
                  <TableCell><code>role="grid"</code>, <code>role="gridcell"</code>, <code>aria-selected</code></TableCell>
                  <TableCell><em>"Selected slot 1: Inferno Core. Swapped slot 1 with slot 4 (Empty slot)."</em></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={{ fontWeight: 'bold' }}>MoonHealthMeter</TableCell>
                  <TableCell>Passive status display</TableCell>
                  <TableCell>Native <code>&lt;meter&gt;</code>, <code>aria-label</code>, <code>value</code></TableCell>
                  <TableCell><em>"HP (HEALTH): 85 of 100 (85%)"</em></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={{ fontWeight: 'bold' }}>MoonSafeGlitch</TableCell>
                  <TableCell>Passive text title</TableCell>
                  <TableCell><code>(prefers-reduced-motion: reduce)</code> listener</TableCell>
                  <TableCell><em>"Text title read cleanly. Glitch animation auto-disabled for photosensitive safety."</em></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={{ fontWeight: 'bold' }}>MoonConsoleLogger</TableCell>
                  <TableCell><code>Tab</code> focus log container</TableCell>
                  <TableCell><code>aria-live="polite"</code>, <code>aria-atomic="false"</code></TableCell>
                  <TableCell><em>"Console log [success]: Transaction 0x7a8... confirmed in block #189420"</em></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={{ fontWeight: 'bold' }}>DropdownMenu</TableCell>
                  <TableCell><code>Enter / Space</code>, <code>ArrowDown/Up</code>, <code>Escape</code></TableCell>
                  <TableCell><code>role="menu"</code>, <code>role="menuitem"</code>, <code>aria-haspopup</code></TableCell>
                  <TableCell><em>"Dropdown menu, 4 items. Focused item: Cyber Core (1 of 4)."</em></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Stack>
        </CardBody>
      </Card>
    </Stack>
  );
};
