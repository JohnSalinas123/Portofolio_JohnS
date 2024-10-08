import { Navbar } from "./components/Navbar";
import { Home, Projects } from "./sections/sectionsIndex.js";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	return (
		<>
			<div id="top"></div>
			<Navbar />
			<div id="main-container">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/projects" element={<Projects />} />
					</Routes>
			</div>
		</>
	);
}

export default App;
