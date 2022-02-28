import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const styles = {
	title: {
		fontSize: "2em"
	},
	legend: {
		minWidth: "200px",
		position: "relative",
		padding: "6px",
		margin: "6px"
	},
	arrow: {
		width: "0",
		height: "0",
		borderLeft: "10px solid transparent",
		borderRight: "10px solid transparent",
	},
	upArrow: {
		borderBottom: theme => "10px solid " + theme.palette.primary.main
	},
	downArrow: {
		borderTop: theme => "10px solid " + theme.palette.secondary.main
	},
	label: {
		position: "absolute",
		fontWeight: "bold",
		padding: "4px 12px",
		margin: "4px",
		borderRadius: "3px",
	},
	topLabel: {
		top: "25px",
		background: theme => theme.palette.primary.main
	},
	bottomLabel: {
		bottom: "25px",
		background: theme => theme.palette.secondary.main
	},
	line: {
		flex: "1",
		width: "4px",
		background: theme => `linear-gradient(to bottom, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`
	},
	exposure: {
		// todo: specificity
		fontSize: "1.5em"
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

function SkillsHorizontal(props) {
	const skills = {
		expert: {
			exposure: "4-5+ years",
			subjects: ["NodeJS", "ReactJS", "Git", "MySQL", "Docker"]
		},
		experienced: {
			exposure: "2-4 years",
			subjects: ["Protocol Buffers", "AWS", "MongoDB", "RabbitMQ", "Redis"]
		},
		comfortable: {
			exposure: "0-2 years",
			subjects: ["Mocha/Sinon", "gRPC", "nginx", "golang"]
		}
	};

	const skillsLength = Object.values(skills).map((o) => o.subjects ).flat().length;
	let skillColorIdx = 0;

	return (<Box mb={theme => theme.spacing(6)}>
		<Typography sx={styles.title} color="primary" variant="h2">Technical Experience</Typography>
		<Box display="flex" flexDirection="row" flexWrap="nowrap" alignItems="left" justifyContent="flex-start">
			<Box sx={styles.legend} display="flex" flexDirection="column" flexWrap="nowrap" alignItems="center" justifyContent="space-between">
				<Box sx={{...styles.arrow, ...styles.upArrow}} />
				<Typography sx={{...styles.label, ...styles.topLabel}}>Extremely Familiar</Typography>
				<Box sx={styles.line} />
				<Typography sx={{...styles.label, ...styles.bottomLabel}}>Hello World</Typography>
				<Box sx={{...styles.arrow, ...styles.downArrow}} />
			</Box>
			<Box sx={styles.skills} display="flex" flexDirection="column" alignItems="left" justifyContent="space-between">
				{Object.keys(skills).map((skillLevel) => {
					return <Box key={"skill-level-container-" + skillLevel}>
						<Typography variant="h2" sx={styles.exposure}>{skills[skillLevel].exposure}</Typography>
						{skills[skillLevel].subjects.map((skill) => {
							let pct = Math.round((skillColorIdx / (skillsLength - 1)) * 100);
							skillColorIdx++;
							return <Typography
								key={"tech-skill" + skillColorIdx}
								sx={{
									...styles.skillBubble,
									background: theme => theme.functions.getTransitionColor(theme.palette.primary.main, theme.palette.secondary.main, pct)
								}}>
									{skill}
							</Typography>
						})}
					</Box>
				})}
			</Box>
		</Box>
	</Box>);
}

export default SkillsHorizontal;