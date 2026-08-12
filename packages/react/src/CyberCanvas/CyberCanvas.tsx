import {
  useRef,
  useState,
  useEffect,
  type MouseEvent,
  type TouchEvent,
  type HTMLAttributes,
} from 'react';
import './CyberCanvas.css';

export interface CyberCanvasProps extends HTMLAttributes<HTMLDivElement> {
  width?: number;
  height?: number;
  strokeColor?: string;
  strokeWidth?: number;
  gridOverlay?: boolean;
  variant?: 'inferno' | 'pixel';
}

const PALETTE = [
  '#FF4D00', // Inferno Red-Orange
  '#00FF66', // Terminal Green
  '#00E5FF', // Y2K Cyan
  '#FF00A0', // Neon Pink
  '#FFD700', // Gold
  '#FFFFFF', // White
  '#0A090D', // Eraser
];

export const CyberCanvas = ({
  width = 600,
  height = 320,
  strokeColor: initialColor = '#FF4D00',
  strokeWidth: initialWidth = 3,
  gridOverlay = true,
  variant = 'inferno',
  className = '',
  ...props
}: CyberCanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [currentColor, setCurrentColor] = useState(initialColor);
  const [lineWidth, setLineWidth] = useState(initialWidth);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
  }, []);

  const getCanvasCoordinates = (e: MouseEvent<HTMLCanvasElement> | TouchEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    const clientX = 'touches' in e && e.touches && e.touches[0] ? e.touches[0].clientX : (e as MouseEvent<HTMLCanvasElement>).clientX;
    const clientY = 'touches' in e && e.touches && e.touches[0] ? e.touches[0].clientY : (e as MouseEvent<HTMLCanvasElement>).clientY;
    return {
      x: (clientX - rect.left) * (canvas.width / rect.width),
      y: (clientY - rect.top) * (canvas.height / rect.height),
    };
  };

  const startDrawing = (e: MouseEvent<HTMLCanvasElement> | TouchEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const { x, y } = getCanvasCoordinates(e);
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.strokeStyle = currentColor;
    ctx.lineWidth = lineWidth;
    setIsDrawing(true);
  };

  const draw = (e: MouseEvent<HTMLCanvasElement> | TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const { x, y } = getCanvasCoordinates(e);
    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const handleClear = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  const handleExportPNG = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dataUrl = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.download = `moon-inferno-drawing-${Date.now()}.png`;
    link.href = dataUrl;
    link.click();
  };

  return (
    <div className={`mi-cybercanvas-container ${className}`.trim()} {...props}>
      <div className="mi-cybercanvas-toolbar">
        <div className="mi-cybercanvas-tools">
          <span style={{ fontSize: '0.75rem', color: 'var(--mi-color-text-muted)' }}>TOOL:</span>
          {PALETTE.map((color) => (
            <button
              key={color}
              type="button"
              className={`mi-cybercanvas-color-swatch ${currentColor === color ? 'mi-cybercanvas-color-swatch--active' : ''}`}
              style={{ backgroundColor: color }}
              onClick={() => setCurrentColor(color)}
              aria-label={`Select canvas color ${color === '#0A090D' ? 'Eraser' : color}`}
            />
          ))}
          <select
            value={lineWidth}
            onChange={(e) => setLineWidth(Number(e.target.value))}
            style={{
              backgroundColor: 'transparent',
              color: 'var(--mi-color-text)',
              border: '1px solid var(--mi-color-border)',
              borderRadius: '3px',
              padding: '0.2rem',
              fontSize: '0.75rem',
              fontFamily: 'inherit',
            }}
            aria-label="Stroke width"
          >
            <option value={2}>2px</option>
            <option value={4}>4px</option>
            <option value={8}>8px</option>
            <option value={14}>14px</option>
          </select>
        </div>

        <div className="mi-cybercanvas-tools">
          <button type="button" className="mi-cybercanvas-btn" onClick={handleClear}>
            CLEAR
          </button>
          <button type="button" className="mi-cybercanvas-btn" onClick={handleExportPNG}>
            EXPORT PNG
          </button>
        </div>
      </div>

      <div className={`mi-cybercanvas-canvas-wrapper ${gridOverlay ? 'mi-cybercanvas-grid' : ''}`}>
        <canvas
          ref={canvasRef}
          width={width}
          height={height}
          className="mi-cybercanvas-canvas"
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseLeave={stopDrawing}
          onTouchStart={startDrawing}
          onTouchMove={draw}
          onTouchEnd={stopDrawing}
          aria-label="Interactive drawing canvas"
        />
      </div>
    </div>
  );
};
