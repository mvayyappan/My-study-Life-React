import tnpscImage from '../../../assets/TNPSC.jpeg'
import bankImage from '../../../assets/Bank.jpeg'
import railwayImage from '../../../assets/Railway.jpeg'
import sscImage from '../../../assets/ssc.jpeg'
import './courses.css'

export default function Courses() {
  return (
    <>
    <div>
      <section id="tnpsc" className="path-section">
        <div className="container journey-row">
          <div className="journey-text">
            <span className="path-label">PATH 01</span>
            <h2>TNPSC Exam</h2>
            <p>
              Master the Tamil Nadu Public Service Commission exams. We provide structured notes,
              current affairs, and previous year question papers specifically for Group 1, 2, and 4 services.
            </p>
            <div className="standards-badge">Group 1 • 2 • 4</div>
          </div>
          <div className="journey-image">
            <img src={tnpscImage} alt="TNPSC Exam Prep" />
          </div>
        </div>
      </section>

      <section id="bank" className="path-section alt-bg">
        <div className="container journey-row reverse">
          <div className="journey-text">
            <span className="path-label">PATH 02</span>
            <h2>Bank Exams</h2>
            <p>
              Excel in SBI, IBPS, and RBI competitive exams. Access comprehensive materials for Quantitative
              Aptitude, Reasoning, and Banking Awareness to stay ahead of the curve.
            </p>
            <div className="standards-badge">IBPS • SBI • RBI</div>
          </div>
          <div className="journey-image">
            <img src={bankImage} alt="Bank Exam Prep" />
          </div>
        </div>
      </section>

      <section id="railway" className="path-section">
        <div className="container journey-row">
          <div className="journey-text">
            <span className="path-label">PATH 03</span>
            <h2>Railway Exam</h2>
            <p>
              Prepare for RRB NTPC, Group D, and ALP exams with our curated technical and non-technical study kits.
              Master General Awareness and Science concepts with ease.
            </p>
            <div className="standards-badge">RRB NTPC • Group D</div>
          </div>
          <div className="journey-image">
            <img src={railwayImage} alt="Railway Exam Prep" />
          </div>
        </div>
      </section>

      <section id="ssc" className="path-section alt-bg">
        <div className="container journey-row reverse">
          <div className="journey-text">
            <span className="path-label">PATH 04</span>
            <h2>SSC Exam</h2>
            <p>
              Join the Central Government services by cracking SSC CGL, CHSL, and MTS exams. Our resources cover
              General Intelligence, English, and General Awareness in depth.
            </p>
            <div className="standards-badge">CGL • CHSL • MTS</div>
          </div>
          <div className="journey-image">
            <img src={sscImage} alt="SSC Exam Prep" />
          </div>
        </div>
      </section>
    </div>
    </>
  )
}
