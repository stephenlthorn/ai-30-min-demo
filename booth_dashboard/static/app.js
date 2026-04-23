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
  { id: "manus",       label: "Manus Math",    shortLabel: "M" },
  { id: "demo",        label: "Demo",          shortLabel: "4" },
  { id: "category",    label: "Your Category", shortLabel: "5" },
  { id: "proof",       label: "Proof",         shortLabel: "6" },
  { id: "lineage",     label: "11 Years",      shortLabel: "7" },
  { id: "whynow",      label: "Why Now",       shortLabel: "8" },
  { id: "close",       label: "Close",         shortLabel: "9" },
  { id: "qa",          label: "Q&A",           shortLabel: "Q" }
];

let currentSlide = 0;

const $ = (id) => document.getElementById(id);
const wait = (ms) => new Promise((r) => setTimeout(r, ms));

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
