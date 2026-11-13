import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected open-source software engineering projects.",
  alternates: { canonical: "/projects" },
};

function PipelineArt() {
  return <svg className="pipeline-illustration" viewBox="0 0 180 146" width="180" height="146" fill="none" aria-hidden="true">
    <path d="M39 38H88C105 38 115 51 115 68V77C115 95 128 107 148 107" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
    <path d="M39 74H70C87 74 97 83 97 99" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity=".45"/>
    <circle cx="39" cy="38" r="10" fill="#E8AD94"/><circle cx="39" cy="74" r="8" fill="#829884"/>
    <circle cx="97" cy="107" r="10" fill="#829884"/><circle cx="148" cy="107" r="10" fill="#E8AD94"/>
  </svg>;
}

export default function ProjectsPage() {
  return <main className="projects-page">
    <section className="projects-intro">
      <Link href="/" className="back-link">← Back to home</Link>
      <p className="kicker">PROJECTS / OPEN SOURCE</p>
      <h1>Ideas made<br/><em>useful.</em></h1>
      <p>A collection of practical experiments and developer tools. One project at a time.</p>
    </section>
    <section className="projects-list" aria-label="Selected projects">
      <Link className="portfolio-project-card" href="/projects/autopipeline">
        <div className="portfolio-project-art">
          <span className="art-corner">01 / DEVELOPER TOOLS</span>
          <PipelineArt />
          <span className="art-bottom">BUILD · TEST · VALIDATE</span>
        </div>
        <div className="portfolio-project-copy">
          <span className="project-eyebrow">OPEN SOURCE · EXPERIMENTAL</span>
          <h2>AutoPipeline<span className="project-arrow" aria-hidden="true">↗</span></h2>
          <p>A simpler way to generate and maintain configurable CI workflows. Built for developers who want reliable checks without repeating setup across repositories.</p>
          <div className="project-tags"><span>Node.js</span><span>JavaScript</span><span>GitHub Actions</span></div>
          <span className="project-open">Explore project <span aria-hidden="true">↗</span></span>
        </div>
      </Link>
    </section>
  </main>;
}
