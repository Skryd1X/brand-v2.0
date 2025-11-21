import { theme } from '../../theme';
import SectionHeader from '../SectionHeader';
import NeoCard from '../NeoCard';
import {
  Smartphone,
  Monitor,
  CreditCard,
  Share2,
  ShoppingBag,
  FileText,
} from 'lucide-react';

export default function ApplicationsSection() {
  const applications = [
    {
      icon: Smartphone,
      title: 'Мобильное приложение Rezzy',
      description:
        'Главная точка контакта с пользователем. Бронирование ресторанов, лаунджей, ПК-клубов, автомоек и других сервисов в один тап.',
      gradient: theme.gradients.accent,
    },
    {
      icon: Monitor,
      title: 'Кабинет заведений и веб-версия',
      description:
        'Интерфейсы для администраторов: управление бронями, столиками, слотами и аналитикой, выполненные в едином стиле Rezzy.',
      gradient: theme.gradients.vibrant,
    },
    {
      icon: CreditCard,
      title: 'Платёжные сценарии',
      description:
        'Экран оплаты, статусы транзакций, экраны подписок и депозита. Использование фирменных цветов в сочетании с системными UI-паттернами.',
      gradient: theme.gradients.warm,
    },
    {
      icon: Share2,
      title: 'Социальные сети и промо',
      description:
        'Аватары, обложки, превью для сторис и Reels, баннеры для Telegram и VK — всё в единой палитре и с акцентом на иконку Rezzy.',
      gradient: theme.gradients.purple,
    },
    {
      icon: ShoppingBag,
      title: 'Мерч и предметный брендинг',
      description:
        'Худи, свитшоты, футболки, крафт-пакеты, бокалы, блокноты и другая сувенирка с логотипом и фирменными градиентами.',
      gradient: theme.gradients.accent,
    },
    {
      icon: FileText,
      title: 'Документы и презентации',
      description:
        'Коммерческие предложения, договоры, презентации для инвесторов и партнёров, оформленные в фирменном стиле Rezzy.',
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
        padding: '4rem 5vw 4rem 7vw', // адаптивные отступы
        position: 'relative',
        boxSizing: 'border-box',
      }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto', width: '100%' }}>
        <SectionHeader
          number="05"
          title="Применение стиля"
          subtitle="Где и как используется фирменный стиль Rezzy"
        />

        {/* сетка с зонами применения */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
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
                    flexShrink: 0,
                  }}
                >
                  <Icon size={36} color={theme.colors.white} />
                </div>
                <h3
                  style={{
                    fontSize: 'clamp(1.1rem, 2vw, 1.25rem)',
                    fontWeight: 700,
                    color: theme.colors.white,
                    marginBottom: '1rem',
                  }}
                >
                  {app.title}
                </h3>
                <p
                  style={{
                    fontSize: 'clamp(0.95rem, 1.9vw, 1rem)',
                    color: theme.colors.lightGray,
                    lineHeight: 1.6,
                  }}
                >
                  {app.description}
                </p>
              </NeoCard>
            );
          })}
        </div>

        {/* мокап + табличка с носителями */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
          }}
        >
          <NeoCard
            style={{
              background: theme.colors.baseNavy,
              minHeight: '320px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <img
              src={appMock}
              alt="Rezzy — мобильный интерфейс"
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
                fontSize: 'clamp(1.4rem, 2.4vw, 1.75rem)',
                fontWeight: 700,
                color: theme.colors.white,
                marginBottom: '1.5rem',
              }}
            >
              Примеры носителей
            </h3>
            <p
              style={{
                fontSize: 'clamp(1rem, 2.2vw, 1.125rem)',
                color: theme.colors.lightGray,
                lineHeight: 1.7,
                marginBottom: '2rem',
              }}
            >
              Фирменный стиль Rezzy адаптируется под цифровые и офлайн-носители: от иконки приложения
              до мерча и презентаций. На всех носителях сохраняются палитра, типографика и характер
              неоморфного интерфейса.
            </p>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
              }}
            >
              {[
                { label: 'Иконка приложения Rezzy', value: '1024 × 1024 px' },
                { label: 'Скриншоты App Store / Google Play', value: '1242 × 2688 px' },
                { label: 'Обложки и баннеры соцсетей', value: '1080 × 1920 / 1200 × 628 px' },
                { label: 'Презентации и PDF', value: '16:9, A4' },
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
                    gap: '1rem',
                    flexWrap: 'wrap',
                  }}
                >
                  <span
                    style={{
                      fontSize: '0.95rem',
                      color: theme.colors.white,
                      fontWeight: 600,
                    }}
                  >
                    {item.label}
                  </span>
                  <span
                    style={{
                      fontSize: '0.875rem',
                      color: theme.colors.accentPrimary,
                      fontWeight: 700,
                      whiteSpace: 'nowrap',
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
          fontSize: 'clamp(0.75rem, 1.6vw, 1rem)',
          color: theme.colors.mediumGray,
          fontWeight: 600,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          whiteSpace: 'nowrap',
        }}
      >
        05 / ПРИМЕНЕНИЕ СТИЛЯ
      </div>
    </section>
  );
}
