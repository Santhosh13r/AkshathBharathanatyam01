import React, { useEffect, useState } from "react";
import { Carousel, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import "../index.css";

/* Images */
import banner_1s from "../Images/b1s.jpg";
import banner_2s from "../Images/b2s.jpg";
import banner_3s from "../Images/b3s.jpg";

import banner_1 from "../Images/b1.jpg";
import banner_2 from "../Images/b2.jpg";
import banner_3 from "../Images/b3.jpg";

import img01 from "../Images/p3.jpg";
import img02 from "../Images/p2.jpg";
import scroll_img from "../Images/Contact page(2).jpg";

/* ================= REVIEW COUNTER ================= */
const ReviewCounters = ({ totalReviews }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  return (
    <section className="review-counter-section" ref={ref}>
      <Container>
        <Row className="text-center">
          <Col md={3} xs={6} className="counter-box">
            <h2>{inView && <CountUp end={totalReviews} duration={2} />}+</h2>
            <p>Happy Audiences</p>
          </Col>

          <Col md={3} xs={6} className="counter-box">
            <h2>{inView && <CountUp end={120} duration={2} />}+</h2>
            <p>Performances</p>
          </Col>

          <Col md={3} xs={6} className="counter-box">
            <h2>{inView && <CountUp end={24} duration={2} />}+</h2>
            <p>Awards</p>
          </Col>

          <Col md={3} xs={6} className="counter-box">
            <h2>{inView && <CountUp end={10} duration={2} />}+</h2>
            <p>Years of Practice</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

/* ================= HOME ================= */
const Home = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    const querySnapshot = await getDocs(collection(db, "review"));
    const reviewData = [];
    querySnapshot.forEach((doc) =>
      reviewData.push({ id: doc.id, ...doc.data() })
    );
    setReviews(reviewData);
  };

  const displayedReviews = reviews.slice(0, 8);

  return (
    <>
      {/* ================= DESKTOP SLIDER ================= */}
      <section className="d-none d-lg-block">
        <Carousel>
          {[banner_1s, banner_2s, banner_3s].map((img, i) => (
            <Carousel.Item key={i}>
              <img className="d-block w-100" src={img} alt="slide" />
              <Carousel.Caption>
                <h3 style={{ textShadow: "2px 2px 40px black" }}>Akshath</h3>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </section>

      {/* ================= MOBILE SLIDER ================= */}
      <section className="d-lg-none">
        <Carousel>
          {[banner_1, banner_2, banner_3].map((img, i) => (
            <Carousel.Item key={i}>
              <img className="d-block w-100" src={img} alt="slide" />
              <Carousel.Caption>
                <h3 style={{ textShadow: "2px 2px 40px black" }}>Akshath</h3>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </section>

      {/* ================= INTRO ================= */}
      <section>
        <Container>
          <Row className="my-4">
            <Col lg={6} className="text-center">
              <img src={img01} className="img-fluid" alt="" />
            </Col>
            <Col lg={6} className="d-flex align-items-center">
              <div>
                <p className="fw-bold">Bharatanatyam Artist</p>
                <p>
                  Akshath is a vibrant dancer who captivates audiences with
                  energy, enthusiasm and deep respect for Bharatanatyam.
                </p>
                <Link to="/about#awards" className="btn btn-outline-dark">
                  Awards
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ================= ABOUT DARK ================= */}
      <section className="bg-dark text-white py-5">
        <Container>
          <Row>
            <Col lg={6}>
              <h4>About Us</h4>
              <p>
                Akshath has completed multiple graded certifications in
                Bharatanatyam, Vocal, Piano and Tamil studies. His artistry
                extends to Nattuvangam and classical music understanding.
              </p>
            </Col>
            <Col lg={6}>
              <img src={scroll_img} className="img-fluid" alt="" />
            </Col>
          </Row>
        </Container>
      </section>

      {/* ================= STATS COUNTER ================= */}
      <ReviewCounters totalReviews={reviews.length} />

      {/* ================= QUOTE ================= */}
      <section style={{ backgroundColor: "#111010" }}>
        <Container>
          <Row className="py-4 text-white">
            
            <Col lg={6}>
              <img src={img02} className="img-fluid" alt="" />
            </Col>
            <Col lg={6}>
              <h2 className="mt-5">
                An innate sense of rhythm makes his dance versatile and powerful.
              </h2>
              <p className="mt-3">
                Confidence, charisma and strong stage presence define his
                performances.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ================= REVIEWS ================= */}
      <section style={{ backgroundColor: "#0f0f0f", color: "#fff" }}>
        <Container className="py-4">
          <h3 className="mb-3 text-center">Reviews</h3>
          <Row>
            {displayedReviews.map((review) => (
              <Col lg={6} key={review.id}>
                <div className="p-3 mb-2 bg-dark rounded">
                  <h6 className="fw-bold">
                    <i className="fa-solid fa-user me-2"></i>
                    {review.Name}
                  </h6>
                  <p style={{ fontSize: "13px" }}>{review.Review}</p>
                </div>
              </Col>
            ))}
          </Row>

          <Link to="/reviews" className="btn btn-outline-light mt-3">
            Leave Your Review
          </Link>
        </Container>
      </section>
    </>
  );
};

export default Home;