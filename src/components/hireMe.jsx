import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import Contact from "./contact";

import theme from "../theme";

const styles = {
	hireMeWrapper: {
		background: theme => `${theme.palette.secondary.main}0f`,
		padding: ".5em",
		marginBottom: theme => theme.spacing(7),
		marginTop: theme => theme.spacing(5)
	},
	hireMe: {
		textAlign: "center",
		margin: ".5em 0 8px",
		[theme.breakpoints.up("lg")]: {
			fontSize: "5em"
		},
		[theme.breakpoints.up("md")]: {
			fontSize: "4.4em"
		}
	},
	hireMeJoke: {
		textAlign: "center"
	}
};

const hireMeHeader = "You can hire me right now.";
const hireMeSubheader = "And you should. I'm unemployed and hungry.";

const cantHireMeHeader = "I am employed right now.";
const cantHireMeSubheader = "But don't let that discourage you.";

function HireMe(props) {
	return (<Box sx={styles.hireMeWrapper}>
		<Typography sx={styles.hireMe} color="secondary" variant="h1">{ cantHireMeHeader }</Typography>
		<Typography sx={styles.hireMeJoke} color="secondary" variant="h6">{ cantHireMeSubheader }</Typography>
		<Contact />
	</Box>);
}

export default HireMe;