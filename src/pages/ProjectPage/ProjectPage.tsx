import "./ProjectPage.css";

import {
	Image,
	Paper,
	Box,
	Title,
	Text,
	ActionIcon,
	Modal,
	Stack,
	Group,
	useMantineTheme,
	useMantineColorScheme,
} from "@mantine/core";

import projectsData from "../../data/projects_data.json";
import { useDisclosure } from "@mantine/hooks";
import { MouseEvent, useState } from "react";
import { FaAppStoreIos, FaGithub } from "react-icons/fa";

export const ProjectPage = () => {
	const [opened, { open, close }] = useDisclosure(false);
	const [selectedProject, setSelectedProject] = useState<ProjectProps | null>(
		null
	);

	const handleOpenProject = (project: ProjectProps) => {
		setSelectedProject(project);
		open();
	};

	const { colorScheme } = useMantineColorScheme();
	const theme = useMantineTheme();
	//const titleColor = colorScheme === "light" ? theme.black : theme.white;

	// project dark/light colors for project page

	return (
		<>
			<div className="container-center">
				<Modal
					size="xl"
					opened={opened}
					onClose={close}
					title={selectedProject?.title}
					overlayProps={{
						backgroundOpacity: 0.55,
						blur: 3,
					}}
				>
					{selectedProject && <Stack></Stack>}
				</Modal>
				<div
					className={`box-container ${
						colorScheme === "light"
							? "box-container-light"
							: "box-container-dark"
					}`}
				>
					<div className="projects-inner">
						{projectsData.slice(0, 4).map((project) => (
							<Project
								key={project.title}
								{...project}
								openProject={() => handleOpenProject(project)}
							/>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

interface Skill {
	name: string;
	icon_src: string;
	size: number;
}

interface Link {
	location: string;
	url: string;
}

interface ProjectData {
	src: string;
	title: string;
	short_descrip: string;
	alt: string;
	links: Link[];
	skills: Skill[];
}

interface ProjectProps extends ProjectData {
	openProject: () => void;
}

const Project = ({
	src,
	title,
	short_descrip,
	alt,
	links,
	skills,
	openProject,
}: ProjectProps) => {
	const handleProjectLinkClick = (
		event: MouseEvent<HTMLButtonElement>,
		url: string
	) => {
		event.preventDefault();
		event.stopPropagation();

		window.open(url, "_blank", "noopener, noreferrer");

		console.log("Project link handler works");
	};

	const { colorScheme } = useMantineColorScheme();
	const theme = useMantineTheme();
	const titleColor = colorScheme === "light" ? theme.black : theme.white;

	// project dark/light colors for project page

	const renderActionIcon = (location: string) => {
		if (location == "Github") return <FaGithub />;

		if (location == "App Store") return <FaAppStoreIos />;
	};

	return (
		<>
			<Paper
				className={`project-box ${
					colorScheme === "light" ? "project-box-light" : "project-box-dark"
				}`}
				onClick={openProject}
				component="button"
				radius="md"
			>
				<Box pt="md" className="project-image-box">
					<div
						className={`project-image-inner ${
							colorScheme === "light"
								? "project-image-inner-light"
								: "project-image-inner-dark"
						}`}
					>
						<Image className="project-image image-dim" src={src} alt={alt} />
					</div>
				</Box>

				<Box p="md" className="project-footer">
					<div className="project-text-header">
						<Group justify="space-between" wrap="nowrap">
							<Title
								order={3}
								className="project-title"
								style={{ color: titleColor }}
							>
								{title}
							</Title>
							<div className="project-links">
								{links &&
									links.map((link) => (
										<ActionIcon
											key={link.url}
											color="var(--primary)"
											onClick={(e) => {
												handleProjectLinkClick(e, link.url);
											}}
											rel="noopener noreferrer"
											radius="md"
											size="lg"
											variant="outline"
											className="project-link"
										>
											{renderActionIcon(link.location)}
										</ActionIcon>
									))}
							</div>
						</Group>

						<Text className="project-short-descrip">{short_descrip}</Text>
					</div>
					<div className="project-skills">
						<div className="project-skills-list">
							{skills &&
								skills.map((skill, index) => (
									<Paper
										key={index}
										shadow="xs"
										radius="xl"
										withBorder
										className="project-skills-item image-dim"
									>
										<Text className="skill-item-name">{skill.name}</Text>
										<Image
											src={`icons/${skill.icon_src}`}
											style={{
												width: skill.size,
												height: skill.size,
											}}
										/>
									</Paper>
								))}
						</div>
					</div>
					{/** 
					<div className="project-links inter-400">
						{links &&
							links.map((link) => (
								<Button
									key={link.url}
									onClick={(e) => {
										handleProjectLinkClick(e, link.url);
									}}
									rel="noopener noreferrer"
									radius="md"
									size="sm"
									variant="outline"
									style={{
										borderWidth: "1px",
									}}
									className="project-link c-white bor-white"
									rightSection={
										<FiExternalLink className="project-link-icon" />
									}
								>
									{link.location}
								</Button>
							))}
					</div>
					**/}
				</Box>
			</Paper>
		</>
	);
};
