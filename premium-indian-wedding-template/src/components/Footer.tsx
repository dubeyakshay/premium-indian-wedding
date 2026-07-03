import { weddingConfig } from '../config/weddingConfig';

export default function Footer() {
  return (
    <footer className="py-16 px-5 text-center" style={{ background: '#05080f' }}>
      <p className="font-script text-4xl text-gold-gradient">{weddingConfig.bride.firstName} & {weddingConfig.groom.firstName}</p>
      <p className="mt-3 text-xs tracking-[0.25em] uppercase" style={{ color: 'rgba(229,231,235,0.55)' }}>
        {weddingConfig.social.hashtag}
      </p>
      <div className="section-divider max-w-xs mx-auto my-6" />
      <p className="text-xs" style={{ color: 'rgba(229,231,235,0.45)' }}>
        Thank you for your love and blessings
      </p>
    </footer>
  );
}