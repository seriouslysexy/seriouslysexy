import { v4 as uuidv4 } from "uuid";
import React, { useState, useEffect } from "react";

import Box from "@mui/material/Box";

import Star from "./star";
import Planet from "./planet";

import { getRandomInRange, pickOne, sleep } from "../lib/helpers";

import theme from "../theme";
import useMediaQuery from '@mui/material/useMediaQuery';

const styles = {
	solarSystemContainer: {
		position: "absolute",
		top: "-45vh",
		left: 0,
		right: 0,
		bottom: 0,
		margin: "auto",
		opacity: ".5"
	}
};

function SolarSystem(props) {
	const [showStar, setShowStar] = useState(false);
	const [fadeAllPlanets, setFadeAllPlanets] = useState(false);
	const [planetMap, setPlanetMap] = useState({});
	const [solarPlan, setSolarPlan] = useState([]);
	const [solarPlanStep, setSolarPlanStep] = useState(null);
	const [starNumber, setStarNumber] = useState(0);

	const createSolarPlan = () => {
		let numberOfStepsToCreate = getRandomInRange(5, 9);
		let odds = ["add", "add", "add", "remove"];
		let numberOfPlanets = 0;
		let plan = [];

		// while (plan.length <= numberOfStepsToCreate) {
		// 	let addOrRemove;
		// 	if (numberOfPlanets === 0) {
		// 		addOrRemove = "add";
		// 	} else {
		// 		addOrRemove = pickOne(odds);
		// 	}

		// 	if (addOrRemove === "add") {
		// 		numberOfPlanets++;
		// 	} else {
		// 		numberOfPlanets--;
		// 	}
		// 	let delay = getRandomInRange(1000, 4000);
		// 	plan.push({ action: addOrRemove, delay });
		// }

		plan.push({ action: "createStar", predelay: 3000, postdelay: 3000 });
		// plan.push({ action: "addPlanet", postdelay: 3000 });
		// plan.push({ action: "addPlanet", postdelay: 3000 });
		// plan.push({ action: "addPlanet", postdelay: 3000 });
		// plan.push({ action: "addPlanet", postdelay: 3000 });
		// plan.push({ action: "addPlanet", postdelay: 3000 });
		// plan.push({ action: "removePlanet", postdelay: 3000 });
		// plan.push({ action: "addPlanet", postdelay: 3000 });
		// plan.push({ action: "addPlanet", postdelay: 3000 });
		// plan.push({ action: "removePlanet", postdelay: 3000 });
		// plan.push({ action: "removePlanet", postdelay: 3000 });
		// plan.push({ action: "addPlanet", postdelay: 3000 });
		plan.push({ action: "explode", postdelay: 5000 });

		console.log("setting this plan", plan);

		setSolarPlan(plan);
	}

	const followNextOnSolarPlan = async () => {
		let currentStep = solarPlan[solarPlanStep];
		console.log(`Following step #${solarPlanStep}:`, currentStep);

		if (!currentStep) {
			console.log("We've run out of steps, creating a new solar plan");
			return handleReset();
		}

		if (currentStep.predelay) {
			await sleep(currentStep.predelay);
		}

		if (currentStep.action === "createStar") {
			createStar();
		} else if (currentStep.action === "addPlanet") {
			addPlanet();
		} else if (currentStep.action === "removePlanet") {
			hidePlanet();
		} else if (currentStep.action === "explode") {
			explodeStar();
		}

		if (currentStep.postdelay) {
			await sleep(currentStep.postdelay);
		}

		if (currentStep.setStep) {
			setSolarPlanStep(currentStep.setStep);
		} else {
			setSolarPlanStep(old => old + 1);
		}
	}

	const handleReset = () => {
		setFadeAllPlanets(false);
		setStarNumber(old => old + 1);
		setPlanetMap({});
		createSolarPlan();
		setSolarPlanStep(0);
	}
	const createStar = () => {
		setShowStar(true);
	}

	const addPlanet = () => {
		// console.log("adding a planet", planetMap);
		let newPlanetUuid = uuidv4();
		let newPlanetMap = {
			...planetMap,
			[newPlanetUuid]: {
				key: newPlanetUuid,
				fade: false
			}
		};
		setPlanetMap(newPlanetMap);
		// console.log("done adding a planet", newPlanetMap);
	}

	const hidePlanet = () => {
		// console.log("hiding a planet", planetMap);
		let planetUuidToHide = pickOne(Object.keys(planetMap));

		// console.log("Picked this Uuid to hide", planetUuidToHide);
		// console.log("This is the planet that will be hidden", planetMap[planetUuidToHide]);

		let newPlanetMap = { ...planetMap };
		newPlanetMap[planetUuidToHide].fade = true;
		setPlanetMap(newPlanetMap);

		// console.log("faded a planet", newPlanetMap);
	}

	const deletePlanet = uuid => {
		// console.log("Deleting a planet from the planetMap", planetMap);
		let newPlanetMap = { ...planetMap };
		if (newPlanetMap[uuid]) {
			delete newPlanetMap[uuid];
			setPlanetMap(newPlanetMap);
		}
		// console.log("Deleted a planet", newPlanetMap);
	}

	const explodeStar = () => {
		setShowStar(false);
		setFadeAllPlanets(true);
	}

	useEffect(() => {
		followNextOnSolarPlan();
	}, []);

	useEffect(async () => {
		if (solarPlan.length) {
			await followNextOnSolarPlan();
		}
	}, [solarPlanStep]);

	return (
		<Box sx={ styles.solarSystemContainer } display="flex" flexDirection="row" alignItems="center" justifyContent="center">
			<Star in={showStar} />
			{Object.values(planetMap).map(p => { 
				return <Planet
					key={`planet${p.key}_for_star${starNumber}`}
					in={p.fade || fadeAllPlanets ? false : true }
					deletePlanetFunc={() => deletePlanet(p.key)}
				/>
			})}
		</Box>
	);
}

export default SolarSystem;