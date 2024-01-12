import './styles/App.css'
import { Routes, Route} from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { NavbarSC } from './old/NavbarSC'
import { Home, Projects, About, Blog } from './pages'

function App() {

  return (
    <div className="App">
      <Navbar />
        <Routes>
          <Route path="/"  element={<Home />}/>
          <Route path="/projects"  element={<Projects />}/>
          <Route path="/about"  element={<About />}/>
          <Route path="/blog"  element={<Blog />}/>
        </Routes>
      </div> 
  )
}

export default App
