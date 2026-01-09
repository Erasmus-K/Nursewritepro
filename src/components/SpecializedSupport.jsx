const SpecializedSupport = () => {
  const supportItems = [
    {
      title: "Exam Preparation Help",
      description: "Step-by-step study plans and practice questions — build confidence before test day."
    },
    {
      title: "Nursing Test Support",
      description: "Targeted reviews and smart strategies — designed for nursing and health sciences exams."
    },
    {
      title: "Writing & Discussion Help", 
      description: "Templates, outlines, and guidance — save time and boost the quality of your posts and papers."
    },
    {
      title: "Daily Motivation & Study Tips",
      description: "Quick tips, reminders, and encouragement — stay consistent and productive."
    }
  ]

  return (
    <section className="specialized-support">
      <h2>Specialized Support</h2>
      <div className="support-items">
        {supportItems.map((item, index) => (
          <div key={index} className="support-item">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default SpecializedSupport