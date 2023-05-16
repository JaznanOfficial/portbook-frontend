/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                // primary: "#4FD675",
            },
        },
    },

    daisyui: {
        themes: [
            {
                mytheme: {
                    primary: "#4FD675",
                    secondary: "#fff",
                },
            },
        ],
    },
    plugins: [require("daisyui")],
};
