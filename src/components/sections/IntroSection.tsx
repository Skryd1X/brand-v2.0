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
        padding: '4rem 8rem 4rem 12rem',
        position: 'relative',
      }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto', width: '100%' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '4rem',
            alignItems: 'center',
          }}
        >
          <div>
            <div
              style={{
                fontSize: '5rem',
                fontWeight: '900',
                background: theme.gradients.accent,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginBottom: '2rem',
                lineHeight: '1.1',
              }}
            >
              Rezzy
            </div>
            <h2
              style={{
                fontSize: '2rem',
                fontWeight: '700',
                color: theme.colors.white,
                marginBottom: '1.5rem',
              }}
            >
              Что такое Rezzy
            </h2>
            <p
              style={{
                fontSize: '1.125rem',
                color: theme.colors.lightGray,
                lineHeight: '1.7',
                marginBottom: '1.5rem',
              }}
            >
              Rezzy — это сервис онлайн-бронирования, который объединяет в одном приложении рестораны,
              кафе, лаундж-бары, компьютерные клубы, автомойки и другие сервисные заведения.
              Мы помогаем пользователям быстро находить свободные слоты и фиксировать бронь без звонков и лишних диалогов.
            </p>
            <p
              style={{
                fontSize: '1.125rem',
                color: theme.colors.lightGray,
                lineHeight: '1.7',
                marginBottom: '1.5rem',
              }}
            >
              Для заведений Rezzy — это способ цифровизировать процессы, сократить количество пропущенных
              звонков, повысить заполняемость и получать понятную аналитику по загрузке.
            </p>
            <p
              style={{
                fontSize: '1.125rem',
                color: theme.colors.lightGray,
                lineHeight: '1.7',
              }}
            >
              Цель бренда — стать ведущим сервисом бронирования в Узбекистане и СНГ и постепенно превратить
              Rezzy в суперапп для управления временем и досугом.
            </p>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <NeoCard
              gradient={theme.gradients.accent}
              style={{
                width: '400px',
                height: '400px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              hover
            >
              <img
                src="/src/assets/{B620A630-29AF-4A07-A8E3-8238DCB61CD6}.png"
                alt="Rezzy Logo"
                style={{
                  width: '280px',
                  height: '280px',
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 0 40px rgba(255, 255, 255, 0.3))',
                }}
              />
            </NeoCard>
          </div>
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
        00 / ОБЗОР БРЕНДА
      </div>
    </section>
  );
}
