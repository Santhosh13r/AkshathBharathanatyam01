import { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";
import imagesawards from "../Images/3_Guru Kavithuvam.jpg";

/* ── Data ── */
const guinnessRecords = [
  {
    title: "Asia Book / India Book / Guinness Record – Jathi Performance",
    org: "With Guru Madurai R. Muralidaran",
  },
  {
    title: "Guinness Record – Tamil Annai Varnam",
    org: "With Guru Madurai R. Muralidharan",
  },
  {
    title: "Guinness Record – Largest Tamilian Folk Performance",
    org: "With New Jersey Tamil Paraval (NJTaP)",
  },
  {
    title:
      "America / Asia / India / British Book of Records – Thyagaraja Aradhana 2026 Pancharathnams",
    org: "International Carnatic Musicians & Dancers Association (ICMDA)",
  },
];

const awards = [
  { title: "Junior Ambassador", org: "Griffin College London" },
  { title: "Natya Choodamani", org: "Sri Raja Rajeshwari Natya Kala Shaala" },
  { title: "Bala Ojaswi", org: "All India Dancer's Association (OJAS)" },
  { title: "Child Prodigy – Gold Medal", org: "International Carnatic Musicians and Dancers Association" },
  { title: "Nrithya Neeranjana", org: "All India Dancers Association" },
  { title: "SARGAM Season 2 Title Winner", org: "SARGAM Sacramento" },
  { title: "Nrithyakala Balaratna", org: "All India Dancers Association (Balanrithyakalotsavam)" },
  { title: "Nrithya Kala Shrestha", org: "Nritya Kinkinni – Shakthi Competition" },
  { title: "Nrithya Bala Mayooram", org: "AIDA – Nrithanrithyathi Festival" },
  { title: "Nrithya Kala Jyoti", org: "Nritya Kinkinni – Natanam Shivam" },
  { title: "Bala Natya Ratna", org: "Tom Mediaas & Bharat Kalachar (Alapanai 2021)" },
  { title: "Shreshta Bala Narthaka 2021", org: "All India Dancers Association" },
  { title: "National Championship 2021 & 2022", org: "FeTNA" },
  { title: "Bharatha Muni", org: "HungerRush Carnatic Hungama LLC" },
  { title: "Saptami Super Star 2023", org: "Saptami Foundation, Texas" },
  { title: "SARGAM Season 3 – Sarga Prathibha", org: "SARGAM Sacramento" },
  { title: "Param Nrithya Ilavarasan Puraskar", org: "AIDA – Param 2022, Kerala" },
  { title: "Bala Bharatha Nipuna", org: "Kalaimamani Guru Smt. Revathy Muthuswamy" },
  { title: "Natya Kala Vaibhava", org: "AIDA – Marghazhi Festival, Delaware" },
  { title: "Saptami Super Star 2024", org: "Saptami Foundation, Texas" },
  { title: "Hall of Fame Award 2023", org: "Live4You" },
  { title: "Natya Kala Vipanchee Award", org: "Griffin College London" },
  { title: "Yuva Kala Sadhaka", org: "Sphurana Nritya Kala Kendra, Bengaluru" },
  { title: "Bala Kala Bharathi", org: "Bharat Kalachar, Chennai" },
];

/* ── Particle Background ── */
function ParticleField() {
  const ref = useRef(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const particles = [];

    for (let i = 0; i < 30; i++) {
      const p = document.createElement("div");
      const size = Math.random() * 3 + 1;

      p.className = "particle";
      p.style.cssText = `
        width:${size}px;
        height:${size}px;
        left:${Math.random() * 100}%;
        bottom:-10px;
        background:#1e5cff;
        box-shadow:0 0 ${size * 4}px rgba(30,92,255,0.45);
        animation-duration:${Math.random() * 12 + 10}s;
        animation-delay:${Math.random() * 14}s;
      `;

      container.appendChild(p);
      particles.push(p);
    }

    return () => particles.forEach((p) => p.remove());
  }, []);

  return (
    <div
      ref={ref}
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
}

/* ── Stat Card ── */
function StatCard({ icon, count, label }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // Parse count number (remove + if present)
  const numCount = parseInt(count.toString().replace('+', ''));
  const hasSuffix = count.toString().includes('+');

  return (
    <div className="stat-card" ref={ref}>
      <i className={`bi ${icon} blue-text`} />
      <div className="stat-count">
        {isVisible ? (
          <>
            <CountUp end={numCount} duration={2.5} />
            {hasSuffix && '+'}
          </>
        ) : (
          <span>0{hasSuffix ? '+' : ''}</span>
        )}
      </div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

/* ── Award Card ── */
function AwardCard({ title, org, isGuinness = false, delay = 0 }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.classList.add("visible");
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${isGuinness ? "card-guinness" : "card-royal"}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="card-header">
        <div className="card-icon-circle">
          <i className={`bi ${isGuinness ? "bi-trophy-fill" : "bi-award-fill"}`} />
        </div>
        <span className="card-label">
          {isGuinness ? "World Record" : "Award"}
        </span>
      </div>

      <h6 className="card-title">{title}</h6>
      <p className="card-org">{org}</p>
    </div>
  );
}

/* ── MAIN ── */
export default function Index() {
  return (
    <div className="page-wrapper algin-center awards-page">
      <ParticleField />
      <div className="hero-glow" />

      {/* HERO */}
      <section className="hero">
        <div className="spin-ring" />

        <div className="float-anim avatar-wrap mt-3 text-center">
          <img src={ imagesawards} alt="Bharatanatyam Dancer" className="hero-avatar mt-3 algin-center" />
          <div className="ring-mid " />
          <div className="ring-outer" />
        </div>

        <div className="badge-tag text-uppercase fw-bold text-center">
          Classical Bharatanatyam Artiste
        </div>

        <h1 className="hero-title text-center">
          Awards & <br />
          <span>Achievements</span>
        </h1>

        <p className="hero-subtitle text-center">
          A tapestry of excellence woven through years of devotion to the divine art of classical dance
        </p>

        <div className="stats-row">
          <StatCard icon="bi-trophy-fill" count="4" label="World Records" />
          <StatCard icon="bi-award-fill" count="24+" label="Awards" />
          <StatCard icon="bi-stars" count="10+" label="Years" />
          <StatCard icon="bi-music-note-beamed" count="3" label="Sargam Titles" />
        </div>
      </section>

      {/* WORLD RECORDS */}
      <section className="section mt-3 mb-4 bg-dark text-light rounded-3 p-4">
        <h2 className="section-title text-center mt-3 mb-3">World Records</h2>
        <div className="row g-4">
          {guinnessRecords.map((r, i) => (
            <div key={i} className="col-md-6">
              <AwardCard {...r} isGuinness delay={i * 120} />
            </div>
          ))}
        </div>
      </section>

      {/* AWARDS */}
      <section className="section mb-5">
        <h2 className="section-title text-center mt-3 mb-5 ">Honors & Awards</h2>
        <div className="row g-3">
          {awards.map((a, i) => (
            <div key={i} className="col-lg-3 col-md-4 col-sm-6">
              <AwardCard {...a} delay={i * 60} />
            </div>
          ))}
        </div>
      </section>

      {/* <footer className="footer algin-center">
        <p>"Where every movement is a prayer, every award a blessing."</p>
        <span>Nritya • Sangeetham • Kalapeetham</span>
      </footer> */}
    </div>
  );
}
