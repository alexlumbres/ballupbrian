/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#F6F4EF",
        ink: "#0C0B0A",
        ink2: "#46423B",
        accent: "#FF4D17",
        card: "#FFFFFF",
      },
      fontFamily: {
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      maxWidth: { wrap: "1180px" },
      transitionTimingFunction: { soft: "cubic-bezier(.22,1,.36,1)" },
      keyframes: {
        scroll: { to: { transform: "translateX(-50%)" } },
        pulse2: {
          "0%": { boxShadow: "0 0 0 0 rgba(255,77,23,.5)" },
          "70%": { boxShadow: "0 0 0 12px rgba(255,77,23,0)" },
          "100%": { boxShadow: "0 0 0 0 rgba(255,77,23,0)" },
        },
      },
      animation: { scroll: "scroll 34s linear infinite", pulse2: "pulse2 2.4s infinite" },
    },
  },
  plugins: [],
};
