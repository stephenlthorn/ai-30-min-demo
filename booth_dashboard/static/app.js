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

/* ---------- 2. INTERACTIVE DEMO ---------- */

const CASES = [
  {
    name: "Sarah",
    initial: "S",
    ctx: "VIP tier · first visit",
    question:
      "I love the linen shift dress. I'm usually a 6 but run between a 6 and 8 depending on brand — what do you recommend?",
    retrieval: {
      html: "No prior customers yet. The agent is starting from scratch.",
      noneFlag: true
    },
    answer:
      "Our linen shift typically runs true to size. If you're between a 6 and 8, I'd suggest the 6 for a tailored fit. Happy to help with anything else.",
    learned: {
      summary: "Linen shift · between-size customers",
      detail: " Outcome recorded. Will confirm after the next similar customer."
    },
    memory: {
      pattern: "Linen shift · between sizes",
      action: "Size 6 for tailored fit. Outcome pending.",
      evidence: "1 conversation"
    },
    qual: { label: "Baseline", sub: "Generic policy, no context" }
  },
  {
    name: "Jessica",
    initial: "J",
    ctx: "New customer",
    question:
      "Thinking about the cotton shirt dress — I'm between a 4 and a 6. Which should I go with?",
    retrieval: {
      html:
        "Found <strong>1 relevant insight</strong> from a prior conversation:<br>" +
        "<span class='pulled'>Linen shift · between sizes → Sarah recommended the 6 · pattern emerging</span>",
      noneFlag: false,
      highlightIndex: 0
    },
    answer:
      "Cotton shirts in this cut behave similarly to our linen — they tend to relax a touch after first wash. Based on what we've seen with similar between-size customers, the 6 gives you a more forgiving long-term fit. The 4 can feel snug through the shoulders after a couple of wears.",
    learned: {
      summary: "Between-size customers · size up for relaxed-weave fabrics",
      detail: " Pattern generalizing across linen and cotton."
    },
    memory: {
      pattern: "Between sizes · relaxed-weave fabrics",
      action: "Recommend size up · linen and cotton both relax.",
      evidence: "2 conversations"
    },
    qual: { label: "Informed", sub: "Applies pattern from Sarah's case" }
  },
  {
    name: "Emma",
    initial: "E",
    ctx: "Returning customer",
    question:
      "I returned the wrap dress last month — sizing was off. I want to try the linen version but I'm nervous about it fitting.",
    retrieval: {
      html:
        "Found <strong>2 relevant insights</strong> and Emma's return history:<br>" +
        "<span class='pulled'>Between sizes · relaxed-weave fabrics → size up</span>" +
        "<span class='pulled'>Emma's previous return · wrap dress bias cut (not a sizing issue)</span>",
      noneFlag: false,
      highlightIndex: 0,
      mergeAfter: true
    },
    answer:
      "I checked your return — the wrap dress fit issue was the bias cut, not the size you picked. The linen shift cuts straight and, based on two customers with a similar between-size pattern, the 8 has held up best over a couple of wears. I'd go with the 8 confidently — and if it's not right in 14 days, we'll make it right.",
    learned: {
      summary: "Consolidated: between-size rule refined",
      detail: " Rule applies to straight cuts, not bias cuts. Emma's return history joined live."
    },
    memory: {
      pattern: "Between sizes · relaxed-weave fabrics (straight cut only)",
      action: "Size up. Bias cuts behave differently — flag separately.",
      evidence: "3 conversations · pattern refined"
    },
    qual: { label: "Confident", sub: "Pattern refined, joined to customer history" }
  }
];

let completed = 0;
let memories = [];

function setProgress(conv, memCount, qualLabel, qualSub, memSubText) {
  $("convCount").textContent = conv;
  $("memCount").textContent = memCount;
  $("qualVal").textContent = qualLabel;
  $("qualSub").textContent = qualSub;
  $("memSub").textContent = memSubText;
  $("progConv").classList.toggle("active", conv > 0 && conv < 3);
  $("progMem").classList.toggle("active", memCount > 0);
  $("progQual").classList.toggle("active", qualLabel !== "Baseline");
}

function renderMemoryShelf(highlightIdx = -1, mergeFlag = false) {
  const wrap = $("memories");
  const empty = $("shelfEmpty");
  if (memories.length === 0) {
    empty.style.display = "block";
    wrap.style.display = "none";
    $("memShelfCount").textContent = "0";
    $("memPlural").textContent = "s";
    return;
  }
  empty.style.display = "none";
  wrap.style.display = "grid";
  $("memShelfCount").textContent = memories.length;
  $("memPlural").textContent = memories.length === 1 ? "" : "s";

  wrap.innerHTML = memories
    .map((m, i) => {
      const classes = ["memory-card"];
      if (i === highlightIdx) classes.push("highlight");
      if (mergeFlag && i === memories.length - 1) classes.push("merged");
      return `<div class="${classes.join(" ")}">
        <div class="pattern">${m.pattern}</div>
        <div class="action">${m.action}</div>
        <div class="evidence">${m.evidence}</div>
      </div>`;
    })
    .join("");

  const cards = wrap.querySelectorAll(".memory-card");
  cards.forEach((c, i) => setTimeout(() => c.classList.add("in"), i * 120));
}

