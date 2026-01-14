const FAQItem = ({ faq }) => {
  return (
    <div className="faq-item">
      <div className="faq-question">{faq.question}</div>
      <div className="faq-meta">
        <span className="faq-author">Asked by: {faq.asked_by}</span>
        <span className="faq-date">{new Date(faq.created_at).toLocaleDateString()}</span>
      </div>
    </div>
  )
}

export default FAQItem