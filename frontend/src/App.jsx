import { Routes, Route, useLocation} from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Home, Projects, About, Blog } from './pages/pagesIndex.js'
import './styles/App.scss'


function App() {

  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div className={`App main-color ${isHomePage ? 'gradient-background' : 'solid-background'}`}>
      <Navbar />
      {
        /* 
        <div className="container">
          {[...Array(100)].map((_, i) => (
              <div className="circle-container" key={i}>
                <div className="circle"></div>
              </div>
          ))}
        </div>
        */
      }
      
      <div className="content-container">

        
        <Routes>
                <Route path="/"  element={<Home />}/>
                <Route path="/projects"  element={<Projects />}/>
                <Route path="/about"  element={<About />}/>
                <Route path="/blog"  element={<Blog />}/>
        </Routes>
      </div>
      
      
    </div> 
  )
}

export default App
