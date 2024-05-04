import { SectionHeader } from '../components/SectionHeader'
import { SkillsDisplay } from '../components/SkillsDisplay'

import './AboutMe.css'

const proficient_skills_array = [
    {name: "HTML", img: "html5_icon.svg"},
    {name: "CSS", img: "css3_icon.svg"},
    {name: "JavaScript", img: "javascript_icon.svg"},
    {name: "NodeJS", img: "nodejs_icon.svg"},
    {name: "React", img: "react_icon.svg"},
    {name: "Python", img: "python_icon.svg"},
    {name: "git", img: "git_icon.svg"},
    {name: "Swift", img: "swift_icon.svg"},
]

const learning_interested_skills_array = [
    {name: "Tensorflow", img: "tensorflow_icon.svg"},
    {name: "Keras", img: "keras_icon.svg"},
    {name: "Pytorch", img: "pytorch_icon.svg"},
]

export const AboutMe = () => {

    return (
        <>
            <div id="aboutme">
                
                <SectionHeader sectionTitle="About me" />
    
                <div id="aboutme-text-box">
                    <img id="aboutme-image" src="johnsalinas_profilepic.jpg" alt="Image of john salinas"/>
                    <p id="aboutme-text" className="inter-400">I'm a recent graduate from Cal Poly Pomona where I studied computer science.
                        Throughout my time at university I've had the opportunity to lead most of my class projects,
                        and help my classmates learn and take as much out of said projects. I enjoy helping others and am
                        dedicated to my work, and because of this I've always pushed myself to learn more, which led me to
                        my passion for web development and recently machine learning.
                    </p>
                </div>

                <div id="aboutme-skills-box">
                    <SkillsDisplay title={"Proficient"} skills_array={proficient_skills_array}  />
                    <SkillsDisplay title={"Interested/Learning"} skills_array={learning_interested_skills_array}  />
                </div>

            </div>

        </>


    )

}