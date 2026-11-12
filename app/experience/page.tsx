import Link from "next/link";
import type { Metadata } from "next";
import styles from "./experience.module.css";

export const metadata: Metadata = {
  title: "Professional Experience",
  description: "Explore Saranya Sasi Kumar's software engineering career since September 2018: cloud systems, production applications, AI-assisted tooling, healthcare software and backend engineering.",
  alternates: { canonical: "/experience" },
  openGraph: {
    title: "Professional Experience | Saranya Sasi Kumar",
    url: "/experience",
    description: "Eight-plus years building reliable software across cloud engineering, full-stack applications and healthcare systems.",
  },
};

type Role = {
  date: string;
  title: string;
  company: string;
  location?: string;
  summary: string;
  highlights: string[];
  areas: string[];
};

const roles: Role[] = [
  {
    date: "MAR 2024 — PRESENT",
    title: "Software Engineer",
    company: "Woods",
    location: "New Zealand",
    summary: "Building and maintaining production software at the intersection of user-facing applications, cloud services and data-driven systems.",
    highlights: [
      "Develop responsive dashboards and interactive visualisations using React, Next.js and TypeScript.",
      "Build backend services with Python and Node.js, supporting event-driven workflows across AWS.",
      "Work with geospatial and IoT data pipelines for ingestion, processing and reporting.",
      "Develop AI-assisted internal tools for document search, retrieval and summarisation, alongside access control and CI/CD improvements.",
    ],
    areas: ["Full-stack engineering", "AWS", "Event-driven systems", "Applied AI"],
  },
  {
    date: "2022 — 2023",
    title: "Fullstack Developer",
    company: "Tech Agrim",
    location: "India",
    summary: "Designed full-stack services and cloud-backed workflows with an emphasis on security, performance and maintainable architecture.",
    highlights: [
      "Architected applications with Node.js and Next.js, backed by AWS RDS and S3 for application data and object storage.",
      "Integrated AWS Cognito for user authentication and administrative workflows.",
      "Implemented role-based access controls to protect data and support permission-aware user experiences.",
    ],
    areas: ["Node.js", "Next.js", "AWS", "Access control"],
  },
  {
    date: "2022 · CONTRACT",
    title: "Senior Web Developer",
    company: "DoctorOnCall",
    summary: "Delivered backend capabilities for a healthcare platform, supporting customisation, access management and appointment scheduling.",
    highlights: [
      "Built backend modules for user customisation and role-based authentication.",
      "Implemented appointment-booking workflows for users and administrators.",
      "Led and coordinated a team through feature delivery and collaboration.",
    ],
    areas: ["Backend systems", "Authentication", "Scheduling", "Team leadership"],
  },
  {
    date: "2020 — 2022",
    title: "Software Engineer",
    company: "Turing Test",
    summary: "Improved application performance, admin workflows and the security of established systems.",
    highlights: [
      "Optimised database interactions through Sequelize and Node.js integration.",
      "Built specialised administrative modules, contributing to a reported 10% reduction in development time.",
      "Refactored legacy code, contributing to a reported 60% decrease in security vulnerabilities.",
    ],
    areas: ["Node.js", "Sequelize", "Performance", "Security"],
  },
  {
    date: "2018 — 2020",
    title: "Software Developer",
    company: "Vitalic Health Private Limited",
    location: "India",
    summary: "Developed features and integrations for healthcare and doctor consultation applications.",
    highlights: [
      "Enhanced consultation workflows using Node.js and AngularJS.",
      "Integrated Algolia Search and third-party APIs for scheduling, slot management and information retrieval.",
      "Improved administration dashboards, contributing to a reported 15% reduction in operational time.",
    ],
    areas: ["Node.js", "AngularJS", "Search", "Healthcare"],
  },
  {
    date: "2018",
    title: "Operations Analyst",
    company: "JustDoc",
    location: "India",
    summary: "Supported healthcare operations, coordination and process improvements before moving into software development.",
    highlights: [],
    areas: ["Healthcare operations", "Process improvement"],
  },
];

export default function ExperiencePage() {
  return (
    <main className="experience-page">
      <section className="experience-heading">
        <Link href="/" className="back-link">← Back to home</Link>
        <p className="kicker">MY JOURNEY / EXPERIENCE</p>
        <h1>Built through<br/><em>experience.</em></h1>
        <p>Since September 2018, I’ve worked across healthcare products, full-stack applications, cloud systems and AI-assisted tools. Each role has shaped how I approach building software for real people.</p>
      </section>

      <section className="timeline" aria-label="Professional experience">
        {roles.map((role, index) => (
          <article className="timeline-entry" key={role.company}>
            <div className="timeline-date">
              <span className="timeline-marker" aria-hidden="true" />
              {role.date}
            </div>
            <div className="timeline-content">
              <div className="role-number">{String(index + 1).padStart(2, "0")} / EXPERIENCE</div>
              <h2>{role.title}</h2>
              <h3>{role.company}{role.location && <span> · {role.location}</span>}</h3>
              <p>{role.summary}</p>
              {role.highlights.length > 0 && (
                <ul className={styles.highlights}>
                  {role.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                </ul>
              )}
              <div className={styles.tags} aria-label="Areas of work">
                {role.areas.map((area) => <span className={styles.tag} key={area}>{area}</span>)}
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="history-cta">
        <h2>What’s next?</h2>
        <p>Building on this foundation to create dependable, human-centred experiences with AI and modern software.</p>
        <Link className="button primary" href="/">Return to homepage ↗</Link>
      </section>
    </main>
  );
}
