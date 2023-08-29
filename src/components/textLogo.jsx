import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import "../static/fonts/chiptune_valentine_regular.css";

// console.log("HI", ChiptuneValentine);

const styles = {
	seriously: {
		fontFamily: "Chiptune Valentine",
		position: "absolute",
		top: "0px",
		left: "-30px",
		fontSize: "4em",
	},
	sexy: {
		fontFamily: "Chiptune Valentine",
		top: "10px",
		left: "0px",
		fontSize: "9em",
	}
};

function TextLogo() {
	return (<Box mb={"100px"}>
		<Typography sx={styles.seriously} color="primary">seriously</Typography>
		<Typography sx={styles.sexy} color="secondary">sexy</Typography>
	</Box>);
}

export default TextLogo;