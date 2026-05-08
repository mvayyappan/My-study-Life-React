import { useState, useEffect, useCallback } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getQuizWithQuestions, submitQuizAttempt } from '../../../api'
import './quiz.css'

export default function QuizAttempt() {
  const { id } = useParams()
  const navigate = useNavigate()

  const [quiz, setQuiz] = useState(null)
  const [questions, setQuestions] = useState([])
  const [current, setCurrent] = useState(0)
  const [answers, setAnswers] = useState({})
  const [seconds, setSeconds] = useState(0)
  const [submitted, setSubmitted] = useState(false)
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  // Fetch quiz
  useEffect(() => {
    getQuizWithQuestions(id)
      .then(data => {
        setQuiz(data)
        setQuestions(data.questions || [])
        setLoading(false)
      })
      .catch(() => { setError('Failed to load quiz.'); setLoading(false) })
  }, [id])

  // Timer
  useEffect(() => {
    if (loading || submitted) return
    const t = setInterval(() => setSeconds(s => s + 1), 1000)
    return () => clearInterval(t)
  }, [loading, submitted])

  const formatTime = (s) => {
    const m = Math.floor(s / 60).toString().padStart(2, '0')
    const sec = (s % 60).toString().padStart(2, '0')
    return `${m}:${sec}`
  }

  const selectAnswer = (qId, optionKey) => {
    if (submitted) return
    setAnswers(prev => ({ ...prev, [qId]: optionKey }))
  }

  const handleSubmit = useCallback(async () => {
    const total = questions.length
    const correct = questions.filter(q => answers[q.id] === q.correct_answer).length
    const wrong = total - correct
    const score = total > 0 ? Math.round((correct / total) * 100) : 0

    setResult({ total, correct, wrong, score })
    setSubmitted(true)

    try {
      await submitQuizAttempt(id, answers)
    } catch (e) {
      console.error('Submit error:', e)
    }
  }, [questions, answers, id])

  const clearAll = () => {
    if (submitted) return
    setAnswers({})
  }

  if (loading) return (
    <div style={{ textAlign: 'center', padding: '80px', color: '#667eea', fontSize: '18px' }}>
      <i className="fa-solid fa-spinner fa-spin"></i> Loading quiz...
    </div>
  )
  if (error) return <div style={{ textAlign: 'center', padding: '80px', color: 'red' }}>{error}</div>
  if (!questions.length) return <div style={{ textAlign: 'center', padding: '80px' }}>No questions found.</div>

  const q = questions[current]

  // Backend stores options as option_a, option_b, option_c, option_d
  const buildOptions = (q) => {
    // If options object/string exists, parse it
    if (q.options) {
      let raw = q.options
      if (typeof raw === 'string') { try { raw = JSON.parse(raw) } catch { raw = {} } }
      if (Array.isArray(raw)) {
        const keys = ['a', 'b', 'c', 'd', 'e']
        return Object.fromEntries(raw.map((v, i) => [keys[i], v]))
      }
      if (Object.keys(raw).length > 0) return raw
    }
    // Fallback: use separate option_a, option_b, option_c, option_d fields
    const opts = {}
    if (q.option_a) opts['a'] = q.option_a
    if (q.option_b) opts['b'] = q.option_b
    if (q.option_c) opts['c'] = q.option_c
    if (q.option_d) opts['d'] = q.option_d
    return opts
  }

  const options = buildOptions(q)


  return (
    <>
      {/* Topbar with timer */}
      <div className="topbar">
        <div className="topbar-title">{quiz?.title || 'Quiz'}</div>
        <div className="timer">{formatTime(seconds)}</div>
      </div>

      <div className="page">
        <div className="quiz-wrap">

          {/* Main question area */}
          <div className="quiz-main">
            <div className="question-card">
              <div className="question-number">Question {current + 1}</div>
              <div className="question-text">{q.text || q.question_text}</div>

              <div className="options">
                {Object.entries(options).map(([key, value]) => (
                  <div
                    key={key}
                    className={`option ${answers[q.id] === key ? 'option-selected' : ''}`}
                    onClick={() => selectAnswer(q.id, key)}
                  >
                    <input
                      type="radio"
                      name={`q-${q.id}`}
                      readOnly
                      checked={answers[q.id] === key}
                    />
                    <span>{value}</span>
                  </div>
                ))}
              </div>

              <div className="progress-text">
                Question {current + 1} of {questions.length} &nbsp;|&nbsp;
                {Object.keys(answers).length} answered
              </div>

              <div className="controls">
                <div className="row">
                  <button
                    className="btn btn-prev"
                    onClick={() => setCurrent(c => c - 1)}
                    disabled={current === 0}
                  >← Prev</button>
                  <button
                    className="btn btn-next"
                    onClick={() => setCurrent(c => c + 1)}
                    disabled={current === questions.length - 1}
                  >Next →</button>
                </div>
                <div className="actions">
                  <button className="btn btn-submit" onClick={handleSubmit} disabled={submitted}>
                    Submit Exam
                  </button>
                  <button className="btn btn-clear" onClick={clearAll} disabled={submitted}>
                    Clear All
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="quiz-side">
            <div className="side-card">
              <div className="side-title">Questions</div>
              <div className="qgrid">
                {questions.map((qs, i) => (
                  <button
                    key={qs.id}
                    className={`qbtn ${i === current ? 'current' : ''} ${answers[qs.id] ? 'answered' : ''}`}
                    onClick={() => setCurrent(i)}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
              <div className="progress-text" style={{ padding: '10px 6px 0' }}>
                {Object.keys(answers).length} / {questions.length} answered
              </div>
            </div>
          </aside>

        </div>
      </div>

      {/* Result Modal */}
      {submitted && result && (
        <div className="results-overlay active">
          <div className="results-card">
            <h2>Exam Completed! 🎉</h2>
            <div className="score-circle">{result.score}%</div>
            <div className="results-grid">
              <div className="result-item">
                <span className="result-value">{result.total}</span>
                <span className="result-label">Total Qs</span>
              </div>
              <div className="result-item">
                <span className="result-value" style={{ color: '#13b58f' }}>{result.correct}</span>
                <span className="result-label">Correct</span>
              </div>
              <div className="result-item">
                <span className="result-value" style={{ color: '#d83333' }}>{result.wrong}</span>
                <span className="result-label">Wrong</span>
              </div>
              <div className="result-item">
                <span className="result-value">{result.score}%</span>
                <span className="result-label">Accuracy</span>
              </div>
            </div>
            <div className="results-actions">
              <button className="btn-res btn-res-home" onClick={() => navigate('/quiz')}>
                Back to Selection
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
