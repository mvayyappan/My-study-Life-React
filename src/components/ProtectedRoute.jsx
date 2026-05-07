import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function ProtectedRoute({ children }) {
  const { user, loading } = useAuth()

  if (loading) {
    return (
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        height: '100vh', fontSize: '1.2rem', color: '#6c63ff'
      }}>
        Loading...
      </div>
    )
  }

  return user ? children : <Navigate to="/auth/login" replace />
}
