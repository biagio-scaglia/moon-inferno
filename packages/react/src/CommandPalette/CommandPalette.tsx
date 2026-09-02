import React, { useState, useEffect, useRef, type ReactNode, type HTMLAttributes } from 'react';
import { SearchIcon } from '@moon-inferno/icons';
import { trapFocus } from '@moon-inferno/core';

export interface CommandItem {
  id: string;
  label: string;
  group?: string;
  icon?: ReactNode;
  shortcut?: string;
  onSelect: () => void;
}

export interface CommandPaletteProps extends HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
  onClose: () => void;
  onOpen?: () => void;
  items: CommandItem[];
  placeholder?: string;
  variant?: 'inferno' | 'pixel' | 'ghost';
  enableHotkey?: boolean;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onOpen,
  items,
  placeholder = 'Type a command or search...',
  variant = 'inferno',
  enableHotkey = true,
  className = '',
  ...props
}) => {
  const [search, setSearch] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  // Global hotkey Cmd+K / Ctrl+K
  useEffect(() => {
    if (!enableHotkey) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else if (onOpen) {
          onOpen();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [enableHotkey, isOpen, onClose, onOpen]);

  // Focus input and reset when opened
  useEffect(() => {
    if (isOpen) {
      setSearch('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  const filteredItems = items.filter((item) => {
    const query = search.toLowerCase().trim();
    if (!query) return true;
    return (
      item.label.toLowerCase().includes(query) ||
      (item.group && item.group.toLowerCase().includes(query))
    );
  });

  // Group items
  const groupedItems = filteredItems.reduce<Record<string, CommandItem[]>>((acc, item) => {
    const groupName = item.group || 'Commands';
    if (!acc[groupName]) acc[groupName] = [];
    acc[groupName].push(item);
    return acc;
  }, {});

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      e.preventDefault();
      onClose();
      return;
    }

    if (e.key === 'Tab' && containerRef.current) {
      trapFocus(containerRef.current, e.nativeEvent);
      return;
    }

    if (filteredItems.length === 0) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => {
        const next = (prev + 1) % filteredItems.length;
        const targetEl = listRef.current?.querySelector(`[data-index="${next}"]`);
        targetEl?.scrollIntoView({ block: 'nearest' });
        return next;
      });
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => {
        const next = (prev - 1 + filteredItems.length) % filteredItems.length;
        const targetEl = listRef.current?.querySelector(`[data-index="${next}"]`);
        targetEl?.scrollIntoView({ block: 'nearest' });
        return next;
      });
    } else if (e.key === 'Enter') {
      e.preventDefault();
      const selectedItem = filteredItems[selectedIndex];
      if (selectedItem) {
        selectedItem.onSelect();
        onClose();
      }
    }
  };

  if (!isOpen) return null;

  const classes = [
    'moon-command-palette',
    `moon-command-palette--${variant}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  let globalIndexCounter = 0;

  return (
    <div
      className="moon-command-palette__backdrop"
      onClick={onClose}
      role="presentation"
    >
      <div
        ref={containerRef}
        className={classes}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Command Palette"
        onKeyDown={handleKeyDown}
        tabIndex={-1}
        {...props}
      >
        {/* Search Header */}
        <div className="moon-command-palette__search">
          <span className="moon-command-palette__search-icon" aria-hidden="true">
            <SearchIcon size={18} />
          </span>
          <input
            ref={inputRef}
            type="text"
            className="moon-command-palette__input"
            placeholder={placeholder}
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setSelectedIndex(0);
            }}
            role="combobox"
            aria-expanded="true"
            aria-autocomplete="list"
          />
          <kbd className="moon-command-palette__kbd">ESC</kbd>
        </div>

        {/* Results List */}
        <div className="moon-command-palette__list" ref={listRef} role="listbox">
          {filteredItems.length === 0 ? (
            <div className="moon-command-palette__empty">No matching commands found.</div>
          ) : (
            Object.entries(groupedItems).map(([groupName, groupItems]) => (
              <div key={groupName} className="moon-command-palette__group">
                <div className="moon-command-palette__group-title">{groupName}</div>
                {groupItems.map((item) => {
                  const itemIndex = globalIndexCounter++;
                  const isSelected = itemIndex === selectedIndex;

                  return (
                    <div
                      key={item.id}
                      data-index={itemIndex}
                      role="option"
                      aria-selected={isSelected}
                      className={`moon-command-palette__item ${
                        isSelected ? 'moon-command-palette__item--selected' : ''
                      }`}
                      onClick={() => {
                        item.onSelect();
                        onClose();
                      }}
                      onMouseEnter={() => setSelectedIndex(itemIndex)}
                    >
                      <div className="moon-command-palette__item-left">
                        {item.icon && (
                          <span className="moon-command-palette__item-icon">{item.icon}</span>
                        )}
                        <span className="moon-command-palette__item-label">{item.label}</span>
                      </div>
                      {item.shortcut && (
                        <kbd className="moon-command-palette__shortcut">{item.shortcut}</kbd>
                      )}
                    </div>
                  );
                })}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
