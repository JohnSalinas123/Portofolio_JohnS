import { CSSTransition } from "react-transition-group";
import "./ProjectsSection.css";
import { FiExternalLink } from "react-icons/fi";

import {
	Image,
	Paper,
	Box,
	Title,
	Text,
	Divider,
	Button,
	Pill,
} from "@mantine/core";

import projectsData from "../data/projects_data.json";

export const ProjectsSection = () => {
	return (
		<div role="region" aria-label="projects">
			<CSSTransition in={true} appear={true} timeout={1000} classNames="fade">
				<div id="projects" data-testid="projects">
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
			</CSSTransition>
		</div>
	);
};

const Project = ({ src, title, short_descrip, alt, links, skills }) => {
	return (
		<>
			<Paper p={5} radius="md" className="project-outer">
				<Paper
					className="project-box"
					shadow="sm"
					padding="lg"
					radius="md"
					withBorder
				>
					<Box pt="md" className="project-image-box">
						<Image className="project-image" src={src} alt={alt} />
					</Box>

					<Box p="md">
						<div className="project-links inter-400">
							{links &&
								Object.keys(links).map((linkName) => (
									<Button
										key={links[linkName]}
										component="a"
										href={links[linkName]}
										target="_blank"
										rel="noopener noreferrer"
										radius="xl"
										size="sm"
										variant="outline"
										color="var(--bright-blue)"
										style={{
											borderWidth: "1px",
										}}
										rightSection={
											<FiExternalLink className="project-link-icon" />
										}
									>
										{linkName}
									</Button>
								))}
						</div>
						<div className="project-text-header">
							<Title order={3} className="project-title inter-600">
								{title}
							</Title>
							<Text className="project-short-descrip" c="dimmed">
								{short_descrip}
							</Text>
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
												src={skill.icon_src}
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
			</Paper>
			{/* 
			<div className="project-outer">
			<div className="project-inner">
				<div className="project-image">
					<img src={src} alt={alt} />
				</div>

				<div className="project-footer">
					<div className="project-links inter-400">
						{links &&
							Object.keys(links).map((linkName) => (
								<ProjectLink
									key={links[linkName]}
									name={linkName}
									url={links[linkName]}
								/>
							))}
					</div>
					<div className="project-text-header">
						<h3 className="project-title inter-600">{title}</h3>

						<p className="project-short-descrip">{short_descrip}</p>
					</div>
					<div className="project-skills-box">
						<ul className="project-skills-list">
							{skills &&
								skills.map((skill, index) => (
									<li key={index} className="project-skills-item">
										<p>{skill}</p>
									</li>
								))}
						</ul>
					</div>
				</div>
			</div>
		</div>
		
		
		
		
		
		*/}
		</>
	);
};
