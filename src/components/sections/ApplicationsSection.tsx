import { theme } from '../../theme';
import SectionHeader from '../SectionHeader';
import NeoCard from '../NeoCard';
import { Smartphone, Monitor, CreditCard, Share2, ShoppingBag, FileText } from 'lucide-react';

export default function ApplicationsSection() {
  const applications = [
    {
      icon: Smartphone,
      title: 'Мобильное приложение',
      description: 'Основная платформа для бронирования. Интуитивный интерфейс с неоморфным дизайном.',
      gradient: theme.gradients.accent,
    },
    {
      icon: Monitor,
      title: 'Веб-платформа',
      description: 'Десктопная версия с расширенными возможностями управления бронированиями.',
      gradient: theme.gradients.vibrant,
    },
    {
      icon: CreditCard,
      title: 'Платежные системы',
      description: 'Интеграция логотипа в интерфейсы оплаты и финансовых операций.',
      gradient: theme.gradients.warm,
    },
    {
      icon: Share2,
      title: 'Социальные сети',
      description: 'Фирменные обложки, аватары и промо-материалы для соцмедиа.',
      gradient: theme.gradients.purple,
    },
    {
      icon: ShoppingBag,
      title: 'Мерч и сувениры',
      description: 'Фирменная продукция: футболки, сумки, стикеры, визитки.',
      gradient: theme.gradients.accent,
    },
    {
      icon: FileText,
      title: 'Документация',
      description: 'Официальные документы, презентации и деловая переписка.',
      gradient: theme.gradients.vibrant,
    },
  ];

  return (
    <section
      id="applications"
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
          number="05"
          title="Применения"
          subtitle="Примеры использования фирменного стиля Rezzy"
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '2rem',
            marginBottom: '3rem',
          }}
        >
          {applications.map((app, index) => {
            const Icon = app.icon;
            return (
              <NeoCard key={index} hover>
                <div
                  style={{
                    width: '72px',
                    height: '72px',
                    borderRadius: theme.borderRadius.md,
                    background: app.gradient,
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
                    fontSize: '1.25rem',
                    fontWeight: '700',
                    color: theme.colors.white,
                    marginBottom: '1rem',
                  }}
                >
                  {app.title}
                </h3>
                <p
                  style={{
                    fontSize: '1rem',
                    color: theme.colors.lightGray,
                    lineHeight: '1.6',
                  }}
                >
                  {app.description}
                </p>
              </NeoCard>
            );
          })}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
          <NeoCard
            style={{
              background: theme.colors.baseNavy,
              minHeight: '400px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <img
              src="/src/assets/{148DCD25-7111-42CF-AFEF-36A4C8400F43}.png"
              alt="Rezzy App Mockup"
              style={{
                width: '100%',
                height: 'auto',
                maxWidth: '500px',
                objectFit: 'contain',
                borderRadius: theme.borderRadius.md,
              }}
            />
          </NeoCard>

          <NeoCard>
            <h3
              style={{
                fontSize: '1.75rem',
                fontWeight: '700',
                color: theme.colors.white,
                marginBottom: '1.5rem',
              }}
            >
              Примеры носителей
            </h3>
            <p
              style={{
                fontSize: '1.125rem',
                color: theme.colors.lightGray,
                lineHeight: '1.7',
                marginBottom: '2rem',
              }}
            >
              Фирменный стиль Rezzy адаптируется под различные носители, сохраняя узнаваемость и
              современный вид.
            </p>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
              }}
            >
              {[
                { label: 'Иконка приложения', value: '1024×1024px' },
                { label: 'App Store скриншоты', value: '1242×2688px' },
                { label: 'Баннеры соцсетей', value: '1200×628px' },
                { label: 'Визитки', value: '90×50mm' },
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    background: theme.colors.baseBlueGreen,
                    borderRadius: theme.borderRadius.sm,
                    padding: '1rem 1.5rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <span
                    style={{
                      fontSize: '1rem',
                      color: theme.colors.white,
                      fontWeight: '600',
                    }}
                  >
                    {item.label}
                  </span>
                  <span
                    style={{
                      fontSize: '0.875rem',
                      color: theme.colors.accentPrimary,
                      fontWeight: '700',
                    }}
                  >
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
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
        05 / ПРИМЕНЕНИЯ
      </div>
    </section>
  );
}
