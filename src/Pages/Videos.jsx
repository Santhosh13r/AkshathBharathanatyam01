import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const videoLinks = [
  "https://www.youtube.com/embed/bOCakwz8ucM?autoplay=0&modestbranding=1&controls=0&mute=1",
  "https://www.youtube.com/embed/3aDsuh0-Xec?autoplay=0&modestbranding=1&controls=0&mute=1",
  "https://www.youtube.com/embed/tEPk3LoLb_s?autoplay=0&modestbranding=1&controls=0&mute=1",
  "https://www.youtube.com/embed/CZb67LBfyps?autoplay=0&modestbranding=1&controls=0&mute=1",
  "https://www.youtube.com/embed/jurDA77CxIA?autoplay=0&modestbranding=1&controls=0&mute=1",
];

function Videos() {
  return (
    <div>
      <Container>
        <Row>
          {videoLinks.map((link, index) => (
            <Col lg={6} key={index} className="mt-3 mb-3">
              <div className="ratio ratio-16x9">
                <iframe
                  title="American Yacht Group"
                  className="rounded"
                  src={link}
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      <section
        className="position-relative mt-3 pt-0 pb-2"
        style={{ backgroundColor: "#0052cc", color: "white" }}
      >
        <Container>
          <Row className="justify-content-center">
            <Col md={9} className="pt-3 pb-md-2 pb-lg-4">
              <h2 className="text-center lh-base fw-bolder my-3">
                Akshath Piram
              </h2>
              <p className="text-center lh-base my-3">
                "Bharathanatyam: Where Culture Comes to Life Through Dance."
              </p>

              <div className="text-center">
                <a href="https://www.youtube.com/@akshuspassion1810">
                  <Button className="lh-base mt-3" variant="outline-light">
                    Visit Youtube Channel
                  </Button>
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default Videos;
