import { theme } from '../../theme';
import SectionHeader from '../SectionHeader';
import NeoCard from '../NeoCard';
import { Clock, Target, TrendingUp, Users } from 'lucide-react';

export default function IdeologySection() {
  const values = [
    {
      icon: Clock,
      title: 'История',
      text: 'Rezzy создан командой профессионалов, которые понимают ценность времени в современном мире.',
      gradient: theme.gradients.accent,
    },
    {
      icon: Target,
      title: 'Миссия',
      text: 'Сделать процесс бронирования максимально простым, удобным и быстрым для каждого пользователя.',
      gradient: theme.gradients.warm,
    },
    {
      icon: TrendingUp,
      title: 'Польза',
      text: 'Экономия времени, удобный поиск, мгновенное бронирование и управление всеми записями в одном приложении.',
      gradient: theme.gradients.vibrant,
    },
    {
      icon: Users,
      title: 'Ценности',
      text: 'Прозрачность, надежность, инновации и забота о времени каждого клиента.',
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
        padding: '4rem 8rem 4rem 12rem',
        position: 'relative',
      }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto', width: '100%' }}>
        <SectionHeader
          number="01"
          title="Идеология бренда"
          subtitle="Основные принципы и ценности, которые определяют развитие Rezzy"
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '2rem',
          }}
        >
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <NeoCard key={index} hover>
                <div
                  style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: theme.borderRadius.md,
                    background: value.gradient,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.5rem',
                    boxShadow: '0 8px 32px rgba(22, 160, 133, 0.3)',
                  }}
                >
                  <Icon size={40} color={theme.colors.white} />
                </div>
                <h3
                  style={{
                    fontSize: '1.75rem',
                    fontWeight: '700',
                    color: theme.colors.white,
                    marginBottom: '1rem',
                  }}
                >
                  {value.title}
                </h3>
                <p
                  style={{
                    fontSize: '1.125rem',
                    color: theme.colors.lightGray,
                    lineHeight: '1.7',
                  }}
                >
                  {value.text}
                </p>
              </NeoCard>
            );
          })}
        </div>

        <NeoCard style={{ marginTop: '2rem' }}>
          <h3
            style={{
              fontSize: '1.75rem',
              fontWeight: '700',
              color: theme.colors.white,
              marginBottom: '1rem',
            }}
          >
            Позиционирование
          </h3>
          <p
            style={{
              fontSize: '1.125rem',
              color: theme.colors.lightGray,
              lineHeight: '1.7',
            }}
          >
            Rezzy позиционируется как современная технологичная платформа для умных людей, которые ценят
            своё время и предпочитают эффективные digital-решения. Мы объединяем все виды бронирований в
            одном удобном интерфейсе, создавая экосистему для управления временем.
          </p>
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
        01 / ИДЕОЛОГИЯ БРЕНДА
      </div>
    </section>
  );
}
