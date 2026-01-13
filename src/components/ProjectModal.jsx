import { useEffect } from 'react'
import './ProjectModal.css'

function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleEscape)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
    }
  }, [onClose])

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose()
  }

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="modal">
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        <img
          src={project.image}
          alt={project.title}
          className="modal-image"
        />
        <div className="modal-content">
          <h2 className="modal-title">{project.title}</h2>
          <p className="modal-subtitle">{project.subtitle}</p>

          <div className="modal-tags">
            {project.tags.map((tag) => (
              <span key={tag} className="modal-tag">
                {tag}
              </span>
            ))}
          </div>

          <p className="modal-description">{project.fullDescription}</p>

          {project.features && (
            <div className="modal-section">
              <h3 className="modal-section-title">Key Features</h3>
              <ul className="modal-features">
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          )}

          {project.techStack && (
            <div className="modal-section">
              <h3 className="modal-section-title">Tech Stack</h3>
              <div className="modal-tech-stack">
                {Object.entries(project.techStack).map(([key, value]) => (
                  <div key={key} className="tech-item">
                    <span className="tech-label">{key}:</span>
                    <span className="tech-value">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="modal-links">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="modal-link modal-link-primary"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectModal
