import Link from "next/link";
import type { Metadata } from "next";
import styles from "../project-refresh.module.css";

export const metadata: Metadata = {
  title: "AutoPipeline | Projects",
  description: "A lightweight open-source CLI for generating and checking GitHub Actions workflows.",
  alternates: { canonical: "/projects/autopipeline" },
};

const steps = [
  { name: "Detect", detail: "Find project tools" },
  { name: "Configure", detail: "Choose CI checks" },
  { name: "Generate", detail: "Write workflow YAML" },
  { name: "Validate", detail: "Check for drift" },
];

export default function AutoPipelinePage() {
  return <main className={styles.page}>
    <div className={styles.wrap}>
      <Link href="/projects" className={styles.back}>← Back to projects</Link>
      <section className={styles.hero}>
        <div>
          <p className={styles.eyebrow}>OPEN SOURCE / DEVELOPER TOOL</p>
          <h1>AutoPipeline<span className={styles.dot}>.</span></h1>
          <p className={styles.subtitle}>Reusable GitHub Actions workflows, without repeating the setup.</p>
          <div className={styles.actions}>
            <a className={styles.primary} href="https://github.com/SaranyaSkumar/autopipeline" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
            <a className={styles.secondary} href="https://github.com/SaranyaSkumar/autopipeline#readme" target="_blank" rel="noopener noreferrer">Documentation ↗</a>
          </div>
          <div className={styles.tags}><span>CLI</span><span>GitHub Actions</span><span>Open source</span></div>
        </div>
        <div className={styles.pipelineVisual} aria-label="AutoPipeline flow from project to GitHub Actions">
          <div className={styles.pipelineNode}>Project</div>
          <span aria-hidden="true">→</span>
          <div className={styles.pipelineCenter}>AutoPipeline</div>
          <span aria-hidden="true">→</span>
          <div className={styles.pipelineNode}>CI workflow</div>
        </div>
      </section>

      <section className={styles.compactSection}>
        <div className={styles.sectionTitle}><h2>What it does</h2><p>Four steps, one repeatable workflow.</p></div>
        <div className={styles.stepGrid}>
          {steps.map((step, index) => <div className={styles.step} key={step.name}>
            <span className={styles.stepNumber}>0{index + 1}</span>
            <strong>{step.name}</strong><small>{step.detail}</small>
          </div>)}
        </div>
      </section>

      <section className={styles.splitSection}>
        <div>
          <h2>From the terminal</h2>
          <p className={styles.caption}>Inspect, generate and check your workflow.</p>
          <div className={styles.terminal}>
            <div className={styles.terminalBar}><i/><i/><i/><span>CLI</span></div>
            <pre><code>{`$ autopipeline init
$ autopipeline doctor
$ autopipeline generate
$ autopipeline check`}</code></pre>
          </div>
        </div>
        <div>
          <h2>Generated workflow</h2>
          <p className={styles.caption}>Review the resulting GitHub Actions file before committing.</p>
          <div className={styles.codePreview}>
            <span>.github/workflows/ci.yml</span>
            <pre><code>{`name: CI
on: [push, pull_request]
jobs:
  checks:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      # Generated checks go here`}</code></pre>
          </div>
        </div>
      </section>
      <div className={styles.note}><span className={styles.noteMark}>↗</span><p><strong>Experimental open source.</strong> See the README for supported stacks, current capabilities and installation instructions.</p><a href="https://github.com/SaranyaSkumar/autopipeline" target="_blank" rel="noopener noreferrer">Explore repository →</a></div>
    </div>
  </main>;
}
