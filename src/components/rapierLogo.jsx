import React, { useRef, useState, useEffect } from 'react';

import { DirectionalLightHelper } from "three";
import { Text3D, useHelper, RoundedBox } from '@react-three/drei';
import { Canvas, useThree } from '@react-three/fiber';
import { Physics, RigidBody, CuboidCollider } from '@react-three/rapier';

import Box from "@mui/material/Box";

import ChiptuneValentine from "../static/fonts/chiptune_valentine_regular.json";
import theme from "../theme";

const styles = {
	container: {
		position: "fixed",
		height: "100%",
		width: "100%",
		top: 0,
		left: 0
	}
};

function Light({ debug=false, position=[0,0,0], color="white", intensity=50, ...rest }) {
	let ref;
	if (debug) {
		ref = useRef();
		useHelper(ref, DirectionalLightHelper, intensity, color);
	}

	return <directionalLight castShadow position={position} color={color} intensity={intensity} ref={ref} />
}

function Character3D({ character, forceRange, color="#fff", colliders="cuboid", scale=1, position=[0,0,0], textOptions, ...rest }) {
	let ref = useRef();

	const forceStrength = () => {
		const precision = 10000;
		let min = forceRange[0], max = forceRange[1];
		let scaledMin = precision * min, scaledMax = precision * max;
		let val = ((Math.random() * (scaledMax - scaledMin)) + scaledMin) / precision;
		let isNeg = Boolean(Math.round(Math.random()));
		if (isNeg) {
			val = val * -1;
		}

		// console.log("Generated force", val);
		return val;
	}

	return (
		<RigidBody ref={ref} colliders={colliders} scale={scale} position={position} {...rest}>
			<Text3D
				{...textOptions}
				font={ChiptuneValentine}
				castShadow
				receiveShadow
				onClick={() => {
					if (ref.current) {
						ref.current.applyImpulse({ x: forceStrength(), y: forceStrength(), z: forceStrength() }, true);
						ref.current.applyTorqueImpulse({ x: forceStrength() * .75, y: forceStrength() * .75, z: forceStrength() * .75 }, true);
					}
				}}
			>
				{character}
				<meshStandardMaterial color={color} />
			</Text3D>
		</RigidBody>
	)
}

