import { colors, typography, spacing, radii, shadows, zIndex } from './tokens';

/**
 * Generates Moon-Inferno CSS Custom Property key-value pairs.
 */
export function getCSSVariableObject(): Record<string, string> {
  return {
    // Colors - Inferno
    '--mi-color-inferno-50': colors.inferno[50],
    '--mi-color-inferno-100': colors.inferno[100],
    '--mi-color-inferno-500': colors.inferno[500],
    '--mi-color-inferno-600': colors.inferno[600],
    '--mi-color-inferno-900': colors.inferno[900],

    // Colors - Moon & Obsidian
    '--mi-color-moon-50': colors.moon[50],
    '--mi-color-moon-100': colors.moon[100],
    '--mi-color-moon-400': colors.moon[400],
    '--mi-color-moon-900': colors.moon[900],
    '--mi-color-obsidian-900': colors.obsidian[900],
    '--mi-color-obsidian-950': colors.obsidian[950],

    // Status
    '--mi-color-success': colors.status.success,
    '--mi-color-warning': colors.status.warning,
    '--mi-color-error': colors.status.error,
    '--mi-color-info': colors.status.info,

    // Typography
    '--mi-font-sans': typography.fontFamily.sans,
    '--mi-font-mono': typography.fontFamily.mono,
    '--mi-font-pixel': typography.fontFamily.pixel,

    // Spacing
    '--mi-space-1': spacing[1],
    '--mi-space-2': spacing[2],
    '--mi-space-3': spacing[3],
    '--mi-space-4': spacing[4],
    '--mi-space-6': spacing[6],
    '--mi-space-8': spacing[8],

    // Radii
    '--mi-radius-sm': radii.sm,
    '--mi-radius-base': radii.base,
    '--mi-radius-md': radii.md,
    '--mi-radius-full': radii.full,

    // Shadows & Glows
    '--mi-shadow-glow': shadows.infernoGlow,
    '--mi-shadow-pixel': shadows.pixelShadow,

    // Focus Ring
    '--mi-focus-ring-color': colors.inferno[500],
    '--mi-focus-ring-width': '2px',
    '--mi-focus-ring-offset': '2px',

    // Z-Indices
    '--mi-z-modal': String(zIndex.modal),
    '--mi-z-toast': String(zIndex.toast),
    '--mi-z-tooltip': String(zIndex.tooltip),
  };
}

/**
 * Converts CSS variable object to string format for CSS rules.
 */
export function getCSSVariableString(): string {
  const vars = getCSSVariableObject();
  return Object.entries(vars)
    .map(([key, val]) => `${key}: ${val};`)
    .join('\n  ');
}
