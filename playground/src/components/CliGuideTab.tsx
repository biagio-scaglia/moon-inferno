import { Card, CardHeader, CardBody, Stack, Table, TableHeader, TableHead, TableBody, TableRow, TableCell, TableCaption, CodeBlock, Badge } from '@moon-inferno/react';
import { TerminalIcon, FlameIcon, SparklesIcon, CheckIcon } from '@moon-inferno/icons';

export const CliGuideTab = () => {
  return (
    <Stack gap="2rem">
      {/* CLI Overview Header Card */}
      <Card>
        <CardHeader>
          <Stack direction="row" align="center" gap="0.5rem">
            <TerminalIcon size={18} /> Official Moon-Inferno CLI Tool (@moon-inferno/cli)
          </Stack>
        </CardHeader>
        <CardBody>
          <Stack gap="1.25rem">
            <p style={{ margin: 0, color: 'var(--mi-color-text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>
              Following modern <strong>"Copy-and-Paste" Developer Experience (DX)</strong> standards (pioneered by Shadcn/ui), the official <strong><code>@moon-inferno/cli</code></strong> allows you to inspect and copy component source files directly into your React codebase without bloating your dependencies.
            </p>

            <Stack direction="row" gap="0.75rem" wrap>
              <Badge variant="inferno" icon={<FlameIcon size={12} />}>ZERO BLOAT</Badge>
              <Badge variant="pixel" icon={<CheckIcon size={12} />}>100% CODE OWNERSHIP</Badge>
              <Badge variant="success" icon={<SparklesIcon size={12} />}>WCAG 2.1 AA COMPLIANT</Badge>
            </Stack>
          </Stack>
        </CardBody>
      </Card>

      {/* CLI Commands Reference */}
      <Card>
        <CardHeader>
          <Stack direction="row" align="center" gap="0.5rem">
            <TerminalIcon size={18} /> CLI Commands & Usage
          </Stack>
        </CardHeader>
        <CardBody>
          <Stack gap="1.5rem">
            <div>
              <h4 style={{ margin: '0 0 0.5rem 0', color: 'var(--mi-color-primary)', fontFamily: 'var(--mi-font-mono)' }}>
                1. Add a Component directly to your project:
              </h4>
              <CodeBlock filename="Terminal (npx CLI Add)" code="npx @moon-inferno/cli add MoonTypewriterDialogue" />
            </div>

            <div>
              <h4 style={{ margin: '0 0 0.5rem 0', color: 'var(--mi-color-primary)', fontFamily: 'var(--mi-font-mono)' }}>
                2. List all accessible components available:
              </h4>
              <CodeBlock filename="Terminal (npx CLI List)" code="npx @moon-inferno/cli list" />
            </div>

            <div>
              <h4 style={{ margin: '0 0 0.5rem 0', color: 'var(--mi-color-primary)', fontFamily: 'var(--mi-font-mono)' }}>
                3. Optional: Global CLI Installation
              </h4>
              <CodeBlock filename="Terminal (Global CLI)" code={`# Install globally to use the "moon" command alias\nnpm install -g @moon-inferno/cli\n\n# Run via short alias:\nmoon list\nmoon add MoonRPGGrid`} />
            </div>
          </Stack>
        </CardBody>
      </Card>

      {/* NPM vs CLI Decision Table */}
      <Card>
        <CardHeader>
          <Stack direction="row" align="center" gap="0.5rem">
            <SparklesIcon size={18} /> NPM Package vs CLI: Which One Should You Choose?
          </Stack>
        </CardHeader>
        <CardBody>
          <Stack gap="1.5rem">
            <Table variant="inferno" striped hoverable>
              <TableCaption>Moon-Inferno Installation Method Comparison</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>INSTALLATION METHOD</TableHead>
                  <TableHead>BEST FOR</TableHead>
                  <TableHead>ADVANTAGES</TableHead>
                  <TableHead>COMMAND</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell style={{ fontWeight: 'bold' }}>All-In-One Package (moon-inferno)</TableCell>
                  <TableCell>Quickest setup for React applications</TableCell>
                  <TableCell>Single line import for icons, themes, and components</TableCell>
                  <TableCell><code>npm install moon-inferno</code></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={{ fontWeight: 'bold' }}>Modular NPM Packages</TableCell>
                  <TableCell>Full applications using targeted dependencies</TableCell>
                  <TableCell>Automatic semver version updates & shared provider context</TableCell>
                  <TableCell><code>npm i @moon-inferno/react</code></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={{ fontWeight: 'bold' }}>CLI Copy-and-Paste</TableCell>
                  <TableCell>Projects needing 1-2 specific components or custom styling</TableCell>
                  <TableCell>100% source code ownership & zero extra external dependencies</TableCell>
                  <TableCell><code>npx @moon-inferno/cli add &lt;component&gt;</code></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Stack>
        </CardBody>
      </Card>
    </Stack>
  );
};
