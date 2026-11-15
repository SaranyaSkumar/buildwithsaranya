import Link from "next/link";
import type { Metadata } from "next";
import ContextPlayground from "./playground";

export const metadata: Metadata = {
  title: "ContextKit | Live Context Engineering Playground",
  description: "Try ContextKit: compare lexical and browser-local semantic retrieval, inspect source rankings and evidence budgets, with no API key.",
  alternates: { canonical: "/projects/contextkit" }
};

export default function ContextKitPage() {
  return <main className="project-detail-page">
    <section className="project-detail-heading">
      <Link href="/projects" className="back-link">← Back to projects</Link>
      <p className="kicker">OPEN SOURCE / AI ENGINEERING</p>
      <h1>Better context.<br/><em>Better agents.</em></h1>
      <p>ContextKit explores a practical question: what evidence should an AI agent receive, and what should be left out? Try the interactive runner below, right in your browser.</p>
      <div className="actions">
        <a href="#try-contextkit" className="button primary">Try the live runner ↓</a>
        <a href="https://github.com/SaranyaSkumar/contextkit" className="button secondary" target="_blank" rel="noopener noreferrer">View source ↗</a>
      </div>
    </section>
    <div className="project-detail-band"><span>SELECT</span><span className="band-dot">✦</span><span>RANK</span><span className="band-dot">✦</span><span>EVALUATE</span></div>
    <section className="section contextkit-section" id="try-contextkit">
      <p className="kicker">01 / INTERACTIVE EXPERIMENT</p>
      <h2>Watch retrieval<br/><em>in action.</em></h2>
      <p className="contextkit-lede">Choose a sample engineering task or write your own, then compare lexical matching with a real, locally executed embedding model. No sign-up or paid AI API.</p>
      <ContextPlayground />
    </section>
    <section className="project-features section">
      <p className="kicker">02 / UNDER THE HOOD</p>
      <h2>Built to be<br/><em>understood.</em></h2>
      <div className="project-feature-grid">
        <article className="project-feature"><span>01 / RELEVANCE</span><h3>Lexical and semantic retrieval</h3><p>Compare matching words with cosine similarity from a real transformer embedding model that executes in the browser.</p></article>
        <article className="project-feature"><span>02 / CONTEXT BUDGETS</span><h3>Limit selected evidence</h3><p>Inspect the approximate tokens consumed and see which sources make the cut under a configurable budget.</p></article>
        <article className="project-feature"><span>03 / PROVENANCE</span><h3>Explainable selections</h3><p>Every example includes an evidence identifier, relevance score and a reason for inclusion or exclusion.</p></article>
        <article className="project-feature"><span>04 / EVALUATION</span><h3>Test against labelled answers</h3><p>Run a sample with a known expected source to inspect Recall@3. The demo is exploratory, not a production accuracy claim.</p></article>
      </div>
    </section>
    <section className="project-last-word">
      <p className="kicker">OPEN SOURCE / EXPERIMENTAL</p>
      <h2>From demo<br/><em>to real systems.</em></h2>
      <p>The live runner uses a small public example corpus, not company data. The reusable TypeScript library and larger benchmark live in the repository.</p>
      <a className="button primary" href="https://github.com/SaranyaSkumar/contextkit" target="_blank" rel="noopener noreferrer">Explore ContextKit on GitHub ↗</a>
    </section>
  </main>;
}
