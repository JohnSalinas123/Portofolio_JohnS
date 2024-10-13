import { SectionHeader } from "../components/SectionHeader";
import { SkillsDisplay } from "../components/SkillsDisplay";

import "./AboutMePage.css";

const proficient_skills_array = [
	{ name: "HTML", img: "html5_icon.svg" },
	{ name: "CSS", img: "css3_icon.svg" },
	{ name: "JavaScript", img: "javascript_icon.svg" },
	{ name: "NodeJS", img: "nodejs_icon.svg" },
	{ name: "React", img: "react_icon.svg" },
	{ name: "Python", img: "python_icon.svg" },
	{ name: "git", img: "git_icon.svg" },
	{ name: "Swift", img: "swift_icon.svg" },
];

const learning_interested_skills_array = [
	{ name: "Tensorflow", img: "tensorflow_icon.svg" },
	{ name: "Keras", img: "keras_icon.svg" },
	{ name: "Pytorch", img: "pytorch_icon.svg" },
];

export const AboutMePage = () => {
	return (
		<>
			<div id="aboutme">
				<SectionHeader sectionTitle="About me" />

				<div id="aboutme-text-box">
					<p id="aboutme-text" className="inter-400">
						I graduated with a bachelor&apos;s degree in computer science from
						Cal Poly Pomona, where I had the opportunity to lead several class
						projects and enjoyed helping my classmates learn and grow. My
						dedication to learning has fueled my passion for web development
						and, more recently, machine learning. I strive to continually
						improve my skills and contribute positively to any team I'm part of.
					</p>
				</div>

				<div id="aboutme-skills-box">
					<SkillsDisplay
						title={"Core Skills"}
						skills_array={proficient_skills_array}
					/>
					<SkillsDisplay
						title={"Exploring/Learning"}
						skills_array={learning_interested_skills_array}
					/>
				</div>
			</div>
		</>
	);
};
