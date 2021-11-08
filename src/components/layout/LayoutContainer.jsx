import React from "react";

import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import ProfilePicture from "../profilePicture/ProfilePicture";

class LayoutContainer extends React.Component {
	render() {
		return (
			<Box className="outerContentContainer">
				<Box className="innerContentContainer">
					<Box className="leftContent">
						<ProfilePicture />
						<div>introduction blurb/short summary</div>
						<div>contact info</div>
					</Box>
					<Box className="rightContent">
						<div>major header</div>
						<div>professional introduction</div>
						<div>ALTR</div>
						<div>Apartments247</div>
						<div>Mastertech</div>
						<div>Personal projects, tinkering, childhood, etc</div>
						<div>Footer, contact info, closing</div>
					</Box>
				</Box>
			</Box>
		)
	}
}

export default LayoutContainer;