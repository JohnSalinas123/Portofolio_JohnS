import { Navbar } from "./components/Navbar";
import { HomePage } from "./pages/HomePage.jsx";
import "./App.scss";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
	return (
		<>
			<div id="top"></div>
			<Navbar />
			<div id="main-container">
				<Routes>
					<Route path="/" element={<HomePage />} />
				</Routes>
			</div>
		</>
	);
}

export default App;
