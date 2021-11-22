import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import StyledLink from "./styledLink";

const styles = {
	contactContainer: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center"
	},
	iconStyles: {

	},
	contactText: {

	}
};

function Contact(props) {
	return (<Box display="flex" flexDirection="row" alignItems="center" justifyContent="center">
		<StyledLink href="mailto:eli@seriously.sexy" extraStyles={styles.contactContainer}>
			<Box component="svg" width="24px" height="24px" viewBox="0 0 24 24" mr="6px">
			<path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/>
			</Box>
			<Typography sx={styles.iconStyles}>Email</Typography>
		</StyledLink>
		<StyledLink href="https://github.com/seriouslysexy" target="github" extraStyles={styles.contactContainer}>
			<Box component="svg" width="24px" height="24px" viewBox="0 0 24 24" mr="6px">
				<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
			</Box>
			<Typography sx={styles.iconStyles}>Github</Typography>
		</StyledLink>
		<StyledLink href="https://TODO" target="linkedin" extraStyles={styles.contactContainer}>
			<Box component="svg" width="24px" height="24px" viewBox="0 0 24 24" mr="6px">
				<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
			</Box>
			<Typography sx={styles.iconStyles}>LinkedIn</Typography>
		</StyledLink>
	</Box>);
}

export default Contact;