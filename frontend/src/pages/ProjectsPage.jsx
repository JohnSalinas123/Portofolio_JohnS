import {
	mybookshelf,
	polylang,
	cppeventmap,
	weekly,
	apptrack,
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
							"A mobile application that allows users to create and discover plans with friends. I contributed to the iOS development team, helping implement features for organizing and sharing events in a social, intuitive interface."
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
							"As the tech lead in my software engineering class, I guided the development of CPP Event Map, a web app designed to help Cal Poly Pomona students discover and navigate on-campus events. The project incorporated React, CSS, Node.js, and MongoDB to create a streamlined user experience for accessing event information."
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
						src={apptrack}
						title={"AppTrack"}
						short_descrip={
							"A full-stack application built to help users track and manage their job applications efficiently. I developed both the frontend and backend, implementing secure JWT authentication and leveraging MongoDB for data storage."
						}
						alt={"An image of a web application for tracking job applications."}
						links={{
							Github: "https://github.com/JohnSalinas123/AppTrack",
						}}
						skills={[
							"TypeScript",
							"React",
							"Node.js",
							"Express",
							"MongoDB",
							"JWT Auth",
						]}
					/>
					<Project
						src={polylang}
						title={"PolyLang"}
						short_descrip={
							"A translation app utilizing a recurrent neural network (RNN) model to translate English text into Spanish. I integrated React for the frontend and Flask with Keras on the backend to process translations in real-time."
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
							"A desktop application that organizes and visualizes a user's PDF book library. Using React and Electron, I built a user-friendly interface for managing and accessing digital book collections."
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
