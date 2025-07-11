import React, { useState, useEffect } from 'react';

// Beispielhafte kostenlose Icons von https://react-icons.github.io/react-icons/ 
import { FaLinkedin, FaGithub, FaGlobe, FaEnvelope, FaPhone } from 'react-icons/fa';
import { MdOutlineWork, MdSchool } from 'react-icons/md';
import { GiSkills } from 'react-icons/gi';

// Farben
const colors = {
  primary: '#FF6F61',  // warmes Korallenrot
  secondary: '#FFA07A', // heller Korallton
  dark: '#2F2F2F',  // dunkles Grau
  light: '#F9F9F9', // fast weiß
  accent: '#4A90E2', // kräftiges Blau als Kontrast
  cardBg: '#FFF5F0',
  shadow: 'rgba(255, 111, 97, 0.3)',
};

const styles = {
  body: {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    margin: 0,
    padding: 0,
    backgroundColor: colors.light,
    color: colors.dark,
    minHeight: '100vh',
    scrollBehavior: 'smooth',
  },
  nav: {
    backgroundColor: colors.primary,
    padding: '1rem 2rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'sticky',
    top: 0,
    zIndex: 100,
    boxShadow: `0 2px 10px ${colors.shadow}`,
  },
  navTitle: {
    color: 'white',
    fontWeight: '700',
    fontSize: '1.4rem',
    letterSpacing: '1.2px',
  },
  navLinks: {
    display: 'flex',
    gap: '1.5rem',
  },
  navLink: {
    color: 'white',
    fontWeight: '600',
    textDecoration: 'none',
    fontSize: '1rem',
    transition: 'color 0.3s ease',
  },
  navLinkHover: {
    color: colors.accent,
  },
  hero: {
    background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
    color: 'white',
    textAlign: 'center',
    padding: '6rem 1rem 5rem',
    boxShadow: `inset 0 -80px 60px -40px ${colors.primary}`,
  },
  heroTitle: {
    fontSize: '2.8rem',
    marginBottom: '0.5rem',
    fontWeight: '900',
  },
  heroSubtitle: {
    fontSize: '1.2rem',
    maxWidth: '700px',
    margin: 'auto',
    fontWeight: '400',
    lineHeight: '1.5',
  },
  section: {
    padding: '4rem 1.5rem',
    maxWidth: '900px',
    margin: '0 auto',
  },
  sectionTitle: {
    fontSize: '2rem',
    marginBottom: '1.5rem',
    color: colors.primary,
    borderBottom: `3px solid ${colors.primary}`,
    paddingBottom: '0.3rem',
    fontWeight: '700',
  },
  cardGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))',
    gap: '1.5rem',
  },
  card: {
    backgroundColor: colors.cardBg,
    padding: '1.8rem',
    borderRadius: '12px',
    boxShadow: `0 10px 20px ${colors.shadow}`,
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'default',
  },
  cardHover: {
    transform: 'translateY(-6px)',
    boxShadow: `0 15px 30px ${colors.shadow}`,
  },
  cardTitle: {
    fontWeight: '700',
    fontSize: '1.3rem',
    marginBottom: '0.7rem',
    color: colors.dark,
  },
  cardContent: {
    fontSize: '1rem',
    color: '#555',
    lineHeight: '1.4',
  },
  iconRow: {
    marginTop: '1rem',
    display: 'flex',
    gap: '0.8rem',
    color: colors.primary,
  },
  footer: {
    textAlign: 'center',
    padding: '1.5rem',
    backgroundColor: colors.primary,
    color: 'white',
    fontWeight: '500',
  },
  socialIcons: {
    display: 'flex',
    gap: '1rem',
    marginTop: '0.8rem',
    justifyContent: 'center',
    color: 'white',
  },
  welcomeText: {
    maxWidth: '700px',
    margin: 'auto',
    fontSize: '1.25rem',
    lineHeight: '1.6',
    fontWeight: '500',
    marginTop: '1rem',
  },
};

