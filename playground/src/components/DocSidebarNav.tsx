import React, { type KeyboardEvent } from 'react';
import { Stack, Badge } from '@moon-inferno/react';
import {
  LayersIcon,
  FlameIcon,
  SparklesIcon,
  TerminalIcon,
  SettingsIcon,
  ShieldIcon,
  CodeIcon,
  CpuIcon,
  ZapIcon,
  InfoIcon,
  HtmlIcon
} from '@moon-inferno/icons';

export interface NavSection {
  id: string;
  label: string;
  icon: React.ReactNode;
  badge?: string;
  categoryFilter?: string;
}

export interface DocSidebarNavProps {
  activeTabId: string;
  onSelectTab: (tabId: string) => void;
  activeCategory?: string;
  onSelectCategory?: (category: string) => void;
}

export const DocSidebarNav: React.FC<DocSidebarNavProps> = ({
  activeTabId,
  onSelectTab,
  activeCategory = 'all',
  onSelectCategory,
}) => {
  const mainNavItems = [
    { id: 'architecture-guide', label: 'Architecture & Vision', icon: <InfoIcon size={15} /> },
    { id: 'html-visualizer', label: 'HTML & CSS Visualizer', icon: <HtmlIcon size={15} />, badge: 'Live HUD' },
    {
      id: 'components-catalog',
      label: 'Component Catalog',
      icon: <LayersIcon size={15} />,
      categories: [
        { id: 'all', label: 'All Components', icon: <FlameIcon size={13} /> },
        { id: 'gaming', label: 'Gaming & Web3', icon: <ZapIcon size={13} />, badge: 'Unique' },
        { id: 'inputs', label: 'Inputs & Form Controls', icon: <SettingsIcon size={13} /> },
        { id: 'data', label: 'Data & Feedback', icon: <SparklesIcon size={13} /> },
        { id: 'retro', label: 'Typography & CRT', icon: <CpuIcon size={13} /> },
        { id: 'layout', label: 'Layout & Navigation', icon: <CodeIcon size={13} /> },
      ],
    },
    { id: 'cli-guide', label: 'CLI & Installation', icon: <TerminalIcon size={15} /> },
    { id: 'custom-css-guide', label: 'CSS Variables & Themes', icon: <SettingsIcon size={15} /> },
    { id: 'accessibility-spec', label: 'Accessibility Spec', icon: <ShieldIcon size={15} />, badge: 'WCAG' },
    { id: 'recipes-templates', label: 'Recipes & Templates', icon: <SparklesIcon size={15} /> },
    { id: 'icon-explorer', label: 'SVG Icon Library', icon: <SparklesIcon size={15} />, badge: '38' },
    { id: 'terminal', label: 'Interactive Terminal OS', icon: <TerminalIcon size={15} /> },
  ];

  const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault();
      const allFocusable = Array.from(
        document.querySelectorAll<HTMLButtonElement>('.doc-sidebar button')
      );
      const currentIndex = allFocusable.indexOf(e.currentTarget);
      if (currentIndex === -1) return;

      const nextIndex =
        e.key === 'ArrowDown'
          ? (currentIndex + 1) % allFocusable.length
          : (currentIndex - 1 + allFocusable.length) % allFocusable.length;

      allFocusable[nextIndex]?.focus();
    }
  };

  return (
    <aside className="doc-sidebar" aria-label="Documentation Navigation Index">
      <div className="doc-sidebar__header">
        <div className="doc-sidebar-brand-sub">WCAG 2.1 AA UI // v0.4.9</div>
        <h2 className="doc-sidebar__title" id="doc-sidebar-title">
          <LayersIcon size={16} color="var(--mi-color-primary)" /> Index & Navigation
        </h2>
        <span className="doc-sidebar__subtitle">Developer Manual v0.4.9</span>
      </div>

      <nav className="doc-sidebar__nav" aria-labelledby="doc-sidebar-title">
        <Stack gap="0.75rem" role="list">
          {mainNavItems.map((item) => {
            const isTabActive = activeTabId === item.id;
            const hasSubnav = Boolean(item.categories);
            const subnavId = `subnav-${item.id}`;

            return (
              <div key={item.id} className="doc-sidebar__group" role="listitem">
                <button
                  type="button"
                  aria-current={isTabActive ? 'page' : undefined}
                  aria-expanded={hasSubnav ? isTabActive : undefined}
                  aria-controls={hasSubnav ? subnavId : undefined}
                  onClick={() => {
                    onSelectTab(item.id);
                    if (item.categories && onSelectCategory) {
                      onSelectCategory('all');
                    }
                  }}
                  onKeyDown={handleKeyDown}
                  className={`doc-sidebar__link ${isTabActive ? 'doc-sidebar__link--active' : ''}`}
                >
                  <span className="doc-sidebar__link-content">
                    {item.icon}
                    <span>{item.label}</span>
                  </span>
                  {item.badge && (
                    <Badge variant="pixel" style={{ fontSize: '0.65rem', padding: '0.1rem 0.35rem' }}>
                      {item.badge}
                    </Badge>
                  )}
                </button>

                {/* Nested Component Categories if Catalog is Active */}
                {isTabActive && item.categories && onSelectCategory && (
                  <div
                    id={subnavId}
                    role="group"
                    aria-label={`${item.label} Categories`}
                    className="doc-sidebar__subnav"
                  >
                    {item.categories.map((cat) => {
                      const isCatActive = activeCategory === cat.id;

                      return (
                        <button
                          key={cat.id}
                          type="button"
                          aria-current={isCatActive ? 'true' : undefined}
                          onClick={() => {
                            onSelectTab('components-catalog');
                            onSelectCategory(cat.id);
                          }}
                          onKeyDown={handleKeyDown}
                          className={`doc-sidebar__sublink ${isCatActive ? 'doc-sidebar__sublink--active' : ''}`}
                        >
                          <span className="doc-sidebar__sublink-content">
                            {cat.icon}
                            <span>{cat.label}</span>
                          </span>
                          {cat.badge && (
                            <span className="doc-sidebar__subbadge">{cat.badge}</span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </Stack>
      </nav>
    </aside>
  );
};
