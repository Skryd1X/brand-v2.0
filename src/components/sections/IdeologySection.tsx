import { theme } from '../../theme';
import SectionHeader from '../SectionHeader';
import NeoCard from '../NeoCard';
import { Clock, Target, TrendingUp, Users } from 'lucide-react';

export default function IdeologySection() {
  const blocks = [
    {
      icon: Users,
      title: 'Что такое Rezzy',
      text:
        'Rezzy — сервис онлайн-бронирования для ресторанов, кафе, лаунж-баров, компьютерных клубов, автомоек и других сервисных заведений. ' +
        'Мы помогаем людям экономить время, а бизнесу — зарабатывать больше за счёт цифровизации процессов.',
      gradient: theme.gradients.accent,
    },
    {
      icon: Clock,
      title: 'История и контекст',
      text:
        'Rezzy появился как ответ на хаос с бронированием через звонки и мессенджеры. ' +
        'Цель сервиса — сделать бронирование в Узбекистане и СНГ таким же простым и привычным, как заказ такси или доставки еды.',
      gradient: theme.gradients.warm,
    },
    {
      icon: Target,
      title: 'Миссия',
      text:
        'Мы создаём удобный сервис, который экономит время людям и помогает заведениям зарабатывать больше ' +
        'за счёт прозрачных процессов, аналитики и цифровых инструментов.',
      gradient: theme.gradients.vibrant,
    },
    {
      icon: TrendingUp,
      title: 'Видение и ценности',
      text:
        'Наше видение — стать ведущим сервисом бронирования в Узбекистане и СНГ, постепенно превратив Rezzy в суперапп ' +
        'для городских развлечений и сервисов. Ценности бренда: удобство, современность, статус, надёжность и инновации.',
      gradient: theme.gradients.purple,
    },
  ];

  return (
    <section
      id="ideology"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '4rem 5vw 4rem 7vw', // вместо жёстких 4/8/12 — адаптивные отступы
        position: 'relative',
        boxSizing: 'border-box',
      }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto', width: '100%' }}>
        <SectionHeader
          number="01"
          title="Идеология бренда"
          subtitle="Кто мы, зачем существуем и как Rezzy меняет подход к бронированию"
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '2rem',
          }}
        >
          {blocks.map((block, index) => {
            const Icon = block.icon;
            return (
              <NeoCard key={index} hover>
                <div
                  style={{
                    width: '72px',
                    height: '72px',
                    borderRadius: theme.borderRadius.md,
                    background: block.gradient,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.5rem',
                    boxShadow: '0 8px 32px rgba(22, 160, 133, 0.3)',
                  }}
                >
                  <Icon size={36} color={theme.colors.white} />
                </div>
                <h3
                  style={{
                    fontSize: 'clamp(1.25rem, 2.2vw, 1.75rem)',
                    fontWeight: 700,
                    color: theme.colors.white,
                    marginBottom: '0.75rem',
                  }}
                >
                  {block.title}
                </h3>
                <p
                  style={{
                    fontSize: 'clamp(1rem, 2.2vw, 1.125rem)',
                    color: theme.colors.lightGray,
                    lineHeight: 1.7,
                  }}
                >
                  {block.text}
                </p>
              </NeoCard>
            );
          })}
        </div>

        <NeoCard style={{ marginTop: '2rem' }}>
          <h3
            style={{
              fontSize: 'clamp(1.25rem, 2.2vw, 1.75rem)',
              fontWeight: 700,
              color: theme.colors.white,
              marginBottom: '1rem',
            }}
          >
            Позиционирование и слоган
          </h3>
          <p
            style={{
              fontSize: 'clamp(1rem, 2.2vw, 1.125rem)',
              color: theme.colors.lightGray,
              lineHeight: 1.7,
              marginBottom: '0.75rem',
            }}
          >
            Rezzy — первое приложение для онлайн-бронирования в Узбекистане, объединяющее рестораны, кафе,
            лаунж-бары, компьютерные клубы и автомойки. Мы делаем бронирование быстрым, понятным и
            технологичным для пользователей и партнёров, превращая Rezzy в удобную экосистему для управления
            временем и посещениями.
          </p>
          <p
            style={{
              fontSize: 'clamp(1rem, 2.2vw, 1.125rem)',
              color: theme.colors.white,
              fontWeight: 600,
              marginTop: '0.5rem',
            }}
          >
            Слоган:{' '}
            <span style={{ color: theme.colors.accentGreen }}>
              «Rezzy — бронируй, а не жди»
            </span>
          </p>
        </NeoCard>
      </div>

      <div
        style={{
          position: 'absolute',
          bottom: '2rem',
          right: '4rem',
          fontSize: 'clamp(0.75rem, 1.6vw, 1rem)',
          color: theme.colors.mediumGray,
          fontWeight: 600,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          whiteSpace: 'nowrap',
        }}
      >
        01 / ИДЕОЛОГИЯ БРЕНДА
      </div>
    </section>
  );
}
