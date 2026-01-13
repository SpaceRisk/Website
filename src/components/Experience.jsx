import './Experience.css'

function Experience() {
  return (
    <section id="experience" className="section">
      <div className="card">
        <h2 className="resume-section-title">Leadership Experience</h2>
        <div className="experience-item">
          <div className="experience-header">
            <div>
              <h3 className="experience-title">Capstone SCRUM Master</h3>
              <span className="experience-org">| Temple University</span>
            </div>
            <span className="experience-date">Nov 2024</span>
          </div>
          <p className="experience-subtitle">CATCH Project Manager</p>
          <ul className="experience-bullets">
            <li>Led Weekly SCRUM meetings, setting the agenda for the week and coordinating responsibilities with team members</li>
            <li>Coordinated integration between frontend, backend, Cloud, and hardware components</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Experience
