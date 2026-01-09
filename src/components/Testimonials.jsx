import stud1Img from '../assets/images/stud1.jpg'
import stud2Img from '../assets/images/stud2.jpg'
import stud3Img from '../assets/images/stud3.jpg'

const Testimonials = () => {
  const testimonials = [
    {
      image: stud1Img,
      text: "This platform helped me complete my final year project on time. Highly recommended!",
      name: "Jane",
      title: "University Student"
    },
    {
      image: stud2Img,
      text: "I got amazing support with my research assignments. Great team and very professional!",
      name: "Mark", 
      title: "Postgraduate"
    },
    {
      image: stud3Img,
      text: "Their career project guidance gave me the confidence to succeed in my presentation.",
      name: "Grace",
      title: "Graduate"
    }
  ]

  return (
    <section className="testimonials" id="testimonials">
      <h2>🌟 What Students Say</h2>
      <div className="testimonial-container">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <img 
              src={testimonial.image} 
              alt={testimonial.name} 
              className="testimonial-img" 
              loading="lazy" 
              decoding="async" 
            />
            <p>"{testimonial.text}"</p>
            <h4>- {testimonial.name}, <span>{testimonial.title}</span></h4>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Testimonials