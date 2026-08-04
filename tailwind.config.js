// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  presets: [require("nativewind/preset")],
  theme: {
    fontFamily: {
      sans: ['Inter_400Regular'],       // font-sans (ili default)
      normal: ['Inter_400Regular'],
      semibold: ['Inter_600SemiBold'],
      bold: ['Inter_700Bold'],
    },
    extend: {},
  },
  plugins: [],
}
