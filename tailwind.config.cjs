/** @type {import('tailwindcss').Config} */
module.exports = {
    theme: {
        extend: {
            borderRadius: {
                DEFAULT: 'calc(var(--radius))',
            },
        },
    },
};
