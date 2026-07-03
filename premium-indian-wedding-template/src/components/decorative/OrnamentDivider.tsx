'use client';

export default function OrnamentDivider({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-4 py-8 ${className}`}>
      <div className="h-px flex-1 max-w-32 bg-gradient-to-r from-transparent via-gold to-transparent" />
      <svg viewBox="0 0 60 30" width="60" height="30" className="text-gold">
        <path
          d="M30 5 L35 15 L30 25 L25 15 Z"
          fill="currentColor"
          opacity="0.6"
        />
        <circle cx="15" cy="15" r="3" fill="currentColor" opacity="0.4" />
        <circle cx="45" cy="15" r="3" fill="currentColor" opacity="0.4" />
        <line x1="0" y1="15" x2="12" y2="15" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
        <line x1="48" y1="15" x2="60" y2="15" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
      </svg>
      <div className="h-px flex-1 max-w-32 bg-gradient-to-r from-transparent via-gold to-transparent" />
    </div>
  );
}
