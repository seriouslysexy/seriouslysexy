import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import RapierLogo from "./rapierLogo";
import TextLogo from "./textLogo";
import theme from "../theme";
import useMediaQuery from '@mui/material/useMediaQuery';

const styles = {
	introContainer: {
		position: "relative",
		width: "100%",
		marginTop: "50vh",
		marginBottom: "30vh",
		paddingBottom: theme => theme.spacing(3),
		[theme.breakpoints.down("logo")]: {
			marginTop: theme => theme.spacing(5),
			marginBottom: theme => theme.spacing(5)
		},
	},
	introH2: {
		[theme.breakpoints.between("md", "lg")]: {
			fontSize: "3.25em"
		},
		[theme.breakpoints.between("sm", "md")]: {
			fontSize: "2.5em"
		}
	}
};

function Introduction(props) {
	let useMobileLayout = useMediaQuery(theme.breakpoints.down("md"));
	let useTextLogo = useMediaQuery(theme.breakpoints.down("logo"));

	return (<Box sx={styles.introContainer} display="flex" flexDirection="column" alignItems="center">
		{ useTextLogo ? <TextLogo /> : <RapierLogo /> }
		<Typography align={ useMobileLayout ? "center" : "left" } variant="h1" color="primary">Hi, I'm Eli.</Typography>
		<Typography sx={styles.introH2} align={ useMobileLayout ? "center" : "left" } variant="h2">Experienced full-stack engineer</Typography>
		<Typography align={ useMobileLayout ? "center" : "left" } variant="h5">Expertise in complex NodeJS microservice architectures</Typography>
	</Box>);
}

export default Introduction;