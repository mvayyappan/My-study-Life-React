import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getProgress } from '../../../api'
import './progress.css'

export default function Progress() {
  const [progress, setProgress] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getProgress()
      .then(setProgress)
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <div className="prog-loading"><div className="spinner"></div><p>Loading...</p></div>

  const totalQuizzes = progress.length
  const avgScore = totalQuizzes
    ? (progress.reduce((s, p) => s + p.score, 0) / totalQuizzes).toFixed(1)
    : 0
  const totalCorrect = progress.reduce((s, p) => s + p.correct_answers, 0)
  const totalWrong = progress.reduce((s, p) => s + p.wrong_answers, 0)

  return (
    <div className="progress-page">
      <div className="progress-hero">
        <h1>📊 My Progress</h1>
        <p>Track your quiz performance over time</p>
      </div>

      <div className="progress-container">
        <div className="stats-row">
          <div className="stat-box blue">
            <i className="fa-solid fa-clipboard-list"></i>
            <span>{totalQuizzes}</span>
            <p>Quizzes Taken</p>
          </div>
          <div className="stat-box green">
            <i className="fa-solid fa-circle-check"></i>
            <span>{totalCorrect}</span>
            <p>Correct Answers</p>
          </div>
          <div className="stat-box red">
            <i className="fa-solid fa-circle-xmark"></i>
            <span>{totalWrong}</span>
            <p>Wrong Answers</p>
          </div>
          <div className="stat-box purple">
            <i className="fa-solid fa-star"></i>
            <span>{avgScore}%</span>
            <p>Avg Score</p>
          </div>
        </div>

        {progress.length === 0 ? (
          <div className="prog-empty">
            <i className="fa-solid fa-chart-simple"></i>
            <p>No quizzes taken yet!</p>
            <Link to="/quiz" className="take-quiz-btn">Take a Quiz Now</Link>
          </div>
        ) : (
          <div className="progress-list">
            <h2>Quiz History</h2>
            {progress.map((item) => (
              <div className="progress-item" key={item.id}>
                <div className="prog-info">
                  <h4>Quiz #{item.quiz_id}</h4>
                  <p>{new Date(item.completed_at).toLocaleDateString('en-IN', {
                    day: 'numeric', month: 'short', year: 'numeric'
                  })}</p>
                </div>
                <div className="prog-bar-wrap">
                  <div className="prog-bar">
                    <div
                      className="prog-fill"
                      style={{ width: `${item.score}%`, background: item.score >= 70 ? '#10b981' : item.score >= 40 ? '#f59e0b' : '#ef4444' }}
                    ></div>
                  </div>
                  <span className="prog-score">{Math.round(item.score)}%</span>
                </div>
                <div className="prog-counts">
                  <span className="correct">✓ {item.correct_answers}</span>
                  <span className="wrong">✗ {item.wrong_answers}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
