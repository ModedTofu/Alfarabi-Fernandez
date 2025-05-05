import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulate form submission
    setFormStatus({
      submitted: true,
      success: true,
      message: 'Thank you for your message! I will get back to you soon.'
    });
    
    // Reset form after successful submission
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      setFormStatus({
        submitted: false,
        success: false,
        message: ''
      });
    }, 5000);
  };
  
  return (
    <div className="contact-container">
      <h1 className="contact-title">Get In Touch</h1>
      
      <div className="contact-content">
        <div className="contact-info">
          <h2 className="contact-heading">Contact Information</h2>
          
          <div className="contact-details">
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <p>alfarabi.fernandez@example.com</p>
            </div>
            
            <div className="contact-item">
              <i className="fas fa-phone"></i>
              <p>+1 (123) 456-7890</p>
            </div>
            
            <div className="contact-item">
              <i className="fas fa-map-marker-alt"></i>
              <p>San Francisco, CA</p>
            </div>
          </div>
          
          <div className="social-links">
            <h3>Connect With Me</h3>
            <div className="social-icons">
              <a href="#" className="social-icon" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="#" className="social-icon" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="social-icon" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-icon" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          
          <div className="contact-availability">
            <h3>Availability</h3>
            <p>I'm currently available for freelance work and full-time positions.</p>
          </div>
        </div>
        
        <div className="contact-form-container">
          <h2 className="contact-heading">Send Me a Message</h2>
          
          {formStatus.submitted && (
            <div className={`form-message ${formStatus.success ? 'success' : 'error'}`}>
              {formStatus.message}
            </div>
          )}
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <div className="modern-input-group">
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  className="modern-input" 
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="name" className="modern-label">Your Name</label>
              </div>
            </div>
            
            <div className="form-group">
              <div className="modern-input-group">
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  className="modern-input" 
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="email" className="modern-label">Your Email</label>
              </div>
            </div>
            
            <div className="form-group">
              <div className="modern-input-group">
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  className="modern-input" 
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="subject" className="modern-label">Subject</label>
              </div>
            </div>
            
            <div className="form-group">
              <div className="modern-input-group">
                <textarea 
                  id="message" 
                  name="message" 
                  className="modern-input" 
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
                <label htmlFor="message" className="modern-label">Your Message</label>
              </div>
            </div>
            
            <button type="submit" className="submit-button">
              Send Message <i className="fas fa-paper-plane"></i>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
