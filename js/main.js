/* ---------- content ---------- */
const SKILLS = ["Python", "C#", "Java", "AWS Lambda", "Step Functions", "Bedrock", "AgentCore", "Strands", "MCP", "RAG", ".NET Core", "Spring Boot", "FastAPI", "Azure", "Kubernetes", "Terraform", "PostgreSQL", "SQS / SNS", "Datadog"];

/* Employer work stays at résumé level (no internal architecture); only personal projects get diagrams. */
const PROJECTS = [
  {
    tag: "01 · Agentic AI · First Help Financial · 2026",
    title: "AI for loan underwriting",
    problem: "Comparing loan versions and checking the calculations behind them took underwriters about <b>10 minutes per application</b>.",
    built: "A production agentic AI system using RAG and MCP tool-calling on AWS Bedrock, with authorization and PII controls built in from the start.",
    result: "About <b>3 minutes per application in UAT</b>, a 70% reduction.",
    tags: ["Python", "RAG", "MCP", "Strands", "AWS Bedrock"],
    metric: ["Agentic AI in a regulated domain"],
    facts: [["Role", "Software Engineer, Backend & AI"], ["Domain", "Auto-finance lending"], ["Stage", "Production build, measured in UAT"]]
  },
  {
    tag: "02 · Migration · Thoughtworks · 2022–24",
    title: "Monolith to microservices",
    problem: "An enterprise ordering platform ran as a single on-prem application.",
    built: "Re-architected it into distributed .NET Core microservices on Azure, and built a developer onboarding portal for teams integrating with the platform.",
    result: "<b>8× throughput</b> and <b>10× global transaction growth</b>. The portal cut integration time by <b>60%</b> and enabled <b>$16M+</b> in revenue.",
    tags: [".NET Core", "C#", "Azure", "Kubernetes", "Terraform"],
    metric: ["8×", "throughput"],
    facts: [["Role", "Application Developer Consultant"], ["Setting", "Client engagement, enterprise ordering"], ["Also", "$16M+ revenue · 60% faster integrations"]]
  },
  {
    tag: "03 · Developer tooling · First Help Financial · 2025",
    title: "AWS on a laptop",
    built: "A reproducible local AWS environment with SAM and LocalStack, plus shared Python libraries for structured logging and fault handling.",
    result: "<b>55% less</b> debugging time, with the libraries at <b>95%+</b> test coverage.",
    tags: ["Python", "SAM", "LocalStack", "Lambda", "Step Functions"],
    metric: ["−55%", "debug time"],
    facts: [["Role", "Software Engineer Intern"], ["Stack", "Serverless on AWS"], ["Coverage", "95%+ on shared libraries"]]
  },
  {
    tag: "04 · Side project · Live · 2026",
    title: "DreamChaserAI",
    problem: "Students applying abroad find it hard to know where they stand and how to write a strong statement of purpose.",
    built: "A full-stack app that sorts colleges into Dream, Target and Safe tiers and drafts a statement of purpose with Gemini on Vertex AI, with an inline editor and PDF export.",
    result: "Live at dream-chaser-ai.vercel.app.",
    tags: ["React", "FastAPI", "MongoDB", "Gemini", "Vertex AI"],
    metric: ["Live", "in production"],
    links: [["Live ↗", "https://dream-chaser-ai.vercel.app", "out-dreamchaser"], ["Code ↗", "https://github.com/SandeshJIT/DreamChaserAI", "out-dreamchaser-code"]],
    nodes: [
      ["st", "Student", "profile + scores", 4, 50],
      ["ui", "React app", "Vercel", 29, 50],
      ["api", "FastAPI", "JWT auth", 52, 50, 1],
      ["match", "Matching", "dream · target · safe", 84, 22],
      ["sop", "SOP writer", "Gemini · Vertex AI", 84, 78, 1],
      ["db", "MongoDB Atlas", "", 46, 88]
    ],
    edges: [["st", "ui", 1], ["ui", "api", 1], ["api", "match"], ["api", "sop", 1], ["api", "db"]]
  },
  {
    tag: "05 · Side project · RAG · 2025",
    title: "Career Advisor",
    built: "A fully self-hosted RAG backend. It parses PDF and DOCX résumés, chunks and embeds them, stores the vectors in Qdrant, and answers with a local Llama model. The whole stack runs in Docker Compose.",
    result: "Ingestion, embeddings, vector search and generation all run on self-hosted components.",
    tags: ["Python", "FastAPI", "Qdrant", "Ollama", "Docker"],
    metric: ["Self-hosted", "Docker Compose"],
    links: [["Code ↗", "https://github.com/SandeshJIT/career-advisor-backend", "out-career-advisor"]],
    nodes: [
      ["cv", "Résumé", "PDF · DOCX", 4, 50],
      ["parse", "Parser", "chunking", 26, 50],
      ["emb", "Embeddings", "nomic-embed-text", 50, 22, 1],
      ["vec", "Qdrant", "vector search", 50, 78],
      ["llm", "Llama 3.2", "via Ollama", 76, 50, 1],
      ["out", "Feedback", "per user type", 96, 50]
    ],
    edges: [["cv", "parse", 1], ["parse", "emb", 1], ["emb", "vec"], ["vec", "llm", 1], ["llm", "out", 1]]
  },
  {
    tag: "06 · Side project · Reinforcement learning · 2026",
    title: "RL Maze Solver",
    built: "A Gymnasium-compatible maze environment with procedurally generated mazes and traps, used to compare Q-learning, Double/Dueling DQN and PPO. Agents are tested on a single maze and across five mazes for generalization, with reproducible seeds.",
    result: "A reproducible comparison of tabular, deep and policy-gradient methods.",
    tags: ["Python", "Gymnasium", "Q-learning", "DQN", "PPO"],
    metric: ["3", "agent families compared"],
    links: [["Code ↗", "https://github.com/SandeshJIT/rl-maze-solver", "out-rl-maze"]],
    nodes: [
      ["gen", "Mazes", "random DFS · traps", 4, 50],
      ["env", "Gym env", "11×11 grid", 28, 50, 1],
      ["q", "Q-learning", "tabular", 60, 16],
      ["dqn", "DQN", "double · dueling", 60, 50],
      ["ppo", "PPO", "actor-critic · GAE", 60, 84],
      ["ev", "Evaluation", "1 vs 5 mazes", 92, 50, 1]
    ],
    edges: [["gen", "env", 1], ["env", "q"], ["env", "dqn", 1], ["env", "ppo"], ["q", "ev"], ["dqn", "ev", 1], ["ppo", "ev"]]
  }
];

