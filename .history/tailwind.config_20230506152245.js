/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.{html, js'],
  theme: {
    extend: {
      keyframes:{
        enter:{
          '0%':{ transform: 'translateY(4px)', opacity: '0'},
          '100%':{transform: 'translateY(0)', opacity: '1'}
        },
        leave:{
          '0%':{transform: 'translateY(0)', opacity: '1'},
          '100%':{ transform: 'translateY(4px)', opacity: '0'}
          
        },
      },
      animation:{
        enter: 'enter 0.2s ease-out',
        leave: 'leave 0.2s ease-in infinite',
      },
    },
  },
  plugins: [],
}
