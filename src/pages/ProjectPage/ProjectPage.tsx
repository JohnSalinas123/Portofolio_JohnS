import {
	Image,
	Paper,
	Box,
	Text,
	Modal,
	Stack,
	Group,
	useMantineTheme,
	useMantineColorScheme,
	Pill,
	SimpleGrid,
} from "@mantine/core";

import projectsData from "../../data/projects_data.json";
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";

import classes from "./ProjectPage.module.css";
import { LinkButton } from "../../components/LinkButton";

/*
interface ProjectItem {
	src: string;
	title: string;
	tags: string[];
	short_descrip: string;
	alt: string;
	links: [
		{
			location: string;
			url: string;
		}
	];
	skills: [
		{
			name: string;
		}
	];
}
	*/

export const ProjectPage = () => {
	const [opened, { open, close }] = useDisclosure(false);
	const [selectedProject, setSelectedProject] = useState<ProjectData | null>(
		null
	);
	const [searchInput, setSearchInput] = useState<string>("");
	const [activeCategory, setActiveCategory] = useState<string>("");

	const handleOpenProject = (project: ProjectData) => {
		setSelectedProject(project);
		open();
	};

	const categorySet = new Set<string>();
	for (const project of projectsData) {
		project.tags.forEach((tag) => categorySet.add(tag));
	}

	// search title, short_decrip, tags, skills.name
	//const lowerSearchInput = searchInput.toLowerCase()
	const filteredProjects = projectsData.filter((project) => {
		if (activeCategory != "") {
			return project.tags.includes(activeCategory);
		}

		const lowerSearchInput = searchInput.toLowerCase();
		return (
			project.title.toLowerCase().includes(lowerSearchInput) ||
			project.short_descrip.toLowerCase().includes(lowerSearchInput) ||
			project.tags.some((tag) =>
				tag.toLowerCase().includes(lowerSearchInput)
			) ||
			project.skills.some((skillObj) =>
				skillObj.name.toLowerCase().includes(lowerSearchInput)
			)
		);
	});

	function selectCategory(cat: string) {
		// reset search input
		setSearchInput("");

		if (activeCategory == cat) {
			setActiveCategory("");
			return;
		}

		setActiveCategory(cat);
	}

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
			<div className={classes["controls"]}>
				<div className={classes["categories"]}>
					{categorySet &&
						Array.from(categorySet).map((cat, index) => {
							return (
								<Pill
									key={index}
									className={`${classes.pill} ${
										activeCategory === cat ? classes["pill-active"] : ""
									}`}
									onClick={() => selectCategory(cat)}
									size={"md"}
								>
									{cat}
								</Pill>
							);
						})}
				</div>
			</div>
			<Paper className={classes.projects}>
				<SimpleGrid cols={3} spacing="2rem">
					{filteredProjects.map((project) => (
						<Project
							key={project.title}
							{...project}
							openProject={() => handleOpenProject(project)}
						/>
					))}
				</SimpleGrid>
			</Paper>
		</>
	);
};

interface Skill {
	name: string;
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
	const { colorScheme } = useMantineColorScheme();
	const theme = useMantineTheme();
	const titleColor = colorScheme === "light" ? theme.black : theme.white;

	return (
		<>
			<Paper
				className={classes["project-box"]}
				onClick={openProject}
				radius={0}
			>
				<div className={classes["image-box"]}>
					<Image className={classes["image"]} src={src} alt={alt} />
				</div>
				<Box p={10} pt={20} className={classes["project-footer"]}>
					<div className={classes["project-text-header"]}>
						<Text className={classes["title"]} style={{ color: titleColor }}>
							{title}
						</Text>

						<Text className={classes["project-short-descrip"]}>
							{short_descrip}
						</Text>
					</div>
					<div className={classes["project-skills"]}>
						<div className={classes["project-skills-list"]}>
							{skills &&
								skills.map((skill, index) => (
									<div className={classes["project-skills-item"]} key={index}>
										<Text className={classes["skill-item-text"]}>
											{skill.name}
										</Text>
									</div>
								))}
						</div>
					</div>
					<Group justify="space-between" wrap="nowrap" h="100%">
						<div className={classes["project-links"]}>
							{links &&
								links.map((link) => (
									<>
										<LinkButton name={"GitHub"} url={link.url} />
									</>
								))}
						</div>
					</Group>
				</Box>
			</Paper>
		</>
	);
};
