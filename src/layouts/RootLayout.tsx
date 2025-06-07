import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Space } from "@mantine/core";

const RootLayout = () => {
	return (
		<>
			<main>
				<div className="container-center">
					<Navbar />
					<div className="content-container">
						<Outlet />
						<Space h="25px" />
					</div>
				</div>
			</main>
		</>
	);
};

export default RootLayout;
