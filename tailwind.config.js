// Colores y letra de Seautomatiza (tokens de la guía de diseño). El nombre del tema se mantiene
// como «docuseal» porque las plantillas lo usan en data-theme.
module.exports = {
  future: {
    hoverOnlyWhenSupported: true
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif']
      }
    }
  },
  plugins: [
    require('daisyui')
  ],
  daisyui: {
    themes: [
      {
        docuseal: {
          'color-scheme': 'light',
          primary: '#e4e9ef',
          'primary-content': '#263238',
          secondary: '#4fc3f7',
          accent: '#1e88e5',
          neutral: '#1565c0',
          'neutral-focus': '#0d47a1',
          'neutral-content': '#ffffff',
          'base-100': '#f5f7fa',
          'base-200': '#e6ebf1',
          'base-300': '#e1e8ed',
          'base-content': '#263238',
          '--rounded-btn': '1.9rem',
          '--btn-text-case': 'none',
          '--tab-border': '2px',
          '--tab-radius': '.5rem'
        }
      }
    ]
  }
}
