const tailwindConfig = {
  // In v4 you can often skip content, but you can include it if needed:
  theme: {
    extend: {
      colors: {
        gray: {
          951: "#f4eee5",
          952: "#222",
          953: "#E9E4DB",
        },
        green: {
          951: "#9CAE96",
        },
      },
    },
  },
  plugins: [
    /* e.g. require('@tailwindcss/forms') */
  ],
};
export default tailwindConfig;
