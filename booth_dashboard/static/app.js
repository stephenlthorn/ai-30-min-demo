/* =========================================================
   iSoftStone × TiDB × Microsoft — May 8 2026 booth deck
   -----------------------------------------------------------
   Two responsibilities:
     1. Slide navigation (tabs, arrow keys, prev/next, #hash)
     2. The interactive "agent-learn" demo on slide 4
   ========================================================= */

/* ---------- 1. SLIDE NAVIGATION ---------- */

const SLIDES = [
  { id: "title",       label: "Title",            shortLabel: "0" },
  { id: "about",       label: "About",            shortLabel: "1" },
  { id: "about-tidb",  label: "About TiDB",       shortLabel: "2" },
  { id: "simplify",    label: "Simplification",   shortLabel: "3" },
  { id: "why",         label: "Architecture",     shortLabel: "4" },
  { id: "convergence", label: "Customer Proof",   shortLabel: "5" },
  { id: "sarah",       label: "Urgent Example",   shortLabel: "6" },
  { id: "memories",    label: "Three Memories",   shortLabel: "7" },
  { id: "maya",        label: "Maya's Year",      shortLabel: "8" },
  { id: "librarian",   label: "Token Tax",        shortLabel: "9" },
  { id: "manus",       label: "AI-Native Threat", shortLabel: "10" },
  { id: "whynow",      label: "Closing",          shortLabel: "11" }
];

let currentSlide = 0;

const $ = (id) => document.getElementById(id);
const wait = (ms) => new Promise((r) => setTimeout(r, ms));

/* ---------- SPEAKER NOTES (kept for reference; on-screen panel removed)
   Full talk track lives in /talk_track.md - the canonical document. */
