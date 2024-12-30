import React from "react";
import { Container, Row } from "react-bootstrap";
import Home2 from "./Home2";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <b md={7} className="home-header">
              <b><h1 style={{ paddingBottom: 15 }} className="heading">
                Bienvenue sur Mon Portfolio !{" "}
                {/* <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span> */}
              </h1></b>

              <h1 className="heading-name">
                
                <strong className="main-name"> Sarah Harrouche</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                {/* <Type /> */}                
              </div>
            </b>
{/* 
            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col> */}
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