const ROLES = [
  ["Software Engineer, Backend & AI", "First Help Financial · Durham, NC", "Jun 2026 – Nov 2026", "Built the underwriting assistant and core loan origination services. Wrote ADRs to align the team on design, and cut ticket delivery time 35% with an AI-first workflow.", true],
  ["Software Engineer Intern", "First Help Financial · Boston", "May 2025 – Dec 2025", "Serverless workflows, the local AWS environment, and shared Python libraries."],
  ["M.S. Computer Science", "Northeastern University · Boston", "Sep 2024 – May 2026", "4.0 GPA, Khoury College."],
  ["Application Developer Consultant", "Thoughtworks · Bengaluru", "Sep 2022 – Aug 2024", "Monolith-to-microservices migration and the developer onboarding portal. Practiced XP and TDD, and took part in on-call."],
  ["Systems Engineer", "Tata Consultancy Services · Bengaluru", "Aug 2021 – Aug 2022", "Spring Boot banking APIs, made 20% faster through query tuning."],
  ["B.E. Computer Science", "Jyothy Institute of Technology · Bengaluru", "Aug 2017 – Aug 2021", "Best Outgoing Student."]
];

/* ---------- render ---------- */
const esc = s => s.replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

document.getElementById("marquee").innerHTML =
  [...SKILLS, ...SKILLS].map(s => `<span>${esc(s)}</span><span class="sep">✳</span>`).join("");

