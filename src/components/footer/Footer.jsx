import { Link } from 'react-router-dom'
import './footer.css'

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-column">
          <h3>Quick Link</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Condition</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Contact</h3>
          <div className="contact-info">
            <div><i className="fa-solid fa-location-dot" /> 1/111,Kamarajar Street, Chennai</div>
            <div><i className="fa-solid fa-phone" /> +91 9360649867</div>
            <div><i className="fa-solid fa-envelope" /> help@mystudylife.com</div>
          </div>
          <div className="social-icons-footer">
            <a href="#"><i className="fa-brands fa-twitter" /></a>
            <a href="#"><i className="fa-brands fa-facebook-f" /></a>
            <a href="#"><i className="fa-brands fa-youtube" /></a>
            <a href="#"><i className="fa-brands fa-linkedin-in" /></a>
          </div>
        </div>

        <div className="footer-column">
          <h3>Subscribe to our Newsletter</h3>
          <div className="newsletter-box">
            <p>Subscribe now and join our growing community of learners committed to lifelong education!</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Your email" required />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </div>

      <div className="footer-container">
        <div className="footer-bottom">
          <button className="back-to-top" type="button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <i className="fa-solid fa-arrow-up" />
          </button>
          <div className="copyright">&copy; My Study Life, All Right Reserved.</div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
