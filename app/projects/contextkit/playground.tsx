"use client";

import { useMemo, useState } from "react";

type ExampleDoc = { id: string; title: string; text: string; source: string };
type Ranked = ExampleDoc & { score: number; tokens: number; selected: boolean };
const docs: ExampleDoc[] = [
  { id: "db", title: "Database connection saturation", source: "Incident note / DB", text: "Aurora database connection pool became exhausted when concurrent Lambda workers opened too many connections, causing timeouts." },
  { id: "queue", title: "Queue retry handling", source: "Runbook / SQS", text: "SQS messages that repeatedly fail processing can be moved to a dead-letter queue for inspection after retry exhaustion." },
  { id: "auth", title: "Token validation failures", source: "Support note / Identity", text: "Cognito JWT authentication can fail when signing keys rotate or the application validates an outdated signing key." },
  { id: "deploy", title: "Release recovery procedure", source: "Runbook / CI", text: "Rollback the release if a new deployment causes production regressions and verify the previously healthy commit." },
  { id: "gis", title: "Geospatial projections", source: "Engineering note / GIS", text: "Coordinate reference systems must match before overlaying survey boundaries and GeoJSON features on a map." },
  { id: "rag", title: "Hybrid document retrieval", source: "Design note / AI", text: "Hybrid search combines keyword and embedding-based semantic similarity; reranking can improve relevant evidence selection." },
  { id: "security", title: "Untrusted retrieved content", source: "Security guide / Agents", text: "Prompt injection occurs when untrusted retrieved content attempts to override agent instructions or trigger unauthorized tool calls." },
  { id: "field", title: "Site inspection reporting", source: "Field notes / Civil", text: "Site visit records include instrumentation readings, ground movement, observations, and follow-up engineering actions." }
];
const examples = [
  { label: "Database failures", query: "Why are our SQL connections exhausted?", expected: "db" },
  { label: "Authentication", query: "Why do sign-in JWT signatures fail?", expected: "auth" },
  { label: "Deployment recovery", query: "How do I undo a faulty rollout?", expected: "deploy" },
  { label: "Site reports", query: "Where are soil movement observations recorded?", expected: "field" }
];
function terms(text: string): Set<string> {
  const stop = new Set(["the","a","an","and","or","of","to","for","is","are","how","why","do","i","our","in","on"]);
  return new Set((text.toLowerCase().match(/[a-z0-9]+/g) ?? []).filter(x => x.length > 2 && !stop.has(x)));
}
function overlap(query: string, document: string): number {
  const q = terms(query), d = terms(document);
  return q.size ? [...q].filter(w => d.has(w)).length / q.size : 0;
}
function dot(a: number[], b: number[]): number {
  let product=0, aa=0, bb=0;
  for(let i=0; i<a.length; i++) { product+=a[i]*b[i]; aa+=a[i]*a[i]; bb+=b[i]*b[i]; }
  return aa && bb ? Math.max(0,product/Math.sqrt(aa*bb)) : 0;
}
function rank(query: string, budget: number, method: "keyword"|"semantic", embeddings?: number[][]): Ranked[] {
  const scored=docs.map((d,i) => ({
    ...d, tokens: Math.ceil(d.text.length/4),
    score: method==="keyword" ? overlap(query,d.text+" "+d.title) : dot(embeddings![0],embeddings![i+1]),
    selected:false
  })).sort((a,b)=>b.score-a.score || a.id.localeCompare(b.id));
  let used=0;
  return scored.map(d=>{
    const selected=d.score>0 && used+d.tokens<=budget;
    if(selected) used+=d.tokens;
    return {...d,selected};
  });
}
export default function ContextPlayground() {
  const [example,setExample]=useState(0);
  const [query,setQuery]=useState(examples[0].query);
  const [budget,setBudget]=useState(120);
  const [mode,setMode]=useState<"keyword"|"semantic">("keyword");
  const [results,setResults]=useState<Ranked[]>(()=>rank(examples[0].query,120,"keyword"));
  const [running,setRunning]=useState(false);
  const [error,setError]=useState("");
  const [duration,setDuration]=useState<number|null>(null);
  const [modelReady,setModelReady]=useState(false);
  const selected=useMemo(()=>results.filter(x=>x.selected),[results]);
  const expected=examples[example]?.expected;
  async function run() {
    if(!query.trim()) { setError("Enter a query to start."); return; }
    setError(""); setRunning(true);
    const start=performance.now();
    try {
      let next: Ranked[];
      if(mode==="keyword") {
        next=rank(query,budget,"keyword");
      } else {
        // Runs a real open-weight model in the visitor's browser. Model files download on first use.
        const moduleUrl = "https://cdn.jsdelivr.net/npm/@xenova/transformers@2.17.2";
        const { pipeline } = await import(/* webpackIgnore: true */ moduleUrl);
        const extractor=await pipeline("feature-extraction","Xenova/all-MiniLM-L6-v2",{ quantized:true });
        const vectors: number[][]=[];
        for(const text of [query,...docs.map(d=>d.title+". "+d.text)]) {
          const output=await extractor(text,{pooling:"mean",normalize:true});
          vectors.push(Array.from(output.data));
        }
        next=rank(query,budget,"semantic",vectors);
        setModelReady(true);
      }
      setResults(next);
      setDuration(Math.round(performance.now()-start));
    } catch(e) {
      setError("Could not load the local embedding model. Check your browser connection or try keyword mode. "+(e instanceof Error ? e.message:""));
    } finally {setRunning(false);}
  }
  function selectExample(i:number) {setExample(i);setQuery(examples[i].query);setResults(rank(examples[i].query,budget,"keyword"));setMode("keyword");setDuration(null);setError("");}
  const hit=selected.slice(0,3).some(x=>x.id===expected);
  return <div className="contextkit-demo">
    <div className="contextkit-form">
      <div className="contextkit-head"><span>CONTEXTKIT / RETRIEVAL LAB</span><span className="contextkit-status">● Browser runner</span></div>
      <div className="contextkit-controls">
        <label htmlFor="contextkit-query">Engineering question</label>
        <textarea id="contextkit-query" rows={2} value={query} onChange={e=>setQuery(e.target.value)} maxLength={350} placeholder="Ask about an engineering incident..."/>
        <div className="contextkit-presets">{examples.map((x,i)=><button type="button" className={example===i?"active":""} key={x.label} onClick={()=>selectExample(i)}>{x.label}</button>)}</div>
        <div className="contextkit-options">
          <div><label htmlFor="contextkit-method">Retrieval mode</label><select id="contextkit-method" value={mode} onChange={e=>setMode(e.target.value as "keyword"|"semantic")}><option value="keyword">Keyword / instant</option><option value="semantic">Real embeddings / on-device</option></select></div>
          <div><label htmlFor="contextkit-budget">Evidence budget: {budget} approx. tokens</label><input id="contextkit-budget" type="range" min={40} max={350} step={10} value={budget} onChange={e=>setBudget(Number(e.target.value))}/></div>
        </div>
        <button className="contextkit-run" type="button" onClick={run} disabled={running}>{running?"Running retrieval…":"Run retrieval →"}</button>
        <p className="contextkit-footnote">Keyword mode works instantly. Real embeddings download an open-weight model to your browser on first use (may take time or use mobile data). Your query and the example documents are processed locally, with no paid API key. Model files are fetched from the model host.</p>
        {error && <p className="contextkit-error" role="alert">{error}</p>}
      </div>
    </div>
    <div className="contextkit-results" aria-live="polite">
      <div className="contextkit-head"><span>RETRIEVAL TRACE</span><span>{mode==="semantic"&&modelReady?"Local model ready":"8 example documents"}</span></div>
      <div className="contextkit-stats">
        <div><strong>{selected.length}</strong><small>Selected</small></div>
        <div><strong>{selected.reduce((sum,x)=>sum+x.tokens,0)}</strong><small>Approx. tokens</small></div>
        <div><strong>{hit?"YES":"NO"}</strong><small>Sample hit@3</small></div>
        <div><strong>{duration===null?"—":duration+"ms"}</strong><small>Runtime</small></div>
      </div>
      <p className="contextkit-results-label">Ranked evidence <span>Selected items marked in sage</span></p>
      <div className="contextkit-ranked">{results.map((d,i)=><article className={d.selected?"selected":""} key={d.id}><div className="contextkit-rank"><span>#{i+1} · {d.id}</span><span>{(d.score*100).toFixed(1)}% similarity</span></div><h3>{d.title}</h3><p>{d.text}</p><div className="contextkit-meta"><span>{d.source}</span><span>{d.tokens} tokens · {d.selected?"Included":d.score<=0?"Not relevant":"Over budget"}</span></div></article>)}</div>
      <p className="contextkit-footnote">Sample hit@3 compares against one hand-labelled source for the selected preset. If you edit the query, this label is no longer a rigorous accuracy measure. Token estimates use four characters per token. The live playground is a small educational counterpart to the ContextKit repository, not a hosted execution of arbitrary GitHub code.</p>
    </div>
  </div>;
}
