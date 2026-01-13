import './About.css'

function About() {
  const languages = ['Python (Pandas, numpy)', 'SQL', 'JavaScript', 'Java', 'Swift', 'TypeScript']
  const tools = ['Node.js', 'React.js', 'Git', 'Excel', 'MySQL']

  return (
    <section id="skills" className="section">
      <div className="card">
        <h2 className="resume-section-title">Technical Skills</h2>
        <div className="skills-content">
          <div className="skill-row">
            <span className="skill-label">Languages (ordered by proficiency):</span>
            <span className="skill-values">{languages.join(', ')}</span>
          </div>
          <div className="skill-row">
            <span className="skill-label">Tools and Frameworks:</span>
            <span className="skill-values">{tools.join(', ')}</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
