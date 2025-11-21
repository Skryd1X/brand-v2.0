import { theme } from '../../theme';
import SectionHeader from '../SectionHeader';
import NeoCard from '../NeoCard';
import { MessageSquare, Smile, Zap, Shield } from 'lucide-react';

export default function ToneSection() {
  const principles = [
    {
      icon: MessageSquare,
      title: 'Простой и понятный',
      description:
        'Пишем так, как говорим в жизни: коротко, по делу, без канцелярита и сложных конструкций.',
      examples: ['Забронируй за 10 секунд', 'Меньше звонков — больше времени для себя'],
    },
    {
      icon: Smile,
      title: 'Дружелюбный',
      description:
        'Мы на стороне пользователя: поддерживаем, подсвечиваем выгоды, не поучаем и не давим.',
      examples: ['Твой столик уже ждёт тебя', 'Если что-то не получилось — мы поможем разобраться'],
    },
    {
      icon: Zap,
      title: 'Уверенный и современный',
      description:
        'Показываем, что знаем, что делаем: даём чёткие формулировки, уверенные CTA и избегаем размытых фраз.',
      examples: ['Бронь подтверждена ✅', 'Выбери место — остальное сделаем мы'],
    },
    {
      icon: Shield,
      title: 'Заботливый и ненавязчивый',
      description:
        'Напоминаем, подсказываем и ведём за руку, но не заваливаем лишними сообщениями и агрессивными продажами.',
      examples: ['Мы напомним о брони за 1 час', 'Можешь отменить бронь в один клик — без звонков'],
    },
  ];

  return (
    <section
      id="tone"
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
          number="03"
          title="Tone of Voice"
          subtitle="Как звучит Rezzy в приложении, рекламе и коммуникации с пользователем"
        />

        {/* Принципы тона */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '2rem',
            marginBottom: '2rem',
          }}
        >
          {principles.map((principle, index) => {
            const Icon = principle.icon;
            return (
              <NeoCard key={index} hover>
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
                    <Icon size={28} color={theme.colors.white} />
                  </div>
                  <h3
                    style={{
                      fontSize: 'clamp(1.25rem, 2.1vw, 1.5rem)',
                      fontWeight: 700,
                      color: theme.colors.white,
                    }}
                  >
                    {principle.title}
                  </h3>
                </div>
                <p
                  style={{
                    fontSize: 'clamp(1rem, 2.1vw, 1.125rem)',
                    color: theme.colors.lightGray,
                    lineHeight: 1.7,
                    marginBottom: '1.5rem',
                  }}
                >
                  {principle.description}
                </p>
                <div
                  style={{
                    background: theme.colors.baseBlueGreen,
                    borderRadius: theme.borderRadius.sm,
                    padding: '1rem',
                  }}
                >
                  <div
                    style={{
                      fontSize: '0.875rem',
                      color: theme.colors.mediumGray,
                      marginBottom: '0.75rem',
                      fontWeight: 600,
                    }}
                  >
                    Примеры формулировок:
                  </div>
                  {principle.examples.map((example, i) => (
                    <div
                      key={i}
                      style={{
                        fontSize: '1rem',
                        color: theme.colors.accentPrimary,
                        marginBottom: i < principle.examples.length - 1 ? '0.5rem' : '0',
                      }}
                    >
                      "{example}"
                    </div>
                  ))}
                </div>
              </NeoCard>
            );
          })}
        </div>

        {/* Как пишем / чего избегаем */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '2rem',
          }}
        >
          <NeoCard>
            <h3
              style={{
                fontSize: 'clamp(1.25rem, 2.2vw, 1.75rem)',
                fontWeight: 700,
                color: theme.colors.white,
                marginBottom: '1rem',
              }}
            >
              ✓ Как пишем
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {[
                'Короткие, понятные фразы без сложных оборотов.',
                'Фокус на выгоде пользователя: время, удобство, статус.',
                'Можно на «ты» для молодой аудитории, на «вы» — в деловых коммуникациях.',
                'Используем живой язык и понятные CTA: «забронируй», «выбери», «подтверди».',
              ].map((item, i) => (
                <li
                  key={i}
                  style={{
                    fontSize: 'clamp(1rem, 2.2vw, 1.125rem)',
                    color: theme.colors.lightGray,
                    marginBottom: '0.75rem',
                    paddingLeft: '1.5rem',
                    position: 'relative',
                    lineHeight: 1.6,
                  }}
                >
                  <span
                    style={{
                      position: 'absolute',
                      left: 0,
                      color: theme.colors.accentPrimary,
                    }}
                  >
                    •
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </NeoCard>

          <NeoCard>
            <h3
              style={{
                fontSize: 'clamp(1.25rem, 2.2vw, 1.75rem)',
                fontWeight: 700,
                color: theme.colors.white,
                marginBottom: '1rem',
              }}
            >
              ✗ Чего избегаем
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {[
                'Канцелярита: «осуществите бронирование», «оформите заявку» и т.п.',
                'Чрезмерной формальности и сухих обращений.',
                'Длинных абзацев без структуры и конкретики.',
                'Сложного технического жаргона и непонятного сленга.',
              ].map((item, i) => (
                <li
                  key={i}
                  style={{
                    fontSize: 'clamp(1rem, 2.2vw, 1.125rem)',
                    color: theme.colors.lightGray,
                    marginBottom: '0.75rem',
                    paddingLeft: '1.5rem',
                    position: 'relative',
                    lineHeight: 1.6,
                  }}
                >
                  <span
                    style={{
                      position: 'absolute',
                      left: 0,
                      color: theme.colors.mediumGray,
                    }}
                  >
                    •
                  </span>
                  {item}
                </li>
              ))}
            </ul>
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
        03 / TONE OF VOICE
      </div>
    </section>
  );
}
