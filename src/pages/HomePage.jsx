import "./HomePage.css";
import { ProjectsSection } from "../sections/ProjectsSection.jsx";
import { StudyLogSection } from "../sections/StudyLogSection.jsx";

import { Stack } from "@mantine/core";

export const HomePage = () => {
	return (
		<>
			<Stack justify="center" align="center">
				<div id="top" name="top"></div>
				<ProjectsSection />
				<StudyLogSection />
			</Stack>
		</>
	);
};
