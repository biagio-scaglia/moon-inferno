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
  Loader,
  Checkbox,
  RadioGroup,
  Radio,
  Switch,
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

function CodeBlock({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={{ position: 'relative', backgroundColor: 'var(--mi-color-bg-subtle, #14121A)', border: '1px solid var(--mi-color-border, #332D40)', borderRadius: 'var(--mi-radius-base, 4px)', padding: '1rem', fontFamily: 'var(--mi-font-mono, monospace)', fontSize: '0.85rem', overflowX: 'auto' }}>
      <button
        type="button"
        onClick={copy}
        style={{ position: 'absolute', top: '8px', right: '8px', background: 'none', border: '1px solid var(--mi-color-border)', borderRadius: '4px', color: 'var(--mi-color-text-muted)', cursor: 'pointer', padding: '0.2rem 0.5rem', fontSize: '0.75rem', display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}
      >
        {copied ? <CheckIcon size={12} color="var(--mi-color-success)" /> : <CopyIcon size={12} />}
        {copied ? 'Copied' : 'Copy'}
      </button>
      <pre style={{ margin: 0, color: 'var(--mi-color-primary, #FF4D00)' }}>{code}</pre>
    </div>
  );
}

function PlaygroundContent() {
  const [currentTheme, setCurrentTheme] = useState<ThemeName>('moon-inferno');
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isCRTActive, setIsCRTActive] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [inputError, setInputError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [passwordValue, setPasswordValue] = useState('Inferno2026!');
  const [searchQuery, setSearchQuery] = useState('');

  // Interactive Form State
  const [checkboxValue, setCheckboxValue] = useState(true);
  const [radioValue, setRadioValue] = useState('inferno');
  const [switchValue, setSwitchValue] = useState(true);

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
    addToast(`Copied <${name} /> to clipboard!`, { variant: 'inferno', duration: 2500 });
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
              <Badge variant="pixel" icon={<SparklesIcon size={12} />}>v0.4.0</Badge>
            </Stack>
            <p style={{ color: 'var(--mi-color-text-muted, #94A3B8)', margin: 0, fontSize: '0.9rem' }}>
              Documentation Portal & Component Playground. Expressive, accessible & responsive UI primitives.
            </p>
          </Stack>

          {/* Global Controls */}
          <Stack direction="row" align="center" gap="0.75rem" wrap>
            <Tooltip content="Toggle retro CRT scanlines and screen flicker effect">
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

        {/* Documentation Portal Tabs */}
        <main>
          <Tabs
            items={[
              {
                id: 'getting-started',
                label: (
                  <Stack direction="row" align="center" gap="0.5rem">
                    <CodeIcon size={16} /> Getting Started
                  </Stack>
                ),
                content: (
                  <Stack gap="1.5rem">
                    <PixelContainer title="QUICKSTART // INSTALLATION & SETUP">
                      <Stack gap="1rem">
                        <h3>1. Install Package Dependencies</h3>
                        <CodeBlock code="pnpm add @moon-inferno/core @moon-inferno/react @moon-inferno/themes @moon-inferno/icons" />

                        <h3>2. Import Styles & Initialize Theme</h3>
                        <CodeBlock code={`import '@moon-inferno/react/styles.css';\nimport { setTheme } from '@moon-inferno/themes';\n\n// Set signature theme\nsetTheme('moon-inferno');`} />

                        <h3>3. Render Primitives in React</h3>
                        <CodeBlock code={`import { Button, Input, GlitchText, ToastProvider } from '@moon-inferno/react';\nimport { FlameIcon } from '@moon-inferno/icons';\n\nexport default function App() {\n  return (\n    <ToastProvider>\n      <GlitchText text="WELCOME TO THE INFERNO" />\n      <Button variant="inferno" leftIcon={<FlameIcon size={16} />}>\n        Initiate Sequence\n      </Button>\n    </ToastProvider>\n  );\n}`} />
                      </Stack>
                    </PixelContainer>
                  </Stack>
                ),
              },
              {
                id: 'components-demo',
                label: (
                  <Stack direction="row" align="center" gap="0.5rem">
                    <LayersIcon size={16} /> Component Reference
                  </Stack>
                ),
                content: (
                  <Stack gap="2rem">
                    {/* Buttons & Action Controls */}
                    <Card>
                      <CardHeader>
                        <Stack direction="row" align="center" gap="0.5rem">
                          <ZapIcon size={18} /> Button & Actions
                        </Stack>
                      </CardHeader>
                      <CardBody>
                        <Stack gap="1.25rem">
                          <Stack direction="row" align="center" gap="0.5rem" wrap>
                            <Button variant="inferno" leftIcon={<FlameIcon size={16} />}>Inferno</Button>
                            <Button variant="outline" leftIcon={<ShieldIcon size={16} />}>Outline</Button>
                            <Button variant="ghost" leftIcon={<SparklesIcon size={16} />}>Ghost</Button>
                            <Button variant="pixel" leftIcon={<GamepadIcon size={16} />}>Pixel</Button>
                          </Stack>
                          <Stack direction="row" align="center" gap="0.5rem" wrap>
                            <Button size="sm" variant="inferno">Small</Button>
                            <Button size="md" variant="inferno">Medium</Button>
                            <Button size="lg" variant="inferno">Large</Button>
                            <Button isLoading variant="inferno">Processing</Button>
                            <Button disabled variant="outline" leftIcon={<LockIcon size={16} />}>Disabled</Button>
                          </Stack>
                        </Stack>
                      </CardBody>
                    </Card>

                    {/* Form Controls (Inputs, Checkbox, Radio, Switch) */}
                    <Grid minChildWidth="320px" gap="1.5rem">
                      <Card>
                        <CardHeader>
                          <Stack direction="row" align="center" gap="0.5rem">
                            <CodeIcon size={18} /> Form Controls & Inputs
                          </Stack>
                        </CardHeader>
                        <CardBody>
                          <Stack gap="1.25rem">
                            <Input
                              label="TRANSMISSION_KEY"
                              placeholder="e.g. ALPHA-994-INFERNO"
                              helperText="Enter signal key to test validation."
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
                            Test Validation
                          </Button>
                        </CardFooter>
                      </Card>

                      <Card>
                        <CardHeader>
                          <Stack direction="row" align="center" gap="0.5rem">
                            <FilterIcon size={18} /> Checkbox, Radio & Switch
                          </Stack>
                        </CardHeader>
                        <CardBody>
                          <Stack gap="1.25rem">
                            <Checkbox
                              label="Enable Quantum Telemetry"
                              description="Transmits live telemetry stream over WebSockets."
                              checked={checkboxValue}
                              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCheckboxValue(e.target.checked)}
                            />

                            <div>
                              <span style={{ fontSize: '0.8rem', color: 'var(--mi-color-text-dim)', display: 'block', marginBottom: '0.5rem' }}>
                                MODE SELECTOR (RADIO GROUP):
                              </span>
                              <RadioGroup name="mode" value={radioValue} onChange={setRadioValue}>
                                <Radio value="inferno" label="Solar Inferno (Default)" />
                                <Radio value="cyber" label="Cyberpunk Grid" />
                                <Radio value="stealth" label="Stealth Obsidian" />
                              </RadioGroup>
                            </div>

                            <Switch
                              label="CRT Scanline Shaders"
                              checked={switchValue}
                              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                setSwitchValue(e.target.checked);
                                setIsCRTActive(e.target.checked);
                              }}
                            />
                          </Stack>
                        </CardBody>
                      </Card>
                    </Grid>

                    {/* Loaders & Feedback */}
                    <Card>
                      <CardHeader>
                        <Stack direction="row" align="center" gap="0.5rem">
                          <RefreshIcon size={18} /> Feedback, Loaders & Badges
                        </Stack>
                      </CardHeader>
                      <CardBody>
                        <Stack gap="1.25rem">
                          <Stack direction="row" align="center" gap="1.5rem" wrap>
                            <Stack direction="row" align="center" gap="0.5rem">
                              <Loader size="sm" variant="inferno" /> <span>Spinner SM</span>
                            </Stack>
                            <Stack direction="row" align="center" gap="0.5rem">
                              <Loader size="md" variant="inferno" /> <span>Spinner MD</span>
                            </Stack>
                            <Stack direction="row" align="center" gap="0.5rem">
                              <Loader size="md" variant="pixel" /> <span>Pixel Loader</span>
                            </Stack>
                            <Stack direction="row" align="center" gap="0.5rem">
                              <Loader size="md" variant="pulse" /> <span>Pulse Loader</span>
                            </Stack>
                          </Stack>

                          <Stack direction="row" align="center" gap="0.75rem" wrap>
                            <Badge variant="inferno" icon={<FlameIcon size={14} />}>Lava Core</Badge>
                            <Badge variant="pixel" icon={<SparklesIcon size={14} />}>Pixel Perfect</Badge>
                            <Badge variant="success" icon={<CheckIcon size={14} />}>Success</Badge>
                            <Badge variant="error" icon={<WarnIcon size={14} />}>Error</Badge>
                            <Badge variant="outline" icon={<InfoIcon size={14} />}>Outline</Badge>
                          </Stack>

                          <Stack direction="row" align="center" gap="0.5rem" wrap>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => addToast('System status: 100% Operational', { variant: 'success' })}
                            >
                              Trigger Success Toast
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => addToast('Warning: High core temperature detected', { variant: 'error' })}
                            >
                              Trigger Error Toast
                            </Button>
                          </Stack>
                        </Stack>
                      </CardBody>
                    </Card>
                  </Stack>
                ),
              },
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
                          placeholder="Search vector icons..."
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                        />
                      </div>
                      <p style={{ fontSize: '0.85rem', color: 'var(--mi-color-text-muted)', margin: 0 }}>
                        Click any SVG icon component to copy code snippet to clipboard.
                      </p>
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
                      { id: '1', type: 'output', text: 'MOON-INFERNO OS v0.4.0 INITIALIZED.' },
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
            ]}
          />
        </main>

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
