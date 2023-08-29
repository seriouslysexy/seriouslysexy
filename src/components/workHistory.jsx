import React from "react";

import Box from "@mui/material/Box";

import WorkHistoryItem from "./workHistoryItem";

const styles = {
};

const workHistoryArray = [
	{
		position: "Full-Stack Software Engineer",
		employer: "ALTR",
		date: "July 2016 - July 2023",
		responsibilities: [
			"Independently planned and implemented major revisions to a proprietary authentication system to facilitate SSO compatibility (SAML2.0)",
			"Created and maintained an internal tool which dramatically accelerated development company-wide and automated thousands of man-hours of labor",
			"Contributed to the development and maintenance of 10+ distinct NodeJS microservices",
			"Collaborated with team members, product managers, and executive stakeholders to plan and deliver a complete rewrite of a full-fledged GUI from AngularJS (v1) to React",
			"Regularly coordinated with engineering and product teams to architect and implement solutions that meet the requirements of all parties and meet delivery dates",
			"Managed three MySQL database schemas including forward migration deployment guides"
		],
	},
	{
		position: "Frontend Developer",
		employer: "Apartments247",
		date: "October 2012 - June 2016",
		responsibilities: [
			"Coordinated with creative director to create premium, extendable templates to establish online apartment community portfolios for national real estate management agencies",
			"Communicated directly with clients and internal designers to build fully responsive, custom sites that match mockups on all devices and screen sizes",
			"Created a highly-detailed, comprehensive quality control manual and trained employees and teams to enforce it",
			"Started in IT - managed DNS, FTP servers, and media storage for 5000+ individual apartment communities"
		],
	},
	{
		position: "PC Troubleshooting and Repair",
		employer: "Mastertech Computers",
		date: "April 2012 - October 2012",
		responsibilities: [
			"Successfuly diagnosed and repaired software and hardware issues on a wide variety of desktop and laptop computers",
			"Exceeded company and customer expecations by optimizing task order without compromising delivery on high-priority items",
			"Ensured customer satisfaction by maintaining communication throughout the repair process and scheduling convenient drop-off and pick-up times"
		],
	}
];

function WorkHistory(props) {
	return (<Box sx={styles.workHistoryContainer}>
		{workHistoryArray.map((historyItemProps) => {
			return <WorkHistoryItem key={"workHistoryItem_" + historyItemProps.employer} {...historyItemProps} />
		})}
	</Box>);
}

export default WorkHistory;