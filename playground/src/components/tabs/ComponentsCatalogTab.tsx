import React, { useState } from 'react';
import {
  Stack,
  Grid,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Input,
  Select,
  Checkbox,
  Radio,
  RadioGroup,
  Switch,
  Slider,
  Badge,
  CodeBlock,
  GlitchText,
  PixelText,
  NeonText,
  TypingText,
  Marquee,
  Avatar,
  Progress,
  Dialog,
  DialogFooter,
  Accordion,
  AccordionItem,
  SignalLight,
  Loader,
  Gallery,
  Breadcrumbs,
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
  DropdownSection,
  DropdownItem,
  DropdownDivider,
  PieChart,
  ColorPicker,
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  TableCaption,
  CyberCanvas,
  SheetEditor,
  MoonTypewriterDialogue,
  MoonRPGGrid,
  MoonHealthMeter,
  MoonSafeGlitch,
  MoonConsoleLogger,
  SearchBar,
  Tabs,
} from '@moon-inferno/react';
import {
  FlameIcon,
  ZapIcon,
  ShieldIcon,
  SparklesIcon,
  LockIcon,
  EyeIcon,
  EyeOffIcon,
  CheckIcon,
  CloseIcon,
  SettingsIcon,
  RefreshIcon,
  WarnIcon,
  UserIcon,
  TerminalIcon,
  CpuIcon,
  GamepadIcon,
  CodeIcon,
  FilterIcon,
  LayersIcon,
  TrashIcon,
  SunIcon,
  SearchIcon,
  ReactIcon,
  HtmlIcon,
} from '@moon-inferno/icons';

const GALLERY_ITEMS = [
  {
    id: '1',
    src: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=600&auto=format&fit=crop&q=80',
    title: 'NEO_TOKYO_01',
    caption: 'Atmospheric crimson visual stream with retro scanline depth.',
  },
  {
    id: '2',
    src: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=600&auto=format&fit=crop&q=80',
    title: 'CYBER_CORE_02',
    caption: 'Cyberpunk grid stream node with high-contrast neon accents.',
  },
  {
    id: '3',
    src: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&auto=format&fit=crop&q=80',
    title: 'MATRIX_GRID_03',
    caption: 'Quantum terminal nexus telemetry visualization.',
  },
];

export interface ComponentsCatalogTabProps {
  searchQuery: string;
  selectedCategory: string;
  addToast: (input: any, options?: any) => void;
  handleThemeChange: (theme: 'moon-inferno' | 'terminal' | 'y2k') => void;
  isCRTActive: boolean;
  setIsCRTActive: (active: boolean) => void;
  isMatrixActive: boolean;
  setIsMatrixActive: (active: boolean) => void;
}

