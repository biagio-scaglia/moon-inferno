/**
 * Keyboard Key Constants & Event Helpers
 */

export const KEYS = {
  ENTER: 'Enter',
  SPACE: ' ',
  ESCAPE: 'Escape',
  TAB: 'Tab',
  ARROW_UP: 'ArrowUp',
  ARROW_DOWN: 'ArrowDown',
  ARROW_LEFT: 'ArrowLeft',
  ARROW_RIGHT: 'ArrowRight',
  HOME: 'Home',
  END: 'End',
} as const;

export function isKey(event: KeyboardEvent, key: keyof typeof KEYS): boolean {
  return event.key === KEYS[key];
}

export function isActionKey(event: KeyboardEvent): boolean {
  return event.key === KEYS.ENTER || event.key === KEYS.SPACE;
}