function clearInteraction() {
  $("thinking").classList.remove("shown");
  $("answer").classList.remove("shown");
  $("learned").classList.remove("shown");
}

async function runCase(idx) {
  const btn = $("caseBtn-" + idx);
  if (btn.disabled) return;

  document.querySelectorAll(".case").forEach((c) => c.classList.remove("active"));
  btn.classList.add("active");

  $("stageIdle").style.display = "none";
  $("interaction").classList.add("shown");
  clearInteraction();

  const c = CASES[idx];
  $("custInitial").textContent = c.initial;
  $("custName").textContent = c.name;
  $("custCtx").textContent = c.ctx;
  $("custQuestion").textContent = "\u201C" + c.question + "\u201D";

  const custBlock = $("custBlock");
  custBlock.style.animation = "none";
  void custBlock.offsetWidth;
  custBlock.style.animation = "fadeUp 0.5s forwards";

  setProgress(
    completed,
    memories.length,
    $("qualVal").textContent,
    $("qualSub").textContent,
    $("memSub").textContent
  );

  // Beat 1 — the agent checks memory
  await wait(600);
  $("retrieval").innerHTML = c.retrieval.html;
  $("retrieval").classList.toggle("none", !!c.retrieval.noneFlag);
  $("thinking").classList.add("shown");

  if (typeof c.retrieval.highlightIndex === "number" && memories.length > 0) {
    await wait(400);
    renderMemoryShelf(c.retrieval.highlightIndex);
  }

  // Beat 2 — the answer
  await wait(1400);
  $("answerText").textContent = "\u201C" + c.answer + "\u201D";
  $("answer").classList.add("shown");

  // Beat 3 — what the agent learned
  await wait(1200);
  $("learnedText").innerHTML = `<strong>${c.learned.summary}</strong>${c.learned.detail}`;
  $("learned").classList.add("shown");

  // Beat 4 — land on the shelf
  await wait(900);
  if (c.retrieval.mergeAfter && memories.length > 0) {
    memories[memories.length - 1] = c.memory;
    renderMemoryShelf(-1, true);
  } else {
    memories.push(c.memory);
    renderMemoryShelf();
  }

  // Beat 5 — update progress cells
  completed++;
  setProgress(
    completed,
    memories.length,
    c.qual.label,
    c.qual.sub,
    memories.length === 1
      ? "One pattern, waiting for confirmation"
      : memories.length === 2
      ? "Two patterns — starting to generalize"
      : "Refined · applied to new customers"
  );

  await wait(800);
  btn.classList.remove("active");
  btn.classList.add("done");
  btn.querySelector(".cta").textContent = "Completed ✓";
  btn.disabled = true;

  if (completed < CASES.length) {
    const nextBtn = $("caseBtn-" + completed);
    nextBtn.disabled = false;
    nextBtn.querySelector(".cta").textContent = "Start ›";
  } else {
    await wait(700);
    $("reveal").classList.add("shown");
    setTimeout(
      () => $("reveal").scrollIntoView({ behavior: "smooth", block: "start" }),
      500
    );
  }
}

function resetDemo() {
  completed = 0;
  memories = [];
  setProgress(0, 0, "Baseline", "Generic policy, no context", "Nothing yet — the store just opened");
  renderMemoryShelf();
  $("interaction").classList.remove("shown");
  $("stageIdle").style.display = "flex";
  $("reveal").classList.remove("shown");
  document.querySelectorAll(".case").forEach((c, i) => {
    c.classList.remove("active", "done");
    if (i === 0) {
      c.disabled = false;
      const cta = c.querySelector(".cta");
      if (cta) cta.textContent = "Start ›";
    } else if (i < 3) {
      c.disabled = true;
      const cta = c.querySelector(".cta");
      if (cta) cta.textContent = "Locked";
    }
  });
  window.scrollTo({ top: 0, behavior: "smooth" });
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

  // wire demo case buttons
  document.querySelectorAll(".case").forEach((c) => {
    const idx = c.dataset.case;
    if (idx !== undefined) c.addEventListener("click", () => runCase(parseInt(idx, 10)));
  });
  const resetBtn = document.querySelector(".case.reset-card");
  if (resetBtn) resetBtn.addEventListener("click", resetDemo);

  // init demo state
  setProgress(0, 0, "Baseline", "Generic policy, no context", "Nothing yet — the store just opened");
  renderMemoryShelf();

  // route from URL
  loadFromHash();
});

// Expose on window for quick console debugging
window.__deck = { showSlide, next, prev, resetDemo, runCase, SLIDES };
