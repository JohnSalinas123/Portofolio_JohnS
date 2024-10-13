import { Navbar } from './components/Navbar'
import { Home, Projects } from './sections/sectionsIndex.js'
import './App.scss'
import { AboutMe } from './sections/AboutMe.jsx'



function App() {

  return (
    <>
      <div id="top"></div>
      <Navbar />
      <div id="main-container">
        <Home />
        <AboutMe />
        <Projects />
      </div>
      
    </>  
      
    
  )
}

export default App
