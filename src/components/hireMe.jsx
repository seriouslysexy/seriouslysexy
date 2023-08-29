import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import Contact from "./contact";

const styles = {
	hireMeWrapper: {
		background: "rgba(200, 40, 100, .1)",
		padding: ".5em",
		marginBottom: theme => theme.spacing(7),
		marginTop: theme => theme.spacing(5)
	},
	hireMe: {
		textAlign: "center",
		margin: ".5em 0 8px",
		fontSize: "5em !important"
	},
	hireMeJoke: {
		textAlign: "center"
	}
};

function HireMe(props) {
	return (<Box sx={styles.hireMeWrapper}>
		<Typography sx={styles.hireMe} color="secondary" variant="h1">You can hire me right now.</Typography>
		<Typography sx={styles.hireMeJoke} color="secondary" variant="h6">And you should. I'm unemployed and hungry.</Typography>
		<Contact />
	</Box>);
}

export default HireMe;