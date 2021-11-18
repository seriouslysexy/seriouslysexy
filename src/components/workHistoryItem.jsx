import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const styles = {
	titleContainer: {
		marginBottom: "6px",
		paddingBottom: "6px",
		borderBottom: theme => "3px solid " + theme.palette.primary.main
	},
	title: {
		fontSize: "2em"
	},
	subtitle: {
		fontSize: "1.1em"
	},
	listItem: {
	}
};

function WorkHistoryItem(props) {
	return (<Box>
		<Box sx={styles.titleContainer}>
			<Typography sx={styles.title} color="primary" variant="h2">Full-Stack Software Engineer</Typography>
			<Typography sx={styles.subtitle} variant="h3">ALTR / July 2016 - Present</Typography>
		</Box>
		<Box>
			<Box component="ul">
			<Box component="li" sx={styles.listItem}>
					<Typography>Creation and maintenance of an internal tool which has dramatically accelerated development and saved thousands of man-hours</Typography>
				</Box>
				<Box component="li" sx={styles.listItem}>
					<Typography>Development and maintenance on 10+ distinct NodeJS microservices</Typography>
				</Box>
				<Box component="li" sx={styles.listItem}>
					<Typography>Collaborated to rewrite and maintain a full-fledged GUI from AngularJS (v1) to ReactJS</Typography>
				</Box>
				<Box component="li" sx={styles.listItem}>
					<Typography>Coordinated with engineering and product teams to architect and implement solutions that meet the requirements of all parties</Typography>
				</Box>
				<Box component="li" sx={styles.listItem}>
					<Typography>Management of 3 MySQL database schemas including forward migration deployment guides</Typography>
				</Box>
			</Box>
		</Box>
	</Box>);
}

export default WorkHistoryItem;