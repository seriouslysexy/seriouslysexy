import React from "react";

import Box from "@mui/material/Box";

const styles = {
	horizAccentStyles: {
		position: "absolute",
		background: "rgba(255, 255, 255, 0.075)",
		transform: "rotate(3deg)",
		height: "100%",
		width: "calc(100% + 100vw)",
		left: "-50vw"
	}
};

function BGAccentHoriz() {
	return (
		<Box sx={styles.horizAccentStyles}></Box>
	);
}

export default BGAccentHoriz;