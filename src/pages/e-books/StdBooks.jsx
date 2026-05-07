import React from 'react'
import ebooksData from './ebooksData'
import '../general/books/materials.css'
import './ebooks.css'

export default function StdBooks({ standardKey }) {
  const data = ebooksData[standardKey]
  if (!data) return (
    <main className="container">
      <div style={{ padding: 40 }}>No data found for {standardKey}</div>
    </main>
  )

  return (
    <main className="container" style={{ background: "linear-gradient(135deg, #5b7fd8 0%, #7b6ab8 50%, #9b5fa8 100%" }}>
      <div className="std-breadcrumb">My Study Life <span>»</span> {data.title} <span>»</span> Books</div>

      <div className="books-table-container">
        {data.terms.length === 0 && (
          <div style={{ padding: 20 }}>Content coming soon.</div>
        )}

        {data.terms.map((term, tIdx) => (
          <div key={tIdx}>
            <h2 className="term-title">{term.title}</h2>
            <table className="books-table">
              <thead>
                <tr>
                  <th>Subject Name</th>
                  <th>PDF</th>
                  <th>ZIP File</th>
                </tr>
              </thead>
              <tbody>
                {term.rows.map((row, idx) => (
                  <tr key={idx}>
                    <td>{row[0]}</td>
                    <td><a href={row[1] || '#'} target="_blank" rel="noreferrer" className="download-link">Download</a></td>
                    {idx === 0 && (
                      <td rowSpan={term.rows.length}><a href={term.zip || '#'} className="download-link" target="_blank" rel="noreferrer">Download</a></td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </main>
  )
}
