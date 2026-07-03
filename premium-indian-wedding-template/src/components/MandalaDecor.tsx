/**
 * MandalaDecor - Reusable SVG mandala decoration
 * Used as section backgrounds and decorative elements
 */

interface MandalaDecorProps {
  size?: number;
  opacity?: number;
  color?: string;
  className?: string;
}

export default function MandalaDecor({ 
  size = 200, 
  opacity = 0.1, 
  color = '#D4A853',
  className = '' 
}: MandalaDecorProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      className={className}
      style={{ opacity }}
    >
      <defs>
        <linearGradient id={`mandGrad-${size}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={color} />
          <stop offset="50%" stopColor={color} stopOpacity="0.5" />
          <stop offset="100%" stopColor={color} />
        </linearGradient>
      </defs>
      <g fill="none" stroke={`url(#mandGrad-${size})`} strokeWidth="0.8">
        {/* Outer circles */}
        <circle cx="100" cy="100" r="95" />
        <circle cx="100" cy="100" r="85" />
        <circle cx="100" cy="100" r="75" />
        <circle cx="100" cy="100" r="65" />
        <circle cx="100" cy="100" r="55" />
        <circle cx="100" cy="100" r="45" />
        <circle cx="100" cy="100" r="35" />
        <circle cx="100" cy="100" r="25" />
        <circle cx="100" cy="100" r="15" />

        {/* Radial lines */}
        {Array.from({ length: 12 }, (_, i) => i * 30).map((angle) => (
          <line
            key={`l${angle}`}
            x1="100"
            y1="5"
            x2="100"
            y2="195"
            transform={`rotate(${angle} 100 100)`}
          />
        ))}

        {/* Ellipses */}
        {Array.from({ length: 6 }, (_, i) => i * 30).map((angle) => (
          <ellipse
            key={`e${angle}`}
            cx="100"
            cy="100"
            rx="85"
            ry="40"
            transform={`rotate(${angle} 100 100)`}
          />
        ))}

        {/* Petal shapes (lotus-inspired) */}
        {Array.from({ length: 8 }, (_, i) => i * 45).map((angle) => (
          <path
            key={`p${angle}`}
            d="M100 20 Q120 60 100 100 Q80 60 100 20"
            transform={`rotate(${angle} 100 100)`}
            fill={color}
            fillOpacity="0.05"
          />
        ))}

        {/* Decorative dots on outer ring */}
        {Array.from({ length: 16 }, (_, i) => i * 22.5).map((angle) => (
          <circle
            key={`d${angle}`}
            cx="100"
            cy="8"
            r="3"
            transform={`rotate(${angle} 100 100)`}
            fill={color}
            fillOpacity="0.2"
          />
        ))}
      </g>
    </svg>
  );
}
