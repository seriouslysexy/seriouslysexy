import { createTheme } from '@mui/material/styles';
import { lightBlue, pink } from '@mui/material/colors';

const theme = createTheme({
	palette: {
		mode: 'dark',
		primary: {
			main: lightBlue[700]
		},
		secondary: {
			main: pink[300]
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

export default theme;