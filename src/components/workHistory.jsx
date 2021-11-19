import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import WorkHistoryItem from "./workHistoryItem";

const styles = {
};

const workHistoryArray = [
	{
		position: "Full-Stack Software Engineer",
		employer: "ALTR",
		date: "July 2016 - Present",
		responsibilities: [
			"Creation and maintenance of an internal tool which has dramatically accelerated development and saved thousands of man-hours",
			"Development and maintenance on 10+ distinct NodeJS microservices",
			"Collaborated to rewrite and maintain a full-fledged GUI from AngularJS (v1) to ReactJS",
			"Coordinated with engineering and product teams to architect and implement solutions that meet the requirements of all parties",
			"Management of 3 MySQL database schemas including forward migration deployment guides"
		],
	}
];

function WorkHistory(props) {
	return (<Box sx={styles.workHistoryContainer}>
		{workHistoryArray.map((historyItemProps) => {
			return <WorkHistoryItem key={"workHistoryItem_" + props.employer} {...historyItemProps} />
		})}
	</Box>);
}

export default WorkHistory;