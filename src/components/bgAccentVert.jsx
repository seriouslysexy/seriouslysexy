import React from "react";

import Box from "@mui/material/Box";

const styles = {
	vertAccentStyles: {
		position: "absolute",
		background: "rgba(255, 255, 255, 0.075)",
		transform: "rotate(-3deg)",
		transformOrigin: "bottom left",
		height: "110%",
		width: "15%",
		top: "0",
		left: "0"
	}
};

function BGAccentVert() {
	return (
		<Box sx={styles.vertAccentStyles}></Box>
	);
}

export default BGAccentVert;