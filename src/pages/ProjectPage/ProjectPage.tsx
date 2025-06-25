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
	Space,
	Pill,
	TextInput,
} from "@mantine/core";

import projectsData from "../../data/projects_data.json";
import { useDisclosure } from "@mantine/hooks";
import { MouseEvent, useState } from "react";
import { FaAppStoreIos, FaGithub } from "react-icons/fa";

import classes from './ProjectPage.module.css'
import { IconSearch } from "@tabler/icons-react";

export const ProjectPage = () => {
	const [opened, { open, close }] = useDisclosure(false);
	const [selectedProject, setSelectedProject] = useState<ProjectData | null>(
		null
	);

	const handleOpenProject = (project: ProjectData) => {
		setSelectedProject(project);
		open();
	};

	//const projectCategories = projectsData.

	// project dark/light colors for project page

	return (
		<>	
			
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
				<div className={classes['controls']}>
						<div className={classes['categories']}>
							<Pill className={classes.pill}>Web Development</Pill>
							<Pill className={classes.pill}>Machine Learning</Pill>
							<Pill className={classes.pill}>Backend</Pill>
							<Pill className={classes.pill}>CLI</Pill>
							<Pill className={classes.pill}>iOS</Pill>
						</div>
						<TextInput
						className={classes.search} 
						leftSection={<IconSearch stroke={2} />}
						/>	
				</div>
				<div className={classes.projects}>
					{projectsData.slice(0, 4).map((project) => (
						<Project
							key={project.title}
							{...project}
							openProject={() => handleOpenProject(project)}
						/>
					))}
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
				className={classes['project-box']}
				onClick={openProject}
				radius="md"
			>
				<Box pt="md" className={classes["project-image-box"]}>
					<div
						className={classes['project-image-inner']}
					>
						<Image className={classes["project-image image-dim"]} src={src} alt={alt} />
					</div>
				</Box>

				<Box p="md" className={classes["project-footer"]}>
					<div className={classes["project-text-header"]}>
						<Group justify="space-between" wrap="nowrap">
							<Title
								order={3}
								className={classes["project-title"]}
								style={{ color: titleColor }}
							>
								{title}
							</Title>
							<div className={classes["project-links"]}>
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
											variant="subtle"
											className={classes["project-link"]}
										>
											{renderActionIcon(link.location)}
										</ActionIcon>
									))}
							</div>
						</Group>

						<Text className={classes["project-short-descrip"]}>{short_descrip}</Text>
					</div>
					<div className={classes["project-skills"]}>
						<div className={classes["project-skills-list"]}>
							{skills &&
								skills.map((skill, index) => (
										<div className={classes["project-skills-item"]} key={index}>
											<Text className={classes["skill-item-text"]}>{skill.name}</Text>
										</div>
								))}
						</div>
					</div>
				</Box>
			</Paper>
		</>
	);
};