const SPEAKER_NOTES = {
  title:
    "[~2 min] OPEN COLD. Don't say hello. Don't thank anyone. The first sentence is your hello.\n\nLEAD WITH THE 4-SYSTEM AI STACK QUESTION. It's anchored in the production reference architectures Anthropic, LangChain, AWS all publish - so it's defensible.\n\nVERBATIM OPENING:\n\n'By the end of the next 45 minutes you'll be able to walk into your Monday staff meeting and ask the one question that tells you whether your data infrastructure is building your business - or being maintained by it.\n\n*(pause)*\n\nFor every AI feature we ship - how many separate data systems does it touch?\n\n*(pause)*\n\nThe answer for most teams - and this is straight out of the production reference architectures Anthropic, LangChain, and AWS all publish - is four. A vector store for embeddings. A keyword search index for BM25. A relational database for the source of truth. An embedding pipeline with orchestration glue tying them together.\n\nFour systems to ship one AI feature. Each needs an engineer who knows it cold. Each fails differently. Each is a 3 AM page.\n\n*(slow down)*\n\nMultiply that by the AI features on your roadmap. By the business units shipping their own pilots. The same architectural sprawl that's been quietly draining your team for a decade is about to compound - because every AI feature ships with its own four-system tax.\n\nThe companies winning aren't doing it with smarter AI. They're doing it with simpler infrastructure.\n\nYour engineers should build the business. Not the plumbing.'\n\nThen About slide.\n\nCLAIM DISCIPLINE: '4 systems for one AI feature' is sourceable - it's the standard RAG/agent reference architecture published by Anthropic, LangChain, AWS. Defensible by example: name any one (vector store, BM25 search, relational DB, glue) and the audience nods. DO NOT cite the old '40-60% of engineering on plumbing' or '5-12 operational systems' - those weren't sourced.",

  about:
    "[~1 min] ONE SPOKEN LINE - establish credibility fast, then move on. Don't read the slide.\n\n'Quick context on me - Naval Academy NLP work on 580 million tweets, infantry officer in the Marines, then open-source databases at Percona, in-house LLMs at Sosivio before there was an API to call, AI tooling for the US Government at BabelStreet. I've watched four versions of this exact mistake. Now I run Solution Engineering at TiDB.'\n\n45-60 seconds. Don't dwell on the cards.",

  "about-tidb":
    "[~4 min] LEAD WITH SIMPLIFICATION. The audience knows the scale-out pain - sharding, replication, ops engineers. Logos prove TiDB freed those engineers.\n\nKEY ARC:\n- The MySQL/Postgres scale-out moment - sharding strategies, multi-reader/single-writer topology, replication lag, expert engineers as a team and a budget line.\n- TiDB does that scale-out automatically. MySQL wire protocol, distributed SQL underneath. From Spanner papers, 2015. 11 years in production.\n- Pinterest, Flipkart, LinkedIn, Plaid, Square, Bolt, Atlassian.\n\nTHEN ADD AI (secondary):\n- Manus, Dify, two top-10 labs under NDA - arrived from a different direction. They never had a sharded MySQL fleet. They architected for simplicity from day one because they couldn't afford your infrastructure team.\n\nLAND: 'Same architecture, two journeys. Enterprise from data platform consolidation. AI from headcount constraint. Same place: one database that eliminates complexity at any scale.'\n\nBRIDGE TO SIMPLIFY: 'Let me show you where engineering time actually goes today - because that's the bigger number you're going to want to ask about Monday.'",

  "simplify":
    "[~6 min] THE SPINE - hero slide. The headline is '4 → 1'. Numbers on screen are sourceable: '4' = the standard AI reference architecture (Anthropic, LangChain, AWS); '1' = TiDB.\n\nKEY ARC:\n- The standard AI architecture (RAG tutorials, Anthropic / LangChain / AWS reference architectures) is FOUR SEPARATE SYSTEMS:\n  1. Vector store for embeddings (Pinecone, Weaviate, pgvector)\n  2. Keyword / BM25 search index (Elasticsearch, OpenSearch)\n  3. Relational DB - source of truth\n  4. Embedding pipeline + orchestration glue (LangChain, LlamaIndex, custom Python)\n\n- Four systems to ship ONE AI feature.\n- Each one needs an engineer who knows it cold. Each fails differently. Each has its own consistency model.\n- If vector store and relational DB drift, your agent recommends a refunded product. That's the sync bug, dressed up.\n\nTHE COMPOUNDING LINE (read it slowly off the slide):\n- '4 systems × N AI features on your roadmap = the bill nobody talks about.'\n- This is the line that turns this slide from a single-feature problem into a roadmap problem. Internal copilot. Store-ops agent. Supply-chain agent. Each ships its own four-system tax. Same four engineers on call. Same sync bug, four ways.\n\nKEY LINE: 'The question isn't whether you can afford four systems per AI feature. It's whether you can afford to keep building that way.'\n\nBRIDGE TO ARCHITECTURE: 'Here's what those four systems actually look like in production - and what consolidating them looks like.'",

  convergence:
    "[~6 min] CUSTOMER PROOF. **Now positioned right after the architecture diagram** - the audience just saw the picture, this slide proves the picture works at scale.\n\nOpen with: 'These are illustrative - not the full list.'\n\nENTERPRISE ROW (lead here - engineering story, not performance story):\n\n- PINTEREST: 6 → 1. Six separate data systems collapsed onto one TiDB cluster. Engineers stopped being a database operations team.\n- FLIPKART: 700+ MySQL clusters → 1. Order-of-magnitude less to operate. Same engineers, way more product surface.\n- PLAID: 26 engineer-weeks of toil eliminated in one quarter. Two engineers freed for an entire quarter.\n- ATLASSIAN (★ flag this one explicitly): 750+ Postgres clusters → 16 global TiDB clusters. Forge plugin platform - Jira has 800+ tables per tenant, 3M+ tables total. 6-7x DDL throughput improvement. Zero-downtime major version upgrades. **Say out loud: 'This one has nothing to do with AI. This is the operational debt you already have, today, before AI multiplies it. Atlassian collapsed it because it was eating their engineers.'**\n- SQUARE: Payments and real-time analytics on one layer. No ETL pipeline between OLTP and reporting.\n\nTHEN AI-NATIVE (secondary - same architecture, different starting point):\n- DIFY: 500K+ containers → 1. 90% ops reduction.\n- MANUS: Millions of agent branches on one cluster. $5/month/user pricing because per-DB cost scales to zero.\n- TWO TOP-10 AI LABS (NDA) - same architecture, same reason.\n\nLAND: 'Two journeys, one architecture.'\n\nBRIDGE TO SARAH: 'You don't have a Pinterest-scale problem yet. But there's one workload that's about to put you there faster than anything else. Let me show you the most urgent example.'",

  sarah:
    "[~3 min] THE URGENT EXAMPLE. AI is the SYMPTOM that the data architecture problem is now unsurvivable. Pick ONE vignette.\n\nWALK THE CHAT TABS:\n- Sarah - $4,800 VIP from 3 weeks ago. Tonight the agent has no idea who she is. Same script. Same stranger.\n\nNAME THE THREE-VICTIM IMPACT:\n- Customer: VIP treated like a stranger\n- Operations: support escalation queue grows\n- Engineering: 6 weeks of glue code, half doesn't work\n\nTHE THREE FAILURE MODES (read each):\n- NEVER WRITTEN\n- NOT FINDABLE\n- CONTEXT ROT\n\nKEY LINE: 'No memory - by design. This is not a model problem. It's the same data architecture problem you just saw - the four-system stack we drew two slides ago. Your enterprise has solved data architecture problems before. The five companies in the proof slide solved this exact one - they just solved it before AI made it urgent.'\n\nBRIDGE TO MEMORIES: 'What does the answer look like? Three patterns of memory the agent needs - and TiDB makes all three live in one ACID query.'",

  why:
    "[~3 min] THE ARCHITECTURE - 4 → 1 made visual. **Now positioned in the simplification half of the talk** (right after Simplify, before Customer Proof). This is the diagram CIOs will remember.\n\nLEFT (Fragmented - walk it slowly):\n- The same 4 systems we just named, drawn out:\n  - Vector DB (semantic search)\n  - Search DB (BM25 / keyword)\n  - SQL DB (agent memory / source of truth)\n  - Analytics DB (signals)\n- Agent at the top: 'which version of reality is correct?'\n- Sync issues are visual: 'sync broke overnight,' 'recommendations stale,' 'customer delete missed.'\n- Name them out loud - these are the 3 AM pages.\n\nRIGHT (TiDB):\n- Same four capabilities. One operational data layer. MySQL wire protocol. One transaction. One audit log.\n- ONE TEAM operates ONE system instead of four.\n\nKEY LINE: 'This isn't an AI architecture. This is a data architecture. The same picture applies to your operational stack today - and it's the picture that gets worse with every AI feature you ship.'\n\nLAND: 'Memory is infrastructure. So is the data layer underneath it. Neither belongs in four systems.'\n\nBRIDGE TO CUSTOMER PROOF: 'Architecture is real. Let me show you who already collapsed it - five enterprises and four AI labs.'",

  memories:
    "[~2 min] VOCABULARY PLANT - tighter. Quick walk so audience has labels for the demo.\n\n- EPISODIC - what happened. Per-customer, time-stamped, auditable. Example: Maya returned a size 4 wrap dress on April 21.\n- SEMANTIC - what we learned. Cross-customer, compounding. Bias-cut linen runs small - +1 size for relaxed weaves. ONE pays the cost; ALL benefit.\n- PROCEDURAL - what works. Strategy memory. Check returns first, confirm size, suggest fit alternatives.\n\nKEY LINE: 'Three patterns. Three access shapes. One database - because in TiDB they're three queries against the same ACID boundary, not three more systems for your team to operate.'\n\nBRIDGE TO MAYA: 'Now watch all three fire in real time.'",

  maya:
    "[~6 min] THE DEMO - COMPRESSED. Drop Day 22 (stranger benefits). Frame every beat as 'one ACID query vs four systems your engineering team would have to maintain.' The demo is now PROOF OF THE SIMPLIFICATION SPINE.\n\nOPEN WITH SIMP FRAMING: 'Maya is a customer of yours. She's also a user of your data infrastructure. Two kinds of users, one data layer. If you stand up a separate stack for the agent, you're operating two infrastructures and your team is now expert in two systems.'\n\nDAY 1 - First contact. Fleet has 1.2M lessons. ONE QUERY ON TIDB. THREE SYSTEMS ON THE ALTERNATIVE.\n\nDAY 14 - Returns + reasons. Order outcome AND reasoning commit together. ONE TRANSACTION ON TIDB. TWO SYSTEMS HOPING THEY STAYED IN SYNC.\n\n[SKIP DAY 21 IF SHORT. SKIP DAY 22 ENTIRELY.]\n\nDAY 60 (★ PAYOFF) - Read the agent's reply slowly. End on 'Nothing on this list is something you'd return.' Then: '47 lines of glue aren't free. Somebody wrote them. Somebody maintains them. Somebody gets paged when they break. The headline isn't faster - nobody on your team has to operate it.'\n\nDAY 90 - The audit. Compliance asks why. Episodic memory IS the audit trail. Six-week reconciliation project on the alternative. ONE QUERY ON TIDB.\n\nFINAL LINE: 'Twelve months of compounding intelligence in six clicks. ONE engineering team, not three. Now let's look at what running this costs.'",

  librarian:
    "[~4 min] TOKEN TAX + ENGINEERING REALITY - hammer the engineering angle harder.\n\nTHREE TIERS:\n- Naive RAG: ~$0.31/query, $310K/day at 1M queries\n- Cached RAG: ~$0.04/query, $40K/day\n- Curated context (~580 tokens via assemble_context): ~$0.0095/query, $9.5K/day. 32x vs naive, 4x vs cached.\n\nKEY LINE: 'Even RAG done right is 4x more than curated. Bigger context window is a bigger meter, not a better answer.'\n\nTHEN THE ENGINEERING-REALITY BRIDGE (this is the SIMP angle):\n- Production reference architecture (Anthropic, LangChain, AWS) needs vector search, BM25, AND relational state - synced, consistent, queried together.\n- On a fragmented stack, that's three systems your team builds and maintains. POC stage works. Scale arrives. Cost AND complexity collide. Your team becomes a database operations team instead of an AI team.\n- So instead of curating, the industry sells you bigger context windows. Bigger meter, paid in tokens AND engineering effort.\n- On TiDB: one assemble_context() call, one ACID query. The complexity that breaks at scale never gets built. The team you'd have hired gets to build something else.\n\nLAND: 'The team you'd have hired to maintain it gets to build something else.'\n\nBRIDGE TO MANUS: 'Last data point - and it's about competitive threat.'",

  manus:
    "[~4 min] THE AI-NATIVE THREAT. Reframe Manus as competitive threat, not just unit economics.\n\nTHE NUMBERS:\n- $5/month per user\n- Cheapest hosted DB anywhere: $6/month\n- Negative gross margin before any inference\n\nWHY IT WORKS:\n- Per-DB cost on TiDB scales to zero when idle\n- No infrastructure team\n- No replication topology to maintain\n\nKEY LINE (say slowly): 'Manus isn't winning because their AI is better than yours. They're winning because they don't carry your infrastructure debt. They architected for simplicity from day one. Their engineers spend their time on the AI itself - not on the database team that operates the database team's databases.'\n\nGENERALIZE TO INTERNAL AGENTS:\n- Internal copilot for 10K distributors\n- Store-ops agent for 600 stores\n- Supply-chain agent against your WMS\n\nTHREE BILLS:\n- Per-query cost x seat count = model bill\n- Per-tenant infra cost x tenant count = cloud bill\n- Engineering effort x headcount = the bill nobody talks about\n\nLAND (avoid overclaiming): 'TiDB is what made all three defensible for Manus. Same lever exists for you. Different scale, same math.'\n\nBRIDGE TO CLOSING: 'Here's what you walk out with.'",

  whynow:
    "[~5 min] CLOSING. Four pillars. Two Monday questions - LEAD WITH SYSTEM-COUNT ONE (it's observable, defensible).\n\nFIRST - read the title quartet on screen, slowly:\n'The model forgets. The platform remembers. The human decides. The engineers build the business.'\n\nWalk the four:\n- MODEL forgets - stateless by design. Don't fix with bigger window - bigger meter.\n- PLATFORM remembers - operational data layer. Three memories, one ACID boundary, MySQL-compatible.\n- HUMAN decides - engineers stop digging through logs, start curating the playbooks.\n- ENGINEERS BUILD - not maintaining nine systems. Shipping product.\n\nTWO MONDAY QUESTIONS (4-system question leads):\n\n1. (LEAD) 'For every AI feature we ship - how many separate data systems does it touch?'\n   - Answer of 4 (vector store, search index, relational DB, glue) = standard architecture. Defensible at one feature. By feature 5, the four-system tax is what your engineers are doing instead of building feature 6. Pinterest collapsed 6→1, Flipkart 700→1, Plaid 26 wks back, Dify 500K→1. Architecture is real and proven.\n\n2. 'Where, exactly, does our agent's memory live? Show me the database.'\n   - Four systems and a sync job = roadmap risk. Same architecture problem the first answer warned about.\n\nLet that land. Don't fill the silence.\n\nFINAL LINES: 'One database. Multiple workloads. One ACID boundary. Engineers building the business, not the plumbing.'\n\nThen point at QR: 'Find me at the booth. Happy to map your current data architecture and tell you what consolidating it would free up. No pitch. Diagnostic only.'"
};

