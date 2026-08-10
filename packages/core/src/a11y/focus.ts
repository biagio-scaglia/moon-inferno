/**
 * Accessibility Focus Utilities
 * Provides helpers for focus containment (focus traps), focus restoration, and tabbable elements.
 */

const TABBABLE_SELECTOR = `
  a[href],
  button:not([disabled]),
  area[href],
  input:not([disabled]):not([type="hidden"]),
  select:not([disabled]),
  textarea:not([disabled]),
  iframe,
  object,
  embed,
  [tabindex]:not([tabindex="-1"]),
  [contenteditable]
`;

/**
 * Returns all focusable elements within a given container.
 */
export function getFocusableElements(container: HTMLElement): HTMLElement[] {
  const elements = Array.from(container.querySelectorAll<HTMLElement>(TABBABLE_SELECTOR));
  return elements.filter((el) => {
    return (
      el.offsetWidth > 0 ||
      el.offsetHeight > 0 ||
      el.getClientRects().length > 0
    ) && getComputedStyle(el).visibility !== 'hidden';
  });
}

/**
 * Traps focus within a given container element.
 * Useful for modal dialogs, drawers, and overlay menus.
 */
export function trapFocus(container: HTMLElement, event: KeyboardEvent): void {
  if (event.key !== 'Tab') return;

  const focusables = getFocusableElements(container);
  if (focusables.length === 0) {
    event.preventDefault();
    return;
  }

  const first = focusables[0];
  const last = focusables[focusables.length - 1];
  const active = document.activeElement as HTMLElement | null;

  if (event.shiftKey) {
    if (active === first || !container.contains(active)) {
      last?.focus();
      event.preventDefault();
    }
  } else {
    if (active === last || !container.contains(active)) {
      first?.focus();
      event.preventDefault();
    }
  }
}

/**
 * Stores the previously focused element and provides a restoration function.
 */
export function createFocusStore() {
  let previousElement: HTMLElement | null = null;

  return {
    save() {
      if (document.activeElement instanceof HTMLElement) {
        previousElement = document.activeElement;
      }
    },
    restore() {
      if (previousElement && typeof previousElement.focus === 'function') {
        previousElement.focus();
        previousElement = null;
      }
    },
  };
}
