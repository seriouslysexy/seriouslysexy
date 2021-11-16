import React from "react";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const styles = {
	primaryHeader: {
		fontSize: "6em"
	},
	secondaryHeader: {
		fontSize: "2.25em"
	},
	tertiaryHeader: {
		fontSize: "1.1em"
	},
	legend: {
		width: "100%",
		position: "relative",
		padding: "6px",
		margin: "6px"
	},
	arrow: {
		width: "0",
		height: "0",
		borderTop: "10px solid transparent",
		borderBottom: "10px solid transparent",
	},
	leftArrow: {
		borderRight: (theme) => "10px solid " + theme.palette.primary.main
	},
	rightArrow: {
		borderLeft: (theme) => "10px solid " + theme.palette.secondary.main
	},
	label: {
		position: "absolute",
		fontWeight: "bold",
		padding: "4px",
		margin: "4px",
		borderRadius: "3px",
	},
	leftLabel: {
		left: "35px",
		background: (theme) => theme.palette.primary.main
	},
	rightLabel: {
		right: "35px",
		background: (theme) => theme.palette.secondary.main
	},
	line: {
		flex: "1",
		height: "4px",
		background: (theme) => `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`
	},
	skills: {
		padding: "20px 10px"
	},
	skillBubble: {
		display: "inline-block",
		fontWeight: "bold",
		padding: "4px",
		margin: "4px",
		borderRadius: "3px"
	}
};

const expert = ["NodeJS", "ReactJS"];
const experienced = ["MySQL", "Git", "Docker"];
const comfortable = ["Mocha/Sinon", "AWS", "MongoDB", "RabbitMQ", "nginx", "gRPC"];
const beginner = ["Golang"];

function SkillsHorizontal(props) {
	let skills = [...expert, ...experienced, ...comfortable, ...beginner];

	return (<Box>
		<Typography>Technical Experience</Typography>
		<Grid container flexDirection="column">
			<Grid sx={styles.legend} item container flexDirection="row" flexWrap="nowrap" alignItems="center" justifyContent="space-between">
				<div sx={{...styles.arrow, ...styles.leftArrow}} />
				<Typography sx={{...styles.label, ...styles.leftLabel}}>Extremely Familiar</Typography>
				<div sx={styles.line}></div>
				<Typography sx={{...styles.label, ...styles.rightLabel}}>Hello World</Typography>
				<div sx={{...styles.arrow, ...styles.rightArrow}} />
			</Grid>
			<Grid sx={styles.skills} item container flexDirection="row" flexWrap="nowrap" alignItems="center" justifyContent="space-between">
				{skills.map((skill, idx) => {
					let pct = Math.round((idx / (skills.length - 1)) * 100);
					return <Typography
						key={"tech-skill" + idx}
						sx={{
							...styles.skillBubble,
							background: (theme) => theme.functions.getTransitionColor(theme.palette.primary.main, theme.palette.secondary.main, pct)
						}}>
							{skill}
						</Typography>
				})}
			</Grid>
		</Grid>
	</Box>);
}

export default SkillsHorizontal;