function Scene() {
	// Initial value using window.scrollY instead of 0 or the event listener
	// This prevents the logo from appearing in the middle of the screen if you load in scrolled halfway down for some reason
	const [scrollTop, setScrollTop] = useState(window.scrollY);
	const [viewportHeight, setViewportHeight] = useState(window.innerHeight);
	const three = useThree();
	const debug = false;

	useEffect(() => {
		// This DOM element is position fixed so that letters that get clicked don't just clip at the edge of the canvas
		// That means when we scroll, we need to simulate the rendered objects moving along with the scroll
		// This event listener updates a state value each time the scroll position changes
		// Later on we use a UseEffect hook to move the ThreeJS camera when the scroll position is updated
		window.addEventListener("scroll", e => setScrollTop(e.target.documentElement.scrollTop));
		// This listener helps to control the ratio of the window height that is used to simulate the 3D effect scrolling away
		// On short, wide viewports (landscape cellphone, etc.), the logo is condensed and scrolls away slowly, causing ugly overlap
		// If we listen for this, we can on-the-fly change the math that is being used, sort of like media queries
		window.addEventListener("resize", e => setViewportHeight(window.innerHeight));

		// Set initial camera position a little offset to add ~~depth~~ via slightly longer viewing angle to the text logo
		// This value doesn't change since we don't want to adjust our camera left/right at all
		// But the works in tandem later on where we update the vert and depth values when scrolling
		three.camera.position.setX(.8);

		// Fiber places 0,0,0 at center of the canvas and then it sets the camera at the specified starting position looking at 0,0,0
		// But our effect hook lower down sets the Y and Z which we use to simulate scrolling so the camera angle is off when we load
		// These bizarre and arbitrary-looking values set the viewing angle of the camera such that we get the right loading position
		three.camera.rotation.x = -0.52; // up-down angle on load = pos simulates looking up at target, neg simulates looking down at target
		three.camera.rotation.y = 0.09; // left-right angle on load - pos simulates turning your head left, neg simulates turning your head right
		three.camera.rotation.z = 0.05; // yaw angle on load - pos is clockwise and neg is counterclockwise

		// setInterval(() => {
		// 	Logs the camera position every two seconds
		// 	Extremely useful when setting the desired initial camera position using the OrbitControls 
		// 	And then recording those values and setting them above
		// 	These were the specific values used for this site:

		// 	Position
		// 	x: 1.18619528176675
		// 	y: 2.245098843422512
		// 	z: 9.229167250164425

		// 	Rotation
		// 	_x: -0.5223265971026869
		// 	_y: 0.08533895498508497
		// 	_z: 0.04902689417859703

		// 	console.log("Camera position", three.camera.position);
		// 	console.log("Camera rotation", three.camera.rotation);
		// }, 2000)
	}, []);
	
	useEffect(() => {
		let vertScrollRatio;
		if (viewportHeight >= 800) {
			// If we are taller than 800px, scroll kinda slowly to
			vertScrollRatio = 75;
		} else {
			// If we are shorter than 800px, the logo is condensed because of the limited vertical space the canvas is rendered on
			// We need to scroll more quickly to avoid overlap
			vertScrollRatio = 45;
		}

		three.camera.position.setY(4.5 - (scrollTop / vertScrollRatio)); // Moves the camera down as the viewport is scrolled down
		three.camera.position.setZ(9.22 + (scrollTop / 350)); // Moves the camera out slightly as the viewport is scrolled down
	}, [scrollTop]);

	return (
		<>
			<Physics debug={false}>
				<Character3D character="s" forceRange={[.25, .4]} position={[-4, 2.9, 0]} color={theme.palette.primary.main} />
				<Character3D character="e" forceRange={[.25, .4]} position={[-3.3, 2.9, 0]} color={theme.palette.primary.main} />
				<Character3D character="r" forceRange={[.25, .4]} position={[-2.6, 2.9, 0]} color={theme.palette.primary.main} />
				<Character3D character="i" forceRange={[.25, .4]} position={[-1.8, 2.9, 0]} color={theme.palette.primary.main} />
				<Character3D character="o" forceRange={[.25, .4]} position={[-1.3, 2.9, 0]} color={theme.palette.primary.main} />
				<Character3D character="u" forceRange={[.25, .4]} position={[-.5, 2.9, 0]} color={theme.palette.primary.main} />
				<Character3D character="s" forceRange={[.25, .4]} position={[.3, 2.9, 0]} color={theme.palette.primary.main} />
				<Character3D character="l" forceRange={[.25, .4]} position={[1.1, 2.9, 0]} color={theme.palette.primary.main} />
				<Character3D character="y" forceRange={[.25, .4]} position={[1.5, 2.9, 0]} color={theme.palette.primary.main} />

				<Character3D character="s" scale={2.2} forceRange={[2, 4]} position={[-4, .3, 0]} color={theme.palette.secondary.main} />
				<Character3D character="e" scale={2.2} forceRange={[2, 4]} position={[-2, .3, 0]} color={theme.palette.secondary.main} />
				<Character3D character="x" scale={2.2} forceRange={[2, 4]} position={[0, .3, 0]} color={theme.palette.secondary.main} />
				<Character3D character="y" scale={2.2} forceRange={[2, 4]} position={[2, .3, 0]} color={theme.palette.secondary.main} />

				<Character3D character="c" scale={.15} forceRange={[.00005, .0002]} position={[-3.75, .3, .45]} color={"#FFF"} />
				<Character3D character="l" scale={.15} forceRange={[.00005, .0002]} position={[-3.6, .3, .45]} color={"#FFF"} />
				<Character3D character="i" scale={.15} forceRange={[.00005, .0002]} position={[-3.5, .3, .45]} color={"#FFF"} />
				<Character3D character="c" scale={.15} forceRange={[.00005, .0002]} position={[-3.4, .3, .45]} color={"#FFF"} />
				<Character3D character="k" scale={.15} forceRange={[.00005, .0002]} position={[-3.25, .3, .45]} color={"#FFF"} />

				<Character3D character="m" scale={.15} forceRange={[.00005, .0002]} position={[-2.9, .3, .45]} color={"#FFF"} />
				<Character3D character="e" scale={.15} forceRange={[.00005, .0002]} position={[-2.70, .3, .45]} color={"#FFF"} />

				<RoundedBox args={[8, .1, 1.2]} position={[-.3, 0, 0]} castShadow receiveShadow>
					<CuboidCollider args={[4, .05, .6]} position={[0, 0, 0]} />
					<meshStandardMaterial color={theme.functions.pSBC(-0.96, theme.palette.secondary.main)} />
				</RoundedBox>
			</Physics>
			<ambientLight intensity={.5} />
			<Light debug={debug} position={[0,5,0]} color="white" intensity={2} />
			<Light debug={debug} position={[4,5,2]} color="white" intensity={1.5} />
		</>
	)
}

function RapierLogo() {
	return (
		<Box sx={ styles.container }>
			<Canvas shadows camera={{ fov: 70 }}>
				<Scene />
			</Canvas>
		</Box>
	)
}

export default RapierLogo;