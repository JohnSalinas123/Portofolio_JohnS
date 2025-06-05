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
	Paper,
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
				navbar={{
					width: 300,
					breakpoint: "sm",
					collapsed: { desktop: desktopOpened, mobile: !mobileOpened },
				}}
				withBorder={false}
			>

				<AppShell.Navbar py="md" px={4}>
					<NavButton
						name={"Projects"}
						active={location.pathname === "/projects"}
						to="/projects"
						onClick={toggleMobile}
					/>
					<NavButton
						name={"About"}
						active={location.pathname === "/about"}
						to="/about"
						onClick={toggleMobile}
					/>
					<NavButton
						name={"StudyLog"}
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
							<Route path="/study" element={<StudyLogPage />} />
						</Route>
					</Routes>
				</AppShell.Main>
			</AppShell>
		</>
	);
}

export default App;
