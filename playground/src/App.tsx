import { useState } from 'react';
import { Button, Card, CardHeader, CardBody, CardFooter, Input } from '@moon-inferno/react';
import { setTheme, type ThemeName } from '@moon-inferno/themes';

export default function App() {
  const [currentTheme, setCurrentTheme] = useState<ThemeName>('moon-inferno');
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
      alert(`Signal sequence accepted: ${inputValue}`);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
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
          <h1 style={{ fontSize: '2.25rem', color: 'var(--mi-color-primary, #FF4D00)', letterSpacing: '-0.02em' }}>
            🌙 Moon-Inferno
          </h1>
          <p style={{ color: 'var(--mi-color-text-muted, #94A3B8)', marginTop: '0.25rem', fontSize: '0.9rem' }}>
            The web doesn't need another SaaS dashboard.
          </p>
        </div>

        {/* Theme Switcher */}
        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
          <span style={{ fontSize: '0.8rem', color: 'var(--mi-color-text-dim, #64748B)' }}>THEME:</span>
          <Button
            size="sm"
            variant={currentTheme === 'moon-inferno' ? 'inferno' : 'ghost'}
            onClick={() => handleThemeChange('moon-inferno')}
          >
            🔥 Moon-Inferno
          </Button>
          <Button
            size="sm"
            variant={currentTheme === 'terminal' ? 'inferno' : 'ghost'}
            onClick={() => handleThemeChange('terminal')}
          >
            📟 Terminal
          </Button>
          <Button
            size="sm"
            variant={currentTheme === 'y2k' ? 'inferno' : 'ghost'}
            onClick={() => handleThemeChange('y2k')}
          >
            👾 Y2K
          </Button>
        </div>
      </header>

      {/* Component Sections */}
      <main style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2rem' }}>
        {/* Buttons Showcase */}
        <Card variant="pixel">
          <CardHeader>SYSTEM // BUTTON PRIMITIVES</CardHeader>
          <CardBody style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <p style={{ fontSize: '0.85rem', color: 'var(--mi-color-text-muted)' }}>
              Accessible tactile button variants with focus rings and loading states.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              <Button variant="inferno">Inferno Primary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="pixel">Pixel UI</Button>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginTop: '0.5rem' }}>
              <Button size="sm" variant="inferno">Small</Button>
              <Button size="md" variant="inferno">Medium</Button>
              <Button size="lg" variant="inferno">Large</Button>
            </div>
            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.5rem' }}>
              <Button isLoading variant="inferno">Syncing...</Button>
              <Button disabled variant="outline">Disabled</Button>
            </div>
          </CardBody>
        </Card>

        {/* Form Input Showcase */}
        <Card>
          <CardHeader>COMMUNICATIONS // INPUT CONTROL</CardHeader>
          <CardBody style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <Input
              label="TRANSMISSION_KEY"
              placeholder="e.g. ALPHA-994-INFERNO"
              helperText="Enter your 16-character encrypted key."
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value);
                if (inputError) setInputError('');
              }}
              errorMessage={inputError}
            />

            <Input
              label="DESTINATION_NODE"
              value="ORBITAL-RELAY-04"
              disabled
              helperText="Static route locked by system supervisor."
            />
          </CardBody>
          <CardFooter>
            <Button variant="outline" size="sm" onClick={() => { setInputValue(''); setInputError(''); }}>
              Clear
            </Button>
            <Button variant="inferno" size="sm" onClick={handleValidate}>
              Transmit Signal
            </Button>
          </CardFooter>
        </Card>
      </main>

      {/* Footer info */}
      <footer style={{ textAlign: 'center', color: 'var(--mi-color-text-dim)', fontSize: '0.8rem', marginTop: '2rem' }}>
        Moon-Inferno Framework — Expressive, Accessible & Responsive UI Primitives.
      </footer>
    </div>
  );
}