/* Sarah slide — tab switcher */
function sarahTab(idx) {
  const s0 = document.getElementById("sarah-session-0");
  const s1 = document.getElementById("sarah-session-1");
  if (s0) s0.style.display = idx === 0 ? "" : "none";
  if (s1) s1.style.display = idx === 1 ? "" : "none";
  document.querySelectorAll(".stab").forEach((b, i) => {
    b.classList.toggle("stab-active", i === idx);
  });
}

function showSlide(idx, push = true) {
  if (idx < 0 || idx >= SLIDES.length) return;

  // hide every slide + tab
  document.querySelectorAll(".slide, .slide-title").forEach((s) => s.classList.remove("shown"));
  document.querySelectorAll(".tab").forEach((t) => t.classList.remove("active"));

  const slideEl = document.getElementById("slide-" + SLIDES[idx].id);
  const tabEl = document.getElementById("tab-" + SLIDES[idx].id);
  if (slideEl) slideEl.classList.add("shown");
  if (tabEl) tabEl.classList.add("active");

  // counter in top-right
  $("slideCounter").textContent =
    String(idx).padStart(2, "0") + " / " + String(SLIDES.length - 1).padStart(2, "0");

  // prev/next buttons
  $("prevBtn").disabled = idx === 0;
  $("nextBtn").disabled = idx === SLIDES.length - 1;

  currentSlide = idx;
  window.scrollTo({ top: 0, behavior: "instant" });

  // sync URL hash so links work
  if (push) {
    const hash = "#" + SLIDES[idx].id;
    if (window.location.hash !== hash) {
      history.pushState({ idx }, "", hash);
    }
  }
}

