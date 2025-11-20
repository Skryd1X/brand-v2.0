import { theme } from '../../theme';
import SectionHeader from '../SectionHeader';
import NeoCard from '../NeoCard';
import { MessageSquare, Smile, Zap, Shield } from 'lucide-react';

export default function ToneSection() {
  const principles = [
    {
      icon: MessageSquare,
      title: 'Дружелюбный',
      description: 'Общаемся просто и понятно, без формальностей',
      examples: ['Привет! Давайте найдем идеальное место', 'Забронировать стало проще простого'],
    },
    {
      icon: Smile,
      title: 'Уверенный',
      description: 'Знаем, что делаем, и даем четкие решения',
      examples: ['Ваш столик уже ждет вас', 'Все готово за 30 секунд'],
    },
    {
      icon: Zap,
      title: 'Энергичный',
      description: 'Динамичный стиль для активных пользователей',
      examples: ['Быстрее, чем звонок!', 'Мгновенное подтверждение'],
    },
    {
      icon: Shield,
      title: 'Заботливый',
      description: 'Помогаем и поддерживаем на каждом шаге',
      examples: ['Мы напомним о записи', 'Всегда на связи, если нужна помощь'],
    },
  ];

  return (
    <section
      id="tone"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '4rem 8rem 4rem 12rem',
        position: 'relative',
      }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto', width: '100%' }}>
        <SectionHeader
          number="03"
          title="Tone of Voice"
          subtitle="Как мы общаемся с пользователями"
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '2rem',
            marginBottom: '2rem',
          }}
        >
          {principles.map((principle, index) => {
            const Icon = principle.icon;
            return (
              <NeoCard key={index} hover>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                  <div
                    style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: theme.borderRadius.sm,
                      background: theme.gradients.accent,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Icon size={28} color={theme.colors.white} />
                  </div>
                  <h3
                    style={{
                      fontSize: '1.5rem',
                      fontWeight: '700',
                      color: theme.colors.white,
                    }}
                  >
                    {principle.title}
                  </h3>
                </div>
                <p
                  style={{
                    fontSize: '1.125rem',
                    color: theme.colors.lightGray,
                    lineHeight: '1.7',
                    marginBottom: '1.5rem',
                  }}
                >
                  {principle.description}
                </p>
                <div
                  style={{
                    background: theme.colors.baseBlueGreen,
                    borderRadius: theme.borderRadius.sm,
                    padding: '1rem',
                  }}
                >
                  <div
                    style={{
                      fontSize: '0.875rem',
                      color: theme.colors.mediumGray,
                      marginBottom: '0.75rem',
                      fontWeight: '600',
                    }}
                  >
                    Примеры:
                  </div>
                  {principle.examples.map((example, i) => (
                    <div
                      key={i}
                      style={{
                        fontSize: '1rem',
                        color: theme.colors.accentPrimary,
                        marginBottom: i < principle.examples.length - 1 ? '0.5rem' : '0',
                      }}
                    >
                      "{example}"
                    </div>
                  ))}
                </div>
              </NeoCard>
            );
          })}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
          <NeoCard>
            <h3
              style={{
                fontSize: '1.75rem',
                fontWeight: '700',
                color: theme.colors.white,
                marginBottom: '1rem',
              }}
            >
              ✓ Делаем
            </h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {[
                'Используем короткие, понятные фразы',
                'Обращаемся на "ты" к молодой аудитории',
                'Добавляем легкие эмодзи где уместно',
                'Даем конкретные решения проблем',
              ].map((item, i) => (
                <li
                  key={i}
                  style={{
                    fontSize: '1.125rem',
                    color: theme.colors.lightGray,
                    marginBottom: '0.75rem',
                    paddingLeft: '1.5rem',
                    position: 'relative',
                  }}
                >
                  <span
                    style={{
                      position: 'absolute',
                      left: '0',
                      color: theme.colors.accentPrimary,
                    }}
                  >
                    •
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </NeoCard>

          <NeoCard>
            <h3
              style={{
                fontSize: '1.75rem',
                fontWeight: '700',
                color: theme.colors.white,
                marginBottom: '1rem',
              }}
            >
              ✗ Избегаем
            </h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {[
                'Сложные канцелярские обороты',
                'Чрезмерную формальность',
                'Длинные объяснения и инструкции',
                'Технический жаргон и сленг',
              ].map((item, i) => (
                <li
                  key={i}
                  style={{
                    fontSize: '1.125rem',
                    color: theme.colors.lightGray,
                    marginBottom: '0.75rem',
                    paddingLeft: '1.5rem',
                    position: 'relative',
                  }}
                >
                  <span
                    style={{
                      position: 'absolute',
                      left: '0',
                      color: theme.colors.mediumGray,
                    }}
                  >
                    •
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </NeoCard>
        </div>
      </div>

      <div
        style={{
          position: 'absolute',
          bottom: '2rem',
          right: '4rem',
          fontSize: '1rem',
          color: theme.colors.mediumGray,
          fontWeight: '600',
          letterSpacing: '0.1em',
        }}
      >
        03 / TONE OF VOICE
      </div>
    </section>
  );
}
