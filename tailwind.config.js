/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#f5f1e8",
        ink: "#151515",
        lime: "#d9ff45",
        blue: "#8bcaff",
        coral: "#ff8f7e",
        sand: "#e8bfa8",
        line: "rgba(21, 21, 21, 0.18)",
        "portrait-bg": "#c9c6bc",
        "story-bg": "#f1ece4",
        "dark-grid": "#141414",
        "browser-dark": "#171717",
        "browser-small": "#303030",
        "gallery-bg": "#e6e1d8",
        "skeleton-bg": "rgba(245, 241, 232, 0.93)",
        "detail-slot-bg": "#d9d5cb",
      },
      fontFamily: {
        sans: ["Urbanist", "sans-serif"],
        serif: ["'Bodoni Moda'", "serif"],
        mono: ["Urbanist", "sans-serif"],
        display: ["'Bodoni Moda'", "serif"],
      },
      letterSpacing: {
        tightest: "-0.03em",
        tighter: "-0.02em",
        tight: "-0.01em",
      },
      lineHeight: {
        display: "1.05",
        heading: "1.08",
        body: "1.55",
      },
    },
  },
  plugins: [],
};
