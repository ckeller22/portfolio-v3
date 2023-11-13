/** @type {import('tailwindcss').Config} */
function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        fadeIn: 'fadeIn 0.1s ease-out',
        fadeOut: 'fadeOut 0.1s ease-in',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0.75, transform: 'scale(.95)' },
          '100%': { opacity: 1, transform: 'scale(1)' },
        },
        fadeOut: {
          '0%': { opacity: 1, transform: 'scale(1)' },
          '100%': { opacity: 0.75, transform: 'scale(.95)' },
        },
      },
      colors: {
        skin: {
          primary: withOpacity('--color-primary'),
        },
      },
      textColor: {
        skin: {
          primary: withOpacity('--color-primary'),
        },
      },
      backgroundColor: {
        skin: {
          primary: withOpacity('--color-primary'),
        },
      },
      ringColor: {
        skin: {
          primary: withOpacity('--color-primary'),
        },
      },
      borderColor: {
        skin: {
          primary: withOpacity('--color-primary'),
        },
      },
    },
  },
  plugins: [],
};
