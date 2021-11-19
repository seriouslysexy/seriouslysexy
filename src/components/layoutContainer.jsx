import React from "react";

import Box from "@mui/material/Box";

import ProfilePicture from "./profilePicture";
import Introduction from "./introduction";
import Skills from "./skillsHorizontal";
import AboutMe from "./aboutMe";
import Contact from "./contact";
import WorkHistory from "./workHistory";

const styles = {
	leftContent: {
		height: "100%",
		paddingRight: "50px",
		position: "relative",
		"&::before": {
			content: "''",
			display: "block",
			position: "absolute",
			height: "200%",
			top: "-50%",
			width: "100vh",
			right: "0",
			background: "rgba(255, 255, 255, .3)",
			zIndex: "-1"
		}
	},
	rightContent: {
		height: "100%",
		paddingLeft: "50px"
	}
};

function LayoutContainer() {
	return (
		<Box p="10vh" height="100%" width="100%" display="flex" flexDirection="row" justifyContent="center" alignItems="flex-start">
			<Box height="100%" width="80%" maxWidth="1200px" display="flex" flexDirection="row" justifyContent="center" alignItems="flex-start">
				<Box sx={styles.leftContent}>
					<ProfilePicture />
					<div>navigation?</div>
					<Contact />
				</Box>
				<Box sx={styles.rightContent}>
					<Introduction />
					<AboutMe />
					<Skills />
					<WorkHistory />
					<div>Apartments247</div>
					<div>Mastertech</div>
					<div>Personal projects, tinkering, childhood, etc</div>
					<div>Footer, contact info, closing</div>
				</Box>
			</Box>
		</Box>
	);
}

export default LayoutContainer;