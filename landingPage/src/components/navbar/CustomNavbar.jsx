import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';
import './CustomNavbar.css'; // Import your custom CSS


function CustomNavbar() {
  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <span>Deependra Shukla</span>
          </Nav>
          <Nav>
            <button className="contact">Contact</button>
            <button className='resume'>Resume</button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
