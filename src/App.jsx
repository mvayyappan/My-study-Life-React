import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import ProtectedRoute from './components/ProtectedRoute'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Home from './pages/general/home/Home'
import About from './pages/general/about/About'
import Contact from './pages/general/contact/Contact'
import StandardMaterials from './pages/general/books/StandardMaterials'
import Std1Books from './pages/e-books/std-1-books'
import Std2Books from './pages/e-books/std-2-books'
import Std3Books from './pages/e-books/std-3-books'
import Std4Books from './pages/e-books/std-4-books'
import Std5Books from './pages/e-books/std-5-books'
import Std6Books from './pages/e-books/std-6-books'
import Std7Books from './pages/e-books/std-7-books'
import Std8Books from './pages/e-books/std-8-books'
import Std9Books from './pages/e-books/std-9-books'
import Std10Books from './pages/e-books/std-10-books'
import Std11Books from './pages/e-books/std-11-books'
import Std12Books from './pages/e-books/std-12-books'
import Courses from './pages/general/courses/Courses'
import Login from './pages/auth/Login'
import Signup from './pages/auth/Signup'
import Logout from './pages/auth/Logout'
import Notes from './pages/general/notes/Notes'
import QuizSelection from './pages/general/quiz-selection/QuizSelection'
import QuizAttempt from './pages/general/quiz/QuizAttempt'
import Progress from './pages/general/progress/Progress'

import Banking from './pages/general/courses/banking/Bank'
import Railway from './pages/general/courses/railway/Railway'
import SSC from './pages/general/courses/ssc/SSC'
import TNPSC from './pages/general/courses/tnpsc/TNPSC'
import Profile from './pages/general/profile/Profile'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </BrowserRouter>
  )
}

function AppContent() {
  const location = useLocation()
  const isAuthPage = location.pathname.startsWith('/auth')

  return (
    <div className="app">
      {!isAuthPage && <Header />}
      <main>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/standard-materials" element={<StandardMaterials />} />
          <Route path="/ebooks/std-1" element={<Std1Books />} />
          <Route path="/ebooks/std-2" element={<Std2Books />} />
          <Route path="/ebooks/std-3" element={<Std3Books />} />
          <Route path="/ebooks/std-4" element={<Std4Books />} />
          <Route path="/ebooks/std-5" element={<Std5Books />} />
          <Route path="/ebooks/std-6" element={<Std6Books />} />
          <Route path="/ebooks/std-7" element={<Std7Books />} />
          <Route path="/ebooks/std-8" element={<Std8Books />} />
          <Route path="/ebooks/std-9" element={<Std9Books />} />
          <Route path="/ebooks/std-10" element={<Std10Books />} />
          <Route path="/ebooks/std-11" element={<Std11Books />} />
          <Route path="/ebooks/std-12" element={<Std12Books />} />
          <Route path="/courses" element={<Courses />} />

          {/* Auth Routes */}
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/signup" element={<Signup />} />
          <Route path="/auth/logout" element={<Logout />} />
          <Route path="/login" element={<Login />} />

          {/* Protected Routes */}
          <Route path="/notes" element={<ProtectedRoute><Notes /></ProtectedRoute>} />
          <Route path="/quiz" element={<ProtectedRoute><QuizSelection /></ProtectedRoute>} />
          <Route path="/quiz/:id" element={<ProtectedRoute><QuizAttempt /></ProtectedRoute>} />
          <Route path="/progress" element={<ProtectedRoute><Progress /></ProtectedRoute>} />

          <Route path="/courses/banking" element={<ProtectedRoute><Banking /></ProtectedRoute>} />
          <Route path="/courses/railway" element={<ProtectedRoute><Railway /></ProtectedRoute>} />
          <Route path="/courses/ssc" element={<ProtectedRoute><SSC /></ProtectedRoute>} />
          <Route path="/courses/tnpsc" element={<ProtectedRoute><TNPSC /></ProtectedRoute>} />
          <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        </Routes>
      </main>
      {!isAuthPage && <Footer />}
    </div>
  )
}

export default App
