import { useState, useEffect } from 'react'

const ReviewsSection = () => {
  const [reviews, setReviews] = useState([])
  const [reviewerName, setReviewerName] = useState('')
  const [rating, setRating] = useState(0)
  const [comment, setComment] = useState('')
  const [sortBy, setSortBy] = useState('latest')
  const [searchTerm, setSearchTerm] = useState('')

  // Sample reviews data
  const sampleReviews = [
    { id: 1, name: "Sarah Johnson", rating: 5, comment: "Excellent service! They helped me complete my nursing thesis on time.", date: "2025-01-15", approved: true, helpful: 12 },
    { id: 2, name: "Mike Chen", rating: 4, comment: "Very professional and knowledgeable. Great support for my assignments.", date: "2025-01-14", approved: true, helpful: 8 },
    { id: 3, name: "Emma Wilson", rating: 5, comment: "Outstanding quality work. Highly recommend for nursing students!", date: "2025-01-13", approved: true, helpful: 15 }
  ]

  useEffect(() => {
    // Load reviews from localStorage or use sample data
    const storedReviews = localStorage.getItem('nurseProReviews')
    if (storedReviews) {
      setReviews(JSON.parse(storedReviews))
    } else {
      setReviews(sampleReviews)
      localStorage.setItem('nurseProReviews', JSON.stringify(sampleReviews))
    }
  }, [])

  const handleSubmitReview = (e) => {
    e.preventDefault()
    if (rating > 0 && comment.trim()) {
      const newReview = {
        id: Date.now(),
        name: reviewerName.trim() || 'Anonymous',
        rating: parseInt(rating),
        comment: comment.trim(),
        date: new Date().toISOString().split('T')[0],
        approved: false,
        helpful: 0
      }
      
      const updatedReviews = [...reviews, newReview]
      setReviews(updatedReviews)
      localStorage.setItem('nurseProReviews', JSON.stringify(updatedReviews))
      
      // Reset form
      setReviewerName('')
      setRating(0)
      setComment('')
      
      alert('Review submitted! It will be published after approval.')
    }
  }

  const getAverageRating = () => {
    const approvedReviews = reviews.filter(r => r.approved)
    if (approvedReviews.length === 0) return 0
    const sum = approvedReviews.reduce((acc, r) => acc + r.rating, 0)
    return (sum / approvedReviews.length).toFixed(1)
  }

  const getRatingDistribution = () => {
    const approved = reviews.filter(r => r.approved)
    const distribution = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 }
    approved.forEach(review => {
      distribution[review.rating]++
    })
    return distribution
  }

  const generateStars = (rating) => {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating)
  }

  const filteredReviews = reviews
    .filter(r => r.approved)
    .filter(r => searchTerm === '' || 
      r.comment.toLowerCase().includes(searchTerm.toLowerCase()) ||
      r.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      switch(sortBy) {
        case 'latest': return new Date(b.date) - new Date(a.date)
        case 'oldest': return new Date(a.date) - new Date(b.date)
        case 'highest': return b.rating - a.rating
        case 'lowest': return a.rating - b.rating
        case 'helpful': return (b.helpful || 0) - (a.helpful || 0)
        default: return 0
      }
    })

  const distribution = getRatingDistribution()
  const totalReviews = reviews.filter(r => r.approved).length

  return (
    <section className="reviews-section" id="reviews">
      <h2>⭐ Student Reviews</h2>
      
      {/* Reviews Summary */}
      <div className="reviews-summary">
        <div className="average-rating">
          <div className="rating-display">
            <div className="avg-score">{getAverageRating()}</div>
            <div className="stars-display">{generateStars(Math.round(getAverageRating()))}</div>
          </div>
          <p>Based on {totalReviews} reviews</p>
        </div>

        <div className="rating-distribution">
          <h4>Rating Breakdown</h4>
          {[5, 4, 3, 2, 1].map(star => (
            <div key={star} className="rating-bar">
              <span className="rating-label">{star}★</span>
              <div className="rating-progress">
                <div 
                  className="rating-fill" 
                  style={{ width: `${totalReviews > 0 ? (distribution[star] / totalReviews) * 100 : 0}%` }}
                ></div>
              </div>
              <span className="rating-count">{distribution[star]}</span>
            </div>
          ))}
        </div>

        <div className="sort-controls">
          <label>Sort by:</label>
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="latest">Latest</option>
            <option value="oldest">Oldest</option>
            <option value="highest">Highest Rating</option>
            <option value="lowest">Lowest Rating</option>
            <option value="helpful">Most Helpful</option>
          </select>
        </div>
      </div>

      {/* Search Reviews */}
      <div className="reviews-search">
        <div className="search-box">
          <input
            type="text"
            placeholder="Search reviews..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="search-btn">🔍</button>
          {searchTerm && (
            <button 
              className="clear-search-btn"
              onClick={() => setSearchTerm('')}
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {/* Submit Review Form */}
      <div className="submit-review">
        <h3>📝 Write a Review</h3>
        <form onSubmit={handleSubmitReview}>
          <input
            type="text"
            placeholder="Your name (optional)"
            value={reviewerName}
            onChange={(e) => setReviewerName(e.target.value)}
          />
          
          <div className="rating-input">
            <label>Your Rating:</label>
            <div className="star-rating">
              {[1, 2, 3, 4, 5].map(star => (
                <span
                  key={star}
                  className={`star ${star <= rating ? 'active' : ''}`}
                  onClick={() => setRating(star)}
                >
                  ★
                </span>
              ))}
            </div>
          </div>

          <textarea
            placeholder="Share your experience..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
            minLength={10}
          />
          
          <button type="submit">Submit Review</button>
        </form>
      </div>

      {/* Display Reviews */}
      <div className="reviews-display">
        <div className="reviews-header">
          <h3>All Reviews ({filteredReviews.length})</h3>
        </div>
        
        {filteredReviews.map(review => (
          <div key={review.id} className="review-item">
            <div className="review-header">
              <div className="reviewer-info">
                <span className="reviewer-name">{review.name}</span>
                <span className="review-rating">{generateStars(review.rating)}</span>
              </div>
              <span className="review-date">{review.date}</span>
            </div>
            <div className="review-comment">{review.comment}</div>
            <div className="review-actions">
              <button className="helpful-btn">
                👍 Helpful ({review.helpful || 0})
              </button>
              <button className="share-btn">
                📤 Share
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ReviewsSection