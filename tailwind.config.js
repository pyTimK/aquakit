/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#FAFAFA",
        light_blue: "#C1E3FF",
        dark_blue: "#70BDF2",
        darker_blue: "#15233D",
        darker_blue2: "#15233D",
        link: "#15233D",
        red: '#f70000',
        semi_transparent: "#00000022",
      },
    },
    
  },
  plugins: [],
}
