import React from "react";
import { Container, Row, Col } from "react-bootstrap";

// Images
import pr1 from "../Images/1.jpg";
import pr2 from "../Images/2.jpg";
import pr3 from "../Images/3.jpg";
import pr4 from "../Images/4.jpg";
import pr5 from "../Images/5.jpg";
import pr6 from "../Images/6.jpg";
import pr7 from "../Images/7.jpg";
import pr8 from "../Images/8.jpg";
import pr9 from "../Images/9.jpg";
import pr10 from "../Images/10.jpg";
import pr11 from "../Images/11.jpg";
import pr12 from "../Images/12.jpg";
import pr13 from "../Images/14(1).jpg";
import pr14 from "../Images/15.jpg";
import pr15 from "../Images/16.jpg";
import pr16 from "../Images/Dinamalar Newspaper (1).jpg";

const pressData = [
  {
    year: "2024",
    photos: [pr16, pr15, pr14],
  },
  {
    year: "2023",
    photos: [pr13, pr12, pr11, pr10],
  },
  {
    year: "2022",
    photos: [pr9, pr8, pr7, pr6],
  },
  {
    year: "2021",
    photos: [pr1, pr2, pr3, pr4, pr5],
  },
];

const Press = () => {
  return (
    <Container className="press-page py-5 mt-3 bg-dark text-light rounded-3">
      {/* Page Header */}
      <div className="text-center mb-5 ">
        <h2 className="fw-bold ">Press & Media Coverage</h2>
        <p className="text-muted text-light">Year-wise newspaper & media features</p>
      </div>

      {/* Year Based Sections */}
      {pressData.map((item, index) => (
        <div key={index} className="mb-5">
          {/* Year Title */}
          <div className="year-header mb-4">
            <h3 className="year-title">{item.year}</h3>
          </div>

          {/* Images */}
          <Row>
            {item.photos.map((photo, i) => (
              <Col key={i} xs={12} sm={6} md={4} className="p-3">
                <div className="photo-item">
                  <img
                    src={photo}
                    alt={`Press ${item.year}`}
                    className="img-fluid fixed-image"
                    loading="lazy"
                  />
                </div>
              </Col>
            ))}
          </Row>
        </div>
      ))}
    </Container>
  );
};

export default Press;
