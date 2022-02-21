module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
        keyframes: {
          'fade-in-down': {
              '0%': {
                  opacity: '0',
                  transform: 'translateY(-10px)'
              },
              '100%': {
                  opacity: '1',
                  transform: 'translateY(0)'
              },
          },

          'fade-out-up': {
            'from': {
                opacity: '1',
                transform: 'translateY(0px)'
            },
            'to': {
                opacity: '0',
                transform: 'translateY(10px)'
            },
        },

      },
      animation: {
          'fade-in-down': 'fade-in-down 0.5s ease-out',
          'fade-out-up': 'fade-out-up 1.5s ease-out',
      },
      colors: {
        'text_black':'#01141f',
        'main_yellow':'#f2a70c',
        'bg_light': '#021b29',
        'bg_dark': '#01141f',
        'text_grey': 'hsla(0, 0%, 100%, 0.5)',

      }
    },
  },
  plugins: [],
}