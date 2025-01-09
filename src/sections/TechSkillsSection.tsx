import { Group, Stack, Title, Image, Text } from "@mantine/core";

import "./TechSkillsSection.css";
import { MotionValue } from "motion/react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const TechSkillsSection = () => {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start 0.99", "end start"],
	});

	/*
	useEffect(() => {
		const unsubscribe = scrollYProgress.onChange((latest) => {
			console.log("scrollYProgress:", latest);
		});

		// Cleanup listener on unmount
		return () => unsubscribe();
	}, [scrollYProgress]);
	*/

	const skills = [
		{
			category: "Languages",
			items: [
				"typescript",
				"javascript",
				"python",
				"java",
				"go",
				"swift",
				"HTML",
				"CSS",
				"SQL",
			],
		},
		{
			category: "Frameworks/Libraries",
			items: ["React", "Express", "SwiftUI", "JUnit", "Jest"],
		},
		{
			category: "Tools/Platforms",
			items: ["Git", "GitHub", "GitLab", "Figma", "AWS", "ServiceNow", "NPM"],
		},
		{ category: "Databases", items: ["MongoDB", "MySQL", "PostgreSQL"] },
	];

	const totalItems = skills.reduce(
		(acc, skillGroup) => acc + skillGroup.items.length,
		0
	);

	return (
		<>
			<div id="technologies"></div>
			<div ref={ref} className="tech-section">
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{
						opacity: 1,
						transition: { duration: 1, ease: "easeInOut" },
					}}
					viewport={{ amount: "all" }}
					transition={{ type: "spring", stiffness: 200, damping: 15 }}
				>
					<Title className="section-title" order={2} size="h1">
						Technologies
					</Title>
				</motion.div>
				<Stack gap={50} className="category-box">
					{skills.map((skillGroup, groupIndex) => (
						<Stack gap={30} key={groupIndex}>
							<motion.div
								initial={{ opacity: 0 }}
								whileInView={{
									opacity: 1,
									transition: { duration: 1, ease: "easeInOut" },
								}}
								viewport={{ amount: "all" }}
								transition={{ type: "spring", stiffness: 200, damping: 15 }}
							>
								<Title
									className="sub-heading tech-category"
									order={3}
								>
									{skillGroup.category}
								</Title>
							</motion.div>
							<Group gap={50} wrap="wrap">
								{skillGroup.items.map((name, itemIndex) => (
									<TechSkillsItem
										key={itemIndex}
										name={name}
										index={groupIndex * 5 + itemIndex}
										totalItems={totalItems}
										scrollYProgress={scrollYProgress}
									/>
								))}
							</Group>
						</Stack>
					))}
				</Stack>
			</div>
		</>
	);
};

const TechSkillsItem = ({
	name,
	index,
	totalItems,
	scrollYProgress,
}: {
	name: string;
	index: number;
	totalItems: number;
	scrollYProgress: MotionValue<number>;
}) => {
	const scrollFactor = 0.9;

	const start = (index / totalItems) * scrollFactor; // Adjust for the spacing between items
	const end = start + 0.1; // Controls how long the item stays visible
	const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);
	const scale = useTransform(scrollYProgress, [start, end], [0.5, 1]);

	return (
		<>
			<motion.div style={{ opacity, scale }}>
				<Stack gap={5} justify="center" align="center">
					<Image
						h={42}
						w={42}
						src={`icons/${name.toLowerCase()}_icon.svg`}
					></Image>
					<Text className="tech-name" style={{ color: "var(--off-black)", fontSize: "16px" }}>
						{name.charAt(0).toUpperCase() + name.slice(1)}
					</Text>
				</Stack>
			</motion.div>
		</>
	);
};
