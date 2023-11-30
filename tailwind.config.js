/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            borderWidth: {
                0.5: "0.5px",
            },
        },
        fontFamily: {
            sourceSans: ['"Source Sans 3"', "sans-serif"],
        },
        colors: {
            textGray: "rgb(115, 115, 115)",
            blue: "#0095f6",
            white: "#fff",
            errorText: "rgb(237, 73, 86)",
            dark: "#000",
            lightDark: "rgb(38, 38, 38)",
        },
        screens: {
            mobile: "450px",
            tablet: "640px",
            laptop: "1024px",
            desktop: "1280px",
        },
    },
    plugins: [],
};