function flowHTML(p) {
  const ix = x => 8 + x * 0.84;
  const pos = Object.fromEntries(p.nodes.map(n => [n[0], [ix(n[3]), n[4]]]));
  const paths = p.edges.map(([a, b, hot]) => {
    const [x1, y1] = pos[a], [x2, y2] = pos[b];
    const mx = (x1 + x2) / 2;
    const d = Math.abs(y1 - y2) < 1 || Math.abs(x1 - x2) < 1
      ? `M${x1} ${y1} L${x2} ${y2}`
      : `M${x1} ${y1} C${mx} ${y1} ${mx} ${y2} ${x2} ${y2}`;
    return `<path class="${hot ? "hot" : ""}" d="${d}"/>`;
  }).join("");
  const nodes = p.nodes.map(([, b, s, x, y, hl]) =>
    `<div class="node${hl ? " hl" : ""}" style="left:${ix(x)}%;top:${y}%"><b>${esc(b)}</b>${s ? `<small>${esc(s)}</small>` : ""}</div>`).join("");
  return `<div class="flow"><svg viewBox="0 0 100 100" preserveAspectRatio="none">${paths}</svg>${nodes}</div>`;
}

function factsHTML(p) {
  return `<div class="facts">
    <div class="big">${esc(p.metric[0])}</div>
    ${p.metric[1] ? `<div class="label">${esc(p.metric[1])}</div>` : ""}
    <dl>${p.facts.map(([k, v]) => `<dt>${esc(k)}</dt><dd>${esc(v)}</dd>`).join("")}</dl>
  </div>`;
}

document.getElementById("projects").innerHTML = PROJECTS.map(p => `
  <article class="proj reveal">
    <div>
      <span class="chip"><i></i>${esc(p.tag)}</span>
      <h3>${esc(p.title)}</h3>
      <dl class="pbr">
        ${p.problem ? `<dt>Problem</dt><dd>${p.problem}</dd>` : ""}
        <dt>Built</dt><dd>${p.built}</dd>
        <dt>Result</dt><dd>${p.result}</dd>
      </dl>
      <div class="tags">${p.tags.map(t => `<span>${esc(t)}</span>`).join("")}</div>
      ${p.links ? `<div class="links">${p.links.map(([l, h, ev]) => `<a href="${h}" target="_blank" rel="noopener" data-goatcounter-click="${ev}">${l}</a>`).join("")}</div>` : ""}
    </div>
    <div class="panel">
      ${p.nodes ? `<span class="metric">${esc(p.metric[0])} <small>${esc(p.metric[1])}</small></span>${flowHTML(p)}` : factsHTML(p)}
    </div>
  </article>`).join("");

document.getElementById("roles").innerHTML = ROLES.map(([t, org, when, blurb, now], i) => `
  <div class="role reveal${now ? " now" : ""}">
    <span class="n">${String(i + 1).padStart(2, "0")}</span>
    <div><h3>${esc(t)}</h3><div class="org label">${esc(org)}</div></div>
    <span class="when label">${esc(when)}</span>
    <p>${esc(blurb)}</p>
  </div>`).join("");

