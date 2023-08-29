import React from "react";

import Box from "@mui/material/Box";

import Introduction from "./introduction";
import AboutMe from "./aboutMe";
import Skills from "./skills";
import HireMe from "./hireMe";
import WorkHistory from "./workHistory";
import Footer from "./footer";

import theme from "../theme";

const styles = {
	appContainer: {
		width: "100%",
		padding: "10vh 10vh 5vh",
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
				<HireMe />
				<WorkHistory />
				<Footer />
			</Box>
		</Box>
	);
}

export default LayoutContainer;