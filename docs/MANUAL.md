# 🌙 Moon-Inferno — Developer Manual & API Reference

Welcome to the complete developer manual for **Moon-Inferno** (`v0.1.0`), the accessibility-first, expressive UI framework designed for retro, Y2K, CRT, cyberpunk, pixel art, and experimental web applications.

---

## Table of Contents

1. [Installation & Setup](#1-installation--setup)
2. [Theme Management](#2-theme-management)
3. [Component Reference](#3-component-reference)
   - [Actions & Triggers](#actions--triggers)
     - [Button](#button)
   - [Layout Primitives](#layout-primitives)
     - [Container](#container)
     - [Stack](#stack)
     - [Grid](#grid)
   - [Form Controls](#form-controls)
     - [Input](#input)
     - [Select](#select)
     - [Checkbox](#checkbox)
     - [Radio & RadioGroup](#radio--radiogroup)
     - [Switch](#switch)
     - [Slider](#slider)
   - [Typography & Retro Text FX](#typography--retro-text-fx)
     - [GlitchText](#glitchtext)
     - [PixelText](#pixeltext)
     - [TypingText](#typingtext)
     - [NeonText](#neontext)
     - [Marquee](#marquee)
     - [CodeBlock](#codeblock)
   - [Data Display & Media](#data-display--media)
     - [Card](#card)
     - [PixelContainer](#pixelcontainer)
     - [Avatar & AvatarGroup](#avatar--avatargroup)
     - [Gallery & Lightbox](#gallery--lightbox)
     - [Badge](#badge)
     - [Progress](#progress)
     - [SignalLight](#signallight)
   - [Navigation & Disclosure](#navigation--disclosure)
     - [Breadcrumbs](#breadcrumbs)
     - [Dialog](#dialog)
     - [Accordion](#accordion)
     - [Tabs](#tabs)
     - [Tooltip](#tooltip)
     - [Toast](#toast)
   - [Retro Shaders & Emulators](#retro-shaders--emulators)
     - [CRTEffect](#crteffect)
     - [MatrixRain](#matrixrain)
     - [Terminal](#terminal)
     - [Loader](#loader)
4. [Vector Iconography (`@moon-inferno/icons`)](#4-vector-iconography-moon-infernoicons)
5. [Accessibility & Screen Readers](#5-accessibility--screen-readers)

---

## 1. Installation & Setup

Install the Moon-Inferno packages in your React project:

```bash
# Using pnpm
pnpm add @moon-inferno/core @moon-inferno/react @moon-inferno/themes @moon-inferno/icons

# Using npm
npm install @moon-inferno/core @moon-inferno/react @moon-inferno/themes @moon-inferno/icons
```

In your application entrypoint (e.g. `main.tsx` or `App.tsx`), import styles and set the active theme:

```tsx
import '@moon-inferno/react/styles.css';
import { setTheme } from '@moon-inferno/themes';

// Initialize signature theme
setTheme('moon-inferno');
```

---

## 2. Theme Management

Moon-Inferno provides three built-in themes:
- `'moon-inferno'`: Signature Solar Infernal Orange on Obsidian Space.
- `'terminal'`: Phosphor Green Matrix CRT aesthetic.
- `'y2k'`: Cyber Pastel Silver Chrome & Electric Cyan.

Switch themes dynamically at runtime:

```tsx
import { setTheme } from '@moon-inferno/themes';

setTheme('terminal'); // Switches entire DOM via data-theme attribute
```

---

## 3. Component Reference

### Actions & Triggers

#### `<Button>`
Tactile interactive button with stepped pixel border support and focus rings.

```tsx
import { Button } from '@moon-inferno/react';
import { FlameIcon } from '@moon-inferno/icons';

<Button variant="inferno" size="md" leftIcon={<FlameIcon size={16} />}>
  Initiate Sequence
</Button>
```

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `variant` | `'inferno' \| 'outline' \| 'ghost' \| 'pixel'` | `'inferno'` | Visual style |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Button dimensions |
| `isLoading` | `boolean` | `false` | Renders loading spinner and sets `aria-busy` |
| `leftIcon` | `ReactNode` | — | Icon rendered before text |
| `rightIcon` | `ReactNode` | — | Icon rendered after text |

---

### Layout Primitives

#### `<Container>`
Responsive max-width container with fluid padding.

```tsx
import { Container } from '@moon-inferno/react';

<Container size="xl">
  {/* Page Content */}
</Container>
```

#### `<Stack>`
Flexbox stack primitive supporting horizontal and vertical directions.

```tsx
import { Stack } from '@moon-inferno/react';

<Stack direction="row" align="center" gap="1rem" wrap>
  {/* Children */}
</Stack>
```

#### `<Grid>`
Auto-responsive CSS Grid layout.

```tsx
import { Grid } from '@moon-inferno/react';

<Grid minChildWidth="280px" gap="1.5rem">
  {/* Cards or Items */}
</Grid>
```

---

### Form Controls

#### `<Input>`
Accessible form input control with error messages and helper text.

```tsx
import { Input } from '@moon-inferno/react';

<Input
  label="SECURITY_KEY"
  placeholder="Enter key..."
  helperText="Key required for authentication."
  errorMessage={error}
/>
```

#### `<Select>`
Accessible custom dropdown select with keyboard navigation (`ArrowUp`, `ArrowDown`, `Enter`, `Esc`).

```tsx
import { Select } from '@moon-inferno/react';

<Select
  label="PROTOCOL"
  value={value}
  onChange={setValue}
  options={[
    { value: 'alpha', label: 'Protocol Alpha' },
    { value: 'beta', label: 'Protocol Beta' },
  ]}
/>
```

#### `<Checkbox>`
Custom checkbox with ARIA description linking.

```tsx
import { Checkbox } from '@moon-inferno/react';

<Checkbox
  label="Enable Telemetry"
  description="Streams WebSockets metrics."
  checked={enabled}
  onChange={(e) => setEnabled(e.target.checked)}
/>
```

#### `<RadioGroup>` & `<Radio>`
Radio button group supporting keyboard arrows.

```tsx
import { RadioGroup, Radio } from '@moon-inferno/react';

<RadioGroup name="mode" value={mode} onChange={setMode}>
  <Radio value="inferno" label="Solar Inferno" />
  <Radio value="cyber" label="Cyber Grid" />
</RadioGroup>
```

#### `<Switch>`
Toggle switch control with `role="switch"`.

```tsx
import { Switch } from '@moon-inferno/react';

<Switch label="CRT Shaders" checked={active} onChange={(e) => setActive(e.target.checked)} />
```

#### `<Slider>`
Range slider component with value output.

```tsx
import { Slider } from '@moon-inferno/react';

<Slider label="Power Output" value={val} onChange={setVal} min={0} max={100} />
```

---

### Typography & Retro Text FX

#### `<GlitchText>`
RGB-split animated glitch text component.

```tsx
import { GlitchText } from '@moon-inferno/react';

<GlitchText text="MOON-INFERNO" as="h1" />
```

#### `<PixelText>`
Stepped pixel typography with hard pixel shadow.

```tsx
import { PixelText } from '@moon-inferno/react';

<PixelText text="PRESS START" size="xl" />
```

#### `<TypingText>`
Typewriter animation with blinking terminal cursor.

```tsx
import { TypingText } from '@moon-inferno/react';

<TypingText text="Initializing quantum mainframe..." speed={40} cursorChar="█" />
```

#### `<NeonText>`
Glowing neon tube text component.

```tsx
import { NeonText } from '@moon-inferno/react';

<NeonText text="SOLAR INFERNO" color="inferno" flicker />
```

#### `<Marquee>`
Continuous infinite scrolling ticker.

```tsx
import { Marquee } from '@moon-inferno/react';

<Marquee speed={20} variant="pixel">
  <span>SYSTEM ONLINE</span>
</Marquee>
```

#### `<CodeBlock>`
Code snippet viewer with one-click copy button.

```tsx
import { CodeBlock } from '@moon-inferno/react';

<CodeBlock filename="App.tsx" code="pnpm add @moon-inferno/react" />
```

---

### Data Display & Media

#### `<Card>`
Content container (`CardHeader`, `CardBody`, `CardFooter`).

```tsx
import { Card, CardHeader, CardBody, CardFooter } from '@moon-inferno/react';

<Card>
  <CardHeader>Header</CardHeader>
  <CardBody>Body content</CardBody>
  <CardFooter>Footer buttons</CardFooter>
</Card>
```

#### `<PixelContainer>`
Arcade window container with pixel borders and titlebar controls.

```tsx
import { PixelContainer } from '@moon-inferno/react';

<PixelContainer title="TERMINAL // NODE 01">
  Content inside pixel frame.
</PixelContainer>
```

#### `<Avatar>` & `<AvatarGroup>`
User avatar with fallback initials and pixel border options.

```tsx
import { Avatar, AvatarGroup } from '@moon-inferno/react';

<AvatarGroup>
  <Avatar name="Alpha One" />
  <Avatar name="Biagio Scaglia" variant="pixel" />
</AvatarGroup>
```

#### `<Gallery>`
Responsive media grid with accessible Lightbox modal.

```tsx
import { Gallery } from '@moon-inferno/react';

<Gallery items={[{ id: '1', src: '/hero.png', title: 'INFERNO' }]} />
```

#### `<SignalLight>`
Glowing status beacon light (`online`, `warning`, `busy`, `offline`).

```tsx
import { SignalLight } from '@moon-inferno/react';

<SignalLight status="online" pulse label="NODE_ONLINE" />
```

---

### Navigation & Disclosure

#### `<Breadcrumbs>` & `<BreadcrumbItem>`
WCAG 2.1 AA compliant breadcrumb navigation trail with array declarative format or child composition.

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `items` | `BreadcrumbItemData[]` | `undefined` | Array of breadcrumb item data objects. |
| `separator` | `ReactNode` | `'/'` | Custom separator character or SVG icon. |
| `variant` | `'default' \| 'pixel' \| 'ghost'` | `'default'` | Visual styling variant. |

##### Example Usage:
```tsx
import { Breadcrumbs, BreadcrumbItem } from '@moon-inferno/react';
import { FlameIcon } from '@moon-inferno/icons';

// Array declarative format
<Breadcrumbs
  variant="pixel"
  separator=">"
  items={[
    { label: 'HOME', icon: <FlameIcon size={14} />, href: '#' },
    { label: 'ARCADE', href: '#' },
    { label: 'LEVEL 01', isCurrent: true }
  ]}
/>

// JSX Composition format
<Breadcrumbs variant="ghost">
  <BreadcrumbItem href="#">Console</BreadcrumbItem>
  <BreadcrumbItem isCurrent>Active Node</BreadcrumbItem>
</Breadcrumbs>
```

#### `<Dialog>`
Accessible modal dialog with focus trap and `Esc` dismissal.

```tsx
import { Dialog, DialogFooter, Button } from '@moon-inferno/react';

<Dialog isOpen={open} onClose={() => setOpen(false)} title="CONFIRMATION">
  <p>Modal body content.</p>
  <DialogFooter>
    <Button onClick={() => setOpen(false)}>Close</Button>
  </DialogFooter>
</Dialog>
```

#### `<Accordion>` & `<AccordionItem>`
Collapsible disclosure panel group.

```tsx
import { Accordion, AccordionItem } from '@moon-inferno/react';

<Accordion>
  <AccordionItem title="PANEL TITLE" defaultOpen>
    Panel content.
  </AccordionItem>
</Accordion>
```

#### `<Tabs>`
Accessible tabbed interfaces with ARIA pattern and arrow navigation.

```tsx
import { Tabs } from '@moon-inferno/react';

<Tabs
  items={[
    { id: 'tab1', label: 'Overview', content: <div>Tab 1 Content</div> },
    { id: 'tab2', label: 'Details', content: <div>Tab 2 Content</div> },
  ]}
/>
```

#### `<ToastProvider>` & `useToast()`
Live region notifications (`aria-live="polite"`).

```tsx
import { ToastProvider, useToast, Button } from '@moon-inferno/react';

function Demo() {
  const { addToast } = useToast();
  return <Button onClick={() => addToast('Operation success!', { variant: 'success' })}>Toast</Button>;
}
```

---

### Retro Shaders & Emulators

#### `<CRTEffect>`
Full screen CRT scanlines overlay with screen flicker.

```tsx
import { CRTEffect } from '@moon-inferno/react';

<CRTEffect />
```

#### `<MatrixRain>`
Cyberpunk ASCII digital rain canvas overlay.

```tsx
import { MatrixRain } from '@moon-inferno/react';

<MatrixRain color="#FF4D00" />
```

#### `<Terminal>`
Interactive CRT terminal emulator component.

```tsx
import { Terminal } from '@moon-inferno/react';

<Terminal
  onCommand={(cmd) => `Received: ${cmd}`}
  initialLines={[{ id: '1', type: 'output', text: 'SYSTEM ONLINE' }]}
/>
```

---

## 4. Vector Iconography (`@moon-inferno/icons`)

Import vector SVG icons directly:

```tsx
import { 
  FlameIcon, MoonIcon, SunIcon, TerminalIcon, ShieldIcon, 
  CheckIcon, CloseIcon, ZapIcon, SparklesIcon, WarnIcon, 
  InfoIcon, EyeIcon, SearchIcon, CodeIcon, LockIcon, UserIcon 
} from '@moon-inferno/icons';

<FlameIcon size={24} color="#FF4D00" />
```

---

## 5. Accessibility & Screen Readers

All Moon-Inferno components are WCAG 2.1 AA compliant out of the box:
- Strict semantic HTML tags.
- Visible high-contrast focus rings (`:focus-visible`).
- WAI-ARIA role patterns (`role="dialog"`, `role="tablist"`, `role="combobox"`, `role="status"`, `role="tooltip"`).
- Full keyboard navigation (`Tab`, `Enter`, `Space`, `ArrowUp`, `ArrowDown`, `ArrowLeft`, `ArrowRight`, `Escape`, `Home`, `End`).
- Automatic `prefers-reduced-motion` animation safety.
