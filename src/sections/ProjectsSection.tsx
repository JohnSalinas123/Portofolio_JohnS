import "./ProjectsSection.css";
import { FiExternalLink } from "react-icons/fi";

import { Image, Paper, Box, Title, Text, Divider, Button } from "@mantine/core";

import projectsData from "../data/projects_data.json";

export const ProjectsSection = () => {
	return (
		<>
			<div id="projects"></div>
			<div className="projects-section">
				<Title className="section-title" order={2}>
					Projects
				</Title>

				<div id="project-grid-box">
					<div className="project-grid">
						{projectsData.slice(0, 3).map((project, index) => (
							<Project
								key={index}
								src={project.src}
								title={project.title}
								short_descrip={project.short_descrip}
								alt={project.alt}
								links={project.links}
								skills={project.skills}
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

interface ProjectProps {
	src: string;
	title: string;
	short_descrip: string;
	alt: string;
	links: Link[];
	skills: Skill[];
}

const Project = ({
	src,
	title,
	short_descrip,
	alt,
	links,
	skills,
}: ProjectProps) => {
	return (
		<>
			<Paper className="project-box" radius="md">
				<Box pt="md" className="project-image-box">
					<Image className="project-image" src={src} alt={alt} />
				</Box>

				<Box p="md">
					<div className="project-links inter-400">
						{links &&
							links.map((link) => (
								<Button
									key={link.url}
									component="a"
									href={link.url}
									target="_blank"
									rel="noopener noreferrer"
									radius="xl"
									size="sm"
									variant="outline"
									color="var(--off-black)"
									style={{
										borderWidth: "1px",
									}}
									rightSection={
										<FiExternalLink className="project-link-icon" />
									}
								>
									{link.location}
								</Button>
							))}
					</div>
					<div className="project-text-header">
						<Title order={3} className="project-title">
							{title}
						</Title>
						<Text className="project-short-descrip">{short_descrip}</Text>
						<Divider />
					</div>
					<div className="project-skills-box">
						<div className="project-skills-list">
							{skills &&
								skills.map((skill, index) => (
									<Paper
										key={index}
										shadow="xs"
										radius="xl"
										withBorder
										className="project-skills-item"
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
				</Box>
			</Paper>
		</>
	);
};
