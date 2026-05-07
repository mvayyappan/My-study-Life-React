import { useState, useEffect } from 'react'
import { getNotes, createNote, updateNote, deleteNote } from '../../../api'
import './notes.css'

function Notes() {
  const [notes, setNotes] = useState([])
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [color, setColor] = useState('#fff7b1')
  const [editingId, setEditingId] = useState(null)
  const [showUpdateModal, setShowUpdateModal] = useState(false)
  const [showViewModal, setShowViewModal] = useState(false)
  const [viewingNote, setViewingNote] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [sortBy, setSortBy] = useState('newest')
  const [loading, setLoading] = useState(true)

  // Load notes from backend on mount
  useEffect(() => {
    getNotes()
      .then(setNotes)
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [])

  const saveNote = async () => {
    if (!title.trim() || !description.trim()) return
    try {
      if (editingId) {
        const updated = await updateNote(editingId, { title, description, color })
        setNotes(notes.map(n => n.id === editingId ? updated : n))
        setEditingId(null)
        setShowUpdateModal(false)
      } else {
        const newNote = await createNote({ title, description, color })
        setNotes([newNote, ...notes])
      }
      setTitle('')
      setDescription('')
      setColor('#fff7b1')
    } catch (err) {
      console.error('Save note failed:', err)
    }
  }

  const handleDelete = async (id) => {
    try {
      await deleteNote(id)
      setNotes(notes.filter(n => n.id !== id))
    } catch (err) {
      console.error('Delete failed:', err)
    }
  }

  const openUpdateModal = (note) => {
    setEditingId(note.id)
    setTitle(note.title)
    setDescription(note.description)
    setColor(note.color)
    setShowUpdateModal(true)
  }

  const closeUpdateModal = () => {
    setShowUpdateModal(false)
    setEditingId(null)
    setTitle('')
    setDescription('')
    setColor('#fff7b1')
  }

  const viewNote = (note) => {
    setViewingNote(note)
    setShowViewModal(true)
  }

  const closeNoteView = () => {
    setShowViewModal(false)
    setViewingNote(null)
  }

  const getGroupColor = (color) => {
    const colorMap = {
      '#ff76a2': 'bg-pink',
      '#bfe9ff': 'bg-blue',
      '#f9cef2': 'bg-purple',
      '#fff7b1': 'bg-yellow'
    }
    return colorMap[color] || 'bg-yellow'
  }

  const filteredNotes = notes
    .filter(note =>
      note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      note.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === 'oldest') return new Date(a.created_at) - new Date(b.created_at)
      if (sortBy === 'az') return a.title.localeCompare(b.title)
      return new Date(b.created_at) - new Date(a.created_at)
    })

  return (
    <main className="workspace-main">
      <div className="container">
        {/* Search & Filter */}
        <div className="search-filter-section">
          <div className="search-box">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input
              type="text"
              id="search-notes"
              placeholder="Search your notes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="filter-box">
            <select id="sort-filter" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option value="newest">Newest</option>
              <option value="oldest">Oldest</option>
              <option value="az">A - Z</option>
            </select>
            <i className="fa-solid fa-chevron-down"></i>
          </div>
        </div>

        {/* Editor Section */}
        <div className="editor-section">
          <div className="note-editor-card">
            <div className="editor-row">
              <input
                type="text"
                id="note-title-input"
                className="input-field title-input"
                placeholder="Note Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="editor-row">
              <textarea
                id="note-description-input"
                className="textarea-field"
                placeholder="Write your note here..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
            <div className="editor-footer">
              <div className="color-picker-group">
                <label>Note Color:</label>
                <input
                  type="color"
                  id="note-color-picker"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                  className="color-picker-btn"
                />
              </div>
              <button className="add-note-btn" id="save-note-btn" onClick={saveNote}>
                {editingId ? 'Update Note' : 'Add Note'}
              </button>
            </div>
          </div>
        </div>

        {/* Notes Grid Section */}
        <section className="notes-grid-section">
          <div className="section-header">
            <h2>My Notes ({filteredNotes.length})</h2>
          </div>
          {loading ? (
            <div style={{ textAlign: 'center', padding: '40px', color: '#6c63ff' }}>Loading notes...</div>
          ) : (
            <div className="notes-grid" id="notes-grid">
              {filteredNotes.map((note) => (
                <div
                  key={note.id}
                  className={`note-card ${getGroupColor(note.color)}`}
                  style={{ backgroundColor: note.color }}
                >
                  <div className="card-left-accent"></div>
                  <div className="card-content">
                    <h3>{note.title}</h3>
                    <div className="card-actions">
                      <span className="edit-btn" onClick={() => openUpdateModal(note)} title="Edit">
                        <i className="fa-solid fa-pen"></i>
                      </span>
                      <span className="delete-btn" onClick={() => handleDelete(note.id)} title="Delete">
                        <i className="fa-solid fa-trash"></i>
                      </span>
                      <span className="view-btn" onClick={() => viewNote(note)} title="View">
                        <i className="fa-solid fa-eye"></i>
                      </span>
                    </div>
                    <p className="note-text">{note.description.substring(0, 100)}</p>
                    <span className="note-date">
                      {new Date(note.created_at).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>

      {/* Update Modal */}
      {showUpdateModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h2>Update Note</h2>
              <button className="close-modal" onClick={closeUpdateModal}>×</button>
            </div>
            <div className="modal-body">
              <div className="modal-row">
                <label>Note Title</label>
                <input
                  type="text"
                  id="modal-note-title"
                  className="input-field"
                  placeholder="Note Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="modal-row">
                <label>Note Content</label>
                <textarea
                  id="modal-note-content"
                  className="textarea-field"
                  placeholder="Write your note here..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>
              <div className="modal-row">
                <label>Note Color</label>
                <input
                  type="color"
                  id="modal-note-color"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                  className="color-picker-btn"
                />
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn-cancel" onClick={closeUpdateModal}>Cancel</button>
              <button className="btn-update" onClick={saveNote}>Update Changes</button>
            </div>
          </div>
        </div>
      )}

      {/* Note View Modal */}
      {showViewModal && viewingNote && (
        <div id="note-view-modal" className="active">
          <div className="note-view-content">
            <div className="note-view-header">
              <h1 className="note-view-title" id="view-note-title">{viewingNote.title}</h1>
              <button className="close-note-view" onClick={closeNoteView}>×</button>
            </div>
            <div className="note-view-description" id="view-note-description">
              {viewingNote.description}
            </div>
            <div className="note-view-meta">
              <span id="view-note-date">{new Date(viewingNote.created_at).toLocaleDateString()}</span>
              <div className="note-view-color" id="view-note-color" style={{ backgroundColor: viewingNote.color }}></div>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}

export default Notes
