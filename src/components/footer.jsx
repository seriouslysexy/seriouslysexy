import React from "react";

import Box from "@mui/material/Box";

import StyledLink from "./styledLink";
import Contact from "./contact";

const styles = {
	footerContainer: {}
};

function Footer(props) {
	return (<Box sx={styles.footerContainer} display="flex" flexDirection="column" alignItems="center" justifyContent="center">
		<StyledLink href="https://github.com/seriouslysexy/seriouslysexy" target="github">Designed and built by me</StyledLink>
		<Contact />
	</Box>);
}

export default Footer;