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
				pl={20}
				pr={20}
				styles={{
					header: {
						backgroundColor: "var(--nav-bg)",
						fontFamily: "Montserrat",
					},
				}}
				withBorder={false}
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
								<RouterLink to="/" className="logo-link montserrat-500">
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
