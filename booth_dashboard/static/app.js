/* =========================================================
   iSoftStone × TiDB × Microsoft — May 8 2026 booth deck
   -----------------------------------------------------------
   Two responsibilities:
     1. Slide navigation (tabs, arrow keys, prev/next, #hash)
     2. The interactive "agent-learn" demo on slide 4
   ========================================================= */

/* ---------- 1. SLIDE NAVIGATION ---------- */

const SLIDES = [
  { id: "title",       label: "Title",          shortLabel: "0" },
  { id: "about",       label: "About",          shortLabel: "1" },
  { id: "about-tidb",  label: "About TiDB",     shortLabel: "2" },
  { id: "sarah",       label: "The Hook",       shortLabel: "3" },
  { id: "why",         label: "The Answer",     shortLabel: "4" },
  { id: "convergence", label: "Convergence",    shortLabel: "5" },
  { id: "memories",    label: "Three Memories", shortLabel: "6" },
  { id: "maya",        label: "Maya's Year",    shortLabel: "7" },
  { id: "librarian",   label: "Token Tax",      shortLabel: "8" },
  { id: "manus",       label: "Manus Math",     shortLabel: "9" },
  { id: "whynow",      label: "Closing",        shortLabel: "10" }
];

let currentSlide = 0;

const $ = (id) => document.getElementById(id);
const wait = (ms) => new Promise((r) => setTimeout(r, ms));

/* ---------- SPEAKER NOTES ---------- */
/* Talking points per slide. Toggle with N.
   Total runtime target: ~45 minutes.
   Per-slide budget shown at top of each note. */
