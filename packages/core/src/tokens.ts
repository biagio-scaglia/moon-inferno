/**
 * Moon-Inferno Core Design Tokens
 * Framework-independent token definitions for colors, typography, spacing, shadows, and retro visual effects.
 */

export const colors = {
  // Infernal Palette (Solar Fire / Lava / Amber)
  inferno: {
    50: '#FFF5F0',
    100: '#FFE6D9',
    200: '#FFBF9B',
    300: '#FF975E',
    400: '#FF7026',
    500: '#FF4D00', // Primary Inferno Orange
    600: '#FF2E00', // Crimson Fire
    700: '#CC1F00',
    800: '#991200',
    900: '#660900',
    950: '#3D0300',
  },
  // Lunar Palette (Platinum / Silver / Ethereal Cyan)
  moon: {
    50: '#F8FAFC',
    100: '#F1F5F9', // Primary Text Light
    200: '#E2E8F0',
    300: '#CBD5E1',
    400: '#94A3B8',
    500: '#64748B',
    600: '#475569',
    700: '#334155',
    800: '#1E293B',
    900: '#0F172A',
    950: '#020617',
  },
  // Obsidian Palette (Deep Space / CRT Backlight / Magma Shadow)
  obsidian: {
    900: '#120F16',
    950: '#0A090D', // Primary Dark Background
  },
  // Retro CRT Status Colors
  status: {
    success: '#00FF66', // Neon Terminal Green
    warning: '#FFCC00', // Amber Warning
    error: '#FF0033', // Cyber Red
    info: '#00E5FF', // Neon Cyan
  },
} as const;

export const typography = {
  fontFamily: {
    sans: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    mono: '"JetBrains Mono", "Fira Code", "Courier New", Courier, monospace',
    pixel: '"Press Start 2P", "VT323", "Courier New", monospace',
  },
  fontSize: {
    xs: '0.75rem', // 12px
    sm: '0.875rem', // 14px
    base: '1rem', // 16px
    lg: '1.125rem', // 18px
    xl: '1.25rem', // 20px
    '2xl': '1.5rem', // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem', // 36px
  },
  fontWeight: {
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },
  lineHeight: {
    tight: '1.2',
    normal: '1.5',
    relaxed: '1.75',
  },
} as const;

export const spacing = {
  0: '0px',
  1: '0.25rem', // 4px
  2: '0.5rem', // 8px
  3: '0.75rem', // 12px
  4: '1rem', // 16px
  5: '1.25rem', // 20px
  6: '1.5rem', // 24px
  8: '2rem', // 32px
  10: '2.5rem', // 40px
  12: '3rem', // 48px
  16: '4rem', // 64px
} as const;

export const radii = {
  none: '0px',
  sm: '2px',
  base: '4px',
  md: '6px',
  lg: '8px',
  full: '9999px',
} as const;

export const shadows = {
  none: 'none',
  infernoGlow: '0 0 12px rgba(255, 77, 0, 0.4), 0 0 24px rgba(255, 77, 0, 0.15)',
  cyanGlow: '0 0 12px rgba(0, 229, 255, 0.4), 0 0 24px rgba(0, 229, 255, 0.15)',
  pixelShadow: '3px 3px 0px #0A090D',
  retroBox: '4px 4px 0px rgba(0, 0, 0, 0.9), inset -2px -2px 0px rgba(255, 255, 255, 0.1)',
} as const;

export const retroEffects = {
  scanlineOpacity: '0.15',
  crtFlickerSpeed: '0.15s',
  pixelBorderWidth: '2px',
} as const;

export const zIndex = {
  hide: -1,
  auto: 'auto',
  base: 0,
  docked: 10,
  dropdown: 1000,
  sticky: 1100,
  banner: 1200,
  overlay: 1300,
  modal: 1400,
  popover: 1500,
  skipLink: 1600,
  toast: 1700,
  tooltip: 1800,
} as const;
