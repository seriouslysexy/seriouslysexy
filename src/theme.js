import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { lightBlue, pink } from '@mui/material/colors';

import "@fontsource/inconsolata/300.css";
import "@fontsource/inconsolata/500.css";
import "@fontsource/inconsolata/700.css";

import "@fontsource/open-sans/300.css";
import "@fontsource/open-sans/500.css";
import "@fontsource/open-sans/700.css";

const baseFont = '"Open Sans", "Helvetica", "Arial", sans-serif';
const headingFont = '"Inconsolata", "Helvetica", "Arial", sans-serif';

const bgColor = "#04161e";
const defaultMain = lightBlue[700];
const defaultSecondary = pink[300];

let theme = createTheme({
	breakpoints: {
		values: {
			xs: 480,
			sm: 720,
			md: 1100,
			lg: 1400
		}
	},
	typography: {
		fontFamily: baseFont,
		h1: { fontFamily: headingFont, fontWeight: "700" },
		h2: { fontFamily: headingFont, fontWeight: "700" },
		h3: { fontFamily: headingFont, fontWeight: "500" },
		h4: { fontFamily: headingFont, fontWeight: "500" },
		h5: { fontFamily: headingFont, fontWeight: "300" },
		h6: { fontFamily: headingFont, fontWeight: "300" },
		body1: { fontWeight: "100" }
	},
	palette: {
		mode: 'dark',
		primary: {
			main: defaultMain
		},
		secondary: {
			main: defaultSecondary
		},
		site: {
			background: bgColor
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
	}
});

theme = responsiveFontSizes(theme);

export default theme;