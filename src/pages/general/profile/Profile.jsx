import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../../context/AuthContext'
import { getProgress, updateProfile, changePassword, deleteAccount } from '../../../api'
import './profile.css'

export default function Profile() {
  const { user, login, logout } = useAuth()
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('overview')
  const [progress, setProgress] = useState(null)

  // Edit form state
  const [fullName, setFullName] = useState('')
  const [course, setCourse] = useState('')
  const [editMsg, setEditMsg] = useState({ type: '', text: '' })
  const [editLoading, setEditLoading] = useState(false)

  // Password form state
  const [currentPwd, setCurrentPwd] = useState('')
  const [newPwd, setNewPwd] = useState('')
  const [confirmPwd, setConfirmPwd] = useState('')
  const [pwdMsg, setPwdMsg] = useState({ type: '', text: '' })
  const [pwdLoading, setPwdLoading] = useState(false)

  useEffect(() => {
    if (user) {
      setFullName(user.full_name || '')
      setCourse(user.course || 'TNPSC')
    }
    getProgress().then(setProgress).catch(() => {})
  }, [user])

  if (!user) return null

  const initials = user.full_name
    ? user.full_name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)
    : '?'

  const joined = user.created_at
    ? new Date(user.created_at).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })
    : 'N/A'

  // Stats from progress
  const totalQuizzes = progress?.total_quizzes ?? 0
  const avgScore = progress?.average_score ? `${Math.round(progress.average_score)}%` : '0%'
  const accuracy = progress?.accuracy ? `${Math.round(progress.accuracy)}%` : '0%'
  const streak = progress?.streak ?? 0
  const totalQs = progress?.total_questions ?? 0
  const correctAnswers = progress?.correct_answers ?? 0
  const studyHours = progress?.study_hours ?? 0

  // Save profile
  const handleSaveProfile = async () => {
    setEditLoading(true)
    setEditMsg({ type: '', text: '' })
    try {
      const updated = await updateProfile({ full_name: fullName, course })
      login(localStorage.getItem('token'), { ...user, ...updated })
      setEditMsg({ type: 'success', text: '✅ Profile updated successfully!' })
      setTimeout(() => setActiveTab('overview'), 1500)
    } catch {
      setEditMsg({ type: 'error', text: '❌ Failed to update profile. Try again.' })
    } finally {
      setEditLoading(false)
    }
  }

  // Change password
  const handleChangePassword = async () => {
    setPwdMsg({ type: '', text: '' })
    if (newPwd !== confirmPwd) {
      setPwdMsg({ type: 'error', text: '❌ Passwords do not match.' }); return
    }
    if (newPwd.length < 8) {
      setPwdMsg({ type: 'error', text: '❌ Password must be at least 8 characters.' }); return
    }
    setPwdLoading(true)
    try {
      await changePassword({ current_password: currentPwd, new_password: newPwd })
      setPwdMsg({ type: 'success', text: '✅ Password updated successfully!' })
      setCurrentPwd(''); setNewPwd(''); setConfirmPwd('')
    } catch {
      setPwdMsg({ type: 'error', text: '❌ Current password is incorrect.' })
    } finally {
      setPwdLoading(false)
    }
  }

  // Delete account
  const handleDeleteAccount = async () => {
    if (!window.confirm('Are you sure? This will permanently delete your account!')) return
    try {
      await deleteAccount()
      logout()
      navigate('/auth/signup')
    } catch {
      alert('Failed to delete account. Try again.')
    }
  }

  return (
    <div className="profile-container">

      {/* Profile Header */}
      <div className="profile-header">
        <div className="profile-info">
          <div className="profile-avatar">
            <span style={{ fontSize: '40px', fontWeight: 800, letterSpacing: 1 }}>{initials}</span>
          </div>
          <div className="profile-details">
            <h1>{user.full_name}</h1>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Member Since:</strong> {joined}</p>
            <span className="course-badge">{user.course}</span>
          </div>
        </div>
        <div className="profile-actions">
          <button className="btn-edit" onClick={() => setActiveTab('edit')}>
            <i className="fa-solid fa-pen"></i> Edit Profile
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-number">{totalQuizzes}</div>
          <div className="stat-label">Quizzes Taken</div>
        </div>
        <div className="stat-card green">
          <div className="stat-number">{avgScore}</div>
          <div className="stat-label">Average Score</div>
        </div>
        <div className="stat-card orange">
          <div className="stat-number">{accuracy}</div>
          <div className="stat-label">Overall Accuracy</div>
        </div>
        <div className="stat-card red">
          <div className="stat-number">{streak}</div>
          <div className="stat-label">Current Streak</div>
        </div>
      </div>

      {/* Tabs */}
      <div className="tabs">
        <button className={`tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
          onClick={() => setActiveTab('overview')}>📊 Overview</button>
        <button className={`tab-btn ${activeTab === 'edit' ? 'active' : ''}`}
          onClick={() => setActiveTab('edit')}>✏️ Edit Profile</button>
        <button className={`tab-btn ${activeTab === 'settings' ? 'active' : ''}`}
          onClick={() => setActiveTab('settings')}>⚙️ Settings</button>
      </div>

      {/* Overview Tab */}
      {activeTab === 'overview' && (
        <div className="tab-content active">
          <h3>Profile Overview</h3>
          <p style={{ color: '#666', marginTop: '10px' }}>Your learning journey at a glance</p>
          <div className="stats-grid" style={{ marginTop: '20px' }}>
            <div className="stat-card">
              <div className="stat-number">{totalQs}</div>
              <div className="stat-label">Total Questions Attempted</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">{correctAnswers}</div>
              <div className="stat-label">Correct Answers</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">{studyHours}</div>
              <div className="stat-label">Study Hours</div>
            </div>
          </div>
        </div>
      )}

      {/* Edit Profile Tab */}
      {activeTab === 'edit' && (
        <div className="tab-content active">
          {editMsg.text && (
            <div className={`message ${editMsg.type}`}>{editMsg.text}</div>
          )}
          <h3>Edit Your Profile</h3>
          <form style={{ marginTop: '20px' }} onSubmit={e => e.preventDefault()}>
            <div className="form-row">
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" value={fullName}
                  onChange={e => setFullName(e.target.value)} placeholder="Your full name" />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" value={user.email} disabled />
              </div>
            </div>
            <div className="form-group">
              <label>Course</label>
              <select value={course} onChange={e => setCourse(e.target.value)}>
                <option value="TNPSC">TNPSC</option>
                <option value="SSC">SSC</option>
                <option value="Railway">Railway</option>
                <option value="Banking">Banking</option>
              </select>
            </div>
            <div>
              <button type="button" className="btn-save" onClick={handleSaveProfile} disabled={editLoading}>
                {editLoading ? 'Saving...' : 'Save Changes'}
              </button>
              <button type="button" className="btn-cancel" onClick={() => setActiveTab('overview')}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Settings Tab */}
      {activeTab === 'settings' && (
        <div className="tab-content active">
          {pwdMsg.text && (
            <div className={`message ${pwdMsg.type}`}>{pwdMsg.text}</div>
          )}
          <h3>Account Settings</h3>
          <div style={{ marginTop: '20px' }}>
            <h4 style={{ marginBottom: '20px', color: '#333' }}>Change Password</h4>
            <form onSubmit={e => e.preventDefault()}>
              <div className="form-group">
                <label>Current Password</label>
                <input type="password" value={currentPwd}
                  onChange={e => setCurrentPwd(e.target.value)} placeholder="Enter current password" />
              </div>
              <div className="form-group">
                <label>New Password</label>
                <input type="password" value={newPwd}
                  onChange={e => setNewPwd(e.target.value)} placeholder="Enter new password (min 8)" minLength={8} />
              </div>
              <div className="form-group">
                <label>Confirm Password</label>
                <input type="password" value={confirmPwd}
                  onChange={e => setConfirmPwd(e.target.value)} placeholder="Confirm new password" minLength={8} />
              </div>
              <button type="button" className="btn-save" onClick={handleChangePassword} disabled={pwdLoading}>
                {pwdLoading ? 'Updating...' : 'Update Password'}
              </button>
            </form>

            <hr style={{ margin: '30px 0' }} />

            <div style={{ background: '#fff5f5', border: '1px solid #fecaca', borderRadius: '8px', padding: '20px' }}>
              <h3 style={{ color: '#dc2626', marginBottom: '10px' }}>⚠️ Danger Zone</h3>
              <p style={{ color: '#666', marginBottom: '16px' }}>
                Once you delete your account, there is no going back. Please be certain.
              </p>
              <button
                onClick={handleDeleteAccount}
                style={{ background: '#dc2626', color: '#fff', border: 'none', padding: '12px 24px', borderRadius: '6px', cursor: 'pointer', fontWeight: 600 }}
              >
                <i className="fa-solid fa-trash"></i> Delete Account
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}
