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
        padding: '4rem 5vw 4rem 7vw', // адаптивные отступы
        position: 'relative',
        boxSizing: 'border-box',
      }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto', width: '100%' }}>
        <SectionHeader
          number="06"
          title="UI-система Rezzy"
          subtitle="Мобильный интерфейс на базе неоморфного дизайна и 8px-сетки"
        />

        {/* 4 принципа UI */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '2rem',
            marginBottom: '3rem',
          }}
        >
          <NeoCard hover>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                marginBottom: '1.5rem',
              }}
            >
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: theme.borderRadius.sm,
                  background: theme.gradients.accent,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <Square size={28} color={theme.colors.white} />
              </div>
              <h3
                style={{
                  fontSize: 'clamp(1.25rem, 2.1vw, 1.5rem)',
                  fontWeight: 700,
                  color: theme.colors.white,
                }}
              >
                Неоморфизм
              </h3>
            </div>
            <p
              style={{
                fontSize: 'clamp(1rem, 2.2vw, 1.125rem)',
                color: theme.colors.lightGray,
                lineHeight: 1.7,
              }}
            >
              Интерфейс строится на мягких тенях и плавных бликах: элементы выглядят как выдавленные
              из глубокого фона (#140C30–#153D4C). Это делает Rezzy визуально «живым» и тактильным,
              но не перегруженным.
            </p>
          </NeoCard>

          <NeoCard hover>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                marginBottom: '1.5rem',
              }}
            >
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: theme.borderRadius.sm,
                  background: theme.gradients.vibrant,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <Circle size={28} color={theme.colors.white} />
              </div>
              <h3
                style={{
                  fontSize: 'clamp(1.25rem, 2.1vw, 1.5rem)',
                  fontWeight: 700,
                  color: theme.colors.white,
                }}
              >
                Пилюли и скругления
              </h3>
            </div>
            <p
              style={{
                fontSize: 'clamp(1rem, 2.2vw, 1.125rem)',
                color: theme.colors.lightGray,
                lineHeight: 1.7,
              }}
            >
              Основная форма элементов — вытянутые «пилюли» и карточки со скруглением 24–32 px.
              Такой пластичный контур используется для кнопок, фильтров, карточек и списков времени.
            </p>
          </NeoCard>

          <NeoCard hover>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                marginBottom: '1.5rem',
              }}
            >
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: theme.borderRadius.sm,
                  background: theme.gradients.warm,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <Zap size={28} color={theme.colors.white} />
              </div>
              <h3
                style={{
                  fontSize: 'clamp(1.25rem, 2.1vw, 1.5rem)',
                  fontWeight: 700,
                  color: theme.colors.white,
                }}
              >
                Акцентные градиенты
              </h3>
            </div>
            <p
              style={{
                fontSize: 'clamp(1rem, 2.2vw, 1.125rem)',
                color: theme.colors.lightGray,
                lineHeight: 1.7,
              }}
            >
              Ключевые действия подсвечиваются градиентом от #168777 к #16A085. Им оформляются
              основные CTA-кнопки («Забронировать»), активные состояния и важные статусные бейджи.
            </p>
          </NeoCard>

          <NeoCard hover>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                marginBottom: '1.5rem',
              }}
            >
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: theme.borderRadius.sm,
                  background: theme.gradients.purple,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <Layers size={28} color={theme.colors.white} />
              </div>
              <h3
                style={{
                  fontSize: 'clamp(1.25rem, 2.1vw, 1.5rem)',
                  fontWeight: 700,
                  color: theme.colors.white,
                }}
              >
                Слоистая композиция
              </h3>
            </div>
            <p
              style={{
                fontSize: 'clamp(1rem, 2.2vw, 1.125rem)',
                color: theme.colors.lightGray,
                lineHeight: 1.7,
              }}
            >
              Нижний слой — глубокий градиент фона, средний — неоморфные карточки, верхний —
              яркие акцентные элементы. Благодаря этому интерфейс остаётся читаемым даже при
              большом количестве данных.
            </p>
          </NeoCard>
        </div>

        {/* Примеры компонентов */}
        <NeoCard style={{ marginBottom: '3rem' }}>
          <h3
            style={{
              fontSize: 'clamp(1.4rem, 2.4vw, 1.75rem)',
              fontWeight: 700,
              color: theme.colors.white,
              marginBottom: '2rem',
            }}
          >
            Примеры компонентов Rezzy
          </h3>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2rem',
            }}
          >
            {/* Кнопки */}
            <div>
              <div
                style={{
                  fontSize: 'clamp(1rem, 2.1vw, 1.125rem)',
                  fontWeight: 700,
                  color: theme.colors.accentPrimary,
                  marginBottom: '1rem',
                }}
              >
                Кнопки действия
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                }}
              >
                <button
                  style={{
                    padding: '1rem 2.25rem',
                    borderRadius: 999,
                    background: theme.gradients.accent,
                    color: theme.colors.white,
                    border: 'none',
                    fontSize: 'clamp(1rem, 2.1vw, 1.125rem)',
                    fontWeight: 700,
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
                  Забронировать столик
                </button>
                <button
                  style={{
                    padding: '1rem 2.25rem',
                    borderRadius: 999,
                    background: 'transparent',
                    color: theme.colors.accentPrimary,
                    border: `2px solid ${theme.colors.accentPrimary}`,
                    fontSize: 'clamp(1rem, 2.1vw, 1.125rem)',
                    fontWeight: 700,
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
                  Смотреть меню
                </button>
              </div>
            </div>

            {/* Карточка заведения */}
            <div>
              <div
                style={{
                  fontSize: 'clamp(1rem, 2.1vw, 1.125rem)',
                  fontWeight: 700,
                  color: theme.colors.accentPrimary,
                  marginBottom: '1rem',
                }}
              >
                Карточка заведения
              </div>
              <div
                style={{
                  padding: '1.5rem',
                  borderRadius: 32,
                  background: theme.colors.baseBlueGreen,
                  boxShadow: theme.shadows.neo,
                }}
              >
                <h4
                  style={{
                    fontSize: 'clamp(1.1rem, 2.2vw, 1.25rem)',
                    fontWeight: 700,
                    color: theme.colors.white,
                    marginBottom: '0.5rem',
                  }}
                >
                  Resto &amp; Lounge
                </h4>
                <p
                  style={{
                    fontSize: '0.95rem',
                    color: theme.colors.lightGray,
                    marginBottom: '1rem',
                  }}
                >
                  Итальянская кухня · центр города
                </p>
                <div
                  style={{
                    display: 'flex',
                    gap: '0.5rem',
                    flexWrap: 'wrap',
                  }}
                >
                  <div
                    style={{
                      padding: '0.5rem 1.25rem',
                      borderRadius: 999,
                      background: theme.gradients.accent,
                      color: theme.colors.white,
                      fontSize: '0.875rem',
                      fontWeight: 600,
                    }}
                  >
                    Сегодня · 19:30
                  </div>
                  <div
                    style={{
                      padding: '0.5rem 1.25rem',
                      borderRadius: 999,
                      background: theme.colors.baseNavy,
                      color: theme.colors.lightGray,
                      fontSize: '0.875rem',
                      fontWeight: 600,
                    }}
                  >
                    Свободно: 3 стола
                  </div>
                </div>
              </div>
            </div>
          </div>
        </NeoCard>

        {/* Система отступов */}
        <NeoCard>
          <h3
            style={{
              fontSize: 'clamp(1.4rem, 2.4vw, 1.75rem)',
              fontWeight: 700,
              color: theme.colors.white,
              marginBottom: '1.5rem',
            }}
          >
            Система отступов
          </h3>
          <p
            style={{
              fontSize: 'clamp(1rem, 2.2vw, 1.125rem)',
              color: theme.colors.lightGray,
              lineHeight: 1.7,
              marginBottom: '2rem',
            }}
          >
            В Rezzy используется единая 8 px-сетка. Все отступы, радиусы и размеры элементов кратны
            8: 8 / 16 / 24 / 32 / 40 / 48 px. Это упрощает дизайн и разработку, а интерфейс выглядит
            цельно на всех экранах.
          </p>
          <div
            style={{
              display: 'flex',
              gap: '1rem',
              alignItems: 'flex-end',
              flexWrap: 'wrap',
            }}
          >
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
          fontSize: 'clamp(0.75rem, 1.6vw, 1rem)',
          color: theme.colors.mediumGray,
          fontWeight: 600,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          whiteSpace: 'nowrap',
        }}
      >
        06 / UI-СИСТЕМА REZZY
      </div>
    </section>
  );
}
