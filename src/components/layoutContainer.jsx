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
		paddingRight: "50px",
		position: "relative",
		"&::before": {
			content: "''",
			display: "block",
			position: "absolute",
			height: "calc(100% + 15vh)",
			top: "-10vh",
			width: "100vh",
			right: "0",
			background: "rgba(255, 255, 255, .3)",
			zIndex: "-1"
		}
	},
	rightContent: {
		paddingLeft: "50px",
		maxWidth: "1250px",
		minWidth: "1100px"
	}
};

function LayoutContainer() {
	return (
		<Box p="10vh 10vh 5vh" width="100%" display="flex" flexDirection="row" justifyContent="center" alignItems="flex-start">
			<Box width="100%" display="flex" flexDirection="row" justifyContent="center" alignItems="stretch">
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
					<div>Footer, contact info, closing</div>
				</Box>
			</Box>
		</Box>
	);
}

export default LayoutContainer;