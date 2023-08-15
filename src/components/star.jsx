import React, { useState, useEffect } from "react";

import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";

import { pickOne, getRandomInRange, sleep } from "../lib/helpers";

const starData = {
	colors: {
		blue: "#007EFF",
		white: "#FFFFFF",
		yellow: "#FFFF00",
		orange: "#FF7F00",
		red: "#FF0000"
	},
	ranges: {
		blueWhite: {
			max: 30000,
			min: 9000
		},
		whiteYellow: {
			max: 9000,
			min: 5500
		},
		yellowOrange: {
			max: 5500,
			min: 4000
		},
		orangeRed: {
			max: 4000,
			min: 3000
		}
	}
}

function Star(props) {
	let minStartingSize = 175;
	let maxStartingSize = 280;
	let tempRanges = Object.keys(starData.ranges);
	let selectedTempRangeName = pickOne(tempRanges);
	let tempRange = starData.ranges[selectedTempRangeName]

	let startingTemp = getRandomInRange(tempRange.min, tempRange.max);
	let startingSize = getRandomInRange(minStartingSize, maxStartingSize);

	const [visible, setVisible] = useState(false);
	const [size, setSize] = useState(startingSize * .9);
	const [temp, setTemp] = useState(startingTemp);
	const [opacity, setOpacity] = useState(0);
	const [transitionSpeed, setTransitionSpeed] = useState("1");

	useEffect(() => {
		if (!visible && props.in) {
			formStar();
		} else if (visible && !props.in) {
			explodeStar();
		}
	}, [props.in]);

	const convertTempToColor = gradientFunc => {
		// blue <-> white <-> yellow <-> orange <-> red 
		// blue 		30000
		// white 		9000
		// yellow 	5500
		// orange 	4000
		// red 			3000

		let startColor, endColor, tempRangeMin, tempRangeMax;

		if (temp > 30000) { // use blue
			return starData.colors.blue;
		} else if (temp <= 30000 && temp > 9000) { // use blue <-> white gradient point
			startColor = starData.colors.white;
			endColor = starData.colors.blue;
			tempRangeMin = 9000;
			tempRangeMax = 30000;
		} else if (temp <= 9000 && temp > 5500) { // use white <-> yellow gradient point
			startColor = starData.colors.yellow;
			endColor = starData.colors.white;
			tempRangeMin = 5500;
			tempRangeMax = 9000;
		} else if (temp <= 5500 && temp > 4000) { // use yellow <-> orange gradient point
			startColor = starData.colors.orange;
			endColor = starData.colors.yellow;
			tempRangeMin = 4000;
			tempRangeMax = 5500;
		} else if (temp <= 4000 && temp > 3000) { // use orange <-> red gradient point
			startColor = starData.colors.red;
			endColor = starData.colors.orange;
			tempRangeMin = 3000;
			tempRangeMax = 4000;
		} else if (temp <= 3000) { // use red
			return starData.colors.red;
		}

		let pct = ((temp - tempRangeMin) * 100) / (tempRangeMax - tempRangeMin);
		return gradientFunc(startColor, endColor, pct);
	}

	const formStar = () => {
		console.log("Star calling formStar");
		setSize(startingSize);
		setVisible(true);
		setOpacity(1);
	}

	const explodeStar = async () => {
		console.log("Star calling explodeStar");
		await transitionToRedGiant();
		console.log("Star calling transitionToRedGiant");
		await transitionToNova();
		console.log("Star calling transitionToNova");
		setVisible(false);

		return;
	}

	const transitionToRedGiant = async () => {
		setTransitionSpeed("1.5");
		setSize(400);
		setTemp(starData.ranges.orangeRed.min);
		await sleep(1500);
	}

	const transitionToNova = async () => {
		setTransitionSpeed("1");
		setSize(500);
		setOpacity(0);
		setTemp(starData.ranges.blueWhite.min);
		await sleep(1000);
		setSize(125);
	}

	var baseStarStyles = {
		position: "absolute",
		top: 0,
		left: 0,
		bottom: 0,
		right: 0,
		margin: "auto",
		zIndex: 5000,
		borderRadius: "100%",
		transition: `
			background ${transitionSpeed}s linear 0s,
			height ${transitionSpeed}s linear 0s,
			width ${transitionSpeed}s linear 0s,
			opacity ${transitionSpeed}s linear 0s
		`,
		background: theme => convertTempToColor(theme.functions.getTransitionColor),
		height: size + "px",
		width: size + "px",
		opacity: opacity
	}

	return (
		<Fade in={props.in} appear={true} transition={baseStarStyles.transition} sx={{ ...baseStarStyles }}>
			<Box></Box>
		</Fade>
	);
}

export default Star;