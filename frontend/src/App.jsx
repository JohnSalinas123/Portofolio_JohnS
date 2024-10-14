import { Navbar } from "./components/Navbar";
import { ProjectsPage, StudyLogPage } from "./pages/pagesIndex.js";
import "./App.scss";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
	return (
		<>
			<div id="top"></div>
			<Navbar />
			<div id="main-container">
				<Routes>
					<Route path="/" element={<Navigate to="/projects" replace />} />
					<Route path="/projects" element={<ProjectsPage />} />
					<Route path="/studylog" element={<StudyLogPage />} />
				</Routes>
			</div>
		</>
	);
}

export default App;
