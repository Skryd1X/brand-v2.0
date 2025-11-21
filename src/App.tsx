import { useState, useEffect } from 'react';
import { Download } from 'lucide-react';
import { theme } from './theme';

import Navigation from './components/Navigation';
import IntroSection from './components/sections/IntroSection';
import IdeologySection from './components/sections/IdeologySection';
import AudienceSection from './components/sections/AudienceSection';
import ToneSection from './components/sections/ToneSection';
import VisualSection from './components/sections/VisualSection';
import ApplicationsSection from './components/sections/ApplicationsSection';
import UISystemSection from './components/sections/UISystemSection';

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

  // Вариант с реальным скачиванием PDF (нужна библиотека html2pdf.js)
  const handleExportPDF = async () => {
    const element = document.getElementById('brandbook-content');
    if (!element) return;

    // @ts-ignore — для простоты, чтобы TS не ругался
    const html2pdf = (await import('html2pdf.js')).default || (await import('html2pdf.js'));

    const opt = {
      margin: [10, 10, 10, 10],
      filename: 'rezzy-brandbook.pdf',
      image: { type: 'jpeg', quality: 0.95 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'landscape' as const },
      pagebreak: { mode: ['css', 'legacy'] as const },
    };

    html2pdf().set(opt).from(element).save();
  };

  // Если хочешь оставить только print-диалог:
  // const handleExportPDF = () => window.print();

  return (
    <div
      style={{
        background: theme.gradients.primary,
        minHeight: '100vh',
        color: theme.colors.white,
        fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        boxSizing: 'border-box',
      }}
    >
      <Navigation activeSection={activeSection} onNavigate={handleNavigate} />

      {/* Кнопка скачивания PDF */}
      <button
        onClick={handleExportPDF}
        style={{
          position: 'fixed',
          top: '1.5rem',
          right: '1.5rem',
          zIndex: 100,
          padding: 'clamp(0.75rem, 1.8vw, 1rem) clamp(1.5rem, 2.6vw, 2rem)',
          borderRadius: theme.borderRadius.md,
          background: theme.gradients.accent,
          color: theme.colors.white,
          border: 'none',
          fontSize: 'clamp(0.9rem, 1.8vw, 1rem)',
          fontWeight: 700,
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
        <Download size={18} />
        Save as PDF
      </button>

      {/* Контент брендбука: именно его конвертируем в PDF */}
      <main id="brandbook-content">
        <IntroSection />
        <IdeologySection />
        <AudienceSection />
        <ToneSection />
        <VisualSection />
        <ApplicationsSection />
        <UISystemSection />

        <footer
          style={{
            padding: 'clamp(2.5rem, 4vw, 4rem) clamp(5vw, 8vw, 8rem)',
            textAlign: 'center',
            borderTop: `1px solid ${theme.colors.baseBlueGreen}`,
          }}
        >
          <div
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 900,
              background: theme.gradients.accent,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginBottom: '1rem',
            }}
          >
            Rezzy
          </div>
          <p
            style={{
              fontSize: '0.95rem',
              color: theme.colors.mediumGray,
            }}
          >
            Brandbook © 2025. All rights reserved.
          </p>
        </footer>
      </main>
    </div>
  );
}

export default App;
