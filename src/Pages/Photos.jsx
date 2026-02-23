import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import image1 from "../Images/p1.jpg";
import image2 from "../Images/p2.jpg";
import image3 from "../Images/p3.jpg";
import image4 from "../Images/p4.jpg";
import image5 from "../Images/p5.jpg";
import image6 from "../Images/p6.jpg";
import image7 from "../Images/p7.jpg";
import image8 from "../Images/p8.jpg";
import image9 from "../Images/p9.jpg";

const Photos = () => {
  // Assuming you have an array of photo URLs
  const photos = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
  ];

  return (
    <Container>
      <Row className="mt-3">
        {photos.map((photo, index) => (
          <Col className="p-3" key={index} xs={12} sm={6} md={6} lg={4}>
            <div className="photo-item">
              <img
                src={photo}
                alt=""
                className="img-fluid fixed-image"
                loading="lazy"
              />
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Photos;
