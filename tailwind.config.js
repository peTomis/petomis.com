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
        "bricks-pattern": "url('/images/bricks.svg')",
      },
      animation: {
        scaleUp: "scale-up 300ms ease-out forwards",
        fade: "fade 1.5s ease-in-out",
        "float-y": "float-y 8s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2.4s infinite",
        "scroll-cue": "scroll-cue 1.8s infinite",
        blink: "blink 1.1s steps(1) infinite",
        reveal: "reveal 0.8s cubic-bezier(.2,.7,.2,1) both",
      },
      keyframes: {
        "scale-up": {
          "0%": { transform: "scale(0)" },
          "100%": { transform: "scale(1)" },
        },
        fade: {
          "0%": { opacity: 0 },
          "30%": { opacity: 1 },
          "70%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
        "float-y": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(30,167,255,.5)" },
          "70%": { boxShadow: "0 0 0 18px rgba(30,167,255,0)" },
        },
        "scroll-cue": {
          "0%": { transform: "translateY(0)", opacity: 0 },
          "30%, 60%": { opacity: 1 },
          "100%": { transform: "translateY(10px)", opacity: 0 },
        },
        blink: {
          "0%, 49%": { opacity: 1 },
          "50%, 100%": { opacity: 0 },
        },
        reveal: {
          "0%": { opacity: 0, transform: "translateY(28px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      colors: {
        background: {
          DEFAULT: "#1f1f1f",
        },
        night: {
          DEFAULT: "#060a12",
          terminal: "#0a1119",
        },
        electric: {
          DEFAULT: "#1ea7ff",
          light: "#7fd1ff",
          deep: "#0a4f80",
          ink: "#04111d",
        },
        ink: {
          DEFAULT: "#eaf1fb",
          secondary: "#c4d2e6",
          label: "#9fb2cc",
          muted: "#8b9bb4",
          faint: "#647a98",
          fainter: "#3f536e",
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
        pienissimo: {
          DEFAULT: "#e30619",
        },
      },
      dropShadow: {
        "3xl": "0 35px 35px rgba(0, 0, 0, 0.25)",
        "4xl": [
          "0 35px 35px rgba(0, 0, 0, 0.25)",
          "0 45px 65px rgba(0, 0, 0, 0.15)",
        ],
      },
    },
    fontFamily: {
      orbitron: ["Orbitron", "sans-serif"],
      montserrat: ["Montserrat", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
      grotesk: ["Space Grotesk", "sans-serif"],
      manrope: ["Manrope", "system-ui", "sans-serif"],
      mono: ["JetBrains Mono", "monospace"],
    },
    fontSize: {
      name: "36px",
      nameExtraSmall: "48px",
      nameSmall: "60px",
      nameMedium: "72px",
      nameLarge: "48px",
      nameExtraLarge: "52px",
      nameXXL: "82px",
      job: "28px",
      jobExtraSmall: "36px",
      jobSmall: "48px",
      jobMedium: "56px",
      jobLarge: "36px",
      jobExtraLarge: "42px",
      jobXXL: "64px",
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
