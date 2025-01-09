import { Group, Stack, Text, UnstyledButton } from "@mantine/core";
import "./FooterSection.css";
import { Link as ScrollLink } from "react-scroll";

export const FooterSection = () => {
	return (
		<>
			<div id="footer"></div>
			<div className="footer-section">
				<Group gap={50} justify="center">
						<Stack h={160} justify="flex-start" align="flex-start" gap={5}>
								
								<Text size="xl" fw={600}>
									Links
								</Text>
						
								<a
									className="footer-link"
									href="https://www.linkedin.com/in/johnsalinas123/"
									target="_blank"
									rel="noreferrer"
								>
									<Text fw={300}>Linkedin</Text>
								</a>

								<a
									className="footer-link"
									href="https://github.com/JohnSalinas123"
									target="_blank"
									rel="noreferrer"
								>
									<Text fw={300}>GitHub</Text>
								</a>
								<a
									className="footer-link"
									href="mailto: salinasjohn257@gmail.com"
									target="_blank"
									rel="noreferrer"
								>
									<Text fw={300}>Email</Text>
								</a>
						
						</Stack>
						<Stack h={160} justify="flex-start" align="flex-start" gap={5}>
							<Text size="xl" fw={600}>
									Navigate
							</Text>
							<ScrollLink
								to="top"
								smooth="true"
								duration={500}
								offset={-100}
								
							>
								<UnstyledButton className="nav-button">Home</UnstyledButton>
							</ScrollLink>
							<ScrollLink
								to="projects"
								smooth="true"
								duration={500}
								offset={-80}
								
							>
								<UnstyledButton variant="default" >
									Projects
								</UnstyledButton>
							</ScrollLink>
							<ScrollLink
								to="technologies"
								smooth="true"
								duration={500}
								offset={-70}
								
							>
								<UnstyledButton variant="default" >
									Technologies
								</UnstyledButton>
							</ScrollLink>
							<ScrollLink
								to="studylog"
								smooth="true"
								duration={500}
								offset={-70}
							>
								<UnstyledButton variant="default" >
									StudyLog
								</UnstyledButton>
							</ScrollLink>
						</Stack>
					
				</Group>
				
				<Group justify="center">
					<Text >{"\u00A9"} 2025 John Salinas</Text>
					
				</Group>
				
			</div>
		</>
	);
};
