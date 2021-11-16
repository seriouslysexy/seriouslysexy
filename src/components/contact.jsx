import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const styles = {};

function Contact(props) {
	return (<Box display="flex" flexDirection="column" alignItems="center" justifyContent="flex-start">
		<Typography textAlign="left" width="100%">Contact</Typography>
		<Box display="flex" flexDirection="row" flexWrap="nowrap" width="100%"><Typography color="primary">ICON</Typography><Typography>Email</Typography></Box>
		<Box display="flex" flexDirection="row" flexWrap="nowrap" width="100%"><Typography color="primary">ICON</Typography><Typography>GitHub</Typography></Box>
		<Box display="flex" flexDirection="row" flexWrap="nowrap" width="100%"><Typography color="primary">ICON</Typography><Typography>LinkedIn</Typography></Box>
	</Box>);
}

export default Contact;