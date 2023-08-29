import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { green, amber } from '@mui/material/colors';

import "@fontsource/arvo/400.css";
import "@fontsource/arvo/700.css";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "@fontsource/roboto/900.css";

const baseFont = '"Roboto", "Helvetica", "Arial", sans-serif';
const headingFont = '"Arvo", "Helvetica", "Arial", sans-serif';

const bgColor = "#181401";
const defaultMain = green[800];
const defaultSecondary = amber[600];
const defaultTextColor = "#f3ecff";

let theme = createTheme({
	breakpoints: {
		values: {
			xs: 480,
			sm: 720,
			logo: 800,
			md: 1100,
			lg: 1400
		}
	},
	typography: {
		fontFamily: baseFont,
		h1: { fontFamily: headingFont, fontWeight: "700", letterSpacing: "2px" },
		h2: { fontFamily: headingFont, fontWeight: "700", letterSpacing: "2px" },
		h3: { fontFamily: headingFont, fontWeight: "400", letterSpacing: "2px" },
		h4: { fontFamily: headingFont, fontWeight: "400", letterSpacing: "2px" },
		h5: { fontFamily: headingFont, fontWeight: "400", letterSpacing: "2px" },
		h6: { fontFamily: headingFont, fontWeight: "400", letterSpacing: "2px" },
		body1: { fontWeight: "300" }
	},
	palette: {
		mode: 'dark',
		background: {
			default: bgColor
		},
		primary: {
			main: defaultMain
		},
		secondary: {
			main: defaultSecondary
		}
	},
	functions: {
		getTransitionColor: (startColor, endColor, pct) => {
			if (!startColor || !endColor || (!pct && pct !== 0)) {
				throw "startColor, endColor, and pct must be provided.";
			} else if (isNaN(pct) || pct > 100 || pct < 0) {
				throw "pct must be a number between 0 and 100 inclusive";
			} else if (startColor.length > 7 || startColor.length < 5 || endColor.length > 7 || endColor.length < 5) {
				throw "startColor and endColor must be 6 length hexcode colors (# optional)";
			}

			if (startColor.startsWith("#")) {
				startColor = startColor.substring(1);
			}
			if (endColor.startsWith("#")) {
				endColor = endColor.substring(1);
			}

			let ratio = pct / 100;

			let r = Math.ceil(parseInt(startColor.substring(0,2), 16) * (1 - ratio) + parseInt(endColor.substring(0,2), 16) * ratio);
			let g = Math.ceil(parseInt(startColor.substring(2,4), 16) * (1 - ratio) + parseInt(endColor.substring(2,4), 16) * ratio);
			let b = Math.ceil(parseInt(startColor.substring(4,6), 16) * (1 - ratio) + parseInt(endColor.substring(4,6), 16) * ratio);

			const hex = function(x) {
				x = x.toString(16);
				if (x.length == 1) {
					x = "0" + x;
				}
				return x;
			};

			return "#" + hex(r) + hex(g) + hex(b);
		}
	},
	components: {
		MuiCssBaseline: {
			styleOverrides: `
				body {
					color: ${defaultTextColor}
				}
			`
		}
	}
});

theme = responsiveFontSizes(theme);

export default theme;