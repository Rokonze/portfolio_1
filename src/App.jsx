import './App.css'
import Navbar from './Components/Navbar.jsx'
import About from './Components/About.jsx'
import Projects from './Components/Projects.jsx'



function App() {
  

  

  return (
    <>
      <Navbar />
      <div className='flex flex-col items-center w-5/6 mx-auto mt-40'>
        <About />
        <Projects />
      </div>
      
    </>
  )
}

export default App
