import React from "react";
import { Container, Row, Col } from 'react-bootstrap'


const Footer = () => {
  return (
    <div className="footer-copyright text-center py-3" >
      &copy; {new Date().getFullYear()}-Copyright: <a href="#bonanza"> Bonanza</a>
  </div>
  );
};

export default Footer;
