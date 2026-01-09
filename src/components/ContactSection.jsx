import { useState } from 'react'

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    urgency: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
        urgency: ''
      })
      
      alert('Message sent successfully! We\'ll get back to you within 2 hours.')
      
      // Optional WhatsApp integration
      const whatsappMessage = `Hi! I'm interested in your services.

*Name:* ${formData.name}
*Email:* ${formData.email}
*Phone:* ${formData.phone || 'Not provided'}
*Service:* ${formData.service}
*Urgency:* ${formData.urgency || 'Not specified'}

*Message:*
${formData.message}

Please get back to me soon. Thank you!`
      
      setTimeout(() => {
        if (confirm('Would you like to continue this conversation on WhatsApp for faster response?')) {
          const whatsappUrl = `https://wa.me/12058665269?text=${encodeURIComponent(whatsappMessage)}`
          window.open(whatsappUrl, '_blank')
        }
      }, 2000)
    }, 2000)
  }

  return (
    <section className="contact-section" id="contact">
      <h2>📞 Get In Touch</h2>
      <p className="subtitle">Ready to excel in your academic journey? Contact us today!</p>
      
      <div className="contact-container">
        <div className="contact-form">
          <h3>Send us a Message</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <input
                type="text"
                name="name"
                placeholder="Your Name *"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email *"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            
            <div className="form-row">
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleInputChange}
              />
              <select
                name="service"
                value={formData.service}
                onChange={handleInputChange}
                required
              >
                <option value="">Select Service *</option>
                <option value="online-classes">Online Classes Help</option>
                <option value="exams">Online Exams Help</option>
                <option value="essays">Essays & Thesis</option>
                <option value="assignments">Assignment Help</option>
                <option value="research">Research Proposal</option>
                <option value="case-study">Case Study Assistance</option>
              </select>
            </div>

            <textarea
              name="message"
              placeholder="Tell us about your project, deadline, and requirements *"
              value={formData.message}
              onChange={handleInputChange}
              required
            />

            <div className="urgency-level">
              <label>Urgency Level:</label>
              <div className="urgency-options">
                <label>
                  <input
                    type="radio"
                    name="urgency"
                    value="standard"
                    checked={formData.urgency === 'standard'}
                    onChange={handleInputChange}
                  />
                  Standard (5-7 days)
                </label>
                <label>
                  <input
                    type="radio"
                    name="urgency"
                    value="urgent"
                    checked={formData.urgency === 'urgent'}
                    onChange={handleInputChange}
                  />
                  Urgent (2-4 days)
                </label>
                <label>
                  <input
                    type="radio"
                    name="urgency"
                    value="emergency"
                    checked={formData.urgency === 'emergency'}
                    onChange={handleInputChange}
                  />
                  Emergency (24-48 hours)
                </label>
              </div>
            </div>

            <button 
              type="submit" 
              className="btn-submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <i className="fas fa-spinner fa-spin"></i>
                  Sending...
                </>
              ) : (
                <>
                  <i className="fas fa-paper-plane"></i>
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>

        <div className="contact-info">
          <h3>Contact Information</h3>
          
          <div className="contact-methods">
            <div className="contact-method">
              <i className="fas fa-envelope"></i>
              <div>
                <h4>Email</h4>
                <p><a href="mailto:support@nursepro.com">support@nursepro.com</a></p>
                <small>We respond within 2 hours</small>
              </div>
            </div>

            <div className="contact-method">
              <i className="fab fa-whatsapp"></i>
              <div>
                <h4>WhatsApp</h4>
                <p><a href="https://wa.me/12058665269">+1 (205) 866-5269</a></p>
                <small>Available 24/7 for instant support</small>
              </div>
            </div>

            <div className="contact-method">
              <i className="fas fa-phone"></i>
              <div>
                <h4>Phone</h4>
                <p><a href="tel:+12058665269">+1 (205) 866-5269</a></p>
                <small>Mon-Fri: 8AM-10PM EST</small>
              </div>
            </div>
          </div>

          <div className="response-time">
            <h4><i className="fas fa-clock"></i> Response Times</h4>
            <ul>
              <li>WhatsApp: Instant - 15 minutes</li>
              <li>Email: 1-2 hours</li>
              <li>Phone: Available during business hours</li>
            </ul>
          </div>

          <div className="guarantees">
            <h4><i className="fas fa-shield-alt"></i> Our Guarantees</h4>
            <ul>
              <li>100% Original Work</li>
              <li>On-Time Delivery</li>
              <li>24/7 Support</li>
              <li>Unlimited Revisions</li>
              <li>Money-Back Guarantee</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection