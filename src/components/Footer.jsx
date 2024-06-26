import { Container, Row, Col } from "react-bootstrap";
import twitter from "../assets/img/icons8-twitter.svg"
import github from "../assets/img/icons8-github.svg"
import Linkedin from '../assets/img/nav-icon1.svg';
import { ExternalLink } from "react-external-link";

export const Footer = () => {
  return (
    <footer className="footer ">
      <Container >
        <Row className="align-items-center py-10 ">
          <Col size={12} sm={6}>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon ">
              <ExternalLink href="https://www.linkedin.com/in/yash-chauhan-7b7a25200/"> <img src={Linkedin} alt="" /> </ExternalLink>
              <ExternalLink href="">   <img src={twitter} /> </ExternalLink>
              <ExternalLink href="https://github.com/xymate">  <img src={github} /> </ExternalLink>
            </div>
            <p className=" capitalize ">Made with 💖 by Xymate</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
