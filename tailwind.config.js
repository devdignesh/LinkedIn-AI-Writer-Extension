/** @type {import('tailwindcss').Config} */
export default {
  purge: [
    './src/**/*.{js,jsx,ts,tsx}', 
    './public/index.html',
   
    './src/**/*.{html,js,ts,tsx}',
  ],
  content: ["./src/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    extend: {},
  },
  plugins: [],
}

