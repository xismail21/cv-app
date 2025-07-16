import React, { useState } from 'react';
import {
  FaLinkedin,
  FaGithub,
  FaGlobe,
  FaEnvelope,
  FaPhone,
  FaDownload,
  FaQuestionCircle,
  FaBoxOpen,
  FaCalendarAlt,
  FaCode,
  FaProjectDiagram,
} from 'react-icons/fa';

const colors = {
  primary: '#0D3B66', // dunkelblau
  secondary: '#145DA0', // mittelblau
  dark: '#4F5D75', // grau
  light: '#FFFFFF', // weiß
  accent: '#BFC0C0', // hellgrau
  cardBg: '#F5F7FA', // sehr helles grau-blau
  shadow: 'rgba(13, 59, 102, 0.2)',
};

const styles = {
  body: {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    margin: 0,
    padding: '1rem',
    backgroundColor: colors.light,
    color: colors.dark,
    lineHeight: 1.6,
    maxWidth: 900,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  header: {
    textAlign: 'center',
    paddingBottom: '1rem',
    borderBottom: `2px solid ${colors.primary}`,
  },
  name: {
    fontWeight: '700',
    fontSize: '2rem',
    marginBottom: '0.25rem',
  },
  title: {
    fontWeight: '600',
    fontSize: '1.2rem',
    color: colors.primary,
    marginBottom: '0.75rem',
  },
  contactList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '1rem',
    fontWeight: '600',
  },
  contactItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.3rem',
    color: colors.dark,
    textDecoration: 'none',
  },
  section: {
    marginTop: '2rem',
    paddingBottom: '1rem',
    borderBottom: `1px solid ${colors.secondary}`,
  },
  sectionTitle: {
    color: colors.primary,
    fontWeight: '700',
    fontSize: '1.5rem',
    marginBottom: '0.5rem',
    borderLeft: `5px solid ${colors.primary}`,
    paddingLeft: '0.5rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  },
  list: {
    paddingLeft: '1.5rem',
  },
  subSectionTitle: {
    fontWeight: '700',
    fontSize: '1.1rem',
    marginTop: '1rem',
    marginBottom: '0.3rem',
    color: colors.accent,
    display: 'flex',
    alignItems: 'center',
    gap: '0.3rem',
  },
  stars: {
    color: '#FFA500',
    marginLeft: '0.25rem',
  },
  projectStatus: {
    fontWeight: '700',
    marginLeft: '0.5rem',
  },
  green: { color: 'green' },
  yellow: { color: 'orange' },
  blue: { color: 'blue' },
  tooltip: {
    borderBottom: '1px dotted black',
    cursor: 'help',
    color: colors.primary,
  },
  faqToggle: {
    backgroundColor: colors.primary,
    color: 'white',
    border: 'none',
    padding: '0.5rem 1rem',
    cursor: 'pointer',
    borderRadius: '0.3rem',
    marginTop: '1rem',
    marginBottom: '1rem',
  },
  projectCard: {
    backgroundColor: colors.cardBg,
    boxShadow: `0 2px 8px ${colors.shadow}`,
    borderRadius: '8px',
    padding: '1rem',
    marginBottom: '1rem',
    display: 'flex',
    gap: '1rem',
    alignItems: 'flex-start',
  },
  projectImage: {
    width: 80,
    height: 80,
    flexShrink: 0,
  },
  projectContent: {
    flexGrow: 1,
  },
  downloadBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    backgroundColor: colors.primary,
    color: 'white',
    border: 'none',
    padding: '0.5rem 1rem',
    borderRadius: '0.3rem',
    cursor: 'pointer',
    marginTop: '1rem',
  },
};

const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <span key={i} style={styles.stars} aria-label={`${i <= rating ? 'filled' : 'empty'} star`}>
        {i <= rating ? '★' : '☆'}
      </span>
    );
  }
  return <>{stars}</>;
};

// Tooltip-Komponente für Fachbegriffe
const Tooltip = ({ text, explanation }) => {
  const [visible, setVisible] = React.useState(false);
  return (
    <span
      style={styles.tooltip}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      tabIndex={0}
      aria-describedby={`tooltip-${text}`}
    >
      {text}
      {visible && (
        <span
          role="tooltip"
          id={`tooltip-${text}`}
          style={{
            position: 'absolute',
            backgroundColor: colors.primary,
            color: 'white',
            padding: '0.2rem 0.5rem',
            borderRadius: '4px',
            marginLeft: '0.3rem',
            fontSize: '0.75rem',
            whiteSpace: 'nowrap',
            zIndex: 1000,
          }}
        >
          {explanation}
        </span>
      )}
    </span>
  );
};