function next() { if (currentSlide < SLIDES.length - 1) showSlide(currentSlide + 1); }
function prev() { if (currentSlide > 0) showSlide(currentSlide - 1); }

// hash routing — if someone lands on /#demo, jump straight there
function loadFromHash() {
  const hash = window.location.hash.slice(1);
  const idx = SLIDES.findIndex((s) => s.id === hash);
  if (idx >= 0) showSlide(idx, false);
  else showSlide(0, false);
}

window.addEventListener("popstate", loadFromHash);

// keyboard nav
document.addEventListener("keydown", (e) => {
  // ignore keys if the user is typing somewhere (nothing in this deck, but defensive)
  if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return;

  if (e.key === "ArrowRight" || e.key === "PageDown") { e.preventDefault(); next(); }
  else if (e.key === "ArrowLeft" || e.key === "PageUp") { e.preventDefault(); prev(); }
  else if (e.key === "Home") { e.preventDefault(); showSlide(0); }
  else if (e.key === "End") { e.preventDefault(); showSlide(SLIDES.length - 1); }
  else if (/^[0-9]$/.test(e.key)) {
    const n = parseInt(e.key, 10);
    if (n < SLIDES.length) { e.preventDefault(); showSlide(n); }
  } else if (e.key === "r" || e.key === "R") {
    // R resets the demo only if we're on the demo slide
    if (SLIDES[currentSlide].id === "demo") resetDemo();
  } else if (e.key === "q" || e.key === "Q") {
    // Q jumps straight to the Q&A appendix (slide indices > 9 aren't reachable via digit keys)
    const idx = SLIDES.findIndex((s) => s.id === "qa");
    if (idx >= 0) { e.preventDefault(); showSlide(idx); }
  } else if (e.key === "c" && (e.ctrlKey || e.metaKey) && e.shiftKey) {
    // Ctrl+Shift+C — jump to demo cases directly (1/2/3 already reserved for slide nav)
    // no-op here; documented in queries.md
  }
});

/* ---------- 2. VINEYARD VINES BEFORE/AFTER DEMO ---------- */

/* The conversation script. Both panels use the SAME customer messages.
   Only the bot side differs — that's the entire point. */
const VV_SCRIPT = [
  {
    side: "customer",
    text:
      "Hi! I bought the linen shift in cream a few weeks ago and loved it. Looking for something for a beach trip in two weeks — what would you recommend?",
    typeMs: 1100
  },
  {
    side: "bot",
    typeMs: 1400,
    before:
      "Hi there! 🌊 Happy to help you find your next favorite. To get you the right recommendations, could you tell me what size you usually wear and any color preferences?",
    after:
      "Hi Maya! 🌊 Welcome back — so glad the cream linen shift worked out. For a beach trip, the new cotton voile midi just dropped in your usual 8 (the size-up rule for relaxed weaves still applies). Same easy fit, lighter for the heat. Want it in cream, or try the coral this time?"
  },
  {
    side: "customer",
    typeMs: 900,
    before: "I'm a 6 in linen — but didn't I tell you that last time?",
    after: "Coral — let's try something different! Add it to my cart please."
  },
  {
    side: "bot",
    typeMs: 1300,
    before:
      "Apologies, I don't have access to your previous conversations. Here are some popular summer pieces in size 6 — let me know if you'd like to filter by color or fabric.",
    after:
      "Done — coral cotton voile midi, size 8, in your cart ($148). Free shipping kicks in at $150 — the matching scarf would push you over and tie the look together. Want me to add it?"
  }
];

