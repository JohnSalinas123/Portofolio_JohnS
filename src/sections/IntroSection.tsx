import { Center, Text, Stack, Image, Title } from "@mantine/core";
import { motion } from "motion/react";
import skillsData from "../data/tech_data.json";

import "./IntroSection.css";
import { useEffect, useState } from "react";

const layers = [4, 10, 12]; // Number of items in each layer
const baseRadii = [40, 95, 160]; // Radii for each layer

const containerSize = 400;

export const IntroSection = () => {
	const [radii, setRadii] = useState(baseRadii);

	const calculateResponsiveRadii = () => {
		const width = window.innerWidth;
		if (width < 575) {
			return baseRadii.map((r) => r * 0.8); 
		}
		return baseRadii;
	};

	useEffect(() => {
		const handleResize = () => {
			setRadii(calculateResponsiveRadii());
		};
		handleResize();
		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	const calculatePosition = (
		index: number,
		totalItems: number,
		radius: number
	) => {
		const angle = (2 * Math.PI * index) / totalItems;
		return {
			x: radius * Math.cos(angle),
			y: radius * Math.sin(angle),
		};
	};

	let skillIndex = 0;

	return (
		<>
			<div className="intro-section">
				<Stack gap={0} justify="center" align="left">
					<Title order={1} className="intro-self">
						Hi, I'm John Salinas
					</Title>
					<Title order={1} className="intro-title">
						Software Developer
					</Title>

					<Text size="lg" c="dimmed" className="intro-sub" pl={10} pr={10}>
						Explore some of my projects and the technologies I work with below.
					</Text>
				</Stack>
				<Center>
					<div
						style={{
							display: "flex",
							position: "relative",
							width: `${containerSize}px`,
							height: `${containerSize}px`,
						}}
					>
						{layers.map((itemsInLayer, layerIndex) => {
							return Array.from({ length: itemsInLayer }).map((_, i) => {
								if (skillIndex >= skillsData.length) return null;

								const { x, y } = calculatePosition(
									i,
									itemsInLayer,
									radii[layerIndex]
								);
								const skill = skillsData[skillIndex++];
								return (
									<motion.div
										key={skill.name}
										initial={{
											opacity: 0,
											scale: 0.5,
											x: x + containerSize / 2 - 25,
											y: y + containerSize / 2 - 25,
										}}
										animate={{
											opacity: 1,
											scale: 1,
											x: x + containerSize / 2 - 25,
											y: y + containerSize / 2 - 25,
										}}
										transition={{
											type: "spring",
											stiffness: 200,
											damping: 20,
											delay: skillIndex * 0.05,
										}}
										style={{
											position: "absolute",
											width: 50,
											height: 55,
											display: "flex",
											justifyContent: "center",
											alignItems: "center",
											cursor: "pointer",
										}}
									>
										<div className="tech-box">
											<Image
												fit="contain"
												className="icon-hexagon"
												src="icons/icon_hexagon.svg"
											/>
											<Image
												className="tech-cell"
												src={skill.icon_src}
												style={{
													width: skill.size,
													height: skill.size,
												}}
											/>
										</div>
									</motion.div>
								);
							});
						})}
					</div>
				</Center>
			</div>
		</>
	);
};
