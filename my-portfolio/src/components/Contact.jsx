export default function Contact() {
  return (
    <section id="contact" className="section contact-section">

      <div className="contact-content">
        <h2 className="section-title">Get in Touch</h2>
        <p className="contact-description">
          Feel free to reach out if you'd like to collaborate or just say hello!
        </p>
        <div className="contact-info">
          <div className="contact-item">
            <strong>Email:</strong>
            <a href="mailto:tisha@example.com">tisha@example.com</a>
          </div>
          <div className="contact-item">
            <strong>LinkedIn:</strong>
            <a href="https://linkedin.com/in/tisha" target="_blank" rel="noopener noreferrer">
              linkedin.com/in/tisha
            </a>
          </div>
          <div className="contact-item">
            <strong>Location:</strong>
            <span>United States</span>
          </div>
        </div>
      </div>
    </section>
  );
}
