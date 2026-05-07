import './home.css'
import tnpscImage from '../../../assets/TNPSC.jpeg'
import bankImage from '../../../assets/Bank.jpeg'
import railwayImage from '../../../assets/Railway.jpeg'
import sscImage from '../../../assets/ssc.jpeg'

const categories = [
  {
    title: 'TNPSC',
    subtitle: 'Group 1, 2, 3, 4',
    image: tnpscImage,
    alt: 'TNPSC Study Materials'
  },
  {
    title: 'SSC',
    subtitle: 'CGL, CHSL, MTS',
    image: sscImage,
    alt: 'SSC Preparation'
  },
  {
    title: 'Bank Exam',
    subtitle: 'PO/MT, SO, Clerk',
    image: bankImage,
    alt: 'Banking Careers'
  },
  {
    title: 'Railway',
    subtitle: 'Grade A, B, C, D',
    image: railwayImage,
    alt: 'Railway Exams'
  }
]

const featureItems = [
  { title: 'Syllabus', description: 'Detailed syllabus for each exam to guide your study plan.', image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=800&auto=format&fit=crop' },
  { title: 'E-books', description: 'Access a wide range of e-books for comprehensive learning.', image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=800&auto=format&fit=crop' },
  { title: 'Study Materials', description: 'Well-structured notes specifically designed for competitive exams.', image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=800&auto=format&fit=crop' },
  { title: 'Question Bank', description: 'Extensive question bank to test your knowledge and preparation.', image: 'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?q=80&w=800&auto=format&fit=crop' },
  { title: 'Taking Notes', description: 'Personalized notes to help you keep track of important concepts.', image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=800&auto=format&fit=crop' },
  { title: 'Mock Test / Quiz', description: 'Real-time quiz experience to boost your confidence.', image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=800&auto=format&fit=crop' },
  { title: 'Progress Tracking', description: 'Monitor your progress and stay motivated throughout your studies.', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop' },
  { title: 'Achieve Success', description: 'Analyze your progress and reach your goal with confidence.', image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop' }
]








function Home() {
  return (
    <>  
      <header  style={{background: "linear-gradient(135deg, #5b7fd8 0%, #7b6ab8 50%, #9b5fa8 100%"}} className="hero" id="home">
      <div className="hero-content">
        <h1>Build Your Future with My Study Life</h1>
        <p>Your one-stop destination for TNPSC, SSC, Railway, and Bank exam preparation.</p>
        <div className="hero-cards">
          <div className="hero-card">
            <img
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop"
              alt="Aspirants"
            />
            <h3>Competitive exams</h3>
            <p>Comprehensive study materials and practice tests for all major government exams.</p>
            <a href="#courses" className="btn">Start Preparing</a>
          </div>
        </div>
      </div>
    </header>
    <section id="courses" className="course-categories">
      <div className="section-container">
        <h2 className="section-title">Course Categories</h2>
        <p className="section-subtitle">Choose from our wide range of organized courses for aspirants.</p>
        <div className="category-group">
          <div className="category-grid">
            {categories.map((category) => (
              <div key={category.title} className="category-card">
                <img src={category.image} alt={category.alt} />
                <h3>{category.title}</h3>
                <p>{category.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    <section className="why-choose">
      <div className="section-container">
        <h2 className="section-title">Why Choose My Study Life?</h2>
        <p className="section-subtitle">Everything you need to succeed in your educational journey.</p>
        <div className="features-grid">
          {featureItems.map((item) => (
            <div key={item.title} className="feature-card">
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  )
}

export default Home