const SPEAKER_NOTES = {
  title:
    "[~2 min] OPEN COLD. Read the subtitle line on screen, slowly, as your opening sentence. Don't say hello. Don't thank anyone.\n\nVERBATIM OPENING:\n\n'By the end of the next 45 minutes, you'll be able to walk into your Monday staff meeting and ask the one question that tells you whether your AI is compounding customer value - or paying to rediscover the same customer every session.\n\nThat matters because the next few years in retail won't be won by the company with the flashiest model. They'll be won by the company whose AI actually gets smarter from every customer interaction.\n\nRight now, most teams are still wiring raw LLM calls together. So every new session starts over. Same customer. Same preferences. Same mistakes. Same token bill.\n\nThat is not a model problem. It is an architecture problem.\n\nFor the next 45 minutes, I'm going to show you what that failure looks like in a retail moment everyone here will recognize - and the architecture pattern that turns AI from a cost center that resets into an asset that compounds.'\n\nThen About slide.",

  about:
    "[~1 min] ONE SPOKEN LINE - establish credibility fast, then move on. Don't read the slide; the slide is the receipt for the line you spoke.\n\n'Quick context on me - Naval Academy NLP work on 580 million tweets, infantry officer in the Marines, then open-source databases at Percona, in-house LLMs at Sosivio before there was an API to call, AI tooling for the US Government at BabelStreet. Which is to say: I've watched four versions of this exact mistake. Now I run Solution Engineering at TiDB.'\n\n45-60 seconds. Don't dwell on the cards.",

  "about-tidb":
    "[~3 min] Credibility moment - sets the table before the pain hits, so the audience trusts the vendor before they hear the problem.\n\nKEY POINTS:\n- 11+ years in production. Shipped 2015. Not a startup pivoting to AI.\n- Millions of tables per cluster. 4M+ QPS per cluster. Hybrid workloads native.\n- Enterprise scale: LinkedIn (largest TiDB community user in the world), Uber, Pinterest, Airbnb, Atlassian, Plaid, Flipkart, Square, Shopee, Databricks, Bolt.\n- Agentic AI: Meta's Manus, two top-10 global AI labs, Dify, Plaud AI, GMGN.\n\nLAND: 'Same architecture - new workload. The labs that build AI run what already scales commerce.'\n\nBRIDGE TO SARAH: 'Now let me show you the moment your AI investment is leaking value through right now.'",

  sarah:
    "[~5 min] Slow this story down. Let the silence land between Session 1 and Session 2.\n\nWALK THE TABS:\n- Session 1 (3 weeks ago): Sarah is a $4,800 VIP. The agent helped her - she bought, she returned, she came back.\n- Session 2 (Tonight): Same Sarah. The agent has no idea who she is. Black Friday. Top 1% customer. Treated like a stranger.\n\nKEY LINES:\n- 'The model is brilliant. The model has no memory - by design.'\n- 'That gap is every AI investment in this room leaking value through it right now.'\n\nDon't apologize for the discomfort. They paid to feel it.\n\nLAND ON THE THREE FAILURE MODES - read each label out loud:\n- NEVER WRITTEN - the agent had context, didn't persist it.\n- NOT FINDABLE - it's in the database somewhere, can't retrieve it.\n- CONTEXT ROT - it's there, but it's stale or contradictory.\n\nLAND: 'This is how LLMs work. No memory - by design.' That's the architecture problem the rest of the deck solves.\n\nBRIDGE TO ANSWER: 'And here's the architectural answer - one place for memory instead of four.'",

  why:
    "[~5 min] THE ANSWER. Show the contrast - Frankenstack on the left, TiDB unified on the right.\n\nLEFT (Frankenstack):\n- Four systems duct-taped together: SQL DB, Vector DB, Analytics DB, Search DB.\n- The agent at the top is asking 'which version of reality is correct?'\n- Real-world sync issues: 'Sync broke overnight,' 'Recommendations gone stale,' 'Customer delete missed.'\n- LAND: 'Data and context need one ACID boundary.'\n\nRIGHT (TiDB):\n- Same four capabilities. One database. One transaction. Apps keep talking MySQL.\n- The repetition of 'TiDB' four times IS the punchline - say it out loud as you point.\n\nLAND - read both lines:\n- 'Infrastructure designed for legacy transactional purposes, not for compound knowledge.'\n- 'Memory is infrastructure - not a feature you bolt on.'\n\nBRIDGE TO CONVERGENCE: 'And it's not just us saying this - here's who's already picked this architecture.'",

  convergence:
    "[~3 min] Open with the LinkedIn quote on screen - read it verbatim. LinkedIn is the largest TiDB community user in the world; this isn't marketing copy, it's their engineering blog from March 2026.\n\n'Memory stops being incidental context and becomes a first-class primitive with explicit read/write semantics and lifecycle management.'\n\nThen the four cards: 'These are illustrative - not the full list. We have many more AI customers. But pick any four building frontier AI and look at where their memory lives.'\n\n- Two top-10 AI labs (anonymized under NDA - one long-context, one main chat platform)\n- Dify: 500K+ databases consolidated to one TiDB cluster, 80% cost reduction\n- Meta (Manus): millions of agent branches on one cluster\n\nLAND: 'Same answer, every time. The database is the agent's brain.'\n\nBRIDGE TO MEMORIES: 'So what IS that architecture? Three named memory types - let me show you.'",

  memories:
    "[~5 min] THE architecture slide. Plant the vocabulary HERE so the audience has labels for what they're about to watch in the demo.\n\nWalk each card slowly:\n- EPISODIC - what happened. Per-customer, time-stamped, auditable. Example: Maya returned a size 4 wrap dress on April 21.\n- SEMANTIC - what we learned. Cross-customer, compounding. Example: bias-cut linen runs small - +1 size for relaxed weaves. ONE pays the cost; ALL benefit.\n- PROCEDURAL - what works. Strategy memory. The next layer on the roadmap. Example: check returns, confirm size, suggest fit alternatives.\n\nKEY LINE: 'One pays the cost. All benefit.' (the semantic insight)\n\nLAND: 'Cognitive science named the types. TiDB is the maintenance layer.'\n\nBRIDGE TO MAYA: 'Now watch all three fire in real time. Twelve months of one customer, in six clicks.'",

  maya:
    "[~10 min] THIS IS THE DEMO. Interactive. Click the stepper on the left to walk the 6 days. Always read the 'Why TiDB wins' bullets out loud - they ARE the punchline for each beat. The gauge shows steps-to-answer: TiDB always 1, Frankenstack always 4+.\n\nOPEN: 'You just saw the architecture named. Now watch it run. Same customer - Maya - across her year on a brand that uses memory architecture.'\n\nDAY 1 - First contact. Cold start for Maya, but the fleet is already warm with 1.2M lessons. Frankenstack can't show you that - every system starts cold.\n\nDAY 14 - Returns + reasons. Order outcome AND the reasoning have to commit together. TiDB does it in one ACID transaction. Frankenstack hopes nothing fails between calls 2 and 3.\n\nDAY 21 - Fleet learns. No user is talking. The fleet just got smarter from 2,847 fit reviews. Snowflake delivers this insight in next quarter's batch. We got it to every agent in 60 seconds.\n\nDAY 22 - Stranger benefits. Lena, a brand new customer, gets the size-up nudge Maya's data taught the fleet. Maya never met Lena. THIS is what semantic memory buys you. Pinecone alone cannot do this.\n\nDAY 60 (★ PAYOFF) - Read the agent's reply out loud, slowly. End on 'Nothing on this list is something you'd return.' Then point at the metrics: one query, four modalities. Versus five calls, lines of glue, and one stale field that would have killed the recommendation. ACID-consistent.\n\nDAY 90 - The audit. Compliance asks why. Episodic memory IS your audit trail. Try replaying this from a Pinecone namespace overwritten 200 times since April. Lawyer's nightmare.\n\nFINAL LINE: 'You just watched twelve months of compounding intelligence in six clicks. Now let's look at what running this actually costs.'",

  librarian:
    "[~5 min] MONEY SLIDE #1. The demo just landed - now show what it costs. Walk the cost ladder slowly. Real model pricing - bring receipts.\n\nTHREE TIERS:\n- Naive RAG (100K tokens, no cache): ~$0.31/query. At 1M queries/day, ~$310K/day.\n- Cached RAG (best practice today): ~$0.04/query. ~$40K/day.\n- Curated context (~580 tokens via assemble_context): ~$0.0095/query. ~$9.5K/day. 32x vs naive, 4x vs cached.\n\nKEY LINES:\n- 'Even RAG done right - with prompt caching - costs you 4x more than curated memory.'\n- 'Model providers will sell you a 1M-token window as the answer. Bigger window = bigger meter. The win is curation, not capacity.'\n\nTHEN THE COMPARISON BLOCK - this is the TiDB-specific answer:\n- On a Frankenstack: 4 round trips, merge in app code, partial-failure surface.\n- On TiDB: one assemble_context() call, rows + vectors + search + analytics in one ACID query, one round trip.\n\nLAND: 'The win is curation - and TiDB is what makes curation a single ACID query instead of glue code across four systems.'\n\nBRIDGE TO MANUS: 'That's per-query economics. Now let's zoom out to a real production agent business.'",

  manus:
    "[~4 min] MONEY SLIDE #2. The math IS the punchline. Walk the numbers slowly.\n\nTHE NUMBER ON SCREEN: 1.4M databases live on TiDB Cloud today, powering Manus.\n\nLEFT COLUMN (any standard managed DB):\n- Manus charges users $5/month.\n- Cheapest hosted database anywhere: $6/month.\n- Loss per user: $1+/month.\n- The business is dead before it starts.\n\nRIGHT COLUMN (with TiDB):\n- Idle database cost: ~$0/month (scales to zero).\n- ~90% reduction vs standard DB.\n- Business model: possible.\n\nKEY LINE: 'Manus prices at $5/month because TiDB scales to zero. You can't price an AI product without solving the database problem first. Every AI company eventually discovers this math.'\n\nBRIDGE TO CLOSING: 'So the architecture is real, the labs converged, and the economics work. Here's what you walk out with.'",

  whynow:
    "[~3 min] CLOSING. Promise kept.\n\nFIRST - read the title triad on screen, slowly:\n'The model forgets. The platform remembers. The human decides.'\n\nThen walk the three columns:\n- THE MODEL forgets - stateless by design, every session starts from zero.\n- THE PLATFORM remembers - three memories, one cluster, one ACID transaction.\n- THE HUMAN decides - engineers stop digging through logs, they curate the playbooks the agents learn from.\n\nTHEN THE RECAP CARD - point at the two bullets:\n- Agents fail because LLMs are stateless and stacks are fragmented.\n- The labs that build production AI converged on one architecture. TiDB.\n\nTHEN THE MONDAY QUESTION (this is the headline deliverable - read SLOWLY):\n'Where, exactly, does our agent's memory live? Show me the database.'\n\nThen the tell: 'If the answer involves four systems and a sync job, you're paying to rediscover every customer, every session.'\n\nLet that land. Don't fill the silence.\n\nFINAL LINE: 'Memory isn't stored. It's maintained. You now know the one question that tells you whether your stack is built to compound - or built to forget.'\n\nThen point at the QR code: 'Scan to learn more. Find me at the booth - happy to map your current memory architecture with you. No pitch. Diagnostic only.'"
};

