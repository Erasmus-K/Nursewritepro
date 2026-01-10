import { useState, useEffect } from 'react'

const Admin = () => {
  const [activeTab, setActiveTab] = useState('reviews')
  const [reviews, setReviews] = useState([])
  const [questions, setQuestions] = useState([])
  const [stats, setStats] = useState({
    pendingReviews: 0,
    approvedReviews: 0,
    avgRating: 0,
    pendingQuestions: 0,
    approvedQuestions: 0
  })

  useEffect(() => {
    loadData()
  }, [])

  const loadData = () => {
    // Load reviews from localStorage
    const storedReviews = JSON.parse(localStorage.getItem('nurseProReviews') || '[]')
    setReviews(storedReviews)

    // Load questions from localStorage or default data
    const storedQuestions = JSON.parse(localStorage.getItem('nurseProQuestions') || '[]')
    setQuestions(storedQuestions)

    // Calculate stats
    const pendingReviews = storedReviews.filter(r => !r.approved).length
    const approvedReviews = storedReviews.filter(r => r.approved).length
    const avgRating = approvedReviews > 0 
      ? (storedReviews.filter(r => r.approved).reduce((sum, r) => sum + r.rating, 0) / approvedReviews).toFixed(1)
      : 0

    setStats({
      pendingReviews,
      approvedReviews,
      avgRating,
      pendingQuestions: storedQuestions.filter(q => !q.approved).length,
      approvedQuestions: storedQuestions.filter(q => q.approved).length
    })
  }

  const approveReview = (id) => {
    const updatedReviews = reviews.map(r => 
      r.id === id ? { ...r, approved: true } : r
    )
    setReviews(updatedReviews)
    localStorage.setItem('nurseProReviews', JSON.stringify(updatedReviews))
    loadData()
  }

  const deleteReview = (id) => {
    if (confirm('Delete this review?')) {
      const updatedReviews = reviews.filter(r => r.id !== id)
      setReviews(updatedReviews)
      localStorage.setItem('nurseProReviews', JSON.stringify(updatedReviews))
      loadData()
    }
  }

  const approveQuestion = (id) => {
    const updatedQuestions = questions.map(q => 
      q.id === id ? { ...q, approved: true } : q
    )
    setQuestions(updatedQuestions)
    localStorage.setItem('nurseProQuestions', JSON.stringify(updatedQuestions))
    loadData()
  }

  const deleteQuestion = (id) => {
    if (confirm('Delete this question?')) {
      const updatedQuestions = questions.filter(q => q.id !== id)
      setQuestions(updatedQuestions)
      localStorage.setItem('nurseProQuestions', JSON.stringify(updatedQuestions))
      loadData()
    }
  }

  const generateStars = (rating) => '★'.repeat(rating) + '☆'.repeat(5 - rating)

  return (
    <div className="admin-panel">
      <div className="admin-header">
        <h1>🛠️ Admin Panel</h1>
        <div className="admin-stats">
          <div className="stat-card">
            <h3>{stats.pendingReviews}</h3>
            <p>Pending Reviews</p>
          </div>
          <div className="stat-card">
            <h3>{stats.approvedReviews}</h3>
            <p>Approved Reviews</p>
          </div>
          <div className="stat-card">
            <h3>{stats.avgRating}</h3>
            <p>Avg Rating</p>
          </div>
          <div className="stat-card">
            <h3>{stats.pendingQuestions}</h3>
            <p>Pending Q&A</p>
          </div>
        </div>
      </div>

      <div className="admin-tabs">
        <button 
          className={activeTab === 'reviews' ? 'active' : ''}
          onClick={() => setActiveTab('reviews')}
        >
          Reviews Management
        </button>
        <button 
          className={activeTab === 'questions' ? 'active' : ''}
          onClick={() => setActiveTab('questions')}
        >
          Q&A Management
        </button>
      </div>

      {activeTab === 'reviews' && (
        <div className="admin-content">
          <h2>Reviews Management</h2>
          
          <div className="admin-section">
            <h3>Pending Reviews ({stats.pendingReviews})</h3>
            {reviews.filter(r => !r.approved).map(review => (
              <div key={review.id} className="admin-item">
                <div className="item-header">
                  <span className="username">{review.name}</span>
                  <span className="date">{review.date}</span>
                </div>
                <div className="rating">
                  <span style={{color: '#ffc107', fontSize: '1.2rem'}}>
                    {generateStars(review.rating)}
                  </span>
                  <span>({review.rating}/5)</span>
                </div>
                <div className="content">{review.comment}</div>
                <div className="admin-actions">
                  <button 
                    className="btn-approve"
                    onClick={() => approveReview(review.id)}
                  >
                    Approve
                  </button>
                  <button 
                    className="btn-delete"
                    onClick={() => deleteReview(review.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="admin-section">
            <h3>Approved Reviews ({stats.approvedReviews})</h3>
            {reviews.filter(r => r.approved).map(review => (
              <div key={review.id} className="admin-item approved">
                <div className="item-header">
                  <span className="username">{review.name}</span>
                  <span className="date">{review.date}</span>
                </div>
                <div className="rating">
                  <span style={{color: '#ffc107', fontSize: '1.2rem'}}>
                    {generateStars(review.rating)}
                  </span>
                  <span>({review.rating}/5)</span>
                </div>
                <div className="content">{review.comment}</div>
                <div className="admin-actions">
                  <button 
                    className="btn-delete"
                    onClick={() => deleteReview(review.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'questions' && (
        <div className="admin-content">
          <h2>Q&A Management</h2>
          
          <div className="admin-section">
            <h3>Pending Questions ({stats.pendingQuestions})</h3>
            {questions.filter(q => !q.approved).map(question => (
              <div key={question.id} className="admin-item">
                <div className="item-header">
                  <span className="username">{question.username || 'Anonymous'}</span>
                  <span className="date">{question.date}</span>
                </div>
                <div className="content">{question.question}</div>
                <div className="admin-actions">
                  <button 
                    className="btn-approve"
                    onClick={() => approveQuestion(question.id)}
                  >
                    Approve
                  </button>
                  <button 
                    className="btn-delete"
                    onClick={() => deleteQuestion(question.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="admin-section">
            <h3>Approved Questions ({stats.approvedQuestions})</h3>
            {questions.filter(q => q.approved).map(question => (
              <div key={question.id} className="admin-item approved">
                <div className="item-header">
                  <span className="username">{question.username || 'Anonymous'}</span>
                  <span className="date">{question.date}</span>
                </div>
                <div className="content">{question.question}</div>
                <div className="answer">{question.answer}</div>
                <div className="admin-actions">
                  <button 
                    className="btn-delete"
                    onClick={() => deleteQuestion(question.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <style jsx>{`
        .admin-panel {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
          font-family: 'Segoe UI', sans-serif;
        }

        .admin-header {
          background: linear-gradient(135deg, #2c5aa0, #3498db);
          color: white;
          padding: 30px;
          border-radius: 15px;
          margin-bottom: 30px;
        }

        .admin-header h1 {
          margin-bottom: 20px;
          font-size: 2rem;
        }

        .admin-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 20px;
        }

        .stat-card {
          background: rgba(255,255,255,0.1);
          padding: 20px;
          border-radius: 10px;
          text-align: center;
        }

        .stat-card h3 {
          font-size: 2rem;
          margin-bottom: 5px;
        }

        .admin-tabs {
          display: flex;
          gap: 10px;
          margin-bottom: 30px;
        }

        .admin-tabs button {
          padding: 12px 24px;
          border: none;
          background: #f8f9fc;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s;
        }

        .admin-tabs button.active {
          background: #2c5aa0;
          color: white;
        }

        .admin-section {
          margin-bottom: 40px;
        }

        .admin-section h3 {
          color: #2c5aa0;
          margin-bottom: 20px;
          padding-bottom: 10px;
          border-bottom: 2px solid #e9ecef;
        }

        .admin-item {
          background: white;
          border: 1px solid #e9ecef;
          border-radius: 10px;
          padding: 20px;
          margin-bottom: 15px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }

        .admin-item.approved {
          border-left: 4px solid #28a745;
        }

        .item-header {
          display: flex;
          justify-content: space-between;
          margin-bottom: 10px;
        }

        .username {
          font-weight: 600;
          color: #2c5aa0;
        }

        .date {
          color: #6c757d;
          font-size: 0.9rem;
        }

        .rating {
          margin-bottom: 10px;
        }

        .content {
          margin-bottom: 15px;
          line-height: 1.5;
        }

        .answer {
          background: #f8f9fc;
          padding: 10px;
          border-radius: 5px;
          margin-bottom: 15px;
          font-style: italic;
        }

        .admin-actions {
          display: flex;
          gap: 10px;
        }

        .btn-approve {
          background: #28a745;
          color: white;
          border: none;
          padding: 8px 16px;
          border-radius: 5px;
          cursor: pointer;
        }

        .btn-delete {
          background: #dc3545;
          color: white;
          border: none;
          padding: 8px 16px;
          border-radius: 5px;
          cursor: pointer;
        }

        .btn-approve:hover, .btn-delete:hover {
          opacity: 0.8;
        }

        @media (max-width: 768px) {
          .admin-panel {
            padding: 10px;
          }
          
          .admin-stats {
            grid-template-columns: repeat(2, 1fr);
          }
          
          .admin-tabs {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  )
}

export default Admin