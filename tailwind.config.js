/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        montserrat: [
          'Montserrat',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'sans-serif',
        ],
      },
      colors: {
        rezzy: {
          baseDeep: '#140C30',
          baseNavy: '#14253E',
          baseBlueGreen: '#153D4C',

          accentPrimary: '#16A085',
          accentSecondary: '#168777',
          accentSoft: '#156F69',
          accentMid: '#15565B',

          white: '#FFFFFF',
          lightGray: '#E0E6F0',
          mediumGray: '#A8B2C1',

          success: '#4CAF50',
          error: '#FF3B30',
        },
      },
      backgroundImage: {
        'rezzy-primary': 'linear-gradient(180deg, #140C30 0%, #14253E 40%, #153D4C 100%)',
        'rezzy-accent': 'linear-gradient(135deg, #168777 0%, #16A085 100%)',
        'rezzy-warm': 'linear-gradient(135deg, #FF6B6B 0%, #FFD93D 100%)',
        'rezzy-vibrant': 'linear-gradient(135deg, #FF6B9D 0%, #C44569 100%)',
        'rezzy-purple': 'linear-gradient(135deg, #A55EEA 0%, #6C5CE7 100%)',
      },
      boxShadow: {
        'rezzy-neo':
          '8px 8px 16px rgba(0, 0, 0, 0.4), -8px -8px 16px rgba(255, 255, 255, 0.05)',
        'rezzy-neo-inset':
          'inset 8px 8px 16px rgba(0, 0, 0, 0.4), inset -8px -8px 16px rgba(255, 255, 255, 0.05)',
        'rezzy-glow': '0 0 20px rgba(22, 160, 133, 0.5)',
        'rezzy-glow-strong': '0 0 40px rgba(22, 160, 133, 0.7)',
      },
      borderRadius: {
        'rezzy-sm': '16px',
        'rezzy-md': '24px',
        'rezzy-lg': '32px',
        'rezzy-xl': '40px',
      },
    },
  },
  plugins: [],
};
