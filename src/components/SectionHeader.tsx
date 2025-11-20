import { theme } from '../theme';

interface SectionHeaderProps {
  number: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeader({ number, title, subtitle }: SectionHeaderProps) {
  return (
    <div style={{ marginBottom: '4rem' }}>
      <div
        style={{
          fontSize: '8rem',
          fontWeight: '800',
          color: theme.colors.baseBlueGreen,
          opacity: 0.3,
          lineHeight: '1',
          marginBottom: '-2rem',
        }}
      >
        {number}
      </div>
      <h1
        style={{
          fontSize: '3.5rem',
          fontWeight: '800',
          color: theme.colors.white,
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          textShadow: theme.shadows.glow,
          marginBottom: subtitle ? '1rem' : '0',
        }}
      >
        {title}
      </h1>
      {subtitle && (
        <p
          style={{
            fontSize: '1.25rem',
            color: theme.colors.lightGray,
            maxWidth: '600px',
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
