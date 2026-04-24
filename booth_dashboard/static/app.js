/* =========================================================
   iSoftStone × TiDB × Microsoft — May 8 2026 booth deck
   -----------------------------------------------------------
   Two responsibilities:
     1. Slide navigation (tabs, arrow keys, prev/next, #hash)
     2. The interactive "agent-learn" demo on slide 4
   ========================================================= */

/* ---------- 1. SLIDE NAVIGATION ---------- */

const SLIDES = [
  { id: "title",       label: "Title",         shortLabel: "0" },
  { id: "sarah",       label: "The Hook",      shortLabel: "1" },
  { id: "about",       label: "About",         shortLabel: "A" },
  { id: "why",         label: "Why",           shortLabel: "2" },
  { id: "convergence", label: "Convergence",   shortLabel: "3" },
  { id: "memories",    label: "Three Memories", shortLabel: "4a" },
  { id: "cma",         label: "Five Duties",   shortLabel: "4b" },
  { id: "products",    label: "Two Products",  shortLabel: "4c" },
  { id: "demo",        label: "Demo",          shortLabel: "5" },
  { id: "maya",        label: "Maya's Year",   shortLabel: "5b" },
  { id: "manus",       label: "Manus Math",    shortLabel: "6" },
  { id: "category",    label: "Your Category", shortLabel: "7" },
  { id: "lineage",     label: "11 Years",      shortLabel: "8" },
  { id: "whynow",      label: "Why Now",       shortLabel: "9" },
  { id: "close",       label: "Close",         shortLabel: "10" },
  { id: "qa",          label: "Q&A",           shortLabel: "Q" }
];

let currentSlide = 0;

const $ = (id) => document.getElementById(id);
const wait = (ms) => new Promise((r) => setTimeout(r, ms));

