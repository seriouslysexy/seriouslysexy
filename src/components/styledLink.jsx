import React from "react";

import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

const styles = {
	styledLink: {
		padding: theme => theme.spacing(1) + " " + theme.spacing(2),
		color: theme => theme.palette.common.white,
		fill: theme => theme.palette.common.white,
		transition: "color .3s ease 0s, fill .3s ease 0s",
		":hover": {
			color: theme => theme.palette.primary.main,
			fill: theme => theme.palette.primary.main
		}
	}
};

function StyledLink(props) {
	let extraStyles = props.extraStyles || {};
	return (<Link sx={{ ...styles.styledLink, ...extraStyles }} href={ props.href } target={ props.target || "_blank" } underline="none">{ props.children }</Link>);
}

export default StyledLink;