import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { collection, addDoc, getDocs } from "firebase/firestore"; // Import Firestore functions
import { db } from "../firebase"; // Import your Firebase configuration

function ArangetramReview() {
  // Form states
  const [Name, setName] = useState("");
  const [Review, setReview] = useState("");
  const [ImageURL, setImageURL] = useState(""); // State to store the image URL

  // Fetch the image URL from Firestore when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      const arangetramCollectionRef = collection(db, "arangetram");
      const querySnapshot = await getDocs(arangetramCollectionRef);

      // Assuming you have only one document in the collection
      if (!querySnapshot.empty) {
        const doc = querySnapshot.docs[0];
        const imageData = doc.data();
        if (imageData.Image1) {
          setImageURL(imageData.Image1);
        }
      }
    };

    fetchData();
  }, []);

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // Fetch reviews from Firestore when the component mounts
    fetchReviews();
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

  // Display only the first 8 reviews
  const displayedReviews = reviews.slice(0, 100);

  // Submit event
  const handleSubmit = async (e) => {
    e.preventDefault();

    const currentDate = new Date();
    const formattedDateTime = currentDate.toLocaleString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });

    // Replace symbols in the formatted date and time to build a safe key
    const sanitizedDateTimeKey = formattedDateTime.replace(/[^\\w\\s]/gi, "_");

    // Build the object to save to Firestore
    const dataToSave = {
      Name,
      Review,
      submittedAt: formattedDateTime,
      submittedAtKey: sanitizedDateTimeKey,
    };

    // Add data to Firestore
    try {
      const docRef = await addDoc(collection(db, "review"), dataToSave);
      console.log("Document written with ID: ", docRef.id);
      setName("");
      setReview("");
      // Refresh local reviews list
      fetchReviews();
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <>
      <div className="container">
        <br></br>
        <Row className="p-3">
          <Col lg={4}>
            <img className="d-block w-100" src={ImageURL} alt="Third slide" />
          </Col>
          <Col lg={8}>
            <h1>Arangetram Reviews Form</h1>
            <br></br>
            <form
              autoComplete="off"
              className="form-group"
              onSubmit={handleSubmit}
            >
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                required
                placeholder="Enter your name"
                onChange={(e) => setName(e.target.value)}
                value={Name}
              />
              <br></br>
              <label>Review</label>
              <textarea
                className="form-control"
                required
                placeholder="Write your review"
                onChange={(e) => setReview(e.target.value)}
                value={Review}
              />
              <br></br>
              <div className="d-grid gap-2">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </form>
            <br></br>
          </Col>
        </Row>
      </div>
      <section>
        <Container className="py-2 my-3">
          <h3>Reviews</h3>
          <Row className="mt-3">
            {displayedReviews.map((review) => (
              <Col lg={6} key={review.id}>
                <div className="" style={{ height: "110px" }}>
                  <div className="p-1">
                    <h6 className="fw-bold">
                      <i className="fa-solid fa-user pe-2"></i>

                      {review.Name}
                    </h6>
                    <div
                      style={{
                        maxHeight: "70px",
                        overflowY: "auto",
                      }}
                    >
                      <p
                        className=""
                        style={{
                          fontSize: "12px",
                        }}
                      >
                        {review.Review}
                      </p>
                      <style>
                        {`
      /* Change the scrollbar's width, color, and thumb appearance */
      div::-webkit-scrollbar {
        width: 3px; /* Adjust the width as desired */
      }

      div::-webkit-scrollbar-thumb {
        background-color: black; /* Change the thumb color */
        border-radius: 5px; /* Round the thumb edges */
      }

      div::-webkit-scrollbar-track {
        background-color: #f0f0f0; /* Change the track color */
      }
    `}
                      </style>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
}

export default ArangetramReview;
