import { Routes, Route} from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Home, Projects, About, Blog } from './pages/pagesIndex.js'
import './styles/App.css'


function App() {

  return (
    <div className="App">
      <Navbar />
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
