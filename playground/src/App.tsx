import { useState } from 'react';
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  Dialog,
  DialogFooter,
  Tabs,
  Terminal,
  CRTEffect,
  GlitchText,
  PixelContainer,
  Badge,
  Container,
  Stack,
  Grid,
  Tooltip,
  ToastProvider,
  useToast,
} from '@moon-inferno/react';
import {
  FlameIcon,
  MoonIcon,
  SunIcon,
  TerminalIcon,
  ShieldIcon,
  CheckIcon,
  CloseIcon,
  ZapIcon,
  SparklesIcon,
  WarnIcon,
  InfoIcon,
  EyeIcon,
  EyeOffIcon,
  SearchIcon,
  SettingsIcon,
  CodeIcon,
  LockIcon,
  UserIcon,
  LayersIcon,
  CpuIcon,
  GamepadIcon,
  SkullIcon,
  CrosshairIcon,
  VolumeIcon,
  VolumeMuteIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  ArrowDownIcon,
  RefreshIcon,
  ExternalLinkIcon,
  CopyIcon,
  TrashIcon,
  FilterIcon,
} from '@moon-inferno/icons';
import { setTheme, type ThemeName } from '@moon-inferno/themes';

const ALL_ICONS = [
  { name: 'FlameIcon', Component: FlameIcon },
  { name: 'MoonIcon', Component: MoonIcon },
  { name: 'SunIcon', Component: SunIcon },
  { name: 'TerminalIcon', Component: TerminalIcon },
  { name: 'ShieldIcon', Component: ShieldIcon },
  { name: 'CheckIcon', Component: CheckIcon },
  { name: 'CloseIcon', Component: CloseIcon },
  { name: 'ZapIcon', Component: ZapIcon },
  { name: 'SparklesIcon', Component: SparklesIcon },
  { name: 'WarnIcon', Component: WarnIcon },
  { name: 'InfoIcon', Component: InfoIcon },
  { name: 'EyeIcon', Component: EyeIcon },
  { name: 'EyeOffIcon', Component: EyeOffIcon },
  { name: 'SearchIcon', Component: SearchIcon },
  { name: 'SettingsIcon', Component: SettingsIcon },
  { name: 'CodeIcon', Component: CodeIcon },
  { name: 'LockIcon', Component: LockIcon },
  { name: 'UserIcon', Component: UserIcon },
  { name: 'LayersIcon', Component: LayersIcon },
  { name: 'CpuIcon', Component: CpuIcon },
  { name: 'GamepadIcon', Component: GamepadIcon },
  { name: 'SkullIcon', Component: SkullIcon },
  { name: 'CrosshairIcon', Component: CrosshairIcon },
  { name: 'VolumeIcon', Component: VolumeIcon },
  { name: 'VolumeMuteIcon', Component: VolumeMuteIcon },
  { name: 'ArrowLeftIcon', Component: ArrowLeftIcon },
  { name: 'ArrowRightIcon', Component: ArrowRightIcon },
  { name: 'ArrowUpIcon', Component: ArrowUpIcon },
  { name: 'ArrowDownIcon', Component: ArrowDownIcon },
  { name: 'RefreshIcon', Component: RefreshIcon },
  { name: 'ExternalLinkIcon', Component: ExternalLinkIcon },
  { name: 'CopyIcon', Component: CopyIcon },
  { name: 'TrashIcon', Component: TrashIcon },
  { name: 'FilterIcon', Component: FilterIcon },
];

