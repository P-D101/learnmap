/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: '#2F3E46',
        chefc_blue: '#3F8EF2',
        space_cadet: '#1A1A40',
        alice_blue: '#F0F6FF',
        moonstone: '#609EAF',
        light_orange: '#FFDAB9',
      },
      boxShadow: {
        soft: '0 4px 10px rgba(96, 158, 175, 0.15)', // gentle teal shadow
      },
      borderRadius: {
        DEFAULT: '12px', // make all rounded by default
      },
      borderColor: {
        softMoonstone: 'rgba(96, 158, 175, 0.3)',
      },
    },
  },
  plugins: [],
}
