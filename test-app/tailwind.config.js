/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{gjs,gts,hbs,html,js,ts}',
    '../node_modules/ts-v2-addon/**/*.{gjs,gts,js,ts}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
