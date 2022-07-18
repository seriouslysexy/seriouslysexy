import React, { useState, useEffect } from "react";

import Box from "@mui/material/Box";

import { pickOne, getRandomInRange } from "../lib/helpers";

const planetData = {
	colors: ["#41b56a", "#00adff", "#706b2c", "#9b5f43", "#ab284c", "#7651a7", "#364ce9", "#106d91", "#52e17e", "#b0c59d"],
	planetSizeRange: {
		min: 8,
		max: 25
	},
	orbitSizeRange: {
		min: 180,
		max: 800
	},
	orbitSpeedRange: {
		min: 4000,
		max: 12000
	},
	orbitOffsetRange: {
		min: -60,
		max: -250
	}
}

console.log(pickOne(planetData.colors));

function Planet(props) {
	const [color, setColor] = useState(props.color || pickOne(planetData.colors));
	const [planetSize, setPlanetSize] = useState(props.planetSize || getRandomInRange(planetData.planetSizeRange.min, planetData.planetSizeRange.max));
	const [orbitSize, setOrbitSize] = useState(props.orbitSize || getRandomInRange(planetData.orbitSizeRange.min, planetData.orbitSizeRange.max));
	const [orbitPositionSizeMod, setOrbitPositionSizeMod] = useState(1);
	const [orbitSpeed, setOrbitSpeed] = useState(props.orbitSpeed || getRandomInRange(planetData.orbitSpeedRange.min, planetData.orbitSpeedRange.max));
	const [orbitOffset, setOrbitOffset] = useState(props.orbitOffset || getRandomInRange(planetData.orbitOffsetRange.min, planetData.orbitOffsetRange.max));
	const [xpos, setXpos] = useState(orbitSize * -1);
	const [ypos, setYpos] = useState(orbitOffset * -1);
	const [zIndex, setZindex] = useState(5000);
	const [transitionStyles, setTransitionStyles] = useState({});

	const setQ1Pos = async () => {
		setXpos(orbitSize * -1);
		setYpos(orbitOffset * -1);
		setOrbitPositionSizeMod(1);
		await new Promise(resolve => setTimeout(resolve, (orbitSpeed / 4)));
	}

	const setQ2Pos = async () => {
		setXpos(0);
		setYpos(0);
		setOrbitPositionSizeMod(1.3);
		setZindex(5000 + orbitSize);
		await new Promise(resolve => setTimeout(resolve, (orbitSpeed / 4)));
	}

	const setQ3Pos = async () => {
		setXpos(orbitSize);
		setYpos(orbitOffset);
		setOrbitPositionSizeMod(1);
		await new Promise(resolve => setTimeout(resolve, (orbitSpeed / 4)));
	}

	const setQ4Pos = async () => {
		setXpos(0);
		setYpos(0);
		setOrbitPositionSizeMod(.7);
		setZindex(5000 - orbitSize);
		await new Promise(resolve => setTimeout(resolve, (orbitSpeed / 4)));
	}

	const startOrbit = async () => {
		while (true) {
			await setQ2Pos();
			await setQ3Pos();
			await setQ4Pos();
			await setQ1Pos();
		}
	}

	useEffect(() => {
		startOrbit();
		// setQ1Pos();
	}, []);

	useEffect(() => {
		if (props.shouldFade) {
			setTransitionStyles({ opacity: 0 });
		}
	}, [props.shouldFade]);

	var basePlanetStyles = {
		position: "absolute",
		borderRadius: "100%",
		transition: `
			left ${((orbitSpeed / 1000) / 4)}s linear 0s,
			right ${((orbitSpeed / 1000) / 4)}s linear 0s,
			top ${((orbitSpeed / 1000) / 4)}s linear 0s,
			bottom ${((orbitSpeed / 1000) / 4)}s linear 0s,
			transform ${((orbitSpeed / 1000) / 4)}s linear 0s,
			opacity 1s linear 0s
		`,
		background: color,
		height: `${planetSize}px`,
		width: `${planetSize}px`,
		top: `${ypos}px`,
		left: `${xpos}px`,
		bottom: 0,
		right: 0,
		margin: "auto",
		zIndex: zIndex,
		transform: `scale(${orbitPositionSizeMod})`
	}

	return (
		<Box sx={{ ...basePlanetStyles, ...transitionStyles }}></Box>
	);
}

export default Planet;