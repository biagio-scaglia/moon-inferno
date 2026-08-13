# 🌙 Moon-Inferno — Developer Manual & API Reference

Welcome to the complete developer manual for **Moon-Inferno** (`v0.3.0`), **The Expressive Web UI Framework & Design System** designed for retro, Y2K, CRT, cyberpunk, pixel art, and experimental web applications.

---

## Table of Contents

1. [Installation & Setup](#1-installation--setup)
2. [Theme Management & `<MoonProvider>`](#2-theme-management--moonprovider)
3. [Component Reference](#3-component-reference)
   - [Core Accessible UI Primitives](#core-accessible-ui-primitives)
     - [Button](#button)
     - [Input](#input)
     - [Select](#select)
     - [Checkbox](#checkbox)
     - [Radio & RadioGroup](#radio--radiogroup)
     - [Switch](#switch)
     - [Slider](#slider)
     - [Card](#card)
     - [Avatar & AvatarGroup](#avatar--avatargroup)
     - [Progress](#progress)
     - [Breadcrumbs](#breadcrumbs)
     - [Dialog](#dialog)
     - [Accordion](#accordion)
     - [Tabs](#tabs)
     - [Tooltip](#tooltip)
     - [Toast](#toast)
     - [Container, Stack & Grid](#container-stack--grid)
   - [Moon-Inferno Signature Retro Primitives](#moon-inferno-signature-retro-primitives)
     - [GlitchText](#glitchtext)
     - [PixelText](#pixeltext)
     - [TypingText](#typingtext)
     - [NeonText](#neontext)
     - [Marquee](#marquee)
     - [Terminal](#terminal)
     - [CRTEffect](#crteffect)
     - [MatrixRain](#matrixrain)
     - [PixelContainer](#pixelcontainer)
     - [SignalLight](#signallight)
     - [CodeBlock](#codeblock)
     - [Gallery](#gallery)
     - [Loader](#loader)
4. [Vector Iconography (`@moon-inferno/icons`)](#4-vector-iconography-moon-infernoicons)
5. [Accessibility & Keyboard Navigation](#5-accessibility--keyboard-navigation)

---

## 1. Installation & Setup

Install the Moon-Inferno packages in your React project:

```bash
# Using pnpm
pnpm add @moon-inferno/core @moon-inferno/react @moon-inferno/themes @moon-inferno/icons

# Using npm
npm install @moon-inferno/core @moon-inferno/react @moon-inferno/themes @moon-inferno/icons
```

In your application entrypoint, wrap your tree in `<MoonProvider>`:

```tsx
import '@moon-inferno/react/styles.css';
import { MoonProvider } from '@moon-inferno/react';

export default function App() {
  return (
    <MoonProvider defaultTheme="moon-inferno">
      <YourAppContent />
    </MoonProvider>
  );
}
```

---

## 2. Theme Management & `<MoonProvider>`

Moon-Inferno provides three built-in themes:
- `'moon-inferno'`: Signature Solar Infernal Orange on Obsidian Space.
- `'terminal'`: Phosphor Green Matrix CRT aesthetic.
- `'y2k'`: Cyber Silver Chrome & Electric Cyan.

### Using `<MoonProvider>` & `useMoonTheme()` Hook

```tsx
import { useMoonTheme, Button } from '@moon-inferno/react';

function ThemeSwitcher() {
  const { theme, setTheme } = useMoonTheme();

  return (
    <div>
      <p>Current active theme: {theme}</p>
      <Button onClick={() => setTheme('moon-inferno')}>Inferno</Button>
      <Button onClick={() => setTheme('terminal')}>Terminal</Button>
      <Button onClick={() => setTheme('y2k')}>Y2K</Button>
    </div>
  );
}
```

---

## 3. Component Reference

### Core Accessible UI Primitives

#### `<Button>`
Tactile interactive button with stepped pixel borders, loading state `aria-busy`, and focus rings.

```tsx
import { Button } from '@moon-inferno/react';
import { FlameIcon } from '@moon-inferno/icons';

<Button variant="inferno" size="md" leftIcon={<FlameIcon size={16} />}>
  Initiate Sequence
</Button>
```

#### `<Input>`
Accessible form input control with label, helper text, and error messaging.

```tsx
import { Input } from '@moon-inferno/react';

<Input label="SIGNAL_KEY" placeholder="Key..." errorMessage={error} />
```

#### `<Select>`
Custom select dropdown primitive.

```tsx
import { Select } from '@moon-inferno/react';

<Select label="PROTOCOL" value={val} onChange={setVal} options={options} />
```

#### `<Checkbox>`
Custom checkbox control with ARIA focus ring.

```tsx
import { Checkbox } from '@moon-inferno/react';

<Checkbox label="Enable Telemetry" checked={checked} onChange={toggle} />
```

#### `<RadioGroup>` & `<Radio>`
Accessible radio button group with keyboard navigation.

```tsx
import { RadioGroup, Radio } from '@moon-inferno/react';

<RadioGroup name="mode" value={mode} onChange={setMode}>
  <Radio value="inferno" label="Solar Inferno" />
  <Radio value="terminal" label="Terminal Matrix" />
</RadioGroup>
```

#### `<Switch>`
Accessible toggle switch (`role="switch"`).

```tsx
import { Switch } from '@moon-inferno/react';

<Switch label="CRT Scanlines" checked={active} onChange={toggle} />
```

#### `<Slider>`
Range slider control.

```tsx
import { Slider } from '@moon-inferno/react';

<Slider label="Power Output" value={val} onChange={setVal} min={0} max={100} />
```

#### `<Card>`
Content container with optional headers, bodies, and footers.

```tsx
import { Card, CardHeader, CardBody } from '@moon-inferno/react';

<Card>
  <CardHeader>Header</CardHeader>
  <CardBody>Body content</CardBody>
</Card>
```

#### `<Avatar>` & `<AvatarGroup>`
User avatar with image, initials fallback, variants (`circle`, `pixel`, `square`), and stacked groups.

```tsx
import { Avatar, AvatarGroup } from '@moon-inferno/react';

<Avatar size="lg" src="https://..." name="Biagio Scaglia" variant="pixel" />
<AvatarGroup max={4}>
  <Avatar name="User 1" />
  <Avatar name="User 2" />
</AvatarGroup>
```

#### `<Breadcrumbs>` & `<BreadcrumbItem>`
WCAG 2.1 AA compliant breadcrumb navigation trail.

```tsx
import { Breadcrumbs, BreadcrumbItem } from '@moon-inferno/react';

<Breadcrumbs variant="pixel" separator=">" items={[
  { label: 'HOME', href: '#' },
  { label: 'ARCADE', isCurrent: true }
]} />
```

#### `<Dialog>`
Accessible modal dialog with focus trap and `Esc` key dismissal.

```tsx
import { Dialog, DialogFooter, Button } from '@moon-inferno/react';

<Dialog isOpen={open} onClose={() => setOpen(false)} title="CONFIRMATION">
  <p>Modal body content.</p>
  <DialogFooter>
    <Button onClick={() => setOpen(false)}>Close</Button>
  </DialogFooter>
</Dialog>
```

#### `<Dropdown>`
WAI-ARIA menu popover supporting items, sections, dividers, custom icons, and keyboard navigation.

```tsx
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, DropdownDivider } from '@moon-inferno/react';

<Dropdown variant="inferno">
  <DropdownTrigger>
    <Button>Actions Menu</Button>
  </DropdownTrigger>
  <DropdownMenu>
    <DropdownItem icon={<FlameIcon size={14} />}>Option 1</DropdownItem>
    <DropdownDivider />
    <DropdownItem destructive>Delete</DropdownItem>
  </DropdownMenu>
</Dropdown>
```

#### `<PieChart>`
SVG pie and donut chart visualization with hover slice expansion, percentage tooltips, and accessible data summary.

```tsx
import { PieChart } from '@moon-inferno/react';

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
```

#### `<ColorPicker>`
Cyberpunk color picker with preset swatches, native color trigger, hex text input, and live preview.

```tsx
import { ColorPicker } from '@moon-inferno/react';

<ColorPicker
  label="ACCENT COLOR"
  variant="inferno"
  value={color}
  onChange={(hex) => setColor(hex)}
/>
```

#### Icon Hover Effects (`@moon-inferno/icons`)
Interactive hover effect prop on all 38 SVG vector icons (`glow`, `spin`, `bounce`, `pulse`, `scale`).

```tsx
import { FlameIcon, RefreshIcon, ZapIcon } from '@moon-inferno/icons';

<FlameIcon size={32} hoverEffect="glow" />
<RefreshIcon size={32} hoverEffect="spin" />
<ZapIcon size={32} hoverEffect="bounce" />
```

#### `<Table>`
Cyberpunk data table with striped rows, hover highlighting, and semantic HTML5 WAI-ARIA accessibility.

```tsx
import { Table, TableHeader, TableHead, TableBody, TableRow, TableCell } from '@moon-inferno/react';

<Table variant="inferno" striped hoverable>
  <TableHeader>
    <TableRow>
      <TableHead>NODE ID</TableHead>
      <TableHead>STATUS</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>#NODE-01</TableCell>
      <TableCell>ONLINE</TableCell>
    </TableRow>
  </TableBody>
</Table>
```

#### `<CyberCanvas>`
Interactive HTML5 drawing canvas with pixel grid overlay, neon color palette, eraser, clear tool, and PNG image export button.

```tsx
import { CyberCanvas } from '@moon-inferno/react';

<CyberCanvas height={280} gridOverlay strokeColor="#FF4D00" />
```

#### `<SheetEditor>`
Retro CRT text editor notepad with real-time line numbering, word/char counter, copy text action, and markdown preview mode.

```tsx
import { SheetEditor } from '@moon-inferno/react';

<SheetEditor
  title="CYBER_LOG_NOTES.MD"
  defaultValue="# MOON-INFERNO NOTES..."
/>
```

#### `<MoonTypewriterDialogue>`
RPG typewriter dialogue box with gradual letter reveal and immediate WAI-ARIA `aria-live="polite"` screen-reader text fallback.

```tsx
import { MoonTypewriterDialogue } from '@moon-inferno/react';

<MoonTypewriterDialogue
  speaker="CYBER_NAVIGATOR_AI"
  text="Welcome to Moon-Inferno!"
  speed={25}
/>
```

#### `<MoonRPGGrid>`
Pixel art 2D inventory slot grid with full arrow keyboard navigation, `Space`/`Enter` slot swapping, and live voice announcements.

```tsx
import { MoonRPGGrid } from '@moon-inferno/react';

<MoonRPGGrid
  columns={5}
  totalSlots={10}
  items={[{ id: '1', name: 'Inferno Core', count: 1 }]}
/>
```

#### `<MoonHealthMeter>`
Animated gaming health, mana, and shield meters built natively on HTML5 `<meter>` elements for live percentage reporting to screen readers.

```tsx
import { MoonHealthMeter } from '@moon-inferno/react';

<MoonHealthMeter type="health" value={85} max={100} label="HP (HEALTH)" />
<MoonHealthMeter type="mana" value={60} max={100} label="MP (MANA)" />
```

#### `<MoonSafeGlitch>`
Cyberpunk RGB split glitch text that automatically disables intense flickering when `(prefers-reduced-motion: reduce)` is enabled.

```tsx
import { MoonSafeGlitch } from '@moon-inferno/react';

<MoonSafeGlitch text="NEO_INFERNO_PROTOCOL" as="h3" />
```

#### `<MoonConsoleLogger>`
Phosphor green CRT console logger for blockchain transactions or server logs with `aria-live="polite"` stream updates.

```tsx
import { MoonConsoleLogger } from '@moon-inferno/react';

<MoonConsoleLogger
  title="BLOCKCHAIN_TX_LOGGER"
  logs={[{ type: 'success', message: 'Transaction confirmed' }]}
/>
```

---

### Moon-Inferno Signature Retro Primitives

#### `<GlitchText>`
Animated RGB-split glitch text component.

```tsx
import { GlitchText } from '@moon-inferno/react';

<GlitchText text="CYBERPUNK INFERNO" as="h1" />
```

#### `<PixelText>`
Stepped pixelated retro typography component.

```tsx
import { PixelText } from '@moon-inferno/react';

<PixelText text="PRESS START" size="lg" />
```

#### `<TypingText>`
Typewriter animation with blinking terminal cursor.

```tsx
import { TypingText } from '@moon-inferno/react';

<TypingText text="Establishing encrypted link..." speed={40} cursorChar="█" />
```

#### `<NeonText>`
Glowing pulsing cathode tube text supporting custom size presets (`sm`, `md`, `lg`, `xl`) or font-size strings.

```tsx
import { NeonText } from '@moon-inferno/react';

<NeonText text="INFERNO" color="inferno" size="xl" flicker />
```

#### `<Marquee>`
Infinite continuous scrolling marquee ticker with WCAG 2.2.2 AA compliant pause/play controls.

```tsx
import { Marquee } from '@moon-inferno/react';

<Marquee speed={18} variant="pixel" showPauseButton pauseOnHover pauseOnFocus>
  <span>RETRO PRIMITIVES -- WCAG 2.2.2 AA COMPLIANT</span>
</Marquee>
```

#### `<Terminal>`
Interactive CRT terminal emulator component.

```tsx
import { Terminal } from '@moon-inferno/react';

<Terminal onCommand={(cmd) => `Executed: ${cmd}`} />
```

#### `<CRTEffect>`
Retro scanlines and CRT flicker overlay supporting intensity control (`subtle`, `medium`, `high`, or custom numeric opacity).

```tsx
import { CRTEffect } from '@moon-inferno/react';

<CRTEffect scanlines flicker intensity="high" />
```

#### `<MatrixRain>`
Cyberpunk ASCII digital rain animation canvas overlay.

```tsx
import { MatrixRain } from '@moon-inferno/react';

<MatrixRain color="#FF4D00" fontSize={18} speed={33} />
```

#### `<PixelContainer>`
Arcade/OS window frame with pixel borders and titlebar controls.

```tsx
import { PixelContainer } from '@moon-inferno/react';

<PixelContainer title="TERMINAL // NODE 01">
  Content inside pixel frame.
</PixelContainer>
```

#### `<Navbar>`
Responsive navigation header bar supporting brand, navigation items, action triggers, and mobile drawer menu.

```tsx
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu } from '@moon-inferno/react';

<Navbar variant="inferno">
  <NavbarBrand>INFERNO_NAV</NavbarBrand>
  <NavbarContent align="end">
    <NavbarItem isActive>Dashboard</NavbarItem>
    <NavbarItem>Docs</NavbarItem>
  </NavbarContent>
</Navbar>
```

#### `<DatePicker>`
Accessible calendar date picker supporting month/year navigation, single/range selection, popover toggle, and full WCAG keyboard grid traversal (`Arrow keys`, `PageUp/Down`, `Home/End`, `Enter`, `Esc`).

```tsx
import { DatePicker } from '@moon-inferno/react';

<DatePicker
  label="Select Launch Date"
  variant="inferno"
  value={selectedDate}
  onChange={(date) => setSelectedDate(date)}
/>
```

#### `<HoloCard>`
Interactive 3D card with cursor-based parallax tilt, dynamic holographic iridescence glare reflection, and `prefers-reduced-motion` fallback.

```tsx
import { HoloCard } from '@moon-inferno/react';

<HoloCard variant="inferno" maxTilt={15}>
  <h4>Cybernetic Node</h4>
  <p>Hover to tilt 3D parallax card.</p>
</HoloCard>
```

#### `<CommandPalette>`
Accessible search modal palette triggered via `Cmd+K` / `Ctrl+K` with search input, item grouping, keyboard selection (`ArrowUp`, `ArrowDown`, `Enter`, `Escape`), and ARIA combobox pattern.

```tsx
import { CommandPalette } from '@moon-inferno/react';

<CommandPalette
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  items={[
    { id: '1', label: 'Switch Theme: Inferno', group: 'Themes', onSelect: () => setTheme('moon-inferno') }
  ]}
/>
```

---

## 4. Vector Iconography (`@moon-inferno/icons`)

Import vector icons directly from `@moon-inferno/icons`:

```tsx
import { FlameIcon, ShieldIcon, TerminalIcon, SunIcon } from '@moon-inferno/icons';

<FlameIcon size={20} color="var(--mi-color-primary)" />
```

---

## 5. Accessibility & Keyboard Navigation

Moon-Inferno is **built with WCAG 2.1 AA accessibility principles at its core**:
- High-contrast focus rings on all interactive elements via `:focus-visible`.
- Full keyboard traversal (`Tab`, `Esc`, `Enter`, `Space`, `Arrow Keys`).
- Screen reader ARIA roles (`dialog`, `combobox`, `tablist`, `tooltip`, `status`).
- Reduced motion protection via `@media (prefers-reduced-motion: reduce)`.