const VV_OUTCOMES = {
  before:
    "8 more turns of back-and-forth re-entering size, fit history, and color preferences. Customer left without adding to cart.",
  after:
    "Cart total: $172 · checked out in 4 turns. Memory of cream + linen + size-up rule turned a session into a sale."
};

let vvPlaying = false;
let vvTimers = [];
let vvCompleted = false;

function vvClearChildren(node) {
  while (node.firstChild) node.removeChild(node.firstChild);
}

function vvAddTyping(panelId) {
  const body = $(panelId);
  const typing = document.createElement("div");
  typing.className = "vv-typing vv-typing-current";
  for (let i = 0; i < 3; i++) typing.appendChild(document.createElement("span"));
  body.appendChild(typing);
  body.scrollTop = body.scrollHeight;
  return typing;
}

function vvRemoveTyping(panelId) {
  const body = $(panelId);
  const t = body.querySelector(".vv-typing-current");
  if (t) t.remove();
}

function vvAddMessage(panelId, side, text) {
  const body = $(panelId);
  const msg = document.createElement("div");
  msg.className = side === "customer" ? "vv-msg vv-msg-customer" : "vv-msg vv-msg-bot";
  msg.textContent = text;
  body.appendChild(msg);
  body.scrollTop = body.scrollHeight;
}

function vvScheduleStep(delay, fn) {
  vvTimers.push(setTimeout(fn, delay));
}

function vvPlay() {
  if (vvPlaying) return;
  vvResetVV(false);
  vvPlaying = true;

  const playBtn = $("vvPlay");
  const resetBtn = $("vvReset");
  playBtn.disabled = true;
  resetBtn.disabled = true;

  let cursor = 600;

  for (const step of VV_SCRIPT) {
    const beforeText = step.side === "customer" ? (step.before ?? step.text) : step.before;
    const afterText  = step.side === "customer" ? (step.after  ?? step.text) : step.after;

    vvScheduleStep(cursor, () => {
      vvAddTyping("vv-msgs-before");
      vvAddTyping("vv-msgs-after");
    });
    cursor += step.typeMs;

    vvScheduleStep(cursor, () => {
      vvRemoveTyping("vv-msgs-before");
      vvRemoveTyping("vv-msgs-after");
      vvAddMessage("vv-msgs-before", step.side, beforeText);
      vvAddMessage("vv-msgs-after", step.side, afterText);
    });
    cursor += 800;
  }

  vvScheduleStep(cursor + 400, () => {
    $("vv-outcome-text-before").textContent = VV_OUTCOMES.before;
    $("vv-outcome-text-after").textContent = VV_OUTCOMES.after;
    $("vv-outcome-before").classList.add("shown");
    $("vv-outcome-after").classList.add("shown");
  });

  vvScheduleStep(cursor + 1400, () => {
    $("reveal").classList.add("shown");
    $("reveal").scrollIntoView({ behavior: "smooth", block: "start" });
    vvPlaying = false;
    vvCompleted = true;
    playBtn.disabled = false;
    resetBtn.disabled = false;
    playBtn.textContent = "▶  Replay conversation";
  });
}

function vvResetVV(scrollUp = true) {
  vvTimers.forEach(clearTimeout);
  vvTimers = [];
  vvPlaying = false;
  vvCompleted = false;

  vvClearChildren($("vv-msgs-before"));
  vvClearChildren($("vv-msgs-after"));
  $("vv-outcome-before").classList.remove("shown");
  $("vv-outcome-after").classList.remove("shown");
  $("vv-outcome-text-before").textContent = "—";
  $("vv-outcome-text-after").textContent = "—";
  $("reveal").classList.remove("shown");

  const playBtn = $("vvPlay");
  const resetBtn = $("vvReset");
  if (playBtn) {
    playBtn.disabled = false;
    playBtn.textContent = "▶  Play conversation";
  }
  if (resetBtn) resetBtn.disabled = false;

  if (scrollUp) window.scrollTo({ top: 0, behavior: "smooth" });
}

/* alias kept so the existing keyboard "R" handler still works */
function resetDemo() {
  vvResetVV(true);
}

/* ---------- 3. MAYA'S YEAR — interactive demo ---------- */
/* 6-step compounding-architecture demo. Each step renders a chat
   conversation, the SQL behind it, and a side-by-side cluster-metrics
   panel showing TiDB winning vs the 4-system Fragmented stack. */

function highlightSQL(sql) {
  if (!sql) return "";
  let html = sql.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  // Comments first (so they don't get keyword-replaced inside)
  html = html.replace(/(--[^\n]*)/g, '<span class="sql-comment">$1</span>');
  // Strings
  html = html.replace(/'([^']*)'/g, "<span class=\"sql-string\">'$1'</span>");
  // Numbers
  html = html.replace(/\b(\d+(?:\.\d+)?)\b/g, '<span class="sql-num">$1</span>');
  // Keywords (case-insensitive, ordered to match longest first)
  const keywords = [
    "ON DUPLICATE KEY UPDATE", "ORDER BY", "GROUP BY", "INSERT INTO",
    "SELECT", "FROM", "WHERE", "INSERT", "UPDATE", "SET", "VALUES",
    "BEGIN", "COMMIT", "ROLLBACK", "AND", "OR", "NOT", "NULL", "LIMIT",
    "JOIN", "ON", "AS", "DISTINCT", "HAVING", "CASE", "WHEN", "THEN",
    "ELSE", "END", "LEAST", "GREATEST", "VEC_COSINE_DISTANCE", "AUTO_EMBED",
    "DESC", "ASC", "BETWEEN", "IN"
  ];
  const kwRegex = new RegExp("\\b(" + keywords.join("|") + ")\\b", "g");
  html = html.replace(kwRegex, '<span class="sql-keyword">$1</span>');
  return html;
}

