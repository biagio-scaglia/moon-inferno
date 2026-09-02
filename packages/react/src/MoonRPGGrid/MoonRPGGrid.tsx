import { useState, useEffect, useRef, type ReactNode, type KeyboardEvent, type HTMLAttributes } from 'react';
import './MoonRPGGrid.css';

export interface RPGItem {
  id: string;
  name: string;
  icon?: ReactNode;
  count?: number;
  description?: string;
}

export interface MoonRPGGridProps extends HTMLAttributes<HTMLDivElement> {
  items?: (RPGItem | null)[];
  columns?: number;
  totalSlots?: number;
  onItemSwap?: (fromIndex: number, toIndex: number) => void;
  title?: string;
  variant?: 'inferno' | 'pixel';
}

function buildGridArray(items: (RPGItem | null)[] | undefined, totalSlots: number): (RPGItem | null)[] {
  const arr = new Array(totalSlots).fill(null);
  if (items && items.length > 0) {
    items.slice(0, totalSlots).forEach((item, idx) => {
      arr[idx] = item;
    });
  }
  return arr;
}

export const MoonRPGGrid = ({
  items: initialItems,
  columns = 5,
  totalSlots = 15,
  onItemSwap,
  title = 'EQUIPMENT INVENTORY',
  variant = 'inferno',
  className = '',
  ...props
}: MoonRPGGridProps) => {
  const [gridItems, setGridItems] = useState<(RPGItem | null)[]>(() =>
    buildGridArray(initialItems, totalSlots)
  );

  const [focusedIndex, setFocusedIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [announcement, setAnnouncement] = useState('');

  const slotRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (initialItems) {
      setGridItems(buildGridArray(initialItems, totalSlots));
    }
  }, [initialItems, totalSlots]);

  const handleSlotClick = (index: number) => {
    setFocusedIndex(index);
    if (selectedIndex === null) {
      if (gridItems[index]) {
        setSelectedIndex(index);
        setAnnouncement(`Selected slot ${index + 1}: ${gridItems[index]?.name}. Click or press Enter on another slot to swap.`);
      }
    } else {
      if (selectedIndex === index) {
        setSelectedIndex(null);
        setAnnouncement(`Deselected slot ${index + 1}`);
      } else {
        const nextGrid = [...gridItems];
        const temp = nextGrid[selectedIndex] ?? null;
        nextGrid[selectedIndex] = nextGrid[index] ?? null;
        nextGrid[index] = temp;
        setGridItems(nextGrid);

        const fromItem = temp?.name || 'Empty slot';
        const toItem = nextGrid[selectedIndex]?.name || 'Empty slot';
        setAnnouncement(`Swapped slot ${selectedIndex + 1} (${fromItem}) with slot ${index + 1} (${toItem}).`);
        onItemSwap?.(selectedIndex, index);
        setSelectedIndex(null);
      }
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>, index: number) => {
    let nextIndex = index;
    if (e.key === 'ArrowRight') {
      nextIndex = (index + 1) % totalSlots;
    } else if (e.key === 'ArrowLeft') {
      nextIndex = (index - 1 + totalSlots) % totalSlots;
    } else if (e.key === 'ArrowDown') {
      nextIndex = (index + columns) % totalSlots;
    } else if (e.key === 'ArrowUp') {
      nextIndex = (index - columns + totalSlots) % totalSlots;
    } else if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleSlotClick(index);
      return;
    } else {
      return;
    }

    e.preventDefault();
    setFocusedIndex(nextIndex);
    slotRefs.current[nextIndex]?.focus();
    const focusedItem = gridItems[nextIndex];
    setAnnouncement(`Focused slot ${nextIndex + 1}: ${focusedItem ? focusedItem.name : 'Empty'}`);
  };

  const focusedItem = gridItems[focusedIndex];

  return (
    <div
      className={`mi-rpggrid-container ${variant === 'pixel' ? 'mi-rpggrid-container--pixel' : ''} ${className}`.trim()}
      {...props}
    >
      <div className="mi-rpggrid-title">
        <span>{title}</span>
        <span style={{ fontSize: '0.7rem', color: 'var(--mi-color-text-muted)' }}>
          {gridItems.filter(Boolean).length}/{totalSlots} SLOTS
        </span>
      </div>

      {/* WCAG Screen reader live announcement region for item moves & keyboard navigation */}
      <div className="mi-sr-only" aria-live="polite">
        {announcement}
      </div>

      <div
        className="mi-rpggrid-grid"
        role="grid"
        aria-label={title}
      >
        {Array.from({ length: Math.ceil(totalSlots / columns) }, (_, rowIndex) => (
          <div key={rowIndex} role="row" className="mi-rpggrid-row">
            {gridItems.slice(rowIndex * columns, (rowIndex + 1) * columns).map((item, colIdx) => {
              const idx = rowIndex * columns + colIdx;
              return (
                <div
                  key={idx}
                  ref={(el) => { slotRefs.current[idx] = el; }}
                  tabIndex={focusedIndex === idx ? 0 : -1}
                  role="gridcell"
                  aria-selected={selectedIndex === idx}
                  aria-label={`Slot ${idx + 1}: ${item ? item.name : 'Empty'}`}
                  className={[
                    'mi-rpggrid-slot',
                    selectedIndex === idx ? 'mi-rpggrid-slot--selected' : '',
                  ].filter(Boolean).join(' ')}
                  onClick={() => handleSlotClick(idx)}
                  onKeyDown={(e) => handleKeyDown(e, idx)}
                  onFocus={() => setFocusedIndex(idx)}
                >
                  {item?.icon ? item.icon : <span style={{ opacity: 0.3 }}>{idx + 1}</span>}
                  {item && item.count && item.count > 1 && (
                    <span className="mi-rpggrid-item-count">x{item.count}</span>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>

      <div className="mi-rpggrid-info-box">
        {focusedItem ? (
          <div>
            <strong style={{ color: 'var(--mi-color-primary)' }}>{focusedItem.name}</strong>
            {focusedItem.description && <div>{focusedItem.description}</div>}
          </div>
        ) : (
          <span>Select or focus a slot to view item details.</span>
        )}
      </div>
    </div>
  );
};

export const RPGGrid = MoonRPGGrid;
