import { Menu, Home, Target, MessageCircle, Palette, Image, FileText } from 'lucide-react';
import { theme } from '../theme';

interface NavigationProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

const sections = [
  { id: 'intro', label: 'Intro', icon: Home },
  { id: 'ideology', label: 'Идеология', icon: Target },
  { id: 'audience', label: 'Целевая аудитория', icon: Target },
  { id: 'tone', label: 'Tone of Voice', icon: MessageCircle },
  { id: 'visual', label: 'Визуальная айдентика', icon: Palette },
  { id: 'applications', label: 'Применения', icon: Image },
  { id: 'ui', label: 'UI-система Rezzy', icon: FileText },
];

export default function Navigation({ activeSection, onNavigate }: NavigationProps) {
  return (
    <nav
      style={{
        position: 'fixed',
        left: '2rem',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 100,
        background: theme.colors.baseNavy,
        borderRadius: theme.borderRadius.md,
        padding: '1.5rem 1rem',
        boxShadow: theme.shadows.neo,
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {sections.map((section, index) => {
          const Icon = section.icon;
          const isActive = activeSection === section.id;
          return (
            <button
              key={section.id}
              onClick={() => onNavigate(section.id)}
              style={{
                width: '48px',
                height: '48px',
                borderRadius: theme.borderRadius.sm,
                border: 'none',
                background: isActive ? theme.gradients.accent : 'transparent',
                color: isActive ? theme.colors.white : theme.colors.mediumGray,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease',
                position: 'relative',
              }}
              onMouseEnter={(e) => {
                if (!isActive) {
                  e.currentTarget.style.background = theme.colors.baseBlueGreen;
                  e.currentTarget.style.color = theme.colors.accentPrimary;
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive) {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = theme.colors.mediumGray;
                }
              }}
              title={section.label}
            >
              <Icon size={24} />
            </button>
          );
        })}
      </div>
    </nav>
  );
}
