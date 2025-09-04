import { Text, Button } from "@mantine/core";
import { MouseEvent, useState } from "react";

import { motion } from "framer-motion";

import classes from "./LinkButton.module.css";
import { FaAppStoreIos, FaGithub } from "react-icons/fa";

interface LinkButtonProps {
	name: string;
	url: string;
}

export const LinkButton = ({ name, url }: LinkButtonProps) => {
	const [hovered, setHovered] = useState(false);

	const handleLinkClick = (
		event: MouseEvent<HTMLButtonElement>,
		url: string
	) => {
		event.preventDefault();
		event.stopPropagation();

		window.open(url, "_blank", "noopener, noreferrer");

		console.log("Project link handler works");
	};

	const renderActionIcon = () => {
		if (name == "GitHub") return <FaGithub size={25} color={"inherit"} />;

		if (name == "App Store") return <FaAppStoreIos color={"inherit"} />;
	};

	return (
		<motion.div
			onHoverStart={() => setHovered(true)}
			onHoverEnd={() => setHovered(false)}
		>
			<motion.div>
				<Button
					onClick={(e) => handleLinkClick(e, url)}
					className={classes["link"]}
					leftSection={renderActionIcon()}
				>
					<Text>{name}</Text>
				</Button>
			</motion.div>

			<div
				className={`${classes["nav-underline"]} ${
					hovered ? classes["full-w visible"] : ""
				}`}
			></div>
		</motion.div>
	);
};
