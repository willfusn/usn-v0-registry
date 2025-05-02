import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },

        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },

        brand: {
          one: "var(--brand-one)",
          "one-foreground": "var(--brand-one-foreground)",
          two: "var(--brand-two)",
          "two-foreground": "var(--brand-two-foreground)",
          three: "var(--brand-three)",
          "three-foreground": "var(--brand-three-foreground)",
          four: "var(--brand-four)",
          "four-foreground": "var(--brand-four-foreground)",
          five: "var(--brand-five)",
          "five-foreground": "var(--brand-five-foreground)",
        },

        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },

        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },

        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },

        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },

        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },

        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",

        chart: {
          1: "var(--chart-1)",
          2: "var(--chart-2)",
          3: "var(--chart-3)",
          4: "var(--chart-4)",
          5: "var(--chart-5)",
        },

        sidebar: {
          DEFAULT: "var(--sidebar-background)",
          foreground: "var(--sidebar-foreground)",
          primary: "var(--sidebar-primary)",
          "primary-foreground": "var(--sidebar-primary-foreground)",
          accent: "var(--sidebar-accent)",
          "accent-foreground": "var(--sidebar-accent-foreground)",
          border: "var(--sidebar-border)",
          ring: "var(--sidebar-ring)",
        },
      },

      fontFamily: {
        sans: "var(--font-sans)",
        serif: "var(--font-serif)",
        mono: "var(--font-mono)",
        display: "var(--font-display)",
      },

      borderRadius: {
        lg: "var(--radius)",
        md: "var(--radius-md)",
        sm: "var(--radius-sm)",
      },

      keyframes: {
        "fade-in-scale": {
          "0%": {
            opacity: "0",
            transform: "scale(0.95)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)",
          },
        },
      },

      animation: {
        "fade-in-scale": "fade-in-scale 0.3s ease-out",
      },
    },
  },
  plugins: [],
};

export default config;
