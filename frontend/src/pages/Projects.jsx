import React from 'react'
import './Projects.css'
import { donuts, lighthouse, dungeon} from "../images/blog/blogIndex.js"
import { CSSTransition } from 'react-transition-group';

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
      <ProjectSquare src={donuts} title={"Blender Donut"} short_descrip={"3D Model of a plate of donuts"} date={"11/23/2023"} alt={"A 3D model of a plate with a few donuts on it"} />
      <ProjectSquare src={donuts} title={"Blender Donut"} short_descrip={"3D Model of a plate of donuts"} date={"11/23/2023"} alt={"A 3D model of a plate with a few donuts on it"} />
      <ProjectSquare src={donuts} title={"Blender Donut"} short_descrip={"3D Model of a plate of donuts"} date={"11/23/2023"} alt={"A 3D model of a plate with a few donuts on it"} />
      <ProjectSquare src={donuts} title={"Blender Donut"} short_descrip={"3D Model of a plate of donuts"} date={"11/23/2023"} alt={"A 3D model of a plate with a few donuts on it"} />
    </div>

  )

}

const ProjectSquare = ({src, title, short_descrip,date, alt}) => {


  return (
    <div className="project-container">
      <img src={src} alt={alt} />
      <div className="projet-text">
        <div className="project-text-header">
            <p className="project-title">{title}</p>
            <p className="project-date">{date}</p>
        </div>
        <p className="project-short-descrip">{short_descrip}</p>
      </div>

    </div>
  )

}
