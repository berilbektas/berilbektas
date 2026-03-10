/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#F6F5F2',
          secondary: '#F0EBE3',
          surface: '#FFEFEF',
        },
        text: {
          primary: '#2D2A32',
          secondary: '#7A7384',
          muted: '#B5ADBA',
        },
        accent: {
          lavender: '#C48899',
          rose: '#D4A080',
        },
      },
      fontFamily: {
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        pixel: ['"Press Start 2P"', 'cursive'],
      },
    },
  },
  plugins: [],
};
