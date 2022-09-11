import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import NavStyles from '../../../styles/NavBar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars} from '@fortawesome/free-solid-svg-icons'

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" style={{backgroundColor: '#1D2333 '}} className=''>
      <Container>
        <Navbar.Brand href="#home" className='text-white'>RBS Tech</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav">
          <span>
          <FontAwesomeIcon icon={faBars} color="#FFF"  size="2x"/>
          </span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#features" className='text-white'>Home</Nav.Link>
            <Nav.Link href="#pricing" className='text-white'>About us</Nav.Link>
            <NavDropdown  className='text-white'  title={
        <span className="text-white my-auto">Products</span>
    } id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets"className='text-white'>Contact us</Nav.Link>
            <Nav.Link eventKey={2} href="#memes"className='text-white'>
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;