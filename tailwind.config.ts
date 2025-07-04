import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
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
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#ffd166",
          50: "#fffbeb",
          100: "#fef3c7",
          200: "#fed98a",
          300: "#fec84d",
          400: "#fdb92a",
          500: "#ffd166",
          600: "#ffb000",
          700: "#ff8400",
          800: "#e1692e",
          900: "#b84e2a",
          950: "#7c2d12",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "#ffb000",
          foreground: "hsl(var(--secondary-foreground))",
        },
        accent: {
          DEFAULT: "#ff8400",
          foreground: "hsl(var(--accent-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
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
        "orbit": {
          "0%": { transform: "rotate(0deg) translateX(100px) rotate(0deg)" },
          "100%": { transform: "rotate(360deg) translateX(100px) rotate(-360deg)" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "orbit": "orbit 20s linear infinite",
        "float": "float 6s ease-in-out infinite",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Sora', 'sans-serif'],
      },
      backdropFilter: {
        'none': 'none',
        'blur': 'blur(20px)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config 