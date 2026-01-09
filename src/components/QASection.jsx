import { useState, useEffect } from 'react'
import qaData from '../data/qa-data.json'

const QASection = () => {
  const [questions, setQuestions] = useState([])
  const [questionText, setQuestionText] = useState('')
  const [username, setUsername] = useState('')
  const [activeQuestion, setActiveQuestion] = useState(null)

  useEffect(() => {
    // Load initial questions from JSON data
    setQuestions(qaData.questions || [])
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (questionText.trim()) {
      const newQuestion = {
        id: Date.now(),
        question: questionText.trim(),
        answer: "Thank you for your question! We'll respond soon.",
        category: "general",
        date: new Date().toISOString().split('T')[0],
        approved: false
      }
      
      setQuestions(prev => [...prev, newQuestion])
      setQuestionText('')
      setUsername('')
      
      // Show notification
      alert('Question submitted! We\'ll respond soon.')
    }
  }

  const toggleAnswer = (id) => {
    setActiveQuestion(activeQuestion === id ? null : id)
  }

  const approvedQuestions = questions.filter(q => q.approved !== false)

  return (
    <section className="qa-section" id="qa">
      <div className="qa-container">
        <div className="ask-question">
          <h2>❓ Ask a Question</h2>
          <p>Have questions about our services? Ask away!</p>
          
          <form id="questionForm" onSubmit={handleSubmit}>
            <input
              type="text"
              id="usernameInput"
              placeholder="Your name (optional)"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="text"
              id="questionInput"
              placeholder="Type your question here..."
              value={questionText}
              onChange={(e) => setQuestionText(e.target.value)}
              required
            />
            <button type="submit">Ask Question</button>
          </form>
        </div>

        <div className="questions-list">
          <h3>📋 Frequently Asked Questions</h3>
          <div id="questionsContainer">
            {approvedQuestions.map((question) => (
              <div 
                key={question.id}
                className={`question-item ${activeQuestion === question.id ? 'active' : ''}`}
                onClick={() => toggleAnswer(question.id)}
              >
                <div className="question-text">{question.question}</div>
                <div className="answer-text" id={`answer-${question.id}`}>
                  {question.answer}
                </div>
                <div className="question-meta">
                  <span className="username">Asked by: {question.username || 'Anonymous'}</span>
                  <span className="question-date">{question.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default QASection