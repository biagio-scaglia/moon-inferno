import {
  useState,
  useId,
  type FC,
  type ReactNode,
  type KeyboardEvent,
} from 'react';
import { KEYS } from '@moon-inferno/core';
import './Tabs.css';

export interface TabItem {
  id: string;
  label: ReactNode;
  content: ReactNode;
  disabled?: boolean;
}

export interface TabsProps {
  items: TabItem[];
  defaultTabId?: string;
  activeTabId?: string;
  onChange?: (tabId: string) => void;
  className?: string;
}

export const Tabs: FC<TabsProps> = ({
  items,
  defaultTabId,
  activeTabId: controlledActiveTabId,
  onChange,
  className = '',
}) => {
  const [internalActiveTabId, setInternalActiveTabId] = useState<string>(
    defaultTabId || items[0]?.id || ''
  );
  const activeTabId = controlledActiveTabId !== undefined ? controlledActiveTabId : internalActiveTabId;
  const baseId = useId();

  const handleTabSelect = (tabId: string) => {
    if (controlledActiveTabId === undefined) {
      setInternalActiveTabId(tabId);
    }
    if (onChange) onChange(tabId);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>, currentIndex: number) => {
    const enabledItems = items.filter((item) => !item.disabled);
    if (enabledItems.length === 0) return;

    let targetIndex = -1;

    if (event.key === KEYS.ARROW_RIGHT) {
      targetIndex = (currentIndex + 1) % items.length;
      while (items[targetIndex]?.disabled) {
        targetIndex = (targetIndex + 1) % items.length;
      }
    } else if (event.key === KEYS.ARROW_LEFT) {
      targetIndex = (currentIndex - 1 + items.length) % items.length;
      while (items[targetIndex]?.disabled) {
        targetIndex = (targetIndex - 1 + items.length) % items.length;
      }
    } else if (event.key === KEYS.HOME) {
      targetIndex = 0;
      while (items[targetIndex]?.disabled) targetIndex++;
    } else if (event.key === KEYS.END) {
      targetIndex = items.length - 1;
      while (items[targetIndex]?.disabled) targetIndex--;
    }

    if (targetIndex !== -1) {
      const targetItem = items[targetIndex];
      if (targetItem) {
        event.preventDefault();
        const nextId = targetItem.id;
        handleTabSelect(nextId);
        const nextButton = document.getElementById(`${baseId}-tab-${nextId}`);
        nextButton?.focus();
      }
    }
  };

  const activeItem = items.find((item) => item.id === activeTabId) || items[0];

  return (
    <div className={`mi-tabs ${className}`.trim()}>
      <div role="tablist" aria-orientation="horizontal" className="mi-tab-list">
        {items.map((item, index) => {
          const isSelected = item.id === activeTabId;
          const tabId = `${baseId}-tab-${item.id}`;
          const panelId = `${baseId}-panel-${item.id}`;

          return (
            <button
              key={item.id}
              id={tabId}
              type="button"
              role="tab"
              aria-selected={isSelected}
              aria-controls={panelId}
              tabIndex={isSelected ? 0 : -1}
              disabled={item.disabled}
              onClick={() => handleTabSelect(item.id)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className={`mi-tab ${isSelected ? 'mi-tab--selected' : ''}`}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      {activeItem && (
        <div
          id={`${baseId}-panel-${activeItem.id}`}
          role="tabpanel"
          tabIndex={0}
          aria-labelledby={`${baseId}-tab-${activeItem.id}`}
          className="mi-tab-panel"
        >
          {activeItem.content}
        </div>
      )}
    </div>
  );
};
