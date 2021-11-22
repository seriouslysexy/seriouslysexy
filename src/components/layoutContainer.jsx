import React from "react";

import Box from "@mui/material/Box";

import ProfilePicture from "./profilePicture";
import Introduction from "./introduction";
import Skills from "./skillsHorizontal";
import AboutMe from "./aboutMe";
import WorkHistory from "./workHistory";
import Footer from "./footer";

const styles = {
	appContainer: {
		width: "100%",
		padding: "10vh 10vh 5vh",
		background: theme => theme.palette.site.background
	},
	content: {
		paddingLeft: "50px",
		maxWidth: "1250px",
		minWidth: "1100px"
	}
};

function LayoutContainer() {
	return (
		<Box sx={styles.appContainer} display="flex" flexDirection="row" justifyContent="center" alignItems="flex-start">
			<Box sx={styles.content}>
				<Introduction />
				<AboutMe />
				<Skills />
				<WorkHistory />
				<Footer />
			</Box>
		</Box>
	);
}

export default LayoutContainer;