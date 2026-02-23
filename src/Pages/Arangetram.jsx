import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import a1 from "../Images/a1.JPG";
import a2 from "../Images/a2.jpg";
import a3 from "../Images/a3.jpg";
import a4 from "../Images/a4.jpg";
import a5 from "../Images/a5.jpg";
import a6 from "../Images/a6.JPG";
import a7 from "../Images/a7.jpg";
import a8 from "../Images/a8.jpg";
import a9 from "../Images/a9.jpg";
import a10 from "../Images/a10.JPG";
import a11 from "../Images/a11.jpg";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
const danceItems = [
  {
    title: "Pushpanjali",
    ragam: "Ragam : Gambheeranaattai",
    thalam: "Thalam : Khanda jathi Ata",
    image: a1, // Replace with the actual image URL
    description:
      "Pushpanjali in Bharatanatyam is a ceremonial dance piece that serves as an opening invocation in a performance. During a Pushpanjali, dancers offer flowers to the deities and seek their blessings before they start their performance. Pushpanjali sets the tone for the performance, creating a sacred and auspicious atmosphere. It's a moment of offering, gratitude, and devotion, both to the divine and to all those who support the dancer's art",
  },
  {
    title: "Nirutha Ganapathy",
    ragam: "Ragam : Kanakangi",
    thalam: "Thalam : Adi",
    image: a2, // Replace with the actual image URL
    description:
      'Nirutha Ganapathy or  "Dancing Ganesha" refers to a specific form or representation of the Hindu deity Lord Ganesha, known for his association with wisdom, intellect, and the removal of obstacles. In this form, Ganesha is depicted in a dynamic and joyful dance pose. The Dancing Ganesha represents the harmonious interplay of creation, destruction, and preservation in the universe. It symbolizes the rhythmic flow of life and the cosmic dance of the divine.',
  },
  {
    title: "Kavithuvam on the Guru",
    image: a3, // Replace with the actual image URL
    ragam: "Ragam : Panthuvarali",
    thalam: "Thalam : Tisra Jathi Adi",
    description:
      "A Kavithuvam on the Guru in Bharatanatyam is a poetic and expressive performance that pays homage to the teacher or spiritual guide, highlighting their wisdom, guidance, and importance in the life of the disciple. This composition involves the use of traditional Indian poetry and classical music to convey the profound relationship between the Guru (teacher) and Shishya (disciple). Akshath was very specific about this song selection for his arangetram as he had a strong belief that all his Gurus in various art forms made him who he is today.\n\nGurur brahma, gurur vishnu, gurur devo maheshwara,\nGuru sakshat para brahma, tasmai shri gurave namah\n\nThe Guru is the creator, the Guru is the preserver, and the Guru is the destroyer. The Guru is the embodiment of the supreme divine. Salutations to such a Guru.\n\nBy touching the feet of the Guru, one finds inner peace. It is through the Guru's guidance that the direction of life is revealed.",
  },
  {
    title: "Sri Rama Jayam",
    ragam: "Ragam : Ragamalika",
    thalam: "Thalam : Adi",
    image: a4, // Replace with the actual image URL
    description:
      '"Sri Rama Jayam" is a popular Hindu mantra and invocation, expressing devotion and reverence to Lord Rama. This means "Victory to Lord Rama" or "Hail Lord Rama." This mantra is often chanted by devotees to seek blessings, protection, and to invoke the divine qualities associated with Lord Rama, such as righteousness, compassion, and courage. In this melodious dance piece, Akshath will be a torchbearer for his little brother Yashwath. While the elder one does the nattuvangam, our little Yashwa will be performing Sri Rama Jayam – portraying the stories of Lord Rama.',
  },
  {
    title: "Varnam",
    ragam: "Ragam : Naganandhini",
    thalam: "Thalam : Adi",
    image: a5, // Replace with the actual image URL
    description:
      "Kanavu Kaanbai thozha – An unique varnam yet rewarding composition that showcases the dancer's technical prowess, artistic depth, and ability to communicate complex emotions through the language of dance. It is a central piece in any Bharatanatyam performance, often positioned at the heart of the repertoire. Varnam usually have a narrative structure, often revolving around a mythological or devotional theme. But in this varnam, Akshath brings into reality one of Dr. A. P. J. Abdul Kalam’s most famous quotes on dreams:\n\n\"Dream, Dream, Dream. Dreams transform into thoughts and thoughts result in action.\"\n\nThis quote emphasizes the power of dreams in shaping one's aspirations and ultimately driving them towards taking concrete actions to achieve those dreams.",
  },
  {
    title: "Shuddha Nrittam",
    thalam: "Thalam : Adi",
    image: a6, // Replace with the actual image URL
    description:
      "Shuddha Nrittam primarily focuses on the rhythmic and aesthetic aspects of dance, showcasing the dancer's technical skills and mastery over the art form. In this dance, the dancer focuses on perfecting the alignment of his body, the correctness of postures, and the clarity of movements. Shuddha Nrittam is usually performed to instrumental music, particularly percussion instruments like mridangam or tabla. The dancer and the musicians work in sync to create a harmonious and rhythmic performance.\n\nAkshath will perform Shuddha Nrittam on the clay pot, which is called Perani Natyam. Dancing on the clay pot showcases the dancer's mastery of the pure dance elements, allowing him to demonstrate his skill, precision, and artistic expression.",
  },
  {
    title: "Ananda Thandavam",
    ragam: "Ragam : Simhendra Madhyamam",
    thalam: "Thalam : Adi",
    image: a7, // Replace with the actual image URL
    description:
      "Ananda Tandavam is a highly expressive and energetic dance form that seeks to capture the essence of Lord Shiva's ecstatic dance. This dance is characterized by vigorous and powerful movements. The dancer employs dynamic footwork, quick spins, and forceful gestures to convey the energy and intensity of Lord Shiva's dance. While Ananda Tandavam is primarily a dance of energy and power, here the dancer incorporates elements of Abhinaya – Navarasa - 9 emotions associated with Lord Shiva.",
  },
  {
    title: "Bhajan on Lord Guruvayoorappan",
    ragam: "Ragam : Kaapi",
    thalam: "Thalam : Khanda Dhruvam",
    image: a8, // Replace with the actual image URL
    description:
      "Guruvayoorappan bhajan is a melodious and soul-touching dance item that pays tribute to Lord Guruvayoorappan, an incarnation of Lord Krishna, who is revered at the Guruvayur temple in Kerala, India. 'Bhakthi Nritya' aims to capture the divine grace and presence of the deity through dance.",
  },
  {
    title: "Aasai Meeruthe",
    ragam: "Ragam : Ragamalika",
    thalam: "Thalam : Tisra Jathi Adi",
    image: a9, // Replace with the actual image URL
    description:
      "Aasai Meeruthe is a humorous conversation between Yashoda and little Krishna in a folk dance style. Here little Krishna tells his mother, 'O mother, my love towards Radha is brimming every day and I want to marry her. How wonderful it would be to witness this Yashoda and naughty Krishna’s conversation?",
  },
  {
    title: "Thillana",
    ragam: "Ragam : Nalinakanti",
    thalam: "Thalam : Sankeerna Matya Thalam",
    image: a10, // Replace with the actual image URL
    description:
      "The Thillana is performed towards the end of a repertoire. Its brisk tempo, intricate footwork, and dynamic movements serve to captivate the audience and leave a lasting impression. The sahithyam describes the beautiful Goddess Mahalakshmi who sits on the pink lotus flower and showers the blessings to her devotees.",
  },
  {
    title: "Mangalam",
    image: a11, // Replace with the actual image URL
    description:
      "The Mangalam is a devotional composition that seeks blessings and well-being for all. It's a way to conclude the performance on a positive note, spreading good wishes to the audience and everyone involved.",
  },
];

