import { useState, useEffect } from 'react'
import { supabase } from '../supabase'
import AskQuestionForm from './AskQuestionForm'
import FAQList from './FAQList'
import './QASection.css'

const QASection = () => {
  const [faqs, setFaqs] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetchFAQs()
  }, [])

  const fetchFAQs = async () => {
    try {
      const { data, error } = await supabase
        .from('questions')
        .select('*')
        .eq('approved', true)
        .order('created_at', { ascending: false })
      
      if (error) throw error
      setFaqs(data || [])
    } catch (error) {
      console.error('Error fetching FAQs:', error)
    }
  }

  const handleNewQuestion = async (questionData) => {
    setLoading(true)
    try {
      const { error } = await supabase
        .from('questions')
        .insert({
          question: questionData.question,
          asked_by: questionData.askedBy,
          approved: false
        })
      
      if (error) throw error
      alert('Question submitted! It will be published after approval.')
    } catch (error) {
      console.error('Error submitting question:', error)
      alert('Error submitting question. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="qa-section">
      <AskQuestionForm onSubmit={handleNewQuestion} loading={loading} />
      <FAQList faqs={faqs} />
    </section>
  )
}

export default QASection