import "./SkillsDisplay.css";

interface Skill {
	name: string;
	img: string;
}

interface SkillsDisplayProps {
	title: string;
	skills_array: Skill[];
}

export const SkillsDisplay = ({ title, skills_array }: SkillsDisplayProps) => {
	const limited_skills_array = skills_array ? skills_array.slice(0, 8) : [];

	return (
		<div className="skills-display-box">
			<div className="skills-title-box">
				<h2>{title}</h2>
			</div>

			<div className="skill-items-box">
				{limited_skills_array &&
					limited_skills_array.map((skill, index) => (
						<div key={index} className="skill-box">
							<div className="skill-item">
								<img src={skill.img} alt={`${skill.name} icon`} />
								<span>{skill.name}</span>
							</div>
						</div>
					))}
			</div>
		</div>
	);
};
