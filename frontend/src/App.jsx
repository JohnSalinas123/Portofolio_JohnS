import './App.css'
import { Routes, Route} from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { NavbarSC } from './components/NavbarSC'
import { Home, Projects, About, Blog } from './components/pages'

function App() {

  return (
    <div className="App">
      <NavbarSC />
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
