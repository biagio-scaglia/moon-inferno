import React from 'react';
import { Terminal } from '@moon-inferno/react';

export const TerminalTab: React.FC = () => {
  return (
    <Terminal
      initialLines={[
        { id: '1', type: 'output', text: 'MOON-INFERNO OS v0.4.9 (NPM PUBLISHED & CDN READY) INITIALIZED.' },
        { id: '2', type: 'output', text: 'Type "help", "author", "install", "cdn", "status", "icons", or "clear".' },
      ]}
      onCommand={(cmd) => {
        const c = cmd.trim().toLowerCase();
        if (c === 'help') return 'Available commands: help, author, install, cdn, status, icons, inferno, clear';
        if (c === 'author') return 'CREATOR & ARCHITECT: Biagio Scaglia (https://github.com/biagio-scaglia)';
        if (c === 'install') return 'npm install moon-inferno\n# or\npnpm add @moon-inferno/react @moon-inferno/themes @moon-inferno/icons';
        if (c === 'cdn') return '<!-- CDN Link -->\n<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/moon-inferno/dist/styles.css">';
        if (c === 'status') return 'SYSTEM STATUS: 100% ONLINE. ALL 6 NPM PACKAGES LIVE. WCAG 2.1 AA COMPLIANT.';
        if (c === 'icons') return 'AVAILABLE SVG ICONS: 38+ vector icons with hover effects (glow, spin, bounce, pulse, scale).';
        if (c === 'inferno') return '🔥 SYSTEM OVERRIDE: SOLAR INFERNO PROTOCOL 100% ACTIVE';
        return `Command not recognized: ${cmd}`;
      }}
    />
  );
};
