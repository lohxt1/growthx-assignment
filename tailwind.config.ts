import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bg: {
          zero: "rgb(var(--bg-zero) / <alpha-value>)",
          one: "rgb(var(--bg-one) / <alpha-value>)",
          two: "rgb(var(--bg-two) / <alpha-value>)",
          opp: "rgb(var(--bg-opp) / <alpha-value>)",
        },
        sh: {
          one: "rgb(var(--sh-one) / <alpha-value>)",
          two: "rgb(var(--sh-two) / <alpha-value>)",
          three: "rgb(var(--sh-three) / <alpha-value>)",
          four: "rgb(var(--sh-four) / <alpha-value>)",
          five: "rgb(var(--sh-five) / <alpha-value>)",
        },
        tx: {
          one: "rgb(var(--tx-one) / <alpha-value>)",
          two: "rgb(var(--tx-tow) / <alpha-value>)",
          three: "rgb(var(--tx-three) / <alpha-value>)",
        },
        re: {
          one: "rgb(var(--re-one) / <alpha-value>)",
          two: "rgb(var(--re-two) / <alpha-value>)",
        },
        or: {
          one: "rgb(var(--or-one) / <alpha-value>)",
          two: "rgb(var(--or-two) / <alpha-value>)",
        },
        ye: {
          one: "rgb(var(--ye-one) / <alpha-value>)",
          two: "rgb(var(--ye-two) / <alpha-value>)",
        },
        gr: {
          one: "rgb(var(--gr-one) / <alpha-value>)",
          two: "rgb(var(--gr-two) / <alpha-value>)",
        },
        cy: {
          one: "rgb(var(--cy-one) / <alpha-value>)",
          two: "rgb(var(--cy-two) / <alpha-value>)",
        },
        bl: {
          one: "rgb(var(--bl-one) / <alpha-value>)",
          two: "rgb(var(--bl-two) / <alpha-value>)",
        },
        pu: {
          one: "rgb(var(--pu-one) / <alpha-value>)",
          two: "rgb(var(--pu-two) / <alpha-value>)",
        },
        ma: {
          one: "rgb(var(--ma-one) / <alpha-value>)",
          two: "rgb(var(--ma-two) / <alpha-value>)",
        },
      },
    },
  },
  plugins: [],
};
export default config;
