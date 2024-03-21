/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {

      animation: {
        fade: 'fadeIn 1.2s ease-in-out',
        up: 'enterUp 1s ease-in-out',
        fadeup: 'fadeIn 1.2s ease-in-out, enterUp 1s ease-in-out',
        fadeleft: 'fadeIn 1.2s ease-in-out, enterLeft 1s ease-in-out',

        
        // fadeleft: 'enterLeft 0.7s ease-in-out'
      },

      // that is actual animation
      keyframes: theme => ({
        fadeIn: {
          '0%': { opacity: "0" },
          '100%': { opacity: "1" },
        },
        enterLeft: {
          '0%': { transform: "translate(-15px,0)" },
          '100%': { transform: "translate(0,0)" },
        },
        enterUp: {
          '0%': { transform: "translate(0,15px)" },
          '100%': { transform: "translate(0,0)" },
        },
      }),

    },
  },
  plugins: [],
}