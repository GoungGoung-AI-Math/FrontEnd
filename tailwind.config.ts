import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
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
    extend: {
      colors: {
        grayscale: {
          white: 'FFFFFF',
          10: '#FAFAFA',
          50: '#F6F6F6',
          100: '#E5E5E5',
          200: '#CCC',
          300: '#B2B2B2',
          400: '#999',
          500: '#7F7F7F',
          600: '#666',
          700: '#4C4C4C',
          800: '#333',
          900: '#191919',
          black: '#000',
        },
        'brand-primary': {

        },
        'brand-error': 'DA3A44',
        'brand-success': '1D62EC',
        'brand-warning': 'F3CB3C',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config