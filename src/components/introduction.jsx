import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const styles = {
	primaryHeader: {
		// fontSize: "6em"
	},
	secondaryHeader: {
		// fontSize: "2.25em",
		width: "100%",
		borderBottom: (theme) => "2px solid " + theme.palette.primary.main,
		paddingBottom: ".25em"
	},
	tertiaryHeader: {
		// fontSize: "1.1em"
	}
};

function Introduction(props) {
	return (<Box>
		<Typography sx={styles.primaryHeader} color="primary" variant="h1">Hi, I'm Eli.</Typography>
		<Typography sx={styles.secondaryHeader} variant="h2">Veteran full-stack engineer</Typography>
		<Typography sx={styles.tertiaryHeader} variant="h4">Expertise in complex NodeJS microservice architectures</Typography>
	</Box>);
}

export default Introduction;