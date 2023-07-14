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
      animation: {
        carousel: "carousel 40s linear infinite",
        smallCarousel: "carousel 80s linear infinite",
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
      },
      colors: {
        competitionScreen: {
          DEFAULT: "#3E3E3E",
        },
        competitionTitle: {
          DEFAULT: "#5E5E5E",
        },
        primary: {
          DEFAULT: "#00719C",
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
        vscodebg: {
          DEFAULT: "#1E1E1E",
        },
        vscodeblue: {
          DEFAULT: "#569CD6",
        },
        vscodegreen: {
          DEFAULT: "#4EC9B0",
        },
        vscodelightgreen: {
          DEFAULT: "#B5CEA8",
        },
        vscodelightblue: {
          DEFAULT: "#9CDCFE",
        },
        vscodepurple: {
          DEFAULT: "#C586C0",
        },

        vscodelightyellow: {
          DEFAULT: "#DCDCAA",
        },
        vscodeyellow: {
          DEFAULT: "#FFD700",
        },
      },
    },
    fontFamily: {
      agdasima: ["Agdasima", "sans-serif"],
      bacasimeAntique: ["Bacasime Antique", "serif"],
      cascadia: ["Cascadia", "sans-serif"],
      "cascadia-bold": ["Cascadia-Bold", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
      satisfy: ["Satisfy", "cursive"],
    },
    fontSize: {
      myName: "66px",
      slogan: "56px",
      h1: "48px",
      h2: "42px",
      h3: "36px",
      h4: "30px",
      h5: "24px",
      base: "16px",
    },
    screens: {
      xxs: "380px",
      d: "500px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  plugins: [],
}
