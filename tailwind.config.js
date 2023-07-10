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
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    fontFamily: {
      bacasimeAntique: ["Bacasime Antique", "serif"],
      cascadia: ["Cascadia", "sans-serif"],
      "cascadia-bold": ["Cascadia-Bold", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
    },
    fontSize: {
      slogan: "56px",
      h1: "48px",
      h2: "3rem",
      h3: "2.5rem",
      h4: "2rem",
      h5: "1.75rem",
      h6: "1.625rem",
      subtitle1: "16px",
      subtitle2: "14px",
      base: "16px",
    },
    extend: {
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
  },
  plugins: [],
}
