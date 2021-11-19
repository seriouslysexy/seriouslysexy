import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const styles = {
	workHistoryItem: {
		marginBottom: theme => theme.spacing(3),
		paddingBottom: "6px",
		borderBottom: theme => "3px solid " + theme.palette.primary.main
	},
	titleContainer: {
		marginBottom: "6px",
		paddingBottom: "6px",
		borderBottom: theme => "1px solid " + theme.palette.primary.main
	},
	title: {
		fontSize: "2em"
	},
	subtitle: {
		fontSize: "1.1em"
	},
	listItems: {
		margin: "0",
		paddingLeft: theme => theme.spacing(3)
	},
	listItem: {
	}
};

function WorkHistoryItem(props) {
	return (<Box sx={styles.workHistoryItem}>
		<Box sx={styles.titleContainer}>
			<Typography sx={styles.title} color="primary" variant="h2">{ props.position }</Typography>
			<Typography sx={styles.subtitle} variant="h3">{ props.employer } / { props.date }</Typography>
		</Box>
		<Box component="ul" sx={styles.listItems}>
			{props.responsibilities.map((resp, idx) => {
				return (
					<Box key={"resp_" + props.employer + "_" + idx} component="li" sx={styles.listItem}>
						<Typography>{ resp }</Typography>
					</Box>
				);
			})}
		</Box>
	</Box>);
}

export default WorkHistoryItem;