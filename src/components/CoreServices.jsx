const CoreServices = () => {
  const services = [
    {
      title: "Online Classes Help",
      description: "Expert support for lectures, discussions, quizzes, and participation — so you never fall behind."
    },
    {
      title: "Online Exams Help", 
      description: "Guidance through setup, strategy, and execution — ethical and within your school's guidelines."
    },
    {
      title: "Essays & Thesis Help",
      description: "From brainstorming to final edits — compelling, well-researched papers with proper formatting."
    },
    {
      title: "Assignment Help",
      description: "We break down complex tasks and deliver clear, accurate solutions on time."
    },
    {
      title: "Nursing Research Proposal",
      description: "Help student craft strong research proposals and build conceptual frameworks using current nursing journals and evidenced-based sources."
    },
    {
      title: "Case Study Assistance", 
      description: "Help students develop accurate and evidence-based nursing care-plans."
    }
  ]

  return (
    <section className="core-services" id="services">
      <h2>Our Core Services</h2>
      <div className="core-services-container">
        {services.map((service, index) => (
          <div key={index} className="core-service-card">
            <div className="core-card-inner">
              <div className="core-card-front">
                <h3>{service.title}</h3>
              </div>
              <div className="core-card-back">
                <p>{service.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default CoreServices