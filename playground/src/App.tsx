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
  Breadcrumbs,
  BreadcrumbItem,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  DatePicker,
  HoloCard,
  CommandPalette,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  DropdownSection,
  DropdownDivider,
  PieChart,
  ColorPicker,
  Table,
  TableHeader,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableCaption,
  CyberCanvas,
  SheetEditor,
  MoonTypewriterDialogue,
  MoonRPGGrid,
  MoonHealthMeter,
  MoonSafeGlitch,
  MoonConsoleLogger,
  MoonProvider,
  useMoonTheme,
  SearchBar,
  type TabsVariant,
} from '@moon-inferno/react';
import { AccessibilitySpecTab } from './components/AccessibilitySpecTab';
import { RecipesTab } from './components/RecipesTab';
import { CliGuideTab } from './components/CliGuideTab';
import { DocSidebarNav } from './components/DocSidebarNav';
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
  CalendarIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  MenuIcon,
} from '@moon-inferno/icons';
import type { ThemeName } from '@moon-inferno/themes';

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
  { name: 'CalendarIcon', Component: CalendarIcon },
  { name: 'ChevronLeftIcon', Component: ChevronLeftIcon },
  { name: 'ChevronRightIcon', Component: ChevronRightIcon },
  { name: 'MenuIcon', Component: MenuIcon },
];

const GALLERY_ITEMS = [
  {
    id: '1',
    src: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&auto=format&fit=crop&q=80',
    title: 'INFERNO_MOON // CORE VISUAL',
    caption: 'Atmospheric crimson moon glowing over obsidian dystopian architecture.',
  },
  {
    id: '2',
    src: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=800&auto=format&fit=crop&q=80',
    title: 'CYBERPUNK_GRID // MATRIX NODE',
    caption: 'Glowing neon data streams and high-contrast ASCII terminal matrix.',
  },
  {
    id: '3',
    src: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&auto=format&fit=crop&q=80',
    title: 'RETRO_ARCADE // SYNTHWAVE VIBE',
    caption: '80s arcade synthwave aesthetics with CRT scanline reflections.',
  },
];

