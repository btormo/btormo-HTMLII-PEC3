module.exports = {
  purge: ["./src/**/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {

    screens: {
      'mobile': '640px',
      // => @media (min-width: 640px) { ... }


      'tablet': '768px',
      // => @media (min-width: 768px) { ... }

      'desktop': '1100px',
      // => @media (min-width: 1100px) { ... }
    },

    width: {
      'w100': '100%',
      'w90': '90%',
      'w80': '80%',
      'w70': '70%',
      'w60': '60%',
      'w50': '50%',
      'w40': '40%',
      'w30': '30%',

      'w170': '170px',
      'w200': '200px',
      'w271': '271px',
      'w300': '300px',
      'w400': '400px',
      'w500': '500px'

    },

    height: {
      'h36': '36px',
      'h70': '70px',
      'h100': '100px'

    },

    margin: {
      'm-auto': 'auto',
      'm0': '0',

      'm8': '8px',
      'm10': '10px',
      'm15': '15px',
      'm20': '20px',
      'm30': '30px',
      'm40': '40px',
      'm50': '50px',
      'm60': '60px',

      'm5': '5%',
      'm40': '40%'
    },



    padding: {
      'p0': '0px',
      'p8': '8px',
      'p10': '10px',
      'p16': '16px',
      'p40': '40px',
      'p84': '84px',
      'p100': '100px',
      'p150': '150px',
      'p200': '200px',
      'p250': '250px',


      'p10%': '10%',
      'p20%': '20%'


    },

    fontFamily: {
      'body': ['Roboto'],
    },

    fontSize: {
      '10pt': '10pt',
      '12pt': '12pt',
      '14pt': '14pt',
      '18pt': '18pt',
      '20pt': '20pt',
      '30pt': '30pt',
      '36pt': '36pt',
    },

    textColor: {
      'color-btn': '#106b73',
      'bg-color': '#fff',
      'h1-color': '#0e5f66',
      'h2-color': '#19a6b3',
      'a-color': '#89acb1',
      'grey-color': '#94a5a8'
    },

    extend: {
    }
  },
  variants: {
    extend: {
    }
  },
  plugins: []
};
