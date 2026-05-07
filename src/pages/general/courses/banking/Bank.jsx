import { useState } from 'react'
import { Link } from 'react-router-dom'
import './bank.css'

import heroImg  from '../../../../assets/image_6.png'
import bankImg1 from '../../../../assets/Bank-1.png'
import bankImg2 from '../../../../assets/bank-2.png'
import bankImg3 from '../../../../assets/bank-3.png'
import bankImg4 from '../../../../assets/Bank.jpeg'

const bankingExams = [
  {
    id: 'ibps-po',
    subtitle: 'Probationary Officer',
    title: 'IBPS PO',
    image: bankImg1,
    alt: 'IBPS PO',
    desc: 'The Institute of Banking Personnel Selection (IBPS) Probationary Officer (PO) exam is selected for the post of Management Trainee/Probationary Officer in various public sector banks.',
    reverse: false,
    bg: '#ffffff',
    accordions: [
      { title: 'Syllabus', content: 'Detailed syllabus covering Quantitative Aptitude, Reasoning Ability, English Language, and General Awareness...', link: 'https://docs.google.com/document/d/1UJo_bbjVEFKslCaQeupNs3o5NFOpaNjkhkAA5Knh7Lw/edit?usp=sharing' },
      { title: 'E-Books', content: 'Comprehensive books for Prelims and Mains examinations...', link: '/standard-materials' },
      { title: 'Study Material', content: 'Access curated study materials and reference books for Preparation...' },
      { title: 'Video Content', content: 'Step-by-step guide to the selection process including interviews...' },
      { title: 'Quiz', content: 'Test your knowledge with our IBPS PO mock tests.', link: '/quiz' },
    ]
  },
  {
    id: 'ibps-clerk',
    subtitle: 'Clerical Cadre',
    title: 'IBPS Clerk',
    image: bankImg2,
    alt: 'IBPS Clerk',
    desc: 'IBPS Clerk exam is conducted to recruit candidates for clerical posts in 11 public sector banks in India.',
    reverse: true,
    bg: '#f8fafc',
    accordions: [
      { title: 'Syllabus', content: 'The exam consists of Prelims and Mains. Subjects include English, Numerical Ability, and Reasoning.', link: 'https://docs.google.com/document/d/18DHs0FaCPPR7XATLVBTOsdbc7gAlRAxB7Pgdfi9rTc0/edit?usp=sharing' },
      { title: 'E-Books', content: 'Comprehensive syllabus for Prelims and Mains examinations...', link: '/standard-materials' },
      { title: 'Study Material', content: 'Access specialized study materials for Clerk exams...' },
      { title: 'Video Content', content: 'Detailed selection criteria...' },
      { title: 'Quiz', content: 'Take a quiz to prepare for IBPS Clerk.', link: '/quiz' },
    ]
  },
  {
    id: 'sbi-po',
    subtitle: 'State Bank of India PO',
    title: 'SBI PO',
    image: bankImg3,
    alt: 'SBI PO',
    desc: 'SBI PO is one of the most coveted jobs in the banking sector, offering a great career path.',
    reverse: false,
    bg: '#ffffff',
    accordions: [
      { title: 'Syllabus', content: 'The syllabus covers Reasoning, Data Analysis & Interpretation, General/Economic/Banking Awareness, and English Language.', link: 'https://docs.google.com/document/d/1lPZr36Nv91ts1_LP9x9k-AEDOCjKz23iiwhAUS3KuFQ/edit?usp=sharing' },
      { title: 'E-Books', content: 'Get the best e-books for SBI PO preparation.', link: '/standard-materials' },
      { title: 'Study Material', content: 'We provide detailed and easy to understand study material for our SBI PO students.' },
      { title: 'Video Content', content: 'The selection process includes Prelims, Mains, and Interview/Group Exercises.' },
      { title: 'Quiz', content: 'Practice with SBI PO quizzes:', link: '/quiz' },
    ]
  },
  {
    id: 'sbi-clerk',
    subtitle: 'State Bank of India Clerk',
    title: 'SBI Clerk',
    image: bankImg4,
    alt: 'SBI Clerk',
    desc: 'The SBI Clerk (Junior Associates) exam is conducted to recruit candidates for customer support and sales roles.',
    reverse: true,
    bg: '#f8fafc',
    accordions: [
      { title: 'Syllabus', content: 'The exam consists of Prelims and Mains, testing English, Numerical Ability, and Reasoning.', link: 'https://docs.google.com/document/d/1x9ze7tCMWxNu7cWkkRVMdu4gKF092fImwpchLpb6JoU/edit?usp=sharing' },
      { title: 'E-Books', content: 'Comprehensive syllabus for Prelims and Mains examinations...', link: '/standard-materials' },
      { title: 'Study Material', content: 'Access specialized study materials for SBI Clerk exams...' },
      { title: 'Video Content', content: 'Video tutorials for difficult concepts...' },
      { title: 'Quiz', content: 'Attempt SBI Clerk mock quizzes.', link: '/quiz' },
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

export default function Banking() {
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
            <h1 className="hero-title">Bank <span className="highlight">Exam</span></h1>
            <p className="hero-description">
              Elevate Your Preparation: My Study Life - Your Gateway to Success in Competitive and Banking Exams.
              Conquer every challenge with confidence and achieve your career goals in the banking sector!
            </p>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <main className="tnpsc-section">
        <div className="tnpsc-container">
          <div className="programs-grid">
            {bankingExams.map((exam) => (
              <div className="program-card" key={exam.id}>
                <img src={exam.image} alt={exam.alt} className="program-image" />
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
        {bankingExams.map((exam) => (
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
