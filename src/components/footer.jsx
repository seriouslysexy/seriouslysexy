import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import StyledLink from "./styledLink";
import Contact from "./contact";

import theme from "../theme";

const styles = {
	footerContainer: {},
	toolsList: {
		[theme.breakpoints.down("xs")]: {
			flexWrap: "wrap"
		}
	},
	tool: {
		fontSize: ".8em"
	}
};

function Footer(props) {
	return (<Box sx={styles.footerContainer} display="flex" flexDirection="column" alignItems="center" justifyContent="center">
		<StyledLink href="https://github.com/seriouslysexy/seriouslysexy" target="github">Designed and built by me</StyledLink>
		<Typography sx={{ fontSize: ".8em", margin: "0px 0px 8px 0px" }}>Using these tools</Typography>
		<Box sx={styles.toolsList} display="flex" flexDirection="row" alignItems="center" justifyContent="center">
			<StyledLink extraStyles={styles.tool} href="https://threejs.org/" target="builtusing">three.js</StyledLink>
			<StyledLink extraStyles={styles.tool} href="https://docs.pmnd.rs/react-three-fiber/" target="builtusing">react-three/fiber</StyledLink>
			<StyledLink extraStyles={styles.tool} href="https://github.com/pmndrs/drei" target="builtusing">react-three/drei</StyledLink>
			<StyledLink extraStyles={styles.tool} href="https://github.com/pmndrs/react-three-rapier" target="builtusing">react-three/rapier</StyledLink>
			<StyledLink extraStyles={styles.tool} href="https://www.fontspace.com/chiptune-valentine-font-f90936" target="builtusing">Chiptune Valentine</StyledLink>
		</Box>
		<Box sx={styles.toolsList} display="flex" flexDirection="row" alignItems="center" justifyContent="center">
			<StyledLink extraStyles={styles.tool} href="https://react.dev/" target="builtusing">React</StyledLink>
			<StyledLink extraStyles={styles.tool} href="https://mui.com/" target="builtusing">MUI</StyledLink>
			<StyledLink extraStyles={styles.tool} href="https://emotion.sh/" target="builtusing">Emotion</StyledLink>
			<StyledLink extraStyles={styles.tool} href="https://fontsource.org/" target="builtusing">Fontsource</StyledLink>
			<StyledLink extraStyles={styles.tool} href="https://babeljs.io/" target="builtusing">Babel</StyledLink>
			<StyledLink extraStyles={styles.tool} href="https://webpack.js.org/" target="builtusing">Webpack</StyledLink>
		</Box>
		<Contact />
	</Box>);
}

export default Footer;