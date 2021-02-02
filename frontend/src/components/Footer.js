import React from "react";
import { Container} from 'react-bootstrap'


const Footer = () => {
  return (
    <Container className="footer-copyright text-center py-3" >
      &copy; {new Date().getFullYear()}-Copyright: <a href="#bonanza"> Bonanza</a>
  </Container>
  );
};

export default Footer;
