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
export function setTheme(theme: ThemeName, target: HTMLElement = document.documentElement): void {
  target.setAttribute('data-theme', theme);
}

/**
 * Gets the current active theme attribute from an element.
 */
export function getTheme(target: HTMLElement = document.documentElement): ThemeName {
  const current = target.getAttribute('data-theme');
  if (current === 'terminal' || current === 'y2k') {
    return current;
  }
  return 'moon-inferno';
}
