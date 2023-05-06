export default {
	content: ["./src/**/*.{html,js,svelte,ts}"],
	theme: {
		extend: {
			screens: {
				xs: "475px",
				xxs: "200px",
			},
			borderRadius: {
				DEFAULT: "3px",
			},
			colors: {
				"gov-sun-yellow": "#fbc900",
				// Greyscale
				"gov-black": "#222222",
				"gov-grey-100": "#414042",
				"gov-grey-75": "#707071",
				"gov-grey-55": "#969697",
				"gov-grey-35": "#bcbcbd",
				"gov-grey-15": "#e2e2e3",
				"gov-grey-5": "#f5f5f6",
				"gov-off-white": "#fbfbfb",
				"gov-white": "#ffffff",
			},
			fontFamily: {
				sans: ["Open Sans", "Helvetica", "Arial", "sans-serif"],
			},
		},
	},
	plugins: [],
};


