import React from 'react';
import './contactPage.css'; // Ensure this path is correct
import Contact from '../contact/Contact';
import { Container, Row, Col } from 'react-bootstrap';

function ContactPage() {
  return (
    <div>
      <Container className='contact-container'>
        <Row>
          <Col>
            <div>
              <Contact />
            </div>
          </Col>

          <Col>
            <div>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.364871941982!2d81.07030757517524!3d26.891912976659555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399958aa9da50cb7%3A0x8f5a1f4d75d0d691!2sShri%20Ramswaroop%20College%20Of%20Engineering%20and%20Management!5e0!3m2!1sen!2sin!4v1727171362332!5m2!1sen!2sin" 
                width="600" 
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </Col>
          
        </Row>
      </Container>
    </div>
  );
}

export default ContactPage;
