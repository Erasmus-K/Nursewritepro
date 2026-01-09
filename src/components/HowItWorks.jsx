const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      title: "Reach Out",
      description: "Contact us via WhatsApp or email."
    },
    {
      number: "2", 
      title: "Share Details",
      description: "Tell us your course, deadline & needs."
    },
    {
      number: "3",
      title: "Get Started", 
      description: "We match you with the right expert."
    },
    {
      number: "4",
      title: "Receive Results",
      description: "High-quality work delivered on time."
    }
  ]

  return (
    <section className="how-it-works">
      <h2>How It Works</h2>
      <div className="steps">
        {steps.map((step, index) => (
          <div key={index} className="step">
            <span className="number">{step.number}</span>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default HowItWorks