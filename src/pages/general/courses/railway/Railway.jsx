import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../banking/bank.css'

import heroImg  from '../../../../assets/image_5.png'
import railImg1 from '../../../../assets/Railway.jpeg'
import railImg2 from '../../../../assets/2.png'
import railImg3 from '../../../../assets/3.png'
import railImg4 from '../../../../assets/4.png'


const railwayExams = [
  {
    id: 'rrb-ntpc',
    subtitle: 'Non-Technical Popular Categories',
    title: 'RRB NTPC',
    image: railImg1,
    alt: 'RRB NTPC',
    desc: 'RRB NTPC is conducted by the Railway Recruitment Board to recruit potential candidates for non-technical posts mentioned in the notification.',
    reverse: false,
    bg: '#ffffff',
    accordions: [
      { title: 'Syllabus', content: 'The exam comprises of 1st Stage CBT, 2nd Stage CBT, Typing Skill Test/Computer Based Aptitude Test (as applicable), and Document Verification/Medical Examination.', link: 'https://docs.google.com/document/d/1lI_GPQNOr0G-aBVQqHyT-D54I3yg0_q6hc8MDrU7ZAE/edit?usp=sharing' },
      { title: 'E-Books', content: 'Comprehensive syllabus for CBT 1 and CBT 2...', link: '/standard-materials' },
      { title: 'Study Material', content: 'Access curated study materials and reference books for Preparation...' },
      { title: 'Video Content', content: 'Step-by-step guide to the selection process...' },
      { title: 'Quiz', content: 'The Exam Pattern of the RRB NTPC can be viewed in the read more link below.', link: '/quiz' },
    ]
  },
  {
    id: 'rrb-groupd',
    subtitle: 'Level 1 Post',
    title: 'RRB Group D',
    image: railImg2,
    alt: 'RRB Group D',
    desc: 'RRB Group D exam is conducted to recruit candidates for various posts in Level 1 of 7 CPC Pay Matrix.',
    reverse: true,
    bg: '#f8fafc',
    accordions: [
      { title: 'Syllabus', content: 'The selection process consists of Computer Based Test (CBT), Physical Efficiency Test (PET), Document Verification, and Medical Examination.', link: 'https://docs.google.com/document/d/1D-D4en6EX4Bni4Y43vwRgccFsqHKcCjQsAJtSeDT_N0/edit?usp=sharing' },
      { title: 'E-Books', content: 'Comprehensive syllabus for exams...', link: '/standard-materials' },
      { title: 'Study Material', content: 'Access specialized study materials for Group D exams...' },
      { title: 'Video Content', content: 'Detailed selection criteria...' },
      { title: 'Quiz', content: 'Take a quiz to prepare for RRB Group D.', link: '/quiz' },
    ]
  },
  {
    id: 'rrb-alp',
    subtitle: 'Assistant Loco Pilot',
    title: 'RRB ALP',
    image: railImg3,
    alt: 'RRB ALP',
    desc: 'RRB ALP exam is conducted to recruit Assistant Loco Pilots and Technicians in Indian Railways.',
    reverse: false,
    bg: '#ffffff',
    accordions: [
      { title: 'Syllabus', content: 'The selection process includes First Stage CBT, Second Stage CBT, Computer Based Aptitude Test (for ALP only), and Document Verification.', link: 'https://docs.google.com/document/d/1d1OyNb68AZfQ_FqbdJqUJwvfpbuLSnd-ifd6Dqw64d0/edit?usp=sharing' },
      { title: 'E-Books', content: 'Get the best e-books for ALP preparation.', link: '/standard-materials' },
      { title: 'Study Material', content: 'We provide detailed and easy to understand study material.' },
      { title: 'Video Content', content: 'Understanding the Computer Based Aptitude Test (CBAT) is crucial.' },
      { title: 'Quiz', content: 'Practice with RRB ALP quizzes:', link: '/quiz' },
    ]
  },
  {
    id: 'rrb-je',
    subtitle: 'Junior Engineer',
    title: 'RRB JE',
    image: railImg4,
    alt: 'RRB JE',
    desc: 'RRB JE recruitment is for the posts of Junior Engineer, Junior Engineer (IT), Chemical & Metallurgical Assistant (CMA).',
    reverse: true,
    bg: '#f8fafc',
    accordions: [
      { title: 'Syllabus', content: 'The recruitment process involves 1st Stage CBT, 2nd Stage CBT, Document Verification, and Medical Examination.', link: 'https://docs.google.com/document/d/1Y7RkY4TI6rTErN8Y8KrNmkAhZ8pOQfOoo7kRujaFSeg/edit?usp=sharing' },
      { title: 'E-Books', content: 'Comprehensive syllabus for technical and non-technical parts...', link: '/standard-materials' },
      { title: 'Study Material', content: 'Access specialized study materials for JE exams...' },
      { title: 'Video Content', content: 'Video tutorials for engineering concepts...' },
      { title: 'Quiz', content: 'Attempt RRB JE mock quizzes.', link: '/quiz' },
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

export default function Railway() {
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
            <h1 className="hero-title">Railway <span className="highlight">Exam</span></h1>
            <p className="hero-description">
              Elevate Your Preparation: My Study Life - Your Gateway to Success in Competitive and Railway Exams.
              Conquer every challenge with confidence and achieve your career goals in the railway sector!
            </p>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <main className="tnpsc-section">
        <div className="tnpsc-container">
          <div className="programs-grid">
            {railwayExams.map((exam) => (
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
        {railwayExams.map((exam) => (
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
