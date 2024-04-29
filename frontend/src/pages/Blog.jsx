import React from 'react'
import { donuts, lighthouse, dungeon,} from "../images/blog/blogIndex.js"
import { CSSTransition } from 'react-transition-group';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import './Blog.css'



export const Blog = () => {
  return (
    <CSSTransition in={true} appear={true} timeout={1000} classNames="fade">
        <ImageGallery />
    </CSSTransition>
  )
}

const ImageGallery = () => {

  return (
    <div id="blog-masonry-box">
      <div id="blog-inner">
          <ResponsiveMasonry
              columnsCountBreakPoints={{350: 1, 780: 2, 1500: 3}}
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
      </div>
    </div>
    
    

  )

}

const Image = ({src,alt, height, overlayTitle}) => {

  return (
    <div>

      <div className="image-container image-wrapper" >
        <img src={src} alt={alt} />
        <div className="image-overlay">
        {overlayTitle}
      </div>
      </div>
      
      
    </div>
  )

}
