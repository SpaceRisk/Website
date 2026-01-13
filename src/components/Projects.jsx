import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'
import './Projects.css'

function Projects({ onProjectClick }) {
  return (
    <section id="projects" className="section">
      <h2 className="resume-section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={() => onProjectClick(project)}
          />
        ))}
      </div>
    </section>
  )
}

export default Projects
