import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";
  
const Footer = () => {
  return (
    <Box className="d-none d-sm-block">
      {/* <h1 style={{ color: "green", 
                   textAlign: "center", 
                   marginTop: "-50px" }}>
        GeeksforGeeks: A Computer Science Portal for Geeks
      </h1> */}
      <Container>
        <Row>
          <Column>
            <Heading>Nation</Heading>
            <FooterLink href="#">India</FooterLink>
            <FooterLink href="#">Delhi</FooterLink>
            <FooterLink href="#">Mumbai</FooterLink>
            <FooterLink href="#">Chennai</FooterLink>
          </Column>
          <Column>
            <Heading>World</Heading>
            <FooterLink href="#">US</FooterLink>
            <FooterLink href="#">Europe</FooterLink>
            <FooterLink href="#">Asia</FooterLink>
            <FooterLink href="#">Trending</FooterLink>
          </Column>
          <Column>
            <Heading>Technology</Heading>
            <FooterLink href="#">Mobile</FooterLink>
            <FooterLink href="#">Gadgets</FooterLink>
            <FooterLink href="#">Internet</FooterLink>
            <FooterLink href="#">Artificial Intelligence</FooterLink>
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="#">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>
                  Facebook
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>
                  Instagram
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>
                  Twitter
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-youtube">
                <span style={{ marginLeft: "10px" }}>
                  Youtube
                </span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;