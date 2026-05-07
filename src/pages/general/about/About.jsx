import './about.css'

function About() {
  return (
    <>
    <div style={{background: "linear-gradient(135deg, #5b7fd8 0%, #7b6ab8 50%, #9b5fa8 100%"}}>
      <section className="hero-section">
        <h1>About My Study Life</h1>
        <p>
          Empowering students to achieve their educational dreams through quality resources, expert guidance,
          and innovative learning solutions
        </p>
      </section>

      <div className="container">
        <div className="story-section">
          <h2 className="section-title">
            <span className="section-icon"><i className="fa-solid fa-book-open"></i></span>
            Our Story
          </h2>
          <p className="story-text">
            My Study Life was founded in 2024 with a simple yet powerful vision: to make quality education accessible
            to every student, regardless of their background or location. We recognized that many talented students
            fail to reach their full potential, not due to lack of ability, but due to lack of proper guidance and
            resources.
          </p>
          <p className="story-text">
            Our journey began when we observed students struggling in grades 6-10, which directly impacted their
            performance in 12th standard and limited their opportunities for higher education. Similarly, we saw
            aspiring candidates preparing for competitive exams like TNPSC, UPSC, Bank, and Railway without access
            to structured study materials and proper guidance.
          </p>
          <p className="story-text">
            Today, My Study Life serves over 10,000 students across Tamil Nadu and beyond, helping them build strong
            foundations and achieve their career goals. Our success rate of 95% speaks to our commitment to student
            success.
          </p>
        </div>

        <div className="mission-vision-grid">
          <div className="mv-card">
            <div className="mv-icon"><i className="fa-solid fa-bullseye"></i></div>
            <h3 className="mv-title">Our Mission</h3>
            <p className="mv-text">
              To provide comprehensive, accessible, and effective learning resources that empower students from
              grades 6-10 and competitive exam aspirants to achieve academic excellence and career success.
            </p>
          </div>

          <div className="mv-card">
            <div className="mv-icon"><i className="fa-solid fa-star"></i></div>
            <h3 className="mv-title">Our Vision</h3>
            <p className="mv-text">
              To become the most trusted educational platform in India, transforming the lives of millions of
              students by bridging the gap between ambition and achievement through innovative learning solutions.
            </p>
          </div>
        </div>

        <div className="values-section">
          <h2 className="section-title">
            <span className="section-icon"><i className="fa-solid fa-gem"></i></span>
            Our Values
          </h2>

          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon"><i className="fa-solid fa-graduation-cap"></i></div>
              <h4 className="value-title">Excellence</h4>
              <p className="value-text">
                We strive for excellence in everything we do, from content quality to student support.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon"><i className="fa-solid fa-handshake"></i></div>
              <h4 className="value-title">Integrity</h4>
              <p className="value-text">
                We maintain honesty and transparency in all our interactions and commitments.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon"><i className="fa-solid fa-lightbulb"></i></div>
              <h4 className="value-title">Innovation</h4>
              <p className="value-text">
                We continuously innovate to provide better learning experiences and outcomes.
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default About
