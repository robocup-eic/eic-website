const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  experimental: {
    optimizeUniversalDefaults: true,
  },
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        tomato: "#D24E45",
        creamy: "#ECE7E3",
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            h1: {
              color: theme("colors.gray.900"),
              fontWeight: "800",
              fontFamily: `${theme("fontFamily.display")}`,
            },
            h2: {
              color: theme("colors.gray.900"),
              fontWeight: "700",
              fontFamily: `${theme("fontFamily.display")}`,
            },
            h3: {
              color: theme("colors.gray.900"),
              fontWeight: "600",
              fontFamily: `${theme("fontFamily.display")}`,
            },
            h4: {
              color: theme("colors.gray.900"),
              fontWeight: "600",
              fontFamily: `${theme("fontFamily.display")}`,
            },
          },
        },
        lg: {
          css: {
            h1: {
              fontFamily: `${theme("fontFamily.display")}`,
            },
            h2: {
              fontFamily: `${theme("fontFamily.display")}`,
            },
            h3: {
              fontFamily: `${theme("fontFamily.display")}`,
            },
            h4: {
              fontFamily: `${theme("fontFamily.display")}`,
            },
          },
        },
        xl: {
          css: {
            h1: {
              fontFamily: `${theme("fontFamily.display")}`,
            },
            h2: {
              fontFamily: `${theme("fontFamily.display")}`,
            },
            h3: {
              fontFamily: `${theme("fontFamily.display")}`,
            },
            h4: {
              fontFamily: `${theme("fontFamily.display")}`,
            },
          },
        },
      }),
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    fontFamily: {
      display: [
        "Montserrat",
        "Inter var",
        "Noto Sans Thai",
        "SF Pro Display",
        "Sukhumvit Set",
        "IBM Plex Sans Thai",
        ...defaultTheme.fontFamily.sans,
      ],
      text: [
        "Inter var",
        "Noto Sans Thai",
        "SF Pro Display",
        "Sukhumvit Set",
        "IBM Plex Sans Thai",
        ...defaultTheme.fontFamily.sans,
      ],
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
