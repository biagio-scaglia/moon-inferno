# @moon-inferno/react

<p align="center">
  <h1 align="center">@moon-inferno/react</h1>
  <p align="center"><strong>Accessibility-First, Expressive React UI Component Library for Retro, Y2K, CRT, Cyberpunk, Gaming, and Web3 Applications</strong></p>
  <p align="center"><em>Created by Biagio Scaglia</em></p>
</p>

[![NPM Version](https://img.shields.io/npm/v/@moon-inferno/react?color=FF4D00)](https://www.npmjs.com/package/@moon-inferno/react)
[![License](https://img.shields.io/badge/license-MIT-00FF66.svg)](https://opensource.org/licenses/MIT)

> Expressive web design meets 100% WCAG 2.1 AA accessibility compliance.

---

## 📦 Installation

```bash
npm install @moon-inferno/react @moon-inferno/themes @moon-inferno/icons
```

---

## 🎮 Accessible Signature Primitives

- `<MoonTypewriterDialogue>`: RPG speech dialogue box with typewriter letter reveal & immediate screen reader fallback (`aria-live="polite"`).
- `<MoonRPGGrid>`: Pixel art 2D inventory slot grid for game items & NFTs with 2D arrow key navigation.
- `<MoonHealthMeter>`: Animated gaming Health, Mana, Stamina, and Shield bars built natively on HTML5 `<meter>`.
- `<MoonSafeGlitch>`: Cyberpunk RGB split glitch text with automatic `(prefers-reduced-motion: reduce)` protection.
- `<MoonConsoleLogger>`: CRT phosphor green console stream for Web3 transactions or server logs.
- `<CyberCanvas>`: HTML5 drawing canvas with pixel grid overlay, neon palette, custom color picker, and PNG export.
- `<SheetEditor>`: Retro CRT text editor notepad with line numbers gutter and Markdown preview.
- `<Table>`: Cyberpunk WAI-ARIA data table primitive.

---

## ⚡ Quickstart

```tsx
import '@moon-inferno/react/styles.css';
import { MoonProvider, MoonTypewriterDialogue, MoonHealthMeter, MoonRPGGrid } from '@moon-inferno/react';

export default function App() {
  return (
    <MoonProvider defaultTheme="moon-inferno">
      <MoonTypewriterDialogue speaker="COMMANDER" text="Subsystems operational." />
      <MoonHealthMeter type="health" value={90} max={100} label="HP (HEALTH)" />
      <MoonRPGGrid columns={5} totalSlots={10} />
    </MoonProvider>
  );
}
```

---

## 📖 Official Documentation

- **Live Playground & Website**: [https://biagio-scaglia.github.io/moon-inferno/](https://biagio-scaglia.github.io/moon-inferno/)
- **GitHub Repository**: [https://github.com/biagio-scaglia/moon-inferno](https://github.com/biagio-scaglia/moon-inferno)

Distributed under the MIT License. Created by [Biagio Scaglia](https://github.com/biagio-scaglia).
