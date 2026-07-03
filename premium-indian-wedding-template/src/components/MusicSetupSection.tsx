import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import { weddingConfig } from '../config/weddingConfig';

export default function MusicSetupSection() {
  return (
    <section className="relative py-20 px-5 mesh-bg" style={{ background: '#0b1220' }}>
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          tag="music"
          title="Change Wedding Song"
          subtitle="Drop any MP3 into the music folder and update one config value"
          light
        />

        <motion.div
          className="glass-panel rounded-2xl p-6 md:p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm" style={{ color: 'rgba(229,231,235,0.9)' }}>
            Current song source: <span style={{ color: '#d4af5f' }}>{weddingConfig.music.url}</span>
          </p>

          <div className="mt-4 space-y-2 text-sm" style={{ color: 'rgba(229,231,235,0.78)' }}>
            <p>1. Place your MP3 file inside: <strong>public/music/</strong></p>
            <p>2. Update: <strong>src/config/weddingConfig.ts</strong> → <strong>music.url</strong></p>
            <p>3. Example URL: <strong>/music/your-song.mp3</strong></p>
          </div>

          <div className="mt-5 rounded-xl p-4" style={{ background: 'rgba(212,175,95,0.12)', border: '1px solid rgba(212,175,95,0.3)' }}>
            <p className="text-xs uppercase tracking-[0.18em]" style={{ color: '#d4af5f' }}>Note about YouTube links</p>
            <p className="mt-2 text-sm" style={{ color: 'rgba(229,231,235,0.8)' }}>
              YouTube/Shorts URLs cannot be played directly as background audio in an HTML audio player.
              Convert/export your licensed audio to MP3 and place it in <strong>public/music/</strong>.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
