/**
 * Reduced Motion Helper
 * Utility to check if user prefers reduced motion.
 */

const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)';

/**
 * Returns true if user has enabled prefers-reduced-motion in OS settings.
 */
export function isReducedMotionPreferred(): boolean {
  if (typeof window === 'undefined' || !window.matchMedia) {
    return false;
  }
  return window.matchMedia(REDUCED_MOTION_QUERY).matches;
}

/**
 * Subscribes to changes in reduced motion user preferences.
 */
export function onReducedMotionChange(callback: (reduced: boolean) => void): () => void {
  if (typeof window === 'undefined' || !window.matchMedia) {
    return () => {};
  }

  const mediaQuery = window.matchMedia(REDUCED_MOTION_QUERY);
  const listener = (event: MediaQueryListEvent) => callback(event.matches);

  if (mediaQuery.addEventListener) {
    mediaQuery.addEventListener('change', listener);
    return () => mediaQuery.removeEventListener('change', listener);
  }

  return () => {};
}
