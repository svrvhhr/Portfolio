import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
            À Propos de Moi !
            </h1>
            <p className="home-about-body">
            Bonjour, je m'appelle Sarah Harrouche. Étudiante en Master 1 <span className="purple"> Big Data et Data Mining </span>, je suis passionnée par la science des données et l’automatisation. 
              <br />
              <br />J’ai travaillé sur des projets innovants mêlant apprentissage automatique, blockchain, et développement technologique
              <br />
              <br />
              Mon objectif est de résoudre des problématiques complexes grâce à des solutions créatives et impactantes. &nbsp;
              
              <br />
              <br />
              Toujours en quête d’apprentissage, je suis prête à relever de nouveaux défis.
              
              
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Contact</h1>
            <p>
              N'hésitez pas à me <span className="purple">contacter </span>sur
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/svrvhhr"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
             
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/sarahharrouche/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
