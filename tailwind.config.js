/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/**/*.{js,vue,ts}',
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue'
  ],
  theme: {
    extend: {
      colors: {
        'dark': '#0D1117',
        'dark-secondary': '#161B22',
        'light': '#0D1117',
        'light-secondary': '#161B22',
        'accent': '#58A6FF',
        'accent-light': '#79C0FF',
        'accent-dark': '#1F6FEB',
        'cool-gray': '#8B949E',
        'blue-glow': 'rgba(88, 166, 255, 0.2)'
      },
      fontFamily: {
        'cinzel': ['"Space Grotesk"', 'sans-serif'],
        'cinzel-decorative': ['"Space Grotesk"', 'sans-serif'],
        'display': ['"Space Grotesk"', 'sans-serif'],
        'inter': ['"Inter"', 'sans-serif'],
        'mono': ['"JetBrains Mono"', 'monospace']
      },
      letterSpacing: {
        'ultra-wide': '0.18em',
        'super-wide': '0.32em'
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 1s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))'
      }
    }
  },
  plugins: []
}