function PlaygroundContent() {
  const [currentTheme, setCurrentTheme] = useState<ThemeName>('moon-inferno');
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isCRTActive, setIsCRTActive] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [inputError, setInputError] = useState('');
  const [copiedIcon, setCopiedIcon] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [passwordValue, setPasswordValue] = useState('Inferno2026!');
  const [searchQuery, setSearchQuery] = useState('');

  const { addToast } = useToast();

  const handleThemeChange = (newTheme: ThemeName) => {
    setCurrentTheme(newTheme);
    setTheme(newTheme);
    addToast(`Theme switched to ${newTheme.toUpperCase()}`, { variant: 'info' });
  };

  const handleValidate = () => {
    if (!inputValue.trim()) {
      setInputError('Signal key is required to initiate launch sequence.');
      addToast('Validation error: Signal key required', { variant: 'error' });
    } else {
      setInputError('');
      setIsDialogOpen(true);
      addToast('Encrypted channel established', { variant: 'success' });
    }
  };

  const handleCopyIcon = (name: string) => {
    navigator.clipboard.writeText(`<${name} />`);
    setCopiedIcon(name);
    addToast(`Copied <${name} /> to clipboard!`, { variant: 'inferno', duration: 2500 });
    setTimeout(() => setCopiedIcon(null), 2000);
  };

  const filteredIcons = ALL_ICONS.filter((icon) =>
    icon.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Container size="xl">
      <Stack gap="2.5rem">
        {isCRTActive && <CRTEffect />}

        {/* Header Banner */}
        <header
          style={{
            borderBottom: '2px solid var(--mi-color-border-accent, #FF4D00)',
            paddingBottom: '1.5rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <Stack gap="0.5rem">
            <Stack direction="row" align="center" gap="0.75rem">
              <MoonIcon size={36} color="var(--mi-color-primary)" />
              <GlitchText text="Moon-Inferno" as="h1" style={{ fontSize: '2.25rem' }} />
              <Badge variant="pixel" icon={<SparklesIcon size={12} />}>v0.3.0</Badge>
            </Stack>
            <p style={{ color: 'var(--mi-color-text-muted, #94A3B8)', margin: 0, fontSize: '0.9rem' }}>
              The web doesn't need another SaaS dashboard. Expressive, accessible & responsive UI primitives.
            </p>
          </Stack>

          {/* Global Controls */}
          <Stack direction="row" align="center" gap="0.75rem" wrap>
            <Tooltip content="Toggle retro CRT scanlines and flickering effect">
              <Button
                size="sm"
                variant={isCRTActive ? 'inferno' : 'outline'}
                onClick={() => {
                  setIsCRTActive(!isCRTActive);
                  addToast(`CRT Effect ${!isCRTActive ? 'Enabled' : 'Disabled'}`, { variant: 'inferno' });
                }}
                leftIcon={<CpuIcon size={14} />}
              >
                CRT Overlay: {isCRTActive ? 'ON' : 'OFF'}
              </Button>
            </Tooltip>

            <Stack direction="row" align="center" gap="0.35rem">
              <span style={{ fontSize: '0.8rem', color: 'var(--mi-color-text-dim, #64748B)' }}>THEME:</span>
              <Button
                size="sm"
                variant={currentTheme === 'moon-inferno' ? 'inferno' : 'ghost'}
                onClick={() => handleThemeChange('moon-inferno')}
                leftIcon={<FlameIcon size={14} />}
              >
                Inferno
              </Button>
              <Button
                size="sm"
                variant={currentTheme === 'terminal' ? 'inferno' : 'ghost'}
                onClick={() => handleThemeChange('terminal')}
                leftIcon={<TerminalIcon size={14} />}
              >
                Terminal
              </Button>
              <Button
                size="sm"
                variant={currentTheme === 'y2k' ? 'inferno' : 'ghost'}
                onClick={() => handleThemeChange('y2k')}
                leftIcon={<SunIcon size={14} />}
              >
                Y2K
              </Button>
            </Stack>
          </Stack>
        </header>

        {/* Hero Showcase: PixelContainer & GlitchText */}
        <section>
          <PixelContainer title="SYSTEM SHOWCASE // RETRO PIXEL CONTAINER FRAME">
            <Stack gap="1rem">
              <Stack direction="row" align="center" gap="0.75rem" wrap>
                <Badge variant="inferno" icon={<FlameIcon size={14} />}>Lava Core</Badge>
                <Badge variant="pixel" icon={<SparklesIcon size={14} />}>Pixel Perfect</Badge>
                <Badge variant="success" icon={<CheckIcon size={14} />}>WCAG AA Compliant</Badge>
                <Badge variant="error" icon={<WarnIcon size={14} />}>Zero SaaS Boredom</Badge>
              </Stack>
              <p style={{ margin: 0 }}>
                Moon-Inferno provides radical retro visual primitives—authentic stepped pixel borders, CRT scanlines, RGB glitch text, and expressive tactile controls—backed by strict semantic HTML and zero-compromise keyboard accessibility.
              </p>
            </Stack>
          </PixelContainer>
        </section>

        {/* Grid: Component Showcases */}
        <Grid minChildWidth="340px" gap="2rem">
          {/* Buttons Component Showcase */}
          <Card variant="pixel">
            <CardHeader>
              <Stack direction="row" align="center" gap="0.5rem">
                <ZapIcon size={18} /> BUTTON PRIMITIVES
              </Stack>
            </CardHeader>
            <CardBody>
              <Stack gap="1.25rem">
                <div>
                  <span style={{ fontSize: '0.8rem', color: 'var(--mi-color-text-dim)', display: 'block', marginBottom: '0.5rem' }}>
                    VARIANTS & TOOLTIPS:
                  </span>
                  <Stack direction="row" align="center" gap="0.5rem" wrap>
                    <Tooltip content="Signature Inferno high-energy action">
                      <Button variant="inferno" leftIcon={<FlameIcon size={16} />}>Inferno</Button>
                    </Tooltip>
                    <Tooltip content="Tactile outline for secondary actions">
                      <Button variant="outline" leftIcon={<ShieldIcon size={16} />}>Outline</Button>
                    </Tooltip>
                    <Tooltip content="Minimal backgroundless button">
                      <Button variant="ghost" leftIcon={<SparklesIcon size={16} />}>Ghost</Button>
                    </Tooltip>
                    <Tooltip content="Stepped pixel corners & hard drop shadow">
                      <Button variant="pixel" leftIcon={<GamepadIcon size={16} />}>Pixel</Button>
                    </Tooltip>
                  </Stack>
                </div>

                <div>
                  <span style={{ fontSize: '0.8rem', color: 'var(--mi-color-text-dim)', display: 'block', marginBottom: '0.5rem' }}>
                    SIZES & STATES:
                  </span>
                  <Stack direction="row" align="center" gap="0.5rem" wrap>
                    <Button size="sm" variant="inferno">Small</Button>
                    <Button size="md" variant="inferno">Medium</Button>
                    <Button size="lg" variant="inferno">Large</Button>
                    <Button isLoading variant="inferno">Processing</Button>
                    <Button disabled variant="outline" leftIcon={<LockIcon size={16} />}>Locked</Button>
                  </Stack>
                </div>
              </Stack>
            </CardBody>
          </Card>

          {/* Input & Form Control Showcase */}
          <Card>
            <CardHeader>
              <Stack direction="row" align="center" gap="0.5rem">
                <CodeIcon size={18} /> INPUT CONTROLS
              </Stack>
            </CardHeader>
            <CardBody>
              <Stack gap="1.25rem">
                <Input
                  label="TRANSMISSION_KEY"
                  placeholder="e.g. ALPHA-994-INFERNO"
                  helperText="Enter encrypted transmission key to open dialog."
                  value={inputValue}
                  onChange={(e) => {
                    setInputValue(e.target.value);
                    if (inputError) setInputError('');
                  }}
                  errorMessage={inputError}
                />

                <div style={{ position: 'relative' }}>
                  <Input
                    label="ENCRYPTED_SECRET"
                    type={showPassword ? 'text' : 'password'}
                    value={passwordValue}
                    onChange={(e) => setPasswordValue(e.target.value)}
                    helperText="Click eye icon to toggle visibility."
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    style={{
                      position: 'absolute',
                      right: '10px',
                      top: '32px',
                      background: 'none',
                      border: 'none',
                      color: 'var(--mi-color-text-muted)',
                      cursor: 'pointer',
                      minHeight: '44px',
                      minWidth: '44px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                    aria-label="Toggle password visibility"
                  >
                    {showPassword ? <EyeOffIcon size={18} /> : <EyeIcon size={18} />}
                  </button>
                </div>
              </Stack>
            </CardBody>
            <CardFooter>
              <Button variant="outline" size="sm" onClick={() => { setInputValue(''); setInputError(''); }}>
                Clear
              </Button>
              <Button variant="inferno" size="sm" onClick={handleValidate} rightIcon={<CheckIcon size={16} />}>
                Open Dialog
              </Button>
            </CardFooter>
          </Card>
        </Grid>

        {/* Tabs & Terminal & Icon Explorer Section */}
        <section>
          <Tabs
            items={[
              {
                id: 'icon-explorer',
                label: (
                  <Stack direction="row" align="center" gap="0.5rem">
                    <SparklesIcon size={16} /> SVG Icon Explorer ({ALL_ICONS.length})
                  </Stack>
                ),
                content: (
                  <Stack gap="1.25rem">
                    <Stack direction="row" justify="between" align="center" wrap gap="1rem">
                      <div style={{ maxWidth: '300px', width: '100%' }}>
                        <Input
                          placeholder="Search icons..."
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                        />
                      </div>
                      {copiedIcon && (
                        <span style={{ fontSize: '0.85rem', color: 'var(--mi-color-success)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                          <CheckIcon size={16} /> Copied &lt;{copiedIcon} /&gt; to clipboard!
                        </span>
                      )}
                    </Stack>

                    <Grid minChildWidth="120px" gap="1rem">
                      {filteredIcons.map(({ name, Component }) => (
                        <button
                          key={name}
                          type="button"
                          onClick={() => handleCopyIcon(name)}
                          style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '0.5rem',
                            padding: '1.25rem 0.5rem',
                            backgroundColor: 'var(--mi-color-bg-subtle)',
                            border: '1px solid var(--mi-color-border)',
                            borderRadius: 'var(--mi-radius-base)',
                            color: 'var(--mi-color-text)',
                            cursor: 'pointer',
                            fontFamily: 'var(--mi-font-mono)',
                            fontSize: '0.75rem',
                            transition: 'all 0.15s ease',
                            minHeight: '44px',
                          }}
                        >
                          <Component size={28} color="var(--mi-color-primary)" />
                          <span style={{ wordBreak: 'break-word', textAlign: 'center' }}>{name}</span>
                        </button>
                      ))}
                    </Grid>
                  </Stack>
                ),
              },
              {
                id: 'terminal',
                label: (
                  <Stack direction="row" align="center" gap="0.5rem">
                    <TerminalIcon size={16} /> Interactive Terminal
                  </Stack>
                ),
                content: (
                  <Terminal
                    initialLines={[
                      { id: '1', type: 'output', text: 'MOON-INFERNO OS v0.3.0 INITIALIZED.' },
                      { id: '2', type: 'output', text: 'Type "help", "icons", "status", or "clear".' },
                    ]}
                    onCommand={(cmd) => {
                      if (cmd === 'help') return 'Available commands: help, status, icons, inferno, clear';
                      if (cmd === 'status') return 'SYSTEM STATUS: 100% ONLINE. ALL PRIMITIVES ACTIVE.';
                      if (cmd === 'icons') return `Available SVG icons (${ALL_ICONS.length}): ${ALL_ICONS.map(i => i.name).join(', ')}`;
                      if (cmd === 'inferno') return 'SYSTEM OVERRIDE: SOLAR INFERNO ACTIVE';
                      return `Command not recognized: ${cmd}`;
                    }}
                  />
                ),
              },
              {
                id: 'architecture',
                label: (
                  <Stack direction="row" align="center" gap="0.5rem">
                    <LayersIcon size={16} /> Architecture
                  </Stack>
                ),
                content: (
                  <Stack gap="0.75rem" style={{ fontSize: '0.9rem' }}>
                    <p><strong style={{ color: 'var(--mi-color-primary)' }}>Accessibility First:</strong> WCAG contrast standards, visible focus rings, full keyboard support.</p>
                    <p><strong style={{ color: 'var(--mi-color-primary)' }}>Responsive Default:</strong> Native layout adaptivity across mobile, tablet, and desktop viewports.</p>
                    <p><strong style={{ color: 'var(--mi-color-primary)' }}>Theme Independence:</strong> Complete decoupling of component logic from CSS variable styling.</p>
                    <p><strong style={{ color: 'var(--mi-color-primary)' }}>Vector Iconography:</strong> 34+ built-in native SVG icon components for clean, resolution-independent rendering.</p>
                  </Stack>
                ),
              },
            ]}
          />
        </section>

        {/* Modal Dialog */}
        <Dialog
          isOpen={isDialogOpen}
          onClose={() => setIsDialogOpen(false)}
          title="TRANSMISSION CONFIRMATION"
          variant="pixel"
        >
          <Stack gap="1rem">
            <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', margin: 0 }}>
              <CheckIcon color="var(--mi-color-success)" size={20} />
              Transmission key <code>{inputValue}</code> validated and locked.
            </p>
            <div style={{ padding: '0.75rem', backgroundColor: 'var(--mi-color-bg-subtle)', borderRadius: '4px', fontSize: '0.85rem' }}>
              <span style={{ color: 'var(--mi-color-text-muted)' }}>Status:</span> Encrypted channel established.
            </div>
          </Stack>
          <DialogFooter>
            <Button variant="outline" size="sm" onClick={() => setIsDialogOpen(false)} leftIcon={<CloseIcon size={14} />}>
              Dismiss
            </Button>
            <Button variant="inferno" size="sm" onClick={() => setIsDialogOpen(false)} leftIcon={<CheckIcon size={14} />}>
              Acknowledge
            </Button>
          </DialogFooter>
        </Dialog>

        {/* Footer info */}
        <footer style={{ textAlign: 'center', color: 'var(--mi-color-text-dim)', fontSize: '0.8rem', marginTop: '1rem' }}>
          Moon-Inferno Framework — Expressive, Accessible & Responsive UI Primitives.
        </footer>
      </Stack>
    </Container>
  );
}

export default function App() {
  return (
    <ToastProvider>
      <PlaygroundContent />
    </ToastProvider>
  );
}
