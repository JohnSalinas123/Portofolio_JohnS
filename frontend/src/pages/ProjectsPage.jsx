import {
	mybookshelf,
	polylang,
	cppeventmap,
	weekly,
} from "../images/project/projectIndex.js";
import { CSSTransition } from "react-transition-group";
import "./ProjectsPage.css";
import { FiExternalLink } from "react-icons/fi";
import { HorizontalDivider } from "../components/HorizontalDivider.jsx";

export const ProjectsPage = () => {
	return (
		<CSSTransition in={true} appear={true} timeout={1000} classNames="fade">
			<ProjectGallery />
		</CSSTransition>
	);
};

const ProjectGallery = () => {
	return (
		<div id="projects">
			<div id="project-grid-box">
				<div className="project-grid">
					<Project
						src={weekly}
						title={"Weekly: Calendar for friends"}
						short_descrip={
							"I worked as an IOS developer for Weekly, an app for making plans and discovering them with friends."
						}
						alt={
							"An image of a mobile application Weekly, it displays the apps features, of sharing your calendar, discovering free time with friends and making plans."
						}
						links={{
							"App Store":
								"https://apps.apple.com/us/app/weekly-calendar-for-friends/id1596555762",
						}}
						skills={["Swift", "SwiftUI"]}
					/>
					<Project
						src={cppeventmap}
						title={"CPPEventMap"}
						short_descrip={
							"I was the tech lead during my software engeering class for this full stack project, CPP Event Map,a web app to help CPP students know about and reach on campus events."
						}
						alt={
							"An image of a web application that is mainly a map that shows where events are occuring on the Cal Poly Pomona campus."
						}
						links={{
							Github: "https://github.com/FiveFineCoders/CPP_EventMap",
						}}
						skills={["React", "CSS", "Node.js", "Express", "MongoDB", "Jest"]}
					/>
					<Project
						src={polylang}
						title={"PolyLang"}
						short_descrip={
							"A translation app that uses a deep learning rnn model to translate english to spanish."
						}
						alt={
							"An image of a web application that uses deep learning to translate english to spanish."
						}
						links={{
							Github: "https://github.com/JohnSalinas123/PolyLang/tree/main",
						}}
						skills={["React", "Flask", "Keras"]}
					/>
					<Project
						src={mybookshelf}
						title={"MyBookshelf"}
						short_descrip={
							"A desktop app that organizes and provides a visual for ones pdf book library. "
						}
						alt={"An image of a desktop pdf library application."}
						links={{
							Github: "https://github.com/JohnSalinas123/MyBookshelf",
						}}
						skills={["React", "Electron"]}
					/>
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
