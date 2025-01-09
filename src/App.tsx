import { HomePage } from "./pages/HomePage.tsx";
import { Routes, Route } from "react-router-dom";
import { useDisclosure } from "@mantine/hooks";

import { UnstyledButton, Title } from "@mantine/core";

import { AppShell, Burger, Group } from "@mantine/core";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import { AboutMePage } from "./pages/AboutMePage.tsx";

import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

import RootLayout from "./layouts/RootLayout";

import "./App.scss";

function App() {
	const [opened, { toggle }] = useDisclosure();

	return (
		<>
			<AppShell
				header={{ height: 60 }}
				navbar={{
					width: 300,
					breakpoint: "sm",
					collapsed: { desktop: true, mobile: !opened },
				}}
				styles={{
					header: {
						backgroundColor: "var(--nav-bg)",
						fontFamily: "consolas",
					},
					navbar: {
						backgroundColor: "var(--nav-bg)",
						fontFamily: "consolas",
					},
				}}
				withBorder={true}
			>
				<AppShell.Header>
					<Group h="100%" px="md">
						<Burger
							opened={opened}
							onClick={toggle}
							hiddenFrom="sm"
							size="sm"
						/>
						<Group className="nav" justify="space-evenly" style={{ flex: 1 }}>
							<Title order={1} size="h2">
								<RouterLink to="/" className="logo-link">
									John Salinas
								</RouterLink>
							</Title>
							<Group gap={30} visibleFrom="sm">
								<ScrollLink
									to="top"
									smooth="true"
									duration={500}
									offset={-100}
									className="nav-link"
								>
									<UnstyledButton className="nav-button">Home</UnstyledButton>
								</ScrollLink>
								<ScrollLink
									to="projects"
									smooth="true"
									duration={500}
									offset={-80}
									className="nav-link"
								>
									<UnstyledButton variant="default" className="nav-button">
										Projects
									</UnstyledButton>
								</ScrollLink>
								<ScrollLink
									to="technologies"
									smooth="true"
									duration={500}
									offset={-70}
									className="nav-link"
								>
									<UnstyledButton variant="default" className="nav-button">
										Technologies
									</UnstyledButton>
								</ScrollLink>
								<ScrollLink
									to="studylog"
									smooth="true"
									duration={500}
									offset={-70}
									className="nav-link"
								>
									<UnstyledButton variant="default" className="nav-button">
										StudyLog
									</UnstyledButton>
								</ScrollLink>
								<Group className="nav-socials">
									<a
										href="https://www.linkedin.com/in/johnsalinas123/"
										target="_blank"
										rel="noreferrer"
									>
										<FaLinkedin className="social-icon" />
									</a>
									<a
										href="mailto: salinasjohn257@gmail.com"
										target="_blank"
										rel="noreferrer"
									>
										<IoIosMail className="social-icon" />
									</a>
									<a
										href="https://github.com/JohnSalinas123"
										target="_blank"
										rel="noreferrer"
									>
										<FaGithub className="social-icon" />
									</a>
								</Group>
							</Group>
						</Group>
					</Group>
				</AppShell.Header>

				<AppShell.Navbar py="md" px={4}>
					<ScrollLink className="burger-link" to="home" smooth="true" duration={500} offset={-70}>
						<UnstyledButton onClick={toggle}>
							Home
						</UnstyledButton>
					</ScrollLink>
					<ScrollLink className="burger-link" to="projects" smooth="true" duration={500} offset={-70}>
						<UnstyledButton onClick={toggle}>
							Projects
						</UnstyledButton>
					</ScrollLink>
					<ScrollLink
						className="burger-link"
						to="technologies"
						smooth="true"
						duration={500}
						offset={-70}
					>
						<UnstyledButton onClick={toggle}>
							Technologies
						</UnstyledButton>
					</ScrollLink>
					<ScrollLink className="burger-link" to="studylog" smooth="true" duration={500} offset={-70}>
						<UnstyledButton onClick={toggle}>
							StudyLog
						</UnstyledButton>
					</ScrollLink>
				</AppShell.Navbar>

				<AppShell.Main>
					<Routes>
						<Route path="/" element={<RootLayout />}>
							<Route index element={<HomePage />} />
							<Route path="/log" element={<AboutMePage />} />
						</Route>
					</Routes>
				</AppShell.Main>
			</AppShell>
		</>
	);
}

export default App;
