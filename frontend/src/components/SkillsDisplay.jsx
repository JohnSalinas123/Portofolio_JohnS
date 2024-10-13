import './SkillsDisplay.css'

export const SkillsDisplay = ({title, skills_array}) => {

    const limited_skills_array = skills_array ? skills_array.slice(0,8) : [];

    return (
        <div className="skills-display-box">
            <div className="skills-title-box">
                <h2>{title}</h2>
            </div>
            
            <div className="skill-items-box">
                {limited_skills_array && 
                    limited_skills_array.map((skill, index) => (
                        <SkillItem
                            key={index}
                            skill_name={skill.name}
                            skill_img={skill.img}
                        />
                ))}


            </div>

        </div>
    )

}


const SkillItem = ({skill_name, skill_img}) => {


    return (
        <>
            <div className="skill-box">
                <div className="skill-item">
                    <img src={skill_img} alt={`${skill_name} icon`} />
                    <span>{skill_name}</span>
                </div>
                
            </div>
            
        </>
    )

}