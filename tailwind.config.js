/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '10sc' : '10vw',
        '20sc' : '20vw',
        '30sc' : '30vw',
        '40sc' : '40vw',
        '50sc' : '50vw',
        '60sc' : '60vw',
        '70sc' : '70vw',
        '80sc' : '80vw',
        '90sc' : '90vw',

        '10/1' : '10%',
        '20/1' : '20%',
        '30/1' : '30%',
        '40/1' : '40%',
        '50/1' : '50%',
        '60/1' : '60%',
        '70/1' : '70%',
        '80/1' : '80%',
        '90/1' : '90%',
      }

    },
  },
  plugins: [],
}

