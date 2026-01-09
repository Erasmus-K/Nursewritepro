const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <span className="logo-white">Nurse</span>
        <span className="logo-pink">Write Pro</span>
      </div>
      
      <div className="footer-columns">
        <div className="footer-column">
          <h4>Services</h4>
          <ul>
            <li><a href="#services">Online Classes Help</a></li>
            <li><a href="#services">Exam Preparation</a></li>
            <li><a href="#services">Essays & Thesis</a></li>
            <li><a href="#services">Assignment Help</a></li>
            <li><a href="#services">Research Proposals</a></li>
          </ul>
        </div>
        
        <div className="footer-column">
          <h4>Support</h4>
          <ul>
            <li><a href="#qa">FAQ</a></li>
            <li><a href="#contact">Contact Us</a></li>
            <li><a href="#reviews">Reviews</a></li>
            <li><a href="mailto:support@nursepro.com">Email Support</a></li>
            <li><a href="https://wa.me/12058665269">WhatsApp</a></li>
          </ul>
        </div>
        
        <div className="footer-column">
          <h4>Company</h4>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#blogs">Blog</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/terms">Terms of Service</a></li>
          </ul>
        </div>
        
        <div className="footer-column">
          <h4>Connect</h4>
          <p>Follow us for updates and tips</p>
          <div className="footer-socials">
            <a href="#" className="social-icon"><i className="fab fa-facebook"></i></a>
            <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
            <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
            <a href="#" className="social-icon"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2025 NurseWrite Pro. All rights reserved.</p>
        <p>Your Academic Success Partner</p>
      </div>
    </footer>
  )
}

export default Footer