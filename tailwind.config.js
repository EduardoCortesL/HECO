/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
		extend: {
			colors: {
			"primary": "#2ecc71",
			"secondary": "#27ae60",
			"midnight-blue": "#2c3e50",
			"wet-asphalt": "#34495e",
			"heco_blue": "#3ef3f3",
			"heco_trans": "#96f0f1",
			"heco_white": "#fcfdf8",
			"heco_dark": "#121420",
			"heco_yellow": "#eee39b"
			}
		}
  },
  plugins: [],
}
