import { theme } from '../../theme';
import NeoCard from '../NeoCard';
import logoRezzy from '../../assets/{B620A630-29AF-4A07-A8E3-8238DCB61CD6}.png';

export default function IntroSection() {
  return (
    <section
      id="intro"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        // более мягкие, адаптивные отступы, чтобы не ломать мобилку
        padding: '4rem 5vw 4rem 7vw',
        position: 'relative',
        boxSizing: 'border-box',
      }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto', width: '100%' }}>
        <div
          style={{
            // вместо жёсткой grid 1fr/1fr — флекс с переносом
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
              кафе, лаундж-бары, компьютерные клубы, автомойки и другие сервисные заведения.
              Мы помогаем пользователям быстро находить свободные слоты и фиксировать бронь без звонков и лишних диалогов.
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

          {/* Карточка с логотипом */}
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
                // квадратная карточка, которая ужимается на мобилке
                aspectRatio: '1 / 1',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              hover
            >
              <img
                src={logoRezzy}
                alt="Rezzy Logo"
                style={{
                  width: '70%',
                  height: '70%',
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 0 40px rgba(255, 255, 255, 0.3))',
                }}
              />
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
