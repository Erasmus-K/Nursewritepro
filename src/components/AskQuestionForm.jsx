import { useState } from 'react'

const AskQuestionForm = ({ onSubmit }) => {
  const [name, setName] = useState('')
  const [question, setQuestion] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (question.trim()) {
      onSubmit({
        question: question.trim(),
        askedBy: name.trim() || 'Anonymous'
      })
      setName('')
      setQuestion('')
    }
  }

  return (
    <div className="ask-question-card">
      <h2 className="section-title">
        <span className="icon">❓</span>
        Ask a Question
      </h2>
      <p className="section-subtitle">Have questions about our services? Ask away!</p>
      
      <form onSubmit={handleSubmit} className="question-form">
        <input
          type="text"
          placeholder="Your name (optional)"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="form-input"
        />
        <textarea
          placeholder="Type your question here..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          required
          className="form-textarea"
          rows="4"
        />
        <button type="submit" className="submit-btn">
          Ask Question
        </button>
      </form>
    </div>
  )
}

export default AskQuestionForm