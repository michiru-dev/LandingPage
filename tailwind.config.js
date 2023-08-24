/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'nav-bar': '0 4px 30px rgba(0, 0, 0, 0.1)',
      },
      gridTemplateColumns: {
        outerPc: 'minmax(6rem, auto) minmax(0px, 78rem) minmax(6rem, auto)',
        outerTb: 'minmax(2rem, auto) minmax(0px, 78rem) minmax(2rem, auto)',
        inner: 'repeat(12, 1fr)',
      },
      gridColumn: {
        '2-auto': '2 / auto',
      },
      gridAutoFlow: {
        dense: 'dense',
      },
      spacing: {
        36: '9rem',
      },
      fontFamily: {
        decol: ['Kaisei Decol', 'serif'],
        mplus: ['M PLUS Rounded 1c', 'sans-serif'],
        zen: ['Zen Kaku Gothic New', 'sans-serif'],
        syne: ['Syne', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
