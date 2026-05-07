import { Link } from 'react-router-dom'
import './materials.css'

export default function StandardMaterials() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #5b7fd8 0%, #7b6ab8 50%, #9b5fa8 100%)',
    }}>
      <main className="container">
        <h1 className="qb-index-title" style={{ color: '#ffffff' }}>
          Study Materials from Best Teachers and Publications
        </h1>

        <div className="standards-grid">
          <Link to="/ebooks/std-1"  className="std-btn-card"><i className="fa-solid fa-up-right-from-square"></i> 1st Standard</Link>
          <Link to="/ebooks/std-2"  className="std-btn-card"><i className="fa-solid fa-up-right-from-square"></i> 2nd Standard</Link>
          <Link to="/ebooks/std-3"  className="std-btn-card"><i className="fa-solid fa-up-right-from-square"></i> 3rd Standard</Link>
          <Link to="/ebooks/std-4"  className="std-btn-card"><i className="fa-solid fa-up-right-from-square"></i> 4th Standard</Link>
          <Link to="/ebooks/std-5"  className="std-btn-card"><i className="fa-solid fa-up-right-from-square"></i> 5th Standard</Link>
          <Link to="/ebooks/std-6"  className="std-btn-card"><i className="fa-solid fa-up-right-from-square"></i> 6th Standard</Link>
          <Link to="/ebooks/std-7"  className="std-btn-card"><i className="fa-solid fa-up-right-from-square"></i> 7th Standard</Link>
          <Link to="/ebooks/std-8"  className="std-btn-card"><i className="fa-solid fa-up-right-from-square"></i> 8th Standard</Link>
          <Link to="/ebooks/std-9"  className="std-btn-card"><i className="fa-solid fa-up-right-from-square"></i> 9th Standard</Link>
          <Link to="/ebooks/std-10" className="std-btn-card"><i className="fa-solid fa-up-right-from-square"></i> 10th Standard</Link>
          <Link to="/ebooks/std-11" className="std-btn-card"><i className="fa-solid fa-up-right-from-square"></i> 11th Standard</Link>
          <Link to="/ebooks/std-12" className="std-btn-card"><i className="fa-solid fa-up-right-from-square"></i> 12th Standard</Link>
        </div>
      </main>
    </div>
  )
}

