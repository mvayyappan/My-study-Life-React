import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../banking/bank.css'

import heroImg   from '../../../../assets/image_4.png'
import card1     from '../../../../assets/1.png'
import card2     from '../../../../assets/2.png'
import card3     from '../../../../assets/3.png'
import card4     from '../../../../assets/4.png'
import tnpsc1   from '../../../../assets/tnpsc-1.jpg'
import tnpsc2   from '../../../../assets/tnpsc-2.png'
import tnpsc3   from '../../../../assets/tnpsc-3.png'
import tnpsc4   from '../../../../assets/tnpsc-4.png'


const tnpscExams = [
  {
    id: 'group1',
    subtitle: 'Combined Civil Service Examination – I',
    title: 'TNPSC Group I',
    image: tnpsc1,
    cardImage: card1,
    alt: 'TNPSC Group I',
    desc: 'A reputed recruitment exam conducted by the Tamil Nadu Public Service Commission (TNPSC) for professional posts such as deputy collector, deputy superintendent of police etc.',
    reverse: false,
    bg: '#ffffff',
    accordions: [
      { title: 'Syllabus', content: 'Detailed eligibility criteria including educational qualification and age limits...', link: 'https://docs.google.com/document/d/1Z6ZG5TiZXHRianKBzZkyZfU7Lp3KePHK9SFhAN4vclA/edit?usp=sharing' },
      { title: 'E-Books', content: 'Comprehensive syllabus for Prelims and Mains examinations...', link: '/standard-materials' },
      { title: 'Study Material', content: 'Access curated study materials and reference books for Preparation...' },
      { title: 'Video Content', content: 'Step-by-step guide to the selection process including interviews...' },
      { title: 'Quiz', content: 'The Exam Pattern of the TNPSC Group I can be viewed in the read more link below.', link: '/quiz' },
    ]
  },
  {
    id: 'group2',
    subtitle: 'Combined Civil Services Examination - II',
    title: 'TNPSC Group II',
    image: tnpsc2,
    cardImage: card2,
    alt: 'TNPSC Group II',
    desc: 'TNPSC Group 2 Exam is conducted by the Tamil Nadu Public Service Commission for hiring eligible candidates who are looking for opportunities to join the civil services of Tamil Nadu state.',
    reverse: true,
    bg: '#f8fafc',
    accordions: [
      { title: 'Syllabus', content: 'The Eligibility Details for TNPSC Group 2 as governed by the Tamil Nadu Public Service Commission (TNPSC) that conducts Combined Civil Services Examination-II.', link: 'https://docs.google.com/document/d/1J1YUQBIbBdtLJlHMGHvDk0knq_EYPMkFi4NRwp-_vwI/edit?usp=sharing' },
      { title: 'E-Books', content: 'Comprehensive syllabus for Prelims and Mains examinations...', link: '/standard-materials' },
      { title: 'Study Material', content: 'Access specialized study materials for Group II exams...' },
      { title: 'Video Content', content: 'Detailed selection criteria for interview and non-interview posts...' },
      { title: 'Quiz', content: 'The Exam Pattern of the TNPSC Group II can be viewed in the read more link below.', link: '/quiz' },
    ]
  },
  {
    id: 'group3',
    subtitle: 'Combined Civil Services Examination - III',
    title: 'TNPSC Group III',
    image: tnpsc3,
    cardImage: card3,
    alt: 'TNPSC Group III',
    desc: 'The TNPSC Group III exam is held for the recruitment of candidates at the post of Senior Accountant, Auditor, Assistant Section Officer, etc.',
    reverse: false,
    bg: '#ffffff',
    accordions: [
      { title: 'Syllabus', content: 'For a General candidate, the minimum age limit is 18 and maximum is 42. A candidate must have a Bachelor\'s degree from a recognized University with relevant specialization.', link: 'https://docs.google.com/document/d/1SbyJWfoYkydeECLjEiBn7NCysuJkzIM4ApixbYZtBJQ/edit?usp=sharing' },
      { title: 'E-Books', content: 'The TNPSC Group 3 exam comprises General Tamil, General English, General Aptitude and Logical Reasoning, General Knowledge.', link: '/standard-materials' },
      { title: 'Study Material', content: 'We provide detailed and easy to understand study material for Group 3 students for easy understanding.' },
      { title: 'Video Content', content: 'The selection process includes written test and interview test with objective and descriptive type questions.' },
      { title: 'Quiz', content: 'Learn more about TNPSC Group 3 Exam Pattern in the link below:', link: '/quiz' },
    ]
  },
  {
    id: 'group4',
    subtitle: 'Combined Civil Services Examination - IV',
    title: 'TNPSC Group IV',
    image: tnpsc4,
    cardImage: card4,
    alt: 'TNPSC Group IV',
    desc: 'TNPSC Group 4 Exam is conducted by the Tamil Nadu Public Service Commission for hiring eligible candidates who are looking for opportunities to join the civil services of Tamil Nadu state.',
    reverse: true,
    bg: '#f8fafc',
    accordions: [
      { title: 'Syllabus', content: 'The Eligibility Details for TNPSC Group 4 as governed by the Tamil Nadu Public Service Commission (TNPSC) that conducts Combined Civil Services Examination-IV.', link: 'https://docs.google.com/document/d/1RROcIebHMwmyJcFa4bOHcr78_o6k2OxhfEgEJz92jb0/edit?usp=sharing' },
      { title: 'E-Books', content: 'Comprehensive syllabus for Prelims and Mains examinations...', link: '/standard-materials' },
      { title: 'Study Material', content: 'Access specialized study materials for Group IV exams...' },
      { title: 'Video Content', content: 'Detailed selection criteria for interview and non-interview posts...' },
      { title: 'Quiz', content: 'The Exam Pattern of the TNPSC Group IV can be viewed in the read more link below.', link: '/quiz' },
    ]
  },
]