export const ComponentsCatalogTab: React.FC<ComponentsCatalogTabProps> = ({
  searchQuery,
  selectedCategory,
  addToast,
  handleThemeChange,
  isCRTActive,
  setIsCRTActive,
  isMatrixActive,
  setIsMatrixActive,
}) => {
  // Global Code Snippet format switcher state: React vs Pure HTML
  const [snippetFormat, setSnippetFormat] = useState<'react' | 'html'>('react');

  // Component internal states
  const [inputValue, setInputValue] = useState('');
  const [inputError, setInputError] = useState('');
  const [passwordValue, setPasswordValue] = useState('cyber-secret-994');
  const [showPassword, setShowPassword] = useState(false);
  const [selectValue, setSelectValue] = useState('alpha');
  const [checkboxValue, setCheckboxValue] = useState(true);
  const [radioValue, setRadioValue] = useState('inferno');
  const [switchValue, setSwitchValue] = useState(false);
  const [sliderValue, setSliderValue] = useState(75);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [pickedColor, setPickedColor] = useState('#FF4D00');
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [isNavbarMenuOpen, setIsNavbarMenuOpen] = useState(false);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [demoTabsVariant, setDemoTabsVariant] = useState<'inferno' | 'pills' | 'pixel' | 'underline'>('inferno');
  const [demoTabId, setDemoTabId] = useState('tab-1');

  const handleValidate = () => {
    if (!inputValue.trim()) {
      setInputError('Transmission key cannot be empty.');
      addToast('Input validation failed: Key required.', { variant: 'error' });
    } else {
      setInputError('');
      addToast('Transmission key accepted and verified!', { variant: 'success' });
    }
  };

  const matchesSearch = (keywords: string) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return keywords.toLowerCase().includes(q);
  };

  const matchesCategory = (cardCat: string) => {
    if (selectedCategory === 'all') return true;
    return selectedCategory === cardCat;
  };

  return (
    <Stack gap="2.5rem">
      {/* Interactive React vs Pure HTML Code Snippet Switcher Bar */}
      <Card style={{ border: '1px solid var(--mi-color-primary, #FF4D00)' }}>
        <CardBody>
          <Stack direction="row" align="center" justify="between" wrap gap="1rem">
            <Stack gap="0.25rem">
              <strong style={{ fontSize: '1rem', color: '#F8FAFC' }}>
                CODE SNIPPET GENERATOR: {snippetFormat === 'react' ? 'REACT JSX MODE' : 'PURE HTML (CDN LINK) MODE'}
              </strong>
              <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--mi-color-text-muted)' }}>
                Switch code snippets across all component cards below between React components and Pure HTML + CDN classes:
              </p>
            </Stack>
            <Stack direction="row" gap="0.5rem">
              <Button
                size="sm"
                variant={snippetFormat === 'react' ? 'inferno' : 'outline'}
                onClick={() => {
                  setSnippetFormat('react');
                  addToast('Switched code snippets to React JSX mode', { variant: 'inferno' });
                }}
                leftIcon={<ReactIcon size={16} />}
              >
                React JSX
              </Button>
              <Button
                size="sm"
                variant={snippetFormat === 'html' ? 'inferno' : 'outline'}
                onClick={() => {
                  setSnippetFormat('html');
                  addToast('Switched code snippets to Pure HTML (CDN) mode', { variant: 'success' });
                }}
                leftIcon={<HtmlIcon size={16} />}
              >
                Pure HTML (CDN &lt;link&gt;)
              </Button>
            </Stack>
          </Stack>
        </CardBody>
      </Card>

      {/* Category: RETRO & TYPOGRAPHY */}
      {matchesCategory('retro') && (
        <>
          {/* Typography & Custom Text FX */}
          {matchesSearch('glitchtext pixeltext neontext typingtext marquee text custom fx typography headlines') && (
            <Card>
              <CardHeader>
                <Stack direction="row" align="center" gap="0.5rem">
                  <SparklesIcon size={18} /> Custom Text Primitives &amp; Tickers
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
                    title={`FULL COPY-PASTE CODE SNIPPET (TYPOGRAPHY & TEXT FX — ${snippetFormat === 'react' ? 'REACT JSX' : 'PURE HTML'})`}
                    code={
                      snippetFormat === 'react'
                        ? `import { GlitchText, PixelText, NeonText, TypingText, Marquee } from '@moon-inferno/react';

// 1. GlitchText (RGB-split animated headline)
<GlitchText text="CYBERPUNK INFERNO" as="h3" style={{ fontSize: '1.5rem' }} />

// 2. PixelText (sizes sm | md | lg | xl)
<PixelText text="LEVEL 01" size="sm" />
<PixelText text="GAME OVER" size="md" />
<PixelText text="PRESS START" size="lg" />
<PixelText text="SOLAR INFERNO" size="xl" />

// 3. NeonText (cathode tube glow with flicker)
<NeonText text="INFERNO" color="inferno" flicker />
<NeonText text="CYBERPUNK" color="cyan" />

// 4. TypingText (Typewriter effect)
<TypingText text="Establishing encrypted link..." speed={40} cursorChar="█" />

// 5. Marquee (Continuous infinite scroll ticker)
<Marquee speed={18} variant="pixel">
  <span>RETRO PRIMITIVES</span> - <span>ACCESSIBLE TICKER</span>
</Marquee>`
                        : `<!-- Pure HTML CDN Classes for Typography & Text FX -->
<!-- Include CDN: <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/moon-inferno/dist/styles.css"> -->

<!-- 1. Glitch Text -->
<h3 class="mi-glitch-text" data-text="CYBERPUNK INFERNO">CYBERPUNK INFERNO</h3>

<!-- 2. Pixel Text (sm | md | lg | xl) -->
<span class="mi-pixel-text mi-pixel-text--sm">LEVEL 01</span>
<span class="mi-pixel-text mi-pixel-text--md">GAME OVER</span>
<span class="mi-pixel-text mi-pixel-text--lg">PRESS START</span>
<span class="mi-pixel-text mi-pixel-text--xl">SOLAR INFERNO</span>

<!-- 3. Neon Text Glow (inferno | cyan | green | magenta) -->
<span class="mi-neon-text mi-neon-text--inferno mi-neon-text--flicker">INFERNO</span>
<span class="mi-neon-text mi-neon-text--cyan">CYBERPUNK</span>

<!-- 4. Marquee Ticker -->
<div class="mi-marquee mi-marquee--pixel">
  <div class="mi-marquee__track">
    <span>RETRO PRIMITIVES</span> - <span>ACCESSIBLE TICKER</span>
  </div>
</div>`
                    }
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
                    title={`FULL COPY-PASTE CODE SNIPPET (HOLOCARD — ${snippetFormat === 'react' ? 'REACT JSX' : 'PURE HTML'})`}
                    code={
                      snippetFormat === 'react'
                        ? `import { HoloCard, Badge, Stack } from '@moon-inferno/react';

// 1. Inferno Variant 3D Parallax Card
<HoloCard variant="inferno" maxTilt={15} glareOpacity={0.4}>
  <Stack gap="0.75rem">
    <Badge variant="inferno">SOLAR_INFERNO</Badge>
    <h4>Cybernetic Core Node</h4>
    <p>Hover cursor to tilt and observe dynamic holographic reflection.</p>
  </Stack>
</HoloCard>`
                        : `<!-- Pure HTML Retro Card (with Moon-Inferno CSS) -->
<div class="mi-card" style="border: 2px solid #FF4D00; box-shadow: 0 0 16px rgba(255, 77, 0, 0.35);">
  <div class="mi-card-header">
    <span class="mi-badge mi-badge--inferno">SOLAR_INFERNO</span>
  </div>
  <div class="mi-card-body">
    <h4 style="margin: 0 0 0.5rem 0;">Cybernetic Core Node</h4>
    <p style="margin: 0; color: #94A3B8;">WCAG 2.1 AA compliant retro styling via pure HTML.</p>
  </div>
</div>`
                    }
                  />
                </Stack>
              </CardBody>
            </Card>
          )}

          {/* CyberCanvas Interactive Drawing Tool */}
          {matchesSearch('cybercanvas canvas drawing draw pixel grid stroke export png sketch') && (
            <Card>
              <CardHeader>
                <Stack direction="row" align="center" gap="0.5rem">
                  <CodeIcon size={18} /> CyberCanvas Interactive Drawing Primitive
                </Stack>
              </CardHeader>
              <CardBody>
                <Stack gap="1.5rem">
                  <p style={{ margin: 0, fontSize: '0.875rem', fontWeight: 600, color: '#F8FAFC' }}>
                    HTML5 drawing canvas with pixel grid overlay, neon color palette, eraser, clear tool, and PNG image export button.
                  </p>
                  <CyberCanvas height={280} gridOverlay strokeColor="#FF4D00" />
                  <CodeBlock
                    collapsible
                    title={`FULL COPY-PASTE CODE SNIPPET (CYBERCANVAS — ${snippetFormat === 'react' ? 'REACT JSX' : 'PURE HTML'})`}
                    code={
                      snippetFormat === 'react'
                        ? `import { CyberCanvas } from '@moon-inferno/react';

<CyberCanvas height={280} gridOverlay strokeColor="#FF4D00" />`
                        : `<!-- Pure HTML5 Canvas Container -->
<div class="mi-card" style="padding: 1rem; background: #0A090D;">
  <canvas class="mi-cyber-canvas" width="600" height="280" style="border: 2px solid #FF4D00; border-radius: 4px;"></canvas>
</div>`
                    }
                  />
                </Stack>
              </CardBody>
            </Card>
          )}

          {/* SheetEditor CRT Text Editor */}
          {matchesSearch('sheeteditor text editor notepad crt markdown line counter') && (
            <Card>
              <CardHeader>
                <Stack direction="row" align="center" gap="0.5rem">
                  <TerminalIcon size={18} /> SheetEditor CRT Text &amp; Code Notepad
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
                    title={`FULL COPY-PASTE CODE SNIPPET (SHEETEDITOR — ${snippetFormat === 'react' ? 'REACT JSX' : 'PURE HTML'})`}
                    code={
                      snippetFormat === 'react'
                        ? `import { SheetEditor } from '@moon-inferno/react';

<SheetEditor
  title="CYBER_LOG_NOTES.MD"
  defaultValue="# MOON-INFERNO LOG\\n- Real-time line numbering\\n- Word/character counter"
/>`
                        : `<!-- Pure HTML Text Notepad Container -->
<div class="mi-card" style="background: #000; color: #00FF66; font-family: monospace; border: 2px solid #00FF66;">
  <div class="mi-card-header" style="border-bottom: 1px solid #00FF66;"><strong>CYBER_LOG.TXT</strong></div>
  <div class="mi-card-body">
    <textarea class="mi-input" style="width: 100%; height: 180px; background: transparent; color: #00FF66; border: none; font-family: inherit;"># Terminal log entry...</textarea>
  </div>
</div>`
                    }
                  />
                </Stack>
              </CardBody>
            </Card>
          )}
        </>
      )}

      {/* Category: GAMING & WEB3 */}
      {matchesCategory('gaming') && (
        <>
          {/* MoonTypewriterDialogue */}
          {matchesSearch('moontypewriterdialogue rpg dialogue text reveal typewriter speaker avatar') && (
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
                    title={`FULL COPY-PASTE CODE SNIPPET (MOONTYPEWRITERDIALOGUE — ${snippetFormat === 'react' ? 'REACT JSX' : 'PURE HTML'})`}
                    code={
                      snippetFormat === 'react'
                        ? `import { MoonTypewriterDialogue } from '@moon-inferno/react';
import { FlameIcon } from '@moon-inferno/icons';

<MoonTypewriterDialogue
  speaker="CYBER_NAVIGATOR_AI"
  avatar={<FlameIcon size={20} color="#FF4D00" />}
  text="Welcome to Moon-Inferno! Built for WCAG 2.1 AA accessibility and gaming."
  speed={25}
/>`
                        : `<!-- Pure HTML RPG Dialogue Box -->
<div class="mi-pixel-container" style="border: 4px solid #FF4D00; background: #0A090D; padding: 1.25rem;">
  <div style="color: #FF4D00; font-weight: bold; margin-bottom: 0.5rem; font-family: monospace;">[CYBER_NAVIGATOR_AI]</div>
  <p style="margin: 0; color: #F8FAFC; font-family: monospace;">Welcome to Moon-Inferno! Built for WCAG 2.1 AA accessibility and gaming.</p>
</div>`
                    }
                  />
                </Stack>
              </CardBody>
            </Card>
          )}

          {/* MoonRPGGrid */}
          {matchesSearch('moonrpggrid rpg inventory slot grid 2d keyboard nft inventory swap') && (
            <Card>
              <CardHeader>
                <Stack direction="row" align="center" gap="0.5rem">
                  <LayersIcon size={18} /> MoonRPGGrid (Inventory &amp; NFT 2D Slot Grid)
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
                    title={`FULL COPY-PASTE CODE SNIPPET (MOONRPGGRID — ${snippetFormat === 'react' ? 'REACT JSX' : 'PURE HTML'})`}
                    code={
                      snippetFormat === 'react'
                        ? `import { MoonRPGGrid } from '@moon-inferno/react';
import { FlameIcon, ZapIcon, RefreshIcon, CheckIcon } from '@moon-inferno/icons';

<MoonRPGGrid
  columns={5}
  totalSlots={10}
  title="CYBERNETIC_INVENTORY"
  items={[
    { id: '1', name: 'Inferno Core', count: 1, icon: <FlameIcon size={24} color="#FF4D00" /> },
    { id: '2', name: 'Lightning Cell', count: 5, icon: <ZapIcon size={24} color="#FFD700" /> }
  ]}
/>`
                        : `<!-- Pure HTML Inventory Grid -->
<div class="mi-card" style="background: #14121A; border: 2px solid #332D40;">
  <div class="mi-card-header"><strong>CYBERNETIC_INVENTORY</strong></div>
  <div class="mi-card-body" style="display: grid; grid-template-columns: repeat(5, 54px); gap: 8px;">
    <div style="width: 54px; height: 54px; border: 2px solid #FF4D00; background: #0A090D; display: flex; align-items: center; justify-content: center; color: #FF4D00;">🔥</div>
    <div style="width: 54px; height: 54px; border: 2px solid #332D40; background: #0A090D;"></div>
  </div>
</div>`
                    }
                  />
                </Stack>
              </CardBody>
            </Card>
          )}

          {/* MoonHealthMeter */}
          {matchesSearch('moonhealthmeter health mana stamina shield meter html5 gaming') && (
            <Card>
              <CardHeader>
                <Stack direction="row" align="center" gap="0.5rem">
                  <CheckIcon size={18} /> MoonHealthMeter (Semantic Health &amp; Mana Bars)
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
                    title={`FULL COPY-PASTE CODE SNIPPET (MOONHEALTHMETER — ${snippetFormat === 'react' ? 'REACT JSX' : 'PURE HTML'})`}
                    code={
                      snippetFormat === 'react'
                        ? `import { MoonHealthMeter } from '@moon-inferno/react';

// Health (HP), Mana (MP), Energy (Stamina), and Cyber Shield Bars
<MoonHealthMeter type="health" value={85} max={100} label="HP (HEALTH)" />
<MoonHealthMeter type="mana" value={60} max={100} label="MP (MANA)" />
<MoonHealthMeter type="energy" value={95} max={100} label="STAMINA" />
<MoonHealthMeter type="shield" value={40} max={100} label="CYBER SHIELD" />`
                        : `<!-- Pure HTML5 Semantic <meter> Tags (Styled with Moon-Inferno CSS) -->
<meter class="mi-health-meter mi-health-meter--health" value="85" min="0" max="100" aria-label="HP (HEALTH)"></meter>
<meter class="mi-health-meter mi-health-meter--mana" value="60" min="0" max="100" aria-label="MP (MANA)"></meter>
<meter class="mi-health-meter mi-health-meter--energy" value="95" min="0" max="100" aria-label="STAMINA"></meter>
<meter class="mi-health-meter mi-health-meter--shield" value="40" min="0" max="100" aria-label="CYBER SHIELD"></meter>`
                    }
                  />
                </Stack>
              </CardBody>
            </Card>
          )}

          {/* MoonSafeGlitch */}
          {matchesSearch('moonsafeglitch safe glitch rgb split photosensitive accessibility') && (
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
                    title={`FULL COPY-PASTE CODE SNIPPET (MOONSAFEGLITCH — ${snippetFormat === 'react' ? 'REACT JSX' : 'PURE HTML'})`}
                    code={
                      snippetFormat === 'react'
                        ? `import { MoonSafeGlitch } from '@moon-inferno/react';

<MoonSafeGlitch text="NEO_INFERNO_PROTOCOL" as="h3" />`
                        : `<!-- Pure HTML Safe Glitch Text -->
<h3 class="mi-glitch-text" data-text="NEO_INFERNO_PROTOCOL">NEO_INFERNO_PROTOCOL</h3>`
                    }
                  />
                </Stack>
              </CardBody>
            </Card>
          )}

          {/* MoonConsoleLogger */}
          {matchesSearch('moonconsolelogger blockchain log terminal stream live console logger') && (
            <Card>
              <CardHeader>
                <Stack direction="row" align="center" gap="0.5rem">
                  <TerminalIcon size={18} /> MoonConsoleLogger (Live Stream Terminal Logger)
                </Stack>
              </CardHeader>
              <CardBody>
                <Stack gap="1.5rem">
                  <p style={{ margin: 0, fontSize: '0.875rem', fontWeight: 600, color: '#F8FAFC' }}>
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
                  <CodeBlock
                    collapsible
                    title={`FULL COPY-PASTE CODE SNIPPET (MOONCONSOLELOGGER — ${snippetFormat === 'react' ? 'REACT JSX' : 'PURE HTML'})`}
                    code={
                      snippetFormat === 'react'
                        ? `import { MoonConsoleLogger } from '@moon-inferno/react';

<MoonConsoleLogger
  title="BLOCKCHAIN_TX_LOGGER"
  logs={[
    { timestamp: '23:48:12', type: 'info', message: 'Initializing Web3 provider...' },
    { timestamp: '23:48:14', type: 'success', message: 'Connected to Mainnet Node #01' },
    { timestamp: '23:48:22', type: 'success', message: 'Transaction confirmed' }
  ]}
/>`
                        : `<!-- Pure HTML Console Logger Box -->
<div class="mi-card" style="background: #050E05; border: 2px solid #00FF66; color: #00FF66; font-family: monospace; padding: 1rem;">
  <div style="border-bottom: 1px solid #00FF66; padding-bottom: 0.5rem; margin-bottom: 0.5rem; font-weight: bold;">
    [BLOCKCHAIN_TX_LOGGER]
  </div>
  <div style="font-size: 0.85rem; line-height: 1.6;">
    <div>[23:48:12] Initializing Web3 provider connection...</div>
    <div>[23:48:14] Connected to Moon-Inferno Node #01</div>
    <div style="color: #00E5FF;">[23:48:22] Transaction confirmed in block #189420</div>
  </div>
</div>`
                    }
                  />
                </Stack>
              </CardBody>
            </Card>
          )}
        </>
      )}

      {/* Category: INPUTS & FORM CONTROLS */}
      {matchesCategory('inputs') && (
        <>
          {/* Buttons & Actions */}
          {matchesSearch('button action triggers buttons interactive tactile') && (
            <Card>
              <CardHeader>
                <Stack direction="row" align="center" gap="0.5rem">
                  <ZapIcon size={18} /> Buttons &amp; Action Triggers
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
                    title={`FULL COPY-PASTE CODE SNIPPET (BUTTONS — ${snippetFormat === 'react' ? 'REACT JSX' : 'PURE HTML'})`}
                    code={
                      snippetFormat === 'react'
                        ? `import { Button } from '@moon-inferno/react';
import { FlameIcon, ShieldIcon, SparklesIcon, GamepadIcon } from '@moon-inferno/icons';

// 1. Button Variants (inferno | outline | ghost | pixel | danger | success)
<Button variant="inferno" leftIcon={<FlameIcon size={16} />}>Inferno Variant</Button>
<Button variant="outline" leftIcon={<ShieldIcon size={16} />}>Outline Variant</Button>
<Button variant="ghost" leftIcon={<SparklesIcon size={16} />}>Ghost Variant</Button>
<Button variant="pixel" leftIcon={<GamepadIcon size={16} />}>Pixel Variant</Button>

// 2. Button Sizes (sm | md | lg)
<Button size="sm" variant="inferno">Small (32px)</Button>
<Button size="md" variant="inferno">Medium (42px)</Button>
<Button size="lg" variant="inferno">Large (50px)</Button>`
                        : `<!-- Pure HTML Button Classes (with Moon-Inferno CDN) -->
<!-- 1. Variants -->
<button class="mi-button mi-button--inferno">Inferno Variant</button>
<button class="mi-button mi-button--outline">Outline Variant</button>
<button class="mi-button mi-button--ghost">Ghost Variant</button>
<button class="mi-button mi-button--pixel">Pixel Variant</button>

<!-- 2. Sizes -->
<button class="mi-button mi-button--inferno mi-button--sm">Small</button>
<button class="mi-button mi-button--inferno mi-button--md">Medium</button>
<button class="mi-button mi-button--inferno mi-button--lg">Large</button>
<button class="mi-button mi-button--inferno" disabled>Disabled</button>`
                    }
                  />
                </Stack>
              </CardBody>
            </Card>
          )}

          {/* SearchBar Component Showcase */}
          {matchesSearch('searchbar search bar input filter search icon shortcut clearable escape') && (
            <Card>
              <CardHeader>
                <Stack direction="row" align="center" gap="0.5rem">
                  <SearchIcon size={18} /> SearchBar Primitives (Retro &amp; Cyberpunk Variants)
                </Stack>
              </CardHeader>
              <CardBody>
                <Stack gap="1.5rem">
                  <p style={{ margin: 0, fontSize: '0.875rem', fontWeight: 600, color: '#F8FAFC' }}>
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
                  </Stack>
                  <CodeBlock
                    collapsible
                    title={`FULL COPY-PASTE CODE SNIPPET (SEARCHBAR — ${snippetFormat === 'react' ? 'REACT JSX' : 'PURE HTML'})`}
                    code={
                      snippetFormat === 'react'
                        ? `import { SearchBar } from '@moon-inferno/react';

<SearchBar
  variant="inferno"
  placeholder="Search database..."
  shortcutKey="Ctrl+K"
  onSearch={(query) => console.log(query)}
/>`
                        : `<!-- Pure HTML SearchBar Container -->
<div class="mi-search-bar mi-search-bar--inferno" role="search">
  <input type="search" class="mi-search-bar__input" placeholder="Search database (Ctrl+K)..." />
  <span class="mi-search-bar__shortcut">Ctrl+K</span>
</div>`
                    }
                  />
                </Stack>
              </CardBody>
            </Card>
          )}

          {/* DatePicker Component */}
          {matchesSearch('datepicker calendar date time schedule launch picker') && (
            <Card>
              <CardHeader>
                <Stack direction="row" align="center" gap="0.5rem">
                  <SettingsIcon size={18} /> DatePicker &amp; Calendar Primitives
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
                    title={`FULL COPY-PASTE CODE SNIPPET (DATEPICKER — ${snippetFormat === 'react' ? 'REACT JSX' : 'PURE HTML'})`}
                    code={
                      snippetFormat === 'react'
                        ? `import { DatePicker } from '@moon-inferno/react';

<DatePicker
  label="Launch Date"
  variant="inferno"
  value={selectedDate}
  onChange={(date: Date) => setSelectedDate(date)}
/>`
                        : `<!-- Pure HTML Date Input -->
<div class="mi-input-container">
  <label class="mi-input-label">Launch Date</label>
  <input type="date" class="mi-input mi-input--inferno" />
</div>`
                    }
                  />
                </Stack>
              </CardBody>
            </Card>
          )}

          {/* Form Inputs & Custom Select */}
          {matchesSearch('input select slider password form controls') && (
            <Grid minChildWidth="300px" gap="1.5rem">
              <Card>
                <CardHeader>
                  <Stack direction="row" align="center" gap="0.5rem">
                    <CodeIcon size={18} /> Form Inputs &amp; Custom Select
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

                    <Slider
                      label={`POWER LEVEL OUTPUT: ${sliderValue}%`}
                      value={sliderValue}
                      onChange={setSliderValue}
                      min={0}
                      max={100}
                    />

                    <CodeBlock
                      collapsible
                      title={`FULL COPY-PASTE CODE SNIPPET (INPUT, SELECT, SLIDER — ${snippetFormat === 'react' ? 'REACT JSX' : 'PURE HTML'})`}
                      code={
                        snippetFormat === 'react'
                          ? `import { Input, Select, Slider } from '@moon-inferno/react';

<Input label="TRANSMISSION_KEY" placeholder="Key..." />
<Select label="SECURITY_PROTOCOL" value={protocol} onChange={setProtocol} options={opts} />
<Slider label="POWER LEVEL" value={power} onChange={setPower} min={0} max={100} />`
                          : `<!-- Pure HTML Form Controls -->
<div class="mi-input-container">
  <label class="mi-input-label">TRANSMISSION_KEY</label>
  <input type="text" class="mi-input" placeholder="e.g. ALPHA-994" />
</div>

<div class="mi-input-container">
  <label class="mi-input-label">SECURITY_PROTOCOL</label>
  <select class="mi-input">
    <option value="alpha">Protocol Alpha</option>
    <option value="beta">Protocol Beta</option>
  </select>
</div>

<div class="mi-input-container">
  <label class="mi-input-label">POWER LEVEL</label>
  <input type="range" class="mi-slider" min="0" max="100" value="75" />
</div>`
                      }
                    />
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

              {/* Checkbox, Radio, Switch */}
              <Card>
                <CardHeader>
                  <Stack direction="row" align="center" gap="0.5rem">
                    <FilterIcon size={18} /> Checkbox, Radio &amp; Switch Controls
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
                      <span style={{ fontSize: '0.875rem', fontWeight: 600, color: '#F8FAFC', display: 'block', marginBottom: '0.5rem' }}>
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

                    <CodeBlock
                      collapsible
                      title={`FULL COPY-PASTE CODE SNIPPET (CHECKBOX, RADIO & SWITCH — ${snippetFormat === 'react' ? 'REACT JSX' : 'PURE HTML'})`}
                      code={
                        snippetFormat === 'react'
                          ? `import { Checkbox, RadioGroup, Radio, Switch } from '@moon-inferno/react';

<Checkbox label="Quantum Telemetry" checked={checked} onChange={toggle} />
<RadioGroup name="mode" value={mode} onChange={setMode}>
  <Radio value="inferno" label="Solar Inferno" />
</RadioGroup>
<Switch label="CRT Scanlines" checked={isCrt} onChange={toggleCrt} />`
                          : `<!-- Pure HTML Checkbox, Radio & Switch -->
<!-- Checkbox -->
<label class="mi-checkbox">
  <input type="checkbox" checked />
  <span class="mi-checkbox__box"></span>
  <span class="mi-checkbox__label">Quantum Telemetry</span>
</label>

<!-- Radio -->
<label class="mi-radio">
  <input type="radio" name="mode" value="inferno" checked />
  <span class="mi-radio__circle"></span>
  <span class="mi-radio__label">Solar Inferno</span>
</label>

<!-- Switch Toggle -->
<label class="mi-switch">
  <input type="checkbox" />
  <span class="mi-switch__track"><span class="mi-switch__thumb"></span></span>
  <span class="mi-switch__label">CRT Scanline Shaders</span>
</label>`
                      }
                    />
                  </Stack>
                </CardBody>
              </Card>
            </Grid>
          )}

          {/* ColorPicker */}
          {matchesSearch('colorpicker color palette swatches picker') && (
            <Card>
              <CardHeader>
                <Stack direction="row" align="center" gap="0.5rem">
                  <SparklesIcon size={18} /> ColorPicker Palette Primitives
                </Stack>
              </CardHeader>
              <CardBody>
                <Stack gap="1.5rem">
                  <p style={{ margin: 0, fontSize: '0.875rem', fontWeight: 600, color: '#F8FAFC' }}>
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
                  <CodeBlock
                    collapsible
                    title={`FULL COPY-PASTE CODE SNIPPET (COLORPICKER — ${snippetFormat === 'react' ? 'REACT JSX' : 'PURE HTML'})`}
                    code={
                      snippetFormat === 'react'
                        ? `import { ColorPicker } from '@moon-inferno/react';

<ColorPicker
  label="ACCENT COLOR"
  variant="inferno"
  value={color}
  onChange={(hex: string) => setColor(hex)}
/>`
                        : `<!-- Pure HTML Color Input -->
<div class="mi-input-container">
  <label class="mi-input-label">ACCENT COLOR</label>
  <input type="color" class="mi-input" value="#FF4D00" />
</div>`
                    }
                  />
                </Stack>
              </CardBody>
            </Card>
          )}
        </>
      )}

      {/* Category: DATA & FEEDBACK */}
      {matchesCategory('data') && (
        <>
          {/* Table & Data Grid */}
          {matchesSearch('table grid data rows columns cells header striped hover') && (
            <Card>
              <CardHeader>
                <Stack direction="row" align="center" gap="0.5rem">
                  <LayersIcon size={18} /> Table &amp; Data Grid Primitives
                </Stack>
              </CardHeader>
              <CardBody>
                <Stack gap="1.5rem">
                  <p style={{ margin: 0, fontSize: '0.875rem', fontWeight: 600, color: '#F8FAFC' }}>
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
                  <CodeBlock
                    collapsible
                    title={`FULL COPY-PASTE CODE SNIPPET (TABLE — ${snippetFormat === 'react' ? 'REACT JSX' : 'PURE HTML'})`}
                    code={
                      snippetFormat === 'react'
                        ? `import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell, TableCaption, Badge } from '@moon-inferno/react';

<Table variant="inferno" striped hoverable>
  <TableCaption>Cluster Status Log</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead>NODE ID</TableHead>
      <TableHead>STATUS</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>#NODE-01</TableCell>
      <TableCell><Badge variant="success">ONLINE</Badge></TableCell>
    </TableRow>
  </TableBody>
</Table>`
                        : `<!-- Pure HTML Table (with Moon-Inferno CDN) -->
<table class="mi-table mi-table--inferno mi-table--striped mi-table--hoverable">
  <caption>Cluster Status Log</caption>
  <thead>
    <tr><th>NODE ID</th><th>STATUS</th><th>LATENCY</th></tr>
  </thead>
  <tbody>
    <tr>
      <td>#NODE-01</td>
      <td><span class="mi-badge mi-badge--success">ONLINE</span></td>
      <td>12ms</td>
    </tr>
  </tbody>
</table>`
                    }
                  />
                </Stack>
              </CardBody>
            </Card>
          )}

          {/* PieChart & Donut Chart */}
          {matchesSearch('piechart donut chart visualization graph data percentage svg') && (
            <Card>
              <CardHeader>
                <Stack direction="row" align="center" gap="0.5rem">
                  <CpuIcon size={18} /> PieChart &amp; Donut Chart Visualizer
                </Stack>
              </CardHeader>
              <CardBody>
                <Stack gap="1.5rem">
                  <p style={{ margin: 0, fontSize: '0.875rem', fontWeight: 600, color: '#F8FAFC' }}>
                    SVG-based pie &amp; donut chart visualization with hover slice expansion, percentage calculation, and accessible table summary.
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
                        size={180}
                        data={[
                          { label: 'System Memory', value: 60, color: '#FF4D00' },
                          { label: 'GPU VRAM', value: 25, color: '#9D00FF' },
                          { label: 'Cache Storage', value: 15, color: '#FFD700' },
                        ]}
                      />
                    </Stack>
                  </Grid>
                  <CodeBlock
                    collapsible
                    title={`FULL COPY-PASTE CODE SNIPPET (PIECHART — ${snippetFormat === 'react' ? 'REACT JSX' : 'PURE HTML'})`}
                    code={
                      snippetFormat === 'react'
                        ? `import { PieChart } from '@moon-inferno/react';

<PieChart
  donut
  size={180}
  centerValue="100%"
  centerText="ALLOCATED"
  data={[
    { label: 'Cyberpunk UI', value: 45, color: '#FF4D00' },
    { label: 'Terminal Core', value: 30, color: '#00FF66' }
  ]}
/>`
                        : `<!-- Pure HTML Progress Bar alternative for charts -->
<div class="mi-progress mi-progress--inferno" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  <div class="mi-progress__bar" style="width: 75%;"></div>
</div>`
                    }
                  />
                </Stack>
              </CardBody>
            </Card>
          )}

          {/* Progress Bars & Avatars */}
          {matchesSearch('progress avatar image avatars user status initials') && (
            <Card>
              <CardHeader>
                <Stack direction="row" align="center" gap="0.5rem">
                  <UserIcon size={18} /> Progress Bars &amp; Avatars
                </Stack>
              </CardHeader>
              <CardBody>
                <Stack gap="1.5rem">
                  <Grid minChildWidth="240px" gap="1rem">
                    <Progress value={sliderValue} label="Inferno Core Charge" variant="inferno" />
                    <Progress value={65} label="Pixel Sync Progress" variant="pixel" />
                    <Progress value={85} label="Striped Matrix Stream" variant="striped" animated />
                  </Grid>

                  <Stack gap="1.5rem">
                    <Stack gap="0.5rem">
                      <span style={{ fontSize: '0.875rem', fontWeight: 600, color: '#F8FAFC' }}>
                        IMAGE AVATARS (SIZES &amp; VARIANTS):
                      </span>
                      <Stack direction="row" align="center" gap="1rem" wrap>
                        <Avatar size="sm" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80" name="Cyber Female" />
                        <Avatar size="md" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80" name="Biagio Scaglia" variant="circle" />
                        <Avatar size="lg" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80" name="Pixel Hacker" variant="pixel" />
                        <Avatar size="xl" src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=80" name="Solar Nomad" variant="square" />
                      </Stack>
                    </Stack>
                  </Stack>

                  <CodeBlock
                    collapsible
                    title={`FULL COPY-PASTE CODE SNIPPET (PROGRESS & AVATARS — ${snippetFormat === 'react' ? 'REACT JSX' : 'PURE HTML'})`}
                    code={
                      snippetFormat === 'react'
                        ? `import { Progress, Avatar } from '@moon-inferno/react';

<Progress value={75} label="Core Charge" variant="inferno" />
<Avatar size="md" src="/profile.jpg" name="Biagio Scaglia" variant="circle" />
<Avatar size="lg" name="Cyber Hacker" variant="pixel" />`
                        : `<!-- Pure HTML Progress Bars & Avatars -->
<!-- Progress Bar -->
<div class="mi-progress mi-progress--inferno">
  <div class="mi-progress__bar" style="width: 75%;"></div>
</div>

<!-- Image Avatar -->
<img class="mi-avatar mi-avatar--md mi-avatar--circle" src="/profile.jpg" alt="User Profile" />

<!-- Pixel Art Avatar -->
<img class="mi-avatar mi-avatar--lg mi-avatar--pixel" src="/avatar.png" alt="Pixel Avatar" />`
                    }
                  />
                </Stack>
              </CardBody>
            </Card>
          )}

          {/* Media Gallery & Lightbox */}
          {matchesSearch('gallery lightbox modal media image view full zoom') && (
            <Card>
              <CardHeader>
                <Stack direction="row" align="center" gap="0.5rem">
                  <EyeIcon size={18} /> Media Gallery &amp; Modal Lightbox (Gallery Primitive)
                </Stack>
              </CardHeader>
              <CardBody>
                <Stack gap="1rem">
                  <p style={{ margin: 0, fontSize: '0.875rem', fontWeight: 600, color: '#F8FAFC' }}>
                    Click any image card to open the accessible Lightbox modal with keyboard arrow navigation.
                  </p>
                  <Gallery items={GALLERY_ITEMS} />
                  <CodeBlock
                    collapsible
                    title={`FULL COPY-PASTE CODE SNIPPET (GALLERY — ${snippetFormat === 'react' ? 'REACT JSX' : 'PURE HTML'})`}
                    code={
                      snippetFormat === 'react'
                        ? `import { Gallery } from '@moon-inferno/react';

<Gallery items={[
  { id: '1', src: '/img1.png', title: 'NODE_01', caption: 'Crimson visual stream.' }
]} />`
                        : `<!-- Pure HTML Media Grid (with Moon-Inferno CSS) -->
<div class="mi-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem;">
  <div class="mi-card" style="overflow: hidden;">
    <img src="/img1.png" style="width: 100%; display: block;" alt="NODE_01" />
    <div class="mi-card-body"><strong style="font-size: 0.85rem;">NODE_01</strong></div>
  </div>
</div>`
                    }
                  />
                </Stack>
              </CardBody>
            </Card>
          )}

          {/* SignalLight, Loaders & Badges */}
          {matchesSearch('signallight loader badge toast feedback status led') && (
            <Card>
              <CardHeader>
                <Stack direction="row" align="center" gap="0.5rem">
                  <SparklesIcon size={18} /> SignalLight, Loaders &amp; Status Indicators
                </Stack>
              </CardHeader>
              <CardBody>
                <Stack gap="1.5rem">
                  <Stack gap="0.5rem">
                    <span style={{ fontSize: '0.875rem', fontWeight: 600, color: '#F8FAFC' }}>SIGNAL LIGHT (LED STATUS WITH PULSE):</span>
                    <Stack direction="row" align="center" gap="1.5rem" wrap>
                      <SignalLight status="online" label="CORE MATRIX" pulse />
                      <SignalLight status="warning" label="THERMAL OVERLOAD" pulse />
                      <SignalLight status="busy" label="SATELLITE BUSY" pulse />
                      <SignalLight status="offline" label="STANDBY NODE" pulse={false} />
                    </Stack>
                  </Stack>

                  <Stack gap="0.5rem">
                    <span style={{ fontSize: '0.875rem', fontWeight: 600, color: '#F8FAFC' }}>SPINNER LOADERS &amp; BADGES:</span>
                    <Stack direction="row" align="center" gap="1.5rem" wrap>
                      <Loader size="sm" variant="inferno" label="Connecting..." />
                      <Loader size="md" variant="pixel" />
                      <Badge variant="inferno" icon={<FlameIcon size={12} />}>SOLAR_INFERNO</Badge>
                      <Badge variant="success" icon={<CheckIcon size={12} />}>VERIFIED</Badge>
                      <Badge variant="error" icon={<WarnIcon size={12} />}>HIGH_PRIORITY</Badge>
                    </Stack>
                  </Stack>

                  <CodeBlock
                    collapsible
                    title={`FULL COPY-PASTE CODE SNIPPET (SIGNALLIGHT & BADGES — ${snippetFormat === 'react' ? 'REACT JSX' : 'PURE HTML'})`}
                    code={
                      snippetFormat === 'react'
                        ? `import { SignalLight, Loader, Badge } from '@moon-inferno/react';
import { FlameIcon, CheckIcon } from '@moon-inferno/icons';

<SignalLight status="online" label="CORE MATRIX" pulse />
<Loader size="sm" variant="inferno" label="Connecting..." />
<Badge variant="inferno" icon={<FlameIcon size={12} />}>SOLAR_INFERNO</Badge>
<Badge variant="success" icon={<CheckIcon size={12} />}>VERIFIED</Badge>`
                        : `<!-- Pure HTML Badges & Status Indicators (CDN Ready) -->
<!-- Badges -->
<span class="mi-badge mi-badge--inferno">SOLAR_INFERNO</span>
<span class="mi-badge mi-badge--success">VERIFIED</span>
<span class="mi-badge mi-badge--error">ERROR</span>
<span class="mi-badge mi-badge--pixel">PIXEL_PERFECT</span>

<!-- Signal Light Indicator -->
<div class="mi-signal-light mi-signal-light--online"><span>CORE MATRIX</span></div>
<div class="mi-signal-light mi-signal-light--warning"><span>WARNING</span></div>

<!-- Loaders -->
<div class="mi-loader mi-loader--inferno mi-loader--sm"></div>
<div class="mi-loader mi-loader--pixel mi-loader--md"></div>`
                    }
                  />
                </Stack>
              </CardBody>
            </Card>
          )}

          {/* Interactive Toast Notifications */}
          {matchesSearch('toast addtoast notification alert trigger alert message') && (
            <Card>
              <CardHeader>
                <Stack direction="row" align="center" gap="0.5rem">
                  <ZapIcon size={18} /> Interactive Toast Notifications (useToast Hook)
                </Stack>
              </CardHeader>
              <CardBody>
                <Stack gap="1rem">
                  <p style={{ margin: 0, fontSize: '0.875rem', fontWeight: 600, color: '#F8FAFC' }}>
                    Click buttons to trigger real-time toasts with auto-dismiss timers and accessible <code>role="alert"</code>:
                  </p>
                  <Stack direction="row" align="center" gap="0.75rem" wrap>
                    <Button
                      size="sm"
                      variant="inferno"
                      leftIcon={<FlameIcon size={14} />}
                      onClick={() => addToast('Quantum transmission received successfully from Relay #09', { variant: 'inferno' })}
                    >
                      Inferno Toast
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      leftIcon={<CheckIcon size={14} />}
                      onClick={() => addToast('Encryption handshake verified with Node Alpha-99', { variant: 'success' })}
                    >
                      Success Toast
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      leftIcon={<WarnIcon size={14} />}
                      onClick={() => addToast('Subsystem memory pressure at 89% capacity', { variant: 'warn' })}
                    >
                      Warning Toast
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      leftIcon={<CloseIcon size={14} />}
                      onClick={() => addToast('Critical fault: Satellite telemetry link severed', { variant: 'error' })}
                    >
                      Error Toast
                    </Button>
                  </Stack>
                  <CodeBlock
                    collapsible
                    title={`FULL COPY-PASTE CODE SNIPPET (USETOAST — ${snippetFormat === 'react' ? 'REACT JSX' : 'PURE HTML'})`}
                    code={
                      snippetFormat === 'react'
                        ? `import { useToast, Button } from '@moon-inferno/react';

export function ToastDemo() {
  const { addToast } = useToast();

  return (
    <Button
      variant="inferno"
      onClick={() => addToast('Transmission received!', { variant: 'inferno', duration: 4000 })}
    >
      Show Inferno Toast
    </Button>
  );
}`
                        : `<!-- Pure HTML Toast Alert Notification -->
<div class="mi-toast mi-toast--inferno" role="alert" style="position: fixed; bottom: 20px; right: 20px; z-index: 9999;">
  <div class="mi-toast__title">Transmission received!</div>
  <div class="mi-toast__description">Satellite telemetry confirmed.</div>
</div>`
                    }
                  />
                </Stack>
              </CardBody>
            </Card>
          )}
        </>
      )}

      {/* Category: LAYOUT & NAVIGATION */}
      {matchesCategory('layout') && (
        <>
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
                    title={`FULL COPY-PASTE CODE SNIPPET (NAVBAR — ${snippetFormat === 'react' ? 'REACT JSX' : 'PURE HTML'})`}
                    code={
                      snippetFormat === 'react'
                        ? `import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, Button } from '@moon-inferno/react';
import { FlameIcon } from '@moon-inferno/icons';

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
        <NavbarItem>
          <Button size="sm" variant="inferno">Connect</Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}`
                        : `<!-- Pure HTML Navbar (Bootstrap-style) -->
<nav class="mi-navbar mi-navbar--inferno">
  <div class="mi-navbar__brand">
    <strong>INFERNO_NAV</strong>
  </div>
  <div class="mi-navbar__content">
    <a href="#" class="mi-navbar__item mi-navbar__item--active">Dashboard</a>
    <a href="#" class="mi-navbar__item">Telemetry</a>
    <a href="#" class="mi-navbar__item">Docs</a>
    <button class="mi-button mi-button--inferno mi-button--sm">Connect</button>
  </div>
</nav>`
                    }
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
                    title={`FULL COPY-PASTE CODE SNIPPET (COMMANDPALETTE — ${snippetFormat === 'react' ? 'REACT JSX' : 'PURE HTML'})`}
                    code={
                      snippetFormat === 'react'
                        ? `import { useState } from 'react';
import { CommandPalette, Button } from '@moon-inferno/react';

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
          { id: '1', label: 'Theme: Inferno', group: 'Themes', onSelect: () => {} }
        ]}
      />
    </>
  );
}`
                        : `<!-- Pure HTML Modal Search Box -->
<div class="mi-dialog-backdrop">
  <div class="mi-dialog" role="dialog" aria-modal="true" style="max-width: 500px;">
    <div class="mi-dialog__header">
      <input type="search" class="mi-input" placeholder="Type a command or search (Cmd+K)..." autofocus />
    </div>
  </div>
</div>`
                    }
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
                        <DropdownItem icon={<LockIcon size={14} />}>Security &amp; Keys</DropdownItem>
                        <DropdownDivider />
                        <DropdownItem icon={<CloseIcon size={14} />} destructive>Log Out</DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  </Stack>
                  <CodeBlock
                    collapsible
                    title={`FULL COPY-PASTE CODE SNIPPET (DROPDOWN — ${snippetFormat === 'react' ? 'REACT JSX' : 'PURE HTML'})`}
                    code={
                      snippetFormat === 'react'
                        ? `import { Dropdown, DropdownTrigger, DropdownMenu, DropdownSection, DropdownItem, DropdownDivider, Button } from '@moon-inferno/react';
import { SettingsIcon, FlameIcon, TerminalIcon } from '@moon-inferno/icons';

<Dropdown variant="inferno">
  <DropdownTrigger>
    <Button variant="inferno" leftIcon={<SettingsIcon size={16} />}>Quick Actions</Button>
  </DropdownTrigger>

  <DropdownMenu>
    <DropdownSection title="System Controls">
      <DropdownItem icon={<FlameIcon size={14} />}>Set Theme: Inferno</DropdownItem>
      <DropdownItem icon={<TerminalIcon size={14} />}>Set Theme: Terminal</DropdownItem>
    </DropdownSection>
  </DropdownMenu>
</Dropdown>`
                        : `<!-- Pure HTML Dropdown Menu (CDN Styled) -->
<div class="mi-dropdown mi-dropdown--inferno">
  <button class="mi-button mi-button--inferno">Quick Actions ▼</button>
  <div class="mi-dropdown__menu" role="menu">
    <div class="mi-dropdown__section-title">System Controls</div>
    <a href="#" class="mi-dropdown__item" role="menuitem">🔥 Set Theme: Inferno</a>
    <a href="#" class="mi-dropdown__item" role="menuitem">📟 Set Theme: Terminal</a>
  </div>
</div>`
                    }
                  />
                </Stack>
              </CardBody>
            </Card>
          )}

          {/* Accessible Breadcrumbs Navigation */}
          {matchesSearch('breadcrumbs breadcrumb navigation slash separator chevron hierarchy') && (
            <Card>
              <CardHeader>
                <Stack direction="row" align="center" gap="0.5rem">
                  <LayersIcon size={18} /> Breadcrumbs Navigation Primitives
                </Stack>
              </CardHeader>
              <CardBody>
                <Stack gap="1.5rem">
                  <Stack gap="0.5rem">
                    <span style={{ fontSize: '0.875rem', fontWeight: 600, color: '#F8FAFC' }}>DEFAULT VARIANT (SLASH SEPARATOR):</span>
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
                    <span style={{ fontSize: '0.875rem', fontWeight: 600, color: '#F8FAFC' }}>PIXEL VARIANT WITH CUSTOM SEPARATOR (&gt;):</span>
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

                  <CodeBlock
                    collapsible
                    title={`FULL COPY-PASTE CODE SNIPPET (BREADCRUMBS — ${snippetFormat === 'react' ? 'REACT JSX' : 'PURE HTML'})`}
                    code={
                      snippetFormat === 'react'
                        ? `import { Breadcrumbs } from '@moon-inferno/react';
import { FlameIcon } from '@moon-inferno/icons';

<Breadcrumbs
  variant="pixel"
  separator=">"
  items={[
    { label: 'HOME', icon: <FlameIcon size={14} />, href: '#' },
    { label: 'ARCADE', href: '#' },
    { label: 'HIGH SCORES', isCurrent: true }
  ]}
/>`
                        : `<!-- Pure HTML Breadcrumbs (CDN Styled) -->
<nav class="mi-breadcrumbs mi-breadcrumbs--pixel" aria-label="Breadcrumb">
  <ol>
    <li class="mi-breadcrumbs__item"><a href="#">HOME</a></li>
    <li class="mi-breadcrumbs__separator">&gt;</li>
    <li class="mi-breadcrumbs__item"><a href="#">ARCADE</a></li>
    <li class="mi-breadcrumbs__separator">&gt;</li>
    <li class="mi-breadcrumbs__item mi-breadcrumbs__item--current" aria-current="page">HIGH SCORES</li>
  </ol>
</nav>`
                    }
                  />
                </Stack>
              </CardBody>
            </Card>
          )}

          {/* Interactive Tabs Showcase */}
          {matchesSearch('tabs tab variants inferno pills pixel underline isfitted badge icon') && (
            <Card>
              <CardHeader>
                <Stack direction="row" align="center" gap="0.5rem">
                  <LayersIcon size={18} /> Interactive Tabs Showcase (All 4 Variants)
                </Stack>
              </CardHeader>
              <CardBody>
                <Stack gap="1.5rem">
                  <p style={{ margin: 0, fontSize: '0.875rem', fontWeight: 600, color: '#F8FAFC' }}>
                    Fully accessible WAI-ARIA tab primitive with 4 distinct design variants (<code>inferno</code>, <code>pills</code>, <code>pixel</code>, <code>underline</code>), badges, icons, and keyboard arrow navigation.
                  </p>
                  
                  <Stack direction="row" align="center" gap="0.75rem" wrap>
                    <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#F8FAFC' }}>Design Variant:</span>
                    {(['inferno', 'pills', 'pixel', 'underline'] as const).map((v) => (
                      <Button
                        key={v}
                        size="sm"
                        variant={demoTabsVariant === v ? 'inferno' : 'outline'}
                        onClick={() => setDemoTabsVariant(v)}
                      >
                        {v.toUpperCase()}
                      </Button>
                    ))}
                  </Stack>

                  <div style={{ padding: '1rem', background: '#0D0B12', borderRadius: '8px', border: '1px solid var(--mi-color-border, #332D40)' }}>
                    <Tabs
                      variant={demoTabsVariant}
                      activeTabId={demoTabId}
                      onChange={setDemoTabId}
                      items={[
                        {
                          id: 'tab-1',
                          label: 'TELEMETRY NODE',
                          icon: <FlameIcon size={14} />,
                          badge: 'LIVE',
                          content: (
                            <div style={{ padding: '1rem 0', color: '#F8FAFC' }}>
                              <p style={{ margin: 0, fontWeight: 600 }}>Active telemetry stream connected to Moon-Inferno Satellite #01.</p>
                              <p style={{ margin: '0.5rem 0 0 0', color: '#94A3B8', fontSize: '0.85rem' }}>Full keyboard arrow navigation (Left/Right) and automated ARIA roving tabindex support.</p>
                            </div>
                          )
                        },
                        {
                          id: 'tab-2',
                          label: 'SYSTEM METRICS',
                          icon: <CpuIcon size={14} />,
                          badge: '99.9%',
                          content: (
                            <div style={{ padding: '1rem 0', color: '#F8FAFC' }}>
                              <p style={{ margin: 0, fontWeight: 600 }}>Quantum CPU cluster operating at 14% thermal load.</p>
                              <p style={{ margin: '0.5rem 0 0 0', color: '#94A3B8', fontSize: '0.85rem' }}>All 50+ WCAG 2.1 AA components ready for production deployment.</p>
                            </div>
                          )
                        },
                        {
                          id: 'tab-3',
                          label: 'SECURITY PROTOCOLS',
                          icon: <ShieldIcon size={14} />,
                          content: (
                            <div style={{ padding: '1rem 0', color: '#F8FAFC' }}>
                              <p style={{ margin: 0, fontWeight: 600 }}>Zero-trust cryptographic handshake active.</p>
                              <p style={{ margin: '0.5rem 0 0 0', color: '#94A3B8', fontSize: '0.85rem' }}>Y2K and Cyberpunk design tokens loaded securely into browser DOM.</p>
                            </div>
                          )
                        }
                      ]}
                    />
                  </div>

                  <CodeBlock
                    collapsible
                    title={`FULL COPY-PASTE CODE SNIPPET (TABS — ${snippetFormat === 'react' ? 'REACT JSX' : 'PURE HTML'})`}
                    code={
                      snippetFormat === 'react'
                        ? `import { Tabs } from '@moon-inferno/react';
import { FlameIcon, CpuIcon } from '@moon-inferno/icons';

<Tabs
  variant="${demoTabsVariant}" // inferno | pills | pixel | underline
  size="md"
  activeTabId={activeTab}
  onChange={setActiveTab}
  items={[
    { id: '1', label: 'TELEMETRY NODE', icon: <FlameIcon size={14} />, badge: 'LIVE', content: <Content1 /> },
    { id: '2', label: 'SYSTEM METRICS', icon: <CpuIcon size={14} />, content: <Content2 /> }
  ]}
/>`
                        : `<!-- Pure HTML Tabs (with Moon-Inferno CDN) -->
<div class="mi-tabs mi-tabs--${demoTabsVariant}">
  <div class="mi-tabs__list" role="tablist">
    <button class="mi-tabs__tab mi-tabs__tab--active" role="tab" aria-selected="true">TELEMETRY NODE</button>
    <button class="mi-tabs__tab" role="tab" aria-selected="false">SYSTEM METRICS</button>
  </div>
  <div class="mi-tabs__panel" role="tabpanel">
    <p>Node 01 active telemetry stream.</p>
  </div>
</div>`
                    }
                  />
                </Stack>
              </CardBody>
            </Card>
          )}

          {/* Dialog & Accordion */}
          {matchesSearch('dialog modal accordion collapse expansion details window') && (
            <Grid minChildWidth="300px" gap="1.5rem">
              <Card>
                <CardHeader>
                  <Stack direction="row" align="center" gap="0.5rem">
                    <LayersIcon size={18} /> Dialog / Modal Window Primitive
                  </Stack>
                </CardHeader>
                <CardBody>
                  <Stack gap="1rem">
                    <p style={{ margin: 0, fontSize: '0.875rem', fontWeight: 600, color: '#F8FAFC' }}>
                      Accessible modal dialog with backdrop blur, focus trapping, and <kbd>Escape</kbd> key dismissal.
                    </p>
                    <Button variant="inferno" onClick={() => setIsDialogOpen(true)} leftIcon={<ShieldIcon size={16} />}>
                      Open Security Clearance Dialog
                    </Button>

                    <Dialog isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)} title="SECURITY CLEARANCE OVERRIDE">
                      <Stack gap="1rem">
                        <p style={{ margin: 0 }}>
                          You are about to initiate quantum decryption on satellite telemetry cluster <strong>ALPHA-99</strong>.
                        </p>
                        <p style={{ margin: 0, color: 'var(--mi-color-text-muted)', fontSize: '0.85rem' }}>
                          Focus is trapped inside this modal dialog according to WAI-ARIA 1.2 modal dialog specification.
                        </p>
                      </Stack>
                      <DialogFooter>
                        <Button variant="outline" size="sm" onClick={() => setIsDialogOpen(false)}>Cancel</Button>
                        <Button
                          variant="inferno"
                          size="sm"
                          onClick={() => {
                            setIsDialogOpen(false);
                            addToast('Quantum decryption protocol authorized!', { variant: 'success' });
                          }}
                        >
                          Confirm Override
                        </Button>
                      </DialogFooter>
                    </Dialog>

                    <CodeBlock
                      collapsible
                      title={`FULL COPY-PASTE CODE SNIPPET (DIALOG MODAL — ${snippetFormat === 'react' ? 'REACT JSX' : 'PURE HTML'})`}
                      code={
                        snippetFormat === 'react'
                          ? `import { useState } from 'react';
import { Dialog, DialogFooter, Button } from '@moon-inferno/react';

export function DialogDemo() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button variant="inferno" onClick={() => setIsOpen(true)}>Open Modal</Button>
      <Dialog isOpen={isOpen} onClose={() => setIsOpen(false)} title="Security Override">
        <p>Focus is trapped inside this modal dialog.</p>
        <DialogFooter>
          <Button variant="outline" onClick={() => setIsOpen(false)}>Cancel</Button>
          <Button variant="inferno" onClick={() => setIsOpen(false)}>Confirm</Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}`
                          : `<!-- Pure HTML Modal Dialog (CDN Ready) -->
<div class="mi-dialog-backdrop">
  <div class="mi-dialog" role="dialog" aria-modal="true" aria-labelledby="dialog-title">
    <div class="mi-dialog__header">
      <span id="dialog-title">Security Override</span>
      <button class="mi-dialog__close-btn" aria-label="Close">✕</button>
    </div>
    <div class="mi-dialog__body">
      <p>Modal body content with focus trapping.</p>
    </div>
    <div class="mi-dialog__footer">
      <button class="mi-button mi-button--outline mi-button--sm">Cancel</button>
      <button class="mi-button mi-button--inferno mi-button--sm">Confirm</button>
    </div>
  </div>
</div>`
                      }
                    />
                  </Stack>
                </CardBody>
              </Card>

              {/* Accordion Component */}
              <Card>
                <CardHeader>
                  <Stack direction="row" align="center" gap="0.5rem">
                    <LayersIcon size={18} /> Accordion Collapsible Sections
                  </Stack>
                </CardHeader>
                <CardBody>
                  <Stack gap="1rem">
                    <Accordion>
                      <AccordionItem title="What makes Moon-Inferno unique?" defaultOpen>
                        <p style={{ margin: 0, fontSize: '0.875rem' }}>
                          Moon-Inferno unites retro/cyberpunk/Y2K aesthetics with 100% WCAG 2.1 AA accessibility and zero enterprise sterility.
                        </p>
                      </AccordionItem>
                      <AccordionItem title="How are design tokens structured?">
                        <p style={{ margin: 0, fontSize: '0.875rem' }}>
                          Tokens are standard CSS custom properties defined on <code>:root</code> and scoped theme datasets (<code>[data-theme=&quot;inferno&quot;]</code>).
                        </p>
                      </AccordionItem>
                      <AccordionItem title="Are components screen reader ready?">
                        <p style={{ margin: 0, fontSize: '0.875rem' }}>
                          Yes! Every primitive implements proper WAI-ARIA roles, live regions, aria-busy indicators, and roving tabindex navigation.
                        </p>
                      </AccordionItem>
                    </Accordion>

                    <CodeBlock
                      collapsible
                      title={`FULL COPY-PASTE CODE SNIPPET (ACCORDION — ${snippetFormat === 'react' ? 'REACT JSX' : 'PURE HTML'})`}
                      code={
                        snippetFormat === 'react'
                          ? `import { Accordion, AccordionItem } from '@moon-inferno/react';

<Accordion>
  <AccordionItem title="What makes Moon-Inferno unique?" defaultOpen>
    <p>Retro aesthetics combined with WCAG 2.1 AA accessibility.</p>
  </AccordionItem>
</Accordion>`
                          : `<!-- Pure HTML Accordion Details Element (CDN Styled) -->
<details class="mi-accordion-item" open>
  <summary class="mi-accordion-item__header">What makes Moon-Inferno unique?</summary>
  <div class="mi-accordion-item__content">
    <p>Retro aesthetics combined with WCAG 2.1 AA accessibility.</p>
  </div>
</details>`
                      }
                    />
                  </Stack>
                </CardBody>
              </Card>
            </Grid>
          )}
        </>
      )}
    </Stack>
  );
};
