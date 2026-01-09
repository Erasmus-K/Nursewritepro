import { useState } from 'react'
import about2Img from '../assets/images/about2.jpg'
import blog2Img from '../assets/images/blog2.jpg'

const Blogs = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const blogSlides = [
    [
      {
        image: about2Img,
        title: "Research Skills",
        description: "Mastering Research Methods: Step-by-step approaches to plan, organize, and carry out strong academic research."
      },
      {
        image: blog2Img,
        title: "Innovation in Academic Writing", 
        description: "Discover how creativity meets structure in research writing."
      }
    ],
    [
      {
        image: blog2Img,
        title: "Study Techniques",
        description: "Effective study methods for nursing students to excel in their academic journey."
      },
      {
        image: about2Img,
        title: "Career Development",
        description: "Building a successful nursing career through continuous learning and professional growth."
      }
    ]
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % blogSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + blogSlides.length) % blogSlides.length)
  }

  return (
    <section id="blogs" className="blogs-section">
      <h2>📖 Recent Insights</h2>
      <p className="subtitle">Stay updated with our latest research and academic tips</p>

      <div className="blog-slider">
        {blogSlides.map((slide, slideIndex) => (
          <div 
            key={slideIndex}
            className={`blog-slide ${slideIndex === currentSlide ? 'active' : ''}`}
          >
            {slide.map((blog, blogIndex) => (
              <div key={blogIndex} className="blog-card">
                <img src={blog.image} alt={blog.title} loading="lazy" decoding="async" />
                <div className="blog-info">
                  <h3>{blog.title}</h3>
                  <p>{blog.description}</p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="slider-controls">
        <button className="prev-btn" onClick={prevSlide}>❮</button>
        <button className="next-btn" onClick={nextSlide}>❯</button>
      </div>

      <div className="slider-dots">
        {blogSlides.map((_, index) => (
          <span 
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>
    </section>
  )
}

export default Blogs