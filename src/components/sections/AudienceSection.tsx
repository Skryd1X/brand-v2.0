import { theme } from '../../theme';
import SectionHeader from '../SectionHeader';
import NeoCard from '../NeoCard';
import { Briefcase, Sparkles, Coffee, Heart } from 'lucide-react';

export default function AudienceSection() {
  const segments = [
    {
      icon: Briefcase,
      title: 'Деловые профессионалы',
      age: '25-45 лет',
      description:
        'Занятые люди, которые ценят эффективность и планирование. Используют приложение для бронирования бизнес-встреч, коворкингов и деловых услуг.',
      gradient: theme.gradients.accent,
    },
    {
      icon: Sparkles,
      title: 'Активная молодежь',
      age: '18-30 лет',
      description:
        'Современные и технически подкованные пользователи. Бронируют рестораны, развлечения, салоны красоты и фитнес.',
      gradient: theme.gradients.vibrant,
    },
    {
      icon: Coffee,
      title: 'Городские жители',
      age: '30-50 лет',
      description:
        'Семейные люди, которые планируют досуг и бытовые услуги. Ценят удобство и надежность сервиса.',
      gradient: theme.gradients.warm,
    },
    {
      icon: Heart,
      title: 'Заботливые родители',
      age: '28-45 лет',
      description:
        'Организовывают досуг детей, бронируют семейные мероприятия, медицинские и образовательные услуги.',
      gradient: theme.gradients.purple,
    },
  ];

  return (
    <section
      id="audience"
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
          number="02"
          title="Целевая аудитория"
          subtitle="Основные сегменты пользователей платформы Rezzy"
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '2rem',
            marginBottom: '2rem',
          }}
        >
          {segments.map((segment, index) => {
            const Icon = segment.icon;
            return (
              <NeoCard key={index} hover>
                <div style={{ display: 'flex', alignItems: 'start', gap: '1.5rem', marginBottom: '1.5rem' }}>
                  <div
                    style={{
                      width: '64px',
                      height: '64px',
                      borderRadius: theme.borderRadius.sm,
                      background: segment.gradient,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={32} color={theme.colors.white} />
                  </div>
                  <div>
                    <h3
                      style={{
                        fontSize: '1.5rem',
                        fontWeight: '700',
                        color: theme.colors.white,
                        marginBottom: '0.5rem',
                      }}
                    >
                      {segment.title}
                    </h3>
                    <span
                      style={{
                        fontSize: '1rem',
                        color: theme.colors.accentPrimary,
                        fontWeight: '600',
                      }}
                    >
                      {segment.age}
                    </span>
                  </div>
                </div>
                <p
                  style={{
                    fontSize: '1.125rem',
                    color: theme.colors.lightGray,
                    lineHeight: '1.7',
                  }}
                >
                  {segment.description}
                </p>
              </NeoCard>
            );
          })}
        </div>

        <NeoCard>
          <h3
            style={{
              fontSize: '1.75rem',
              fontWeight: '700',
              color: theme.colors.white,
              marginBottom: '1rem',
            }}
          >
            Общие характеристики аудитории
          </h3>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '2rem',
              marginTop: '2rem',
            }}
          >
            <div>
              <div
                style={{
                  fontSize: '2.5rem',
                  fontWeight: '800',
                  background: theme.gradients.accent,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  marginBottom: '0.5rem',
                }}
              >
                85%
              </div>
              <p style={{ fontSize: '1rem', color: theme.colors.lightGray }}>
                Используют смартфоны для повседневных задач
              </p>
            </div>
            <div>
              <div
                style={{
                  fontSize: '2.5rem',
                  fontWeight: '800',
                  background: theme.gradients.accent,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  marginBottom: '0.5rem',
                }}
              >
                70%
              </div>
              <p style={{ fontSize: '1rem', color: theme.colors.lightGray }}>
                Предпочитают онлайн-бронирование звонкам
              </p>
            </div>
            <div>
              <div
                style={{
                  fontSize: '2.5rem',
                  fontWeight: '800',
                  background: theme.gradients.accent,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  marginBottom: '0.5rem',
                }}
              >
                92%
              </div>
              <p style={{ fontSize: '1rem', color: theme.colors.lightGray }}>
                Ценят экономию времени превыше всего
              </p>
            </div>
          </div>
        </NeoCard>
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
        02 / ЦЕЛЕВАЯ АУДИТОРИЯ
      </div>
    </section>
  );
}
