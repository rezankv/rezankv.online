const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      boxShadow: {
        // this keys are temporary
        boxShadow1: 'var(--shadow-1)',
        boxShadow2: 'var(--shadow-2)',
        boxShadow3: 'var(--shadow-3)',
        boxShadow4: 'var(--shadow-4)',
        boxShadow5: 'var(--shadow-5)',
      },
      linearGradientColors: {
        yellow: {
          DEFAULT: ['to right', 'hsl(45, 100%, 72%)', 'hsl(35, 100%, 68%)'],
        },
        grey: {
          DEFAULT: [
            'to bottom right',
            'hsl(240, 1%, 25%) 3%',
            ' hsl(0, 0%, 19%) 97%',
          ],
        },
      },
      borderColor: {
        DEFAULT: 'var(--border-color-default)',
      },
      borderRadius: {
        DEFAULT: 'var(--border-radius-md)',
      },
      colors: {
        link: {
          DEFAULT: 'var(--link-default)',
        },
        background: {
          DEFAULT: 'var(--background-default)',
          paper: 'var(--background-paper)',
          'paper-light': 'var(--background-paper-light)',
        },
        text: {
          body: {
            DEFAULT: 'var(--text-body)',
          },
          primary: {
            DEFAULT: 'var(--text-primary-default)',
            mutate: 'var(--text-primary-mutate)',
          },
          secondary: {
            DEFAULT: 'var(--text-secondary-default)',
          },
        },
        'horizontal-separator': {
          DEFAULT: 'var(--horizontal-separator-default)',
        },
      },
    },
  },
  plugins: [],
};
