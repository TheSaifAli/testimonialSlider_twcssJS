/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily:{
        'Poppins':'Poppins'
      },
      keyframes:{
        'anime':{
          '0%':{
            opacity:"0"
          },
          '20%':{
            opacity:"20"
          },
          '40%':{
            opacity:"40"
          },
          '60%':{
            opacity:"60"
          },
          '80%':{
            opacity:"80"
          },
          '100%':{
            opacity:"100"
          }
        }
      }
    },
  },
  plugins: [],
}

