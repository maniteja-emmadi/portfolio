const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
	content: ["./src/**/*.{js,jsx}"],
	theme: {
		screens: {
			sm: "480px",
			md: "768px",
			lg: "976px",
			xl: "1440px",
		},
		fontFamily: {
			sans: ["Poppins", ...defaultTheme.fontFamily.sans],
		},
		extend: {
			fontFamily: {
				poppins: [...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [],
};