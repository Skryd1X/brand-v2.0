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
        padding: '4rem 8rem 4rem 12rem',
        position: 'relative',
      }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto', width: '100%' }}>
        <SectionHeader
          number="04"
          title="Визуальная айдентика"
          subtitle="Логотип, цветовая палитра и фирменный стиль Rezzy"
        />

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '2rem', marginBottom: '3rem' }}>
          <NeoCard
            gradient={theme.gradients.accent}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '400px',
            }}
          >
            <img
              src="/src/assets/{B620A630-29AF-4A07-A8E3-8238DCB61CD6}.png"
              alt="Rezzy Logo"
              style={{
                width: '240px',
                height: '240px',
                objectFit: 'contain',
                marginBottom: '1.5rem',
                filter: 'drop-shadow(0 0 40px rgba(255, 255, 255, 0.3))',
              }}
            />
            <div
              style={{
                fontSize: '1.25rem',
                fontWeight: '700',
                color: theme.colors.white,
                textAlign: 'center',
              }}
            >
              Основной логотип
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
              Символика логотипа
            </h3>
            <p
              style={{
                fontSize: '1.125rem',
                color: theme.colors.lightGray,
                lineHeight: '1.7',
                marginBottom: '2rem',
              }}
            >
              Логотип Rezzy представляет собой стилизованную букву "R", которая символизирует динамичность,
              движение вперед и стремление к экономии времени. Главные линии отражают простоту
              использования платформы.
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
                  fontSize: '1.25rem',
                  fontWeight: '700',
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
                  <span style={{ color: theme.colors.lightGray, fontSize: '1rem' }}>
                    <strong>Основная версия:</strong> Фирменный градиент от пурпурного к винному
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
                  <span style={{ color: theme.colors.lightGray, fontSize: '1rem' }}>
                    <strong>Монохром:</strong> Черный или белый для печати и особых случаев
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
                  <span style={{ color: theme.colors.lightGray, fontSize: '1rem' }}>
                    <strong>Инверт:</strong> Белый логотип на темном фоне
                  </span>
                </div>
              </div>
            </div>
          </NeoCard>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '3rem' }}>
          <NeoCard>
            <h3
              style={{
                fontSize: '1.5rem',
                fontWeight: '700',
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
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {[
                'Минимальный размер: 32px в высоту для digital, 15mm для print',
                'Охранная зона: размер равен высоте буквы "R" со всех сторон',
                'Использовать на контрастных фонах',
                'Сохранять пропорции при масштабировании',
              ].map((item, i) => (
                <li
                  key={i}
                  style={{
                    fontSize: '1rem',
                    color: theme.colors.lightGray,
                    marginBottom: '1rem',
                    paddingLeft: '1.5rem',
                    position: 'relative',
                    lineHeight: '1.6',
                  }}
                >
                  <span
                    style={{
                      position: 'absolute',
                      left: '0',
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
                fontSize: '1.5rem',
                fontWeight: '700',
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
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {[
                'Искажать пропорции, изменять цвета, добавлять эффекты',
                'Размещать на пестрых или низкоконтрастных фонах',
                'Использовать размытие, тени или другие фильтры',
                'Изменять расположение элементов логотипа',
              ].map((item, i) => (
                <li
                  key={i}
                  style={{
                    fontSize: '1rem',
                    color: theme.colors.lightGray,
                    marginBottom: '1rem',
                    paddingLeft: '1.5rem',
                    position: 'relative',
                    lineHeight: '1.6',
                  }}
                >
                  <span
                    style={{
                      position: 'absolute',
                      left: '0',
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

        <div style={{ marginBottom: '3rem' }}>
          <h3
            style={{
              fontSize: '2rem',
              fontWeight: '700',
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
              fontSize: '1.75rem',
              fontWeight: '700',
              color: theme.colors.white,
              marginBottom: '1.5rem',
            }}
          >
            Типографика
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
            <div>
              <div
                style={{
                  fontSize: '1.25rem',
                  fontWeight: '700',
                  color: theme.colors.accentPrimary,
                  marginBottom: '1rem',
                }}
              >
                Основной шрифт
              </div>
              <div
                style={{
                  fontSize: '2rem',
                  fontWeight: '700',
                  color: theme.colors.white,
                  marginBottom: '0.5rem',
                }}
              >
                Montserrat Bold
              </div>
              <p style={{ fontSize: '1rem', color: theme.colors.lightGray }}>
                Для заголовков и акцентов
              </p>
            </div>
            <div>
              <div
                style={{
                  fontSize: '1.25rem',
                  fontWeight: '700',
                  color: theme.colors.accentPrimary,
                  marginBottom: '1rem',
                }}
              >
                Текстовый шрифт
              </div>
              <div
                style={{
                  fontSize: '1.5rem',
                  fontWeight: '400',
                  color: theme.colors.white,
                  marginBottom: '0.5rem',
                }}
              >
                Montserrat Regular
              </div>
              <p style={{ fontSize: '1rem', color: theme.colors.lightGray }}>
                Для основного текста и описаний
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
          fontSize: '1rem',
          color: theme.colors.mediumGray,
          fontWeight: '600',
          letterSpacing: '0.1em',
        }}
      >
        04 / ВИЗУАЛЬНАЯ АЙДЕНТИКА
      </div>
    </section>
  );
}
