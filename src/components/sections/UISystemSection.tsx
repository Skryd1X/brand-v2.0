import { theme } from '../../theme';
import SectionHeader from '../SectionHeader';
import NeoCard from '../NeoCard';
import { Square, Circle, Zap, Layers } from 'lucide-react';

export default function UISystemSection() {
  return (
    <section
      id="ui"
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
          number="06"
          title="UI-система Rezzy"
          subtitle="Неоморфный дизайн и принципы интерфейса"
        />

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '3rem' }}>
          <NeoCard hover>
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
                <Square size={28} color={theme.colors.white} />
              </div>
              <h3
                style={{
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  color: theme.colors.white,
                }}
              >
                Неоморфизм
              </h3>
            </div>
            <p
              style={{
                fontSize: '1.125rem',
                color: theme.colors.lightGray,
                lineHeight: '1.7',
              }}
            >
              Мягкие тени и плавные переходы создают объемный эффект. Карточки выглядят как будто
              выдавлены из фона или утоплены в него.
            </p>
          </NeoCard>

          <NeoCard hover>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: theme.borderRadius.sm,
                  background: theme.gradients.vibrant,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Circle size={28} color={theme.colors.white} />
              </div>
              <h3
                style={{
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  color: theme.colors.white,
                }}
              >
                Скругления
              </h3>
            </div>
            <p
              style={{
                fontSize: '1.125rem',
                color: theme.colors.lightGray,
                lineHeight: '1.7',
              }}
            >
              Большие радиусы скругления (24-32px) делают интерфейс дружелюбным и современным.
              Используются во всех элементах UI.
            </p>
          </NeoCard>

          <NeoCard hover>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: theme.borderRadius.sm,
                  background: theme.gradients.warm,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Zap size={28} color={theme.colors.white} />
              </div>
              <h3
                style={{
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  color: theme.colors.white,
                }}
              >
                Акценты
              </h3>
            </div>
            <p
              style={{
                fontSize: '1.125rem',
                color: theme.colors.lightGray,
                lineHeight: '1.7',
              }}
            >
              Яркие бирюзовые и неоновые градиенты выделяют важные элементы. CTA-кнопки и интерактивные
              элементы с градиентной заливкой.
            </p>
          </NeoCard>

          <NeoCard hover>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: theme.borderRadius.sm,
                  background: theme.gradients.purple,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Layers size={28} color={theme.colors.white} />
              </div>
              <h3
                style={{
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  color: theme.colors.white,
                }}
              >
                Слои
              </h3>
            </div>
            <p
              style={{
                fontSize: '1.125rem',
                color: theme.colors.lightGray,
                lineHeight: '1.7',
              }}
            >
              Многослойная композиция с тёмным градиентным фоном и светлыми карточками создаёт глубину
              и иерархию.
            </p>
          </NeoCard>
        </div>

        <NeoCard style={{ marginBottom: '3rem' }}>
          <h3
            style={{
              fontSize: '1.75rem',
              fontWeight: '700',
              color: theme.colors.white,
              marginBottom: '2rem',
            }}
          >
            Примеры компонентов
          </h3>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem' }}>
            <div>
              <div
                style={{
                  fontSize: '1.125rem',
                  fontWeight: '700',
                  color: theme.colors.accentPrimary,
                  marginBottom: '1rem',
                }}
              >
                Кнопки
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <button
                  style={{
                    padding: '1rem 2rem',
                    borderRadius: theme.borderRadius.md,
                    background: theme.gradients.accent,
                    color: theme.colors.white,
                    border: 'none',
                    fontSize: '1.125rem',
                    fontWeight: '700',
                    cursor: 'pointer',
                    boxShadow: theme.shadows.glow,
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = theme.shadows.glowStrong;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = theme.shadows.glow;
                  }}
                >
                  Забронировать
                </button>
                <button
                  style={{
                    padding: '1rem 2rem',
                    borderRadius: theme.borderRadius.md,
                    background: 'transparent',
                    color: theme.colors.accentPrimary,
                    border: `2px solid ${theme.colors.accentPrimary}`,
                    fontSize: '1.125rem',
                    fontWeight: '700',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = theme.colors.accentPrimary;
                    e.currentTarget.style.color = theme.colors.white;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.color = theme.colors.accentPrimary;
                  }}
                >
                  Подробнее
                </button>
              </div>
            </div>

            <div>
              <div
                style={{
                  fontSize: '1.125rem',
                  fontWeight: '700',
                  color: theme.colors.accentPrimary,
                  marginBottom: '1rem',
                }}
              >
                Карточки
              </div>
              <div
                style={{
                  padding: '1.5rem',
                  borderRadius: theme.borderRadius.md,
                  background: theme.colors.baseBlueGreen,
                  boxShadow: theme.shadows.neo,
                }}
              >
                <h4
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: '700',
                    color: theme.colors.white,
                    marginBottom: '0.5rem',
                  }}
                >
                  Ресторан "Вкус"
                </h4>
                <p
                  style={{
                    fontSize: '1rem',
                    color: theme.colors.lightGray,
                    marginBottom: '1rem',
                  }}
                >
                  Итальянская кухня
                </p>
                <div
                  style={{
                    display: 'flex',
                    gap: '0.5rem',
                  }}
                >
                  <div
                    style={{
                      padding: '0.5rem 1rem',
                      borderRadius: theme.borderRadius.sm,
                      background: theme.gradients.accent,
                      color: theme.colors.white,
                      fontSize: '0.875rem',
                      fontWeight: '600',
                    }}
                  >
                    18:00
                  </div>
                  <div
                    style={{
                      padding: '0.5rem 1rem',
                      borderRadius: theme.borderRadius.sm,
                      background: theme.colors.baseNavy,
                      color: theme.colors.lightGray,
                      fontSize: '0.875rem',
                      fontWeight: '600',
                    }}
                  >
                    2 места
                  </div>
                </div>
              </div>
            </div>
          </div>
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
            Система отступов
          </h3>
          <p
            style={{
              fontSize: '1.125rem',
              color: theme.colors.lightGray,
              lineHeight: '1.7',
              marginBottom: '2rem',
            }}
          >
            Используется 8px сетка для всех отступов и размеров элементов. Это обеспечивает визуальную
            гармонию и упрощает разработку.
          </p>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'end' }}>
            {[8, 16, 24, 32, 40, 48].map((size) => (
              <div key={size} style={{ textAlign: 'center' }}>
                <div
                  style={{
                    width: `${size}px`,
                    height: `${size}px`,
                    background: theme.gradients.accent,
                    borderRadius: '4px',
                    marginBottom: '0.5rem',
                  }}
                />
                <div
                  style={{
                    fontSize: '0.875rem',
                    color: theme.colors.mediumGray,
                  }}
                >
                  {size}px
                </div>
              </div>
            ))}
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
        06 / UI-СИСТЕМА REZZY
      </div>
    </section>
  );
}