function MasterGuideWebsite() {
  const { theme: currentTheme, setTheme: setMoonTheme } = useMoonTheme();
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
  const [pickedColor, setPickedColor] = useState('#FF4D00');
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [isNavbarMenuOpen, setIsNavbarMenuOpen] = useState(false);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const { addToast } = useToast();
  const [activeTabId, setActiveTabId] = useState('components-catalog');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [demoTabsVariant, setDemoTabsVariant] = useState<TabsVariant>('inferno');

  const handleGlobalSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim() && activeTabId !== 'components-catalog') {
      setActiveTabId('components-catalog');
    }
  };

  const matchesSearch = (keywords: string, category?: string) => {
    if (selectedCategory !== 'all' && category && category !== selectedCategory) {
      return false;
    }
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase().trim();
    return keywords.toLowerCase().includes(q);
  };

  const handleThemeChange = (newTheme: ThemeName) => {
    setMoonTheme(newTheme);
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
      <a href="#main-tabs" className="skip-link">Skip to main content</a>
      {isMatrixActive && <MatrixRain />}
      <Stack gap="2.5rem" style={{ position: 'relative', zIndex: 1 }}>
        {isCRTActive && <CRTEffect />}

        {/* Responsive Cyberpunk Navbar Primitive */}
        <Navbar variant="inferno" isSticky={false} className="header-nav">
          <NavbarBrand>
            <div className="header-brand">
              <img src={`${import.meta.env.BASE_URL}favicon.svg`} alt="Moon-Inferno Favicon" style={{ height: '28px', width: '28px', flexShrink: 0 }} />
              <h1 className="brand-title">Moon-Inferno</h1>
              <Badge variant="pixel" icon={<SparklesIcon size={12} />}>v0.3.3</Badge>
            </div>
          </NavbarBrand>

          <NavbarContent align="end">
            <NavbarItem className="header-search-container">
              <SearchBar
                size="sm"
                variant="inferno"
                placeholder="Search primitives (Ctrl+K)..."
                value={searchQuery}
                onChange={handleGlobalSearch}
                shortcutKey="Ctrl+K"
              />
            </NavbarItem>

            <NavbarItem className="header-controls-toggles">
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
                  Matrix: {isMatrixActive ? 'ON' : 'OFF'}
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
                  CRT: {isCRTActive ? 'ON' : 'OFF'}
                </Button>
              </Tooltip>
            </NavbarItem>

            <NavbarItem>
              <div className="segmented-theme-group">
                <Button
                  size="sm"
                  variant={currentTheme === 'moon-inferno' ? 'inferno' : 'ghost'}
                  onClick={() => handleThemeChange('moon-inferno')}
                  leftIcon={<FlameIcon size={13} />}
                  style={{ padding: '0.25rem 0.6rem', fontSize: '0.75rem' }}
                >
                  Inferno
                </Button>
                <Button
                  size="sm"
                  variant={currentTheme === 'terminal' ? 'inferno' : 'ghost'}
                  onClick={() => handleThemeChange('terminal')}
                  leftIcon={<TerminalIcon size={13} />}
                  style={{ padding: '0.25rem 0.6rem', fontSize: '0.75rem' }}
                >
                  Terminal
                </Button>
                <Button
                  size="sm"
                  variant={currentTheme === 'y2k' ? 'inferno' : 'ghost'}
                  onClick={() => handleThemeChange('y2k')}
                  leftIcon={<SunIcon size={13} />}
                  style={{ padding: '0.25rem 0.6rem', fontSize: '0.75rem' }}
                >
                  Y2K
                </Button>
              </div>
            </NavbarItem>
          </NavbarContent>

          <NavbarMenuToggle
            isOpen={isNavbarMenuOpen}
            onToggle={() => setIsNavbarMenuOpen(!isNavbarMenuOpen)}
          />

          <NavbarMenu isOpen={isNavbarMenuOpen} onClose={() => setIsNavbarMenuOpen(false)}>
            <Stack gap="1rem">
              <SearchBar
                size="sm"
                variant="inferno"
                placeholder="Search 50+ primitives..."
                value={searchQuery}
                onChange={handleGlobalSearch}
                shortcutKey="Ctrl+K"
              />

              <Stack direction="row" gap="0.5rem">
                <Button
                  size="sm"
                  variant={isMatrixActive ? 'inferno' : 'outline'}
                  onClick={() => {
                    setIsMatrixActive(!isMatrixActive);
                    addToast(`Matrix Rain ${!isMatrixActive ? 'Enabled' : 'Disabled'}`, { variant: 'inferno' });
                  }}
                  leftIcon={<CodeIcon size={14} />}
                  style={{ flex: 1 }}
                >
                  Matrix: {isMatrixActive ? 'ON' : 'OFF'}
                </Button>

                <Button
                  size="sm"
                  variant={isCRTActive ? 'inferno' : 'outline'}
                  onClick={() => {
                    setIsCRTActive(!isCRTActive);
                    addToast(`CRT Shader ${!isCRTActive ? 'Enabled' : 'Disabled'}`, { variant: 'inferno' });
                  }}
                  leftIcon={<CpuIcon size={14} />}
                  style={{ flex: 1 }}
                >
                  CRT: {isCRTActive ? 'ON' : 'OFF'}
                </Button>
              </Stack>

              <div className="segmented-theme-group" style={{ width: '100%', display: 'flex' }}>
                <Button
                  size="sm"
                  variant={currentTheme === 'moon-inferno' ? 'inferno' : 'ghost'}
                  onClick={() => handleThemeChange('moon-inferno')}
                  leftIcon={<FlameIcon size={13} />}
                  style={{ padding: '0.25rem 0.6rem', fontSize: '0.75rem', flex: 1 }}
                >
                  Inferno
                </Button>
                <Button
                  size="sm"
                  variant={currentTheme === 'terminal' ? 'inferno' : 'ghost'}
                  onClick={() => handleThemeChange('terminal')}
                  leftIcon={<TerminalIcon size={13} />}
                  style={{ padding: '0.25rem 0.6rem', fontSize: '0.75rem', flex: 1 }}
                >
                  Terminal
                </Button>
                <Button
                  size="sm"
                  variant={currentTheme === 'y2k' ? 'inferno' : 'ghost'}
                  onClick={() => handleThemeChange('y2k')}
                  leftIcon={<SunIcon size={13} />}
                  style={{ padding: '0.25rem 0.6rem', fontSize: '0.75rem', flex: 1 }}
                >
                  Y2K
                </Button>
              </div>
            </Stack>
          </NavbarMenu>
        </Navbar>

        {/* Hero Section Banner */}
        <section className="hero-card">
          <Stack gap="1.25rem" align="center">
            <Badge variant="inferno" icon={<FlameIcon size={14} />}>THE EXPRESSIVE WEB UI FRAMEWORK & DESIGN SYSTEM</Badge>

            <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)', fontFamily: 'var(--mi-font-mono)', margin: 0, letterSpacing: '-0.02em' }}>
              Reclaim Expressive Web Design
            </h2>

            <p style={{ maxWidth: '780px', color: 'var(--mi-color-text-muted)', fontSize: '1.1rem', lineHeight: '1.6', margin: 0 }}>
              Moon-Inferno is an expressive React UI framework created by <strong>Biagio Scaglia</strong> for retro, Y2K, CRT, cyberpunk, pixel art, and experimental web applications. Built with WCAG 2.1 AA accessibility principles at its core with zero SaaS sterility.
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

            {/* Hero Quickstart Single Line Command */}
            <div style={{ width: '100%', maxWidth: '540px', margin: '0.75rem auto 0 auto' }}>
              <CodeBlock filename="Quickstart (All-In-One Package)" code="npm install moon-inferno" />
            </div>
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
          <span style={{ color: 'var(--mi-color-primary)', fontWeight: 'bold' }}>MOON-INFERNO v0.2.1 IS LIVE ON NPM</span>
          <span>--</span>
          <span>npm install moon-inferno</span>
          <span>--</span>
          <span>npm install @moon-inferno/react @moon-inferno/themes @moon-inferno/icons</span>
          <span>--</span>
          <span>pnpm add @moon-inferno/react @moon-inferno/themes @moon-inferno/icons</span>
          <span>--</span>
          <span style={{ color: 'var(--mi-color-primary)' }}>100% WCAG 2.1 AA ACCESSIBLE</span>
          <span>--</span>
          <span>CREATOR: BIAGIO SCAGLIA</span>
          <span>--</span>
        </Marquee>

        {/* Master Documentation & Portal Layout */}
        <div className="doc-layout">
          <DocSidebarNav
            activeTabId={activeTabId}
            onSelectTab={(tabId) => {
              setActiveTabId(tabId);
              const el = document.getElementById('main-tabs');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            activeCategory={selectedCategory}
            onSelectCategory={(cat) => {
              setSelectedCategory(cat);
              const el = document.getElementById('main-tabs');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
          />

          <main id="main-tabs" className="doc-main doc-reader">
            <Tabs
              activeTabId={activeTabId}
              onChange={setActiveTabId}
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
                        <CodeBlock filename="npm (standard)" code="npm install @moon-inferno/core @moon-inferno/react @moon-inferno/themes @moon-inferno/icons" />
                        <CodeBlock filename="pnpm (monorepo)" code="pnpm add @moon-inferno/core @moon-inferno/react @moon-inferno/themes @moon-inferno/icons" />
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
                    {/* Live Search & Filter Bar Card */}
                    <Card style={{ border: '2px solid var(--mi-color-primary, #FF4D00)', backgroundColor: '#0D090A' }}>
                      <CardBody style={{ padding: '1.25rem' }}>
                        <Stack gap="1rem">
                          <Stack direction="row" align="center" justify="between" wrap gap="1rem">
                            <Stack direction="row" align="center" gap="0.5rem">
                              <SearchIcon size={20} color="var(--mi-color-primary, #FF4D00)" />
                              <strong style={{ fontSize: '1rem', fontFamily: 'var(--mi-font-mono, monospace)', color: 'var(--mi-color-primary, #FF4D00)' }}>
                                SEARCH & FILTER PRIMITIVES
                              </strong>
                            </Stack>
                            {searchQuery && (
                              <Button
                                size="sm"
                                variant="ghost"
                                onClick={() => setSearchQuery('')}
                                leftIcon={<TrashIcon size={14} />}
                              >
                                Clear Filter
                              </Button>
                            )}
                          </Stack>

                          <SearchBar
                            id="catalog-search-input"
                            placeholder="Type to filter 50+ components (e.g. Table, Slider, SearchBar, Glitch, Canvas, RPG...)"
                            value={searchQuery}
                            onChange={handleGlobalSearch}
                            variant="inferno"
                            shortcutKey="Ctrl+K"
                          />

                          {/* Quick Category Filter Chips */}
                          <Stack direction="row" gap="0.4rem" wrap style={{ marginTop: '0.25rem' }}>
                            {[
                              { label: 'ALL (50+)', query: '', icon: <LayersIcon size={14} /> },
                              { label: 'MOON PRIMITIVES', query: 'Moon', icon: <FlameIcon size={14} /> },
                              { label: 'TEXT & FX', query: 'Glitch', icon: <SparklesIcon size={14} /> },
                              { label: 'BUTTONS & NAV', query: 'Button', icon: <ZapIcon size={14} /> },
                              { label: 'FORMS & SLIDER', query: 'Slider', icon: <SettingsIcon size={14} /> },
                              { label: 'DATA & TABLES', query: 'Table', icon: <CodeIcon size={14} /> },
                              { label: 'CANVAS & NOTEPAD', query: 'Canvas', icon: <TerminalIcon size={14} /> },
                              { label: 'CHARTS & COLOR', query: 'Chart', icon: <CpuIcon size={14} /> },
                            ].map((f) => (
                              <Button
                                key={f.label}
                                size="sm"
                                variant={searchQuery.toLowerCase() === f.query.toLowerCase() ? 'inferno' : 'ghost'}
                                onClick={() => handleGlobalSearch(f.query)}
                                leftIcon={f.icon}
                                style={{ fontSize: '0.72rem', padding: '0.2rem 0.55rem' }}
                              >
                                {f.label}
                              </Button>
                            ))}
                          </Stack>
                        </Stack>
                      </CardBody>
                    </Card>

                    {/* Typography & Custom Text FX */}
                    {matchesSearch('glitchtext pixeltext neontext typingtext marquee text custom fx typography headlines') && (
                    <Card>
                      <CardHeader>
                        <Stack direction="row" align="center" gap="0.5rem">
                          <SparklesIcon size={18} /> Custom Text Primitives & Tickers
                        </Stack>
                      </CardHeader>
                      <CardBody>
                        <Stack gap="1.5rem">
                          <Stack gap="0.5rem">
                            <span style={{ fontSize: '0.875rem', fontWeight: 600, color: '#F8FAFC' }}>GLITCH TEXT: Animated RGB-split glitch headline component.</span>
                            <GlitchText text="CYBERPUNK INFERNO" as="h3" style={{ fontSize: '1.5rem' }} />
                          </Stack>

                          <Stack gap="0.5rem">
                            <span style={{ fontSize: '0.875rem', fontWeight: 600, color: '#F8FAFC' }}>PIXEL TEXT: Stepped pixelated retro typography with hard pixel shadow.</span>
                            <Stack direction="row" align="center" gap="1rem" wrap>
                              <PixelText text="LEVEL 01" size="sm" />
                              <PixelText text="GAME OVER" size="md" />
                              <PixelText text="PRESS START" size="lg" />
                              <PixelText text="INFERNO" size="xl" />
                            </Stack>
                          </Stack>

                          <Stack gap="0.5rem">
                            <span style={{ fontSize: '0.875rem', fontWeight: 600, color: '#F8FAFC' }}>NEON TEXT: Glowing pulsing cathode tube text with optional flicker.</span>
                            <Stack direction="row" align="center" gap="1.5rem" wrap>
                              <NeonText text="INFERNO" color="inferno" flicker />
                              <NeonText text="CYBERPUNK" color="cyan" />
                              <NeonText text="MATRIX" color="green" />
                              <NeonText text="SYNTHWAVE" color="magenta" flicker />
                            </Stack>
                          </Stack>

                          <Stack gap="0.5rem">
                            <span style={{ fontSize: '0.875rem', fontWeight: 600, color: '#F8FAFC' }}>TYPING EFFECT: Typewriter animation with blinking terminal cursor.</span>
                            <TypingText text="Establishing encrypted link to satellite node 094..." speed={40} cursorChar="█" />
                          </Stack>

                          <Stack gap="0.5rem">
                            <span style={{ fontSize: '0.875rem', fontWeight: 600, color: '#F8FAFC' }}>MARQUEE TICKER: Infinite continuous scrolling marquee primitive.</span>
                            <Marquee speed={18} variant="pixel">
                              <span>RETRO PRIMITIVES</span> - <span>ACCESSIBLE TICKER</span> - <span>MOON-INFERNO</span>
                            </Marquee>
                          </Stack>

                          <CodeBlock
                            collapsible
                            title="FULL COPY-PASTE CODE SNIPPET (TYPOGRAPHY & TEXT FX — ALL VARIANTS)"
                            code={`import { GlitchText, PixelText, NeonText, TypingText, Marquee } from '@moon-inferno/react';

// 1. GlitchText (RGB-split animated headline with custom HTML element tag)
<GlitchText text="CYBERPUNK INFERNO" as="h3" style={{ fontSize: '1.5rem' }} />

// 2. PixelText (Stepped pixelated retro typography in sizes sm | md | lg | xl)
<PixelText text="LEVEL 01" size="sm" />
<PixelText text="GAME OVER" size="md" />
<PixelText text="PRESS START" size="lg" />
<PixelText text="SOLAR INFERNO" size="xl" />

// 3. NeonText (Cathode tube glow in colors inferno | cyan | green | magenta with flicker)
<NeonText text="INFERNO" color="inferno" flicker />
<NeonText text="CYBERPUNK" color="cyan" />
<NeonText text="MATRIX" color="green" />
<NeonText text="SYNTHWAVE" color="magenta" flicker />

// 4. TypingText (Typewriter reveal animation with custom speed and blinking cursor)
<TypingText text="Establishing encrypted link to satellite node 094..." speed={40} cursorChar="█" />

// 5. Marquee Ticker (Continuous infinite scroll ticker in variants pixel | inferno | outline)
<Marquee speed={18} variant="pixel">
  <span>RETRO PRIMITIVES</span> - <span>ACCESSIBLE TICKER</span> - <span>MOON-INFERNO</span>
</Marquee>`}
                          />
                        </Stack>
                      </CardBody>
                    </Card>
                    )}

                    {/* Buttons & Actions */}
                    {matchesSearch('button breadcrumbs pagination action triggers buttons interactive tactile') && (
                    <Card>
                      <CardHeader>
                        <Stack direction="row" align="center" gap="0.5rem">
                          <ZapIcon size={18} /> Buttons & Action Triggers
                        </Stack>
                      </CardHeader>
                      <CardBody>
                        <Stack gap="1.25rem">
                          <p style={{ margin: 0, fontSize: '0.875rem', fontWeight: 600, color: '#F8FAFC' }}>
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
                          <CodeBlock
                            collapsible
                            title="FULL COPY-PASTE CODE SNIPPET (BUTTON VARIANTS, SIZES & STATES)"
                            code={`import { Button } from '@moon-inferno/react';
import { FlameIcon, ShieldIcon, SparklesIcon, GamepadIcon, LockIcon } from '@moon-inferno/icons';

// 1. Button Variants (inferno | outline | ghost | pixel | danger | success | warning | info)
<Button variant="inferno" leftIcon={<FlameIcon size={16} />}>Inferno Variant</Button>
<Button variant="outline" leftIcon={<ShieldIcon size={16} />}>Outline Variant</Button>
<Button variant="ghost" leftIcon={<SparklesIcon size={16} />}>Ghost Variant</Button>
<Button variant="pixel" leftIcon={<GamepadIcon size={16} />}>Pixel Variant</Button>
<Button variant="danger">Danger Action</Button>
<Button variant="success">Success Action</Button>

// 2. Button Sizes (sm | md | lg)
<Button size="sm" variant="inferno">Small (32px)</Button>
<Button size="md" variant="inferno">Medium (42px)</Button>
<Button size="lg" variant="inferno">Large (50px)</Button>

// 3. Button Interactive States (isLoading | disabled)
<Button isLoading variant="inferno">Processing...</Button>
<Button disabled variant="outline" leftIcon={<LockIcon size={16} />}>Disabled State</Button>`}
                          />
                        </Stack>
                      </CardBody>
                    </Card>
                    )}

                    {/* Accessible Navbar Component */}
                    {matchesSearch('navbar navbarbrand navbarcontent navbaritem navigation header links drawer hamburger') && (
                    <Card>
                      <CardHeader>
                        <Stack direction="row" align="center" gap="0.5rem">
                          <LayersIcon size={18} /> Navbar Navigation Bar Primitives
                        </Stack>
                      </CardHeader>
                      <CardBody>
                        <Stack gap="1.5rem">
                          <p style={{ margin: 0, fontSize: '0.875rem', fontWeight: 600, color: '#F8FAFC' }}>
                            Responsive navigation header supporting brand, links, action buttons, and mobile hamburger drawer.
                          </p>
                          <Navbar variant="inferno" isSticky={false}>
                            <NavbarBrand>
                              <FlameIcon size={20} style={{ color: 'var(--moon-color-primary, #ff4444)' }} />
                              <span>INFERNO_NAV</span>
                            </NavbarBrand>
                            <NavbarContent align="end">
                              <NavbarItem isActive>Dashboard</NavbarItem>
                              <NavbarItem>Telemetry</NavbarItem>
                              <NavbarItem>Docs</NavbarItem>
                              <NavbarItem>
                                <Button size="sm" variant="inferno">Connect</Button>
                              </NavbarItem>
                            </NavbarContent>
                            <NavbarMenuToggle
                              isOpen={isNavbarMenuOpen}
                              onToggle={() => setIsNavbarMenuOpen(!isNavbarMenuOpen)}
                            />
                            {isNavbarMenuOpen && (
                              <NavbarMenu isOpen={isNavbarMenuOpen} onClose={() => setIsNavbarMenuOpen(false)}>
                                <NavbarItem isActive>Dashboard</NavbarItem>
                                <NavbarItem>Telemetry</NavbarItem>
                                <NavbarItem>Docs</NavbarItem>
                                <Button size="sm" variant="inferno" style={{ marginTop: '0.5rem' }}>Connect Wallet</Button>
                              </NavbarMenu>
                            )}
                          </Navbar>
                          <CodeBlock
                            collapsible
                            title="FULL COPY-PASTE CODE SNIPPET (NAVBAR, BRAND, ITEMS & MOBILE DRAWER)"
                            code={`import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, Button } from '@moon-inferno/react';
import { FlameIcon } from '@moon-inferno/icons';

// 1. Full Responsive Desktop & Mobile Drawer Navbar
export function HeaderNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Navbar variant="inferno" isSticky>
      <NavbarBrand>
        <FlameIcon size={20} color="#FF4D00" />
        <span>INFERNO_NAV</span>
      </NavbarBrand>

      <NavbarContent align="end">
        <NavbarItem isActive>Dashboard</NavbarItem>
        <NavbarItem>Telemetry</NavbarItem>
        <NavbarItem>Docs</NavbarItem>
        <NavbarItem>
          <Button size="sm" variant="inferno">Connect Wallet</Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenuToggle isOpen={isOpen} onToggle={() => setIsOpen(!isOpen)} />

      {isOpen && (
        <NavbarMenu isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <NavbarItem isActive>Dashboard</NavbarItem>
          <NavbarItem>Telemetry</NavbarItem>
          <NavbarItem>Docs</NavbarItem>
          <Button size="sm" variant="inferno" style={{ marginTop: '0.5rem' }}>Connect Wallet</Button>
        </NavbarMenu>
      )}
    </Navbar>
  );
}`}
                          />
                        </Stack>
                      </CardBody>
                    </Card>
                    )}

                    {/* Accessible DatePicker Component */}
                    {matchesSearch('datepicker calendar date time schedule launch picker') && (
                    <Card>
                      <CardHeader>
                        <Stack direction="row" align="center" gap="0.5rem">
                          <SettingsIcon size={18} /> DatePicker & Calendar Primitives
                        </Stack>
                      </CardHeader>
                      <CardBody>
                        <Stack gap="1.5rem">
                          <p style={{ margin: 0, fontSize: '0.875rem', fontWeight: 600, color: '#F8FAFC' }}>
                            Full WCAG 2.1 AA keyboard grid navigation (Arrow keys, PageUp/Down, Home/End, Enter, Escape).
                          </p>
                          <Stack direction="row" gap="2rem" wrap align="start">
                            <DatePicker
                              label="Launch Date (Inferno)"
                              variant="inferno"
                              value={selectedDate}
                              onChange={(date) => {
                                setSelectedDate(date);
                                addToast(`Selected launch date: ${date.toLocaleDateString()}`, { variant: 'success' });
                              }}
                            />
                            <DatePicker
                              label="Scheduled Maintenance (Pixel)"
                              variant="pixel"
                              placeholder="Choose date..."
                            />
                          </Stack>
                          <CodeBlock
                            collapsible
                            title="FULL COPY-PASTE CODE SNIPPET (DATEPICKER & CALENDAR VARIANTS)"
                            code={`import { DatePicker, Calendar } from '@moon-inferno/react';

// 1. DatePicker with label, variant (inferno | pixel | outline) and onChange handler
<DatePicker
  label="Launch Date"
  variant="inferno"
  value={selectedDate}
  onChange={(date: Date) => setSelectedDate(date)}
/>

// 2. Pixel Variant DatePicker
<DatePicker
  label="Scheduled Maintenance"
  variant="pixel"
  placeholder="Choose date..."
/>

// 3. Standalone Inline Calendar Grid
<Calendar
  value={selectedDate}
  onChange={(date: Date) => setSelectedDate(date)}
/>`}
                          />
                        </Stack>
                      </CardBody>
                    </Card>
                    )}

                    {/* HoloCard 3D Parallax Card */}
                    {matchesSearch('holocard 3d parallax tilt card holographic glare hover') && (
                    <Card>
                      <CardHeader>
                        <Stack direction="row" align="center" gap="0.5rem">
                          <SparklesIcon size={18} /> HoloCard 3D Parallax Tilt Primitives
                        </Stack>
                      </CardHeader>
                      <CardBody>
                        <Stack gap="1.5rem">
                          <p style={{ margin: 0, fontSize: '0.875rem', fontWeight: 600, color: '#F8FAFC' }}>
                            Interactive 3D card with cursor-based parallax tilt, dynamic holographic glare, and prefers-reduced-motion fallback.
                          </p>
                          <Grid minChildWidth="260px" gap="1.5rem">
                            <HoloCard variant="inferno">
                              <Stack gap="0.75rem">
                                <Badge variant="inferno">SOLAR_INFERNO</Badge>
                                <h4 style={{ margin: 0, fontSize: '1.1rem' }}>Cybernetic Core Node</h4>
                                <p style={{ margin: 0, fontSize: '0.85rem', color: '#F8FAFC' }}>
                                  Hover cursor to tilt and observe dynamic holographic iridescence reflection.
                                </p>
                              </Stack>
                            </HoloCard>

                            <HoloCard variant="cyber">
                              <Stack gap="0.75rem">
                                <Badge variant="pixel">CYBER_GRID</Badge>
                                <h4 style={{ margin: 0, fontSize: '1.1rem' }}>Quantum Stream</h4>
                                <p style={{ margin: 0, fontSize: '0.85rem', color: '#F8FAFC' }}>
                                  High-contrast neon cyan border and glowing glare reflection.
                                </p>
                              </Stack>
                            </HoloCard>
                          </Grid>
                          <CodeBlock
                            collapsible
                            title="FULL COPY-PASTE CODE SNIPPET (HOLOCARD VARIANTS & PARALLAX PROPS)"
                            code={`import { HoloCard, Badge, Stack } from '@moon-inferno/react';

// 1. Inferno Variant 3D Parallax Card
<HoloCard variant="inferno" maxTilt={15} glareOpacity={0.4}>
  <Stack gap="0.75rem">
    <Badge variant="inferno">SOLAR_INFERNO</Badge>
    <h4>Cybernetic Core Node</h4>
    <p>Hover cursor to tilt and observe dynamic holographic reflection.</p>
  </Stack>
</HoloCard>

// 2. Cyber Variant 3D Parallax Card
<HoloCard variant="cyber" maxTilt={20}>
  <Stack gap="0.75rem">
    <Badge variant="pixel">CYBER_GRID</Badge>
    <h4>Quantum Stream</h4>
    <p>High-contrast neon cyan border and glowing glare.</p>
  </Stack>
</HoloCard>`}
                          />
                        </Stack>
                      </CardBody>
                    </Card>
                    )}

                    {/* CommandPalette Component Trigger */}
                    {matchesSearch('commandpalette cmd+k ctrl+k modal search palette shortcut command') && (
                    <Card>
                      <CardHeader>
                        <Stack direction="row" align="center" gap="0.5rem">
                          <TerminalIcon size={18} /> CommandPalette (Cmd+K Modal)
                        </Stack>
                      </CardHeader>
                      <CardBody>
                        <Stack gap="1.5rem">
                          <p style={{ margin: 0, fontSize: '0.875rem', fontWeight: 600, color: '#F8FAFC' }}>
                            Modal search palette triggered via <code>Cmd+K</code> or <code>Ctrl+K</code> with full keyboard selection and ARIA combobox pattern.
                          </p>
                          <Stack direction="row" align="center" gap="1rem">
                            <Button
                              variant="inferno"
                              leftIcon={<TerminalIcon size={16} />}
                              onClick={() => setIsCommandPaletteOpen(true)}
                            >
                              Open Command Palette (Cmd+K)
                            </Button>
                          </Stack>
                          <CommandPalette
                            isOpen={isCommandPaletteOpen}
                            onClose={() => setIsCommandPaletteOpen(false)}
                            items={[
                              {
                                id: 'theme-inferno',
                                label: 'Switch Theme: Inferno',
                                group: 'Themes',
                                shortcut: 'Alt+1',
                                onSelect: () => handleThemeChange('moon-inferno'),
                              },
                              {
                                id: 'theme-terminal',
                                label: 'Switch Theme: Terminal Green',
                                group: 'Themes',
                                shortcut: 'Alt+2',
                                onSelect: () => handleThemeChange('terminal'),
                              },
                              {
                                id: 'theme-y2k',
                                label: 'Switch Theme: Y2K Cyber',
                                group: 'Themes',
                                shortcut: 'Alt+3',
                                onSelect: () => handleThemeChange('y2k'),
                              },
                              {
                                id: 'toggle-crt',
                                label: 'Toggle CRT Shader Effect',
                                group: 'Display FX',
                                shortcut: 'Ctrl+Shift+C',
                                onSelect: () => setIsCRTActive(!isCRTActive),
                              },
                              {
                                id: 'toggle-matrix',
                                label: 'Toggle Matrix Rain Animation',
                                group: 'Display FX',
                                shortcut: 'Ctrl+Shift+M',
                                onSelect: () => setIsMatrixActive(!isMatrixActive),
                              },
                            ]}
                          />
                          <CodeBlock
                            collapsible
                            title="FULL COPY-PASTE CODE SNIPPET (COMMANDPALETTE SETUP & SHORTCUTS)"
                            code={`import { useState } from 'react';
import { CommandPalette, Button } from '@moon-inferno/react';
import { TerminalIcon } from '@moon-inferno/icons';

export function CommandPaletteDemo() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button variant="inferno" onClick={() => setIsOpen(true)}>
        Open Command Palette (Cmd+K)
      </Button>

      <CommandPalette
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        items={[
          {
            id: 'theme-inferno',
            label: 'Switch Theme: Inferno',
            group: 'Themes',
            shortcut: 'Alt+1',
            onSelect: () => console.log('Theme changed')
          },
          {
            id: 'toggle-crt',
            label: 'Toggle CRT Shader Effect',
            group: 'Display FX',
            shortcut: 'Ctrl+Shift+C',
            onSelect: () => console.log('CRT toggled')
          }
        ]}
      />
    </>
  );
}`}
                          />
                        </Stack>
                      </CardBody>
                    </Card>
                    )}

                    {/* Accessible DropdownMenu Component */}
                    {matchesSearch('dropdown dropdownmenu dropdownsection dropdownitem dropdowndivider popover menu') && (
                    <Card>
                      <CardHeader>
                        <Stack direction="row" align="center" gap="0.5rem">
                          <LayersIcon size={18} /> DropdownMenu Floating Popover Primitives
                        </Stack>
                      </CardHeader>
                      <CardBody>
                        <Stack gap="1.5rem">
                          <p style={{ margin: 0, fontSize: '0.875rem', fontWeight: 600, color: '#F8FAFC' }}>
                            WAI-ARIA menu popover supporting items, sections, dividers, custom icons, and keyboard navigation.
                          </p>
                          <Stack direction="row" gap="1.5rem" wrap align="center">
                            <Dropdown variant="inferno">
                              <DropdownTrigger>
                                <Button variant="inferno" leftIcon={<SettingsIcon size={16} />}>
                                  Quick Actions Menu
                                </Button>
                              </DropdownTrigger>
                              <DropdownMenu>
                                <DropdownSection title="System Controls">
                                  <DropdownItem icon={<FlameIcon size={14} />} onSelect={() => handleThemeChange('moon-inferno')}>
                                    Set Theme: Inferno
                                  </DropdownItem>
                                  <DropdownItem icon={<TerminalIcon size={14} />} onSelect={() => handleThemeChange('terminal')}>
                                    Set Theme: Terminal
                                  </DropdownItem>
                                  <DropdownItem icon={<SunIcon size={14} />} onSelect={() => handleThemeChange('y2k')}>
                                    Set Theme: Y2K
                                  </DropdownItem>
                                </DropdownSection>
                                <DropdownDivider />
                                <DropdownSection title="Display FX">
                                  <DropdownItem icon={<CodeIcon size={14} />} onSelect={() => setIsMatrixActive(!isMatrixActive)}>
                                    Toggle Matrix Rain
                                  </DropdownItem>
                                  <DropdownItem icon={<CpuIcon size={14} />} onSelect={() => setIsCRTActive(!isCRTActive)}>
                                    Toggle CRT Shader
                                  </DropdownItem>
                                </DropdownSection>
                                <DropdownDivider />
                                <DropdownItem icon={<TrashIcon size={14} />} destructive onSelect={() => addToast('System cache cleared', { variant: 'error' })}>
                                  Clear Cache
                                </DropdownItem>
                              </DropdownMenu>
                            </Dropdown>

                            <Dropdown variant="pixel" align="end">
                              <DropdownTrigger>
                                <Button variant="pixel" leftIcon={<UserIcon size={16} />}>
                                  User Account
                                </Button>
                              </DropdownTrigger>
                              <DropdownMenu>
                                <DropdownItem icon={<UserIcon size={14} />}>Profile Settings</DropdownItem>
                                <DropdownItem icon={<LockIcon size={14} />}>Security & Keys</DropdownItem>
                                <DropdownDivider />
                                <DropdownItem icon={<CloseIcon size={14} />} destructive>Log Out</DropdownItem>
                              </DropdownMenu>
                            </Dropdown>
                          </Stack>
                          <CodeBlock
                            collapsible
                            title="FULL COPY-PASTE CODE SNIPPET (DROPDOWN VARIANTS, SECTIONS & DESTRUCTIVE ITEMS)"
                            code={`import { Dropdown, DropdownTrigger, DropdownMenu, DropdownSection, DropdownItem, DropdownDivider, Button } from '@moon-inferno/react';
import { SettingsIcon, FlameIcon, TerminalIcon, SunIcon, TrashIcon } from '@moon-inferno/icons';

// 1. Inferno Variant Dropdown with Sections & Dividers
<Dropdown variant="inferno">
  <DropdownTrigger>
    <Button variant="inferno" leftIcon={<SettingsIcon size={16} />}>Quick Actions</Button>
  </DropdownTrigger>

  <DropdownMenu>
    <DropdownSection title="System Controls">
      <DropdownItem icon={<FlameIcon size={14} />} onSelect={() => console.log('Inferno')}>Set Theme: Inferno</DropdownItem>
      <DropdownItem icon={<TerminalIcon size={14} />} onSelect={() => console.log('Terminal')}>Set Theme: Terminal</DropdownItem>
    </DropdownSection>

    <DropdownDivider />

    <DropdownItem icon={<TrashIcon size={14} />} destructive onSelect={() => console.log('Clear')}>
      Clear System Cache
    </DropdownItem>
  </DropdownMenu>
</Dropdown>`}
                          />
                        </Stack>
                      </CardBody>
                    </Card>
                    )}

                    {/* Interactive PieChart Component */}
                    {matchesSearch('piechart donut chart visualization graph data percentage svg') && (
                    <Card>
                      <CardHeader>
                        <Stack direction="row" align="center" gap="0.5rem">
                          <CpuIcon size={18} /> PieChart & Donut Chart Visualizer
                        </Stack>
                      </CardHeader>
                      <CardBody>
                        <Stack gap="1.5rem">
                          <p style={{ margin: 0, fontSize: '0.875rem', fontWeight: 600, color: '#F8FAFC' }}>
                            SVG-based pie & donut chart visualization with hover slice expansion, percentage calculation, and accessible table summary.
                          </p>
                          <Grid minChildWidth="260px" gap="2rem">
                            <Stack gap="1rem" align="center">
                              <h5 style={{ margin: 0, fontSize: '0.9rem', color: '#F8FAFC' }}>Inferno Donut Chart</h5>
                              <PieChart
                                donut
                                size={180}
                                centerValue="100%"
                                centerText="ALLOCATED"
                                data={[
                                  { label: 'Cyberpunk UI', value: 45, color: '#FF4D00' },
                                  { label: 'Terminal Core', value: 30, color: '#00FF66' },
                                  { label: 'Y2K Theme', value: 15, color: '#00E5FF' },
                                  { label: 'Pixel Assets', value: 10, color: '#FF00A0' },
                                ]}
                              />
                            </Stack>

                            <Stack gap="1rem" align="center">
                              <h5 style={{ margin: 0, fontSize: '0.9rem', color: '#F8FAFC' }}>Solid Pie Chart</h5>
                              <PieChart
                                donut
                                size={180}
                                centerValue="100%"
                                centerText="ALLOCATED"
                                data={[
                                  { label: 'Cyberpunk UI', value: 45, color: '#FF4D00' },
                                  { label: 'Terminal Core', value: 30, color: '#00FF66' },
                                  { label: 'Y2K Theme', value: 15, color: '#00E5FF' },
                                  { label: 'Pixel Assets', value: 10, color: '#FF00A0' },
                                ]}
                              />
                            </Stack>

                            <Stack gap="1rem" align="center">
                              <h5 style={{ margin: 0, fontSize: '0.9rem', color: 'var(--mi-color-text-muted)' }}>Solid Pie Chart</h5>
                              <PieChart
                                size={180}
                                data={[
                                  { label: 'System Memory', value: 60, color: '#FF4D00' },
                                  { label: 'GPU VRAM', value: 25, color: '#9D00FF' },
                                  { label: 'Cache Storage', value: 15, color: '#FFD700' },
                                ]}
                              />
                            </Stack>
                          </Grid>
                          <CodeBlock filename="PieChart.snippet.tsx" code={`<PieChart\n  donut\n  size={180}\n  centerValue="100%"\n  centerText="ALLOCATED"\n  data={[\n    { label: 'Cyberpunk UI', value: 45, color: '#FF4D00' },\n    { label: 'Terminal Core', value: 30, color: '#00FF66' }\n  ]}\n/>`} />
                        </Stack>
                      </CardBody>
                    </Card>
                    )}

                    {/* Cyberpunk ColorPicker Component */}
                    <Card>
                      <CardHeader>
                        <Stack direction="row" align="center" gap="0.5rem">
                          <SparklesIcon size={18} /> ColorPicker Palette Primitives
                        </Stack>
                      </CardHeader>
                      <CardBody>
                        <Stack gap="1.5rem">
                          <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--mi-color-text-muted)' }}>
                            Cyberpunk color picker with preset swatches, native color trigger, hex text input, and live color preview.
                          </p>
                          <Stack direction="row" gap="2rem" wrap align="center">
                            <ColorPicker
                              label="ACCENT COLOR"
                              variant="inferno"
                              value={pickedColor}
                              onChange={(c: string) => {
                                setPickedColor(c);
                                addToast(`Color updated: ${c}`, { variant: 'info' });
                              }}
                            />
                            <div
                              style={{
                                width: '120px',
                                height: '54px',
                                backgroundColor: pickedColor,
                                borderRadius: '6px',
                                border: '2px solid rgba(255, 255, 255, 0.2)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontWeight: 'bold',
                                color: '#000',
                                textShadow: '0 0 2px #fff',
                                fontFamily: 'var(--mi-font-mono)',
                                fontSize: '0.8rem',
                              }}
                            >
                              {pickedColor}
                            </div>
                          </Stack>
                          <CodeBlock filename="ColorPicker.snippet.tsx" code={`<ColorPicker\n  label="ACCENT COLOR"\n  variant="inferno"\n  value={pickedColor}\n  onChange={(hex) => setPickedColor(hex)}\n/>`} />
                        </Stack>
                      </CardBody>
                    </Card>

                    {/* Cyberpunk Table Component */}
                    <Card>
                      <CardHeader>
                        <Stack direction="row" align="center" gap="0.5rem">
                          <LayersIcon size={18} /> Table & Data Grid Primitives
                        </Stack>
                      </CardHeader>
                      <CardBody>
                        <Stack gap="1.5rem">
                          <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--mi-color-text-muted)' }}>
                            Cyberpunk data table with striped rows, hover highlighting, and semantic HTML5 WAI-ARIA accessibility.
                          </p>
                          <Table variant="inferno" striped hoverable>
                            <TableCaption>System Node Cluster Status Log - Updated live</TableCaption>
                            <TableHeader>
                              <TableRow>
                                <TableHead>NODE ID</TableHead>
                                <TableHead>SUBSYSTEM</TableHead>
                                <TableHead>STATUS</TableHead>
                                <TableHead>LATENCY</TableHead>
                              </TableRow>
                            </TableHeader>
                            <TableBody>
                              <TableRow>
                                <TableCell style={{ fontWeight: 'bold' }}>#NODE-01</TableCell>
                                <TableCell>Neural Matrix Core</TableCell>
                                <TableCell><Badge variant="success" icon={<CheckIcon size={12} />}>ONLINE</Badge></TableCell>
                                <TableCell>12ms</TableCell>
                              </TableRow>
                              <TableRow>
                                <TableCell style={{ fontWeight: 'bold' }}>#NODE-02</TableCell>
                                <TableCell>CRT Shader Engine</TableCell>
                                <TableCell><Badge variant="inferno" icon={<FlameIcon size={12} />}>ACTIVE</Badge></TableCell>
                                <TableCell>18ms</TableCell>
                              </TableRow>
                              <TableRow>
                                <TableCell style={{ fontWeight: 'bold' }}>#NODE-03</TableCell>
                                <TableCell>Y2K Protocol Gateway</TableCell>
                                <TableCell><Badge variant="error" icon={<WarnIcon size={12} />}>WARNING</Badge></TableCell>
                                <TableCell>145ms</TableCell>
                              </TableRow>
                            </TableBody>
                          </Table>
                          <CodeBlock filename="Table.snippet.tsx" code={`<Table variant="inferno" striped hoverable>\n  <TableHeader>\n    <TableRow>\n      <TableHead>NODE ID</TableHead>\n      <TableHead>STATUS</TableHead>\n    </TableRow>\n  </TableHeader>\n  <TableBody>\n    <TableRow>\n      <TableCell>#NODE-01</TableCell>\n      <TableCell><Badge variant="success">ONLINE</Badge></TableCell>\n    </TableRow>\n  </TableBody>\n</Table>`} />
                        </Stack>
                      </CardBody>
                    </Card>

                    {/* CyberCanvas Drawing Tool */}
                    <Card>
                      <CardHeader>
                        <Stack direction="row" align="center" gap="0.5rem">
                          <CodeIcon size={18} /> CyberCanvas Interactive Drawing Primitive
                        </Stack>
                      </CardHeader>
                      <CardBody>
                        <Stack gap="1.5rem">
                          <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--mi-color-text-muted)' }}>
                            HTML5 drawing canvas with pixel grid overlay, neon color palette, eraser, clear tool, and PNG image export button.
                          </p>
                          <CyberCanvas height={280} gridOverlay strokeColor="#FF4D00" />
                          <CodeBlock filename="CyberCanvas.snippet.tsx" code={`<CyberCanvas height={280} gridOverlay strokeColor="#FF4D00" />`} />
                        </Stack>
                      </CardBody>
                    </Card>

                    {/* SheetEditor CRT Text Editor */}
                    <Card>
                      <CardHeader>
                        <Stack direction="row" align="center" gap="0.5rem">
                          <TerminalIcon size={18} /> SheetEditor CRT Text & Code Notepad
                        </Stack>
                      </CardHeader>
                      <CardBody>
                        <Stack gap="1.5rem">
                          <p style={{ margin: 0, fontSize: '0.875rem', fontWeight: 600, color: '#F8FAFC' }}>
                            Retro text editor notepad with real-time line numbering, word/char counter, copy text action, and markdown preview mode.
                          </p>
                          <SheetEditor
                            title="CYBER_LOG_NOTES.MD"
                            defaultValue={`# MOON-INFERNO CYBER LOG\n- All 50+ primitives compiled successfully.\n- Full WCAG 2.1 AA accessibility compliance.\n- Built by Biagio Scaglia.`}
                          />
                          <CodeBlock
                            collapsible
                            title="FULL COPY-PASTE CODE SNIPPET (SHEETEDITOR PROPS & MARKDOWN PREVIEW)"
                            code={`import { SheetEditor } from '@moon-inferno/react';

<SheetEditor
  title="CYBER_LOG_NOTES.MD"
  defaultValue="# MOON-INFERNO LOG\\n- Real-time line numbering\\n- Word/character counter\\n- Live markdown preview"
/>`}
                          />
                        </Stack>
                      </CardBody>
                    </Card>

                    {/* MoonTypewriterDialogue */}
                    <Card>
                      <CardHeader>
                        <Stack direction="row" align="center" gap="0.5rem">
                          <TerminalIcon size={18} /> MoonTypewriterDialogue (RPG Dialogue Box)
                        </Stack>
                      </CardHeader>
                      <CardBody>
                        <Stack gap="1.5rem">
                          <p style={{ margin: 0, fontSize: '0.875rem', fontWeight: 600, color: '#F8FAFC' }}>
                            Retro RPG typewriter dialogue box with gradual letter reveal. Features WAI-ARIA <code>aria-live="polite"</code> screen reader immediate text fallback.
                          </p>
                          <MoonTypewriterDialogue
                            speaker="CYBER_NAVIGATOR_AI"
                            avatar={<FlameIcon size={20} color="#FF4D00" />}
                            text="Welcome to Moon-Inferno! Every signature component is designed for 100% WCAG 2.1 AA accessibility and retro gaming aesthetics."
                            speed={25}
                          />
                          <CodeBlock
                            collapsible
                            title="FULL COPY-PASTE CODE SNIPPET (MOONTYPEWRITERDIALOGUE RPG PROPS)"
                            code={`import { MoonTypewriterDialogue } from '@moon-inferno/react';
import { FlameIcon } from '@moon-inferno/icons';

<MoonTypewriterDialogue
  speaker="CYBER_NAVIGATOR_AI"
  avatar={<FlameIcon size={20} color="#FF4D00" />}
  text="Welcome to Moon-Inferno! Built for WCAG 2.1 AA accessibility and gaming."
  speed={25}
/>`}
                          />
                        </Stack>
                      </CardBody>
                    </Card>

                    {/* MoonRPGGrid */}
                    <Card>
                      <CardHeader>
                        <Stack direction="row" align="center" gap="0.5rem">
                          <LayersIcon size={18} /> MoonRPGGrid (Inventory & NFT 2D Slot Grid)
                        </Stack>
                      </CardHeader>
                      <CardBody>
                        <Stack gap="1.5rem">
                          <p style={{ margin: 0, fontSize: '0.875rem', fontWeight: 600, color: '#F8FAFC' }}>
                            Pixel art 2D inventory slot grid with full keyboard arrow navigation, <code>Space/Enter</code> slot swapping, and live voice announcements for screen readers.
                          </p>
                          <MoonRPGGrid
                            columns={5}
                            totalSlots={10}
                            title="CYBERNETIC_INVENTORY"
                            items={[
                              { id: '1', name: 'Inferno Core', count: 1, icon: <FlameIcon size={24} color="#FF4D00" />, description: 'Overclocked quantum core module (+45 AP)' },
                              { id: '2', name: 'Lightning Cell', count: 5, icon: <ZapIcon size={24} color="#FFD700" />, description: 'High-voltage energy storage cell' },
                              { id: '3', name: 'Refresh Matrix', count: 2, icon: <RefreshIcon size={24} color="#00FF66" />, description: 'Subsystem reboot protocol token' },
                              { id: '4', name: 'Security Key', count: 1, icon: <CheckIcon size={24} color="#00E5FF" />, description: 'Encrypted Y2K mainframe clearance key' },
                            ]}
                          />
                          <CodeBlock
                            collapsible
                            title="FULL COPY-PASTE CODE SNIPPET (MOONRPGGRID 2D KEYBOARD INVENTORY)"
                            code={`import { MoonRPGGrid } from '@moon-inferno/react';
import { FlameIcon, ZapIcon, RefreshIcon, CheckIcon } from '@moon-inferno/icons';

<MoonRPGGrid
  columns={5}
  totalSlots={10}
  title="CYBERNETIC_INVENTORY"
  items={[
    { id: '1', name: 'Inferno Core', count: 1, icon: <FlameIcon size={24} color="#FF4D00" />, description: 'Overclocked quantum core' },
    { id: '2', name: 'Lightning Cell', count: 5, icon: <ZapIcon size={24} color="#FFD700" />, description: 'High-voltage energy cell' },
    { id: '3', name: 'Refresh Matrix', count: 2, icon: <RefreshIcon size={24} color="#00FF66" />, description: 'Reboot protocol' },
    { id: '4', name: 'Security Key', count: 1, icon: <CheckIcon size={24} color="#00E5FF" />, description: 'Y2K clearance key' }
  ]}
/>`}
                          />
                        </Stack>
                      </CardBody>
                    </Card>

                    {/* MoonHealthMeter */}
                    <Card>
                      <CardHeader>
                        <Stack direction="row" align="center" gap="0.5rem">
                          <CheckIcon size={18} /> MoonHealthMeter (Semantic Health & Mana Bars)
                        </Stack>
                      </CardHeader>
                      <CardBody>
                        <Stack gap="1.5rem">
                          <p style={{ margin: 0, fontSize: '0.875rem', fontWeight: 600, color: '#F8FAFC' }}>
                            Animated gaming health, mana, and shield meters built natively on HTML5 <code>&lt;meter&gt;</code> tags for live percentage reporting to screen readers.
                          </p>
                          <Stack gap="1rem">
                            <MoonHealthMeter type="health" value={85} max={100} label="HP (HEALTH)" />
                            <MoonHealthMeter type="mana" value={60} max={100} label="MP (MANA)" />
                            <MoonHealthMeter type="energy" value={95} max={100} label="STAMINA" />
                            <MoonHealthMeter type="shield" value={40} max={100} label="CYBER SHIELD" />
                          </Stack>
                          <CodeBlock
                            collapsible
                            title="FULL COPY-PASTE CODE SNIPPET (MOONHEALTHMETER TYPES: HEALTH, MANA, ENERGY, SHIELD)"
                            code={`import { MoonHealthMeter } from '@moon-inferno/react';

// Health (HP), Mana (MP), Energy (Stamina), and Cyber Shield Bars
<MoonHealthMeter type="health" value={85} max={100} label="HP (HEALTH)" />
<MoonHealthMeter type="mana" value={60} max={100} label="MP (MANA)" />
<MoonHealthMeter type="energy" value={95} max={100} label="STAMINA" />
<MoonHealthMeter type="shield" value={40} max={100} label="CYBER SHIELD" />`}
                          />
                        </Stack>
                      </CardBody>
                    </Card>

                    {/* MoonSafeGlitch */}
                    <Card>
                      <CardHeader>
                        <Stack direction="row" align="center" gap="0.5rem">
                          <SparklesIcon size={18} /> MoonSafeGlitch (Photosensitive-Safe Glitch)
                        </Stack>
                      </CardHeader>
                      <CardBody>
                        <Stack gap="1.5rem">
                          <p style={{ margin: 0, fontSize: '0.875rem', fontWeight: 600, color: '#F8FAFC' }}>
                            Cyberpunk RGB split glitch text that automatically disables intense flickering when <code>(prefers-reduced-motion: reduce)</code> is set.
                          </p>
                          <div style={{ fontSize: 'clamp(1rem, 4vw, 1.4rem)', textAlign: 'center', padding: '0.75rem', background: '#0A090D', borderRadius: '4px', maxWidth: '100%', overflow: 'hidden' }}>
                            <MoonSafeGlitch text="NEO_INFERNO_PROTOCOL" as="h3" style={{ margin: 0 }} />
                          </div>
                          <CodeBlock
                            collapsible
                            title="FULL COPY-PASTE CODE SNIPPET (MOONSAFEGLITCH ACCESSIBLE GLITCH)"
                            code={`import { MoonSafeGlitch } from '@moon-inferno/react';

<MoonSafeGlitch text="NEO_INFERNO_PROTOCOL" as="h3" />`}
                          />
                        </Stack>
                      </CardBody>
                    </Card>

                    {/* MoonConsoleLogger */}
                    <Card>
                      <CardHeader>
                        <Stack direction="row" align="center" gap="0.5rem">
                          <TerminalIcon size={18} /> MoonConsoleLogger (Live Stream Terminal Logger)
                        </Stack>
                      </CardHeader>
                      <CardBody>
                        <Stack gap="1.5rem">
                          <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--mi-color-text-muted)' }}>
                            Phosphor green CRT console logger for blockchain transactions or server logs with <code>aria-live="polite"</code> stream updates.
                          </p>
                          <MoonConsoleLogger
                            title="BLOCKCHAIN_TX_LOGGER"
                            logs={[
                              { timestamp: '23:48:12', type: 'info', message: 'Initializing Web3 provider connection...' },
                              { timestamp: '23:48:14', type: 'success', message: 'Connected to Moon-Inferno Mainnet Node #01' },
                              { timestamp: '23:48:18', type: 'warn', message: 'Gas price spike detected: 24 Gwei' },
                              { timestamp: '23:48:22', type: 'success', message: 'Transaction 0x7a8...9f4 confirmed in block #189420' },
                            ]}
                          />
                          <CodeBlock filename="MoonConsoleLogger.snippet.tsx" code={`<MoonConsoleLogger\n  title="BLOCKCHAIN_TX_LOGGER"\n  logs={[\n    { type: 'success', message: 'Transaction confirmed' }\n  ]}\n/>`} />
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

                    {/* SearchBar Component Showcase */}
                    {matchesSearch('searchbar search bar input filter search icon shortcut clearable escape') && (
                    <Card>
                      <CardHeader>
                        <Stack direction="row" align="center" gap="0.5rem">
                          <SearchIcon size={18} /> SearchBar Primitives (Retro & Cyberpunk Variants)
                        </Stack>
                      </CardHeader>
                      <CardBody>
                        <Stack gap="1.5rem">
                          <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--mi-color-text-muted)' }}>
                            Cyberpunk search bar with built-in search icon, auto-clear button, keyboard shortcut badge, and ARIA <code>role="search"</code>.
                          </p>
                          <Stack gap="1rem">
                            <SearchBar
                              variant="inferno"
                              placeholder="Inferno SearchBar (Ctrl+K)..."
                              shortcutKey="Ctrl+K"
                            />
                            <SearchBar
                              variant="pixel"
                              placeholder="Pixel Art SearchBar (/)..."
                              shortcutKey="/"
                            />
                            <SearchBar
                              variant="terminal"
                              placeholder="Terminal Green CRT SearchBar..."
                              shortcutKey="ESC"
                            />
                          </Stack>
                          <CodeBlock filename="SearchBar.snippet.tsx" code={`<SearchBar\n  variant="inferno"\n  placeholder="Search database..."\n  shortcutKey="Ctrl+K"\n  onSearch={(query) => console.log(query)}\n/>`} />
                        </Stack>
                      </CardBody>
                    </Card>
                    )}

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

                    {/* Accessible Breadcrumbs Navigation */}
                    <Card>
                      <CardHeader>
                        <Stack direction="row" align="center" gap="0.5rem">
                          <LayersIcon size={18} /> Breadcrumbs Navigation Primitives
                        </Stack>
                      </CardHeader>
                      <CardBody>
                        <Stack gap="1.5rem">
                          <Stack gap="0.5rem">
                            <span style={{ fontSize: '0.8rem', color: 'var(--mi-color-text-dim)' }}>DEFAULT VARIANT (SLASH SEPARATOR):</span>
                            <Breadcrumbs
                              items={[
                                { label: 'Root Node', href: '#' },
                                { label: 'Subsystem', href: '#' },
                                { label: 'Security Clusters', href: '#' },
                                { label: 'Alpha Alpha 99', isCurrent: true },
                              ]}
                            />
                          </Stack>

                          <Stack gap="0.5rem">
                            <span style={{ fontSize: '0.8rem', color: 'var(--mi-color-text-dim)' }}>PIXEL VARIANT WITH CUSTOM SEPARATOR (&gt;):</span>
                            <Breadcrumbs
                              variant="pixel"
                              separator=">"
                              items={[
                                { label: 'HOME', icon: <FlameIcon size={14} />, href: '#' },
                                { label: 'ARCADE', href: '#' },
                                { label: 'HIGH SCORES', isCurrent: true },
                              ]}
                            />
                          </Stack>

                          <Stack gap="0.5rem">
                            <span style={{ fontSize: '0.8rem', color: 'var(--mi-color-text-dim)' }}>GHOST VARIANT WITH ICONS:</span>
                            <Breadcrumbs variant="ghost">
                              <BreadcrumbItem href="#" icon={<TerminalIcon size={14} />}>Console</BreadcrumbItem>
                              <BreadcrumbItem href="#" icon={<ShieldIcon size={14} />}>Protocols</BreadcrumbItem>
                              <BreadcrumbItem isCurrent icon={<SparklesIcon size={14} />}>Active Transmission</BreadcrumbItem>
                            </Breadcrumbs>
                          </Stack>

                          <CodeBlock filename="Breadcrumbs.snippet.tsx" code={`import { Breadcrumbs, BreadcrumbItem } from '@moon-inferno/react';\nimport { FlameIcon } from '@moon-inferno/icons';\n\n// Array declarative format\n<Breadcrumbs\n  variant="pixel"\n  separator=">"\n  items={[\n    { label: 'HOME', icon: <FlameIcon size={14} />, href: '#' },\n    { label: 'ARCADE', href: '#' },\n    { label: 'LEVEL 01', isCurrent: true }\n  ]}\n/>\n\n// JSX Composition format\n<Breadcrumbs variant="ghost">\n  <BreadcrumbItem href="#">Console</BreadcrumbItem>\n  <BreadcrumbItem isCurrent>Active Node</BreadcrumbItem>\n</Breadcrumbs>`} />
                        </Stack>
                      </CardBody>
                    </Card>

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

                          <Stack gap="1.5rem">
                            <Stack gap="0.5rem">
                              <span style={{ fontSize: '0.8rem', color: 'var(--mi-color-text-dim)' }}>
                                IMAGE AVATARS (SIZES & VARIANTS):
                              </span>
                              <Stack direction="row" align="center" gap="1rem" wrap>
                                <Avatar size="sm" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80" name="Cyber Female" />
                                <Avatar size="md" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80" name="Biagio Scaglia" variant="circle" />
                                <Avatar size="lg" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80" name="Pixel Hacker" variant="pixel" />
                                <Avatar size="xl" src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=80" name="Solar Nomad" variant="square" />
                              </Stack>
                            </Stack>

                            <Stack gap="0.5rem">
                              <span style={{ fontSize: '0.8rem', color: 'var(--mi-color-text-dim)' }}>
                                INITIALS AVATARS (FALLBACK WHEN NO IMAGE):
                              </span>
                              <Stack direction="row" align="center" gap="1rem" wrap>
                                <Avatar size="sm" name="Alpha One" />
                                <Avatar size="md" name="Biagio Scaglia" variant="circle" />
                                <Avatar size="lg" name="Cyber Punk" variant="pixel" />
                                <Avatar size="xl" name="Solar Inferno" variant="square" />
                              </Stack>
                            </Stack>

                            <Stack gap="0.5rem">
                              <span style={{ fontSize: '0.8rem', color: 'var(--mi-color-text-dim)' }}>
                                STACKED AVATAR GROUP:
                              </span>
                              <Stack direction="row" align="center" gap="1rem" wrap>
                                <AvatarGroup max={4}>
                                  <Avatar size="md" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80" name="Biagio Scaglia" />
                                  <Avatar size="md" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80" name="Cyber Hacker" />
                                  <Avatar size="md" name="Alpha One" />
                                  <Avatar size="md" name="Solar Inferno" variant="pixel" />
                                </AvatarGroup>
                              </Stack>
                            </Stack>

                            <CodeBlock
                              filename="Avatar.snippet.tsx"
                              code={`import { Avatar, AvatarGroup } from '@moon-inferno/react';\n\n// Image Avatar with variants (circle | pixel | square) and sizes (sm | md | lg | xl)\n<Avatar \n  size="lg" \n  src="https://images.unsplash.com/photo-..." \n  name="Biagio Scaglia" \n  variant="pixel" \n/>\n\n// Initials fallback Avatar\n<Avatar size="md" name="Biagio Scaglia" variant="circle" />\n\n// Stacked Avatar Group\n<AvatarGroup max={4}>\n  <Avatar src="https://..." name="User 1" />\n  <Avatar src="https://..." name="User 2" />\n  <Avatar name="Biagio Scaglia" />\n</AvatarGroup>`}
                            />
                          </Stack>
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

                    {/* Interactive Accessible Tabs Component (v0.3.0 Variants) */}
                    <Card>
                      <CardHeader>
                        <Stack direction="row" align="center" justify="between" wrap gap="1rem">
                          <Stack direction="row" align="center" gap="0.5rem">
                            <LayersIcon size={18} /> Interactive Tabs Primitives (v0.3.0)
                          </Stack>
                          <Stack direction="row" gap="0.35rem">
                            {(['inferno', 'pills', 'pixel', 'underline'] as TabsVariant[]).map((v) => (
                              <Button
                                key={v}
                                size="sm"
                                variant={demoTabsVariant === v ? 'inferno' : 'ghost'}
                                onClick={() => setDemoTabsVariant(v)}
                                style={{ fontSize: '0.75rem', padding: '0.2rem 0.55rem' }}
                              >
                                {v.toUpperCase()}
                              </Button>
                            ))}
                          </Stack>
                        </Stack>
                      </CardHeader>
                      <CardBody>
                        <Stack gap="1.5rem">
                          <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--mi-color-text-muted)' }}>
                            Full WCAG 2.1 AA keyboard support (<kbd>Left/Right</kbd>, <kbd>Home/End</kbd>), icons, badges, and 4 design variants (<code>inferno</code> | <code>pills</code> | <code>pixel</code> | <code>underline</code>).
                          </p>

                          <Tabs
                            variant={demoTabsVariant}
                            size="md"
                            items={[
                              {
                                id: 'tab-1',
                                label: 'CYBER_CORE',
                                icon: <FlameIcon size={14} />,
                                badge: 'v0.3.0',
                                content: (
                                  <Stack gap="0.75rem" style={{ padding: '0.5rem 0' }}>
                                    <strong style={{ color: 'var(--mi-color-primary)' }}>Inferno Engine Active</strong>
                                    <p style={{ margin: 0, color: 'var(--mi-color-text-muted)', fontSize: '0.875rem' }}>
                                      Decoupled theme tokens with instant CSS variable reactivity and screen reader announcements.
                                    </p>
                                  </Stack>
                                ),
                              },
                              {
                                id: 'tab-2',
                                label: 'SHADERS & FX',
                                icon: <CpuIcon size={14} />,
                                content: (
                                  <Stack gap="0.75rem" style={{ padding: '0.5rem 0' }}>
                                    <strong style={{ color: 'var(--mi-color-info, #00E5FF)' }}>CRT & Matrix Overlays</strong>
                                    <p style={{ margin: 0, color: 'var(--mi-color-text-muted)', fontSize: '0.875rem' }}>
                                      Hardware-accelerated CSS & HTML5 Canvas effects respecting <code>(prefers-reduced-motion: reduce)</code>.
                                    </p>
                                  </Stack>
                                ),
                              },
                              {
                                id: 'tab-3',
                                label: 'ACCESSIBILITY',
                                icon: <ShieldIcon size={14} />,
                                badge: 'AA',
                                content: (
                                  <Stack gap="0.75rem" style={{ padding: '0.5rem 0' }}>
                                    <strong style={{ color: 'var(--mi-color-success, #00FF66)' }}>WCAG 2.1 AA Compliant</strong>
                                    <p style={{ margin: 0, color: 'var(--mi-color-text-muted)', fontSize: '0.875rem' }}>
                                      Automatic WAI-ARIA <code>role="tablist"</code>, <code>aria-selected</code>, and <code>aria-controls</code> management.
                                    </p>
                                  </Stack>
                                ),
                              },
                            ]}
                          />

                          <CodeBlock
                            filename="Tabs.snippet.tsx"
                            code={`<Tabs\n  variant="${demoTabsVariant}"\n  size="md"\n  items={[\n    { id: '1', label: 'CYBER_CORE', icon: <FlameIcon size={14} />, badge: 'v0.3.0', content: <Content1 /> },\n    { id: '2', label: 'SHADERS & FX', icon: <CpuIcon size={14} />, content: <Content2 /> }\n  ]}\n/>`}
                          />
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
                        <Stack gap="1.5rem">
                          <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--mi-color-text-muted)' }}>
                            Cyberpunk ASCII digital matrix rain canvas overlay and retro cathode-ray tube (CRT) scanline flicker effects:
                          </p>

                          <Stack gap="0.5rem">
                            <span style={{ fontSize: '0.8rem', color: 'var(--mi-color-text-dim)' }}>
                              MATRIX RAIN COMPONENT SNIPPET:
                            </span>
                            <CodeBlock
                              filename="MatrixRain.snippet.tsx"
                              code={`import { MatrixRain } from '@moon-inferno/react';\n\n// Basic fullscreen Matrix rain canvas\n<MatrixRain />\n\n// Custom Matrix rain with primary color, font size and speed\n<MatrixRain \n  color="#FF4D00" \n  fontSize={18} \n  speed={33} \n/>`}
                            />
                          </Stack>

                          <Stack gap="0.5rem">
                            <span style={{ fontSize: '0.8rem', color: 'var(--mi-color-text-dim)' }}>
                              CRT SCANLINE SHADER COMPONENT SNIPPET:
                            </span>
                            <CodeBlock
                              filename="CRTEffect.snippet.tsx"
                              code={`import { CRTEffect } from '@moon-inferno/react';\n\n// Fullscreen retro scanline overlay with flicker animation\n<CRTEffect />`}
                            />
                          </Stack>
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
                              onClick={() => addToast({ title: 'Signal Established', description: 'System status: 100% Operational', variant: 'success' })}
                            >
                              Trigger Structured Toast
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => addToast('Warning: High core temperature detected', { variant: 'error' })}
                            >
                              Trigger String Toast
                            </Button>
                          </Stack>
                          <CodeBlock filename="Toast.snippet.tsx" code={`const { addToast } = useToast();\n// Structured Toast (v0.3.0):\naddToast({ title: 'Signal Established', description: 'System status: 100% Operational', variant: 'success' });\n// Simple String Toast:\naddToast('Warning: High core temperature', { variant: 'error' });`} />
                        </Stack>
                      </CardBody>
                    </Card>
                  </Stack>
                ),
              },
              {
                id: 'cli-guide',
                label: (
                  <Stack direction="row" align="center" gap="0.5rem">
                    <TerminalIcon size={16} /> CLI & Installation
                  </Stack>
                ),
                content: <CliGuideTab />,
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
                id: 'accessibility-spec',
                label: (
                  <Stack direction="row" align="center" gap="0.5rem">
                    <ShieldIcon size={16} /> Accessibility Specification
                  </Stack>
                ),
                content: <AccessibilitySpecTab />,
              },
              {
                id: 'recipes-templates',
                label: (
                  <Stack direction="row" align="center" gap="0.5rem">
                    <SparklesIcon size={16} /> Recipes & Templates
                  </Stack>
                ),
                content: <RecipesTab />,
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

                    <Card>
                      <CardHeader>
                        <Stack direction="row" align="center" gap="0.5rem">
                          <SparklesIcon size={18} /> Interactive Icon Hover Effects
                        </Stack>
                      </CardHeader>
                      <CardBody>
                        <Stack gap="1rem">
                          <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--mi-color-text-muted)' }}>
                            Pass <code style={{ color: 'var(--mi-color-primary)' }}>hoverEffect="glow | spin | bounce | pulse | scale"</code> to any vector icon:
                          </p>
                          <Stack direction="row" gap="1.5rem" wrap align="center">
                            <Stack align="center" gap="0.35rem">
                              <FlameIcon size={32} color="#FF4D00" hoverEffect="glow" />
                              <span style={{ fontSize: '0.75rem', fontFamily: 'var(--mi-font-mono)' }}>glow</span>
                            </Stack>
                            <Stack align="center" gap="0.35rem">
                              <RefreshIcon size={32} color="#00FF66" hoverEffect="spin" />
                              <span style={{ fontSize: '0.75rem', fontFamily: 'var(--mi-font-mono)' }}>spin</span>
                            </Stack>
                            <Stack align="center" gap="0.35rem">
                              <ZapIcon size={32} color="#00E5FF" hoverEffect="bounce" />
                              <span style={{ fontSize: '0.75rem', fontFamily: 'var(--mi-font-mono)' }}>bounce</span>
                            </Stack>
                            <Stack align="center" gap="0.35rem">
                              <SparklesIcon size={32} color="#FF00A0" hoverEffect="pulse" />
                              <span style={{ fontSize: '0.75rem', fontFamily: 'var(--mi-font-mono)' }}>pulse</span>
                            </Stack>
                            <Stack align="center" gap="0.35rem">
                              <GamepadIcon size={32} color="#FFD700" hoverEffect="scale" />
                              <span style={{ fontSize: '0.75rem', fontFamily: 'var(--mi-font-mono)' }}>scale</span>
                            </Stack>
                          </Stack>
                          <CodeBlock filename="IconHover.snippet.tsx" code={`<FlameIcon size={32} hoverEffect="glow" />\n<RefreshIcon size={32} hoverEffect="spin" />\n<ZapIcon size={32} hoverEffect="bounce" />\n<SparklesIcon size={32} hoverEffect="pulse" />\n<GamepadIcon size={32} hoverEffect="scale" />`} />
                        </Stack>
                      </CardBody>
                    </Card>

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
      </div>

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
    <MoonProvider defaultTheme="moon-inferno">
      <ToastProvider>
        <MasterGuideWebsite />
      </ToastProvider>
    </MoonProvider>
  );
}
