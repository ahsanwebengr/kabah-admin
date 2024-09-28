/** @type {import('tailwindcss').Config} */
import tailwindcssAnimate from "tailwindcss-animate";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    container: {
      center: "true",
      padding: "1rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "var(--border)",
        input: "var(--border)",
        ring: "hsl(var(--ring))",
        primary: {
          50: "var(--body-color)",
          100: "var(--primary-100)",
          200: "var(--primary-200)",
          DEFAULT: "var(--primary-color)",
        },
        secondary: {
          DEFAULT: "var(--secondary-color)",
        },
        gold: {
          DEFAULT: "var(--gold-color)",
        },
        white: {
          10: "var(--white-10)",
          20: "var(--white-20)",
          DEFAULT: "var(--white-color)",
        },
        muted: {
          DEFAULT: "var(--border)",
        },
        black: {
          DEFAULT: "var(--black-color)",
          80: "var(--black-80)",
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
      borderRadius: {
        sm: "2px",
        DEFAULT: "4px",
        md: "6px",
        lg: "10px",
        xl: "16px",
      },
      backgroundImage: {
        gradient:
          "linear-gradient(147.42deg, #F9F9F9 0%, rgba(255, 255, 255, 0.3) 100%)",
      },
      boxShadow: {
        "3xl":
          "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;",
        "4xl": "0px 0px 4px 0px #00000040",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [tailwindcssAnimate],
};

export default config;
