import { CSSTransition } from "react-transition-group";
import "./ProjectsPage.css";
import { FiExternalLink } from "react-icons/fi";

import projectsData from "../data/projects_data.json";

export const ProjectsPage = () => {
	return (
		<div role="region" aria-label="projects">
			<CSSTransition in={true} appear={true} timeout={1000} classNames="fade">
				<ProjectGallery projects={projectsData} />
			</CSSTransition>
		</div>
	);
};

const ProjectGallery = ({ projects }) => {
	return (
		<div id="projects" data-testid="projects">
			<div id="project-grid-box">
				<div className="project-grid">
					{projects.map((project, index) => (
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
	);
};

const Project = ({ src, title, short_descrip, alt, links, skills }) => {
	return (
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
	);
};

const ProjectLink = ({ name, url }) => {
	return (
		<>
			<a
				href={url}
				target="_blank"
				className="project-link-button"
				rel="noreferrer"
			>
				{name}
				<FiExternalLink className="project-link-icon" />
			</a>
		</>
	);
};
