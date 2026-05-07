import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getQuizzes } from '../../../api'
import './quiz_selection.css'

const GRADES = ['All', '6', '7', '8', '9', '10']
const SUBJECTS = ['All', 'Tamil', 'English', 'Maths', 'Science', 'SS']
const DIFFICULTIES = ['All', 'Easy', 'Medium', 'Hard']

const diffBadgeClass = (d) => ({ Easy: 'badge-easy', Medium: 'badge-medium', Hard: 'badge-hard' }[d] || 'badge-easy')

export default function QuizSelection() {
  const [quizzes, setQuizzes] = useState([])
  const [filtered, setFiltered] = useState([])
  const [loading, setLoading] = useState(true)
  const [activeGrade, setActiveGrade] = useState('All')
  const [activeSubject, setActiveSubject] = useState('All')
  const [activeDiff, setActiveDiff] = useState('All')
  const navigate = useNavigate()

  useEffect(() => {
    getQuizzes()
      .then(data => { setQuizzes(data); setFiltered(data) })
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [])

  useEffect(() => {
    let res = [...quizzes]
    if (activeGrade !== 'All') res = res.filter(q => String(q.grade) === activeGrade)
    if (activeSubject !== 'All') res = res.filter(q => q.subject === activeSubject)
    if (activeDiff !== 'All') res = res.filter(q => q.difficulty === activeDiff)
    setFiltered(res)
  }, [activeGrade, activeSubject, activeDiff, quizzes])

  return (
    <div className="qs-page">
      <div className="container">

        {/* Stats */}
        <div className="stats-summary">
          <div className="stat-box"><h4>{quizzes.length || 75}</h4><p>Total Quizzes</p></div>
          <div className="stat-box"><h4>{(quizzes.length || 75) * 10}</h4><p>Questions</p></div>
          <div className="stat-box"><h4>3 Levels</h4><p>Easy • Medium • Hard</p></div>
          <div className="stat-box"><h4>5 Subjects</h4><p>Tamil • English • Maths • Science • SS</p></div>
        </div>

        {/* Filters */}
        <div className="filter-section">
          <div className="filter-group">
            <label><i className="fa-solid fa-graduation-cap"></i> Grade</label>
            <div className="filter-buttons">
              {GRADES.map(g => (
                <button key={g} className={`btn-filter ${activeGrade === g ? 'active' : ''}`}
                  onClick={() => setActiveGrade(g)}>{g}</button>
              ))}
            </div>
          </div>
          <div className="filter-group">
            <label><i className="fa-solid fa-book"></i> Subject</label>
            <div className="filter-buttons">
              {SUBJECTS.map(s => (
                <button key={s} className={`btn-filter ${activeSubject === s ? 'active' : ''}`}
                  onClick={() => setActiveSubject(s)}>{s}</button>
              ))}
            </div>
          </div>
          <div className="filter-group">
            <label><i className="fa-solid fa-chart-bar"></i> Difficulty Level</label>
            <div className="filter-buttons">
              {DIFFICULTIES.map(d => (
                <button key={d} className={`btn-filter ${activeDiff === d ? 'active' : ''}`}
                  onClick={() => setActiveDiff(d)}>{d}</button>
              ))}
            </div>
          </div>
        </div>

        {/* Grid */}
        {loading ? (
          <div className="qs-loading"><i className="fa-solid fa-spinner fa-spin"></i> Loading quizzes...</div>
        ) : (
          <div className="quiz-grid">
            {filtered.length === 0 ? (
              <div className="no-results">No quizzes found for selected filters.</div>
            ) : filtered.map(quiz => (
              <div key={quiz.id} className="quiz-card">
                <h3>{quiz.title}</h3>
                <div className="quiz-meta">
                  <div>
                    {quiz.difficulty && <span className={`badge ${diffBadgeClass(quiz.difficulty)}`}>{quiz.difficulty}</span>}
                    {quiz.grade && <span className="badge badge-grade">Grade {quiz.grade}</span>}
                  </div>
                  <span>{quiz.subject}</span>
                </div>
                <p className="quiz-description">{quiz.description || 'Test your knowledge with this quiz.'}</p>
                <div className="quiz-info">
                  <span><i className="fa-solid fa-circle-question"></i> {quiz.question_count || 10} Questions</span>
                </div>
                <button className="btn-start" onClick={() => navigate(`/quiz/${quiz.id}`)}>
                  Start Quiz →
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
