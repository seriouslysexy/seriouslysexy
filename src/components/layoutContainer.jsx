import React from "react";

import Box from "@mui/material/Box";

import Introduction from "./introduction";
import Skills from "./skillsVertical";
import AboutMe from "./aboutMe";
import WorkHistory from "./workHistory";
import Footer from "./footer";

import theme from "../theme";

const styles = {
	appContainer: {
		width: "100%",
		padding: "10vh 10vh 5vh",
		background: theme => theme.palette.site.background,
		[theme.breakpoints.down("lg")]: {
			padding: theme => theme.spacing(6)
		}
	},
	content: {
		maxWidth: "1250px",
		width: "100%"
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