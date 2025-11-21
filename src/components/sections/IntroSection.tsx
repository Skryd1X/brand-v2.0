import { theme } from '../../theme';
import NeoCard from '../NeoCard';

export default function IntroSection() {
  return (
    <section
      id="intro"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '4rem 5vw 4rem 7vw',
        position: 'relative',
        boxSizing: 'border-box',
      }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto', width: '100%' }}>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '3rem',
            alignItems: 'center',
          }}
        >
          {/* Текстовый блок */}
          <div style={{ flex: '1 1 320px', minWidth: 0 }}>
            <div
              style={{
                fontSize: 'clamp(2.75rem, 7vw, 5rem)',
                fontWeight: 900,
                background: theme.gradients.accent,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginBottom: '2rem',
                lineHeight: 1.1,
              }}
            >
              Rezzy
            </div>
            <h2
              style={{
                fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                fontWeight: 700,
                color: theme.colors.white,
                marginBottom: '1.5rem',
              }}
            >
              Что такое Rezzy
            </h2>
            <p
              style={{
                fontSize: 'clamp(1rem, 2.4vw, 1.125rem)',
                color: theme.colors.lightGray,
                lineHeight: 1.7,
                marginBottom: '1.5rem',
              }}
            >
              Rezzy — это сервис онлайн-бронирования, который объединяет в одном приложении рестораны,
              кафе, лаундж-бары, компьютерные клубы, автомойки и другие сервисные заведения. Мы помогаем
              пользователям быстро находить свободные слоты и фиксировать бронь без звонков и лишних
              диалогов.
            </p>
            <p
              style={{
                fontSize: 'clamp(1rem, 2.4vw, 1.125rem)',
                color: theme.colors.lightGray,
                lineHeight: 1.7,
                marginBottom: '1.5rem',
              }}
            >
              Для заведений Rezzy — это способ цифровизировать процессы, сократить количество пропущенных
              звонков, повысить заполняемость и получать понятную аналитику по загрузке.
            </p>
            <p
              style={{
                fontSize: 'clamp(1rem, 2.4vw, 1.125rem)',
                color: theme.colors.lightGray,
                lineHeight: 1.7,
              }}
            >
              Цель бренда — стать ведущим сервисом бронирования в Узбекистане и СНГ и постепенно превратить
              Rezzy в суперапп для управления временем и досугом.
            </p>
          </div>

          {/* Карточка вместо логотипа (без изображения) */}
          <div
            style={{
              flex: '1 1 320px',
              minWidth: 0,
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <NeoCard
              gradient={theme.gradients.accent}
              style={{
                width: '100%',
                maxWidth: '400px',
                aspectRatio: '1 / 1',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              hover
            >
              <div
                style={{
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    fontSize: 'clamp(2rem, 4vw, 2.6rem)',
                    fontWeight: 900,
                    color: theme.colors.white,
                    marginBottom: '0.5rem',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                  }}
                >
                  Rezzy
                </div>
                <div
                  style={{
                    fontSize: 'clamp(0.9rem, 1.8vw, 1rem)',
                    color: 'rgba(255,255,255,0.8)',
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                  }}
                >
                  Brand Mark
                </div>
              </div>
            </NeoCard>
          </div>
        </div>
      </div>

      {/* подпись страницы */}
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
        00 / ОБЗОР БРЕНДА
      </div>
    </section>
  );
}
