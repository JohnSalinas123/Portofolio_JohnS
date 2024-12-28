import "./HomePage.css";
import { ProjectsSection } from "../sections/ProjectsSection";
import { StudyLogSection } from "../sections/StudyLogSection";

import { Stack } from "@mantine/core";
import { IntroSection } from "../sections/IntroSection";
import { TechSkillsSection } from "../sections/TechSkillsSection";

export const HomePage = () => {
	return (
		<>
			<Stack gap={0} justify="center" align="center">
				<div id="top"></div>
				<IntroSection />
				<div className="homepage-content">
					<ProjectsSection />
					<TechSkillsSection />
				</div>
			</Stack>
		</>
	);
};
