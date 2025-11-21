import { theme } from '../theme';

interface SectionHeaderProps {
  number: string;
  title: string;
  subtitle: string;
}

export default function SectionHeader({ number, title, subtitle }: SectionHeaderProps) {
  return (
    <header
      style={{
        position: 'relative',
        marginBottom: '3rem',
        paddingTop: '2rem',
        overflow: 'hidden',
      }}
    >
      {/* Большой номер на фоне */}
      <div
        style={{
          position: 'absolute',
          top: '-24px',
          left: '-4px',
          fontSize: 'clamp(3.5rem, 8vw, 6.5rem)',
          fontWeight: 900,
          letterSpacing: '0.18em',
          color: 'rgba(255, 255, 255, 0.07)',
          pointerEvents: 'none',
          userSelect: 'none',
          mixBlendMode: 'normal',
          whiteSpace: 'nowrap',
        }}
      >
        {number}
      </div>

      {/* Заголовок секции */}
      <h2
        style={{
          fontSize: 'clamp(1.6rem, 3vw, 2.5rem)',
          fontWeight: 800,
          color: theme.colors.white,
          marginBottom: '0.75rem',
        }}
      >
        {title}
      </h2>

      {/* Подзаголовок */}
      <p
        style={{
          fontSize: 'clamp(0.95rem, 2vw, 1.125rem)',
          color: theme.colors.lightGray,
          maxWidth: 'min(640px, 100%)',
          lineHeight: 1.7,
        }}
      >
        {subtitle}
      </p>
    </header>
  );
}
