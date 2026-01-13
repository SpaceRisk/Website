import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Education from './components/Education'
import Footer from './components/Footer'
import ProjectModal from './components/ProjectModal'
import './App.css'

function App() {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <>
      <Header />
      <main className="app">
        <Hero />
        <Education />
        <About />
        <Projects onProjectClick={setSelectedProject} />
      </main>
      <Footer />
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  )
}

export default App
