import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const styles = {
	about: {
		fontSize: "1.4em",
		marginBottom: theme => theme.spacing(6)
	}
};

function AboutMe(props) {
	return (<Box>
		<Typography sx={{ fontSize: "2em" }} color="primary" variant="h2">About Me</Typography>
		<Typography sx ={styles.about}>
			I have a cumulative 13 years of experience with frontend and backend Javascript development.
			I'm most familiar with NodeJS, React, and the surrounding ecosystem of frameworks, databases, protocols, and build/deployment tools.
			I love learning and solving technical problems. Most of my time has been spent working to bring structure to small teams in rapidly shifting markets.
			I'm looking for opportunities to solve complicated, delicate, or otherwise nuanced opportunities in NodeJS or React environments, or to bring my experience to a younger team.
		</Typography>
	</Box>);
}

export default AboutMe;