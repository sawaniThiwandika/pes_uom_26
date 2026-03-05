
import "../styles/pages.css";
import energyVideo from "../assets/energy.mp4";
import advisor from "../assets/Advisor.jpg";


export default function About() {
  return (
    <div className="about-page">

      {/* HERO VIDEO SECTION */}

      <section className="about-hero">

        <video
          className="hero-video"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={energyVideo} type="video/mp4" />
        </video>

        <div className="hero-overlay">

          <h1>About IEEE PES</h1>

          <p>
            IEEE Power & Energy Society Student Branch Chapter of
            University of Moratuwa focuses on innovation, leadership
            and technological advancement in power engineering.
          </p>

        </div>

      </section>


      {/* ABOUT IEEE */}

      <section className="about-section">

        <h2>About IEEE</h2>

        <p>
          IEEE is the world's largest technical professional organization
          dedicated to advancing technology for the benefit of humanity.
        </p>

      </section>


      {/* VISION & MISSION */}

      <section className="vision-mission">

        <div className="vision-card">

          <h3>Our Vision</h3>

          <p>
            Foster technological innovation and excellence for the
            benefit of humanity.
          </p>

        </div>

        <div className="mission-card">

          <h3>Our Mission</h3>

          <p>
            IEEE will be essential to the global technical community
            and technical professionals everywhere.
          </p>

        </div>

      </section>


      {/* ADVISOR */}

      <section className="advisor-section">

        <h2>Advisor</h2>

        <img
          src={advisor}
          alt="Advisor"
          className="advisor-img"
        />

        <h3>Mrs. K.A.T. Lasagani</h3>

        <p>IEEE PES Chapter Advisor</p>

      </section>

    </div>
  );
}