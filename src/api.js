const BASE_URL = 'https://full-stack-my-study-life-1.onrender.com'

const getToken = () => localStorage.getItem('token')

const authHeaders = () => ({
  'Content-Type': 'application/json',
  Authorization: `Bearer ${getToken()}`,
})

// ─── AUTH ─────────────────────────────────────────────
export const registerUser = async (data) => {
  const res = await fetch(`${BASE_URL}/api/auth/signup`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
  if (!res.ok) throw await res.json()
  return res.json()
}

export const loginUser = async (data) => {
  const res = await fetch(`${BASE_URL}/api/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ username: data.email, password: data.password }),
  })
  if (!res.ok) throw await res.json()
  return res.json()
}

export const getCurrentUser = async () => {
  const res = await fetch(`${BASE_URL}/api/auth/me`, { headers: authHeaders() })
  if (!res.ok) throw await res.json()
  return res.json()
}

export const updateProfile = async (data) => {
  const res = await fetch(`${BASE_URL}/api/auth/update-profile`, {
    method: 'PUT',
    headers: authHeaders(),
    body: JSON.stringify(data),
  })
  if (!res.ok) throw await res.json()
  return res.json()
}

export const changePassword = async (data) => {
  const res = await fetch(`${BASE_URL}/api/auth/change-password`, {
    method: 'POST',
    headers: authHeaders(),
    body: JSON.stringify(data),
  })
  if (!res.ok) throw await res.json()
  return res.json()
}

export const deleteAccount = async () => {
  const res = await fetch(`${BASE_URL}/api/auth/delete-account`, {
    method: 'DELETE',
    headers: authHeaders(),
  })
  if (!res.ok) throw await res.json()
  return res.status === 204 ? {} : res.json()
}


// ─── NOTES ────────────────────────────────────────────
export const getNotes = async () => {
  const res = await fetch(`${BASE_URL}/api/notes/`, { headers: authHeaders() })
  if (!res.ok) throw await res.json()
  return res.json()
}

export const createNote = async (data) => {
  const res = await fetch(`${BASE_URL}/api/notes/`, {
    method: 'POST',
    headers: authHeaders(),
    body: JSON.stringify(data),
  })
  if (!res.ok) throw await res.json()
  return res.json()
}

export const updateNote = async (id, data) => {
  const res = await fetch(`${BASE_URL}/api/notes/${id}`, {
    method: 'PUT',
    headers: authHeaders(),
    body: JSON.stringify(data),
  })
  if (!res.ok) throw await res.json()
  return res.json()
}

export const deleteNote = async (id) => {
  const res = await fetch(`${BASE_URL}/api/notes/${id}`, {
    method: 'DELETE',
    headers: authHeaders(),
  })
  if (!res.ok) throw await res.json()
  return res.json()
}

export const toggleStarNote = async (id) => {
  const res = await fetch(`${BASE_URL}/api/notes/${id}/star`, {
    method: 'PATCH',
    headers: authHeaders(),
  })
  if (!res.ok) throw await res.json()
  return res.json()
}

// ─── QUIZZES ──────────────────────────────────────────
// Returns all quizzes list
export const getQuizzes = async () => {
  const res = await fetch(`${BASE_URL}/api/quiz/all`, { headers: authHeaders() })
  if (!res.ok) throw await res.json()
  return res.json()
}

// Returns quiz WITH questions included
export const getQuizWithQuestions = async (id) => {
  const res = await fetch(`${BASE_URL}/api/quiz/${id}`, { headers: authHeaders() })
  if (!res.ok) throw await res.json()
  return res.json()
}

// Submit: POST /api/quiz/submit/{quiz_id}
// answers = { "question_id": "a", "question_id2": "b", ... } (object, not array)
export const submitQuiz = async (quiz_id, answers) => {
  const res = await fetch(`${BASE_URL}/api/quiz/submit/${quiz_id}`, {
    method: 'POST',
    headers: authHeaders(),
    body: JSON.stringify({ quiz_id, answers }),
  })
  if (!res.ok) throw await res.json()
  return res.json()
}

// Alias used by QuizAttempt.jsx
export const submitQuizAttempt = submitQuiz


// ─── PROGRESS ─────────────────────────────────────────
export const getProgress = async () => {
  const res = await fetch(`${BASE_URL}/api/progress/stats`, { headers: authHeaders() })
  if (!res.ok) throw await res.json()
  return res.json()
}

// ─── SYLLABUS ─────────────────────────────────────────
// No backend route yet — returns empty array
export const getSyllabus = async () => {
  try {
    const res = await fetch(`${BASE_URL}/api/syllabus/`, { headers: authHeaders() })
    if (!res.ok) return []
    return res.json()
  } catch {
    return []
  }
}
