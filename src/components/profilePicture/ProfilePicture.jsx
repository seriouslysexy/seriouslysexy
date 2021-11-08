import React from "react";

import { makeStyles } from '@mui/styles';

import Box from "@mui/material/Box";

import profilePicture from "../../static/img/profilepicture.jpg";

const useStyles = makeStyles(theme => ({
	imgStyles: {
		borderRadius: "100%",
		border: `3px solid ${theme.palette.primary.main}`,
		padding: "3px",
		height: "100%",
		width: "100%"
	}
}));


function ProfilePicture(props) {
	const classes = useStyles();

	const size = props.size || "250";
	const unit = props.unit || "px";
	const final = size + unit;

	return (<Box sx={{ width: final, height: final }} >
		<img src={profilePicture} className={classes.imgStyles} />
	</Box>);
}

export default ProfilePicture;