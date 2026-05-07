import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getQuizzes } from '../../../api'
import './quiz.css'

export default function Quiz() {
  const [quizzes, setQuizzes] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    getQuizzes()
      .then(setQuizzes)
      .catch(() => setError('Failed to load quizzes'))
      .finally(() => setLoading(false))
  }, [])

  const subjectColors = {
    default: '#6c63ff',
    Math: '#f59e0b',
    Science: '#10b981',
    History: '#ef4444',
    Tamil: '#3b82f6',
    English: '#8b5cf6',
  }

  if (loading) return <div className="quiz-loading"><div className="spinner"></div><p>Loading Quizzes...</p></div>
  if (error) return <div className="quiz-error">{error}</div>

  return (
    <div className="quiz-page">
      <div className="quiz-hero">
        <h1>📝 Mock Tests</h1>
        <p>Test your knowledge and track your progress</p>
      </div>

      <div className="quiz-container">
        {quizzes.length === 0 ? (
          <div className="quiz-empty">
            <i className="fa-solid fa-clipboard-question"></i>
            <p>No quizzes available yet. Check back soon!</p>
          </div>
        ) : (
          <div className="quiz-grid">
            {quizzes.map((quiz) => (
              <div className="quiz-card" key={quiz.id}>
                <div
                  className="quiz-card-header"
                  style={{ background: subjectColors[quiz.subject] || subjectColors.default }}
                >
                  <span className="quiz-subject">{quiz.subject}</span>
                  <span className="quiz-grade">Grade {quiz.grade}</span>
                </div>
                <div className="quiz-card-body">
                  <h3>{quiz.title}</h3>
                  <p>{quiz.description}</p>
                  <div className="quiz-meta">
                    <span><i className="fa-solid fa-circle-question"></i> {quiz.total_questions} Questions</span>
                  </div>
                </div>
                <div className="quiz-card-footer">
                  <Link to={`/quiz/${quiz.id}`} className="quiz-start-btn">
                    Start Quiz <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
