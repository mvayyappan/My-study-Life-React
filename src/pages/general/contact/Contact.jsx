import './contact.css'




function Contact() {
  return (
    <>
    <div style={{background: "linear-gradient(135deg, #5b7fd8 0%, #7b6ab8 50%, #9b5fa8 100%"}}>
      <section className="hero-section">
        <h1>Connect with Our Team</h1>
        <p>Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
      </section>

      <div className="container">
        <div className="contact-grid">
          <div className="contact-form-section">
            <h2 className="form-title">Send us a Message</h2>
            <p className="form-subtitle">Fill out the form below and our team will get back to you within 24 hours.</p>
            <div id="alertBox" className="alert" />
            <form id="contactForm">
              <div className="form-group">
                <label>Full Name *</label>
                <input type="text" id="name" placeholder="Enter your full name" required />
              </div>

              <div className="form-group">
                <label>Email Address *</label>
                <input type="email" id="email" placeholder="your@email.com" required />
              </div>

              <div className="form-group">
                <label>Phone Number</label>
                <input type="tel" id="phone" placeholder="+91 98765 43210" />
              </div>

              <div className="form-group">
                <label>Subject *</label>
                <select id="subject" required>
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="technical">Technical Support</option>
                  <option value="courses">Course Information</option>
                  <option value="feedback">Feedback</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label>Message *</label>
                <textarea id="message" placeholder="Write your message here..." required />
              </div>

              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </div>

          <div className="contact-info-section">
            <div className="info-card">
              <span className="info-icon"><i className="fa-solid fa-phone"></i></span>
              <h3 className="info-title">Call Us</h3>
              <div className="info-details">
                <p>General Inquiries: <a href="tel:+919876543210">+91 98765 43210</a></p>
                <p>Support: <a href="tel:+919876543211">+91 98765 43211</a></p>
                <p>Mon-Sat: 9:00 AM - 6:00 PM</p>
              </div>
            </div>

            <div className="info-card">
              <span className="info-icon"><i className="fa-solid fa-envelope"></i></span>
              <h3 className="info-title">Email Us</h3>
              <div className="info-details">
                <p>General: <a href="mailto:info@mystudylife.com">info@mystudylife.com</a></p>
                <p>Support: <a href="mailto:support@mystudylife.com">support@mystudylife.com</a></p>
                <p>We reply within 24 hours</p>
              </div>
            </div>

            <div className="info-card">
              <span className="info-icon"><i className="fa-solid fa-location-dot"></i></span>
              <h3 className="info-title">Visit Us</h3>
              <div className="info-details">
                <p>My Study Life Education</p>
                <p>123, Anna Salai, Mount Road</p>
                <p>Chennai, Tamil Nadu 600002</p>
                <p>India</p>
              </div>
            </div>
          </div>
        </div>

        <div className="map-section">
          <h2 className="map-title">Our Location</h2>
          <div className="embed-map-responsive">
            <div className="embed-map-container">
              <iframe
                className="embed-map-frame"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                src="https://maps.google.com/maps?width=599&height=399&hl=en&q=FRESHWORKS%20IN%20CHENNAI&t=&z=14&ie=UTF8&iwloc=B&output=embed"
              />
              <a
                href="https://kling-o1.pro"
                style={{ fontSize: '2px', color: 'gray', position: 'absolute', bottom: 0, left: 0, zIndex: 1, maxHeight: '1px', overflow: 'hidden' }}
              >
                Kling O1
              </a>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default Contact
