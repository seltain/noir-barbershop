/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: '375px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        noir: {
          black: '#0A0A0A',
          graphite: '#1A1A1C',
          graphite2: '#232326',
          bone: '#F2EFE9',
          bone2: '#BFBAAF',
          brass: '#A3854F',
          brassLight: '#C6A876',
          brassDim: '#5C4C30',
        },
      },
      fontFamily: {
        display: ['"Prata"', 'Georgia', 'serif'],
        body: ['"Manrope"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      borderRadius: {
        none: '0px',
        sm: '2px',
        DEFAULT: '2px',
        md: '3px',
        lg: '4px',
        xl: '4px',
        '2xl': '4px',
        '3xl': '4px',
        full: '9999px',
      },
      letterSpacing: {
        widest2: '0.22em',
        widest3: '0.32em',
      },
      transitionTimingFunction: {
        editorial: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      maxWidth: {
        canvas: '1600px',
      },
    },
  },
  plugins: [],
}
