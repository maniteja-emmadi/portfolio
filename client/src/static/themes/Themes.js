const common = {
	// Colors for layout
	colors: {
		primary: "hsl(216, 83%, 59%)",
		accent1: "hsl(34.9,98.6%,72.9%)",

		scrollBarColor: "hsl(255,12%,48%)",
		scrollThumbColor: "hsl(255, 12%,36%)",
	},
	// Breakpoints for responsive design
	breakpoints: {
		sm: "screen and (max-width: 639px)",
		md: "screen and (max-width: 767px)",
		lg: "screen and (max-width: 1023px)",
		xl: "screen and (max-width: 1279px)",
		msm: "screen and (min-width: 640px)",
		mmd: "screen and (min-width: 768px)",
		mlg: "screen and (min-width: 1024px)",
		mxl: "screen and (min-width: 1280px)",
	},
	constants: {
		navbarHeight: "4.5rem",
		bigFontSize: "3rem",
		h1FontSize: "2rem",
		h2FontSize: "1.5rem",
		h3FontSize: "1.25rem",
		normalFontSize: "1rem",
		smallFontSize: "0.875rem",
		smallerFontSize: "0.813rem",
		firstColorSecond: "hsl(255,8%,95%)",
		textColor: "hsl(255,8%,75%)",
		inputColor: "hsl(255,29%,16%)",
		bodyColor: "hsl(255,28%,12%)",
		containerColor: "hsl(255,29%,16%)",
		headerShadow: "0 -1px 4px #9ca3af",
		cardShadow: "0 0 3px hsla(0,0%,100%,0.15)",
	},
};
export const lightTheme = {
	toggleBorder: "#FFF",
	...common,
	colors: {
		body: "#fff",
		text: "#363537",
		background: "#363537",
		subText: "hsl(250deg 8% 45%)",
		...common.colors,
	},
};

export const darkTheme = {
	toggleBorder: "#6B8096",
	...common,
	colors: {
		body: "hsl(212 50% 7%)",
		text: "#FAFAFA",
		background: "#999",
		subText: "hsl(250deg 8% 75%)",
		...common.colors,
	},
};