let notesOpen = false;

function updateNotesContent(slideIdx) {
  const id = SLIDES[slideIdx]?.id;
  const note = SPEAKER_NOTES[id] || "";
  const nameEl = $("notesSlideName");
  const contentEl = $("notesContent");
  if (nameEl) nameEl.textContent = `${String(slideIdx).padStart(2, "0")} · ${SLIDES[slideIdx]?.label || ""}`;
  if (contentEl) {
    while (contentEl.firstChild) contentEl.removeChild(contentEl.firstChild);
    note.split("\n\n").forEach((para) => {
      const p = document.createElement("p");
      // preserve single \n as line breaks within a paragraph
      const lines = para.split("\n");
      lines.forEach((line, i) => {
        if (i > 0) p.appendChild(document.createElement("br"));
        p.appendChild(document.createTextNode(line));
      });
      contentEl.appendChild(p);
    });
  }
}

function toggleNotes() {
  notesOpen = !notesOpen;
  const panel = $("notesPanel");
  if (!panel) return;
  panel.classList.toggle("open", notesOpen);
  panel.setAttribute("aria-hidden", notesOpen ? "false" : "true");
  if (notesOpen) updateNotesContent(currentSlide);
}

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

  // refresh notes panel content if it's open
  if (notesOpen) updateNotesContent(idx);

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
  } else if (e.key === "n" || e.key === "N") {
    // N toggles speaker notes panel
    e.preventDefault();
    toggleNotes();
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
   panel showing TiDB winning vs the 4-system Frankenstack. */

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
      "Frankenstack: every system starts cold"
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
      "Frankenstack: hopes nothing fails between calls"
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
    name: "Maya · 60 days in — the payoff",
    sub: "★ The query that cannot exist on Frankenstack",
    memoryTypes: ["episodic", "semantic", "procedural"],
    gauge: { tidb: 1, frank: 5, tidbLabel: "1 query · 4 modalities · 38ms", frankLabel: "5 services · 2,410ms · stale" },
    messages: [
      { who: "user",  text: "Hey, looking for a few things for the May beach trip — and that gala I mentioned." },
      { who: "agent", text: "<div class=\"mcp-lead\">I picked five for you:</div><ul class=\"mcp-list\"><li><strong>Coach satchel</strong> — brand you've kept twice</li><li><strong>The dress</strong> — runs true on you</li><li><strong>The blazer</strong> — for the March gala, sized up for brand X</li><li><strong>+2 more</strong> matched to your style and recent fits</li></ul><div class=\"mcp-emph\">Nothing on this list is something you'd return.</div>", hero: true, html: true }
    ],
    sql: "SELECT c.*, recent_orders, episodic_prefs,\n       chat_event, fleet_wisdom\nFROM customers c\nWHERE c.id = 'maya_8421';\n-- 1 query · 4 modalities · 1 ACID txn · 38 ms",
    tidb: [
      ["SQL queries", "1", "good"],
      ["Modalities in one query", "relational + vector + FTS + semantic", "good"],
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
      "'Nothing you'd return' is impossible on Frankenstack"
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

  // Gauge — TiDB vs Frankenstack visual bar comparison
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
