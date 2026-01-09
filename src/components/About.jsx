import aboutImg from '../assets/images/about.jpg'
import about2Img from '../assets/images/about2.jpg'

const About = () => {
  return (
    <section id="about" className="about">
      <h2>About Us</h2>
      <p>We are dedicated to helping students and post graduates excel in their academic journey. Our team provides expert support in assignment assistance, and career development.</p>

      <div className="mv-container">
        <div className="mv-box">
          <img src={aboutImg} alt="Mission" loading="lazy" decoding="async" />
          <h3><i className="fas fa-bullseye"></i> Our Mission</h3>
          <p>To empower researchers, innovators, and organizations with high-quality research and solutions that solve real-world challenges.</p>
        </div>
        <div className="mv-box">
          <img src={about2Img} alt="Vision" loading="lazy" decoding="async" />
          <h3><i className="fas fa-eye"></i> Our Vision</h3>
          <p>To be the leading global hub for research, innovation, and knowledge transfer—driving growth and shaping a better future.</p>
        </div>
      </div>
    </section>
  )
}

export default About