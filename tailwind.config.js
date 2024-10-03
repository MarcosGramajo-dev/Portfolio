const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {},
      colors: {
        'light-blue-1': '#D6DDE6',
        'light-blue-2': '#0E3569',
        'light-grey': '#EFEFEF',
      },
    },
    plugins: [],
});