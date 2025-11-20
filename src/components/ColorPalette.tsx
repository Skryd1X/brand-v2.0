import { theme } from '../theme';
import NeoCard from './NeoCard';

interface ColorItemProps {
  color: string;
  name: string;
  hex: string;
  usage: string;
}

function ColorItem({ color, name, hex, usage }: ColorItemProps) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1rem',
      }}
    >
      <div
        style={{
          width: '140px',
          height: '240px',
          borderRadius: '70px',
          background: color,
          boxShadow: `0 8px 32px ${color}40`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.3s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.05)';
          e.currentTarget.style.boxShadow = `0 12px 48px ${color}60`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = `0 8px 32px ${color}40`;
        }}
      >
        <span
          style={{
            fontSize: '1.25rem',
            fontWeight: '700',
            color: theme.colors.white,
            textShadow: '0 2px 8px rgba(0,0,0,0.5)',
          }}
        >
          {hex}
        </span>
      </div>
      <div style={{ textAlign: 'center' }}>
        <div
          style={{
            fontSize: '1rem',
            fontWeight: '700',
            color: theme.colors.white,
            marginBottom: '0.5rem',
          }}
        >
          {name}
        </div>
        <div
          style={{
            fontSize: '0.875rem',
            color: theme.colors.mediumGray,
            maxWidth: '140px',
          }}
        >
          {usage}
        </div>
      </div>
    </div>
  );
}

export default function ColorPalette() {
  const backgrounds = [
    { color: theme.colors.baseDeep, name: 'Base Deep', hex: '#140C30', usage: 'Основной фон' },
    { color: theme.colors.baseNavy, name: 'Base Navy', hex: '#14253E', usage: 'Карточки, меню' },
    { color: theme.colors.baseBlueGreen, name: 'Base Blue Green', hex: '#153D4C', usage: 'Контейнеры' },
  ];

  const accents = [
    { color: theme.colors.accentMid, name: 'Accent Mid', hex: '#15565B', usage: 'Hover состояния' },
    { color: theme.colors.accentSoft, name: 'Accent Soft', hex: '#156F69', usage: 'Второстепенные элементы' },
    { color: theme.colors.accentSecondary, name: 'Accent Secondary', hex: '#168777', usage: 'Градиенты' },
    { color: theme.colors.accentPrimary, name: 'Accent Primary', hex: '#16A085', usage: 'Кнопки, иконки' },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
      <NeoCard>
        <h3
          style={{
            fontSize: '1.75rem',
            fontWeight: '700',
            color: theme.colors.white,
            marginBottom: '2rem',
          }}
        >
          Фоновые цвета
        </h3>
        <div
          style={{
            display: 'flex',
            gap: '3rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          {backgrounds.map((bg) => (
            <ColorItem key={bg.hex} {...bg} />
          ))}
        </div>
      </NeoCard>

      <NeoCard>
        <h3
          style={{
            fontSize: '1.75rem',
            fontWeight: '700',
            color: theme.colors.white,
            marginBottom: '2rem',
          }}
        >
          Акцентные цвета
        </h3>
        <div
          style={{
            display: 'flex',
            gap: '3rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          {accents.map((accent) => (
            <ColorItem key={accent.hex} {...accent} />
          ))}
        </div>
      </NeoCard>
    </div>
  );
}
