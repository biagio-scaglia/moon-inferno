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
      {/* Category: RETRO & TYPOGRAPHY */}
      {matchesCategory('retro') && (
        <>
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
                    title="FULL COPY-PASTE CODE SNIPPET (CYBERCANVAS PROPS & EXPORT)"
                    code={`import { CyberCanvas } from '@moon-inferno/react';

<CyberCanvas height={280} gridOverlay strokeColor="#FF4D00" />`}
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
                    title="FULL COPY-PASTE CODE SNIPPET (MOONSAFEGLITCH ACCESSIBLE GLITCH)"
                    code={`import { MoonSafeGlitch } from '@moon-inferno/react';

<MoonSafeGlitch text="NEO_INFERNO_PROTOCOL" as="h3" />`}
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
                    title="FULL COPY-PASTE CODE SNIPPET (MOONCONSOLELOGGER LIVE STREAM PROPS)"
                    code={`import { MoonConsoleLogger } from '@moon-inferno/react';

<MoonConsoleLogger
  title="BLOCKCHAIN_TX_LOGGER"
  logs={[
    { timestamp: '23:48:12', type: 'info', message: 'Initializing Web3 provider...' },
    { timestamp: '23:48:14', type: 'success', message: 'Connected to Mainnet Node #01' },
    { timestamp: '23:48:22', type: 'success', message: 'Transaction confirmed' }
  ]}
/>`}
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
                    <SearchBar
                      variant="terminal"
                      placeholder="Terminal Green CRT SearchBar..."
                      shortcutKey="ESC"
                    />
                  </Stack>
                  <CodeBlock
                    collapsible
                    title="FULL COPY-PASTE CODE SNIPPET (SEARCHBAR VARIANTS & PROPS)"
                    code={`import { SearchBar } from '@moon-inferno/react';

// 1. Inferno Variant SearchBar
<SearchBar
  variant="inferno"
  placeholder="Search database..."
  shortcutKey="Ctrl+K"
  onSearch={(query) => console.log(query)}
/>

// 2. Pixel Variant SearchBar
<SearchBar
  variant="pixel"
  placeholder="Pixel Art Search..."
  shortcutKey="/"
/>

// 3. Terminal Variant SearchBar
<SearchBar
  variant="terminal"
  placeholder="Terminal Search..."
  shortcutKey="ESC"
/>`}
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
                      title="FULL COPY-PASTE CODE SNIPPET (INPUT, SELECT, SLIDER PROPS)"
                      code={`import { Input, Select, Slider } from '@moon-inferno/react';

// 1. Text Input with validation error message
<Input label="TRANSMISSION_KEY" placeholder="Key..." errorMessage={error} />

// 2. Select Dropdown with options array
<Select
  label="SECURITY_PROTOCOL"
  value={protocol}
  onChange={setProtocol}
  options={[
    { value: 'alpha', label: 'Protocol Alpha' },
    { value: 'beta', label: 'Protocol Beta' }
  ]}
/>

// 3. Power Slider Control
<Slider label="POWER LEVEL" value={power} onChange={setPower} min={0} max={100} />`}
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
                      title="FULL COPY-PASTE CODE SNIPPET (CHECKBOX, RADIOGROUP & SWITCH)"
                      code={`import { Checkbox, RadioGroup, Radio, Switch } from '@moon-inferno/react';

// 1. Checkbox with description
<Checkbox label="Quantum Telemetry" description="Transmits live telemetry stream." checked={checked} onChange={toggle} />

// 2. Radio Group
<RadioGroup name="mode" value={mode} onChange={setMode}>
  <Radio value="inferno" label="Solar Inferno" />
  <Radio value="cyber" label="Cyberpunk Grid" />
</RadioGroup>

// 3. Switch Toggle
<Switch label="CRT Scanline Shaders" checked={isCrt} onChange={toggleCrt} />`}
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
                    title="FULL COPY-PASTE CODE SNIPPET (COLORPICKER PROPS & PRESETS)"
                    code={`import { ColorPicker } from '@moon-inferno/react';

<ColorPicker
  label="ACCENT COLOR"
  variant="inferno"
  value={color}
  onChange={(hex: string) => setColor(hex)}
/>`}
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
                    title="FULL COPY-PASTE CODE SNIPPET (TABLE, STRIPED, HOVERABLE & BADGES)"
                    code={`import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell, TableCaption, Badge } from '@moon-inferno/react';

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
</Table>`}
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
                    title="FULL COPY-PASTE CODE SNIPPET (PIECHART & DONUT VISUALIZER)"
                    code={`import { PieChart } from '@moon-inferno/react';

// 1. Donut Chart with Center Text
<PieChart
  donut
  size={180}
  centerValue="100%"
  centerText="ALLOCATED"
  data={[
    { label: 'Cyberpunk UI', value: 45, color: '#FF4D00' },
    { label: 'Terminal Core', value: 30, color: '#00FF66' }
  ]}
/>

// 2. Solid Pie Chart
<PieChart
  size={180}
  data={[
    { label: 'System Memory', value: 60, color: '#FF4D00' },
    { label: 'GPU VRAM', value: 40, color: '#9D00FF' }
  ]}
/>`}
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

                    <Stack gap="0.5rem">
                      <span style={{ fontSize: '0.875rem', fontWeight: 600, color: '#F8FAFC' }}>
                        INITIALS AVATARS (FALLBACK WHEN NO IMAGE):
                      </span>
                      <Stack direction="row" align="center" gap="1rem" wrap>
                        <Avatar size="sm" name="Alpha One" />
                        <Avatar size="md" name="Biagio Scaglia" variant="circle" />
                        <Avatar size="lg" name="Cyber Punk" variant="pixel" />
                        <Avatar size="xl" name="Solar Inferno" variant="square" />
                      </Stack>
                    </Stack>
                  </Stack>

                  <CodeBlock
                    collapsible
                    title="FULL COPY-PASTE CODE SNIPPET (PROGRESS & AVATAR VARIANTS)"
                    code={`import { Progress, Avatar } from '@moon-inferno/react';

// 1. Progress Bar Variants (inferno | pixel | striped)
<Progress value={75} label="Core Charge" variant="inferno" />
<Progress value={85} label="Matrix Stream" variant="striped" animated />

// 2. Avatar with Image
<Avatar size="md" src="/profile.jpg" name="Biagio Scaglia" variant="circle" />

// 3. Fallback Initials Avatar (square | pixel | circle)
<Avatar size="lg" name="Cyber Hacker" variant="pixel" />`}
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
                    Click any image card to open the accessible Lightbox modal with keyboard arrow navigation (Left/Right arrow keys, Escape key dismissal).
                  </p>
                  <Gallery items={GALLERY_ITEMS} />
                  <CodeBlock
                    collapsible
                    title="FULL COPY-PASTE CODE SNIPPET (GALLERY & LIGHTBOX MODAL)"
                    code={`import { Gallery } from '@moon-inferno/react';

<Gallery items={[
  { id: '1', src: '/img1.png', title: 'NODE_01', caption: 'Atmospheric crimson visual.' },
  { id: '2', src: '/img2.png', title: 'NODE_02', caption: 'Cyberpunk grid streams.' }
]} />`}
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
                    title="FULL COPY-PASTE CODE SNIPPET (SIGNALLIGHT, LOADER & BADGE)"
                    code={`import { SignalLight, Loader, Badge } from '@moon-inferno/react';
import { FlameIcon, CheckIcon, WarnIcon } from '@moon-inferno/icons';

// 1. SignalLight (online | warning | error | offline with blink)
<SignalLight status="online" label="CORE MATRIX" blink />
<SignalLight status="warning" label="THERMAL OVERLOAD" blink />

// 2. Loaders (sizes sm | md | lg, variants inferno | pixel)
<Loader size="sm" variant="inferno" label="Connecting..." />
<Loader size="md" variant="pixel" />

// 3. Badges (inferno | success | error | warn | pixel | outline)
<Badge variant="inferno" icon={<FlameIcon size={12} />}>SOLAR_INFERNO</Badge>
<Badge variant="success" icon={<CheckIcon size={12} />}>VERIFIED</Badge>`}
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
                    title="FULL COPY-PASTE CODE SNIPPET (USETOAST HOOK & VARIANTS)"
                    code={`import { useToast, Button } from '@moon-inferno/react';

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
}`}
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
                        <DropdownItem icon={<LockIcon size={14} />}>Security &amp; Keys</DropdownItem>
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

                  <Stack gap="0.5rem">
                    <span style={{ fontSize: '0.875rem', fontWeight: 600, color: '#F8FAFC' }}>GHOST VARIANT WITH ICONS:</span>
                    <Breadcrumbs variant="ghost">
                      <BreadcrumbItem href="#" icon={<TerminalIcon size={14} />}>Console</BreadcrumbItem>
                      <BreadcrumbItem href="#" icon={<ShieldIcon size={14} />}>Protocols</BreadcrumbItem>
                      <BreadcrumbItem isCurrent icon={<SparklesIcon size={14} />}>Active Transmission</BreadcrumbItem>
                    </Breadcrumbs>
                  </Stack>

                  <CodeBlock
                    collapsible
                    title="FULL COPY-PASTE CODE SNIPPET (BREADCRUMBS VARIANTS & CUSTOM SEPARATORS)"
                    code={`import { Breadcrumbs, BreadcrumbItem } from '@moon-inferno/react';
import { FlameIcon, TerminalIcon, ShieldIcon, SparklesIcon } from '@moon-inferno/icons';

// 1. Array declarative format
<Breadcrumbs
  variant="pixel"
  separator=">"
  items={[
    { label: 'HOME', icon: <FlameIcon size={14} />, href: '#' },
    { label: 'ARCADE', href: '#' },
    { label: 'HIGH SCORES', isCurrent: true }
  ]}
/>

// 2. JSX Composition format
<Breadcrumbs variant="ghost">
  <BreadcrumbItem href="#" icon={<TerminalIcon size={14} />}>Console</BreadcrumbItem>
  <BreadcrumbItem href="#" icon={<ShieldIcon size={14} />}>Protocols</BreadcrumbItem>
  <BreadcrumbItem isCurrent icon={<SparklesIcon size={14} />}>Active Transmission</BreadcrumbItem>
</Breadcrumbs>`}
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
                    title="FULL COPY-PASTE CODE SNIPPET (TABS VARIANTS, ICONS, BADGES & SIZES)"
                    code={`import { Tabs } from '@moon-inferno/react';
import { FlameIcon, CpuIcon, ShieldIcon } from '@moon-inferno/icons';

<Tabs
  variant="${demoTabsVariant}" // inferno | pills | pixel | underline
  size="md" // sm | md | lg
  activeTabId={activeTab}
  onChange={setActiveTab}
  items={[
    {
      id: 'tab-1',
      label: 'TELEMETRY NODE',
      icon: <FlameIcon size={14} />,
      badge: 'LIVE',
      content: <div>Node 01 telemetry active</div>
    },
    {
      id: 'tab-2',
      label: 'SYSTEM METRICS',
      icon: <CpuIcon size={14} />,
      badge: '99.9%',
      content: <div>All systems nominal</div>
    },
    {
      id: 'tab-3',
      label: 'SECURITY',
      icon: <ShieldIcon size={14} />,
      content: <div>Zero-trust encryption</div>
    }
  ]}
/>`}
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
                      title="FULL COPY-PASTE CODE SNIPPET (DIALOG MODAL PROPS)"
                      code={`import { useState } from 'react';
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
}`}
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
                      title="FULL COPY-PASTE CODE SNIPPET (ACCORDION & ACCORDIONITEM)"
                      code={`import { Accordion, AccordionItem } from '@moon-inferno/react';

<Accordion>
  <AccordionItem title="What makes Moon-Inferno unique?" defaultOpen>
    <p>Retro aesthetics combined with WCAG 2.1 AA accessibility.</p>
  </AccordionItem>
  <AccordionItem title="Theme Customization">
    <p>Powered by CSS custom properties and [data-theme] datasets.</p>
  </AccordionItem>
</Accordion>`}
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
