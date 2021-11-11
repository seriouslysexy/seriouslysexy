import React from "react";

import Box from "@mui/material/Box";

import { makeStyles } from '@mui/styles';

import ProfilePicture from "../profilePicture/ProfilePicture";
import Introduction from "../introduction";
import Skills from "../skills";

const useStyles = makeStyles({
	leftContent: {
		height: "100%",
		paddingRight: "50px",
		position: "relative",
		"&::before": {
			content: "''",
			display: "block",
			position: "absolute",
			height: "200%",
			top: "-50%",
			width: "100vh",
			right: "0",
			background: "rgba(255, 255, 255, .3)",
			zIndex: "-1"
		}
	},
	rightContent: {
		height: "100%",
		paddingLeft: "50px"
	}
});

function LayoutContainer() {
	const classes = useStyles();

	return (
		<Box p="10vh" height="100%" width="100%" display="flex" flexDirection="row" justifyContent="center" alignItems="flex-start">
			<Box height="100%" width="80%" maxWidth="1200px" display="flex" flexDirection="row" justifyContent="center" alignItems="flex-start">
				<Box className={classes.leftContent}>
					<ProfilePicture />
					<div>navigation?</div>
					<div>contact info</div>
				</Box>
				<Box className={classes.rightContent}>
					<Introduction />
					<Skills />
					<div>professional introduction</div>
					<div>ALTR</div>
					<div>Apartments247</div>
					<div>Mastertech</div>
					<div>Personal projects, tinkering, childhood, etc</div>
					<div>Footer, contact info, closing</div>
				</Box>
			</Box>
		</Box>
	);
}

export default LayoutContainer;