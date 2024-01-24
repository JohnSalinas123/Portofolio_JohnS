import React from 'react'
import './Blog.css'
import { donuts, lighthouse, dungeon} from "../images/blog/blogIndex.js"




export const Blog = () => {
  return (
    <div className="narrow-content-container">
      <ImageGallery />
    </div>
  )
}

const ImageGallery = () => {

  return (
    <div className="image-grid">
      <Image src={dungeon} alt="Blender Donut Tutorial" type={"wide"} />
      <Image src={donuts} alt="Blender Donut Tutorial" type={"large"}/>
      <Image src={donuts} alt="Blender Donut Tutorial"/>
      <Image src={donuts} alt="Blender Donut Tutorial"/>
      <Image src={lighthouse} alt="Blender Donut Tutorial" type={"wide"}/>
      <Image src={donuts} alt="Blender Donut Tutorial"/>
      <Image src={donuts} alt="Blender Donut Tutorial"/>
    </div>
  )

}

const Image = ({src,alt, type}) => {

  var classNames = ""
  if (type == 'wide') {
    classNames = "image-grid-col-2"
  } else if (type == 'large') {
    classNames = "image-grid-col-2 image-grid-row-2"
  }

  return (
    <div className={classNames}>
      <img src={src} alt={alt} />
    </div>
  )

}
