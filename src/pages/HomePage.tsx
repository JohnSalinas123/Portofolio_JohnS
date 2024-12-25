import "./HomePage.css";
import { ProjectsSection } from "../sections/ProjectsSection";
import { StudyLogSection } from "../sections/StudyLogSection";

import { Stack } from "@mantine/core";

export const HomePage = () => {
	return (
		<>
			<Stack justify="center" align="center">
				<div id="top"></div>
				<ProjectsSection />
				<StudyLogSection />
			</Stack>
		</>
	);
};
