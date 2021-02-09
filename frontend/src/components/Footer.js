import React from "react";
import { Container,Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Footer = () => {
  return (
    <Container className="footer-copyright text-center py-3">
      &copy; {new Date().getFullYear()}-Copyright:{" "}
      <LinkContainer to="/">
        <Nav.Link > Bonanza</Nav.Link>
      </LinkContainer>
    </Container>
  );
};

export default Footer;
