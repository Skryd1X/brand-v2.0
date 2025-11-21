import { theme } from '../../theme';
import SectionHeader from '../SectionHeader';
import NeoCard from '../NeoCard';
import { Briefcase, Sparkles, Coffee, Heart } from 'lucide-react';

export default function AudienceSection() {
  const segments = [
    {
      icon: Briefcase,
      title: 'Молодые профессионалы',
      age: '22–35 лет',
      description:
        'Специалисты в офисе, IT, креативных индустриях. Планируют встречи, ужины и деловые активности через смартфон и предпочитают не тратить время на звонки.',
      gradient: theme.gradients.accent,
    },
    {
      icon: Sparkles,
      title: 'Активные горожане',
      age: '18–30 лет',
      description:
        'Любят рестораны, лаунж-бары, клубы и ивенты. Для них важно быстро найти свободные места и забронировать их в пару тапов, без уточнений и переписок.',
      gradient: theme.gradients.vibrant,
    },
    {
      icon: Coffee,
      title: 'Пары и компании друзей',
      age: '20–40 лет',
      description:
        'Планируют совместный досуг: рестораны, кофе, вечерние посиделки, компьютерные клубы. Ценят сервис, который помогает сразу видеть доступные слоты и формат заведения.',
      gradient: theme.gradients.warm,
    },
    {
      icon: Heart,
      title: 'Семьи и автолюбители',
      age: '25–40 лет',
      description:
        'Организуют семейный отдых и решают бытовые задачи: бронирование семейных заведений, автомоек, сервисных услуг. Им важны надёжность, прозрачность и напоминания.',
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
          subtitle="Кому нужен Rezzy: ключевые сегменты, поведение и боли пользователей"
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
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'start',
                    gap: '1.5rem',
                    marginBottom: '1.5rem',
                  }}
                >
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
            Общие характеристики и инсайты
          </h3>

          <p
            style={{
              fontSize: '1.125rem',
              color: theme.colors.lightGray,
              lineHeight: '1.7',
              marginBottom: '1.5rem',
            }}
          >
            Мужчины и женщины 18–40 лет, активные пользователи смартфонов. Они ценят комфорт, статус и
            цифровые сервисы, которые экономят время и снимают необходимость лишних звонков и уточнений.
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '2rem',
              marginTop: '1rem',
              marginBottom: '2rem',
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
                Используют смартфон как основной инструмент для решения повседневных задач.
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
                Предпочитают онлайн-бронирование звонкам и перепискам в мессенджерах.
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
                Считают экономию времени ключевым фактором при выборе сервиса.
              </p>
            </div>
          </div>

          <h4
            style={{
              fontSize: '1.25rem',
              fontWeight: '700',
              color: theme.colors.white,
              marginBottom: '0.75rem',
            }}
          >
            Болевые точки текущего рынка
          </h4>
          <ul
            style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'grid',
              gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
              gap: '0.75rem 2rem',
            }}
          >
            {[
              'Бронирование в основном через звонки — это долго и неудобно.',
              'Заявки в мессенджерах теряются, нет единого центра управления.',
              'Нет прозрачного подтверждения брони и уведомлений для гостей.',
              'Сложно сравнить разные заведения и быстро найти свободные места.',
            ].map((point, idx) => (
              <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                <span
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '999px',
                    marginTop: '0.4rem',
                    background: theme.colors.accentPrimary,
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    fontSize: '1rem',
                    color: theme.colors.lightGray,
                    lineHeight: '1.6',
                  }}
                >
                  {point}
                </span>
              </li>
            ))}
          </ul>
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
