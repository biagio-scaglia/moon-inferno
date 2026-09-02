/**
 * Moon-Inferno Themes
 */

export type ThemeName = 'moon-inferno' | 'terminal' | 'y2k';

export const THEMES: Record<ThemeName, string> = {
  'moon-inferno': 'moon-inferno',
  terminal: 'terminal',
  y2k: 'y2k',
} as const;

/**
 * Sets the active theme attribute on an element (defaults to documentElement).
 */
export function setTheme(theme: ThemeName, target?: HTMLElement): void {
  const el = target ?? (typeof document !== 'undefined' ? document.documentElement : null);
  if (el) {
    el.setAttribute('data-theme', theme);
  }
}

/**
 * Gets the current active theme attribute from an element.
 */
export function getTheme(target?: HTMLElement): ThemeName {
  const el = target ?? (typeof document !== 'undefined' ? document.documentElement : null);
  const current = el ? el.getAttribute('data-theme') : null;
  if (current === 'terminal' || current === 'y2k') {
    return current;
  }
  return 'moon-inferno';
}
