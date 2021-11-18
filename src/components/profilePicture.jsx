import React from "react";

import Box from "@mui/material/Box";

import profilePicture from "../static/img/profilepicture.jpg";

const styles = {
	imgStyles: {
		borderRadius: "100%",
		border: theme => `3px solid ${theme.palette.primary.main}`,
		padding: "3px",
		height: "100%",
		width: "100%"
	}
};


function ProfilePicture(props) {
	const size = props.size || "250";
	const unit = props.unit || "px";
	const final = size + unit;

	return (<Box sx={{ width: final, height: final }} >
		<Box component="img" src={profilePicture} sx={styles.imgStyles} />
	</Box>);
}

export default ProfilePicture;