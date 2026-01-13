import headshot from '../assets/headshot.png'
import './Hero.css'

function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <div className="hero-image-container">
          <img src={headshot} alt="Jared Benson" className="hero-image" />
        </div>
        <div className="hero-text">
          <h1 className="hero-name">Jared Benson</h1>
          <p className="hero-contact">
            <span>267-761-8366</span>
            <span className="separator">|</span>
            <a href="mailto:jbenson783@gmail.com">jbenson783@gmail.com</a>
            <span className="separator">|</span>
            <a href="https://github.com/spacerisk" target="_blank" rel="noopener noreferrer">github.com/spacerisk</a>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero
