/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        carbon: {
          DEFAULT: '#0d1117',
          deep: '#06090d',
          card: '#131922',
          surface: '#161e2a',
          border: 'rgba(16, 185, 129, 0.15)',
        },
        emerald: {
          neon: '#10b981',
          glow: '#059669',
          light: '#34d399',
          soft: '#6ee7b7',
        },
        lime: {
          neon: '#a3e635',
          bright: '#bef264',
          accent: '#84cc16',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        'emerald-glow': '0 0 25px rgba(16, 185, 129, 0.45)',
        'emerald-glow-lg': '0 0 45px rgba(16, 185, 129, 0.6)',
        'lime-glow': '0 0 20px rgba(163, 230, 53, 0.4)',
        'cyber-card': '0 8px 32px 0 rgba(0, 0, 0, 0.6)',
      },
      animation: {
        'radar-ping': 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
        'subtle-pulse': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}

