/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js, ts,tsx}"],
  theme: {
    extend: {
      extend: {
        fontFamily: {
          "pro-light": ["Pro-Light", "sans-serif", "Helvetica"],
          pro: ["Pro", "san-serif", "Helvetica"],
          "pro-medium": ["Pro-Medium", "sans-serif", "Helvetica"],
          "pro-semibold": ["Pro-SemiBold", "sans-serif", "Helvetica"],
          "pro-bold": ["Pro-Bold", "sans-serif", "Helvetica"],
          "pro-black": ["Pro-Black", "sans-serif", "Helvetica"],
        },
      },
    },
  },
  plugins: [],
};
