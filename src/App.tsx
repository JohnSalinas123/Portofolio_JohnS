import { ProjectPage } from "./pages/ProjectPage/ProjectPage.tsx";
import { StudyLogPage } from "./pages/StudyLogPage/StudyLogPage.tsx";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useDisclosure } from "@mantine/hooks";
import { Link as RouterLink } from "react-router-dom";
import cx from "clsx";

import {
	Stack,
	useMantineColorScheme,
	useComputedColorScheme,
	ActionIcon,
	useMantineTheme,
} from "@mantine/core";

import { AppShell, Burger, Group, Text, Image } from "@mantine/core";

import { FaLinkedin, FaGithub, FaLaptopCode, FaBook } from "react-icons/fa";
import { IoMoonOutline, IoPersonSharp, IoSunnyOutline } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { MouseEvent } from "react";

import RootLayout from "./layouts/RootLayout";

import "./App.scss";
import classes from "./App.module.css";
import { NavButton } from "./components/NavButton.tsx";

function App() {
	const { setColorScheme } = useMantineColorScheme();
	const computedColorScheme = useComputedColorScheme("light", {
		getInitialValueInEffect: true,
	});

	const { colorScheme } = useMantineColorScheme();
	const theme = useMantineTheme();
	const logoColor = colorScheme === "light" ? theme.black : theme.white;

	const [mobileOpened, { toggle: toggleMobile }] = useDisclosure(false);
	const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);
	const location = useLocation();

	const handleWebLink = (event: MouseEvent<HTMLButtonElement>, url: string) => {
		event.preventDefault();

		window.open(url, "_blank", "noopener, noreferrer");
	};

	const handleMailLink = (
		event: MouseEvent<HTMLButtonElement>,
		url: string
	) => {
		event.preventDefault();

		window.location.href = url;
	};

	return (
		<>
			<AppShell
				header={{ height: 60 }}
				navbar={{
					width: 300,
					breakpoint: "sm",
					collapsed: { desktop: desktopOpened, mobile: !mobileOpened },
				}}
				styles={{
					header: {
						fontFamily: "consolas",
					},
					navbar: {
						fontFamily: "consolas",
					},
				}}
				withBorder={false}
			>
				<AppShell.Header>
					<Group h="100%" px="md">
						<Burger
							className="c-white"
							opened={mobileOpened}
							onClick={toggleMobile}
							hiddenFrom="sm"
							size="sm"
						/>
						<Group className="nav" justify="space-evenly" style={{ flex: 1 }}>
							<RouterLink to="/projects" className="logo-link">
								<Group>
									<Image
										src={`other_images/johnsalinas_profilepic.jpg
												`}
										h={40}
										w={40}
										radius={"50%"}
									/>
									<Stack gap={0} align="left">
										<Text size="lg" style={{ color: logoColor }}>
											John Salinas
										</Text>
										<Text size="sm" c="var(--primary)">
											Software Engineer
										</Text>
									</Stack>
								</Group>
							</RouterLink>

							<Group gap={30} visibleFrom="sm">
								<NavButton
									name={"Projects"}
									icon={<FaLaptopCode />}
									active={location.pathname === "/projects"}
									to="/projects"
								/>
								<NavButton
									name={"StudyLog"}
									icon={<FaBook />}
									active={location.pathname === "/studylog"}
									to="/studylog"
								/>
								<ActionIcon
									onClick={() =>
										setColorScheme(
											computedColorScheme === "light" ? "dark" : "light"
										)
									}
									variant="default"
									size="lg"
									aria-label="Toggle color scheme"
								>
									<IoSunnyOutline className={cx(classes.icon, classes.light)} />
									<IoMoonOutline className={cx(classes.icon, classes.dark)} />
								</ActionIcon>
								<Group className="nav-socials">
									<ActionIcon
										onClick={(e) => {
											handleWebLink(
												e,
												"https://www.linkedin.com/in/johnsalinas123/"
											);
										}}
									>
										<FaLinkedin className="social-icon" />
									</ActionIcon>
									<ActionIcon
										onClick={(e) => {
											handleMailLink(e, "mailto: salinasjohn257@gmail.com");
										}}
									>
										<IoIosMail className="social-icon" />
									</ActionIcon>
									<ActionIcon
										onClick={(e) => {
											handleWebLink(e, "https://github.com/JohnSalinas123");
										}}
									>
										<FaGithub className="social-icon" />
									</ActionIcon>
								</Group>
							</Group>
						</Group>
					</Group>
				</AppShell.Header>

				<AppShell.Navbar py="md" px={4}>
					<NavButton
						name={"Projects"}
						icon={<FaLaptopCode />}
						active={location.pathname === "/projects"}
						to="/projects"
						onClick={toggleMobile}
					/>
					<NavButton
						name={"About"}
						icon={<IoPersonSharp />}
						active={location.pathname === "/about"}
						to="/about"
						onClick={toggleMobile}
					/>
					<NavButton
						name={"StudyLog"}
						icon={<FaBook />}
						active={location.pathname === "/studylog"}
						to="/studylog"
						onClick={toggleMobile}
					/>
				</AppShell.Navbar>

				<AppShell.Main>
					<Routes>
						<Route path="/" element={<RootLayout />}>
							<Route index element={<Navigate to="/projects" replace />} />
							<Route path="/projects" element={<ProjectPage />} />
							<Route path="/studylog" element={<StudyLogPage />} />
						</Route>
					</Routes>
				</AppShell.Main>
			</AppShell>
		</>
	);
}

export default App;