const Header = () => (
  <header style={styles.header}>
    <div style={styles.name}>ESMAIL M. ALHUSSEIN</div>
    <div style={styles.title}>FACHINFORMATIKER/ANWENDUNGSENTWICKLUNG</div>
    <ul style={styles.contactList}>
      <li>📍 Hamburg/Deutschland</li>
      <li>
        <a href="mailto:xismail621@gmail.com" style={styles.contactItem}>
          <FaEnvelope /> xismail621@gmail.com
        </a>
      </li>
      <li>
        <a
          href="https://linkedin.com/in/esmail"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.contactItem}
        >
          <FaLinkedin /> LinkedIn
        </a>
      </li>
      <li>
        <a
          href="https://github.com/esmail"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.contactItem}
        >
          <FaGithub /> GitHub
        </a>
      </li>
      <li>
        <a
          href="https://esmail-portfolio.de"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.contactItem}
        >
          <FaGlobe /> Portfolio
        </a>
      </li>
      <li>
        <a href="tel:+4915739802622" style={styles.contactItem}>
          <FaPhone /> +49/1573/9802622
        </a>
      </li>
    </ul>
    <button style={styles.downloadBtn} onClick={() => alert('PDF-Download Funktion kommt bald')}>
      <FaDownload /> Lebenslauf als PDF herunterladen
    </button>
  </header>
);

const Profil = () => (
  <section style={styles.section}>
    <h2 style={styles.sectionTitle}>
      <FaProjectDiagram /> PROFIL
    </h2>
    <p>
      Über 2 Jahre praktische Erfahrung aus Projekten und Praktika während der Umschulung. Seit
      2025 kontinuierliche Weiterentwicklung durch eigene Projekte. Fokus auf Business
      Intelligence, KI/ASI, ERP/CRM-Systeme und maßgeschneiderte Software-Lösungen.
    </p>
  </section>
);

const FachlicheKompetenzen = () => (
  <section style={styles.section}>
    <h2 style={styles.sectionTitle}>
      <FaBoxOpen /> FACHLICHE KOMPETENZEN
    </h2>
    <ul style={styles.list}>
      <li>Anforderungsmanagement inkl. Machbarkeitsanalyse</li>
      <li>IT-Sicherheit & Datenschutz (DSGVO-konform)</li>
      <li>Planung & Prozessgestaltung (Agile & Wasserfall)</li>
      <li>Systementwurf, Datenbankdesign & -modellierung</li>
      <li>Softwareentwicklung nach Clean-Code-Prinzipien</li>
      <li>Testmanagement & technische Dokumentation</li>
      <li>IT-Support & technische Hilfestellung</li>
    </ul>
  </section>
);

const TechnischeKompetenzen = () => (
  <section style={styles.section}>
    <h2 style={styles.sectionTitle}>
      <FaCode /> TECHNISCHE KOMPETENZEN
    </h2>

    <div>
      <h3 style={styles.subSectionTitle}>Programmiersprachen</h3>
      <p>
        JavaScript <StarRating rating={4} /> Node.js <StarRating rating={3} /> TypeScript{' '}
        <StarRating rating={3} />
      </p>
      <p>
        HTML5, CSS3, SQL <StarRating rating={4} /> MongoDB, Oracle SQL, MySQL{' '}
        <StarRating rating={3} />
      </p>
      <p>Python (Grundkenntnisse)</p>
    </div>

    <div>
      <h3 style={styles.subSectionTitle}>Frameworks & Bibliotheken</h3>
      <p>React, Next.js, Express, Loopback, Prisma</p>
    </div>

    <div>
      <h3 style={styles.subSectionTitle}>Entwicklungsumgebungen & Tools</h3>
      <p>VSCode, Eclipse, IntelliJ, Postman, GitHub, JIRA, Docker, CI/CD-Pipelines</p>
    </div>

    <div>
      <h3 style={styles.subSectionTitle}>Hosting & Deployment</h3>
      <p>Shared Hosting (cPanel, Plesk), FTP/SFTP, DNS, Domainverwaltung</p>
    </div>

    <div>
      <h3 style={styles.subSectionTitle}>IT-Sicherheit & Datenschutz</h3>
      <p>
        OWASP, TLS/SSL, JWT/OAuth2, Berechtigungsmanagement, DSGVO-Konzepte, Firewalls, Backup,
        Monitoring
      </p>
    </div>
  </section>
);

const SoftSkills = () => (
  <section style={styles.section}>
    <h2 style={styles.sectionTitle}>SOFT SKILLS</h2>
    <p>Teamarbeit, analytisches Denken, lösungsorientiertes Arbeiten, Detailgenauigkeit</p>
  </section>
);

const FAQ = () => {
  const [open, setOpen] = useState(false);
  return (
    <section style={styles.section}>
      <h2 style={styles.sectionTitle}>
        <FaQuestionCircle /> FAQ – HÄUFIGE FRAGEN
      </h2>
      <button style={styles.faqToggle} onClick={() => setOpen(!open)}>
        {open ? 'FAQ schließen' : 'FAQ öffnen'}
      </button>
      {open && (
        <dl>
          <dt>
            <strong>Was bedeutet "CI/CD"?</strong>
          </dt>
          <dd>
            CI/CD steht für Continuous Integration und Continuous Delivery. Es ist ein Prozess, der
            die automatisierte Softwarebereitstellung und -prüfung ermöglicht.
          </dd>

          <dt>
            <strong>Warum ist IT-Sicherheit wichtig?</strong>
          </dt>
          <dd>
            IT-Sicherheit schützt Systeme und Daten vor unerlaubtem Zugriff, Datenverlust und
            Angriffen.
          </dd>

          <dt>
            <strong>Was ist Clean Code?</strong>
          </dt>
          <dd>
            Clean Code bedeutet gut lesbaren, wartbaren und klar strukturierten Programmcode.
          </dd>

          <dt>
            <strong>Was ist Web-Scraping?</strong>
          </dt>
          <dd>
            Automatisiertes Auslesen von Daten aus Webseiten zur Weiterverarbeitung.
          </dd>
        </dl>
      )}
    </section>
  );
};

