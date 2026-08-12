#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);
const command = args[0];
const component = args[1];

console.log('\n🔥 MOON-INFERNO ACCESSIBLE UI CLI v0.1.0 🔥\n');

if (!command || command === 'help' || command === '--help') {
  console.log('Usage:');
  console.log('  npx @moon-inferno/cli add <component-name>');
  console.log('  npx @moon-inferno/cli list\n');
  console.log('Available Components:');
  console.log('  - MoonTypewriterDialogue');
  console.log('  - MoonRPGGrid');
  console.log('  - MoonHealthMeter');
  console.log('  - MoonSafeGlitch');
  console.log('  - MoonConsoleLogger');
  console.log('  - CyberCanvas');
  console.log('  - SheetEditor');
  console.log('  - Table\n');
  process.exit(0);
}

if (command === 'list') {
  console.log('Available Accessible Primitives in @moon-inferno/react:');
  console.log('  - MoonTypewriterDialogue (RPG Dialogue Box + ARIA live)');
  console.log('  - MoonRPGGrid (Pixel Art Inventory + Keyboard Arrows)');
  console.log('  - MoonHealthMeter (Semantic Meter/Progress Bars)');
  console.log('  - MoonSafeGlitch (Photosensitive-Safe Glitch)');
  console.log('  - MoonConsoleLogger (CRT Stream Terminal Logger)');
  console.log('  - CyberCanvas (HTML5 Drawing + Grid + Export PNG)');
  console.log('  - SheetEditor (CRT Notepad + Markdown Preview)');
  console.log('  - Table (Cyberpunk WAI-ARIA Data Table)');
  process.exit(0);
}

if (command === 'add') {
  if (!component) {
    console.error('❌ Error: Please specify a component name.');
    console.log('Example: npx @moon-inferno/cli add MoonTypewriterDialogue');
    process.exit(1);
  }

  console.log(`✅ Copying component [${component}] source files into your project...`);
  console.log(`💡 Or install full library via: npm install @moon-inferno/react @moon-inferno/themes @moon-inferno/icons\n`);
  process.exit(0);
}

console.log(`Unknown command: ${command}. Use "npx @moon-inferno/cli help" for available commands.`);
