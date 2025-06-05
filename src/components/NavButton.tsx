import { Text, Group } from "@mantine/core";
import { Link as RouterLink, useLocation } from "react-router-dom";

import { motion } from "framer-motion";
import { useState } from "react";

import classes from './NavButton.module.css'

interface NavButtonProps {
	name: string;
	to: string;
	onClick?: () => void;
}

export const NavButton = ({ name, to, onClick }: NavButtonProps) => {
	const location = useLocation();
	const [hovered, setHovered] = useState(false);

	const isActive = location.pathname === to;


	return (
		<motion.div
			className={classes["nav-button-box"]}
			onHoverStart={() => setHovered(true)}
			onHoverEnd={() => setHovered(false)}
		>
			<motion.div>
				<RouterLink
					to={to}
					onClick={onClick}
					className={`${classes['nav-button']} ${isActive ? classes['active-nav'] : ""}`}
				>
                    <Group gap={0}>
						<Text className={classes['forward-slash']}>/</Text>
                        <Text>{name}</Text>
                    </Group>
				</RouterLink>
			</motion.div>

			<div
				className={`${classes['nav-underline']} ${hovered ? classes["full-w visible"] : ""} ${
					isActive ? classes["full-w visible"] : ""
				}`}
			></div>
		</motion.div>
	);
};
