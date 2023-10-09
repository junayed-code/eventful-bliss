import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      backgroundImage: {
        frosted: `url('/images/event-themed-parties.jpg')`,
      },
    },
  },
  plugins: [daisyui],

  daisyui: {
    themes: ["light"],
  },
};
