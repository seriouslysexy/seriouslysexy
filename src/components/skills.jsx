import React from "react";

import { makeStyles, useTheme } from '@mui/styles';

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const useStyles = makeStyles(theme => ({
	primaryHeader: {
		fontSize: "6em"
	},
	secondaryHeader: {
		fontSize: "2.25em"
	},
	tertiaryHeader: {
		fontSize: "1.1em"
	}
}));

const expert = ["NodeJS", "ReactJS"];
const experienced = ["MySQL", "Git", "Docker"];
const comfortable = ["Mocha/Sinon", "AWS", "MongoDB", "RabbitMQ", "nginx", "gRPC"];
const beginner = ["Golang"];

function Skills(props) {
	const classes = useStyles();
	const theme = useTheme();

	let skills = [...expert, ...experienced, ...comfortable, ...beginner];

	return (<Box>
		<Typography>Technical Experience</Typography>
		<Box display="flex">
			{skills.map((skill, idx) => {
				let pct = Math.round((idx / skills.length) * 100);
				let color = theme.functions.getTransitionColor(theme.palette.primary.main, theme.palette.secondary.main, pct);
				return <Typography style={{color: color}}>{skill}</Typography>
			})}
		</Box>
	</Box>);
}

export default Skills;