const MAYA_STEPS = [
  {
    avatar: "M",
    name: "Maya — first session",
    sub: "Day 1 · cold start on a warm fleet",
    memoryTypes: [],
    gauge: { tidb: 1, frank: 4, tidbLabel: "1 cluster, warm", frankLabel: "4 systems, all cold" },
    messages: [
      { who: "user",  text: "Hi! Looking for a few new pieces — work, school pickup, the occasional date night." },
      { who: "agent", text: "Welcome, Maya. Tell me about your style — minimalist, statement, somewhere in between?" }
    ],
    sql: "SELECT * FROM agent_episodic\nWHERE customer_id = 'maya_8421';\n-- 0 rows · cold start, but the fleet has 1.2M lessons",
    tidb: [
      ["Episodic memory for Maya", "0 rows", null],
      ["Fleet memory available", "1,247,883 lessons", "good"],
      ["Lookup latency", "4 ms", "good"],
      ["Systems involved", "1", "good"]
    ],
    frank: [
      ["Azure SQL profile", "empty", "bad"],
      ["Pinecone namespace", "not provisioned", "bad"],
      ["Snowflake events", "0 (cold)", "bad"],
      ["Cross-system fleet learning", "doesn't exist", "bad"]
    ],
    deltaPoints: [
      "Maya is new - fleet already warm with 1.2M lessons",
      "Fragmented stack: every system starts cold"
    ]
  },
  {
    avatar: "M",
    name: "Maya — return processing",
    sub: "Day 14 · 2 returns, with reasons",
    memoryTypes: ["episodic"],
    gauge: { tidb: 1, frank: 4, tidbLabel: "1 ACID transaction · 18ms", frankLabel: "4 calls · partial-failure risk" },
    messages: [
      { who: "system", text: "Order #4471 returned · Order #4472 returned" },
      { who: "user",   text: "The first didn't fit at the bust. The second was just too preppy for me." },
      { who: "agent",  text: "Got it — I've noted both. Sizing for that brand and your style preference. I won't recommend either pattern again." }
    ],
    sql: "BEGIN;\n  UPDATE orders SET status = 'returned' WHERE id IN (4471, 4472);\n  INSERT INTO agent_episodic\n  VALUES (..., AUTO_EMBED('tight at bust'), 0.85);\nCOMMIT;\n-- 1 ACID transaction · all-or-nothing",
    tidb: [
      ["Transaction", "1 ACID txn", "good"],
      ["Atomic operations", "outcome + reasoning + embedding", "good"],
      ["AUTO_EMBED inline", "no preprocess pipeline", "good"],
      ["Latency", "18 ms", "good"],
      ["Partial-failure surface", "0", "good"]
    ],
    frank: [
      ["UPDATE Azure SQL", "38 ms", "warn"],
      ["INSERT Pinecone", "140 ms · separate call", "warn"],
      ["Queue Snowflake event", "12 ms · visible in 6 h", "bad"],
      ["UPDATE Redis session", "12 ms", "warn"],
      ["Distributed transaction", "none — partial-failure risk", "bad"]
    ],
    deltaPoints: [
      "Outcome + reasoning commit together in 1 ACID txn",
      "Fragmented stack: hopes nothing fails between calls"
    ]
  },
  {
    avatar: "F",
    name: "Fleet event · system-wide",
    sub: "Day 21 · pattern reaches critical confidence",
    memoryTypes: ["semantic"],
    gauge: { tidb: 1, frank: 5, tidbLabel: "Live to all agents · 60s", frankLabel: "Quarterly batch · ~90 days" },
    messages: [
      { who: "system", text: "Fleet pattern detected: 'brand_x_runs_small_at_bust'" },
      { who: "system", text: "Maya is the 49,848th data point · cosine-merged · confidence 0.93 → 0.94" },
      { who: "system", text: "Propagated to 12,400 active agents · 60 s elapsed" }
    ],
    sql: "INSERT INTO fleet_memory (claim, embedding, confidence)\nVALUES ('brand_x_runs_small_at_bust', AUTO_EMBED(...), 0.94)\nON DUPLICATE KEY UPDATE\n  evidence_count = evidence_count + 1,\n  confidence = LEAST(0.99, confidence + 0.01);",
    tidb: [
      ["Cosine-similarity dedup", "merged into existing memory", "good"],
      ["Confidence delta", "0.93 → 0.94", "good"],
      ["Evidence count", "49,847 → 49,848", "good"],
      ["Propagation to all agents", "60 s", "good"],
      ["Batch jobs required", "0", "good"],
      ["Model retraining required", "0", "good"]
    ],
    frank: [
      ["Snowflake row inserted", "available in 6 h", "warn"],
      ["ML team picks it up", "next quarterly review", "bad"],
      ["Model retrain required", "yes — costs $$$", "bad"],
      ["New model deployed", "Q3 2026", "bad"],
      ["Time-to-fleet-intelligence", "~90 days", "bad"]
    ],
    deltaPoints: [
      "TiDB: live to every agent in 60 seconds",
      "Snowflake: same insight in next quarter's batch",
      "~130,000× faster, zero engineer hours"
    ]
  },
  {
    avatar: "L",
    name: "Lena · never met Maya",
    sub: "Day 22 · stranger benefits from Maya's data",
    memoryTypes: ["semantic"],
    gauge: { tidb: 1, frank: 5, tidbLabel: "1 vector query · 12ms", frankLabel: "Cross-namespace impossible" },
    messages: [
      { who: "user",  text: "Browsing the new spring collection from brand X — anything you'd recommend?" },
      { who: "agent", text: "Heads up — this brand tends to run small at the bust. Want me to size up by one?" },
      { who: "user",  text: "...Yes, actually. How did you know that?" },
      { who: "agent", text: "Other customers' fit feedback. We learn together — and it stays anonymous." }
    ],
    sql: "SELECT claim, confidence FROM fleet_memory\nWHERE VEC_COSINE_DISTANCE(embedding, AUTO_EMBED(@intent)) < 0.3\n  AND confidence > 0.85\nORDER BY confidence DESC\nLIMIT 3;",
    tidb: [
      ["Vector query against fleet", "VEC_COSINE_DISTANCE", "good"],
      ["Latency", "12 ms", "good"],
      ["Data movement", "0 — same cluster", "good"],
      ["Confidence threshold applied", "> 0.85", "good"],
      ["High-quality claims returned", "3", "good"]
    ],
    frank: [
      ["Maya's embedding lives in", "her Pinecone namespace", "bad"],
      ["Cross-namespace aggregation", "needs separate batch job", "bad"],
      ["Aggregation runs", "nightly into Snowflake", "bad"],
      ["Snowflake → model retrain", "next quarter", "bad"],
      ["Lena's agent gets this", "never (today)", "bad"]
    ],
    deltaPoints: [
      "Maya never met Lena - her data still helped",
      "This is what semantic memory does",
      "Pinecone alone can't do this"
    ]
  },
  {
    avatar: "M",
    name: "Maya · Day 60",
    sub: "★ The payoff",
    memoryTypes: ["episodic", "semantic", "procedural"],
    gauge: { tidb: 1, frank: 5, tidbLabel: "1 query · 4 modalities · 38ms", frankLabel: "5 services · 2,410ms · stale" },
    messages: [
      { who: "user",  text: "Hey, looking for a few things for the May beach trip — and that gala I mentioned." },
      { who: "agent", text: "<div class=\"mcp-lead\">I picked five for you:</div><ul class=\"mcp-list\"><li><strong>Coach satchel</strong> — brand you've kept twice</li><li><strong>The dress</strong> — runs true on you</li><li><strong>The blazer</strong> — for the March gala, sized up for brand X</li><li><strong>+2 more</strong> matched to your style and recent fits</li></ul><div class=\"mcp-emph\">Nothing on this list is something you'd return.</div>", hero: true, html: true }
    ],
    sql: "SELECT c.*, recent_orders, episodic_prefs,\n       chat_event, fleet_wisdom\nFROM customers c\nWHERE c.id = 'maya_8421';\n-- 1 query · 4 modalities · 1 ACID txn · 38 ms",
    tidb: [
      ["SQL queries", "1", "good"],
      ["Modalities in one query", "relational + vector + full-text + analytics", "good"],
      ["Round trips", "1", "good"],
      ["ACID transaction", "yes", "good"],
      ["Latency", "38 ms", "good"],
      ["Cluster utilization", "0.4%", "good"]
    ],
    frank: [
      ["Microservice calls", "5", "bad"],
      ["Glue code required", "47 lines", "bad"],
      ["Cumulative latency", "2,410 ms", "bad"],
      ["Stale-data risk", "Snowflake 6h lag breaks gala recall", "bad"],
      ["Fan-out failure surface", "5 systems", "bad"],
      ["Dashboards to debug", "4 separate", "bad"]
    ],
    deltaPoints: [
      "1 query instead of 5",
      "63× faster, atomically consistent",
      "'Nothing you'd return' is impossible on Fragmented stack"
    ]
  },
  {
    avatar: "?",
    name: "Compliance · 90 days later",
    sub: "Day 90 · regulator asks why",
    memoryTypes: ["episodic"],
    gauge: { tidb: 1, frank: 5, tidbLabel: "Replay query · 8ms", frankLabel: "Logs purged · cannot reconstruct" },
    messages: [
      { who: "system", text: "Compliance ticket #2026-0814 — 'Why did the agent recommend the Coach satchel to Maya on April 14?'" },
      { who: "agent",  text: "<div class=\"mcp-lead\">Replaying decision · 2026-04-14 · 4.2KB / 18 evidence items:</div><ul class=\"mcp-list\"><li>2 prior Coach purchases <em>(relational)</em></li><li>Brand affinity 0.91 <em>(episodic)</em></li><li>\"Gala\" mention 03-12 <em>(full-text)</em></li><li>Fleet: \"Coach Q2 retention 89%\" <em>(semantic)</em></li></ul><div class=\"mcp-emph\">Decision confidence: 0.87</div>", html: true }
    ],
    sql: "SELECT ts, tool_call, context_used,\n       confidence_at_time, fleet_signals\nFROM agent_episodic\nWHERE customer_id = 'maya_8421'\n  AND event = 'recommended:coach_4471';",
    tidb: [
      ["Replay query latency", "8 ms", "good"],
      ["Context window preserved", "yes — verbatim", "good"],
      ["Confidence at decision time", "0.87", "good"],
      ["Evidence chain reconstructable", "yes", "good"],
      ["Audit trail = primary data", "yes — no second system", "good"],
      ["Retention", "7 years configurable", "good"]
    ],
    frank: [
      ["Pinecone namespace", "overwritten 217× since April", "bad"],
      ["Splunk logs retention", "28 days only", "bad"],
      ["Snowflake events", "outcome only — no context", "bad"],
      ["Redis session", "expired Day 1", "bad"],
      ["Reconstructable", "no — 'we think it was based on…'", "bad"]
    ],
    deltaPoints: [
      "Episodic memory IS the audit trail",
      "Try replaying from a Pinecone namespace overwritten 200×",
      "Lawyer's nightmare"
    ]
  }
];

