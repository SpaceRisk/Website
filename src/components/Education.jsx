import './Education.css'

function Education() {
  return (
    <section id="education" className="section">
      <div className="card">
        <h2 className="resume-section-title">Education</h2>
        <div className="education-item">
          <div className="education-header">
            <div>
              <h3 className="education-school">Temple University</h3>
              <span className="education-location">| Philadelphia, Pa</span>
            </div>
            <span className="education-date">Dec 2024</span>
          </div>
          <p className="education-degree">B.S. in Computer Science and Mathematics</p>
          <p className="education-courses">
            <strong>Courses:</strong> Software Design, Operating Systems, Machine Learning, Data Structures & Algorithms, Probability Theory
          </p>
        </div>
      </div>
    </section>
  )
}

export default Education
