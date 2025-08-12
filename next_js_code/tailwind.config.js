module.exports = {
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.content-empty': { content: '""' },
      });
    },
  ],
}
