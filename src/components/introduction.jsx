import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import ProfilePicture from "./profilePicture";

import theme from "../theme";
import useMediaQuery from '@mui/material/useMediaQuery';

const styles = {
	introContainer: {
		width: "100%",
		borderBottom: theme => "2px solid " + theme.palette.primary.main,
		marginBottom: theme => theme.spacing(6),
		paddingBottom: theme => theme.spacing(3),
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

	console.log("HI", theme.breakpoints.down("md"))

	return (<Box sx={styles.introContainer} display="flex" flexDirection={ useMobileLayout ? "column" : "row"} alignItems="center" justifyContent={ useMobileLayout ? "flex-start" : "space-between"}>
		<Box>
			<Typography align={ useMobileLayout ? "center" : "left" } variant="h1" color="primary">Hi, I'm Eli.</Typography>
			<Typography sx={styles.introH2} align={ useMobileLayout ? "center" : "left" } variant="h2">Veteran full-stack engineer</Typography>
			<Typography align={ useMobileLayout ? "center" : "left" } variant="h5">Expertise in complex NodeJS microservice architectures</Typography>
		</Box>
		<ProfilePicture />
	</Box>);
}

export default Introduction;