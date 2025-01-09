import { Group, Stack, Title, Image, Text } from "@mantine/core";

import "./TechSkillsSection.css";

export const TechSkillsSection = () => {
	return (
		<>
			<div id="technologies"></div>
			<div className="tech-section">
				<Title className="section-title" order={2} size="h1">
					Technologies
				</Title>
				<Stack gap={50} className="category-box">
					<Stack gap={20}>
						<Title
							className="sub-heading"
							order={3}
							style={{ fontWeight: 400 }}
						>
							Languages
						</Title>
						<Group gap={50} wrap="wrap">
							<TechSkillsItem name="typescript" />
							<TechSkillsItem name="javascript" />
							<TechSkillsItem name="python" />
							<TechSkillsItem name="java" />
							<TechSkillsItem name="go" />
							<TechSkillsItem name="swift" />
							<TechSkillsItem name="HTML" />
							<TechSkillsItem name="CSS" />
							<TechSkillsItem name="SQL" />
						</Group>
					</Stack>

					<Stack gap={20}>
						<Title
							className="sub-heading"
							order={3}
							style={{ fontWeight: 400 }}
						>
							Frameworks/Libraries
						</Title>
						<Group gap={50}>
							<TechSkillsItem name="React" />
							<TechSkillsItem name="Express" />
							<TechSkillsItem name="SwiftUI" />
							<TechSkillsItem name="JUnit" />
							<TechSkillsItem name="Jest" />
						</Group>
					</Stack>
					<Stack gap={20}>
						<Title
							className="sub-heading"
							order={3}
							style={{ fontWeight: 400 }}
						>
							Tools/Platforms
						</Title>
						<Group gap={50}>
							<TechSkillsItem name="Git" />
							<TechSkillsItem name="GitHub" />
							<TechSkillsItem name="GitLab" />
							<TechSkillsItem name="Figma" />
							<TechSkillsItem name="AWS" />
							<TechSkillsItem name="ServiceNow" />
							<TechSkillsItem name="NPM" />
						</Group>
					</Stack>
					<Stack gap={20}>
						<Title
							className="sub-heading"
							order={3}
							style={{ fontWeight: 400 }}
						>
							Databases
						</Title>
						<Group gap={50}>
							<TechSkillsItem name="MongoDB" />
							<TechSkillsItem name="MySQL" />
							<TechSkillsItem name="PostgreSQL" />
						</Group>
					</Stack>
					<Stack gap={20}>
						<Title
							className="sub-heading"
							order={3}
							style={{ fontWeight: 400 }}
						>
							Operating Systems
						</Title>
						<Group gap={50}>
							<TechSkillsItem name="Windows" />
							<TechSkillsItem name="Mac" />
							<TechSkillsItem name="Linux (Ubuntu)" />
						</Group>
					</Stack>
				</Stack>
			</div>
		</>
	);
};

const TechSkillsItem = ({ name }: { name: string }) => {
	const capitalizeFirst = (name: string) => {
		const firstLetter = name[0].toUpperCase();
		const restOfName = name.slice(1, name.length);

		return firstLetter + restOfName;
	};

	return (
		<>
			<Stack gap={5} justify="center" align="center">
				<Image
					h={42}
					w={42}
					src={`icons/${name.toLowerCase()}_icon.svg`}
				></Image>
				<Text style={{ color: "var(--off-black)", fontSize: "18px" }}>
					{capitalizeFirst(name)}
				</Text>
			</Stack>
		</>
	);
};