const Navbar = () => {
  const [hovered, setHovered] = useState(null);
  const navItems = [
    { name: 'Profil', href: '#profil' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projekte', href: '#projects' },
    { name: 'Erfahrung', href: '#experience' },
    { name: 'Kontakt', href: '#contact' },
  ];

  return (
    <nav style={styles.nav}>
      <div style={styles.navTitle}>ESMAIL M. ALHUSSEIN</div>
      <div style={styles.navLinks}>
        {navItems.map((item, i) => (
          <a
            key={i}
            href={item.href}
            style={{
              ...styles.navLink,
              ...(hovered === i ? styles.navLinkHover : {}),
            }}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
          >
            {item.name}
          </a>
        ))}
      </div>
    </nav>
  );
};

const Hero = () => (
  <section style={styles.hero}>
    <h1 style={styles.heroTitle}>
      Full Stack Developer<br /> mit <br /> Fokus auf nachhaltige, smarte Software-Lösungen
    </h1>
    <p style={styles.heroSubtitle}>
      Begeisterung für Business Intelligence, Künstliche Intelligenz und adaptive Systeme.  
      Hier entstehen Lösungen, die heute wirken und morgen begeistern.
    </p>
  </section>
);

const Profil = () => (
  <section id="profil" style={styles.section}>
    <h2 style={styles.sectionTitle}><MdOutlineWork /> Profil</h2>
    <p>
      Full Stack Developer mit über 2 Jahren praktischer Erfahrung durch Projekte und Praktika im Rahmen einer dreijährigen Umschulung.  
      Kontinuierliche Weiterentwicklung seit Januar 2025 durch eigenständige Projekte.  
      Interesse an Business Intelligence (BI), Künstlicher Intelligenz (KI), Adaptiven Systemen (ASI) sowie ERP-, CRM- und CMS-Systemen.  
      Ziel: maßgeschneiderte Lösungen für regionale Kunden und effiziente interne Prozesse.
    </p>
  </section>
);

const SkillCard = ({ title, level, icon }) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      style={{
        ...styles.card,
        ...(hover ? styles.cardHover : {}),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div style={{ fontSize: '3rem', color: colors.accent, marginBottom: '0.6rem' }}>
        {icon}
      </div>
      <h3 style={styles.cardTitle}>{title}</h3>
      <p style={{ ...styles.cardContent, fontWeight: '600' }}>Level: {level}</p>
    </div>
  );
};

const Skills = () => {
  const skills = [
    { title: 'JavaScript', level: '★★★★☆', icon: <GiSkills /> },
    { title: 'React', level: '★★★★☆', icon: <GiSkills /> },
    { title: 'Node.js', level: '★★★★☆', icon: <GiSkills /> },
    { title: 'TypeScript', level: '★★★☆☆', icon: <GiSkills /> },
    { title: 'SQL & NoSQL', level: '★★★★☆', icon: <GiSkills /> },
  ];

  return (
    <section id="skills" style={styles.section}>
      <h2 style={styles.sectionTitle}>Fachliche Kompetenzen</h2>
      <div style={styles.cardGrid}>
        {skills.map((skill) => (
          <SkillCard
            key={skill.title}
            title={skill.title}
            level={skill.level}
            icon={skill.icon}
          />
        ))}
      </div>
    </section>
  );
};

const ProjectCard = ({ title, description, tech, imageUrl }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      style={{
        ...styles.card,
        ...(hover ? styles.cardHover : {}),
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {imageUrl && (
        <img
          src={imageUrl}
          alt={`${title} screenshot`}
          style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '12px 12px 0 0' }}
        />
      )}
      <div style={{ padding: '1rem', flexGrow: 1 }}>
        <h3 style={styles.cardTitle}>{title}</h3>
        <p style={{ ...styles.cardContent, marginBottom: '0.8rem' }}>{description}</p>
        <small style={{ color: colors.accent, fontWeight: '600' }}>{tech}</small>
      </div>
    </div>
  );
};

const Projects = () => {
  // Kostenlose Bilder von Unsplash, passend zu den Projekten
  const projects = [
    {
      title: 'E-Commerce Webanwendung',
      description: 'Responsive Anwendung für Online-Bestellungen mit Warenkorb und Zahlungslogik.',
      tech: 'HTML, CSS, JavaScript',
      imageUrl: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'Event-Veranstaltungsplattform',
      description: 'Website mit SEO-Optimierung für Event-Organisatoren mit Nachfragefunktion.',
      tech: 'HTML, CSS, JavaScript',
      imageUrl: 'https://images.unsplash.com/photo-1497493292307-31c376b6e479?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'Supply Chain Management Plattform',
      description: 'Integrierte Plattform für Logistik, Warenwirtschaft und Zollabwicklung.',
      tech: 'React, Next.js, Microsoft SQL Server',
      imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80',
    },
  ];

  return (
    <section id="projects" style={styles.section}>
      <h2 style={styles.sectionTitle}>Projekte</h2>
      <div style={styles.cardGrid}>
        {projects.map(({ title, description, tech, imageUrl }) => (
          <ProjectCard
            key={title}
            title={title}
            description={description}
            tech={tech}
            imageUrl={imageUrl}
          />
        ))}
      </div>
    </section>
  );
};

const Experience = () => (
  <section id="experience" style={styles.section}>
    <h2 style={styles.sectionTitle}><MdOutlineWork /> Berufserfahrung</h2>
    <p>
      Über 2 Jahre Erfahrung als Full Stack Developer mit Fokus auf agile Projektarbeit und moderne Webtechnologien.  
      Praktika bei MAXEDV Beratung GmbH und BBQ Baumann Bildung mit erfolgreichen IHK-Abschlussprojekten.  
      Eigenständige Projektentwicklung seit 2025 zur stetigen Weiterentwicklung.
    </p>
  </section>
);

const Contact = () => (
  <section id="contact" style={styles.section}>
    <h2 style={styles.sectionTitle}>Kontakt</h2>
    <p>
      Ich freue mich über Ihre Kontaktaufnahme – gerne auch für gemeinsame Projekte oder Fragen!
    </p>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginTop: '1rem' }}>
      <a href="mailto: xismail621@gmail.com" style={{ color: colors.primary, textDecoration: 'none' }}>
        <FaEnvelope style={{ marginRight: '0.5rem' }} /> xismail621@gmail.com
      </a>
      <a href="tel:+4915739802622" style={{ color: colors.primary, textDecoration: 'none' }}>
        <FaPhone style={{ marginRight: '0.5rem' }} /> +49 1573 9802622
      </a>
      <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer" style={{ color: colors.primary, textDecoration: 'none' }}>
        <FaLinkedin style={{ marginRight: '0.5rem' }} /> LinkedIn
      </a>
      <a href="https://github.com/yourgithub" target="_blank" rel="noreferrer" style={{ color: colors.primary, textDecoration: 'none' }}>
        <FaGithub style={{ marginRight: '0.5rem' }} /> GitHub
      </a>
      <a href="https://yourportfolio.com" target="_blank" rel="noreferrer" style={{ color: colors.primary, textDecoration: 'none' }}>
        <FaGlobe style={{ marginRight: '0.5rem' }} /> Portfolio
      </a>
    </div>
  </section>
);

export default function Portfolio() {
  return (
    <div style={styles.body}>
      <Navbar />
      <Hero />
      <Profil />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <footer style={styles.footer}>
        © 2025 Esmail M. Alhussein – Full Stack Developer Portfolio
      </footer>
    </div>
  );
}
