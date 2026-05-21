import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './content/**/*.ts'],
  theme: {
    extend: {
      colors: {
        ride: {
          bg: '#07080c',
          elevated: '#0f1118',
          card: '#12151f',
          border: 'rgba(255,255,255,0.08)',
          muted: '#a8adb8',
          accent: '#ff7a00',
          'accent-soft': 'rgba(255, 122, 0, 0.14)',
        },
      },
      boxShadow: {
        glow: '0 0 60px rgba(255, 122, 0, 0.15)',
        card: '0 18px 50px rgba(0, 0, 0, 0.45)',
      },
      backgroundImage: {
        'hero-gradient':
          'radial-gradient(ellipse 80% 50% at 50% -10%, rgba(255, 122, 0, 0.18), transparent)',
      },
    },
  },
  plugins: [],
};

export default config;
