import { motion } from 'framer-motion';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  light?: boolean;
  tag?: string;
}

export default function SectionHeader({ title, subtitle, light = false, tag }: SectionHeaderProps) {
  const textColor = light ? 'rgba(255,255,255,0.96)' : '#111827';
  const subColor = light ? 'rgba(229,231,235,0.7)' : '#4b5563';
  const tagColor = 'rgba(212,175,95,0.9)';
  const lineColor = 'rgba(212,175,95,0.35)';

  return (
    <motion.div
      className="text-center mb-14 md:mb-20"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      {tag && <p className="text-[10px] md:text-[11px] tracking-[0.35em] uppercase mb-4" style={{ color: tagColor }}>{tag}</p>}

      <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-medium" style={{ color: textColor }}>
        {title}
      </h2>

      {subtitle && <p className="text-sm md:text-base mt-3 max-w-xl mx-auto" style={{ color: subColor }}>{subtitle}</p>}

      <div className="flex items-center justify-center gap-2 mt-6">
        <div className="w-14 md:w-24 h-px" style={{ background: `linear-gradient(90deg, transparent, ${lineColor})` }} />
        <div className="w-1 h-1 rounded-full" style={{ background: '#C9A84C', opacity: 0.5 }} />
        <div className="w-14 md:w-24 h-px" style={{ background: `linear-gradient(90deg, ${lineColor}, transparent)` }} />
      </div>
    </motion.div>
  );
}
