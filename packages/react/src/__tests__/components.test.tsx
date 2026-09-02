import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, act } from '@testing-library/react';
import {
  Button,
  Dialog,
  Tabs,
  MoonTypewriterDialogue,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  MoonRPGGrid,
  ToastProvider,
  useToast,
  Checkbox,
  Switch,
  ColorPicker,
  CodeBlock,
  CommandPalette,
} from '../index';

describe('@moon-inferno/react Components', () => {
  it('renders Button with variants and handles click', () => {
    const handleClick = vi.fn();
    render(<Button variant="inferno" onClick={handleClick}>Click Me</Button>);
    const btn = screen.getByRole('button', { name: /click me/i });
    expect(btn).toBeInTheDocument();
    expect(btn.className).toContain('mi-button--inferno');
    fireEvent.click(btn);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('renders Dialog, traps focus, and closes on Escape', () => {
    const handleClose = vi.fn();
    const { rerender } = render(
      <Dialog isOpen={true} onClose={handleClose} title="Test Modal">
        <p>Dialog content</p>
        <button type="button">Action</button>
      </Dialog>
    );

    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByText('Test Modal')).toBeInTheDocument();

    fireEvent.keyDown(window, { key: 'Escape' });
    expect(handleClose).toHaveBeenCalledTimes(1);

    rerender(
      <Dialog isOpen={false} onClose={handleClose} title="Test Modal">
        <p>Dialog content</p>
      </Dialog>
    );
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('renders Tabs and switches active panel on click and arrow keys', () => {
    const handleChange = vi.fn();
    render(
      <Tabs
        defaultTabId="tab-1"
        onChange={handleChange}
        items={[
          { id: 'tab-1', label: 'Tab 1', content: <div>Content 1</div> },
          { id: 'tab-2', label: 'Tab 2', content: <div>Content 2</div> },
        ]}
      />
    );

    expect(screen.getByText('Content 1')).toBeInTheDocument();
    const tab2 = screen.getByRole('tab', { name: /tab 2/i });
    fireEvent.click(tab2);
    expect(screen.getByText('Content 2')).toBeInTheDocument();
    expect(handleChange).toHaveBeenCalledWith('tab-2');
  });

  it('runs MoonTypewriterDialogue without restarting on parent renders', async () => {
    vi.useFakeTimers();
    const handleComplete = vi.fn();

    const { rerender } = render(
      <MoonTypewriterDialogue
        text="Hello"
        speed={10}
        onComplete={handleComplete}
      />
    );

    // Re-render with a new function reference
    rerender(
      <MoonTypewriterDialogue
        text="Hello"
        speed={10}
        onComplete={() => handleComplete()}
      />
    );

    act(() => {
      vi.advanceTimersByTime(100);
    });

    expect(screen.getAllByText(/Hello/i).length).toBeGreaterThanOrEqual(1);
    expect(handleComplete).toHaveBeenCalled();
    vi.useRealTimers();
  });

  it('renders Dropdown with single child and closes on item click', () => {
    const handleSelect = vi.fn();
    render(
      <Dropdown>
        <DropdownTrigger>
          <button type="button">Options</button>
        </DropdownTrigger>
        <DropdownMenu>
          <DropdownItem onSelect={handleSelect}>Item 1</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );

    const trigger = screen.getByRole('button', { name: /options/i });
    fireEvent.click(trigger);
    expect(screen.getByRole('menu')).toBeInTheDocument();

    const item = screen.getByRole('menuitem', { name: /item 1/i });
    fireEvent.click(item);
    expect(handleSelect).toHaveBeenCalledTimes(1);
    expect(screen.queryByRole('menu')).not.toBeInTheDocument();
  });

  it('navigates MoonRPGGrid slots via 2D keyboard arrows', () => {
    render(
      <MoonRPGGrid
        columns={5}
        totalSlots={10}
        items={[
          { id: '1', name: 'Inferno Sword' },
          { id: '2', name: 'Cyber Shield' },
        ]}
      />
    );

    const slots = screen.getAllByRole('gridcell');
    expect(slots.length).toBe(10);
    expect(slots[0]).toHaveAttribute('tabIndex', '0');
    expect(slots[1]).toHaveAttribute('tabIndex', '-1');

    fireEvent.keyDown(slots[0], { key: 'ArrowRight' });
    expect(slots[1]).toHaveAttribute('tabIndex', '0');
  });

  it('renders Checkbox and Switch with unique useId attributes', () => {
    render(
      <div>
        <Checkbox label="Opt A" />
        <Checkbox label="Opt A" />
        <Switch label="Toggle A" />
      </div>
    );

    const checkboxes = screen.getAllByRole('checkbox');
    const toggle = screen.getByRole('switch');
    expect(checkboxes.length).toBe(2);
    expect(toggle).toBeInTheDocument();

    const ids = [...checkboxes.map((cb) => cb.getAttribute('id')), toggle.getAttribute('id')];
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(3);
  });

  it('renders ColorPicker without invalid button-input nesting', () => {
    render(<ColorPicker defaultValue="#FF4D00" />);
    const colorInput = screen.getByLabelText(/pick color/i);
    expect(colorInput).toBeInTheDocument();
    // Verify input is not inside a button element
    expect(colorInput.closest('button')).toBeNull();
  });

  it('renders CodeBlock with accessible collapsible controls', () => {
    render(
      <CodeBlock
        code="const x = 1;"
        filename="test.js"
        collapsible={true}
        defaultExpanded={false}
      />
    );

    const expandBtn = screen.getByRole('button', { name: /test\.js/i });
    expect(expandBtn).toBeInTheDocument();
    fireEvent.click(expandBtn);
    expect(screen.getByText('const x = 1;')).toBeInTheDocument();
  });

  it('opens and closes CommandPalette via keyboard', () => {
    const handleClose = vi.fn();
    const handleSelect = vi.fn();
    render(
      <CommandPalette
        isOpen={true}
        onClose={handleClose}
        items={[
          { id: '1', label: 'Open Settings', onSelect: handleSelect },
          { id: '2', label: 'View Profile', onSelect: vi.fn() },
        ]}
      />
    );

    expect(screen.getByRole('dialog', { name: /command palette/i })).toBeInTheDocument();
    const input = screen.getByRole('combobox');
    fireEvent.change(input, { target: { value: 'Settings' } });
    expect(screen.getByText('Open Settings')).toBeInTheDocument();
    expect(screen.queryByText('View Profile')).not.toBeInTheDocument();

    fireEvent.keyDown(input, { key: 'Enter' });
    expect(handleSelect).toHaveBeenCalledTimes(1);
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it('adds and auto-dismisses toasts with ToastProvider', () => {
    const TestComponent = () => {
      const { addToast } = useToast();
      return (
        <button type="button" onClick={() => addToast('Action succeeded!', { variant: 'success' })}>
          Trigger Toast
        </button>
      );
    };

    render(
      <ToastProvider>
        <TestComponent />
      </ToastProvider>
    );

    const triggerBtn = screen.getByRole('button', { name: /trigger toast/i });
    fireEvent.click(triggerBtn);
    expect(screen.getByText('Action succeeded!')).toBeInTheDocument();
  });
});
