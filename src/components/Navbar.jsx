import { useState } from 'react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="navbar">
      <div className="container">
        <a href="#hero" className="logo">NurseWrite Pro</a>
        <nav className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <ul>
            <li><a href="#hero">Home</a></li>
            <li><a href="#about">About</a></li>
            <li>
              <a href="#services">Services ▾</a>
              <ul className="dropdown">
                <li><a href="#services">Online Classes Help</a></li>
                <li><a href="#services">Exams Help</a></li>
                <li><a href="#services">Essays & Thesis</a></li>
                <li><a href="#services">Assignments</a></li>
              </ul>
            </li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#reviews">Reviews</a></li>
            <li><a href="#blogs">Insights</a></li>
            <li><a href="#qa">Q&A</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>

        <button 
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          aria-label="Toggle menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>
  )
}

export default Navbar