let mayaStep = 0;

function renderMayaStep(idx) {
  const step = MAYA_STEPS[idx];
  if (!step) return;

  // Header
  const avatar = $("mcpAvatar"); if (avatar) avatar.textContent = step.avatar;
  const name   = $("mcpName");   if (name)   name.textContent   = step.name;
  const sub    = $("mcpSub");    if (sub)    sub.textContent    = step.sub;

  // Memory-type badges (mirror the Three Memories slide footer)
  const memContainer = $("mcpMemTypes");
  if (memContainer) {
    while (memContainer.firstChild) memContainer.removeChild(memContainer.firstChild);
    const types = step.memoryTypes || [];
    types.forEach((t) => {
      const pill = document.createElement("span");
      pill.className = `mcp-memtype mcp-memtype-${t}`;
      pill.textContent = t.toUpperCase();
      memContainer.appendChild(pill);
    });
  }

  // Messages
  const body = $("mcpBody");
  if (body) {
    while (body.firstChild) body.removeChild(body.firstChild);
    step.messages.forEach((msg) => {
      const div = document.createElement("div");
      div.className = `mcp-msg mcp-msg-${msg.who}` + (msg.hero ? " mcp-msg-hero" : "");
      if (msg.html) {
        div.innerHTML = msg.text;
      } else {
        div.textContent = msg.text;
      }
      body.appendChild(div);
    });
  }

  // SQL — beautified with syntax highlighting
  const sqlEl = $("mcpSQL"); if (sqlEl) sqlEl.innerHTML = highlightSQL(step.sql);

  // Gauge — TiDB vs Fragmented stack visual bar comparison
  const gauge = step.gauge || { tidb: 1, frank: 4, tidbLabel: "", frankLabel: "" };
  const gaugeMax = Math.max(gauge.tidb, gauge.frank, 1);
  const tidbNum = $("mmGaugeTidbNum"); if (tidbNum) tidbNum.textContent = String(gauge.tidb);
  const frankNum = $("mmGaugeFrankNum"); if (frankNum) frankNum.textContent = String(gauge.frank);
  const tidbBar = $("mmGaugeTidbBar"); if (tidbBar) tidbBar.style.width = `${(gauge.tidb / gaugeMax) * 100}%`;
  const frankBar = $("mmGaugeFrankBar"); if (frankBar) frankBar.style.width = `${(gauge.frank / gaugeMax) * 100}%`;
  const tidbLbl = $("mmGaugeTidbLabel"); if (tidbLbl) tidbLbl.textContent = gauge.tidbLabel;
  const frankLbl = $("mmGaugeFrankLabel"); if (frankLbl) frankLbl.textContent = gauge.frankLabel;

  // Delta callout (bulleted list)
  const deltaList = $("mmDeltaList");
  if (deltaList) {
    while (deltaList.firstChild) deltaList.removeChild(deltaList.firstChild);
    const points = step.deltaPoints || [];
    points.forEach((p) => {
      const li = document.createElement("li");
      li.textContent = p;
      deltaList.appendChild(li);
    });
  }

  // Stepper visual state
  document.querySelectorAll(".ms-step").forEach((btn, i) => {
    btn.classList.toggle("ms-active", i === idx);
    btn.classList.toggle("ms-done", i < idx);
  });

  // Position counter
  const stepNum = $("mayaStepNum");
  if (stepNum) stepNum.textContent = String(idx + 1);

  // Prev/Next disabled state
  const prevBtn = $("mayaPrev"); if (prevBtn) prevBtn.disabled = (idx === 0);
  const nextBtn = $("mayaNext"); if (nextBtn) nextBtn.disabled = (idx === MAYA_STEPS.length - 1);

  mayaStep = idx;
}

