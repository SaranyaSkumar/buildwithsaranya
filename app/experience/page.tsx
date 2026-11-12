import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Professional Experience",
  description: "Explore Saranya Sasi Kumar's journey since September 2018, from healthcare software and real-time monitoring to AI agents, tools and workflows.",
  alternates: { canonical: "/experience" },
  openGraph: {
    title: "Professional Experience | Saranya Sasi Kumar",
    url: "/experience",
    description: "A personal look at eight-plus years of software engineering, from healthcare applications to building useful AI experiences.",
  },
};

type Role = {
  date: string;
  title: string;
  company: string;
  location?: string;
  paragraphs: string[];
};

const roles: Role[] = [
  {
    date: "MAR 2024 TO PRESENT",
    title: "Software Engineer",
    company: "Woods",
    location: "New Zealand",
    paragraphs: [
      "My journey at Woods started with GeoTrack, working with real-time monitoring data, GIS, maps and visualisations. It was interesting to see how data coming from the field could be turned into something people could actually understand and use.",
      "These days, my world revolves more around AI, building agents, connecting tools, creating workflows and finding new ways to make everyday work easier. What I enjoy most is taking an idea and turning it into something useful, whether it's a small AI-powered application or a workflow that saves someone hours of effort. There's always something new to explore, and that's what makes it exciting.",
    ],
  },
  {
    date: "2022 TO 2023",
    title: "Fullstack Developer",
    company: "Tech Agrim",
    location: "India",
    paragraphs: [
      "Tech Agrim was where I started looking at applications more as a whole, rather than just individual features. I was working across frontend, backend and AWS, and I loved having that bigger picture. There was always something interesting to figure out, whether it was how services communicated, how permissions worked or how to make an application simpler for the people using it.",
    ],
  },
  {
    date: "2022 · CONTRACT",
    title: "Senior Web Developer",
    company: "DoctorOnCall",
    paragraphs: [
      "DoctorOnCall was a different kind of experience for me. Along with building features for a healthcare platform, I was also coordinating a team and helping things move forward. We worked on appointment booking, user management and backend functionality. It was interesting to see how something that looks simple to a user can have quite a lot happening behind the scenes.",
    ],
  },
  {
    date: "2020 TO 2022",
    title: "Software Engineer",
    company: "Turing Test",
    paragraphs: [
      "I spent a good part of my time at Turing Test figuring out how to make existing things work better. There were performance issues to investigate, backend features to build and older code that needed attention. I actually enjoy this kind of work. Understanding why something behaves the way it does, finding the problem and making it better can be just as satisfying as building something from scratch.",
    ],
  },
  {
    date: "2018 TO 2020",
    title: "Software Developer",
    company: "Vitalic Health Private Limited",
    location: "India",
    paragraphs: [
      "A lot of my early days as a developer were spent at Vitalic Health. I was building features for healthcare applications, working with APIs, search and consultation workflows, and learning how everything fitted together. There was plenty of figuring things out as I went, and I liked that. Every new feature or problem gave me something else to learn.",
    ],
  },
  {
    date: "2018",
    title: "Operations Analyst",
    company: "JustDoc",
    location: "India",
    paragraphs: [
      "My career actually started on the operations side of healthcare, at JustDoc. I wasn't writing software at that point, but I was seeing how things worked day to day and where processes could become complicated. It's an interesting place to have started, considering I eventually moved into building the kind of systems people rely on to get their work done.",
    ],
  },
];

export default function ExperiencePage() {
  return (
    <main className="experience-page">
      <section className="experience-heading">
        <Link href="/" className="back-link">← Back to home</Link>
        <p className="kicker">MY JOURNEY / EXPERIENCE</p>
        <h1>Built through<br/><em>experience.</em></h1>
        <p>Since September 2018, I’ve worked across healthcare products, full-stack applications, cloud systems and AI tools. Every role has brought its own interesting challenges and things to learn.</p>
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
              {role.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
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
