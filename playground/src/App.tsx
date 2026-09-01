import { useState } from 'react';
import {
  MoonProvider,
  useMoonTheme,
  Container,
  Stack,
  Grid,
  Card,
  CardBody,
  Button,
  Badge,
  Tooltip,
  CodeBlock,
  CRTEffect,
  MatrixRain,
  Marquee,
  Tabs,
  ToastProvider,
  useToast,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  SearchBar,
} from '@moon-inferno/react';
import {
  FlameIcon,
  ShieldIcon,
  SparklesIcon,
  SunIcon,
  TerminalIcon,
  CpuIcon,
  CodeIcon,
  LayersIcon,
  UserIcon,
  ExternalLinkIcon,
  InfoIcon,
  SettingsIcon,
  HtmlIcon,
} from '@moon-inferno/icons';

// Modular Tab Components
import { DocSidebarNav } from './components/DocSidebarNav';
import { CliGuideTab } from './components/CliGuideTab';
import { AccessibilitySpecTab } from './components/AccessibilitySpecTab';
import { RecipesTab } from './components/RecipesTab';
import { ArchitectureTab } from './components/tabs/ArchitectureTab';
import { GettingStartedTab } from './components/tabs/GettingStartedTab';
import { ComponentsCatalogTab } from './components/tabs/ComponentsCatalogTab';
import { CssThemesTab } from './components/tabs/CssThemesTab';
import { IconExplorerTab } from './components/tabs/IconExplorerTab';
import { TerminalTab } from './components/tabs/TerminalTab';
import { HtmlVisualizerTab } from './components/tabs/HtmlVisualizerTab';

