const FAQItem = ({ faq }) => {
  return (
    <div className="faq-item">
      <div className="faq-question">{faq.question}</div>
      <div className="faq-meta">
        <span className="faq-author">Asked by: {faq.askedBy}</span>
        <span className="faq-date">{faq.date}</span>
      </div>
    </div>
  )
}

export default FAQItem