import React from "react";

import Typography from "@mui/material/Typography";

const styles = {
	about: {
		fontSize: "1.1em",
		marginBottom: theme => theme.spacing(3)
	}
};

function AboutMe(props) {
	return (<Typography sx ={styles.about}>
		I'm a software engineer currently based in central Florida. I love learning and solving technical problems.
		I discovered my passion for computer sciences in my childhood when I was desperate to remove a virus from my family's home computer before my mom found out.
		Thankfully, I've come a long way since then. I repaired computers and phones through high school until I got an IT job at 17.
		From there, I worked out of IT to frontend development and eventually to backend development in NodeJS.
		My current focus is development and maintenance of many of our server-side applications at ALTR.
		I thrive in fast-paced environments where I am able to adapt and think creatively to produce high-quality software solutions.
	</Typography>);
}

export default AboutMe;