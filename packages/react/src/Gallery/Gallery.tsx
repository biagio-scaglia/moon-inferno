import {
  useState,
  useEffect,
  forwardRef,
  type HTMLAttributes,
} from 'react';
import { CloseIcon, ArrowLeftIcon, ArrowRightIcon } from '@moon-inferno/icons';
import './Gallery.css';

export interface GalleryItem {
  id: string;
  src: string;
  alt?: string;
  title: string;
  caption?: string;
}

export interface GalleryProps extends HTMLAttributes<HTMLDivElement> {
  items: GalleryItem[];
  variant?: 'default' | 'pixel';
}

export const Gallery = forwardRef<HTMLDivElement, GalleryProps>(
  ({ items, variant = 'default', className = '', ...props }, ref) => {
    const [activeIdx, setActiveIdx] = useState<number | null>(null);

    const activeItem = activeIdx !== null ? items[activeIdx] : null;

    const handlePrev = () => {
      if (activeIdx !== null) {
        setActiveIdx((activeIdx - 1 + items.length) % items.length);
      }
    };

    const handleNext = () => {
      if (activeIdx !== null) {
        setActiveIdx((activeIdx + 1) % items.length);
      }
    };

    useEffect(() => {
      const handleKeyDown = (e: KeyboardEvent) => {
        if (activeIdx === null) return;
        if (e.key === 'Escape') setActiveIdx(null);
        if (e.key === 'ArrowLeft') handlePrev();
        if (e.key === 'ArrowRight') handleNext();
      };

      if (activeIdx !== null) {
        document.body.style.overflow = 'hidden';
        window.addEventListener('keydown', handleKeyDown);
      }

      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    }, [activeIdx, items.length]);

    return (
      <>
        <div ref={ref} className={`mi-gallery-grid ${className}`.trim()} {...props}>
          {items.map((item, idx) => (
            <div
              key={item.id}
              role="button"
              tabIndex={0}
              onClick={() => setActiveIdx(idx)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setActiveIdx(idx);
                }
              }}
              className={`mi-image-card ${variant === 'pixel' ? 'mi-image-card--pixel' : ''}`}
            >
              <div className="mi-image-card__wrapper">
                <img src={item.src} alt={item.alt || item.title} className="mi-image-card__img" />
              </div>
              <div className="mi-image-card__content">
                <span className="mi-image-card__title">{item.title}</span>
                {item.caption && <span className="mi-image-card__caption">{item.caption}</span>}
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {activeItem && (
          <div
            className="mi-lightbox-backdrop"
            onClick={() => setActiveIdx(null)}
            aria-modal="true"
            role="dialog"
            aria-label={activeItem.title}
          >
            <div
              className="mi-lightbox-container"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mi-lightbox-header">
                <span className="mi-image-card__title">{activeItem.title}</span>
                <button
                  type="button"
                  onClick={() => setActiveIdx(null)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'var(--mi-color-text-muted)',
                    cursor: 'pointer',
                    minHeight: '44px',
                    minWidth: '44px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  aria-label="Close Lightbox"
                >
                  <CloseIcon size={18} />
                </button>
              </div>

              <div className="mi-lightbox-media">
                {items.length > 1 && (
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="mi-lightbox-nav-btn mi-lightbox-nav-btn--prev"
                    aria-label="Previous Image"
                  >
                    <ArrowLeftIcon size={18} />
                  </button>
                )}

                <img
                  src={activeItem.src}
                  alt={activeItem.alt || activeItem.title}
                  className="mi-lightbox-img"
                />

                {items.length > 1 && (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="mi-lightbox-nav-btn mi-lightbox-nav-btn--next"
                    aria-label="Next Image"
                  >
                    <ArrowRightIcon size={18} />
                  </button>
                )}
              </div>

              {activeItem.caption && (
                <div className="mi-lightbox-footer">
                  <span>{activeItem.caption}</span>
                </div>
              )}
            </div>
          </div>
        )}
      </>
    );
  }
);

Gallery.displayName = 'Gallery';