function AccordionSection({ accordions }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const toggle = (i) => setActiveIndex(activeIndex === i ? null : i)

  return (
    <div className="accordion">
      {accordions.map((item, i) => (
        <div key={i} className={`accordion-item ${activeIndex === i ? 'active' : ''}`}>
          <div className="accordion-header" onClick={() => toggle(i)}>
            {item.title} <i className="fa-solid fa-chevron-down"></i>
          </div>
          <div className="accordion-content">
            <p>{item.content}</p>
            {item.link && (
              item.link.startsWith('http')
                ? <a href={item.link} target="_blank" rel="noreferrer" className="read-more-btn">Read More <i className="fa-solid fa-arrow-right"></i></a>
                : <Link to={item.link} className="read-more-btn">Read More <i className="fa-solid fa-arrow-right"></i></Link>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

export default function TNPSC() {
  return (
    <div>
      {/* Hero */}
      <section className="course-hero">
        <div className="hero-container">
          <div className="hero-image-side">
            <img src={heroImg} alt="Aspirant Illustration" />
          </div>
          <div className="hero-text-side">
            <h2 className="hero-subtitle">Prepare for</h2>
            <h1 className="hero-title">TNPSC <span className="highlight">Exam</span></h1>
            <p className="hero-description">
              Elevate Your Preparation: My Study Life - Your Gateway to Success in Competitive and TNPSC Exams.
              Conquer every challenge with confidence and achieve your career goals in the public sector!
            </p>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <main className="tnpsc-section">
        <div className="tnpsc-container">
          <div className="programs-grid">
            {tnpscExams.map((exam) => (
              <div className="program-card" key={exam.id}>
                <img src={exam.cardImage} alt={exam.alt} className="program-image" />
                <div className="card-overlay">
                  <div className="course-info">
                    <span className="lesson-tag">100+ Lessons</span>
                    <h3 className="course-title">{exam.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Detail Sections */}
        {tnpscExams.map((exam) => (
          <div key={exam.id} className="detail-section" style={{ backgroundColor: exam.bg }}>
            <div className={`detail-container ${exam.reverse ? 'reverse' : ''}`}>
              <div className="overview-col">
                <span className="sub-title">{exam.subtitle}</span>
                <h1 className="main-title">{exam.title}</h1>
                <div className="overview-card">
                  <img src={exam.image} alt={`${exam.title} Overview`} />
                </div>
                <p className="overview-desc">{exam.desc}</p>
              </div>
              <div className="accordion-col">
                <AccordionSection accordions={exam.accordions} />
              </div>
            </div>
          </div>
        ))}
      </main>
    </div>
  )
}
