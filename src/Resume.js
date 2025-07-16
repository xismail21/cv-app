import React from "react";
import { FaReact, FaNodeJs, FaDatabase, FaHtml5, FaCss3Alt, FaJsSquare } from "react-icons/fa";

const styles = {
  section: {
    marginBottom: "40px",
    backgroundColor: "#f4f4f4",
    padding: "20px",
    borderRadius: "8px",
  },
  sectionTitle: {
    fontSize: "24px",
    marginBottom: "20px",
    borderBottom: "2px solid #ccc",
    paddingBottom: "5px",
  },
  listItem: {
    marginBottom: "10px",
  },
  subSectionTitle: {
    fontSize: "18px",
    marginBottom: "10px",
    fontWeight: "bold",
  },
  projectCard: {
    display: "flex",
    alignItems: "flex-start",
    marginBottom: "20px",
  },
  projectImage: {
    width: "80px",
    height: "80px",
    marginRight: "20px",
    objectFit: "contain",
  },
  projectContent: {
    flex: 1,
  },
  yellow: {
    color: "#b58900",
    fontWeight: "bold",
  },
  blue: {
    color: "#268bd2",
    fontWeight: "bold",
  },
};

const projectImages = {
  restaurant: <img src="https://cdn-icons-png.flaticon.com/512/3075/3075977.png" alt="Restaurant" style={styles.projectImage} />,
  event: <img src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png" alt="Event" style={styles.projectImage} />,
  lms: <img src="https://cdn-icons-png.flaticon.com/512/1025/1025687.png" alt="LMS" style={styles.projectImage} />,
};

const Berufserfahrung = () => (
  <section style={styles.section}>
    <h2 style={styles.sectionTitle}>BERUFSERFAHRUNG</h2>
    <ul>
      <li style={styles.listItem}>
        <strong>2020 – heute:</strong> Quereinsteiger Webentwicklung (Fullstack) & Online-Marketing.
        <br />
        Selbstständige Projektarbeit, SEO/SEA für kleine Unternehmen.
      </li>
      <li style={styles.listItem}>
        <strong>2015 – 2020:</strong> Manager eCommerce, IT & Kundenservice.
        <br />
        Strategischer Aufbau und Leitung eines internationalen Onlinehandels (B2B/B2C) mit Magento,
        ERP-System, Newsletter & SEO.
      </li>
      <li style={styles.listItem}>
        <strong>2009 – 2015:</strong> Teamleiter Kundenservice & Schulungsleiter.
        <br />
        Organisation des Customer-Supports und Durchführung von Schulungen.
      </li>
    </ul>
  </section>
);

const Qualifikationen = () => (
  <section style={styles.section}>
    <h2 style={styles.sectionTitle}>QUALIFIKATIONEN</h2>
    <ul>
      <li style={styles.listItem}>
        <strong>Programmiersprachen:</strong> HTML, CSS, JavaScript, SQL
      </li>
      <li style={styles.listItem}>
        <strong>Frameworks & Tools:</strong> React, Node.js, Express, MongoDB, Git, Bootstrap, Tailwind, Vite
      </li>
      <li style={styles.listItem}>
        <strong>Weitere Skills:</strong> SEO/SEA, Google Ads, Google Analytics, Responsive Design, UX/UI
      </li>
    </ul>
    <div style={{ display: "flex", gap: "15px", marginTop: "10px" }}>
      <FaHtml5 size={30} color="#e34c26" />
      <FaCss3Alt size={30} color="#264de4" />
      <FaJsSquare size={30} color="#f0db4f" />
      <FaReact size={30} color="#61dbfb" />
      <FaNodeJs size={30} color="#3c873a" />
      <FaDatabase size={30} color="#4DB33D" />
    </div>
  </section>
);

const AktuelleProjekte = () => (
  <section style={styles.section}>
    <h2 style={styles.sectionTitle}>AKTUELLE PROJEKTE (STAND: JUNI 2025)</h2>

    <div style={styles.projectCard}>
      {projectImages.restaurant}
      <div style={styles.projectContent}>
        <h3 style={styles.subSectionTitle}>
          <a href="https://snok-hh.de" target="_blank" rel="noopener noreferrer">
            E-Commerce-Webanwendung für SNOK Restaurant
          </a>
        </h3>
        <p>
          Entwicklung einer responsiven Web-App für Online-Bestellungen mit Warenkorb und
          dynamischer Preisberechnung. Fokus auf Benutzerfreundlichkeit und SEO.
        </p>
        <p>
          <strong>Status:</strong> <span style={styles.yellow}>🟡 Testphase</span>
        </p>
      </div>
    </div>

    <div style={styles.projectCard}>
      {projectImages.event}
      <div style={styles.projectContent}>
        <h3 style={styles.subSectionTitle}>
          <a href="https://glamour-event-nord.de" target="_blank" rel="noopener noreferrer">
            Event-Veranstaltungsplattform – Glamour Event Nord
          </a>
        </h3>
        <p>
          Website für Event-Veranstalter mit Nachfrage-Funktion und SEO-Optimierung. Responsive und
          schnelle Ladezeiten.
        </p>
        <p>
          <strong>Status:</strong> <span style={styles.yellow}>🟡 Testphase</span>
        </p>
      </div>
    </div>

    <div style={styles.projectCard}>
      {projectImages.lms}
      <div style={styles.projectContent}>
        <h3 style={styles.subSectionTitle}>
          <a href="https://lms-webapp.onrender.com/register" target="_blank" rel="noopener noreferrer">
            Lernmanagementsystem (LMS)
          </a>
        </h3>
        <p>
          Entwicklung eines adaptiven LMS zur digitalen Weiterbildung mit Benutzerregistrierung und
          Kurszuweisung. Frontend & Backend integriert.
        </p>
        <p>
          <strong>Status:</strong> <span style={styles.blue}>🔵 Planungsphase</span>
        </p>
      </div>
    </div>
  </section>
);

const Resume = () => (
  <div>
    <Berufserfahrung />
    <Qualifikationen />
    <AktuelleProjekte />
  </div>
);

export default Resume;
