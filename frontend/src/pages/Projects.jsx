import React from 'react'
import { donuts, lighthouse, dungeon} from "../images/blog/blogIndex.js"
import { mybookshelf, polylang  } from '../images/project/projectIndex.js';
import { CSSTransition } from 'react-transition-group';
import './Projects.css'

export const Projects = () => {
  return (
    <CSSTransition in={true} appear={true} timeout={1000} classNames="fade">
        <ProjectGallery />
    </CSSTransition>
  )
}

const ProjectGallery = () => {

  return (
    <div id="project-grid-box">
      <div className="project-grid">
        <Project src={polylang} title={"CPP EventMap"} short_descrip={"An event map to help students find events"} date={"11/23/2023"} alt={"An image of a web application using a map to display event locations on e CPP campus using markers tsting if the text overflow works,ecececefewfwegwgwgwgergergergeg"} links={{"Github": "https://github.com/JohnSalinas123/simpleCalculator"}} />   
        <Project src={mybookshelf} title={"Blender Donut"} short_descrip={"3D Model of a plate of donuts"} date={"11/23/2023"} alt={"A  model of a plate with a few donuts on it"} links={{"Github": "https://github.com/JohnSalinas123/simpleCalculator"}}/>
        <Project src={mybookshelf} title={"Blender Donut"} short_descrip={"3D Model of a plate of donuts"} date={"11/23/2023"} alt={"A 3D model of a plate with a few donuts on it"} links={{"Github": "https://github.com/JohnSalinas123/simpleCalculator"}}/>
        <Project src={polylang} title={"CPP EventMap"} short_descrip={"An event map to help students find events on campus"} date={"11/23/2023"} alt={"An image of a web application using a map to display event locations on the CPP campus using markers"} links={{"Github": "https://github.com/JohnSalinas123/simpleCalculator"}} />   
        <Project src={mybookshelf} title={"Blender Donut"} short_descrip={"3D Model of a plate of donuts"} date={"11/23/2023"} alt={"A 3D model of a plate with a few donuts on it"} links={{"Github": "https://github.com/JohnSalinas123/simpleCalculator"}}/>
        <Project src={mybookshelf} title={"Blender Donut"} short_descrip={"3D Model of a plate of donuts"} date={"11/23/2023"} alt={"A 3D model of a plate with a few donuts on it"} links={{"Github": "https://github.com/JohnSalinas123/simpleCalculator"}}/>

        
        
        
      </div>
    </div>
    

  )

}

const Project = ({src, title, short_descrip,date, alt, links}) => {


  return (
    <div className="project-outer">
      <div className="project-inner">
        <div className="project-image">
          <img src={src} alt={alt} />
        </div>
        
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

              <p className="project-short-descrip inter-400">{short_descrip}</p>
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
