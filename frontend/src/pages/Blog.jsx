import React from 'react'
import './Blog.css'
import { donuts, lighthouse, dungeon,} from "../images/blog/blogIndex.js"
import { CSSTransition } from 'react-transition-group';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"




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
    <ResponsiveMasonry
      columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
  >
      <Masonry gutter="16px">
          <Image src={dungeon} alt="Blender Donut Tutorial"  overlayTitle={"Blender Donut Tutorial"} />
          <Image src={donuts} alt="Blender Donut Tutorial"  overlayTitle={"Blender Donut Tutorial"}/>
          <Image src={lighthouse} alt="Blender Donut Tutorial" overlayTitle={"Blender Donut Tutorial"}/>
          <Image src={donuts} alt="Blender Donut Tutorial"  overlayTitle={"Blender Donut Tutorial"}/>
          <Image src={donuts} alt="Blender Donut Tutorial" overlayTitle={"Blender Donut Tutorial"}/>
          <Image src={donuts} alt="Blender Donut Tutorial" overlayTitle={"Blender Donut Tutorial"}/>
          <Image src={donuts} alt="Blender Donut Tutorial" overlayTitle={"Blender Donut Tutorial"}/>
          <Image src={donuts} alt="Blender Donut Tutorial" overlayTitle={"Blender Donut Tutorial"}/>
      </Masonry>
    </ResponsiveMasonry>
    

  )

}

const Image = ({src,alt, height, overlayTitle}) => {

  return (
    <div>
      <div className="image-container image-wrapper" >
        <img src={src} alt={alt} />
      </div>
      
      <div className="image-overlay">
        {overlayTitle}
      </div>
    </div>
  )

}
