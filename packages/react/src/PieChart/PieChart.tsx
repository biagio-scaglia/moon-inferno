import { useState, type HTMLAttributes } from 'react';
import './PieChart.css';

export interface PieChartSegment {
  label: string;
  value: number;
  color?: string;
}

export interface PieChartProps extends HTMLAttributes<HTMLDivElement> {
  data: PieChartSegment[];
  size?: number;
  donut?: boolean;
  donutRadius?: number;
  showLegend?: boolean;
  centerText?: string;
  centerValue?: string;
  variant?: 'inferno' | 'pixel' | 'terminal';
}

const DEFAULT_COLORS = [
  '#FF4D00', // Inferno Red-Orange
  '#00FF66', // Terminal Green
  '#00E5FF', // Y2K Cyber Cyan
  '#FF00A0', // Neon Pink
  '#FFD700', // Gold
  '#9D00FF', // Cyber Purple
];

export const PieChart = ({
  data,
  size = 200,
  donut = false,
  donutRadius = 60,
  showLegend = true,
  centerText,
  centerValue,
  variant = 'inferno',
  className = '',
  ...props
}: PieChartProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const totalValue = data.reduce((acc, curr) => acc + curr.value, 0);
  const radius = size / 2;
  const strokeWidth = donut ? radius - donutRadius : radius;
  const chartRadius = donut ? radius - strokeWidth / 2 : radius / 2;

  let cumulativeAngle = 0;

  const slices = data.map((segment, index) => {
    const percentage = totalValue > 0 ? (segment.value / totalValue) * 100 : 0;
    const angle = (percentage / 100) * 360;
    const startAngle = cumulativeAngle;
    cumulativeAngle += angle;

    const segmentColor = segment.color || DEFAULT_COLORS[index % DEFAULT_COLORS.length];

    // Calculate stroke-dasharray & stroke-dashoffset for SVG circle
    const circumference = 2 * Math.PI * chartRadius;
    const strokeDasharray = `${(percentage / 100) * circumference} ${circumference}`;
    const strokeDashoffset = -((startAngle / 360) * circumference);

    return {
      ...segment,
      index,
      percentage,
      segmentColor,
      strokeDasharray,
      strokeDashoffset,
    };
  });

  const activeSegment = activeIndex !== null ? slices[activeIndex] : null;

  return (
    <div className={`mi-piechart-container ${className}`.trim()} {...props}>
      <div className="mi-piechart-svg-wrapper">
        <svg
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
          aria-label={`Pie chart depicting ${data.map((d) => `${d.label}: ${d.value}`).join(', ')}`}
          role="img"
        >
          <g transform={`rotate(-90 ${radius} ${radius})`}>
            {slices.map((slice) => (
              <circle
                key={slice.index}
                cx={radius}
                cy={radius}
                r={chartRadius}
                fill="none"
                stroke={slice.segmentColor}
                strokeWidth={strokeWidth}
                strokeDasharray={slice.strokeDasharray}
                strokeDashoffset={slice.strokeDashoffset}
                className={`mi-piechart-slice ${activeIndex === slice.index ? 'mi-piechart-slice--active' : ''}`}
                onMouseEnter={() => setActiveIndex(slice.index)}
                onMouseLeave={() => setActiveIndex(null)}
                tabIndex={0}
                onFocus={() => setActiveIndex(slice.index)}
                onBlur={() => setActiveIndex(null)}
              />
            ))}
          </g>
        </svg>

        {donut && (centerValue || centerText) && (
          <div className="mi-piechart-center-label">
            {centerValue && <span className="mi-piechart-center-value">{centerValue}</span>}
            {centerText && <span className="mi-piechart-center-text">{centerText}</span>}
          </div>
        )}

        {activeSegment && !centerValue && (
          <div className="mi-piechart-tooltip">
            <strong>{activeSegment.label}</strong>: {activeSegment.value} ({activeSegment.percentage.toFixed(1)}%)
          </div>
        )}
      </div>

      {showLegend && (
        <ul className="mi-piechart-legend">
          {slices.map((slice) => (
            <li
              key={slice.index}
              className="mi-piechart-legend-item"
              onMouseEnter={() => setActiveIndex(slice.index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <span className="mi-piechart-legend-swatch" style={{ backgroundColor: slice.segmentColor }} />
              <span>
                {slice.label} ({slice.percentage.toFixed(0)}%)
              </span>
            </li>
          ))}
        </ul>
      )}

      {/* Screen Reader Accessible Table Summary */}
      <table className="mi-sr-only">
        <caption>Data table summary for pie chart</caption>
        <thead>
          <tr>
            <th scope="col">Label</th>
            <th scope="col">Value</th>
            <th scope="col">Percentage</th>
          </tr>
        </thead>
        <tbody>
          {slices.map((slice) => (
            <tr key={slice.index}>
              <td>{slice.label}</td>
              <td>{slice.value}</td>
              <td>{slice.percentage.toFixed(1)}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
