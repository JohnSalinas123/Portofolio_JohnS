import { ProjectsSection } from "../sections/ProjectsSection";

import { Stack } from "@mantine/core";
import { IntroSection } from "../sections/IntroSection";
import { TechSkillsSection } from "../sections/TechSkillsSection";

import "./HomePage.css";
import "../sections/IntroSection.css";
import { StudyLogSection } from "../sections/StudyLogSection";

export const HomePage = () => {
	return (
		<>
			<Stack gap={0} justify="center" align="center">
				<div id="top"></div>
				<IntroSection />
				<div className="homepage-content">
					<ProjectsSection />
					<TechSkillsSection />
					<StudyLogSection />
				</div>
			</Stack>
		</>
	);
};
