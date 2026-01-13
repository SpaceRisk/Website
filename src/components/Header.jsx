import './Header.css'

function Header() {
  const navItems = [
    { label: 'Education', href: '#education' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
  ]

  return (
    <header className="header">
      <div className="header-content">
        <a href="#hero" className="header-logo">
          Jared Benson
        </a>
        <nav className="header-nav">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header
