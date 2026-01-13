import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">
          &copy; {currentYear} Jared Benson
        </p>
        <div className="footer-links">
          <a href="mailto:jbenson783@gmail.com">jbenson783@gmail.com</a>
          <a href="https://github.com/searisk" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
