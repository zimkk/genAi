export default {
  darkMode: "class",
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f0f7ff",
          100: "#e0effe",
          200: "#bae0fd",
          300: "#7ac9fc",
          400: "#34b0f7",
          500: "#0c96e6",
          600: "#0078c2",
          700: "#00609e",
          800: "#065283",
          900: "#0a446c",
          950: "#072a47",
        },
        secondary: {
          50: "#fdf2ff",
          100: "#fae4ff",
          200: "#f6c9ff",
          300: "#f19eff",
          400: "#e865fd",
          500: "#d63af7",
          600: "#be20de",
          700: "#a016ba",
          800: "#841498",
          900: "#6e137b",
          950: "#4e0057",
        },
        dark: {
          100: "#1e1e2e",
          200: "#181825",
          300: "#11111b",
        },
        light: {
          100: "#f8f8fc",
          200: "#f0f0f5",
          300: "#e8e8f0",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Space Grotesk", "sans-serif"],
      },
      backdropBlur: {
        xs: '2px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}