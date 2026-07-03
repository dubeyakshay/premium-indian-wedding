'use client';

export default function MandalaPattern({ className = '', size = 300, color = '#D4AF37', opacity = 0.1 }: {
  className?: string;
  size?: number;
  color?: string;
  opacity?: number;
}) {
  return (
    <svg
      viewBox="0 0 200 200"
      width={size}
      height={size}
      className={`pointer-events-none ${className}`}
      style={{ opacity }}
    >
      {/* Outer rings */}
      {[80, 70, 60, 50, 40, 30].map((r, i) => (
        <circle
          key={i}
          cx="100"
          cy="100"
          r={r}
          fill="none"
          stroke={color}
          strokeWidth={i % 2 === 0 ? 0.5 : 0.3}
          strokeDasharray={i % 3 === 0 ? '4 4' : i % 3 === 1 ? '2 6' : 'none'}
        />
      ))}
      {/* Petals */}
      {Array.from({ length: 16 }).map((_, i) => {
        const angle = (i * 360) / 16;
        return (
          <g key={`petal-${i}`} transform={`rotate(${angle} 100 100)`}>
            <ellipse
              cx="100"
              cy="30"
              rx="8"
              ry="20"
              fill="none"
              stroke={color}
              strokeWidth="0.5"
            />
          </g>
        );
      })}
      {/* Inner petals */}
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i * 360) / 8;
        return (
          <g key={`inner-${i}`} transform={`rotate(${angle} 100 100)`}>
            <ellipse
              cx="100"
              cy="55"
              rx="5"
              ry="15"
              fill={color}
              fillOpacity="0.15"
              stroke={color}
              strokeWidth="0.3"
            />
          </g>
        );
      })}
      {/* Center */}
      <circle cx="100" cy="100" r="8" fill={color} fillOpacity="0.2" stroke={color} strokeWidth="0.5" />
      <circle cx="100" cy="100" r="3" fill={color} fillOpacity="0.4" />
      {/* Diamond accents */}
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i * 360) / 8 + 22.5;
        const rad = (angle * Math.PI) / 180;
        const cx = 100 + 75 * Math.cos(rad);
        const cy = 100 + 75 * Math.sin(rad);
        return (
          <g key={`diamond-${i}`} transform={`rotate(${angle} ${cx} ${cy})`}>
            <rect
              x={cx - 3}
              y={cy - 3}
              width="6"
              height="6"
              fill={color}
              fillOpacity="0.3"
              transform={`rotate(45 ${cx} ${cy})`}
            />
          </g>
        );
      })}
    </svg>
  );
}
