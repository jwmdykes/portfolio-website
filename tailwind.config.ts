import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
      },
    },
    extend: {
      backgroundImage: {
        'bottom-blur': 'linear-gradient(to top, rgba(255, 255, 255, 0.37) 0%, transparent 100%)',
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        mono: ['var(--font-source-code-pro)'],
      },
      colors: {
        'background-color': 'var(--background-color)',
        'body-text-color': 'var(--body-text-color)',
        'highlight-color': 'var(--highlight-color)',
        'white-color': 'var(--white-color)',
        'secondary-highlight-color': 'var(--secondary-highlight-color)',
        'body-highlight-color': 'var(--body-highlight-color)',
        'neutral-color': 'var(--neutral-color)',
        skillsButtonFillColor: 'var(--skillsButtonFillColor)',
        skillsButtonTextColor: 'var(--skillsButtonTextColor)',
      },
      letterSpacing: {
        h3: '0.20em',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
export default config;
