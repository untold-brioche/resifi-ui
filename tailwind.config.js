/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,js,svelte,ts}"],
    theme: {
        extend: {
            colors: {
                dark: "#070A13",
                "light-text": "#DBDBDB",
                primary: "#9781CC",
                secondary: "#788FBF",
            },
        },
    },
    plugins: [],
};
