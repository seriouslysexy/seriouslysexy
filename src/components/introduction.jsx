import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import ProfilePicture from "./profilePicture";

const styles = {
	introContainer: {
		width: "100%",
		borderBottom: theme => "2px solid " + theme.palette.primary.main,
		marginBottom: theme => theme.spacing(6),
		paddingBottom: theme => theme.spacing(3)
	}
};

function Introduction(props) {
	return (<Box sx={styles.introContainer} display="flex" flexDirection="row" alignItems="center" justifyContent="space-between">
		<Box>
			<Typography variant="h1" color="primary">Hi, I'm Eli.</Typography>
			<Typography variant="h2">Veteran full-stack engineer</Typography>
			<Typography variant="h5">Expertise in complex NodeJS microservice architectures</Typography>
		</Box>
		<ProfilePicture />
	</Box>);
}

export default Introduction;