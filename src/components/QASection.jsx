import { useState } from 'react'
import AskQuestionForm from './AskQuestionForm'
import FAQList from './FAQList'
import './QASection.css'

const QASection = () => {
  const [faqs, setFaqs] = useState([
    {
      id: 1,
      question: "How long does it take to complete an assignment?",
      askedBy: "Anonymous",
      date: "2025-01-15"
    },
    {
      id: 2,
      question: "Do you help with nursing exams?",
      askedBy: "Anonymous", 
      date: "2025-01-14"
    }
  ])

  const handleNewQuestion = (questionData) => {
    const newFaq = {
      id: Date.now(),
      ...questionData,
      date: new Date().toISOString().split('T')[0]
    }
    setFaqs(prev => [newFaq, ...prev])
  }

  return (
    <section className="qa-section">
      <AskQuestionForm onSubmit={handleNewQuestion} />
      <FAQList faqs={faqs} />
    </section>
  )
}

export default QASection