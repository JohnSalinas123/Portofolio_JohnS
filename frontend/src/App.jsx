import { Navbar } from "./components/Navbar";
import { HomePage, ProjectsPage, ProgressPage } from "./sections/pagesIndex.js";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	return (
		<>
			<div id="top"></div>
			<Navbar />
			<div id="main-container">
				<Routes>
					<Route path="/projects" element={<ProjectsPage />} />
					<Route path="/learning" element={<ProgressPage />} />
				</Routes>
			</div>
		</>
	);
}

export default App;
