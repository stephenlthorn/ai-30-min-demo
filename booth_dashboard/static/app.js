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
  { id: "about",       label: "About",         shortLabel: "A" },
  { id: "sarah",       label: "The Hook",      shortLabel: "1" },
  { id: "why",         label: "Why",           shortLabel: "2" },
  { id: "convergence", label: "Convergence",   shortLabel: "3" },
  { id: "memories",    label: "Three Memories", shortLabel: "4a" },
  { id: "cma",         label: "Five Duties",   shortLabel: "4b" },
  { id: "products",    label: "Two Products",  shortLabel: "4c" },
  { id: "demo",        label: "Demo",          shortLabel: "5" },
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
    "Promise the deliverable up front: 30 minutes, three things you'll walk out with — why agents reset, the architecture that compounds, three questions for Monday. Don't dive in until you've made the promise.",

  about:
    "30 seconds, no more. The point isn't your résumé — it's that you've been doing AI work since before it had a name. USNA capstone on 580M tweets, EACL 2012. Sosivio in-house models, no API to call. Now TiDB. Pivot fast to Sarah.",

  sarah:
    "Slow this story down. Let the silence land after 'It has no idea who she is.'\n\nKEY LINES:\n• 'The model is brilliant. The model has amnesia.'\n• 'Agents do not have memory — not by accident, by design.'\n• 'That gap is the token tax — every AI investment in this room is leaking value through it right now.'\n\nDon't apologize for the discomfort. They paid to feel it.",

  why:
    "Two halves.\n\nHALF 1 — The diagnosis (Memory Wall):\n• Three failure modes: token debt, context amnesia, memory decay.\n• THE TRAP: 'Model providers will sell you a 1M-token window as the answer. It benefits THEM, not you. Every token you load, you pay for. A bigger window is a bigger meter — it is not memory.'\n\nHALF 2 — The cure (Cognitive Foundation):\n• Frankenstack vs. one cluster.\n• Librarian analogy. assemble_context() = librarian with a 10-book limit, picking from 10,000.\n• LAND: 'Memory is infrastructure. Not a feature you bolt on. Stop running four systems.'",

  convergence:
    "OPEN with: 'These four are illustrative — not the full list. We have many more AI customers. But pick any four building frontier AI and look at where their memory actually lives.'\n\nFour use cases. Different problems. Same architecture. That's not a coincidence — that's convergence.\n\nNote on anonymization: Two of these labs are top-5 frontier AI globally — one long-context, one open-source. We name them in 1:1s under NDA.\n\nThe database stopped being a storage layer. It became the substrate the agent thinks against.\n\nBRIDGE TO MEMORIES: 'So what IS that architecture? Three named memory types — let me show you.'",

  manus:
    "You just showed the architecture working — now show what it costs. The math IS the punchline. Walk the numbers slowly.\n\n• AWS cheapest DB: $9.60/month.\n• Manus has 10M databases.\n• That's $96M/month, $1.15B/year — on AWS.\n• Manus charges $5/month per user.\n\nLAND: 'You can't price an AI product without solving the database problem first. Every AI company eventually discovers this math.'\n\nBRIDGE TO PROOF: 'And it's not just AI labs running this architecture.'",

  demo:
    "You just named the three memory types — now show them working. Let it play. Don't narrate over the animation.\n\nAFTER both windows finish:\n'Same customer. Same brand. Same chatbot UI. The only thing different is the memory architecture. One left without buying. One checked out for $172 in four turns. That delta — across 10 million customers, every day — is the whole game.'\n\nBRIDGE TO MANUS: 'Now let's look at what that delta actually costs.'",

  memories:
    "This is THE architecture slide. The intellectual backbone — and it sets up the demo. Plant the vocabulary HERE so the audience has labels for what they're about to watch.\n\n• EPISODIC (agent_reasoning) — what happened. Per-customer, time-stamped, auditable. Watch for: recognizing Emma in the next slide.\n• SEMANTIC (fleet_memory) — what we learned. Cross-customer, deduplicated, compacted. Watch for: the size-up rule.\n• PROCEDURAL — what works. The missing layer. Strategy memory. The roadmap.\n\nTHE CREDIT LINE: 'Cognitive science named the types. We built the maintenance layer. The Cognitive Foundation is both.'\n\nLIBRARIAN: 'Every session, assemble_context() picks the right books off the shelf — ranked by relevance, fitted to budget. The model never sees 10,000 books it won't use.'\n\nNEXT SLIDE has the five duties.",

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
    "The window is now. Six months from now your competitors have agents that remember. Yours don't. The compounding starts the day you migrate, not the day you finish the RFP.",

  close:
    "Three questions for Monday. The first is the killer:\n\n'Where does our agent's memory ACTUALLY live? Show me the database.'\n\nWalk away with: 'Memory isn't stored — it's maintained.' / 'One database beats four duct-taped together.' / 'The labs that build AI all chose this architecture.'\n\nFINAL LINE: 'We know how to build it. CMA is the Cognitive Foundation. The memory wall has an architecture on the other side. Stop running four systems.'",

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
      "Hi Emma! 🌊 Welcome back — so glad the cream linen shift worked out. For a beach trip, the new cotton voile midi just dropped in your usual 8 (the size-up rule for relaxed weaves still applies). Same easy fit, lighter for the heat. Want it in cream, or try the coral this time?"
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

/* ---------- 3. INIT ---------- */

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

  // route from URL
  loadFromHash();
});

// Expose on window for quick console debugging
window.__deck = { showSlide, next, prev, resetDemo, vvPlay, vvResetVV, SLIDES };
