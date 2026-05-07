import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { loginUser, getCurrentUser } from '../../api'
import { useAuth } from '../../context/AuthContext'
import './auth.css'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const { login } = useAuth()
  const navigate = useNavigate()

  const courseRouteMap = {
    TNPSC: '/courses/tnpsc',
    Banking: '/courses/banking',
    Railway: '/courses/railway',
    SSC: '/courses/ssc',
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      const data = await loginUser({ email, password })
      const token = data.access_token
      localStorage.setItem('token', token)
      const userData = await getCurrentUser()
      login(token, userData)
      // Redirect to their selected course, fallback to /courses/tnpsc
      const destination = courseRouteMap[userData.course] || '/courses/tnpsc'
      navigate(destination)
    } catch (err) {
      setError(err?.detail || 'Invalid email or password')
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
              <div className="stat-label">Aspirants Enrolled</div>
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
          <div className="logo"></div>
          <h2>Sign In</h2>
          <p className="subtitle">Access your account</p>

          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label>Email Address</label>
              <input
                type="email"
                placeholder="Enter your email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-group">
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter your password"
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

            <button type="submit" className="btn" disabled={loading}>
              {loading ? 'Signing in...' : 'Sign in'}
            </button>
          </form>

          <div className="divider">――― OR ―――</div>
          <div className="signup">
            <span>Don't have an account?</span>
            <Link to="/auth/signup">Create Account</Link>
          </div>
        </div>
      </div>
    </div>
  )
}