import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css'
import Cartwidget from '../CartWidget/Cartwidget';
import {Link} from 'react-router-dom'



function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
        <Link to='/'>
          <h3>Tienda Ziba</h3>
      </Link>
          <Nav className="me-auto">

          <ul className="navbar-nav">
          
              <li className='menu'  >
              <Link id="item" to = '/category/Medias'>
                <p id="p">Medias</p>
                </Link>
              </li>
              <li className='menu' >
              <Link id="item" to = '/category/Soquetes'>
                <p id="p">Soquetes</p>
              </Link>
              </li>
          
            </ul>


{/*           <Link to={'/category/Home'} >Home</Link>
            <Link to={'/category/Productos'} >Soquetes</Link>
            <Link to={'/category/Categorias'}>Medias</Link> */}
                </Nav>
                <Cartwidget/>
        </Container>
      </Navbar>

    
    </>
  );
}

export default ColorSchemesExample;
