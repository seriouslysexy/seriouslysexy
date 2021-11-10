import React from "react";

import { makeStyles } from '@mui/styles';

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const useStyles = makeStyles(theme => ({
	primaryHeader: {
		fontSize: "6em"
	},
	secondaryHeader: {
		fontSize: "2.25em"
	},
	tertiaryHeader: {
		fontSize: "1.1em"
	}
}));

function Introduction(props) {
	const classes = useStyles();

	return (<Box>
		<Typography className={classes.primaryHeader} color="primary" variant="h1">Hi, I'm Eli.</Typography>
		<Typography className={classes.secondaryHeader} variant="h2">Veteran full-stack engineer</Typography>
		<Typography className={classes.tertiaryHeader} variant="h2">Expertise in complex NodeJS microservice architectures</Typography>
	</Box>);
}

export default Introduction;