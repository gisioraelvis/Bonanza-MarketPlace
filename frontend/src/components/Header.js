import React from "react";
import logo from './Bonanza.png'
import './Header.css'
import { Container,Navbar,Nav } from 'react-bootstrap'

const Header = () => {
  return (
 <header>
 <Navbar bg="dark" variant="dark" expand="lg" collabseOnSelect>
   <Container>
     <Navbar.Brand href="#home"><img src={logo} className="App-logo" alt="logo" /></Navbar.Brand>
       <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#home"><i class="fas fa-shopping-cart"></i>Cart</Nav.Link>
              <Nav.Link href="#link"><i class="fas fa-user"></i>Sign In</Nav.Link>
           </Nav>
          </Navbar.Collapse>
  </Container>
</Navbar>
 </header>
  );
};

export default Header;
