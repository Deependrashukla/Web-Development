import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <form className="contact-form">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" placeholder="Your Name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Your Email" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" placeholder="Your Message" required></textarea>

        <button type="submit" className="submit-button">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
