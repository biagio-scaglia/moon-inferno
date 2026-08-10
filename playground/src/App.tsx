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
  TerminalIcon,
  ShieldIcon,
  CheckIcon,
  CloseIcon,
} from '@moon-inferno/icons';
import { setTheme, type ThemeName } from '@moon-inferno/themes';

export default function App() {
  const [currentTheme, setCurrentTheme] = useState<ThemeName>('moon-inferno');
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isCRTActive, setIsCRTActive] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [inputError, setInputError] = useState('');

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

        {/* Controls */}
        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <Button
            size="sm"
            variant={isCRTActive ? 'inferno' : 'outline'}
            onClick={() => setIsCRTActive(!isCRTActive)}
          >
            📺 CRT Scanlines: {isCRTActive ? 'ON' : 'OFF'}
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
              leftIcon={<MoonIcon size={14} />}
            >
              Y2K
            </Button>
          </div>
        </div>
      </header>

      {/* Main Grid */}
      <main style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2rem' }}>
        {/* Buttons & Icons */}
        <Card variant="pixel">
          <CardHeader>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <ShieldIcon size={18} /> SYSTEM // BUTTONS & ICONS
            </span>
          </CardHeader>
          <CardBody style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <p style={{ fontSize: '0.85rem', color: 'var(--mi-color-text-muted)' }}>
              Tactile button primitives with focus rings and SVG iconography.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              <Button variant="inferno" leftIcon={<FlameIcon size={16} />}>
                Inferno
              </Button>
              <Button variant="outline" leftIcon={<ShieldIcon size={16} />}>
                Shield
              </Button>
              <Button variant="ghost" leftIcon={<MoonIcon size={16} />}>
                Ghost
              </Button>
              <Button variant="pixel" leftIcon={<CheckIcon size={16} />}>
                Pixel
              </Button>
            </div>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginTop: '0.5rem' }}>
              <span style={{ fontSize: '0.8rem', color: 'var(--mi-color-text-muted)' }}>ICONS:</span>
              <FlameIcon color="var(--mi-color-primary)" size={24} />
              <MoonIcon color="var(--mi-color-primary)" size={24} />
              <TerminalIcon color="var(--mi-color-primary)" size={24} />
              <ShieldIcon color="var(--mi-color-primary)" size={24} />
              <CheckIcon color="var(--mi-color-success)" size={24} />
              <CloseIcon color="var(--mi-color-error)" size={24} />
            </div>
          </CardBody>
        </Card>

        {/* Input & Modal Dialog Trigger */}
        <Card>
          <CardHeader>COMMUNICATIONS // TRANSMISSION</CardHeader>
          <CardBody style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <Input
              label="TRANSMISSION_KEY"
              placeholder="e.g. ALPHA-994-INFERNO"
              helperText="Enter encrypted key to open transmission modal."
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value);
                if (inputError) setInputError('');
              }}
              errorMessage={inputError}
            />
          </CardBody>
          <CardFooter>
            <Button
              variant="inferno"
              size="sm"
              onClick={handleValidate}
              rightIcon={<CheckIcon size={16} />}
            >
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
                    { id: '1', type: 'output', text: 'MOON-INFERNO OS v0.1.0 INITIALIZED.' },
                    { id: '2', type: 'output', text: 'Type "help" or "status" to test commands.' },
                  ]}
                  onCommand={(cmd) => {
                    if (cmd === 'help') return 'Available commands: help, status, clear, inferno';
                    if (cmd === 'status') return 'SYSTEM STATUS: 100% ONLINE. ALL PRIMITIVES ACTIVE.';
                    if (cmd === 'inferno') return '🔥 LUNAR INFERNO SYSTEM ONLINE 🔥';
                    return `Command not recognized: ${cmd}`;
                  }}
                />
              ),
            },
            {
              id: 'architecture',
              label: 'Architecture Principles',
              content: (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem' }}>
                  <p><strong>♿ Accessibility First:</strong> WCAG contrast standards, visible focus rings, full keyboard support.</p>
                  <p><strong>📱 Responsive Default:</strong> Native layout adaptivity across all viewports.</p>
                  <p><strong>🎨 Theme Independence:</strong> Stylistic separation from behavioral logic.</p>
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
        title="SIGNAL CONFIRMATION"
        variant="pixel"
      >
        <p style={{ marginBottom: '1rem' }}>
          Signal transmission key <code>{inputValue}</code> accepted and locked.
        </p>
        <DialogFooter>
          <Button variant="outline" size="sm" onClick={() => setIsDialogOpen(false)}>
            Dismiss
          </Button>
          <Button variant="inferno" size="sm" onClick={() => setIsDialogOpen(false)}>
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