/* ---------- SPEAKER NOTES ---------- */
/* Phrases to land per slide. Toggle with N. */
const SPEAKER_NOTES = {
  title:
    "EMPOWERMENT PROMISE FIRST. Read the subtitle line on screen, slowly, as your opening sentence. Don't say hello. Don't thank anyone. Don't introduce yourself yet — that comes after Sarah.\n\nVERBATIM OPENING (~70 seconds):\n\n'By the end of these 30 minutes, you'll be able to walk into your Monday staff meeting and ask the one question that tells you whether your AI is compounding customer value — or paying to rediscover the same customer every session.\n\nThat matters because the next 36 months in retail won't be won by the company with the flashiest model. They'll be won by the company whose AI actually gets smarter from every customer interaction.\n\nRight now, most teams are still wiring raw LLM calls together. So every new session starts over. Same customer. Same preferences. Same mistakes. Same token bill.\n\nThat is not a model problem. It is an architecture problem.\n\nFor the next 30 minutes, I'm going to show you what that failure looks like in a retail moment everyone in this room will recognize — and the architecture pattern that turns AI from a cost center that resets into an asset that compounds.'\n\nThen straight to Sarah. No throat-clearing.",

  about:
    "ONE SPOKEN LINE — after Sarah lands, before Why. Don't read the slide; the slide is the receipt for the line you spoke.\n\n'Quick context on me — I've been doing AI work since before it had a name. USNA capstone on 580 million tweets, EACL 2012. In-house LLMs at Sosivio when there was no API to call. Which is to say: I've watched four versions of this exact mistake. Now let's look at the architecture that ends it.'\n\n10-15 seconds total. Then Why. Don't dwell on the cards.",

  sarah:
    "Slow this story down. Let the silence land after 'It has no idea who she is.'\n\nKEY LINES:\n• 'The model is brilliant. The model has amnesia.'\n• 'Agents do not have memory — not by accident, by design.'\n• 'That gap is the token tax — every AI investment in this room is leaking value through it right now.'\n\nDon't apologize for the discomfort. They paid to feel it.\n\nLAND ON THE THREE FAILURE MODES — read each label out loud. Then point at the bridge line: 'Watch these three resolve, one by one, in six clicks.' That promise is the spine of the whole next act — Maya's Year is the receipt.\n\nThen go straight to About — let it interrupt the architecture talk for 15 seconds before you earn it back.",

  why:
    "Two halves.\n\nHALF 1 — The diagnosis (Memory Wall):\n• Three failure modes: token debt, context amnesia, memory decay.\n• THE TRAP: 'Model providers will sell you a 1M-token window as the answer. It benefits THEM, not you. Every token you load, you pay for. A bigger window is a bigger meter — it is not memory.'\n\nHALF 2 — The cure (Cognitive Foundation):\n• Frankenstack vs. one cluster.\n• Librarian analogy. assemble_context() = librarian with a 10-book limit, picking from 10,000.\n• LAND: 'Memory is infrastructure. Not a feature you bolt on. Stop running four systems.'",

  convergence:
    "OPEN with: 'These four are illustrative — not the full list. We have many more AI customers. But pick any four building frontier AI and look at where their memory actually lives.'\n\nFour use cases. Different problems. Same architecture. That's not a coincidence — that's convergence.\n\nNote on anonymization: Two of these labs are top-5 frontier AI globally — one long-context, one open-source. We name them in 1:1s under NDA.\n\nThe database stopped being a storage layer. It became the substrate the agent thinks against.\n\nBRIDGE TO MEMORIES: 'So what IS that architecture? Three named memory types — let me show you.'",

  manus:
    "You just showed the architecture working — now show what it costs. The math IS the punchline. Walk the numbers slowly.\n\n• AWS cheapest DB: $9.60/month.\n• Manus has 10M databases.\n• That's $96M/month, $1.15B/year — on AWS.\n• Manus charges $5/month per user.\n\nLAND: 'You can't price an AI product without solving the database problem first. Every AI company eventually discovers this math.'\n\nBRIDGE TO PROOF: 'And it's not just AI labs running this architecture.'",

  demo:
    "You just named the three memory types — now show them working. Let it play. Don't narrate over the animation.\n\nAFTER both windows finish:\n'Same customer — Maya. Same brand. Same chatbot UI. The only thing different is the memory architecture. One left without buying. One checked out for $172 in four turns. That delta — across 10 million customers, every day — is the whole game.'\n\nBRIDGE TO MAYA'S YEAR: 'You just saw ONE moment of Maya's relationship with the brand. Now watch the same Maya across twelve months — and the architecture that makes every moment after this one better than the last.'",

  maya:
    "Interactive. Click the stepper at top — or Prev/Next at bottom — to walk the audience through the 6 days. The chat is the hero; the sidebar shows TiDB winning the metric at every single step. ALWAYS read the 'Why TiDB wins this step' callout out loud — it's the punchline for each beat.\n\nDAY 1 — Maya signs up. Point at the sidebar: 'Cold start for Maya. But the fleet is already warm with 1.2M lessons. Frankenstack can't show you that — every system starts cold.'\n\nDAY 14 — Maya returns 2 dresses with reasons. Point: 'Order outcome AND the reasoning behind it have to commit together. TiDB does it in one ACID transaction. Frankenstack hopes nothing fails between calls 2 and 3.'\n\nDAY 21 — fleet auto-learns. Point: 'No user is even talking. The fleet just got smarter. Snowflake gets this insight in next quarter's batch. We got it to every agent in 60 seconds.'\n\nDAY 22 — Lena, a stranger, benefits from Maya's data. Point: 'Maya never met Lena. THIS is what semantic memory actually buys you. Pinecone alone cannot do this.'\n\nDAY 60 (★ HERO) — the compounding payoff. Read the agent's reply out loud, slowly. End on 'Nothing on this list is something you'd return.' Then point at the metrics: 'One query. Four modalities. 38ms. Versus 5 calls, 47 lines of glue, 2.4 seconds — and one stale Snowflake field that would have killed the gala recommendation. 63× faster, atomically consistent.'\n\nDAY 90 — compliance asks why. Point: 'Episodic memory IS your audit trail. Try replaying this from a Pinecone namespace overwritten 200 times since April. Lawyer's nightmare.'\n\nFINAL LINE before Manus: 'You just watched twelve months of compounding intelligence in six clicks. Now let's look at what twelve months of THIS, across ten million customers, costs.'",

  memories:
    "This is THE architecture slide. The intellectual backbone — and it sets up the demos. Plant the vocabulary HERE so the audience has labels for what they're about to watch.\n\n• EPISODIC (agent_reasoning) — what happened. Per-customer, time-stamped, auditable. Watch for: recognizing Maya in the live demo, and replaying her reasoning at Day 90 in the year demo.\n• SEMANTIC (fleet_memory) — what we learned. Cross-customer, deduplicated, compacted. Watch for: the size-up rule firing for both Maya AND a stranger she never met.\n• PROCEDURAL — what works. The missing layer. Strategy memory. The roadmap.\n\nTHE CREDIT LINE: 'Cognitive science named the types. We built the maintenance layer. The Cognitive Foundation is both.'\n\nLIBRARIAN: 'Every session, assemble_context() picks the right books off the shelf — ranked by relevance, fitted to budget. The model never sees 10,000 books it won't use.'\n\nNEXT SLIDE has the five duties.",

  cma:
    "Five duties — this is what makes the architecture production-grade, not just theoretically sound.\n\n• WRITE CONTROL — only confirmed outcomes persist. Hallucinated reasoning stays ephemeral.\n• DEDUPLICATION — cosine similarity merge. One strong memory, not ten weak ones.\n• RECONCILIATION — new evidence supersedes stale conclusions automatically.\n• CONFIDENCE DECAY — 5% monthly decay. Below 0.30, auto-deprecated.\n• COMPACTION — weekly re-clustering. Evidence counts consolidated.\n\nFIELD SIGNAL: Practitioners now say episodic memory and audit trails aren't nice-to-haves — they're the only way to control context bloat without retraining.\n\nLAND: 'Session state is not memory. CMA is the Cognitive Foundation. We know how to build it. Here's how it's built.' Then bridge to the products slide.",

  products:
    "Two products. Two audiences. Read the room and lean into whichever buyer profile is in front of you.\n\nFOR PLATFORM CIOs/CTOs (Amway, Vineyard Vines, Icon Health, Westcon, Tapestry CIO):\n→ TiDB X. The substrate. Replaces 4 of 5 data systems. ACID across rows + vectors + analytics. Copy-on-write branches. GA on every cloud. BYOC for regulated workloads.\n\nFOR VP AI/DATA AND ENG LEADS (Bob's Sanjay, NYBC engineering, Tapestry senior director):\n→ mem9. The memory API. One line of install. No schema. Cross-agent, cross-session memory. Apache-2.0. Self-hostable when compliance asks.\n\nLAND: 'You don't have to become a database team to give your agents memory. mem9 is the API. TiDB X is the substrate. Pick the entry point that fits your org.'\n\nBRIDGE TO DEMO: 'Now let me show you what either of those gives you in practice.'",

  category:
    "The dress is interchangeable. The architecture isn't. Pick the vertical that matches whoever you're talking to. Apparel = fit memory. Furniture = decision memory. Wellness = regimen memory. Loyalty = relationship memory.",

  proof:
    "Real customers. Real numbers. No vapor. Pause on whichever logo matches the audience. Rakuten = loyalty. Pinterest = graph at scale (Tapestry, Vineyard Vines parallel). Flipkart = Black Friday volume.\n\nBRIDGE TO CATEGORY: 'Now let's land it in YOUR category.'",

  lineage:
    "Eleven years. Enterprise battle-tested in production. Not a startup pivoting to AI — the database the AI labs are pivoting onto.\n\nThree eras: 2015 internet scale (Flipkart) → 2019 HTAP/real-time (banks, fraud) → 2023 agent memory (Manus, Kimi).\n\nLAND ON THE PIVOT LINE: 'Three eras. The fourth one is being decided right now.' That's the handoff to Why Now.",

  whynow:
    "The window is now. The decision window is 36 months — but the compounding starts the day you migrate, not the day you finish the RFP. The competitor who picks the architecture this quarter has 36 months of compounding agent intelligence on you by the next earnings cycle. Not a model gap. An architecture gap. Architecture gaps don't close.",

  close:
    "PROMISE KEPT. Open by referencing the empowerment promise from slide 0 verbatim: 'Thirty minutes ago I promised you ONE question. Here it is.' Then read the on-screen question SLOWLY:\n\n'Where, exactly, does our agent's memory live? Show me the database.'\n\nThen the tell, slower: 'If the answer involves four systems and a sync job, you're paying to rediscover every customer, every session.'\n\nLet that land. Don't fill the silence.\n\nTHEN — only if the room is engaged — point at the two backup probes:\n'If they hand-wave the first answer, two more probes. Transactional boundary: do outcome and reasoning commit together. Audit ownership: who reconstructs a 90-day-old decision. Either of those exposes the architecture too.'\n\nThe ONE question is the deliverable. The two probes are insurance, not headline.\n\nCONCRETE CTA (point at the email): 'Find me at the booth or email me. The next step is a 30-minute working session — we map your current memory architecture together. What's where, what's stale, what's at risk. No pitch. Diagnostic only.'\n\nFINAL LINE: 'Memory isn't stored. It's maintained. The memory wall has an architecture on the other side — and you now know the one question that gets you to it.'",

  qa:
    "Reference card. Don't read these out. Tap whichever the question matches and walk through it conversationally."
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

const MAYA_STEPS = [
  {
    avatar: "M",
    name: "Maya — first session",
    sub: "Day 1 · cold start on a warm fleet",
    messages: [
      { who: "user",  text: "Hi! Looking for a few new pieces — work, school pickup, the occasional date night." },
      { who: "agent", text: "Welcome, Maya. Tell me about your style — minimalist, statement, somewhere in between?" }
    ],
    sql: "SELECT * FROM agent_episodic WHERE customer_id='maya_8421';  -- 0 rows · cold start, but the fleet has 1.2M lessons",
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
    delta: "Maya is new — but the fleet is warm with 1.2M prior lessons. On Frankenstack, every system starts cold and the fleet wisdom lives in a quarterly batch job that hasn't run yet."
  },
  {
    avatar: "M",
    name: "Maya — return processing",
    sub: "Day 14 · 2 returns, with reasons",
    messages: [
      { who: "system", text: "Order #4471 returned · Order #4472 returned" },
      { who: "user",   text: "The first didn't fit at the bust. The second was just too preppy for me." },
      { who: "agent",  text: "Got it — I've noted both. Sizing for that brand and your style preference. I won't recommend either pattern again." }
    ],
    sql: "BEGIN; UPDATE orders SET status='returned'...; INSERT INTO agent_episodic VALUES (..., AUTO_EMBED('tight at bust'), 0.85); COMMIT;  -- 1 ACID txn",
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
    delta: "Outcome and the reasoning behind it HAVE to commit together. TiDB does it in one transaction. Frankenstack hopes nothing fails between calls 2 and 3."
  },
  {
    avatar: "F",
    name: "Fleet event · system-wide",
    sub: "Day 21 · pattern reaches critical confidence",
    messages: [
      { who: "system", text: "Fleet pattern detected: 'brand_x_runs_small_at_bust'" },
      { who: "system", text: "Maya is the 49,848th data point · cosine-merged · confidence 0.93 → 0.94" },
      { who: "system", text: "Propagated to 12,400 active agents · 60 s elapsed" }
    ],
    sql: "INSERT INTO fleet_memory (...) ON DUPLICATE KEY UPDATE evidence_count = evidence_count + 1, confidence = LEAST(0.99, confidence + 0.01);",
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
    delta: "Snowflake gets the insight in next quarter's batch. TiDB gets it to every agent in 60 seconds. ~130,000× faster — and zero engineer hours."
  },
  {
    avatar: "L",
    name: "Lena · never met Maya",
    sub: "Day 22 · stranger benefits from Maya's data",
    messages: [
      { who: "user",  text: "Browsing the new spring collection from brand X — anything you'd recommend?" },
      { who: "agent", text: "Heads up — this brand tends to run small at the bust. Want me to size up by one?" },
      { who: "user",  text: "...Yes, actually. How did you know that?" },
      { who: "agent", text: "Other customers' fit feedback. We learn together — and it stays anonymous." }
    ],
    sql: "SELECT claim, confidence FROM fleet_memory WHERE VEC_COSINE_DISTANCE(embedding, AUTO_EMBED(@intent)) < 0.3 AND confidence > 0.85 ORDER BY confidence DESC LIMIT 3;",
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
    delta: "Maya never met Lena. Maya's data made Lena's recommendation better. THIS is what semantic memory actually buys you — and Pinecone alone can't do it."
  },
  {
    avatar: "M",
    name: "Maya · 60 days in — the payoff",
    sub: "★ The query that cannot exist on Frankenstack",
    messages: [
      { who: "user",  text: "Hey, looking for a few things for the May beach trip — and that gala I mentioned." },
      { who: "agent", text: "I picked five for you. The Coach satchel is from a brand you've kept twice. The dress is from a brand we learned runs true on you. The blazer is for the gala you mentioned in March — sized up because of brand X. <em class=\"mcp-emph\">Nothing on this list is something you'd return.</em>", hero: true, html: true }
    ],
    sql: "SELECT c.*, recent_orders, episodic_prefs, chat_event, fleet_wisdom FROM customers c WHERE c.id = 'maya_8421';  -- 1 query · 4 modalities · 1 ACID txn · 38 ms",
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
    delta: "63× faster. Atomically consistent. One query instead of five. The line 'Nothing on this list is something you'd return' literally cannot exist on Frankenstack."
  },
  {
    avatar: "?",
    name: "Compliance · 90 days later",
    sub: "Day 90 · regulator asks why",
    messages: [
      { who: "system", text: "Compliance ticket #2026-0814 — 'Why did the agent recommend the Coach satchel to Maya on April 14?'" },
      { who: "agent",  text: "Replaying reasoning · customer maya_8421 · event coach_4471 · ts 2026-04-14T14:22:08Z" },
      { who: "agent",  text: "Context: 4.2KB / 18 evidence items. Top signals: 2 prior Coach purchases (relational), brand affinity 0.91 (episodic), gala mention 03-12 (FTS), fleet memory 'Coach Q2 retention 89%' (semantic). Decision confidence 0.87." }
    ],
    sql: "SELECT ts, tool_call, context_used, confidence_at_time, fleet_signals FROM agent_episodic WHERE customer_id='maya_8421' AND event='recommended:coach_4471';",
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
    delta: "Episodic memory IS your audit trail. Try replaying this from a Pinecone namespace overwritten 200 times since April. Lawyer's nightmare."
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

  // SQL
  const sqlEl = $("mcpSQL"); if (sqlEl) sqlEl.textContent = step.sql;

  // Metric rows helper
  const renderRows = (containerId, rows) => {
    const c = $(containerId);
    if (!c) return;
    while (c.firstChild) c.removeChild(c.firstChild);
    rows.forEach(([key, val, tone]) => {
      const row = document.createElement("div");
      row.className = "mm-row";
      const k = document.createElement("span");
      k.className = "mm-key";
      k.textContent = key;
      const v = document.createElement("span");
      v.className = "mm-val" + (tone ? ` mm-${tone}` : "");
      v.textContent = val;
      row.appendChild(k);
      row.appendChild(v);
      c.appendChild(row);
    });
  };
  renderRows("mmTidbRows", step.tidb);
  renderRows("mmFrankRows", step.frank);

  // Delta callout
  const deltaText = document.querySelector(".mm-delta-text");
  if (deltaText) deltaText.textContent = step.delta;

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
