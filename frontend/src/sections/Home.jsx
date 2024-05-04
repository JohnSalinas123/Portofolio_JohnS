import React from 'react'
import { DeskThreeDModel } from '../components/DeskThreeDModel'

import './Home.css'

export const Home = () => {
  return (
      <>
        <div id="home-box">
          <div className="three-d-model-box">
            <DeskThreeDModel />
          </div>
          <div className="intro-box inter-400">
              <p> Hi, I'm John Salinas</p>
          </div>

        </div>
      </>  
    
  )
}
