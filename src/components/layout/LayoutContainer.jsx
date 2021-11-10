import React from "react";

import Box from "@mui/material/Box";

// import { makeStyles } from '@mui/styles';

import ProfilePicture from "../profilePicture/ProfilePicture";
import Introduction from "../introduction";
import Skills from "../skills";

// const useStyles = makeStyles({
// 	outerContentContainerStyles: {
// 		height: "100%",
// 		width: "100%",
// 		display: "block",
// 		position: "relative",
// 		textAlign: "center"
// 	},
// 	innerContentContainer: {
// 		height: "100%",
// 		width: "80%",
// 		maxWidth: "1400px",
// 		display: "block",
// 		position: "relative",
// 	}
// });

function LayoutContainer() {
	// const classes = useStyles();

	return (
		<Box height="100%" width="100%" display="flex" flexDirection="row" justifyContent="center" alignItems="flex-start">
			<Box height="100%" width="80%" maxWidth="1200px" display="flex" flexDirection="row" justifyContent="center" alignItems="flex-start">
				<Box className="leftContent">
					<ProfilePicture />
					<div>navigation?</div>
					<div>contact info</div>
				</Box>
				<Box className="rightContent">
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