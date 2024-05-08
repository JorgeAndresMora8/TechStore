import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import PrivateRoutes from './routes/PrivateRoutes';
import AuthRoutes from './routes/AuthRoutes';
import NavbarOptions from './components/Options';
import { Link } from 'react-router-dom';

export default function NavbarContainer() {

  const auth = useSelector((state) => state.auth);


  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid className='navbar'>
        <Navbar.Brand className='logo' href="#">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          { auth.token ? <PrivateRoutes />  : <AuthRoutes />}
          </Nav>

            
            { auth.token && <NavbarOptions />}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}