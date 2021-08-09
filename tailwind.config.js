module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    gradientColorStops: theme => ({
       ...theme('colors'),
       'from-aq': 'rgba(136,233,169,1)',
       'to-sea': 'rgba(91,175,198,1)',
     }),
    backgroundPosition: {
        'top-main': 'top 0 left 0',
        'body-bg': 'top left, top 190% left',
     },
     backgroundColor: theme => ({
        ...theme('colors'),
        'black-0f': '#0F1217',
        'black-0e': '#0E1116',
        'aq-marin': '#76D2B5',
        'body': 'rgb(19,22,27,1)',
     }),
    screens: {
        'xs2': '420px',
        'xs1': '480px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
    },
    extend: {
      keyframes: {
        'fade-in-down': {
          '0%': {
              opacity: '0',
              transform: 'translateY(-600px)'
          },
          '80%':  {
            transform: 'translateY(30px)'
          },
          '95%':  {
            transform: 'translateY(-5px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
      },
      animation: {
          'fade-in-down': 'fade-in-down 0.4s ease-in'
      },
      fontFamily: {
        'sans': 'Poppins, sans-serif',
      },
      backgroundImage: theme => ({
        'main-img': "url('/images/main-img.webp')",
        'main': "url('/images/main-bg.webp')",
        'bottom': "url('/images/bottom-bg.webp')",
       }),
      backgroundSize: {
        '16': '4rem',
        'body': '130% auto, 100% auto',
      },
      inset: {
       '170': '170%',
      },
      textColor: {
        'gray-a2': '#a2a2a2',
        'gray-d1': '#d1d1d1',
        'black-16': '#13161B',
        'aq-marin': '#76D2B5',
      },
      borderColor: {
        'aq-marin': '#76D2B5',
      },
      height: {
        60: '60rem',
        83: '64rem',
      },
      borderWidth: ['last'],
      width: {
        '17.5': '17.5rem',
        '29': '29rem',
       },
      lineHeight: {
        '7-1': '1.875rem',
       },
      zIndex: {
      '60': 60,
      '70': 70,
      '80': 80,
      }
    },
    fontSize: {
      'xs-2': '.6rem',
      'xs': '.75rem',
      'sm-2': '.825rem',
      'sm': '.875rem',
      'tiny': '.9rem',
      'base': '1rem',
      'lg': '1.125rem',
      'lg-2': '6vw',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '2.5xl': '1.6rem',
      '3xl': '1.875rem',
      '3xlvw': '9vw',
      '4xl': '2.25rem',
      '4.5xl': '2.5rem',
      '5xl': '3rem',
      '5.5xl': '3.5rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
    container: {
      padding: '1.5rem',
      center: 'true',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
