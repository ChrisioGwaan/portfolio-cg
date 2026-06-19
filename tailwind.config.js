const { heroui } = require('@heroui/react');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#0a151c',
        graphite: '#16262f',
        blueprint: '#dbeafe',
        signal: '#43f0b3',
        cyanprint: '#58d7ff',
        brass: '#e3b253',
        porcelain: '#f6f7f1',
      },
      fontFamily: {
        display: ['var(--font-space-grotesk)', 'var(--font-geist)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-ibm-plex-mono)', 'ui-monospace', 'SFMono-Regular', 'monospace'],
        sans: ['var(--font-geist)', 'var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        panel: '0 24px 80px rgba(7, 16, 22, 0.12)',
        'panel-dark': '0 24px 80px rgba(0, 0, 0, 0.36)',
      },
    },
  },
  darkMode: 'class',
  plugins: [
    heroui({
      themes: {
        light: {
          colors: {
            background: '#f6f7f1',
            foreground: '#0a151c',
            primary: {
              DEFAULT: '#0f766e',
              foreground: '#f8fffb',
            },
            secondary: {
              DEFAULT: '#e3b253',
              foreground: '#0a151c',
            },
          },
        },
        dark: {
          colors: {
            background: '#071016',
            foreground: '#f5f7ef',
            primary: {
              DEFAULT: '#43f0b3',
              foreground: '#071016',
            },
            secondary: {
              DEFAULT: '#58d7ff',
              foreground: '#071016',
            },
          },
        },
      },
    }),
  ],
};
