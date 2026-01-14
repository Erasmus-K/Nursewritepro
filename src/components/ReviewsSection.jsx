import { useState, useEffect } from 'react'
import { supabase } from '../supabase'

const ReviewsSection = () => {
  const [reviews, setReviews] = useState([])
  const [reviewerName, setReviewerName] = useState('')
  const [rating, setRating] = useState(0)
  const [comment, setComment] = useState('')
  const [sortBy, setSortBy] = useState('latest')
  const [searchTerm, setSearchTerm] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetchReviews()
  }, [])

  const fetchReviews = async () => {
    try {
      const { data, error } = await supabase
        .from('reviews')
        .select('*')
        .eq('approved', true)
        .order('created_at', { ascending: false })
      
      if (error) throw error
      setReviews(data || [])
    } catch (error) {
      console.error('Error fetching reviews:', error)
    }
  }

  const handleSubmitReview = async (e) => {
    e.preventDefault()
    if (rating > 0 && comment.trim()) {
      setLoading(true)
      try {
        const { error } = await supabase
          .from('reviews')
          .insert({
            name: reviewerName.trim() || 'Anonymous',
            rating: parseInt(rating),
            comment: comment.trim(),
            approved: false,
            helpful: 0
          })
        
        if (error) throw error
        
        // Reset form
        setReviewerName('')
        setRating(0)
        setComment('')
        
        alert('Review submitted! It will be published after approval.')
      } catch (error) {
        console.error('Error submitting review:', error)
        alert('Error submitting review. Please try again.')
      } finally {
        setLoading(false)
      }
    }
  }

  const getAverageRating = () => {
    if (reviews.length === 0) return 0
    const sum = reviews.reduce((acc, r) => acc + r.rating, 0)
    return (sum / reviews.length).toFixed(1)
  }

  const getRatingDistribution = () => {
    const distribution = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 }
    reviews.forEach(review => {
      distribution[review.rating]++
    })
    return distribution
  }

  const generateStars = (rating) => {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating)
  }

  const filteredReviews = reviews
    .filter(r => searchTerm === '' || 
      r.comment.toLowerCase().includes(searchTerm.toLowerCase()) ||
      r.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      switch(sortBy) {
        case 'latest': return new Date(b.created_at) - new Date(a.created_at)
        case 'oldest': return new Date(a.created_at) - new Date(b.created_at)
        case 'highest': return b.rating - a.rating
        case 'lowest': return a.rating - b.rating
        case 'helpful': return (b.helpful || 0) - (a.helpful || 0)
        default: return 0
      }
    })

  const distribution = getRatingDistribution()
  const totalReviews = reviews.length

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
        <form id="reviewForm" onSubmit={handleSubmitReview}>
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
          
          <button type="submit" disabled={loading}>
            {loading ? 'Submitting...' : 'Submit Review'}
          </button>
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
              <span className="review-date">{new Date(review.created_at).toLocaleDateString()}</span>
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