import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AutoPipeline | Projects",
  description: "AutoPipeline is an experimental open-source GitHub Actions CI generator and drift checker.",
  alternates: { canonical: "/projects/autopipeline" },
};

const capabilities = [
  { number: "01", title: "Detect the stack", detail: "Recognises common Node.js, Python and Maven project files and suggests relevant checks." },
  { number: "02", title: "Configure the checks", detail: "Choose linting, type checks, unit tests, builds and available dependency auditing options." },
  { number: "03", title: "Generate the workflow", detail: "Produces reviewable GitHub Actions configuration with limited default permissions." },
  { number: "04", title: "Keep it consistent", detail: "Checks for differences between project configuration and the generated workflow." },
];

export default function AutoPipelinePage() {
  return <main className="project-detail-page">
    <section className="project-detail-heading">
      <Link href="/projects" className="back-link">← Back to projects</Link>
      <p className="kicker">OPEN SOURCE / DEVELOPER TOOL</p>
      <h1>Less setup.<br/><em>More building.</em></h1>
      <p>AutoPipeline is an experimental CLI for generating and maintaining configurable CI workflows, without repeating the same GitHub Actions setup for every project.</p>
      <div className="actions">
        <a href="https://github.com/SaranyaSkumar/autopipeline" className="button primary" target="_blank" rel="noopener noreferrer">Explore on GitHub <span aria-hidden="true">↗</span></a>
        <a href="https://github.com/SaranyaSkumar/autopipeline#readme" className="button secondary" target="_blank" rel="noopener noreferrer">Read the documentation <span aria-hidden="true">↗</span></a>
      </div>
    </section>
    <div className="project-detail-band"><span>CONFIGURE</span><span className="band-dot">✦</span><span>GENERATE</span><span className="band-dot">✦</span><span>VALIDATE</span></div>
    <section className="project-story section">
      <div><p className="kicker">01 / THE IDEA</p><h2>One workflow,<br/><em>less repetition.</em></h2></div>
      <div>
        <p>Setting up a new repository often means repeating familiar CI tasks. AutoPipeline explores a more consistent way to detect project tools, select useful checks and generate a workflow that developers can inspect and commit.</p>
        <p>It uses GitHub Actions to run the jobs rather than replacing the underlying CI provider.</p>
      </div>
    </section>
    <section className="project-features section">
      <p className="kicker">02 / WHAT IT DOES</p>
      <h2>Small steps.<br/><em>Better workflows.</em></h2>
      <div className="project-feature-grid">
        {capabilities.map(item => <article key={item.number} className="project-feature">
          <span>{item.number} / CAPABILITY</span><h3>{item.title}</h3><p>{item.detail}</p>
        </article>)}
      </div>
    </section>
    <section className="project-command section">
      <div>
        <p className="kicker">03 / DEVELOPER EXPERIENCE</p>
        <h2>Start from<br/><em>your terminal.</em></h2>
        <p>The project includes a CLI with commands for initialising configuration, generating workflows and checking for drift. Follow the repository README for up-to-date installation instructions.</p>
      </div>
      <div className="project-terminal">
        <div className="terminal-top"><span className="terminal-dots">● ● ●</span> AutoPipeline CLI</div>
        <pre><code>{"$ autopipeline init\n$ autopipeline doctor\n$ autopipeline generate\n$ autopipeline check"}</code></pre>
      </div>
    </section>
    <section className="project-last-word">
      <p className="kicker">CURRENT STATUS / EXPERIMENTAL</p>
      <h2>Built openly.<br/><em>Improved thoughtfully.</em></h2>
      <p>AutoPipeline is an early-stage project. Advanced security checks and deployment integrations are planned, not part of the current release.</p>
      <a href="https://github.com/SaranyaSkumar/autopipeline" className="button primary" target="_blank" rel="noopener noreferrer">View the source code ↗</a>
    </section>
  </main>;
}
