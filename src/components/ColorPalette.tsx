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
        maxWidth: '180px',
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
            fontSize: 'clamp(1rem, 2vw, 1.25rem)',
            fontWeight: 700,
            color: theme.colors.white,
            textShadow: '0 2px 8px rgba(0,0,0,0.5)',
            textAlign: 'center',
            padding: '0 0.5rem',
          }}
        >
          {hex}
        </span>
      </div>
      <div style={{ textAlign: 'center' }}>
        <div
          style={{
            fontSize: 'clamp(0.95rem, 1.9vw, 1rem)',
            fontWeight: 700,
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
            maxWidth: '160px',
            lineHeight: 1.5,
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
    {
      color: theme.colors.baseDeep, // #140C30
      name: 'Base Deep',
      hex: '#140C30',
      usage: 'Глубокий фон, общий бэкграунд экрана и крупных секций.',
    },
    {
      color: theme.colors.baseNavy, // #14253E
      name: 'Base Navy',
      hex: '#14253E',
      usage: 'Карточки, панели, навигация.',
    },
    {
      color: theme.colors.baseBlueGreen, // #153D4C
      name: 'Base Blue Green',
      hex: '#153D4C',
      usage: 'Контейнеры, подложки под контент.',
    },
  ];

  const accents = [
    {
      color: theme.colors.accentMid, // #15565B
      name: 'Accent Mid',
      hex: '#15565B',
      usage: 'Hover-состояния и активные элементы.',
    },
    {
      color: theme.colors.accentSoft, // #156F69
      name: 'Accent Soft',
      hex: '#156F69',
      usage: 'Второстепенные контролы, иконки.',
    },
    {
      color: theme.colors.accentSecondary, // #168777
      name: 'Accent Secondary',
      hex: '#168777',
      usage: 'Градиенты, акцентные фоновые блоки.',
    },
    {
      color: theme.colors.accentPrimary, // #16A085
      name: 'Accent Primary',
      hex: '#16A085',
      usage: 'Кнопки действия, ключевые CTA и подтверждения.',
    },
  ];

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '4rem',
      }}
    >
      <NeoCard>
        <h3
          style={{
            fontSize: 'clamp(1.4rem, 2.4vw, 1.75rem)',
            fontWeight: 700,
            color: theme.colors.white,
            marginBottom: '2rem',
          }}
        >
          Фоновые цвета интерфейса
        </h3>
        <div
          style={{
            display: 'flex',
            gap: '2.5rem',
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
            fontSize: 'clamp(1.4rem, 2.4vw, 1.75rem)',
            fontWeight: 700,
            color: theme.colors.white,
            marginBottom: '2rem',
          }}
        >
          Акцентные цвета Rezzy
        </h3>
        <div
          style={{
            display: 'flex',
            gap: '2.5rem',
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
