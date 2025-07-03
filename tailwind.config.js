/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-red': '#FF0033',
        'primary-blue': '#0066FF',
        'dark-background': '#111827',
        'light-text': '#F9FAFB',
        'gray-accents': '#4B5563',
      },
      fontFamily: {
        'primary': ['Montserrat', 'sans-serif'],
        'secondary': ['Roboto', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out infinite 2s',
        'float-slow': 'float 8s ease-in-out infinite 4s',
        'rotate-slow': 'rotate 20s linear infinite',
        'gradient-shift': 'gradientShift 4s ease-in-out infinite',
        'gradient-pulse': 'gradientPulse 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        gradientShift: {
          '0%, 100%': { 
            backgroundPosition: '0% 50%',
            filter: 'brightness(1.2) saturate(1.3)',
          },
          '50%': { 
            backgroundPosition: '100% 50%',
            filter: 'brightness(1.5) saturate(1.6)',
          },
        },
        gradientPulse: {
          '0%, 100%': { 
            filter: 'brightness(1.2) saturate(1.3) drop-shadow(0 0 8px rgba(255, 0, 51, 0.3))',
          },
          '50%': { 
            filter: 'brightness(1.8) saturate(1.8) drop-shadow(0 0 16px rgba(0, 102, 255, 0.4))',
          },
        }
      }
    },
  },
  plugins: [],
}