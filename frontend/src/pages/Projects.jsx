import React from 'react'
import { donuts, lighthouse, dungeon} from "../images/blog/blogIndex.js"
import { CSSTransition } from 'react-transition-group';
import '../styles/Projects.css'

export const Projects = () => {
  return (
    <CSSTransition in={true} appear={true} timeout={1000} classNames="fade">
      <div className="narrow-content-container project-content">
        <ProjectGallery />
      </div>
    </CSSTransition>
  )
}

const ProjectGallery = () => {

  return (
    <div className="project-grid">
      <Project src={donuts} title={"Blender Donut"} short_descrip={"3D Model of a plate of donuts"} date={"11/23/2023"} alt={"A 3D model of a plate with a few donuts on it"} links={{"Github": "https://github.com/JohnSalinas123/simpleCalculator"}} />
      <Project src={donuts} title={"Blender Donut"} short_descrip={"3D Model of a plate of donuts"} date={"11/23/2023"} alt={"A 3D model of a plate with a few donuts on it"} links={{"Github": "https://github.com/JohnSalinas123/simpleCalculator"}}/>
      <Project src={donuts} title={"Blender Donut"} short_descrip={"3D Model of a plate of donuts"} date={"11/23/2023"} alt={"A 3D model of a plate with a few donuts on it"} links={{"Github": "https://github.com/JohnSalinas123/simpleCalculator"}}/>
      <Project src={donuts} title={"Blender Donut"} short_descrip={"3D Model of a plate of donuts"} date={"11/23/2023"} alt={"A 3D model of a plate with a few donuts on it"} links={{"Github": "https://github.com/JohnSalinas123/simpleCalculator"}}/>
    </div>

  )

}

const Project = ({src, title, short_descrip,date, alt, links}) => {


  return (
    <div className="project-outer">
      <div className="project-inner">
        <img src={src} alt={alt} />
        <div className="project-footer">
          <div className="project-links inter-400">
            {links && Object.keys(links).map((linkName) => (
              <ProjectLink key={links[linkName]} name={linkName} url={links[linkName]}/>
            ))}
          </div>
          <div className="project-text-header">
              <p className="project-title inter-500">{title}</p>
              {
                /* <p className="project-date">{date}</p>*/
              }

              <p className="project-short-descrip inter-300">{short_descrip}</p>
          </div>
          
        </div>

      </div>
   </div>   
  )

}

const ProjectLink = ({name, url}) => {

  return (
    <a href={url} className="project-link-button">{name}</a>
  )

}
