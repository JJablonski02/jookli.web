// eslint-disable-next-line import/no-import-module-exports
import { nextui } from "@nextui-org/theme"

const { BREAKPOINTS } = require("./src/lib/breakpoints")

/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    screens: {
      "2xl": { max: BREAKPOINTS["2XL"] },
      xl: { max: BREAKPOINTS.XL },
      lg: { max: BREAKPOINTS.LG },
      md: { max: BREAKPOINTS.MD },
      sm: { max: BREAKPOINTS.SM },
    },
    extend: {
      fontFamily: {
        PoppinsRegular: ["Poppins-Regular"],
        PoppinsMedium: ["Poppins-Medium"],
        PoppinsSemiBold: ["Poppins-SemiBold"],
        PoppinsBold: ["Poppins-Bold"],
        PoppinsExtraBold: ["Poppins-ExtraBold"],
      },
      fontSize: {
        "5xl": ["2.875rem", { lineHeight: "1.1" }],
      },
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        "secondary-light": "var(--secondary-light)",
        "secondary-light-foreground": "var(--secondary-light-foreground)",
        success: "var(--blue)",
        blue: "var(--blue)",
        gray: "var(--gray)",
        border: "var(--border)",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "var(--background)",
        "background-light": "var(--background-light)",
        "background-field": "var(--background-field)",
        foreground: "hsl(var(--foreground))",
        "field-border": "var(--field-border)",
        purple: {
          100: "#F4F7FE",
          200: "#BCB6FF",
          400: "#868CFF",
          500: "#7857FF",
          600: "#4318FF",
        },
        inverted: "var(--inverted)",
        dark: {
          400: "#7986AC",
          500: "#606C80",
          600: "#2B3674",
          700: "#384262",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      backgroundImage: {
        "purple-gradient": "url('/assets/images/gradient-bg.svg')",
        banner: "url('/assets/images/banner-bg.png')",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        square: "calc(var(--radius) + 46px)",
      },
      borderWidth: {
        "6": "6px",
        "5": "5px",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    darkMode: "class",
  },
  // eslint-disable-next-line global-require
  plugins: [nextui(), require("tailwindcss-animate")],
}
