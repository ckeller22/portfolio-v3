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
