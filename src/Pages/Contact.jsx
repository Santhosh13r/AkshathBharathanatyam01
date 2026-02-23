import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore"; // Import Firestore functions
import { db } from "../firebase"; // Import your Firebase configuration
import { Col, Container, Image, Row } from "react-bootstrap";
import img01 from "../Images/Contact page(2).jpg";

const Contact = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Get the current date and time in ISO 8601 format
    const currentDateTime = new Date().toISOString();

    // Object to pass, including the combined date and time
    const data = {
      Name: name,
      PhoneNumber: phoneNumber,
      Email: email,
      Message: message,
      SubmitDateTime: currentDateTime, // Combined date and time in ISO 8601 format
    };

    // Add data to Firestore collection "contact"
    try {
      const docRef = await addDoc(collection(db, "contact"), data);
      console.log("Document written with ID: ", docRef.id);
      setName("");
      setPhoneNumber("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <Container>
      <Row className="py-3">
        <Col lg={6}>
          <h5 className="text-center mt-3 pt-3">Drop us a line</h5>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="phoneNumber" className="form-label">
                Phone Number
              </label>
              <input
                type="tel"
                className="form-control"
                id="phoneNumber"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email ID
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                className="form-control"
                id="message"
                rows="4"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>
            <div className="d-grid gap-2">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </Col>
        <Col lg={6} className="d-flex justify-content-center">
          <Image src={img01} fluid loading="lazy" className="p-3"></Image>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
