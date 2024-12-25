import { HomePage } from "./pages/HomePage.tsx";
import { Routes, Route } from "react-router-dom";
import { useDisclosure } from "@mantine/hooks";

import { UnstyledButton, Title } from "@mantine/core";

import { AppShell, Burger, Group } from "@mantine/core";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import { AboutMePage } from "./pages/AboutMePage.tsx";

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
				padding="md"
			>
				<AppShell.Header>
					<Group h="100%" px="md">
						<Burger
							opened={opened}
							onClick={toggle}
							hiddenFrom="sm"
							size="sm"
						/>
						<Group justify="space-between" style={{ flex: 1 }}>
							<Title order={1} size="h2" className="logo-box">
								<RouterLink to="/" className="inter-700 logo-link">
									John Salinas
								</RouterLink>
							</Title>
							<Group ml="xl" gap={20} visibleFrom="sm">
								<ScrollLink
									to="top"
									smooth="true"
									duration={500}
									className="inter-700 logo-link"
								>
									<UnstyledButton>Home</UnstyledButton>
								</ScrollLink>
								<ScrollLink
									to="projects"
									smooth="true"
									duration={500}
									className="inter-700 logo-link"
								>
									<UnstyledButton>Projects</UnstyledButton>
								</ScrollLink>
								<ScrollLink
									to="skills"
									smooth="true"
									duration={500}
									className="inter-700 logo-link"
								>
									<UnstyledButton>Skills</UnstyledButton>
								</ScrollLink>
								<RouterLink to="/log" className="inter-700 logo-link">
									<UnstyledButton>Log</UnstyledButton>
								</RouterLink>
							</Group>
						</Group>
					</Group>
				</AppShell.Header>

				<AppShell.Navbar py="md" px={4}>
					<UnstyledButton>Home</UnstyledButton>
					<UnstyledButton>Blog</UnstyledButton>
					<UnstyledButton>Contacts</UnstyledButton>
					<UnstyledButton>Support</UnstyledButton>
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
