import { useState, useEffect } from 'react';
import { theme } from './theme';
import Navigation from './components/Navigation';
import IntroSection from './components/sections/IntroSection';
import IdeologySection from './components/sections/IdeologySection';
import AudienceSection from './components/sections/AudienceSection';
import ToneSection from './components/sections/ToneSection';
import VisualSection from './components/sections/VisualSection';
import ApplicationsSection from './components/sections/ApplicationsSection';
import UISystemSection from './components/sections/UISystemSection';
import { Download } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('intro');

  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = ['intro', 'ideology', 'audience', 'tone', 'visual', 'applications', 'ui'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const sectionId of sectionIds) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleExportPDF = () => {
    window.print();
  };

  return (
    <div
      style={{
        background: theme.gradients.primary,
        minHeight: '100vh',
        color: theme.colors.white,
        fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    >
      <Navigation activeSection={activeSection} onNavigate={handleNavigate} />

      <button
        onClick={handleExportPDF}
        style={{
          position: 'fixed',
          top: '2rem',
          right: '2rem',
          zIndex: 100,
          padding: '1rem 2rem',
          borderRadius: theme.borderRadius.md,
          background: theme.gradients.accent,
          color: theme.colors.white,
          border: 'none',
          fontSize: '1rem',
          fontWeight: '700',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
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
        className="no-print"
      >
        <Download size={20} />
        Save as PDF
      </button>

      <IntroSection />
      <IdeologySection />
      <AudienceSection />
      <ToneSection />
      <VisualSection />
      <ApplicationsSection />
      <UISystemSection />

      <footer
        style={{
          padding: '4rem 8rem',
          textAlign: 'center',
          borderTop: `1px solid ${theme.colors.baseBlueGreen}`,
        }}
      >
        <div
          style={{
            fontSize: '3rem',
            fontWeight: '900',
            background: theme.gradients.accent,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '1rem',
          }}
        >
          Rezzy
        </div>
        <p style={{ fontSize: '1rem', color: theme.colors.mediumGray }}>
          Brandbook © 2025. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
