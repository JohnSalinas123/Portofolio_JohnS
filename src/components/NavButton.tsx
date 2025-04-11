import { Text, Group } from "@mantine/core";
import { Link as RouterLink } from "react-router-dom";

import "./NavButton.css";
import { motion } from "framer-motion";
import { useState } from "react";

interface NavButtonProps {
	name: string;
	icon: React.ReactNode;
	active: boolean;
	to: string;
	onClick?: () => void;
}

export const NavButton = ({ name, icon, active, to, onClick }: NavButtonProps) => {
	const [hovered, setHovered] = useState(false);

	return (
		<motion.div
			className="nav-button-box"
			onHoverStart={() => setHovered(true)}
			onHoverEnd={() => setHovered(false)}
		>
			<motion.div whileHover={{ scale: 1.075 }} whileTap={{ scale: 0.95 }}>
				<RouterLink
					to={to}
					onClick={onClick}
					className={`nav-button ${active ? "active-nav" : ""}`}
				>
                    <Group gap={10}>
                        {icon}
                        <Text>{name}</Text>
                    </Group>
				</RouterLink>
			</motion.div>

			<div
				className={`nav-underline ${hovered ? "full-w visible" : ""} ${
					active ? "full-w visible" : ""
				}`}
			></div>
		</motion.div>
	);
};
