import FAQItem from './FAQItem'

const FAQList = ({ faqs }) => {
  return (
    <div className="faq-list-card">
      <h2 className="section-title">
        <span className="icon">📋</span>
        Frequently Asked Questions
      </h2>
      
      <div className="faq-items">
        {faqs.map(faq => (
          <FAQItem key={faq.id} faq={faq} />
        ))}
      </div>
    </div>
  )
}

export default FAQList