function mayaNext() {
  if (mayaStep < MAYA_STEPS.length - 1) renderMayaStep(mayaStep + 1);
}
function mayaPrev() {
  if (mayaStep > 0) renderMayaStep(mayaStep - 1);
}

/* ---------- 4. INIT ---------- */

document.addEventListener("DOMContentLoaded", () => {
  // wire prev/next/tab controls
  $("prevBtn").addEventListener("click", prev);
  $("nextBtn").addEventListener("click", next);
  document.querySelectorAll(".tab").forEach((t) => {
    t.addEventListener("click", () => {
      const idx = parseInt(t.dataset.idx, 10);
      if (!Number.isNaN(idx)) showSlide(idx);
    });
  });

  // wire VV demo controls
  const vvPlayBtn = $("vvPlay");
  const vvResetBtn = $("vvReset");
  if (vvPlayBtn) vvPlayBtn.addEventListener("click", vvPlay);
  if (vvResetBtn) vvResetBtn.addEventListener("click", () => vvResetVV(true));

  // wire Sarah session tabs
  document.querySelectorAll(".stab").forEach((btn, i) => {
    btn.addEventListener("click", () => sarahTab(i));
  });

  // wire Maya demo controls
  const mayaPrevBtn = $("mayaPrev");
  const mayaNextBtn = $("mayaNext");
  if (mayaPrevBtn) mayaPrevBtn.addEventListener("click", mayaPrev);
  if (mayaNextBtn) mayaNextBtn.addEventListener("click", mayaNext);
  document.querySelectorAll(".ms-step").forEach((btn, i) => {
    btn.addEventListener("click", () => renderMayaStep(i));
  });
  // initial render so the slide reflects the data even before clicks
  renderMayaStep(0);

  // route from URL
  loadFromHash();
});

// Expose on window for quick console debugging
window.__deck = { showSlide, next, prev, resetDemo, vvPlay, vvResetVV, mayaNext, mayaPrev, renderMayaStep, SLIDES };
