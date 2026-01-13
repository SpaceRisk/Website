import './ProjectCard.css'

function ProjectCard({ project, onClick }) {
  return (
    <div className="project-card" onClick={onClick}>
      <div className="project-image-container">
        <img
          src={project.image}
          alt={project.title}
          className="project-image"
        />
        <div className="project-overlay">
          <span>View Details</span>
        </div>
      </div>
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-subtitle">{project.subtitle}</p>
        <p className="project-description">{project.shortDescription}</p>
        <div className="project-tags">
          {project.tags.map((tag) => (
            <span key={tag} className="project-tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