function MasterGuideWebsite() {
  const { theme: currentTheme, setTheme } = useMoonTheme();
  const [isCRTActive, setIsCRTActive] = useState(false);
  const [isMatrixActive, setIsMatrixActive] = useState(false);
  const [activeTabId, setActiveTabId] = useState('components-catalog');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isNavbarMenuOpen, setIsNavbarMenuOpen] = useState(false);

  const { addToast } = useToast();

  const handleThemeChange = (theme: 'moon-inferno' | 'terminal' | 'y2k') => {
    setTheme(theme);
    addToast(`Theme switched to ${theme.toUpperCase()}`, { variant: 'inferno' });
  };

  const handleGlobalSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim() && activeTabId !== 'components-catalog' && activeTabId !== 'icon-explorer') {
      setActiveTabId('components-catalog');
    }
  };

  const handleCopyIcon = (iconName: string) => {
    const tag = `<${iconName} size={24} />`;
    navigator.clipboard.writeText(tag);
    addToast(`Copied JSX tag: ${tag}`, { variant: 'success' });
  };

  return (
    <Container size="xl" className="app-root-container">
      {isMatrixActive && <MatrixRain />}

      <Stack gap="2.5rem" style={{ position: 'relative', zIndex: 1 }}>
        {isCRTActive && <CRTEffect />}

        {/* Responsive Cyberpunk Navbar Primitive */}
        <Navbar variant="inferno" isSticky={false} className="header-nav">
          <NavbarBrand>
            <div className="header-brand">
              <img src={`${import.meta.env.BASE_URL}favicon.svg`} alt="Moon-Inferno Favicon" style={{ height: '28px', width: '28px', flexShrink: 0 }} />
              <h1 className="brand-title">Moon-Inferno</h1>
              <Badge variant="pixel" icon={<SparklesIcon size={12} />}>v0.4.7</Badge>
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
            <Badge variant="inferno" icon={<FlameIcon size={14} />}>THE EXPRESSIVE WEB UI FRAMEWORK &amp; DESIGN SYSTEM</Badge>

            <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)', fontFamily: 'var(--mi-font-mono)', margin: 0, letterSpacing: '-0.02em', textAlign: 'center' }}>
              Reclaim Expressive Web Design
            </h2>

            <p style={{ maxWidth: '780px', color: 'var(--mi-color-text-muted)', fontSize: '1.1rem', lineHeight: '1.6', margin: 0, textAlign: 'center' }}>
              Moon-Inferno is an expressive React UI framework created by <strong>Biagio Scaglia</strong> for retro, Y2K, CRT, cyberpunk, pixel art, and experimental web applications. Built with WCAG 2.1 AA accessibility principles at its core with zero SaaS sterility.
            </p>

            <Stack direction="row" align="center" justify="center" gap="1rem" wrap style={{ marginTop: '0.5rem' }}>
              <Button
                size="lg"
                variant="inferno"
                leftIcon={<FlameIcon size={18} />}
                onClick={() => {
                  setActiveTabId('getting-started');
                  const el = document.getElementById('main-tabs');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Quickstart &amp; Installation
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
                  <strong style={{ fontSize: '0.95rem' }}>38+ Vector SVG Icons</strong>
                </Stack>
                <p style={{ fontSize: '0.85rem', color: 'var(--mi-color-text-muted)', margin: 0 }}>
                  Integrated <code>@moon-inferno/icons</code> package with 1-click copyable JSX tags.
                </p>
              </Stack>
            </CardBody>
          </Card>

          <Card className="feature-card">
            <CardBody>
              <Stack gap="0.5rem">
                <Stack direction="row" align="center" gap="0.5rem">
                  <SunIcon size={20} color="var(--mi-color-primary)" />
                  <strong style={{ fontSize: '0.95rem' }}>Themeable Tokens &amp; CDN</strong>
                </Stack>
                <p style={{ fontSize: '0.85rem', color: 'var(--mi-color-text-muted)', margin: 0 }}>
                  Switch dynamically between Inferno, Terminal CRT, and Y2K, or use via Bootstrap-style CDN link.
                </p>
              </Stack>
            </CardBody>
          </Card>
        </Grid>

        {/* Global Ticker Marquee */}
        <Marquee variant="pixel" speed={22}>
          <span style={{ color: 'var(--mi-color-primary)', fontWeight: 'bold' }}>MOON-INFERNO v0.4.7 IS LIVE ON NPM &amp; CDN</span>
          <span>--</span>
          <span>npm install moon-inferno</span>
          <span>--</span>
          <span>&lt;link rel=&quot;stylesheet&quot; href=&quot;https://cdn.jsdelivr.net/npm/moon-inferno/dist/styles.css&quot;&gt;</span>
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
                      <InfoIcon size={16} /> Architecture &amp; Vision
                    </Stack>
                  ),
                  content: <ArchitectureTab />,
                },
                {
                  id: 'html-visualizer',
                  label: (
                    <Stack direction="row" align="center" gap="0.5rem">
                      <HtmlIcon size={16} /> HTML &amp; CSS Visualizer
                    </Stack>
                  ),
                  content: <HtmlVisualizerTab />,
                },
                {
                  id: 'getting-started',
                  label: (
                    <Stack direction="row" align="center" gap="0.5rem">
                      <CodeIcon size={16} /> Quickstart &amp; CDN
                    </Stack>
                  ),
                  content: <GettingStartedTab />,
                },
                {
                  id: 'components-catalog',
                  label: (
                    <Stack direction="row" align="center" gap="0.5rem">
                      <LayersIcon size={16} /> Component Catalog
                    </Stack>
                  ),
                  content: (
                    <ComponentsCatalogTab
                      searchQuery={searchQuery}
                      selectedCategory={selectedCategory}
                      addToast={addToast}
                      handleThemeChange={handleThemeChange}
                      isCRTActive={isCRTActive}
                      setIsCRTActive={setIsCRTActive}
                      isMatrixActive={isMatrixActive}
                      setIsMatrixActive={setIsMatrixActive}
                    />
                  ),
                },
                {
                  id: 'cli-guide',
                  label: (
                    <Stack direction="row" align="center" gap="0.5rem">
                      <TerminalIcon size={16} /> CLI &amp; Installation
                    </Stack>
                  ),
                  content: <CliGuideTab />,
                },
                {
                  id: 'custom-css-guide',
                  label: (
                    <Stack direction="row" align="center" gap="0.5rem">
                      <SettingsIcon size={16} /> CSS Variables &amp; Themes
                    </Stack>
                  ),
                  content: <CssThemesTab currentTheme={currentTheme} onThemeChange={handleThemeChange} />,
                },
                {
                  id: 'accessibility-spec',
                  label: (
                    <Stack direction="row" align="center" gap="0.5rem">
                      <ShieldIcon size={16} /> Accessibility Spec
                    </Stack>
                  ),
                  content: <AccessibilitySpecTab />,
                },
                {
                  id: 'recipes-templates',
                  label: (
                    <Stack direction="row" align="center" gap="0.5rem">
                      <SparklesIcon size={16} /> Recipes &amp; Templates
                    </Stack>
                  ),
                  content: <RecipesTab />,
                },
                {
                  id: 'icon-explorer',
                  label: (
                    <Stack direction="row" align="center" gap="0.5rem">
                      <SparklesIcon size={16} /> SVG Icon Library (38)
                    </Stack>
                  ),
                  content: <IconExplorerTab onCopyIcon={handleCopyIcon} />,
                },
                {
                  id: 'terminal',
                  label: (
                    <Stack direction="row" align="center" gap="0.5rem">
                      <TerminalIcon size={16} /> Interactive Terminal OS
                    </Stack>
                  ),
                  content: <TerminalTab />,
                },
              ]}
            />
          </main>
        </div>

        {/* Footer info & Creator Credits */}
        <footer style={{ textAlign: 'center', color: 'var(--mi-color-text-dim)', fontSize: '0.85rem', marginTop: '1rem', padding: '1.5rem 0', borderTop: '1px solid var(--mi-color-border)' }}>
          <p style={{ margin: '0 0 0.5rem 0' }}>
            Moon-Inferno Framework -- Created and Maintained by <strong><a href="https://github.com/biagio-scaglia" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--mi-color-primary)', textDecoration: 'none' }}>Biagio Scaglia</a></strong>.
          </p>
          <p style={{ margin: 0, fontSize: '0.75rem', color: 'var(--mi-color-text-muted)' }}>
            Built with TypeScript, React &amp; WCAG 2.1 AA Accessibility Standards. MIT Licensed.
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
