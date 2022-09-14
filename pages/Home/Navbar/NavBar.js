import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import NavStyles from './Navbar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars} from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link';

const NavBar = () => {
  return (
    <Navbar  collapseOnSelect expand="lg" className={`${NavStyles.navigation} bg-transparent`}>
      <Container>
        <Navbar.Brand href="/" className='text-white'>RBS Tech</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav">
          <span>
          <FontAwesomeIcon icon={faBars} color="#FFF"  size="2x"/>
          </span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Link href='/' passHref>
              <Nav.Link className='text-white'>Home</Nav.Link>
            </Link>
            {/* <Link href='/'>Home</Link>
            <Link href='/aboutUs'>About us</Link> */}
           <Link href="/aboutUs" passHref>
              <Nav.Link className='text-white'>About us</Nav.Link>
           </Link>
           <Link href="/pricing" passHref>
              <Nav.Link className='text-white'>Pricing</Nav.Link>
           </Link>
            <NavDropdown  className={`${NavStyles.navLink}`}  title={
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
            <Link  href="/contactUs" passHref>
              <Nav.Link className='text-white'>Contact us</Nav.Link>
            </Link>
           <Link href="/adminPanel" passHref>
              <Nav.Link className='text-white'>Admin Panel</Nav.Link>
           </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;