/* ---------- content ---------- */
const SKILLS = ["Python", "C#", "Java", "AWS Lambda", "Step Functions", "Bedrock", "AgentCore", "Strands", "MCP", "RAG", ".NET Core", "Spring Boot", "FastAPI", "Azure", "Kubernetes", "Terraform", "PostgreSQL", "SQS / SNS", "Datadog"];

const PROJECTS = [
  {
    tag: "01 · LLM agent · First Help Financial · 2026",
    title: "Underwriting assistant",
    problem: "Underwriters spent about <b>10 minutes per application</b> comparing loan versions and working through the calculations behind them.",
    built: "A RAG agent that reaches loan data only through narrow MCP tools. Authorization is checked before each tool runs, PII is redacted on the way in and out, and adverse-action wording is limited to approved codes. Every step is traced, so a reviewer can see what the agent did and why.",
    result: "Cut that review to <b>about 3 minutes in UAT</b>.",
    tags: ["Python", "Strands", "FastMCP", "AWS Bedrock", "AgentCore", "Datadog"],
    metric: ["10 → 3 min", "per application · UAT"],
    nodes: [
      ["u", "Underwriter", "asks a question", 6, 50],
      ["ag", "Strands agent", "Bedrock models", 30, 50, 1],
      ["mcp", "MCP tools", "FastMCP · auth per call", 62, 50, 1],
      ["loan", "Loan data", "versions · calcs", 94, 22],
      ["docs", "Application docs", "RAG", 94, 78],
      ["ans", "Answer", "PII redacted · approved codes", 32, 12],
      ["tr", "Traces", "CloudWatch · Datadog", 62, 88]
    ],
    edges: [["u", "ag", 1], ["ag", "mcp", 1], ["mcp", "loan"], ["mcp", "docs"], ["ag", "ans"], ["mcp", "tr"]]
  },
  {
    tag: "02 · Migration · Thoughtworks · 2022–24",
    title: "Monolith to microservices",
    problem: "A client's global ordering platform ran as a single on-prem application.",
    built: "Broke it into .NET Core microservices on Azure, running on Kubernetes. OAuth via Entra ID secures the services, Service Bus handles async messaging, and Terraform with Azure DevOps handles infrastructure and delivery. Profiling, parallel execution and SQL tuning made the hot paths faster.",
    result: "<b>8× throughput</b> and <b>10× global transactions</b>, with a <b>3×</b> speed-up on the slowest paths.",
    tags: [".NET Core", "C#", "Azure", "Kubernetes", "Terraform", "SQL Server"],
    metric: ["8×", "throughput"],
    nodes: [
      ["mono", "Monolith", "on-prem", 5, 50],
      ["gw", "API gateway", "OAuth · Entra ID", 30, 50],
      ["svc", "Microservices", ".NET Core", 57, 50, 1],
      ["bus", "Service Bus", "async messaging", 57, 86],
      ["k8s", "Kubernetes", "Azure", 84, 50, 1],
      ["iac", "Terraform", "Azure DevOps CI/CD", 84, 14],
      ["sql", "SQL Server", "tuned queries", 30, 86]
    ],
    edges: [["mono", "gw"], ["gw", "svc", 1], ["svc", "k8s", 1], ["svc", "bus"], ["iac", "k8s"], ["svc", "sql"]]
  },
  {
    tag: "03 · Developer platform · Thoughtworks · 2023",
    title: "Partner onboarding portal",
    problem: "Partners integrating with the ordering platform took a long time to get set up.",
    built: "A self-serve onboarding portal that walks developers through integration.",
    result: "Integration time down <b>60%</b>, and the portal enabled <b>$16M+</b> in revenue.",
    tags: [".NET Core", "Azure", "App Insights"],
    metric: ["$16M+", "revenue enabled"],
    nodes: [
      ["dev", "Partner", "new integration", 6, 50],
      ["portal", "Onboarding portal", "self-serve", 35, 50, 1],
      ["api", "Platform APIs", "versioned", 63, 50],
      ["live", "Live integration", "60% faster", 89, 50, 1],
      ["ai", "App Insights", "monitoring", 63, 14]
    ],
    edges: [["dev", "portal", 1], ["portal", "api", 1], ["api", "live", 1], ["api", "ai"]]
  },
  {
    tag: "04 · Dev environment · First Help Financial · 2025",
    title: "AWS on a laptop",
    problem: "Testing multi-step serverless workflows meant deploying to AWS.",
    built: "A reproducible local stack with SAM and LocalStack, plus shared Python libraries for structured logging, retries and fault handling, used across the team's services.",
    result: "<b>55% less</b> debugging time, with the libraries at <b>95%+</b> test coverage.",
    tags: ["Python", "SAM", "LocalStack", "Lambda", "Step Functions", "SQS / SNS"],
    metric: ["−55%", "debug time"],
    nodes: [
      ["eng", "Engineer", "laptop", 9, 50],
      ["ls", "SAM + LocalStack", "local AWS", 32, 50, 1],
      ["sf", "Step Functions", "Lambda", 58, 22],
      ["q", "SQS / SNS", "Kinesis", 58, 78],
      ["sdk", "Python SDKs", "logging · retries · 95%+", 85, 50, 1]
    ],
    edges: [["eng", "ls", 1], ["ls", "sf", 1], ["ls", "q"], ["sf", "sdk"], ["q", "sdk"]]
  },
  {
    tag: "05 · Side project · Live · 2026",
    title: "DreamChaserAI",
    problem: "Students applying abroad find it hard to know where they stand and how to write a strong statement of purpose.",
    built: "A full-stack app that sorts colleges into Dream, Target and Safe tiers and drafts a statement of purpose with Gemini on Vertex AI. It includes an inline editor and PDF export.",
    result: "Live and in use at dream-chaser-ai.vercel.app.",
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
  }
];

