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
		},
		pSBC: (percent, color1, color2, useLogBlend) => {
			// p-shade-blend-color courtesy of https://stackoverflow.com/a/13542669
			// Allegedly the fastest, most complete lighten/darken/blend/transition function on the internet
			// I should probably replace my above function with this
			let r,g,b,P,f,t,h,i=parseInt,m=Math.round,a=typeof(color2)=="string";
			if(typeof(percent)!="number"||percent<-1||percent>1||typeof(color1)!="string"||(color1[0]!='r'&&color1[0]!='#')||(color2&&!a))return null;
			let pSBCr;if(!pSBCr) pSBCr=(d)=>{
					let n=d.length,x={};
					if(n>9){
							[r,g,b,a]=d=d.split(","),n=d.length;
							if(n<3||n>4)return null;
							x.r=i(r[3]=="a"?r.slice(5):r.slice(4)),x.g=i(g),x.b=i(b),x.a=a?parseFloat(a):-1
					}else{
							if(n==8||n==6||n<4)return null;
							if(n<6)d="#"+d[1]+d[1]+d[2]+d[2]+d[3]+d[3]+(n>4?d[4]+d[4]:"");
							d=i(d.slice(1),16);
							if(n==9||n==5)x.r=d>>24&255,x.g=d>>16&255,x.b=d>>8&255,x.a=m((d&255)/0.255)/1000;
							else x.r=d>>16,x.g=d>>8&255,x.b=d&255,x.a=-1
					}return x};
			h=color1.length>9,h=a?color2.length>9?true:color2=="c"?!h:false:h,f=pSBCr(color1),P=percent<0,t=color2&&color2!="c"?pSBCr(color2):P?{r:0,g:0,b:0,a:-1}:{r:255,g:255,b:255,a:-1},percent=P?percent*-1:percent,P=1-percent;
			if(!f||!t)return null;
			if(useLogBlend)r=m(P*f.r+percent*t.r),g=m(P*f.g+percent*t.g),b=m(P*f.b+percent*t.b);
			else r=m((P*f.r**2+percent*t.r**2)**0.5),g=m((P*f.g**2+percent*t.g**2)**0.5),b=m((P*f.b**2+percent*t.b**2)**0.5);
			a=f.a,t=t.a,f=a>=0||t>=0,a=f?a<0?t:t<0?a:a*P+t*percent:0;
			if(h)return"rgb"+(f?"a(":"(")+r+","+g+","+b+(f?","+m(a*1000)/1000:"")+")";
			else return"#"+(4294967296+r*16777216+g*65536+b*256+(f?m(a*255):0)).toString(16).slice(1,f?undefined:-2)
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