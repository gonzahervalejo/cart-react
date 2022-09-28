import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css'
import Cartwidget from '../CartWidget/Cartwidget';



function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Tienda Ziba</Navbar.Brand>
          <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#music">Productos</Nav.Link>
                    <Nav.Link href="#more">Categorias</Nav.Link>
                </Nav>
                <Cartwidget/>
        </Container>
      </Navbar>

    
    </>
  );
}

export default ColorSchemesExample;