const Arangetram = () => {
  const [arangetramData, setArangetramData] = useState([]);

  useEffect(() => {
    // Reference to the "arangetram" collection in Firestore
    const arangetramCollectionRef = collection(db, "arangetram");

    // Fetch the data from Firestore
    const fetchData = async () => {
      const querySnapshot = await getDocs(arangetramCollectionRef);
      const arangetramItems = [];

      querySnapshot.forEach((doc) => {
        arangetramItems.push({
          id: doc.id,
          ...doc.data(),
        });
      });

      setArangetramData(arangetramItems);
    };

    fetchData();
  }, []);

  return (
    <div>
      <Container>
        {arangetramData.map((item) => (
          <Card key={item.id} className="my-3 bg-light">
            <Row>
              <Col md={4}>
                <Card.Img
                  variant="left"
                  className="img-fluid rounded-start p-3"
                  src={item.Image1}
                  loading="lazy"
                />
              </Col>
              <Col md={4}>
                <Card.Img
                  variant="left"
                  className="img-fluid rounded-start p-3"
                  src={item.Image2}
                  loading="lazy"
                />
              </Col>
              <Col>
                <Card.Body>
                  <Card.Title>Upcoming Event Details</Card.Title>
                  <Card.Text>
                    <small className="text-body-secondary">
                      Date: {item.Date}
                    </small>
                    <br />
                    <small className="text-body-secondary">
                      Time: {item.Time}
                    </small>
                  </Card.Text>
                  <Card.Text align="justify">Venue: {item.Venue}</Card.Text>
                  <Card.Text align="justify">Address: {item.Address}</Card.Text>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        ))}

        {danceItems.map((item, index) => (
          <Card key={index} className="my-3">
            <Row>
              <Col md={2}>
                <Card.Img
                  variant="left"
                  className="img-fluid rounded-start p-3"
                  src={item.image}
                  loading="lazy"
                />
              </Col>
              <Col>
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>
                    <small className="text-body-secondary">{item.ragam}</small>
                    <br />
                    <small className="text-body-secondary">{item.thalam}</small>
                  </Card.Text>
                  <Card.Text align="justify">{item.description}</Card.Text>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        ))}
      </Container>
    </div>
  );
};

export default Arangetram;
