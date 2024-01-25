import React from 'react'
import './Blog.css'
import { donuts, lighthouse, dungeon} from "../images/blog/blogIndex.js"
import { CSSTransition } from 'react-transition-group';




export const Blog = () => {
  return (
    <CSSTransition in={true} appear={true} timeout={1000} classNames="fade">
      <div className="narrow-content-container blog-content">
        <ImageGallery />
      </div>
    </CSSTransition>
  )
}

const ImageGallery = () => {

  return (
    <div className="image-grid">
      <Image src={dungeon} alt="Blender Donut Tutorial" type={"wide"} overlayTitle={"Blender Donut Tutorial"} />
      <Image src={donuts} alt="Blender Donut Tutorial" type={"large"} overlayTitle={"Blender Donut Tutorial"}/>
      <Image src={donuts} alt="Blender Donut Tutorial" overlayTitle={"Blender Donut Tutorial"}/>
      <Image src={donuts} alt="Blender Donut Tutorial"/>
      
    </div>
  )

}

const Image = ({src,alt, type, overlayTitle}) => {

  var classNames = "image-container"
  if (type == 'wide') {
    classNames = "image-container image-grid-col-2"
  } else if (type == 'large') {
    classNames = "image-container image-grid-col-2 image-grid-row-2"
  }

  return (
    <div className={classNames}>
      <img src={src} alt={alt} />
      <div className="image-overlay">
        {overlayTitle}
      </div>
    </div>
  )

}
