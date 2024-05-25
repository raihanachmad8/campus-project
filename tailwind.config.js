export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        dot1: {
          "3%, 97%": {
            width: "10rem",
          },
          "30%, 36%": {
            width: "7rem",
          },
          "63%, 69%": {
            width: "3.5rem",
          },
        },
        dot2: {
          "3%, 97%": {
            width: "9rem",
          },
          "30%, 36%": {
            width: "6rem",
          },
          "63%, 69%": {
            width: "2.75rem",
          },
        },
        dot3: {
          "3%, 97%": {
            width: "5rem",
            height: "1.25rem",
          },
          "30%, 36%": {
            width: "3rem",
            height: "0.5rem",
            marginTop: "-1rem",
            borderRadius: "9999px",
          },
          "63%, 69%": {
            width: "0.5rem",
            height: "0.5rem",
            marginTop: "-1rem",
            borderRadius: "9999px",
          },
        },
      },
      animation: {
        dot1: "dot1 3s cubic-bezier(.55,.3,.24,.99) infinite",
        dot2: "dot2 3s cubic-bezier(.55,.3,.24,.99) infinite",
        dot3: "dot3 3s cubic-bezier(.55,.3,.24,.99) infinite",
      },
      fontFamily: {
        sans: ["Satoshi", "Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
