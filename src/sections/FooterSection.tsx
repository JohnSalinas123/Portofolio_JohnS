import { Flex, Group, Text, UnstyledButton } from "@mantine/core";
import "./FooterSection.css";
import { Link as ScrollLink } from "react-scroll";

export const FooterSection = () => {
	return (
		<>
			<div id="footer"></div>
			<div className="footer-section">
				<div className="footer-inner">
					<Flex className="footer-category" justify="flex-start" align="center" gap={20}>
						<Text className="footer-heading" w={100} size="xl" fw={600}>
							Navigate
						</Text>
						<ScrollLink to="top" smooth="true" duration={500} offset={-100}>
							<UnstyledButton className="footer-button">Home</UnstyledButton>
						</ScrollLink>
						<ScrollLink to="projects" smooth="true" duration={500} offset={-80}>
							<UnstyledButton className="footer-button" variant="default">Projects</UnstyledButton>
						</ScrollLink>
						<ScrollLink
							to="technologies"
							smooth="true"
							duration={500}
							offset={-70}
						>
							<UnstyledButton className="footer-button" variant="default">Technologies</UnstyledButton>
						</ScrollLink>
						<ScrollLink to="studylog" smooth="true" duration={500} offset={-70}>
							<UnstyledButton className="footer-button" variant="default">StudyLog</UnstyledButton>
						</ScrollLink>
					</Flex>
					<Flex className="footer-category" justify="flex-start" align="center" gap={20}>
						<Text className="footer-heading" w={100} size="xl" fw={600}>
							Links
						</Text>

						<a
							className="footer-link"
							href="https://www.linkedin.com/in/johnsalinas123/"
							target="_blank"
							rel="noreferrer"
						>
							<Text className="footer-button" fw={300}>Linkedin</Text>
						</a>

						<a
							className="footer-link"
							href="https://github.com/JohnSalinas123"
							target="_blank"
							rel="noreferrer"
						>
							<Text className="footer-button" fw={300}>GitHub</Text>
						</a>
						<a
							className="footer-link"
							href="mailto: salinasjohn257@gmail.com"
							target="_blank"
							rel="noreferrer"
						>
							<Text className="footer-button" fw={300}>Email</Text>
						</a>
					</Flex>
					
				</div>
				<Group justify="center">
						<Text>{"\u00A9"} 2025 John Salinas</Text>
					</Group>
			</div>
		</>
	);
};
