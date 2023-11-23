/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {},
        fontFamily: {
            sourceSans: ['"Source Sans 3"', "sans-serif"],
        },
        colors: {
            textGray: "rgb(115, 115, 115)",
            blue: "#0095f6",
            white: "#fff",
            errorText: "rgb(237, 73, 86)",
        },
    },
    plugins: [],
};
