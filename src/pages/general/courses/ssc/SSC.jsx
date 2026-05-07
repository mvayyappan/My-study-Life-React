import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../banking/bank.css'

import heroImg from '../../../../assets/image_3.png'
import sscImg1 from '../../../../assets/ssc.jpeg'
import sscImg2 from '../../../../assets/2.png'
import sscImg3 from '../../../../assets/3.png'
import sscImg4 from '../../../../assets/4.png'


const sscExams = [
  {
    id: 'ssc-cgl',
    subtitle: 'Combined Graduate Level',
    title: 'SSC CGL',
    image: sscImg1,
    alt: 'SSC CGL',
    desc: 'The Staff Selection Commission - Combined Graduate Level Examination, often referred to as SSC CGL is an examination to recruit staff to various posts in ministries, departments and organisations of the Government of India.',
    reverse: false,
    bg: '#ffffff',
    accordions: [
      { title: 'Syllabus', content: 'The exam comprises of two Tiers, Tier-I and Tier-II containing Quantitative Aptitude, English, Reasoning, and General Awareness.', link: 'https://docs.google.com/document/d/1YfiTVFFWU8i-Gt7krHxxJvXTrRdDS9b3V3-3oTYykOE/edit?usp=sharing' },
      { title: 'E-Books', content: 'Comprehensive syllabus for Tiers examinations...', link: '/standard-materials' },
      { title: 'Study Material', content: 'Access curated study materials and reference books for Preparation...' },
      { title: 'Video Content', content: 'Step-by-step guide to the selection process...' },
      { title: 'Quiz', content: 'The Exam Pattern of the SSC CGL can be viewed in the read more link below.', link: '/quiz' },
    ]
  },
  {
    id: 'ssc-chsl',
    subtitle: 'Combined Higher Secondary Level',
    title: 'SSC CHSL',
    image: sscImg2,
    alt: 'SSC CHSL',
    desc: 'SSC CHSL is a national-level government exam conducted by the Staff Selection Commission for recruitment to posts like LDC, JSA, PA, SA, and DEO.',
    reverse: true,
    bg: '#f8fafc',
    accordions: [
      { title: 'Syllabus', content: 'Syllabus includes English Language, General Intelligence, Quantitative Aptitude, and General Awareness.', link: 'https://docs.google.com/document/d/1W0l_fho_fgW0Ulfc8r1LuhYJwaLLZgVP67E_1MV1WXw/edit?usp=sharing' },
      { title: 'E-Books', content: 'Comprehensive syllabus for exams...', link: '/standard-materials' },
      { title: 'Study Material', content: 'Access specialized study materials for CHSL exams...' },
      { title: 'Video Content', content: 'Detailed selection criteria...' },
      { title: 'Quiz', content: 'Take a quiz to prepare for SSC CHSL.', link: '/quiz' },
    ]
  },
  {
    id: 'ssc-mts',
    subtitle: 'Multi Tasking Staff',
    title: 'SSC MTS',
    image: sscImg3,
    alt: 'SSC MTS',
    desc: 'The Staff Selection Commission conducts the SSC MTS exam to recruit General Central Service candidates for non-gazetted, non-ministerial posts.',
    reverse: false,
    bg: '#ffffff',
    accordions: [
      { title: 'Syllabus', content: 'The syllabus includes Numerical and Mathematical Ability, Reasoning Ability and Problem Solving, General Awareness, and English Language.', link: 'https://docs.google.com/document/d/14yRVWzA-g4nmhsxCFwFPMrXduFYOoQIvWayMMme6C7c/edit?usp=sharing' },
      { title: 'E-Books', content: 'Get the best e-books for MTS preparation.', link: '/standard-materials' },
      { title: 'Study Material', content: 'We provide detailed and easy to understand study material.' },
      { title: 'Video Content', content: 'The selection process includes a Computer Based Examination.' },
      { title: 'Quiz', content: 'Practice with SSC MTS quizzes:', link: '/quiz' },
    ]
  },
  {
    id: 'ssc-cpo',
    subtitle: 'Central Police Organization',
    title: 'SSC CPO',
    image: sscImg4,
    alt: 'SSC CPO',
    desc: 'SSC CPO is an open competitive examination for recruitment to the posts of Sub-Inspector (SI) in Delhi Police and Central Armed Police Forces (CAPFs).',
    reverse: true,
    bg: '#f8fafc',
    accordions: [
      { title: 'Syllabus', content: 'The exam consists of Paper-I, Physical Standard Test (PST)/Physical Endurance Test (PET), Paper-II, and Detailed Medical Examination (DME).', link: 'https://docs.google.com/document/d/1evdy6-UnfgsgbFsOpUofSpm5cqMKma2SJJwC1KFLkrI/edit?usp=sharing' },
      { title: 'E-Books', content: 'Comprehensive syllabus for Paper I and Paper II...', link: '/standard-materials' },
      { title: 'Study Material', content: 'Access specialized study materials for CPO exams...' },
      { title: 'Video Content', content: 'Video tutorials for difficult concepts...' },
      { title: 'Quiz', content: 'Attempt SSC CPO mock quizzes.', link: '/quiz' },
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

export default function SSC() {
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
            <h1 className="hero-title">SSC <span className="highlight">Exam</span></h1>
            <p className="hero-description">
              Elevate Your Preparation: My Study Life - Your Gateway to Success in Competitive and SSC Exams.
              Conquer every challenge with confidence and achieve your career goals in the public sector!
            </p>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <main className="tnpsc-section">
        <div className="tnpsc-container">
          <div className="programs-grid">
            {sscExams.map((exam) => (
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
        {sscExams.map((exam) => (
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
