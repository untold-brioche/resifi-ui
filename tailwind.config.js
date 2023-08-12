/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,js,svelte,ts}"],
    theme: {
        extend: {
            colors: {
                dark: "#080808",
                primary: "#9781CC",
                secondary: "#788FBF",
            },
            fontFamily: {
                sans: ['"Poppins"', "sans-serif"],
            },
        },
    },
    plugins: [],
};
