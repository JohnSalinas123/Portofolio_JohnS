import { Routes, Route, useLocation} from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Home, Projects,Blog } from './pages/pagesIndex.js'
import './App.scss'



function App() {

  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <>
      <Navbar />
      <div id="main-container">
        <div className="content-container">   
          <Routes>
                  <Route path="/"  element={<Home />}/>
                  <Route path="/projects"  element={<Projects />}/>
                  <Route path="/blog"  element={<Blog />}/>
          </Routes>
        </div>
      </div>
      
    </>  
      
    
  )
}

export default App
