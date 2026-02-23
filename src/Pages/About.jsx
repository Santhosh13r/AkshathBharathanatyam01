import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import img01 from "../Images/p2.jpg";

const awardsAndRecognitions = [
  "Natya Choodamani",
  "Bala Ojaswi",
  "Nrithya Neeranjana",
  "Nrithyakala Balaratna",
  "Nrithya Kala Shrestha",
  "Nrithya Bala Mayooram",
  "Nrithya Kala Jyoti",
  "Nritya Param",
  "Bala Natya Ratna",
  "Shreshta Bala Narthaka 2021",
  "Bharatha Muni",
  "Sarga Prathibha",
  "Param Nrithya Ilavarasan Puraskar",
  "Bala Bharatha Nipuna",
  "Natya Kala Vaibhava",
  "Child Prodigy 2020 – 21, ICMDA",
  "Junior Ambassador, Griffin College London",
  "National Championship 2021, FETNA",
  "National Championship 2022, FETNA",
  "Saptami Super Star 2021,Saptami Foundation,Texas",
  "Saptami Super Star 2022,Saptami Foundation,Texas",
  "Hall of Fame Award from Live4You, Chennai",
];

const About = () => {
  return (
    <div>
      <section className="pt-3" style={{ backgroundColor: "#101010" }}>
        <Container>
          <Row>
            <Col
              lg={4}
              className="d-flex flex-column justify-content-center my-3"
            >
              <h1 style={{ fontWeight: "1000" }}>Akshath</h1>
              <p className="text-primary">Bharathanatyam Artist</p>
              <p align="justify">
                Akshath took his baby steps in the art of Bharathanatyam at the
                age of 2.5yrs as a baby Krishna in his mother’s dance musical.
                His formal training commenced under the nurturing guidance of
                his loving mother and Guru, Smt. Indhumadhi Gopalakrishnan,
                Artistic Director, Salangai School of Performing Arts. He has
                bloomed into a vibrant dancer who captivates audiences with his
                energy, enthusiasm and dynamic movements.
              </p>
            </Col>
            <Col
              lg={8}
              className="d-flex flex-column justify-content-center my-3"
            >
              <img
                className="img-fluid"
                alt=""
                src={img01}
                loading="lazy"
              ></img>
            </Col>
          </Row>
        </Container>
        <Row style={{ backgroundColor: "#090909" }} className="mt-4">
          <Col>
            <div className="text-center mt-4">
              <p align="justify" className="container">
                Akshath unswervingly participates in numerous dance competitions
                and programs with his mother’s trust and selfless efforts. He
                has successfully completed his Grade 4 exam with Distinction in
                Bharathanatyam and Grade 2 exam with Distinction in Vocal music
                from the Griffin College London, Grade 4 exam with Distinction
                in Piano from ABRSM and Intermediate level exam in Tamil Virtual
                Academy. Akshath has proven his artistry in Nattuvangam at the
                prestigious Bharat Kalachar, Chennai. He strongly believes that
                for any dancer to be complete, a strong knowledge in music and
                thalam plays a vital role. So he balances learning Mridangam
                under the guidance of Vid. Nagai. S. Narayanan and Thalam under
                the guidance of Guru. Smt. Nandhini Suresh along with
                Bharathanatyam and Vocal Music under the guidance of Smt.
                Rajeswari Kumar. He took the advance training for his arangetram
                from Kalaimamani Guru. Madurai. R. Muralidharan and Guru. Smt.
                Chithra Muralidharan. He has proven his artistry by receiving
                more than 22 titles and winning over 50 dance competitions
                across USA, Malaysia and India.
              </p>
            </div>
          </Col>

          <svg
            class="curve-container__curve"
            viewBox="10 -20 1870 210"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <path
              class="plain fill-n0"
              fill="white"
              d="M977.9,76.2 C475.2,-17.4 0.2,132.5 0.2,132.5 L0.2,275.5 L1891.3,275.5 L1891.3,0.7 C1891.3,0.7 1480.6,169.8 977.9,76.2 Z"
              id="Path"
            ></path>
          </svg>
        </Row>
      </section>
      <section id="awards">
        <Container>
          <Row className="border-bottom mb-3">
            <Col xs={12}>
              <h3>Awards & Recognitions</h3>
            </Col>
          </Row>
          <Row className="mb-3">
            {awardsAndRecognitions.map((award, index) => (
              <Col key={index} xs={12} sm={12} md={12} lg={6}>
                <div className="row g-0 bg-light text-dark align-items-center my-1 rounded-3 border-3 border-start border-warning">
                  <Col
                    xs={2}
                    sm={2}
                    md={2}
                    lg={2}
                    className="d-flex justify-content-center p-2"
                  >
                    {/* <i
                      style={{ fontSize: "24px", color: "#ff8c00" }}
                      className="fas fa-american-sign-language-interpreting"
                    /> */}
                    <img
                      src="https://symbolikon.com/wp-content/uploads/edd/2022/11/Nataraja-hindu-bold.png"
                      alt=""
                      width="50"
                      loading="lazy"
                    />
                  </Col>
                  <Col
                    xs={10}
                    sm={10}
                    md={10}
                    lg={10}
                    className="d-flex align-items-center p-2"
                  >
                    <h6 className="fw-bold">{award}</h6>
                  </Col>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default About;
