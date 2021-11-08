import React from "react";

import { useTheme } from '@mui/material/styles';

import Box from "@mui/material/Box";

import profilePicture from "../../static/img/profilepicture.jpg";

function ProfilePicture(props) {
	const size = props.size || "250";
	const unit = props.unit || "px";
	const final = size + unit;

	const theme = useTheme();

	const imgStyles = {
		borderRadius: "100%",
		border: `3px solid ${theme.palette.primary.main}`,
		padding: "3px",
		height: "100%",
		width: "100%"
	}

	return (<Box sx={{ width: final, height: final }} >
		<img src={profilePicture} style={imgStyles} />
	</Box>);
}

export default ProfilePicture;