import { Navbar } from './components/Navbar'
import { Home, Projects,Blog } from './pages/pagesIndex.js'
import './App.scss'



function App() {

  return (
    <>
      <div id="top"></div>
      <Navbar />
      <div id="main-container">
        <Home />
        <Projects />
        <Blog />
      </div>
      
    </>  
      
    
  )
}

export default App
