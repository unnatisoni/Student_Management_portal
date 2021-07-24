module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        '2.5': ['40px', '45px']
    },
    fill:{
      'blue': 'rgba(27, 85, 226, 0.23921568627450981)'
    },
    boxShadow: {
      blue : '0 10px 20px -10px #4361ee ',
      gray : '0 10px 20px -10px #000000',
      red : '0 10px 20px -10px #ff0000',
      green : '0 10px 20px -10px #3CB371',
      yellow : '0 10px 20px -10px #ffae42 ',
      indigo : '0 10px 20px -10px #4b0082 '
    },
    spacing: {
      by : '7px'
    },
    textColor: {
      'textgray': 'rgb(136, 142, 168)'
    }
     

    },
  },
  variants: {
    extend: {
      cursor : ['disabled']
    },
  },
  plugins: [],
}
