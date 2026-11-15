import Link from "next/link";
import type { Metadata } from "next";
import ContextPlayground from "./playground";
import styles from "../project-refresh.module.css";

export const metadata: Metadata = {
  title: "ContextKit | Live Context Engineering Playground",
  description: "Compare browser-local keyword and semantic retrieval with an interactive evidence budget.",
  alternates: { canonical: "/projects/contextkit" }
};

export default function ContextKitPage() {
  return <main className={styles.page}>
    <div className={styles.wrap}>
      <Link href="/projects" className={styles.back}>← Back to projects</Link>
      <section className={styles.contextHero}>
        <div>
          <p className={styles.eyebrow}>OPEN SOURCE / AI ENGINEERING</p>
          <h1>ContextKit<span className={styles.dot}>.</span></h1>
          <p className={styles.subtitle}>See how retrieval changes the evidence an AI agent receives.</p>
        </div>
        <div className={styles.actions}>
          <a className={styles.primary} href="#try-contextkit">Try the runner ↓</a>
          <a className={styles.secondary} href="https://github.com/SaranyaSkumar/contextkit" target="_blank" rel="noopener noreferrer">Source code ↗</a>
        </div>
      </section>

      <section id="try-contextkit" className={styles.runnerSection} aria-label="Interactive retrieval experiment">
        <div className={styles.sectionTitle}><h2>Retrieval playground</h2><p>Ask, retrieve, inspect.</p></div>
        <ContextPlayground />
      </section>

      <section className={styles.compactSection}>
        <div className={styles.sectionTitle}><h2>How it works</h2><p>All within your browser. No paid AI API.</p></div>
        <div className={styles.flow}>
          <div><strong>Query</strong><small>Engineering question</small></div>
          <span aria-hidden="true">→</span>
          <div><strong>Retrieve</strong><small>Keyword or embeddings</small></div>
          <span aria-hidden="true">→</span>
          <div><strong>Rank</strong><small>Relevant evidence</small></div>
          <span aria-hidden="true">→</span>
          <div><strong>Select</strong><small>Token budget</small></div>
        </div>
        <p className={styles.disclaimer}>Sample documents and approximate token counts. Results are an educational retrieval demonstration, not a measured improvement in agent answer quality.</p>
      </section>
      <div className={styles.note}><span className={styles.noteMark}>↗</span><p><strong>Open source experiment.</strong> Explore the reusable library, methodology and limitations in the repository.</p><a href="https://github.com/SaranyaSkumar/contextkit" target="_blank" rel="noopener noreferrer">Explore repository →</a></div>
    </div>
  </main>;
}
