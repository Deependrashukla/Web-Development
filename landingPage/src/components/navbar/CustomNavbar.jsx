import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
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
            <NavLink to=""><button className="home">Home</button></NavLink>
            <NavLink to="/contactPage"><button className="contact">Contact</button></NavLink>
            <button className="resume">Resume</button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
