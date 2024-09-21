import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './navbar.css'

function NavBar() {
  return (
    <Navbar expand="lg" className="background_color">
      <Container>
        {/* <Navbar.Brand href="/" className='black_letters'>Paul Julmeus</Navbar.Brand> */}
        <Navbar.Toggle className='black_letters' aria-controls="basic-navbar-nav" />
        <Navbar.Collapse  className='black_letters' id="basic-navbar-nav">
          <Nav className="me-auto black_letters">
            <NavDropdown title="Projects" id="basic-nav-dropdown" className='black_letters'>
              <NavDropdown.Item href="https://www.strengthshadow.com/">Strength Shadow</NavDropdown.Item>
              <NavDropdown.Item href="https://qunimbus.com/">
                Qunimbus
              </NavDropdown.Item>
            </NavDropdown>    
          </Nav>
          <Nav.Link className='contact_end black_letters' href="/contact">Contact</Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;