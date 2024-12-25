import "./HomePage.css";
import { CSSTransition } from "react-transition-group";
import { ProjectsSection } from "../sections/ProjectsSection.jsx";
import { StudyLogSection } from "../sections/StudyLogSection.jsx";

export const HomePage = () => {
	return (
		<>
			<ProjectsSection />
			<StudyLogSection />
		</>
	);
};
