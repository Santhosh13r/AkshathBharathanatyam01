import React, { useState, useEffect } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  addDoc,
} from "firebase/firestore";
import { db } from "../firebase";
import { Container, Row, Col } from "react-bootstrap";

const Admin = () => {
  const password = "Admin@akshath.us"; // Make your desired password
  const [enteredPassword, setEnteredPassword] = useState("");
  const [passwordCorrect, setPasswordCorrect] = useState(false);

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (enteredPassword === password) {
      setPasswordCorrect(true);
    } else {
      alert("Incorrect password. Please try again.");
    }
  };
  const [key, setKey] = useState("reviews");
  const [reviews, setReviews] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [arangetramData, setArangetramData] = useState([]);

  // State variables for Arangetram form
  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [venue, setVenue] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    // Fetch reviews and contact data from Firestore when the component mounts
    fetchReviews();
    fetchContacts();
    fetchArangetramData();
  }, []);

  // Function to fetch and set reviews data
  const fetchReviews = async () => {
    const querySnapshot = await getDocs(collection(db, "review"));
    const reviewData = [];
    querySnapshot.forEach((doc) => {
      reviewData.push({ id: doc.id, ...doc.data() });
    });
    setReviews(reviewData);
  };

  // Function to fetch and set contact data
  const fetchContacts = async () => {
    const querySnapshot = await getDocs(collection(db, "contact"));
    const contactData = [];
    querySnapshot.forEach((doc) => {
      contactData.push({ id: doc.id, ...doc.data() });
    });
    setContacts(contactData);
  };

  // Function to fetch and set arangetram data
  const fetchArangetramData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "arangetram"));
      const arangetramData = [];
      querySnapshot.forEach((doc) => {
        arangetramData.push({ id: doc.id, ...doc.data() });
      });
      console.log(arangetramData); // Add this line for logging
      setArangetramData(arangetramData);
    } catch (error) {
      console.error("Error fetching arangetram data: ", error);
    }
  };

  // Function to delete a review
  const deleteReview = async (id) => {
    try {
      await deleteDoc(doc(db, "review", id));
      fetchReviews(); // Refresh reviews data after deletion
    } catch (error) {
      console.error("Error deleting review document: ", error);
    }
  };

  // Function to delete a contact
  const deleteContact = async (id) => {
    try {
      await deleteDoc(doc(db, "contact", id));
      fetchContacts(); // Refresh contact data after deletion
    } catch (error) {
      console.error("Error deleting contact document: ", error);
    }
  };

  // Function to handle Arangetram form submission
  const handleArangetramSubmit = async (e) => {
    e.preventDefault();
    const data = {
      Image1: image1,
      Image2: image2,
      Date: date,
      Time: time,
      Venue: venue,
      Address: address,
    };

    try {
      await addDoc(collection(db, "arangetram"), data);
      // Clear form input fields after successful submission
      setImage1("");
      setImage2("");
      setDate("");
      setTime("");
      setVenue("");
      setAddress("");
      // Refresh the arangetram data to display the newly added item
      fetchArangetramData();
    } catch (error) {
      console.error("Error adding arangetram document: ", error);
    }
  };

  // Function to delete an arangetram item
  const deleteArangetramItem = async (id) => {
    try {
      await deleteDoc(doc(db, "arangetram", id));
      fetchArangetramData(); // Refresh arangetram data after deletion
    } catch (error) {
      console.error("Error deleting arangetram item: ", error);
    }
  };

  return (
    <Container className="pt-3 admin-container" style={{ minHeight: "90vh" }}>
      {passwordCorrect ? (
        <Tabs id="admin-tabs" activeKey={key} onSelect={(k) => setKey(k)}>
          <Tab eventKey="reviews" title="Reviews">
            <Table striped bordered hover>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Review</th>
                    <th>Submit Date & Time</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {reviews.map((review) => (
                    <tr key={review.id}>
                      <td>{review.Name}</td>
                      <td>{review.Review}</td>
                      <td>{review.SubmitDateTime}</td>
                      <td>
                        <Button
                          variant="danger"
                          onClick={() => deleteReview(review.id)}
                        >
                          Delete
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Table>
          </Tab>
          <Tab eventKey="contact" title="Contact">
            <Table striped bordered hover>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Phone Number</th>
                    <th>Email ID</th>
                    <th>Message</th>
                    <th>Submit Date & Time</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {contacts.map((contact) => (
                    <tr key={contact.id}>
                      <td>{contact.Name}</td>
                      <td>{contact.PhoneNumber}</td>
                      <td>{contact.Email}</td>
                      <td>{contact.Message}</td>
                      <td>{contact.SubmitDateTime}</td>
                      <td>
                        <Button
                          variant="danger"
                          onClick={() => deleteContact(contact.id)}
                        >
                          Delete
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Table>
          </Tab>
          <Tab eventKey="arangetram" title="Arangetram">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Image 1</th>
                  <th>Image 2</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Venue</th>
                  <th>Address</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {arangetramData.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <img src={item.Image1} alt="Arangetram" width="100" />
                    </td>
                    <td>
                      <img src={item.Image2} alt="Arangetram" width="100" />
                    </td>
                    <td>{item.Date}</td>
                    <td>{item.Time}</td>
                    <td>{item.Venue}</td>
                    <td>{item.Address}</td>
                    <td>
                      <Button
                        variant="danger"
                        onClick={() => deleteArangetramItem(item.id)}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Tab>
          <Tab eventKey="input" title="Input">
            <Form onSubmit={handleArangetramSubmit} className="border p-3">
              <Row>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label>Image URL 1</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Image URL"
                      value={image1}
                      onChange={(e) => setImage1(e.target.value)}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label>Image URL 2</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Image URL"
                      value={image2}
                      onChange={(e) => setImage2(e.target.value)}
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label>Date</Form.Label>
                    <Form.Control
                      type="text"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label>Time</Form.Label>
                    <Form.Control
                      type="text"
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label>Venue</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Venue"
                      value={venue}
                      onChange={(e) => setVenue(e.target.value)}
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group className="mb-3">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Tab>
        </Tabs>
      ) : (
        <div className="password-form border p-3 mb-3 col-lg-6">
          <h2>Password Protected</h2>
          <form onSubmit={handlePasswordSubmit} className="">
            <div className="mb-3">
              <label>Password</label>
              <input
                type="password"
                value={enteredPassword}
                onChange={(e) => setEnteredPassword(e.target.value)}
                className="form-control"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      )}
    </Container>
  );
};

export default Admin;
