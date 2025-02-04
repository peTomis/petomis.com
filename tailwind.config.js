/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "2rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      flex: {
        2: "2 2 0%",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "circuit-pattern": "url('/images/circuit-board.svg')",
        "engine-pattern": "url('/images/engines.svg')",
      },
      animation: {
        carousel: "carousel 40s linear infinite",
        smallCarousel: "carousel 80s linear infinite",
        scaleUp: "scale-up 300ms ease-out forwards",
      },
      keyframes: {
        carousel: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(calc(-250px * 8))" },
        },
        smallCarousel: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(calc(-180px * 8))" },
        },
        "scale-up": {
          "0%": { transform: "scale(0)" },
          "100%": { transform: "scale(1)" },
        },
      },
      colors: {
        background: {
          DEFAULT: "#1f1f1f",
        },
        competitionScreen: {
          DEFAULT: "#3E3E3E",
        },
        competitionTitle: {
          DEFAULT: "#5E5E5E",
        },
        primary: {
          DEFAULT: "#00719C",
          50: "#8CE6FF",
          100: "#00B8FF",
          200: "#009BD6",
          300: "#00719C",
          400: "#00415A",
          500: "#001F2B",
        },
        mineScreen: {
          DEFAULT: "#CECECE",
        },
        mineTitle: {
          DEFAULT: "#FFFFFF",
        },
        anubidigital: {
          DEFAULT: "#B02727",
          dark: "#5D0A0AFF",
        },
      },
    },
    fontFamily: {
      agdasima: ["Agdasima", "sans-serif"],
      bacasimeAntique: ["Bacasime Antique", "serif"],
      roboto: ["Roboto", "sans-serif"],
      satisfy: ["Satisfy", "cursive"],
    },
    fontSize: {
      myNameSmall: "60px",
      myNameMedium: "82px",
      myNameExtraLarge: "128px",
      jobSmall: "28px",
      jobMedium: "48px",
      jobExtraLarge: "64px",
      slogan: "56px",
      h1: "48px",
      h2: "42px",
      h3: "36px",
      h4: "30px",
      h5: "24px",
      h6: "20px",
      base: "1em",
      small: "12px",
    },
    screens: {
      xxs: "380px",
      d: "500px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1600px",
    },
  },
  plugins: [],
}
