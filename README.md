# Moon-Inferno

<p align="center">
  <img src="favicon.svg" alt="Moon-Inferno Favicon" width="96" />
  <h1 align="center">Moon-Inferno</h1>
  <p align="center"><strong>The Expressive Web UI Framework & Design System</strong></p>
</p>

> The web doesn't need another SaaS dashboard.

Moon-Inferno is an accessibility-first UI framework designed for developers who want to build expressive websites without sacrificing usability or performance. Built for interfaces with distinct personality—retro web, Y2K, cyberpunk, CRT, pixel art, anime-inspired, and experimental aesthetics—it provides accessible, responsive, and composable primitives that feel like a forgotten futuristic corner of the early internet.

---

## Why Moon-Inferno?

Modern UI libraries have converged on uniform, sterile enterprise dashboards. While functional, they strip websites of individuality, character, and visual experimentation.

Moon-Inferno exists to reclaim expressive web design without reverting to inaccessible practices. It combines radical visual aesthetics with rock-solid semantic foundations, screen reader support, keyboard navigation, and responsive behavior.

* **Expressive Interfaces**: Retro, Y2K, cyberpunk, CRT, and pixel art aesthetics built as configurable design tokens and CSS variables.
* **Built with WCAG 2.1 AA Accessibility Principles**: Strict semantic HTML, full keyboard navigation, ARIA attributes, and reduced-motion safety baked in from day one.
* **True Themeability with `<MoonProvider>`**: Decouples component behavior from visual styling with a context provider that swaps entire UI themes instantly (`moon-inferno`, `terminal`, `y2k`).
* **Composable Architecture**: Prefers flexible primitive composition over massive components with dozens of rigid props.

---

## Monorepo Architecture

Moon-Inferno is engineered as a modern monorepo divided into specialized packages:

| Package | Description |
| --- | --- |
| `@moon-inferno/core` | Framework-independent design tokens, CSS variables, responsive primitives, and accessibility utilities. |
| `@moon-inferno/react` | React component implementations and `<MoonProvider>` theme context. |
| `@moon-inferno/icons` | Vector SVG iconography system featuring UI icons, pixel art icons, and retro/experimental symbols. |
| `@moon-inferno/themes` | Official theme definitions (`moon-inferno`, `terminal`, `y2k`). |

---

## Component Categorization

Moon-Inferno cleanly separates **Core Accessible Primitives** from **Signature Retro Primitives**:

### 🛡️ Core Accessible UI Primitives
Standard UI components engineered with high contrast, ARIA roles, and keyboard navigation:
`Button`, `Input`, `Select`, `Checkbox`, `RadioGroup`, `Switch`, `Slider`, `Dialog`, `Tabs`, `Accordion`, `Tooltip`, `Toast`, `Card`, `Avatar`, `AvatarGroup`, `Progress`, `Breadcrumbs`, `Container`, `Stack`, `Grid`.

### ⚡ Moon-Inferno Signature Retro Primitives
Distinctive visual primitives for expressive, high-personality web applications:
`GlitchText`, `PixelText`, `TypingText`, `NeonText`, `Marquee`, `CRTEffect`, `MatrixRain`, `Terminal`, `PixelContainer`, `SignalLight`, `CodeBlock`, `Gallery`.

---

## Quickstart

### Installation

```bash
pnpm add @moon-inferno/core @moon-inferno/react @moon-inferno/themes @moon-inferno/icons
```

### Usage with `<MoonProvider>`

Wrap your application entrypoint in `<MoonProvider>` for seamless theme management across all React components:

```tsx
import '@moon-inferno/react/styles.css';
import { MoonProvider, Button, GlitchText, SignalLight, ToastProvider } from '@moon-inferno/react';
import { FlameIcon } from '@moon-inferno/icons';

export default function App() {
  return (
    <MoonProvider defaultTheme="moon-inferno">
      <ToastProvider>
        <GlitchText text="WELCOME TO MOON-INFERNO" />
        <Button variant="inferno" leftIcon={<FlameIcon size={16} />}>
          Initiate Sequence
        </Button>
      </ToastProvider>
    </MoonProvider>
  );
}
```

📖 **Read the Complete Developer Manual & API Reference**: [docs/MANUAL.md](docs/MANUAL.md)  
🌐 **Live Interactive Documentation**: [https://biagio-scaglia.github.io/moon-inferno/](https://biagio-scaglia.github.io/moon-inferno/)

---

## License

Distributed under the MIT License. Created & Maintained by [Biagio Scaglia](https://github.com/biagio-scaglia).
