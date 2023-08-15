/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const sharedConfig = require("tailwind-config/tailwind.config.js");

module.exports = {
    ...sharedConfig,
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,md,mdx}"],
};
