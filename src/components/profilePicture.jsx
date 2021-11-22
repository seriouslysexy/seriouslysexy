import React from "react";

import Box from "@mui/material/Box";

import theme from "../theme";
import useMediaQuery from '@mui/material/useMediaQuery';

import profilePicture from "../static/img/profilepicture.jpg";

const styles = {
	imgStyles: {
		borderRadius: "3px",
		border: theme => `3px solid ${theme.palette.primary.main}`,
		padding: "3px",
		height: "100%",
		width: "100%"
	}
};

function ProfilePicture(props) {
	let useMobileLayout = useMediaQuery(theme.breakpoints.down("md"));

	const size = props.size || "250";
	const unit = props.unit || "px";
	const final = size + unit;

	return (<Box sx={{ width: final, height: final, margin: useMobileLayout ? theme.spacing(3) : "0" }}>
		<Box component="img" src={profilePicture} sx={styles.imgStyles} />
	</Box>);
}

export default ProfilePicture;