import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { registerUser } from '../../api'
import './auth.css'

export default function Signup() {
  const [fullName, setFullName] = useState('')
  const [course, setCourse] = useState('TNPSC')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      await registerUser({ full_name: fullName, email, password, course })
      navigate('/auth/login')
    } catch (err) {
      setError(err?.detail || 'Registration failed. Try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="split-screen">
      <div className="left-panel">
        <div className="left-content">
          <div className="logo-large">
            <i className="fa-solid fa-user-graduate"></i>
          </div>
          <h1>MY STUDY LIFE</h1>
          <p className="tagline">Build Your Future, One Step at a Time</p>
          <div className="features-list">
            <div className="feature-item">
              <span className="feature-icon"><i className="fa-solid fa-check"></i></span>
              <span>Study Materials</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon"><i className="fa-solid fa-check"></i></span>
              <span>Expert Guides &amp; Notes</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon"><i className="fa-solid fa-check"></i></span>
              <span>Mock Tests</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon"><i className="fa-solid fa-check"></i></span>
              <span>Track Your Progress</span>
            </div>
          </div>
          <div className="stats">
            <div className="stat-item">
              <div className="stat-number">10,000+</div>
              <div className="stat-label">Students Enrolled</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">Success Stories</div>
            </div>
          </div>
          <p className="mission">
            "Empowering students from grades 6-10 and competitive exam aspirants
            to achieve their educational dreams through quality resources and guidance."
          </p>
        </div>
      </div>

      <div className="right-panel">
        <div className="login-box">
          <h2>Create Account</h2>
          <p className="subtitle">Sign up to start your learning journey</p>

          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label>Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
            <div className="input-group">
              <label>Course</label>
              <select value={course} onChange={(e) => setCourse(e.target.value)} required>
                <option value="TNPSC">TNPSC</option>
                <option value="SSC">SSC</option>
                <option value="Railway">Railway</option>
                <option value="Banking">Banking</option>
              </select>
            </div>
            <div className="input-group">
              <label>Email Address</label>
              <input
                type="email"
                placeholder="Email@example.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-group">
              <label>Password</label>
              <input
                type="password"
                placeholder="Create a strong password"
                required
                minLength="8"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {error && (
              <div style={{ color: 'red', textAlign: 'center', marginBottom: '10px' }}>
                {error}
              </div>
            )}

            <div className="checkbox-group">
              <input type="checkbox" id="terms" required />
              <label htmlFor="terms">I agree to the Terms of Service and Privacy Policy</label>
            </div>

            <button type="submit" className="btn" disabled={loading}>
              {loading ? 'Creating...' : 'Create Account'}
            </button>
          </form>

          <div className="signup">
            Already have an account?
            <Link to="/auth/login">Sign In</Link>
          </div>
        </div>
      </div>
    </div>
  )
}