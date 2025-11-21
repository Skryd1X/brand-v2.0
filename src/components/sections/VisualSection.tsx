import { theme } from '../../theme';
import SectionHeader from '../SectionHeader';
import NeoCard from '../NeoCard';
import ColorPalette from '../ColorPalette';
import { Check, X } from 'lucide-react';

export default function VisualSection() {
  return (
    <section
      id="visual"
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
        <SectionHeader
          number="04"
          title="Визуальная айдентика"
          subtitle="Логотип, цветовая палитра и фирменный стиль Rezzy"
        />

        {/* Логотип + описание (без файла картинки) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
            marginBottom: '3rem',
            alignItems: 'stretch',
          }}
        >
          <NeoCard
            gradient={theme.gradients.accent}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              maxWidth: '420px',
              margin: '0 auto',
              aspectRatio: '1 / 1',
            }}
          >
            <div
              style={{
                width: '72%',
                aspectRatio: '4 / 1',
                borderRadius: 999,
                background: 'rgba(0,0,0,0.18)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.25rem',
              }}
            >
              <span
                style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2.1rem)',
                  fontWeight: 900,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: theme.colors.white,
                }}
              >
                Rezzy
              </span>
            </div>
            <div
              style={{
                fontSize: 'clamp(1.1rem, 2vw, 1.25rem)',
                fontWeight: 700,
                color: theme.colors.white,
                textAlign: 'center',
              }}
            >
              Основной логотип Rezzy (словесный знак)
            </div>
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
              Символика логотипа
            </h3>
            <p
              style={{
                fontSize: 'clamp(1rem, 2.2vw, 1.125rem)',
                color: theme.colors.lightGray,
                lineHeight: 1.7,
                marginBottom: '2rem',
              }}
            >
              Логотип Rezzy строится на мягких, динамичных формах и выразительном словесном знаке. Он
              отражает движение вперёд, цифровой сервис и быстрый путь пользователя: от выбора заведения до
              подтверждённой брони. Закругления подчеркивают удобство и дружелюбие продукта, а фирменный
              градиент усиливает ощущение статуса и современности.
            </p>

            <div
              style={{
                background: theme.colors.baseBlueGreen,
                borderRadius: theme.borderRadius.sm,
                padding: '1.5rem',
              }}
            >
              <h4
                style={{
                  fontSize: 'clamp(1.1rem, 2.1vw, 1.25rem)',
                  fontWeight: 700,
                  color: theme.colors.white,
                  marginBottom: '1rem',
                }}
              >
                Варианты логотипа
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div
                    style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      background: theme.colors.accentPrimary,
                    }}
                  />
                  <span style={{ color: theme.colors.lightGray, fontSize: '0.95rem', lineHeight: 1.6 }}>
                    <strong>Основная версия:</strong> словесный знак Rezzy с фирменным градиентом для
                    цифровой среды, презентаций и ключевых носителей.
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div
                    style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      background: theme.colors.accentPrimary,
                    }}
                  />
                  <span style={{ color: theme.colors.lightGray, fontSize: '0.95rem', lineHeight: 1.6 }}>
                    <strong>Монохром:</strong> чёрный или белый логотип для печати, тиснения и случаев, когда
                    цвет ограничен.
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div
                    style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      background: theme.colors.accentPrimary,
                    }}
                  />
                  <span style={{ color: theme.colors.lightGray, fontSize: '0.95rem', lineHeight: 1.6 }}>
                    <strong>Инверсия:</strong> белый знак на фирменном тёмном фоне — для промо, баннеров и
                    цифровых карточек.
                  </span>
                </div>
              </div>
            </div>
          </NeoCard>
        </div>

        {/* Правила / запрещено */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
            marginBottom: '3rem',
          }}
        >
          <NeoCard>
            <h3
              style={{
                fontSize: 'clamp(1.3rem, 2.2vw, 1.5rem)',
                fontWeight: 700,
                color: theme.colors.white,
                marginBottom: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
              }}
            >
              <Check size={28} color={theme.colors.accentPrimary} />
              Правила использования
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {[
                'Минимальный размер: 32 px по высоте для digital, 15 mm — для печати.',
                'Охранная зона: отступ не менее высоты буквы «R»/высоты логотипа от края до любых элементов.',
                'Размещать на контрастных фонах, обеспечивающих хорошую читаемость.',
                'Всегда сохранять исходные пропорции при масштабировании.',
              ].map((item, i) => (
                <li
                  key={i}
                  style={{
                    fontSize: '0.95rem',
                    color: theme.colors.lightGray,
                    marginBottom: '1rem',
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
                fontSize: 'clamp(1.3rem, 2.2vw, 1.5rem)',
                fontWeight: 700,
                color: theme.colors.white,
                marginBottom: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
              }}
            >
              <X size={28} color="#FF6B6B" />
              Запрещено
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {[
                'Искажать пропорции, растягивать логотип по вертикали или горизонтали.',
                'Перекрашивать логотип в небрендовые цвета или добавлять случайные градиенты.',
                'Размещать на пёстрых или низкоконтрастных фонах без подложки.',
                'Добавлять лишние эффекты: обводки, glow, тени, размытие, контуры и изменять композицию знака.',
              ].map((item, i) => (
                <li
                  key={i}
                  style={{
                    fontSize: '0.95rem',
                    color: theme.colors.lightGray,
                    marginBottom: '1rem',
                    paddingLeft: '1.5rem',
                    position: 'relative',
                    lineHeight: 1.6,
                  }}
                >
                  <span
                    style={{
                      position: 'absolute',
                      left: 0,
                      color: '#FF6B6B',
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

        {/* Цвета и типографика остаются как были */}
        <div style={{ marginBottom: '3rem' }}>
          <h3
            style={{
              fontSize: 'clamp(1.6rem, 2.6vw, 2rem)',
              fontWeight: 700,
              color: theme.colors.white,
              marginBottom: '2rem',
            }}
          >
            Цветовая палитра Rezzy
          </h3>
          <ColorPalette />
        </div>

        <NeoCard>
          <h3
            style={{
              fontSize: 'clamp(1.4rem, 2.4vw, 1.75rem)',
              fontWeight: 700,
              color: theme.colors.white,
              marginBottom: '1.5rem',
            }}
          >
            Типографика
          </h3>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2rem',
            }}
          >
            <div>
              <div
                style={{
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  color: theme.colors.accentPrimary,
                  marginBottom: '1rem',
                }}
              >
                Заголовки и акценты
              </div>
              <div
                style={{
                  fontSize: 'clamp(1.6rem, 2.4vw, 2rem)',
                  fontWeight: 700,
                  color: theme.colors.white,
                  marginBottom: '0.5rem',
                  fontFamily:
                    '"Montserrat", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                }}
              >
                Montserrat Bold
              </div>
              <p
                style={{
                  fontSize: '0.95rem',
                  color: theme.colors.lightGray,
                  lineHeight: 1.6,
                }}
              >
                Используется для H1–H2, ключевых заголовков, кнопок и CTA-элементов.
              </p>
            </div>
            <div>
              <div
                style={{
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  color: theme.colors.accentPrimary,
                  marginBottom: '1rem',
                }}
              >
                Основной текст
              </div>
              <div
                style={{
                  fontSize: 'clamp(1.3rem, 2.2vw, 1.5rem)',
                  fontWeight: 400,
                  color: theme.colors.white,
                  marginBottom: '0.5rem',
                  fontFamily:
                    '"Open Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                }}
              >
                Open Sans Regular
              </div>
              <p
                style={{
                  fontSize: '0.95rem',
                  color: theme.colors.lightGray,
                  lineHeight: 1.6,
                }}
              >
                Для длинных текстов, описаний и интерфейсных блоков. Обеспечивает хорошую читаемость в
                приложении и на сайте.
              </p>
            </div>
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
        04 / ВИЗУАЛЬНАЯ АЙДЕНТИКА
      </div>
    </section>
  );
}
