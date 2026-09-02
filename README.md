# Moon-Inferno

<p align="center">
  <img src="playground/public/favicon-192x192.png" alt="Moon-Inferno Logo" width="112" />
  <h1 align="center">Moon-Inferno UI Framework</h1>
  <p align="center"><strong>The Accessibility-First Expressive Web UI Framework & Design System for Retro, Y2K, Cyberpunk, Gaming, and Web3 Applications</strong></p>
  <p align="center"><em>Created and Maintained by Biagio Scaglia</em></p>
</p>

[![NPM Version](https://img.shields.io/npm/v/@moon-inferno/react?color=FF4D00)](https://www.npmjs.com/package/@moon-inferno/react)
[![License](https://img.shields.io/badge/license-MIT-00FF66.svg)](LICENSE)
[![WCAG Compliance](https://img.shields.io/badge/WCAG-2.1%20AA-00E5FF.svg)](https://biagio-scaglia.github.io/moon-inferno/)
[![Build Status](https://img.shields.io/badge/build-passing-success.svg)](https://github.com/biagio-scaglia/moon-inferno)

> The web doesn't need another sterile SaaS dashboard.

**Moon-Inferno** is an accessibility-first React UI framework designed for developers who want to build expressive, high-personality websites without sacrificing WCAG 2.1 AA compliance or performance. Built for interfaces with distinct character—retro web, Y2K, cyberpunk, CRT shaders, pixel art, browser games, and Web3 applications—it provides accessible, responsive, and composable primitives.

---

## The 4 Pillars of World-Class DX & Accessibility

Moon-Inferno elevates developer experience (DX) and accessibility to industry-leading standards:

1. **Interactive Live Playground & One-Click Code Copying**: Every component snippet features a live one-click copy button with instant feedback.
2. **Accessibility Specification Matrix**: Detailed WAI-ARIA tables mapping keyboard shortcuts, ARIA roles (`role="grid"`, `role="meter"`, `aria-live="polite"`), and screen-reader voice transcripts.
3. **CLI Component Installer (`@moon-inferno/cli`)**: Copy individual component source files directly into your React project via `npx @moon-inferno/cli add <component>`.
4. **Production Recipes & Templates**: Ready-to-use Cyberpunk Web3 Login modals and RPG Game HUD dashboards.

---

## Signature Accessible Gaming & Web3 Primitives

| Component | Description | Accessibility Key Feature |
| --- | --- | --- |
| `<MoonTypewriterDialogue>` | RPG speech dialogue box with gradual letter reveal. | Immediate invisible screen-reader text fallback (`aria-live="polite"`) so visually impaired users hear full speech instantly. |
| `<MoonRPGGrid>` | Pixel art 2D inventory slot grid for game items & NFTs. | Full 2D keyboard arrow navigation (`Up/Down/Left/Right`), `Space/Enter` slot swapping, and live voice announcements. |
| `<MoonHealthMeter>` | Animated gaming Health (HP), Mana (MP), Stamina, and Shield bars. | Built natively on HTML5 `<meter>` elements with `aria-valuenow` for live percentage reporting to screen readers. |
| `<MoonSafeGlitch>` | Cyberpunk RGB split glitch text distortion. | Listens to `(prefers-reduced-motion: reduce)` to automatically disable flickering and prevent photosensitive seizures. |
| `<MoonConsoleLogger>` | CRT phosphor green console stream for Web3 transactions or server logs. | Uses `aria-live="polite"` stream updates so new lines are announced without stealing reading focus. |
| `<CyberCanvas>` | HTML5 drawing canvas with pixel grid overlay and neon palette. | Full touch screen support, size selector contrast fix, custom color picker swatch, and PNG image export. |
| `<SheetEditor>` | Retro CRT text editor notepad with line numbers gutter. | Word/character counter, text copy action, and live Markdown preview toggle. |
| `<Table>` | Cyberpunk WAI-ARIA data table primitive. | Semantic HTML5 `<table>`, `<thead>`, `<tbody>`, `<th>`, `<td>`, `<caption>`, striped rows, and responsive scroll. |

---

## Installation & CLI Usage

### Recommended All-in-One Command

```bash
npm install moon-inferno
# or
pnpm add moon-inferno
```

### Modular Package Installation

```bash
npm install @moon-inferno/react @moon-inferno/themes @moon-inferno/icons
```

### CLI Installer Tool

```bash
npx @moon-inferno/cli add MoonTypewriterDialogue
npx @moon-inferno/cli list
```

### Bootstrap-Style CDN `<link>` (Vanilla HTML / No Bundler)

You can use Moon-Inferno styling and design tokens on **any static HTML website**, Astro, WordPress, or plain HTML file without bundlers via jsDelivr / UNPKG CDN:

```html
<!-- Full Moon-Inferno CSS Bundle via jsDelivr CDN -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/moon-inferno/dist/styles.css">

<!-- Or via UNPKG CDN -->
<link rel="stylesheet" href="https://unpkg.com/moon-inferno/dist/styles.css">
```

#### Pure HTML Usage:
```html
<body data-theme="moon-inferno">
  <button class="mi-button mi-button--inferno">Inferno Button</button>
  <button class="mi-button mi-button--pixel">Pixel Button</button>
  <span class="mi-badge mi-badge--inferno">ONLINE</span>
</body>
```

---

## Quickstart Code Example

```tsx
import '@moon-inferno/react/styles.css';
import {
  MoonProvider,
  MoonTypewriterDialogue,
  MoonHealthMeter,
  MoonRPGGrid,
  MoonSafeGlitch,
  ToastProvider
} from '@moon-inferno/react';
import { FlameIcon } from '@moon-inferno/icons';

export default function App() {
  return (
    <MoonProvider defaultTheme="moon-inferno">
      <ToastProvider>
        <MoonSafeGlitch text="NEO_INFERNO_PROTOCOL" as="h1" />
        
        <MoonTypewriterDialogue
          speaker="COMMANDER_ZERO"
          avatar={<FlameIcon size={20} color="#FF4D00" />}
          text="Welcome to Moon-Inferno! Every signature component is 100% WCAG 2.1 AA accessible."
          speed={25}
        />

        <MoonHealthMeter type="health" value={92} max={100} label="HP (PLAYER HEALTH)" />

        <MoonRPGGrid
          columns={5}
          totalSlots={10}
          title="TACTICAL_INVENTORY"
          items={[
            { id: '1', name: 'Inferno Core', count: 1, icon: <FlameIcon size={24} color="#FF4D00" /> }
          ]}
        />
      </ToastProvider>
    </MoonProvider>
  );
}
```

---

## Development, Testing & Release Pipeline

Moon-Inferno provides a fully automated release pipeline that synchronizes version bumps, pre-flight typechecking, test suites, builds, NPM publishing, Git tagging, and GitHub Pages deployment in a single command.

```bash
# 1. Run local test suite
pnpm run test
# or watch mode
pnpm run test:watch

# 2. Dry run release (validates builds and manifests without publishing)
pnpm run release:dry-run

# 3. Simultaneous Release (Bumps version, commits, tags, pushes to Git, publishes to NPM & deploys live site)
pnpm run release:patch   # e.g., v0.4.9 -> v0.4.9
pnpm run release:minor   # e.g., v0.4.9 -> v0.5.0
pnpm run release:major   # e.g., v0.4.9 -> v1.0.0
```

---

## Official Links & Documentation

- **Developer Manual & API Reference**: [docs/MANUAL.md](docs/MANUAL.md)
- **Official Live Playground & Website**: [https://biagio-scaglia.github.io/moon-inferno/](https://biagio-scaglia.github.io/moon-inferno/)
- **NPM Package**: [https://www.npmjs.com/package/@moon-inferno/react](https://www.npmjs.com/package/@moon-inferno/react)
- **GitHub Repository**: [https://github.com/biagio-scaglia/moon-inferno](https://github.com/biagio-scaglia/moon-inferno)

---

## License

Distributed under the MIT License. Created and maintained by [Biagio Scaglia](https://github.com/biagio-scaglia).
