import { describe, it, expect } from 'vitest';
import { colors, spacing, radii, typography, getCSSVariableObject, isReducedMotionPreferred } from '../index';

describe('@moon-inferno/core', () => {
  it('exports valid color tokens', () => {
    expect(colors.inferno[500]).toBe('#FF4D00');
    expect(colors.status.success).toBe('#00FF66');
    expect(colors.obsidian[950]).toBe('#0A090D');
  });

  it('exports valid typography tokens', () => {
    expect(typography.fontFamily.pixel).toContain('Press Start 2P');
    expect(typography.fontSize.base).toBe('1rem');
  });

  it('exports valid spacing and radii tokens', () => {
    expect(spacing[4]).toBe('1rem');
    expect(radii.base).toBe('4px');
  });

  it('generates CSS variable object correctly', () => {
    const vars = getCSSVariableObject();
    expect(vars['--mi-color-inferno-500']).toBe('#FF4D00');
    expect(vars['--mi-color-success']).toBe('#00FF66');
    expect(vars['--mi-font-mono']).toContain('JetBrains Mono');
  });

  it('handles reduced motion preferences safely', () => {
    expect(typeof isReducedMotionPreferred()).toBe('boolean');
  });
});
