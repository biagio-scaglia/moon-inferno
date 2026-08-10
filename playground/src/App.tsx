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
];

export default function App() {
  const [currentTheme, setCurrentTheme] = useState<ThemeName>('moon-inferno');
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isCRTActive, setIsCRTActive] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [inputError, setInputError] = useState('');
  const [copiedIcon, setCopiedIcon] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [passwordValue, setPasswordValue] = useState('Inferno2026!');

  const handleThemeChange = (newTheme: ThemeName) => {
    setCurrentTheme(newTheme);
    setTheme(newTheme);
  };

  const handleValidate = () => {
    if (!inputValue.trim()) {
      setInputError('Signal key is required to initiate launch sequence.');
    } else {
      setInputError('');
      setIsDialogOpen(true);
    }
  };

  const handleCopyIcon = (name: string) => {
    navigator.clipboard.writeText(`<${name} />`);
    setCopiedIcon(name);
    setTimeout(() => setCopiedIcon(null), 2000);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
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
        <div>
          <h1
            style={{
              fontSize: '2.25rem',
              color: 'var(--mi-color-primary, #FF4D00)',
              letterSpacing: '-0.02em',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
            }}
          >
            <MoonIcon size={36} color="var(--mi-color-primary)" /> Moon-Inferno
          </h1>
          <p style={{ color: 'var(--mi-color-text-muted, #94A3B8)', marginTop: '0.25rem', fontSize: '0.9rem' }}>
            The web doesn't need another SaaS dashboard.
          </p>
        </div>

        {/* Global Controls */}
        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <Button
            size="sm"
            variant={isCRTActive ? 'inferno' : 'outline'}
            onClick={() => setIsCRTActive(!isCRTActive)}
            leftIcon={<CpuIcon size={14} />}
          >
            CRT Scanlines: {isCRTActive ? 'ON' : 'OFF'}
          </Button>

          <div style={{ display: 'flex', gap: '0.35rem', alignItems: 'center' }}>
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
          </div>
        </div>
      </header>

      {/* Grid: Component Showcases */}
      <main style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2rem' }}>
        {/* Buttons Component Showcase */}
        <Card variant="pixel">
          <CardHeader>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <ZapIcon size={18} /> BUTTON PRIMITIVES
            </span>
          </CardHeader>
          <CardBody style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div>
              <span style={{ fontSize: '0.8rem', color: 'var(--mi-color-text-dim)', display: 'block', marginBottom: '0.5rem' }}>
                VARIANTS:
              </span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                <Button variant="inferno" leftIcon={<FlameIcon size={16} />}>Inferno</Button>
                <Button variant="outline" leftIcon={<ShieldIcon size={16} />}>Outline</Button>
                <Button variant="ghost" leftIcon={<SparklesIcon size={16} />}>Ghost</Button>
                <Button variant="pixel" leftIcon={<CheckIcon size={16} />}>Pixel</Button>
              </div>
            </div>

            <div>
              <span style={{ fontSize: '0.8rem', color: 'var(--mi-color-text-dim)', display: 'block', marginBottom: '0.5rem' }}>
                SIZES:
              </span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', alignItems: 'center' }}>
                <Button size="sm" variant="inferno">Small</Button>
                <Button size="md" variant="inferno">Medium</Button>
                <Button size="lg" variant="inferno">Large</Button>
              </div>
            </div>

            <div>
              <span style={{ fontSize: '0.8rem', color: 'var(--mi-color-text-dim)', display: 'block', marginBottom: '0.5rem' }}>
                STATES:
              </span>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <Button isLoading variant="inferno">Processing</Button>
                <Button disabled variant="outline" leftIcon={<LockIcon size={16} />}>Locked</Button>
              </div>
            </div>
          </CardBody>
        </Card>

        {/* Input & Form Control Showcase */}
        <Card>
          <CardHeader>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <CodeIcon size={18} /> INPUT CONTROLS
            </span>
          </CardHeader>
          <CardBody style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <Input
              label="SIGNAL_KEY"
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
                }}
                aria-label="Toggle password visibility"
              >
                {showPassword ? <EyeOffIcon size={18} /> : <EyeIcon size={18} />}
              </button>
            </div>
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
      </main>

      {/* Tabs & Terminal Section */}
      <section>
        <Tabs
          items={[
            {
              id: 'terminal',
              label: (
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <TerminalIcon size={16} /> Interactive Terminal
                </span>
              ),
              content: (
                <Terminal
                  initialLines={[
                    { id: '1', type: 'output', text: 'MOON-INFERNO OS v0.2.0 INITIALIZED.' },
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
              id: 'icon-explorer',
              label: (
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <SparklesIcon size={16} /> Icon Pack ({ALL_ICONS.length})
                </span>
              ),
              content: (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <p style={{ fontSize: '0.85rem', color: 'var(--mi-color-text-muted)' }}>
                      Click any SVG icon component to copy code snippet to clipboard.
                    </p>
                    {copiedIcon && (
                      <span style={{ fontSize: '0.8rem', color: 'var(--mi-color-success)', fontWeight: 600 }}>
                        Copied &lt;{copiedIcon} /&gt;!
                      </span>
                    )}
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))', gap: '1rem' }}>
                    {ALL_ICONS.map(({ name, Component }) => (
                      <button
                        key={name}
                        type="button"
                        onClick={() => handleCopyIcon(name)}
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          gap: '0.5rem',
                          padding: '1rem 0.5rem',
                          backgroundColor: 'var(--mi-color-bg-subtle)',
                          border: '1px solid var(--mi-color-border)',
                          borderRadius: 'var(--mi-radius-base)',
                          color: 'var(--mi-color-text)',
                          cursor: 'pointer',
                          fontFamily: 'var(--mi-font-mono)',
                          fontSize: '0.75rem',
                          transition: 'all 0.15s ease',
                        }}
                      >
                        <Component size={24} color="var(--mi-color-primary)" />
                        <span style={{ wordBreak: 'break-word', textAlign: 'center' }}>{name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              ),
            },
            {
              id: 'architecture',
              label: (
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <LayersIcon size={16} /> Architecture
                </span>
              ),
              content: (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem' }}>
                  <p><strong style={{ color: 'var(--mi-color-primary)' }}>Accessibility First:</strong> WCAG contrast standards, visible focus rings, full keyboard support.</p>
                  <p><strong style={{ color: 'var(--mi-color-primary)' }}>Responsive Default:</strong> Native layout adaptivity across mobile, tablet, and desktop.</p>
                  <p><strong style={{ color: 'var(--mi-color-primary)' }}>Theme Independence:</strong> Complete decoupling of component logic from CSS variable styling.</p>
                  <p><strong style={{ color: 'var(--mi-color-primary)' }}>No Emoji Dependency:</strong> Built-in native SVG icon system for clean, consistent UI rendering.</p>
                </div>
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
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <CheckIcon color="var(--mi-color-success)" size={20} />
            Transmission key <code>{inputValue}</code> validated and logged.
          </p>
          <div style={{ padding: '0.75rem', backgroundColor: 'var(--mi-color-bg-subtle)', borderRadius: '4px', fontSize: '0.85rem' }}>
            <span style={{ color: 'var(--mi-color-text-muted)' }}>Status:</span> Encrypted channel established.
          </div>
        </div>
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
    </div>
  );
}
