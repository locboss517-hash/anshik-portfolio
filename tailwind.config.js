/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        oled: '#000000',
        charcoal: {
          950: '#050505',
          900: '#0A0A0A',
          850: '#0E0E0E',
          800: '#111111',
          750: '#151515',
          700: '#181818',
          600: '#222222',
          500: '#2C2C2C',
          400: '#404040',
          300: '#64748B',
          200: '#94A3B8',
          100: '#E2E8F0',
          50: '#F8FAFC',
        },
        electric: {
          DEFAULT: '#2563EB',
          hover: '#1D4ED8',
          light: '#3B82F6',
          muted: '#1E3A8A',
        },
        silver: {
          DEFAULT: '#94A3B8',
          light: '#CBD5E1',
          dark: '#64748B',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      maxWidth: {
        'content': '1200px',
      },
      boxShadow: {
        'subtle-dark': '0 1px 2px 0 rgba(0, 0, 0, 0.8), 0 4px 16px -2px rgba(0, 0, 0, 0.6)',
        'subtle-light': '0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 4px 12px -2px rgba(0, 0, 0, 0.05)',
        'lift-dark': '0 8px 24px -4px rgba(0, 0, 0, 0.8)',
        'lift-light': '0 8px 24px -4px rgba(0, 0, 0, 0.08)',
      }
    },
  },
  plugins: [],
}
