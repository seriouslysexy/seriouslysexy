import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const styles = {
	title: {
		fontSize: "2em"
	},
	legend: {
		width: "100%",
		minWidth: "1050px",
		maxWidth: "1250px",
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
		borderRight: theme => "10px solid " + theme.palette.primary.main
	},
	rightArrow: {
		borderLeft: theme => "10px solid " + theme.palette.secondary.main
	},
	label: {
		position: "absolute",
		fontWeight: "bold",
		padding: "4px 12px",
		margin: "4px",
		borderRadius: "3px",
	},
	leftLabel: {
		left: "35px",
		background: theme => theme.palette.primary.main
	},
	rightLabel: {
		right: "35px",
		background: theme => theme.palette.secondary.main
	},
	line: {
		flex: "1",
		height: "4px",
		background: theme => `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`
	},
	skills: {
		padding: "10px"
	},
	skillBubble: {
		display: "inline-block",
		fontWeight: "bold",
		padding: "4px 8px",
		margin: "4px",
		borderRadius: "3px"
	}
};

const expert = ["NodeJS", "ReactJS"];
const experienced = ["MySQL", "Git", "Docker"];
const comfortable = ["Mocha/Sinon", "AWS", "MongoDB", "Redis", "RabbitMQ", "nginx", "gRPC"];
const beginner = ["Golang"];

function SkillsHorizontal(props) {
	let skills = [...expert, ...experienced, ...comfortable, ...beginner];

	return (<Box mb={theme => theme.spacing(6)}>
		<Typography sx={styles.title} color="primary" variant="h2">Technical Experience</Typography>
		<Box display="flex" flexDirection="column" alignItems="center" justifyContent="flex-start">
			<Box sx={styles.legend} display="flex" flexDirection="row" flexWrap="nowrap" alignItems="center" justifyContent="space-between">
				<Box sx={{...styles.arrow, ...styles.leftArrow}} />
				<Typography sx={{...styles.label, ...styles.leftLabel}}>Extremely Familiar</Typography>
				<Box sx={styles.line} />
				<Typography sx={{...styles.label, ...styles.rightLabel}}>Hello World</Typography>
				<Box sx={{...styles.arrow, ...styles.rightArrow}} />
			</Box>
			<Box sx={styles.skills} display="flex" flexDirection="row" flexWrap="nowrap" alignItems="center" justifyContent="space-between">
				{skills.map((skill, idx) => {
					let pct = Math.round((idx / (skills.length - 1)) * 100);
					return <Typography
						key={"tech-skill" + idx}
						sx={{
							...styles.skillBubble,
							background: theme => theme.functions.getTransitionColor(theme.palette.primary.main, theme.palette.secondary.main, pct)
						}}>
							{skill}
						</Typography>
				})}
			</Box>
		</Box>
	</Box>);
}

export default SkillsHorizontal;