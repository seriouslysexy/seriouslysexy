import React from "react";

import Box from "@mui/material/Box";

import WorkHistoryItem from "./workHistoryItem";

const styles = {
};

const workHistoryArray = [
	{
		position: "SWE III -> Senior Software Engineer",
		employer: "FloQast",
		date: "February 2024 - Current",
		responsibilities: [
			"Planned and lead the development of the first Compliance BU external API, achieving feature parity with the internal API while significantly improving performance and unlocking new integrations",
			"Guided the implementation for internationalization in the Compliance BU, introducing patterns for supporting consistent translations and behavior across disparate UIs and APIs",
			"Participated in interviews and hiring committee calls and provided mentorship to junior engineers to ensure consistent performance and rapid growth",
			"Completed vendor comparisons to ensure the functional needs of the entire organization are met"
		],
	},
	{
		position: "Full-Stack Software Engineer",
		employer: "ALTR",
		date: "July 2016 - July 2023",
		responsibilities: [
			"Automated thousands of labor hours and dramatically improved integration testing experience by independently creating an internal developer tool supported by Terraform",
			"Enabled the 2nd largest deal in company history by reworking a proprietary authentication system to become SAML2.0 compliant, supporting SSO and SCIM through Okta and Azure Active Directory",
			"Ended a code freeze and provided a reliable foundation for future UI development by conducting a GUI rewrite from end-of-life AngularJS v1 to React without disrupting end-user experience",
			"Renovated and fully documented Protocol Buffer interface classes that are used by more than half of ALTR microservices",
			"Reduced write rejections of Mongo objects with nebulous content to zero by updating Mongoose schemas to be durable, flexible, and extensible",
			"Maximized value in planning stages by recommending priority for the highest impact features that required the least effort and identifying less important items that required more resources",
			"Avoided functional duplication and preserved separation of concerns in a microservice architecture by ensuring that applications were lean, legible, and single-purpose",
			"Mitigated manual MariaDB schema update errors entirely by automating forward and backward migrations and writing step-by-step manual migration guides",
			"Maintained alignment on product expectations, delivery dates, and team capacity by clearly and effectively communicated technical details to non-technical executive, design, and product teams"
		],
	},
	{
		position: "IT Tech -> Frontend Developer",
		employer: "Apartments247",
		date: "October 2012 - June 2016",
		responsibilities: [
			"Pushed for early adoption of new standards like flexbox, responsive design, SCSS mixins, and SVGs",
			"Decreased customer support calls by half by creating a comprehensive quality control manual for standardized delivery expectations and training employees on how to apply it",
			"Reliably produced responsive, high-performance templates that perfectly matched mockups across all target devices and screen dimensions without compromising technical optimization",
			"Coordinated directly with highest-profile executive clients to produce completely custom layouts for their corporate-level web presence"
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