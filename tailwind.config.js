/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        bkg: "hsl(var(--color-bkg) / <alpha-value>)",
        content: "hsl(var(--color-content) / <alpha-value>)",
        feint: "hsl(var(--color-feint) / <alpha-value>)",
        cardcontainer: "hsl(var(--color-card-container) / <alpha-value>)",
        inputlabel: "hsl(var(--color-input-label) / <alpha-value>)",
        card: "hsl(var(--color-card) / <alpha-value>)",
        sidemenufore: "hsl(var(--color-side-menu-fore) / <alpha-value>)",
        sidemenubkg: "hsl(var(--color-side-menu-bkg) / <alpha-value>)"
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans]
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}

