import React, { useState, useEffect } from "react";

import Box from "@mui/material/Box";

import Star from "./star";
import Planet from "./planet";

import theme from "../theme";
import useMediaQuery from '@mui/material/useMediaQuery';

const styles = {
	solarSystemContainer: {
		position: "absolute",
		top: "-30vh",
		left: 0,
		right: 0,
		bottom: 0,
		margin: "auto",
		opacity: ".5"
	}
};

function SolarSystem(props) {

	const [starExpiration, setStarExpiration] = useState(false);
	const [fadePlanets, setFadePlanets] = useState(false);

	const planets = [1,2,3,4,5,6];

	useEffect(() => {
		setTimeout(() => {
			setStarExpiration(true);
		}, 10000);
	});

	return (
		<Box sx={ styles.solarSystemContainer } display="flex" flexDirection="row" alignItems="center" justifyContent="center">
			<Star shouldExit={starExpiration} setFadePlanets={setFadePlanets} />
			{planets.map((planet, idx) => {
				return <Planet key={"planet_" + idx} shouldFade={fadePlanets} />
			})}
		</Box>
	);
}

export default SolarSystem;