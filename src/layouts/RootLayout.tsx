import { Outlet } from "react-router-dom";
import { FooterSection } from "../sections/FooterSection";

const RootLayout = () => {
	return (
		<>
			<main>
				<Outlet />
			</main>
			<FooterSection />
		</>
	);
};

export default RootLayout;