// Bilder sind einfache Icons, als Beispiel hier mit react-icons (du kannst auch eigene Bilder einfügen)
const projectImages = {
  ecommerce: <FaBoxOpen size={60} color={colors.primary} />,
  event: <FaCalendarAlt size={60} color={colors.primary} />,
  scm: <FaProjectDiagram size={60} color={colors.primary} />,
};

const AktuelleProjekte = () => (
  <section style={styles.section}>
    <h2 style={styles.sectionTitle}>AKTUELLE PROJEKTE (STAND: JUNI 2025)</h2>

    <div style={styles.projectCard}>
      <div style={styles.projectImage}>{projectImages.ecommerce}</div>
      <div style={styles.projectContent}>
        <h3 style={styles.subSectionTitle}>E-Commerce-Webanwendung (Restaurant)</h3>
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
      <div style={styles.projectImage}>{projectImages.event}</div>
      <div style={styles.projectContent}>
        <h3 style={styles.subSectionTitle}>Event-Veranstaltungsplattform</h3>
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
      <div style={styles.projectImage}>{projectImages.scm}</div>
      <div style={styles.projectContent}>
        <h3 style={styles.subSectionTitle}>Supply Chain Management Plattform</h3>
        <p>
          Planung und Entwicklung einer Plattform zur Steuerung von Lieferketten mit Echtzeitdaten
          und Automatisierung von Zollprozessen.
        </p>
        <p>
          <strong>Status:</strong> <span style={styles.blue}>🔵 Planungsphase</span>
        </p>
      </div>
    </div>
  </section>
);

const Berufserfahrung = () => (
  <section style={styles.section}>
    <h2 style={styles.sectionTitle}>BERUFSERFAHRUNG</h2>

    <div>
      <h3 style={styles.subSectionTitle}>MAXEDV Beratung GmbH | Juli 2022 – Juni 2024</h3>
      <strong>Praktikant Fachinformatik/Anwendungsentwicklung</strong>
      <ul style={styles.list}>
        <li>Analyse & Anforderungsmanagement für eine Multi-Source Plattform</li>
        <li>Automatisiertes Web-Scraping mit Node.js zur Datenaggregation</li>
        <li>Datenverarbeitung und Speicherung in MongoDB</li>
        <li>Implementierung von CI-Pipelines zur Automatisierung</li>
      </ul>
      <p>
        Status: <span style={styles.green}>🟢 Abgeschlossen</span>
      </p>
    </div>

    <div>
      <h3 style={styles.subSectionTitle}>BBQ Baumann Bildung & Qualifikation GmbH | Juli 2024 – Januar 2025</h3>
      <strong>Praktikant Fachinformatik/Anwendungsentwicklung</strong>
      <ul style={styles.list}>
        <li>Entwicklung eines adaptiven Lernmanagementsystems (LMS) mit Node.js und SQL</li>
        <li>Integration von Frontend und Backend zur Verbesserung der Benutzererfahrung</li>
      </ul>
      <p>
        Status: <span style={styles.green}>🟢 Abgeschlossen</span>
      </p>
    </div>
  </section>
);

const AusbildungUndZertifikate = () => (
  <section style={styles.section}>
    <h2 style={styles.sectionTitle}>AUSBILDUNG & ZERTIFIKATE</h2>

    <div>
      <h3 style={styles.subSectionTitle}>Fachinformatiker Anwendungsentwicklung</h3>
      <p>Baumann Bildung & Qualifikation GmbH (Jan 2022 – Jan 2025)</p>
    </div>

    <div>
      <h3 style={styles.subSectionTitle}>Zertifikate</h3>
      <ul style={styles.list}>
        <li>Scrum Master (Exin), September 2022</li>
      </ul>
    </div>

    <div>
      <h3 style={styles.subSectionTitle}>Sprachen</h3>
      <ul style={styles.list}>
        <li>Deutsch: C1–C2 (fließend)</li>
        <li>Englisch: B2–C1 (fortgeschritten)</li>
      </ul>
    </div>
  </section>
);

export default function Resume() {
  return (
    <div style={styles.body}>
      <Header />
      <Profil />
      <FachlicheKompetenzen />
      <TechnischeKompetenzen />
      <SoftSkills />
      <Berufserfahrung />
      <AktuelleProjekte />
      <AusbildungUndZertifikate />
      <FAQ />
    </div>
  );
}
