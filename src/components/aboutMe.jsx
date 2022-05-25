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
			I'm a software engineer currently based in central Florida. I love learning and solving technical problems.
			My current focus is development and maintenance of many of our server-side applications at ALTR.
			I thrive in fast-paced environments where I am able to adapt and think creatively to produce high-quality software solutions.
		</Typography>
	</Box>);
}

export default AboutMe;