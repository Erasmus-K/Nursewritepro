import homeImg from '../assets/images/home.jpg'

const Hero = () => {
  return (
    <section 
      id="hero" 
      className="hero"
      style={{ backgroundImage: `url(${homeImg})` }}
    >
      <div className="overlay"></div>
      <div className="hero-content">
        <h1>Your Academic Success Partner</h1>
        <p>Your trusted partner in assignments, career projects, and academic research.</p>
        <a href="#services" className="btn">Explore Services</a>
      </div>
    </section>
  )
}

export default Hero