/* ---------- topographic background ---------- */
(function topo() {
  const svg = document.getElementById("topo");
  const W = 1600, H = 1000;
  svg.setAttribute("viewBox", `0 0 ${W} ${H}`);
  svg.setAttribute("preserveAspectRatio", "xMidYMid slice");
  let seed = 7;
  const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
  const peaks = [[260, 220], [1250, 300], [820, 760], [1500, 880], [120, 860]];
  let out = "";
  for (const [cx, cy] of peaks) {
    const ph = [rnd() * 6.28, rnd() * 6.28, rnd() * 6.28];
    for (let r = 40; r < 420; r += 34) {
      let d = "";
      for (let k = 0; k <= 72; k++) {
        const a = (k / 72) * Math.PI * 2;
        const rr = r * (1 + .16 * Math.sin(3 * a + ph[0]) + .09 * Math.sin(5 * a + ph[1]) + .05 * Math.sin(7 * a + ph[2] + r / 90));
        d += `${k ? "L" : "M"}${(cx + rr * Math.cos(a)).toFixed(1)} ${(cy + rr * .78 * Math.sin(a)).toFixed(1)}`;
      }
      out += `<path d="${d}Z"/>`;
    }
  }
  svg.innerHTML = `<g fill="none" stroke="rgba(241,236,226,0.055)" stroke-width="1">${out}</g>`;
})();

/* ---------- hero drift: rows slide apart on scroll and lean toward the pointer ---------- */
(function drift() {
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const rows = [...document.querySelectorAll(".hero-title .row")];
  let px = 0, tx = 0, queued = false;
  const paint = () => {
    queued = false;
    tx += (px - tx) * .12;
    const s = Math.min(scrollY, innerHeight);
    rows.forEach(r => {
      const d = parseFloat(r.dataset.drift);
      r.style.transform = `translateX(${(s * .18 + tx * 14) * d}px)`;
    });
    if (Math.abs(px - tx) > .002) tick();
  };
  const tick = () => { if (!queued) { queued = true; requestAnimationFrame(paint); } };
  // start after the rise-in animation so the two transforms don't fight
  setTimeout(() => {
    rows.forEach(r => (r.style.animation = "none"));
    addEventListener("scroll", tick, { passive: true });
    addEventListener("pointermove", e => { px = e.clientX / innerWidth - .5; tick(); }, { passive: true });
  }, 1100);
})();

/* ---------- fit diagrams to their panel instead of scrolling ---------- */
const FLOW_W = 560;
function fitFlows() {
  document.querySelectorAll(".flow").forEach(f => {
    const w = f.parentElement.clientWidth - 48;
    f.style.zoom = Math.min(1, w / FLOW_W);
  });
}
fitFlows();
addEventListener("resize", fitFlows);

/* ---------- analytics: count ?ref= tags, then hide them from the address bar ---------- */
// main.js runs before count.js loads, so these settings are in place when it counts.
// GoatCounter still reads the tags from location.search; the path stays clean.
window.goatcounter = Object.assign(window.goatcounter || {}, { path: location.pathname });
const TRACKING_PARAMS = /^(ref|src|source|campaign|utm_[a-z]+)$/;
function cleanAddressBar() {
  const url = new URL(location.href);
  const keys = [...url.searchParams.keys()].filter(k => TRACKING_PARAMS.test(k));
  if (!keys.length) return;
  keys.forEach(k => url.searchParams.delete(k));
  history.replaceState(history.state, "", url.pathname + url.search + url.hash);
}
// count.js is async and counts during its own load, which finishes before window "load".
// A tab opened in the background is counted when it becomes visible, so wait for that too.
addEventListener("load", () => {
  if (document.visibilityState === "visible") return setTimeout(cleanAddressBar, 0);
  document.addEventListener("visibilitychange", function once() {
    if (document.visibilityState !== "visible") return;
    document.removeEventListener("visibilitychange", once);
    setTimeout(cleanAddressBar, 0);
  });
});

/* ---------- nav + reveal ---------- */
const nav = document.getElementById("nav");
addEventListener("scroll", () => nav.classList.toggle("solid", scrollY > 40), { passive: true });
const io = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && (e.target.classList.add("in"), io.unobserve(e.target))), { threshold: .12 });
document.querySelectorAll(".reveal").forEach(el => io.observe(el));