const ROLES = [
  ["Software Engineer, Backend & AI", "First Help Financial · Durham, NC", "Jun 2026 – Nov 2026", "Built the underwriting assistant and core loan origination services. Wrote ADRs to align the team on design, and cut ticket delivery time 35% with an AI-first workflow.", true],
  ["Software Engineer Intern", "First Help Financial · Boston", "May 2025 – Dec 2025", "Serverless workflows, the local AWS environment, and shared Python libraries."],
  ["M.S. Computer Science", "Northeastern University · Boston", "Sep 2024 – May 2026", "4.0 GPA, Khoury College."],
  ["Application Developer Consultant", "Thoughtworks · Bengaluru", "Sep 2022 – Aug 2024", "Monolith-to-microservices migration and the partner onboarding portal. XP, TDD and pairing every day, plus on-call."],
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

document.getElementById("projects").innerHTML = PROJECTS.map(p => `
  <article class="proj reveal">
    <div>
      <span class="chip"><i></i>${esc(p.tag)}</span>
      <h3>${esc(p.title)}</h3>
      <dl class="pbr">
        <dt>Problem</dt><dd>${p.problem}</dd>
        <dt>Built</dt><dd>${p.built}</dd>
        <dt>Result</dt><dd>${p.result}</dd>
      </dl>
      <div class="tags">${p.tags.map(t => `<span>${esc(t)}</span>`).join("")}</div>
      ${p.links ? `<div class="links">${p.links.map(([l, h, ev]) => `<a href="${h}" target="_blank" rel="noopener" data-goatcounter-click="${ev}">${l}</a>`).join("")}</div>` : ""}
    </div>
    <div class="panel">
      <span class="metric">${esc(p.metric[0])} <small>${esc(p.metric[1])}</small></span>
      ${flowHTML(p)}
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

/* ---------- nav + reveal ---------- */
const nav = document.getElementById("nav");
addEventListener("scroll", () => nav.classList.toggle("solid", scrollY > 40), { passive: true });
const io = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && (e.target.classList.add("in"), io.unobserve(e.target))), { threshold: .12 });
document.querySelectorAll(".reveal").forEach(el => io.observe(el));
