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
  Accordion,
  AccordionItem,
  MatrixRain,
  SignalLight,
  CodeBlock,
  Select,
  Avatar,
  AvatarGroup,
  Progress,
  Slider,
  Gallery,
  Marquee,
  PixelText,
  TypingText,
  NeonText,
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

const GALLERY_ITEMS = [
  {
    id: '1',
    src: '/assets/placeholder-1.svg',
    title: 'INFERNO_MOON // CORE VISUAL',
    caption: 'Atmospheric crimson moon glowing over obsidian dystopian architecture.',
  },
  {
    id: '2',
    src: '/assets/placeholder-2.svg',
    title: 'CYBERPUNK_GRID // MATRIX NODE',
    caption: 'Glowing neon data streams and high-contrast ASCII terminal matrix.',
  },
  {
    id: '3',
    src: '/assets/placeholder-3.svg',
    title: 'RETRO_ARCADE // SYNTHWAVE VIBE',
    caption: '80s arcade synthwave aesthetics with CRT scanline reflections.',
  },
];

function MasterGuideWebsite() {
  const [currentTheme, setCurrentTheme] = useState<ThemeName>('moon-inferno');
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isCRTActive, setIsCRTActive] = useState(false);
  const [isMatrixActive, setIsMatrixActive] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [inputError, setInputError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [passwordValue, setPasswordValue] = useState('Inferno2026!');
  const [searchQuery, setSearchQuery] = useState('');

  // Component Demo States
  const [checkboxValue, setCheckboxValue] = useState(true);
  const [radioValue, setRadioValue] = useState('inferno');
  const [switchValue, setSwitchValue] = useState(true);
  const [selectValue, setSelectValue] = useState('alpha');
  const [sliderValue, setSliderValue] = useState(75);

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
    <Container size="xl" style={{ position: 'relative' }}>
      {isMatrixActive && <MatrixRain />}
      <Stack gap="2.5rem" style={{ position: 'relative', zIndex: 1 }}>
        {isCRTActive && <CRTEffect />}

        {/* Glassmorphic Navigation Bar */}
        <header className="header-nav" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <Stack direction="row" align="center" gap="0.75rem" wrap>
            <img src="/assets/logo.png" alt="Moon-Inferno Logo" style={{ height: '42px', width: 'auto', borderRadius: '4px' }} />
            <GlitchText text="Moon-Inferno" as="h1" style={{ fontSize: 'clamp(1.5rem, 5vw, 2.25rem)' }} />
            <Badge variant="pixel" icon={<SparklesIcon size={12} />}>v0.1.0 (NPM)</Badge>
            <SignalLight status="online" pulse label="CORE ONLINE" />
          </Stack>

          {/* Theme & Shader Controls */}
          <Stack direction="row" align="center" gap="0.75rem" wrap>
            <Tooltip content="Toggle cyberpunk ASCII matrix rain background animation">
              <Button
                size="sm"
                variant={isMatrixActive ? 'inferno' : 'outline'}
                onClick={() => {
                  setIsMatrixActive(!isMatrixActive);
                  addToast(`Matrix Rain ${!isMatrixActive ? 'Enabled' : 'Disabled'}`, { variant: 'inferno' });
                }}
                leftIcon={<CodeIcon size={14} />}
              >
                Matrix Rain: {isMatrixActive ? 'ON' : 'OFF'}
              </Button>
            </Tooltip>

            <Tooltip content="Toggle retro CRT scanlines and screen flicker effect">
              <Button
                size="sm"
                variant={isCRTActive ? 'inferno' : 'outline'}
                onClick={() => {
                  setIsCRTActive(!isCRTActive);
                  addToast(`CRT Shader ${!isCRTActive ? 'Enabled' : 'Disabled'}`, { variant: 'inferno' });
                }}
                leftIcon={<CpuIcon size={14} />}
              >
                CRT Shader: {isCRTActive ? 'ON' : 'OFF'}
              </Button>
            </Tooltip>

            <Stack direction="row" align="center" gap="0.35rem" wrap>
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

        {/* Hero Section Banner */}
        <section className="hero-card">
          <Stack gap="1.25rem" align="center">
            <Badge variant="inferno" icon={<FlameIcon size={14} />}>OFFICIAL DOCUMENTATION & COMPONENT MASTER GUIDE</Badge>
            
            <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)', fontFamily: 'var(--mi-font-mono)', margin: 0, letterSpacing: '-0.02em' }}>
              Reclaim Expressive Web Design
            </h2>

            <p style={{ maxWidth: '780px', color: 'var(--mi-color-text-muted)', fontSize: '1.1rem', lineHeight: '1.6', margin: 0 }}>
              Moon-Inferno is an accessibility-first React UI framework created by <strong>Biagio Scaglia</strong> for retro, Y2K, CRT, cyberpunk, pixel art, and experimental web applications. Fully WCAG 2.1 AA compliant out of the box with zero SaaS sterility.
            </p>

            <Stack direction="row" align="center" justify="center" gap="1rem" wrap style={{ marginTop: '0.5rem' }}>
              <Button
                size="lg"
                variant="inferno"
                leftIcon={<FlameIcon size={18} />}
                onClick={() => {
                  const el = document.getElementById('main-tabs');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Explore Component Catalog
              </Button>
              <Button
                size="lg"
                variant="pixel"
                leftIcon={<ExternalLinkIcon size={18} />}
                onClick={() => window.open('https://github.com/biagio-scaglia/moon-inferno', '_blank')}
              >
                GitHub Repository
              </Button>
              <Button
                size="lg"
                variant="ghost"
                leftIcon={<UserIcon size={18} />}
                onClick={() => window.open('https://github.com/biagio-scaglia', '_blank')}
              >
                Biagio Scaglia Profile
              </Button>
            </Stack>
          </Stack>
        </section>

        {/* Feature Highlights Grid */}
        <Grid minChildWidth="240px" gap="1.25rem">
          <Card className="feature-card">
            <CardBody>
              <Stack gap="0.5rem">
                <Stack direction="row" align="center" gap="0.5rem">
                  <ShieldIcon size={20} color="var(--mi-color-primary)" />
                  <strong style={{ fontSize: '0.95rem' }}>WCAG 2.1 AA Compliant</strong>
                </Stack>
                <p style={{ fontSize: '0.85rem', color: 'var(--mi-color-text-muted)', margin: 0 }}>
                  High-contrast focus rings, full keyboard traversal, and screen-reader audit readiness.
                </p>
              </Stack>
            </CardBody>
          </Card>

          <Card className="feature-card">
            <CardBody>
              <Stack gap="0.5rem">
                <Stack direction="row" align="center" gap="0.5rem">
                  <SparklesIcon size={20} color="var(--mi-color-primary)" />
                  <strong style={{ fontSize: '0.95rem' }}>Custom Text FX</strong>
                </Stack>
                <p style={{ fontSize: '0.85rem', color: 'var(--mi-color-text-muted)', margin: 0 }}>
                  GlitchText, PixelText, TypingText, NeonText, and Marquee continuous tickers.
                </p>
              </Stack>
            </CardBody>
          </Card>

          <Card className="feature-card">
            <CardBody>
              <Stack gap="0.5rem">
                <Stack direction="row" align="center" gap="0.5rem">
                  <LayersIcon size={20} color="var(--mi-color-primary)" />
                  <strong style={{ fontSize: '0.95rem' }}>34+ Vector SVG Icons</strong>
                </Stack>
                <p style={{ fontSize: '0.85rem', color: 'var(--mi-color-text-muted)', margin: 0 }}>
                  Integrated `@moon-inferno/icons` package with 1-click copyable JSX tags.
                </p>
              </Stack>
            </CardBody>
          </Card>

          <Card className="feature-card">
            <CardBody>
              <Stack gap="0.5rem">
                <Stack direction="row" align="center" gap="0.5rem">
                  <SunIcon size={20} color="var(--mi-color-primary)" />
                  <strong style={{ fontSize: '0.95rem' }}>Themeable Tokens</strong>
                </Stack>
                <p style={{ fontSize: '0.85rem', color: 'var(--mi-color-text-muted)', margin: 0 }}>
                  Switch dynamically between Inferno, Terminal Phosphor Green, and Y2K Silver Cyber.
                </p>
              </Stack>
            </CardBody>
          </Card>
        </Grid>

        {/* Global Ticker Marquee */}
        <Marquee variant="pixel" speed={22}>
          <span style={{ color: 'var(--mi-color-primary)', fontWeight: 'bold' }}>MOON-INFERNO v0.1.0 IS LIVE ON NPM</span>
          <span>--</span>
          <span>pnpm add @moon-inferno/react @moon-inferno/themes @moon-inferno/icons</span>
          <span>--</span>
          <span style={{ color: 'var(--mi-color-primary)' }}>100% WCAG 2.1 AA ACCESSIBLE</span>
          <span>--</span>
          <span>CREATOR: BIAGIO SCAGLIA</span>
          <span>--</span>
        </Marquee>

        {/* Master Portal Tabs */}
        <main id="main-tabs">
          <Tabs
            items={[
              {
                id: 'architecture-guide',
                label: (
                  <Stack direction="row" align="center" gap="0.5rem">
                    <InfoIcon size={16} /> Architecture & Vision
                  </Stack>
                ),
                content: (
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
                ),
              },
              {
                id: 'getting-started',
                label: (
                  <Stack direction="row" align="center" gap="0.5rem">
                    <CodeIcon size={16} /> Quickstart & Installation
                  </Stack>
                ),
                content: (
                  <Stack gap="2rem">
                    <PixelContainer title="1. INSTALL NPM PACKAGES">
                      <Stack gap="1rem">
                        <p style={{ margin: 0, color: 'var(--mi-color-text-muted)' }}>
                          Install the published NPM packages using your preferred package manager:
                        </p>
                        <CodeBlock filename="terminal" code="pnpm add @moon-inferno/core @moon-inferno/react @moon-inferno/themes @moon-inferno/icons" />
                      </Stack>
                    </PixelContainer>

                    <PixelContainer title="2. IMPORT STYLES & INITIALIZE THEME">
                      <Stack gap="1rem">
                        <p style={{ margin: 0, color: 'var(--mi-color-text-muted)' }}>
                          Import global component CSS and initialize your signature theme in your application entry point (`main.tsx` / `App.tsx`):
                        </p>
                        <CodeBlock filename="main.tsx" code={`import '@moon-inferno/react/styles.css';\nimport { setTheme } from '@moon-inferno/themes';\n\n// Set signature theme ('moon-inferno' | 'terminal' | 'y2k')\nsetTheme('moon-inferno');`} />
                      </Stack>
                    </PixelContainer>

                    <PixelContainer title="3. COMPLETE REACT APPLICATION TEMPLATE">
                      <Stack gap="1rem">
                        <p style={{ margin: 0, color: 'var(--mi-color-text-muted)' }}>
                          Copy and paste this starter template to render primitives with full accessibility and toast notifications:
                        </p>
                        <CodeBlock filename="App.tsx" code={`import { 
  Button, 
  Input, 
  GlitchText, 
  PixelText, 
  NeonText, 
  TypingText, 
  Marquee, 
  SignalLight,
  ToastProvider,
  useToast 
} from '@moon-inferno/react';
import { FlameIcon } from '@moon-inferno/icons';

function AppContent() {
  const { addToast } = useToast();

  return (
    <div style={{ padding: '2rem' }}>
      <SignalLight status="online" label="CORE_ONLINE" />
      <GlitchText text="WELCOME TO MOON-INFERNO" />
      <Marquee speed={18}>
        <NeonText text="EXPRESSIVE UI PRIMITIVES BY BIAGIO SCAGLIA" color="inferno" />
      </Marquee>
      <Button 
        variant="inferno" 
        leftIcon={<FlameIcon size={16} />}
        onClick={() => addToast('Signal broadcasted!', { variant: 'success' })}
      >
        Initiate Transmission
      </Button>
    </div>
  );
}

export default function App() {
  return (
    <ToastProvider>
      <AppContent />
    </ToastProvider>
  );
}`} />
                      </Stack>
                    </PixelContainer>
                  </Stack>
                ),
              },
              {
                id: 'components-catalog',
                label: (
                  <Stack direction="row" align="center" gap="0.5rem">
                    <LayersIcon size={16} /> Component Catalog & API Snippets
                  </Stack>
                ),
                content: (
                  <Stack gap="2rem">
                    {/* Typography & Custom Text FX */}
                    <Card>
                      <CardHeader>
                        <Stack direction="row" align="center" gap="0.5rem">
                          <SparklesIcon size={18} /> Custom Text Primitives & Tickers
                        </Stack>
                      </CardHeader>
                      <CardBody>
                        <Stack gap="1.5rem">
                          <Stack gap="0.5rem">
                            <span style={{ fontSize: '0.8rem', color: 'var(--mi-color-text-dim)' }}>GLITCH TEXT: Animated RGB-split glitch headline component.</span>
                            <GlitchText text="CYBERPUNK INFERNO" as="h3" style={{ fontSize: '1.5rem' }} />
                            <CodeBlock filename="GlitchText.snippet.tsx" code={`<GlitchText text="CYBERPUNK INFERNO" as="h3" />`} />
                          </Stack>

                          <Stack gap="0.5rem">
                            <span style={{ fontSize: '0.8rem', color: 'var(--mi-color-text-dim)' }}>PIXEL TEXT: Stepped pixelated retro typography with hard pixel shadow.</span>
                            <Stack direction="row" align="center" gap="1rem" wrap>
                              <PixelText text="LEVEL 01" size="sm" />
                              <PixelText text="GAME OVER" size="md" />
                              <PixelText text="PRESS START" size="lg" />
                              <PixelText text="INFERNO" size="xl" />
                            </Stack>
                            <CodeBlock filename="PixelText.snippet.tsx" code={`<PixelText text="PRESS START" size="lg" />`} />
                          </Stack>

                          <Stack gap="0.5rem">
                            <span style={{ fontSize: '0.8rem', color: 'var(--mi-color-text-dim)' }}>NEON TEXT: Glowing pulsing cathode tube text with optional flicker.</span>
                            <Stack direction="row" align="center" gap="1.5rem" wrap>
                              <NeonText text="INFERNO" color="inferno" flicker />
                              <NeonText text="CYBERPUNK" color="cyan" />
                              <NeonText text="MATRIX" color="green" />
                              <NeonText text="SYNTHWAVE" color="magenta" flicker />
                            </Stack>
                            <CodeBlock filename="NeonText.snippet.tsx" code={`<NeonText text="INFERNO" color="inferno" flicker />`} />
                          </Stack>

                          <Stack gap="0.5rem">
                            <span style={{ fontSize: '0.8rem', color: 'var(--mi-color-text-dim)' }}>TYPING EFFECT: Typewriter animation with blinking terminal cursor.</span>
                            <TypingText text="Establishing encrypted link to satellite node 094..." speed={40} cursorChar="█" />
                            <CodeBlock filename="TypingText.snippet.tsx" code={`<TypingText text="Establishing encrypted link..." speed={40} cursorChar="█" />`} />
                          </Stack>

                          <Stack gap="0.5rem">
                            <span style={{ fontSize: '0.8rem', color: 'var(--mi-color-text-dim)' }}>MARQUEE TICKER: Infinite continuous scrolling marquee primitive.</span>
                            <Marquee speed={18} variant="pixel">
                              <span>RETRO PRIMITIVES</span> - <span>ACCESSIBLE TICKER</span> - <span>MOON-INFERNO</span>
                            </Marquee>
                            <CodeBlock filename="Marquee.snippet.tsx" code={`<Marquee speed={18} variant="pixel">\n  <span>RETRO PRIMITIVES</span>\n</Marquee>`} />
                          </Stack>
                        </Stack>
                      </CardBody>
                    </Card>

                    {/* Buttons & Actions */}
                    <Card>
                      <CardHeader>
                        <Stack direction="row" align="center" gap="0.5rem">
                          <ZapIcon size={18} /> Buttons & Action Triggers
                        </Stack>
                      </CardHeader>
                      <CardBody>
                        <Stack gap="1.25rem">
                          <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--mi-color-text-muted)' }}>
                            Tactile interactive button supporting stepped pixel borders, loading state aria-busy, and high-contrast focus rings.
                          </p>
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
                          <CodeBlock filename="Button.snippet.tsx" code={`<Button variant="inferno" size="md" leftIcon={<FlameIcon size={16} />}>\n  Initiate Sequence\n</Button>`} />
                        </Stack>
                      </CardBody>
                    </Card>

                    {/* Media Gallery & Lightbox */}
                    <Card>
                      <CardHeader>
                        <Stack direction="row" align="center" gap="0.5rem">
                          <EyeIcon size={18} /> Media Gallery & Modal Lightbox (Gallery Primitive)
                        </Stack>
                      </CardHeader>
                      <CardBody>
                        <Stack gap="1rem">
                          <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--mi-color-text-muted)' }}>
                            Click any image card to open the accessible Lightbox modal with keyboard arrow navigation (Left/Right arrow keys, Escape key dismissal).
                          </p>
                          <Gallery items={GALLERY_ITEMS} />
                          <CodeBlock filename="Gallery.snippet.tsx" code={`<Gallery items={[\n  { id: '1', src: '/img1.png', title: 'NODE_01', caption: 'Atmospheric crimson visual.' },\n  { id: '2', src: '/img2.png', title: 'NODE_02', caption: 'Cyberpunk grid streams.' }\n]} />`} />
                        </Stack>
                      </CardBody>
                    </Card>

                    {/* Form Controls */}
                    <Grid minChildWidth="300px" gap="1.5rem">
                      <Card>
                        <CardHeader>
                          <Stack direction="row" align="center" gap="0.5rem">
                            <CodeIcon size={18} /> Form Inputs & Custom Select
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
                            <CodeBlock filename="Input.snippet.tsx" code={`<Input label="SIGNAL_KEY" placeholder="Key..." errorMessage={error} />`} />

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

                            <Select
                              label="SECURITY_PROTOCOL"
                              value={selectValue}
                              onChange={setSelectValue}
                              options={[
                                { value: 'alpha', label: 'Protocol Alpha (Default)' },
                                { value: 'beta', label: 'Protocol Beta (High Security)' },
                                { value: 'gamma', label: 'Protocol Gamma (Stealth Mode)' },
                              ]}
                            />
                            <CodeBlock filename="Select.snippet.tsx" code={`<Select label="PROTOCOL" value={val} onChange={setVal} options={options} />`} />

                            <Slider
                              label={`POWER LEVEL OUTPUT: ${sliderValue}%`}
                              value={sliderValue}
                              onChange={setSliderValue}
                              min={0}
                              max={100}
                            />
                            <CodeBlock filename="Slider.snippet.tsx" code={`<Slider label="POWER" value={power} onChange={setPower} min={0} max={100} />`} />
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
                            <FilterIcon size={18} /> Checkbox, Radio & Switch Controls
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
                            <CodeBlock filename="Checkbox.snippet.tsx" code={`<Checkbox label="Enable Telemetry" checked={active} onChange={toggle} />`} />

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
                            <CodeBlock filename="RadioGroup.snippet.tsx" code={`<RadioGroup name="mode" value={mode} onChange={setMode}>\n  <Radio value="inferno" label="Inferno" />\n</RadioGroup>`} />

                            <Switch
                              label="CRT Scanline Shaders"
                              checked={switchValue}
                              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                setSwitchValue(e.target.checked);
                                setIsCRTActive(e.target.checked);
                              }}
                            />
                            <CodeBlock filename="Switch.snippet.tsx" code={`<Switch label="CRT Shaders" checked={active} onChange={toggle} />`} />
                          </Stack>
                        </CardBody>
                      </Card>
                    </Grid>

                    {/* Progress Bars & Avatars */}
                    <Card>
                      <CardHeader>
                        <Stack direction="row" align="center" gap="0.5rem">
                          <UserIcon size={18} /> Progress Bars & Avatars
                        </Stack>
                      </CardHeader>
                      <CardBody>
                        <Stack gap="1.5rem">
                          <Grid minChildWidth="240px" gap="1rem">
                            <Progress value={sliderValue} label="Inferno Core Charge" variant="inferno" />
                            <Progress value={65} label="Pixel Sync Progress" variant="pixel" />
                            <Progress value={85} label="Striped Matrix Stream" variant="striped" animated />
                          </Grid>
                          <CodeBlock filename="Progress.snippet.tsx" code={`<Progress value={75} label="Core Charge" variant="inferno" />`} />

                          <div>
                            <span style={{ fontSize: '0.8rem', color: 'var(--mi-color-text-dim)', display: 'block', marginBottom: '0.5rem' }}>
                              AVATARS & AVATAR GROUP:
                            </span>
                            <Stack direction="row" align="center" gap="1rem" wrap>
                              <Avatar size="sm" name="Alpha One" />
                              <Avatar size="md" name="Biagio Scaglia" />
                              <Avatar size="lg" name="Cyber Punk" variant="pixel" />
                              <Avatar size="xl" name="Solar Inferno" />

                              <AvatarGroup>
                                <Avatar size="md" name="Biagio Scaglia" />
                                <Avatar size="md" name="Cyber Punk" />
                                <Avatar size="md" name="Alpha One" />
                              </AvatarGroup>
                            </Stack>
                            <CodeBlock filename="Avatar.snippet.tsx" code={`<AvatarGroup>\n  <Avatar name="Biagio Scaglia" />\n  <Avatar name="Cyber Punk" variant="pixel" />\n</AvatarGroup>`} />
                          </div>
                        </Stack>
                      </CardBody>
                    </Card>

                    {/* Custom Primitives: Accordion & SignalLight */}
                    <Card>
                      <CardHeader>
                        <Stack direction="row" align="center" gap="0.5rem">
                          <LayersIcon size={18} /> Accordion & Custom Signal Beacons
                        </Stack>
                      </CardHeader>
                      <CardBody>
                        <Stack gap="1.5rem">
                          <Stack direction="row" align="center" gap="1.5rem" wrap>
                            <SignalLight status="online" label="ONLINE" />
                            <SignalLight status="warning" label="WARNING" />
                            <SignalLight status="busy" label="BUSY" />
                            <SignalLight status="offline" pulse={false} label="OFFLINE" />
                          </Stack>
                          <CodeBlock filename="SignalLight.snippet.tsx" code={`<SignalLight status="online" pulse label="NODE_ONLINE" />`} />

                          <Accordion>
                            <AccordionItem title="ARCHITECTURAL FOUNDATION" defaultOpen>
                              Decouples component logic from theme tokens, guaranteeing WCAG AA accessibility, keyboard navigation, and full screen-reader compliance.
                            </AccordionItem>
                            <AccordionItem title="RETRO SHADERS & VISUAL LANGUAGE">
                              Built-in support for CRT scanlines overlay, RGB-split glitch text animations, and authentic stepped pixel borders.
                            </AccordionItem>
                            <AccordionItem title="ZERO SAAS STERILITY">
                              Designed explicitly for interfaces with distinct character—retro web, Y2K, cyberpunk, pixel art, anime-inspired, and experimental applications.
                            </AccordionItem>
                          </Accordion>
                          <CodeBlock filename="Accordion.snippet.tsx" code={`<Accordion>\n  <AccordionItem title="PANEL TITLE" defaultOpen>\n    Content inside panel.\n  </AccordionItem>\n</Accordion>`} />
                        </Stack>
                      </CardBody>
                    </Card>

                    {/* Containers & Modal Dialog */}
                    <Card>
                      <CardHeader>
                        <Stack direction="row" align="center" gap="0.5rem">
                          <LayersIcon size={18} /> Pixel Container & Accessible Dialog Modal
                        </Stack>
                      </CardHeader>
                      <CardBody>
                        <Stack gap="1.25rem">
                          <PixelContainer title="PIXEL_CONTAINER_NODE // DEMO">
                            Custom arcade window container with stepped pixel borders and retro titlebar.
                          </PixelContainer>
                          <CodeBlock filename="PixelContainer.snippet.tsx" code={`<PixelContainer title="TERMINAL // NODE 01">\n  Content inside pixel frame.\n</PixelContainer>`} />

                          <Stack direction="row" align="center" gap="1rem">
                            <Button variant="inferno" onClick={() => setIsDialogOpen(true)}>
                              Open Dialog Modal
                            </Button>
                          </Stack>
                          <CodeBlock filename="Dialog.snippet.tsx" code={`<Dialog isOpen={open} onClose={() => setOpen(false)} title="TITLE">\n  <p>Modal body content.</p>\n  <DialogFooter>\n    <Button onClick={() => setOpen(false)}>Close</Button>\n  </DialogFooter>\n</Dialog>`} />
                        </Stack>
                      </CardBody>
                    </Card>

                    {/* Shaders & Overlays */}
                    <Card>
                      <CardHeader>
                        <Stack direction="row" align="center" gap="0.5rem">
                          <CpuIcon size={18} /> CRT Shader Overlay & Matrix Rain Animation
                        </Stack>
                      </CardHeader>
                      <CardBody>
                        <Stack gap="1.25rem">
                          <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--mi-color-text-muted)' }}>
                            Toggle retro scanline overlays or matrix digital rain directly in your application:
                          </p>
                          <CodeBlock filename="Shaders.snippet.tsx" code={`import { CRTEffect, MatrixRain } from '@moon-inferno/react';\n\n// Full screen retro CRT scanlines\n<CRTEffect />\n\n// Cyberpunk ASCII matrix rain canvas overlay\n<MatrixRain color="#FF4D00" />`} />
                        </Stack>
                      </CardBody>
                    </Card>

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
                          <CodeBlock filename="Loader.snippet.tsx" code={`<Loader size="md" variant="pixel" />`} />

                          <Stack direction="row" align="center" gap="0.75rem" wrap>
                            <Badge variant="inferno" icon={<FlameIcon size={14} />}>Lava Core</Badge>
                            <Badge variant="pixel" icon={<SparklesIcon size={14} />}>Pixel Perfect</Badge>
                            <Badge variant="success" icon={<CheckIcon size={14} />}>Success</Badge>
                            <Badge variant="error" icon={<WarnIcon size={14} />}>Error</Badge>
                            <Badge variant="outline" icon={<InfoIcon size={14} />}>Outline</Badge>
                          </Stack>
                          <CodeBlock filename="Badge.snippet.tsx" code={`<Badge variant="inferno" icon={<FlameIcon size={14} />}>Lava Core</Badge>`} />

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
                          <CodeBlock filename="Toast.snippet.tsx" code={`const { addToast } = useToast();\naddToast('Operation success!', { variant: 'success' });`} />
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
                    <SparklesIcon size={16} /> SVG Icon Library ({ALL_ICONS.length})
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
                id: 'custom-css-guide',
                label: (
                  <Stack direction="row" align="center" gap="0.5rem">
                    <SettingsIcon size={16} /> CSS Variables & Themes Guide
                  </Stack>
                ),
                content: (
                  <Stack gap="1.5rem">
                    <PixelContainer title="DESIGN TOKENS AND NATIVE CSS VARIABLES">
                      <Stack gap="1rem">
                        <p style={{ margin: 0, color: 'var(--mi-color-text-muted)' }}>
                          All Moon-Inferno components use native CSS variables. Override any color, shadow, or radius token directly in your stylesheet to create custom themes:
                        </p>
                        <CodeBlock filename="custom-theme.css" code={`:root {\n  --mi-color-bg: #0A090D;\n  --mi-color-bg-subtle: #14121A;\n  --mi-color-surface: #1E1B26;\n  --mi-color-border: #332D40;\n  --mi-color-border-accent: #FF4D00;\n  --mi-color-primary: #FF4D00;\n  --mi-color-primary-hover: #FF661A;\n  --mi-shadow-glow: 0 0 16px rgba(255, 77, 0, 0.45);\n}`} />
                      </Stack>
                    </PixelContainer>
                  </Stack>
                ),
              },
              {
                id: 'terminal',
                label: (
                  <Stack direction="row" align="center" gap="0.5rem">
                    <TerminalIcon size={16} /> Interactive Terminal OS
                  </Stack>
                ),
                content: (
                  <Terminal
                    initialLines={[
                      { id: '1', type: 'output', text: 'MOON-INFERNO OS v0.1.0 (NPM PUBLISHED) INITIALIZED.' },
                      { id: '2', type: 'output', text: 'Type "help", "author", "install", "icons", "status", or "clear".' },
                    ]}
                    onCommand={(cmd) => {
                      if (cmd === 'help') return 'Available commands: help, author, install, status, icons, inferno, clear';
                      if (cmd === 'author') return 'CREATOR: Biagio Scaglia (https://github.com/biagio-scaglia)';
                      if (cmd === 'install') return 'pnpm add @moon-inferno/react @moon-inferno/themes @moon-inferno/icons';
                      if (cmd === 'status') return 'SYSTEM STATUS: 100% ONLINE. ALL NPM PACKAGES LIVE.';
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

        {/* Footer info & Creator Credits */}
        <footer style={{ textAlign: 'center', color: 'var(--mi-color-text-dim)', fontSize: '0.85rem', marginTop: '1rem', padding: '1.5rem 0', borderTop: '1px solid var(--mi-color-border)' }}>
          <p style={{ margin: '0 0 0.5rem 0' }}>
            Moon-Inferno Framework -- Created and Maintained by <strong><a href="https://github.com/biagio-scaglia" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--mi-color-primary)', textDecoration: 'none' }}>Biagio Scaglia</a></strong>.
          </p>
          <p style={{ margin: 0, fontSize: '0.75rem', color: 'var(--mi-color-text-muted)' }}>
            Built with TypeScript, React & WCAG 2.1 AA Accessibility Standards. MIT Licensed.
          </p>
        </footer>
      </Stack>
    </Container>
  );
}

export default function App() {
  return (
    <ToastProvider>
      <MasterGuideWebsite />
    </ToastProvider>
  );
}
