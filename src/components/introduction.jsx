import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const styles = {
	primaryHeader: {
		position: "relative",
		left: "-4px"
	},
	secondaryHeader: {
		width: "100%",
		left: "-3px",
	},
	tertiaryHeader: {
		width: "100%",
		borderBottom: theme => "2px solid " + theme.palette.primary.main,
		marginBottom: ".75em",
		paddingBottom: ".75em"
	}
};

function Introduction(props) {
	return (<Box>
		<Typography sx={styles.primaryHeader} color="primary" variant="h1">Hi, I'm Eli.</Typography>
		<Typography sx={styles.secondaryHeader} variant="h2">Veteran full-stack engineer</Typography>
		<Typography sx={styles.tertiaryHeader} variant="h5">Expertise in complex NodeJS microservice architectures</Typography>
	</Box>);
}

export default Introduction;