import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import './header.css'

function Header() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false)

  const courseRouteMap = {
    TNPSC: '/courses/tnpsc',
    Banking: '/courses/banking',
    Railway: '/courses/railway',
    SSC: '/courses/ssc',
  }

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <nav>
      <Link to="/" className="logo">
        <i className="fa-solid fa-user-graduate" />
        <span>My Study Life</span>
      </Link>

      <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
        <i className={menuOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'}></i>
      </button>

      <ul className={`nav_links ${menuOpen ? 'open' : ''}`}>
        {!user ? (
          /* ── NOT logged in: show public pages ── */
          <>
            <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
            <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
            <li><Link to="/auth/login" onClick={() => setMenuOpen(false)}>Login</Link></li>
          </>
        ) : (
          /* ── Logged in: correct order ── */
          <>
            {/* 1. User's course — highlighted first */}
            {user.course && courseRouteMap[user.course] && (
              <li>
                <Link
                  to={courseRouteMap[user.course]}
                  onClick={() => setMenuOpen(false)}
                  className="course-nav-link"
                >
                  {user.course}
                </Link>
              </li>
            )}

            {/* 2. Books */}
            <li><Link to="/standard-materials" onClick={() => setMenuOpen(false)}>Books</Link></li>

            {/* 3. Quiz */}
            <li><Link to="/quiz" onClick={() => setMenuOpen(false)}>Quiz</Link></li>

            {/* 4. Notes */}
            <li><Link to="/notes" onClick={() => setMenuOpen(false)}>Notes</Link></li>

            {/* 5. Profile */}
            <li><Link to="/profile" onClick={() => setMenuOpen(false)}>Profile</Link></li>

            {/* 6. More Courses */}
            <li><Link to="/courses" onClick={() => setMenuOpen(false)}>More Courses</Link></li>

            {/* 7. Logout */}
            <li>
              <button className="nav-logout-btn" onClick={handleLogout}>
                Logout
              </button>
            </li>
          </>
        )}
      </ul>
    </nav>
  )
}

export default Header
