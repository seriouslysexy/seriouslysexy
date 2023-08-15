import React, { useState, useEffect } from "react";

import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";

import { pickOne, getRandomInRange, sleep } from "../lib/helpers";

const planetData = {
	colors: ["#41b56a", "#00adff", "#706b2c", "#9b5f43", "#ab284c", "#7651a7", "#364ce9", "#106d91", "#52e17e", "#b0c59d"],
	planetSizeRange: {
		min: 8,
		max: 25
	},
	orbitSizeRange: {
		min: 210,
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
	const [currentTarget, setCurrentTarget] = useState(2);
	const [currentLocation, setCurrentLocation] = useState(1);

	// lower left
	const goToPos1 = async () => {
		setXpos(orbitSize * -1);
		setYpos(orbitOffset * -1);
		setOrbitPositionSizeMod(1);
		await sleep(orbitSpeed / 4);
		setCurrentLocation(1);
	}

	// center front
	const goToPos2 = async () => {
		setXpos(0);
		setYpos(0);
		setOrbitPositionSizeMod(1.3);
		setZindex(5000 + orbitSize);
		await sleep(orbitSpeed / 4);
		setCurrentLocation(2);
	}

	// upper right
	const goToPos3 = async () => {
		setXpos(orbitSize);
		setYpos(orbitOffset);
		setOrbitPositionSizeMod(1);
		await sleep(orbitSpeed / 4);
		setCurrentLocation(3);
	}

	// center rear
	const goToPos4 = async () => {
		setXpos(0);
		setYpos(0);
		setOrbitPositionSizeMod(.7);
		setZindex(5000 - orbitSize);
		await sleep(orbitSpeed / 4);
		setCurrentLocation(4);
	}

	useEffect(async () => {
		// starts in lower left invisible
		// need to trigger movement start + fade in on load
		if (currentTarget === 1) {
			await goToPos1();
			setCurrentTarget(2);
		} else if (currentTarget === 2) {
			await goToPos2();
			setCurrentTarget(3);
		} else if (currentTarget === 3) {
			await goToPos3();
			setCurrentTarget(4);
		} else if (currentTarget === 4) {
			await goToPos4();
			setCurrentTarget(1);
		}
	}, [currentTarget]);

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
		<Fade
			in={props.in} // determines whether planet is visible or not
			appear={true} // MUI magic to force an element to fade when first added to DOM - conveniently also ensures smooth movement on first render that would be caused by css transition render issues
			timeout={1000} // length of the fade in/out transition in ms
			easing={basePlanetStyles.transition} // override the MUI default css transition
			onExited={props.deletePlanetFunc} // callback when the planet is finished fading so it can be removed from parent planetMap
			sx={basePlanetStyles} // actual styles of the planet
		>
			<Box></Box>
		</Fade>
	);
}

export default Planet;