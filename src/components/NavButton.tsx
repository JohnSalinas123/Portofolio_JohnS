import { Text, Group } from "@mantine/core";
import { Link as RouterLink, useLocation } from "react-router-dom";

import { motion } from "framer-motion";

import classes from "./NavButton.module.css";

interface NavButtonProps {
	name: string;
	color: string;
	to: string;
	onClick?: () => void;
}

export const NavButton = ({ name, color, to, onClick }: NavButtonProps) => {
	const location = useLocation();
	//const [hovered, setHovered] = useState(false);

	const isActive = location.pathname === to;

	return (
		<motion.div
			className={classes["nav-button-box"]}
		>
			<motion.div>
				<RouterLink
					to={to}
					onClick={onClick}
					className={`${classes["nav-button"]} ${
						isActive ? classes["active-nav"] : ""
					}`}
				>
					<Group gap={0}>
						<Text className={classes["forward-slash"]} c={color}>
							/
						</Text>
						<Text c={color}>{name}</Text>
					</Group>
				</RouterLink>
			</motion.div>

			<div
				className={`${classes["underline"]} ${
					isActive ? classes["underline-visible"] : ""
				}`}
			></div>
		</motion.div>
	);
};
