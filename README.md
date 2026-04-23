# ai-30-min-demo

A **30-minute booth deck** that explains, end-to-end, how a unified database
makes AI agents learn across conversations — and why the labs actually
building AI all chose this architecture.

Runs as a local FastAPI server at `localhost:7001`. Ten tabs, walked through
in eight beats. The interactive *"watch an agent learn"* demo is embedded
on tab 04.

Brand-neutral and conference-ready. Drops cleanly into any TiDB booth or
30-minute keynote. Mirrors the layout of
[stephenlthorn/mem9-demo](https://github.com/stephenlthorn/mem9-demo) so any
on-booth habits — pre-flight checks, tab order, keyboard nav — carry straight over.

---

## Just want to run it?

```bash
./demo.sh
```

Open **http://localhost:7001** in Chrome. Press `→` to advance. That's it.

The deck has **no network dependencies once Google Fonts have cached once** —
safe to run on conference wifi or a phone hotspot.

---

## The beats (and what's on each tab)

| Tab | Title | Length | What it does |
|---:|---|---:|---|
| 00 | **Title** | — | Empowerment promise — what the audience walks away knowing |
| 01 | **The Hook** | 4 min | The Sarah story · your VIP comes back and the AI forgets her |
| 02 | **Why** | 5 min | Frankenstack vs. TiDB Unified — the architectural answer |
| 03 | **Convergence** | 4 min | Kimi · DeepSeek · Dify · Manus — the labs building AI all chose this |
| 04 | **Demo** | 10 min | **Live.** Three customers. Watch the memory shelf fill up. |
| 05 | **Your Category** | 2 min | Same architecture, your customer — apparel, furniture, wellness, loyalty |
| 06 | **Proof** | 2 min | Rakuten · Pinterest · Flipkart — running in retail today |
| 07 | **Why Now** | 3 min | The 36-month decision window · procurement, security, migration solved |
| 08 | **Close** | 2 min | Promise kept · what they walked in vs. walk out with · three Monday questions |
| 09 | **Q&A** | — | Hidden appendix · reference card for anticipated questions |

Full pacing and speaker notes: [`talk_track.md`](./talk_track.md).
Operator cue card for the demo: [`queries.md`](./queries.md).

---

## Keyboard shortcuts on the deck

| Key | Does |
|---|---|
| `→` / `PgDn` | Next slide |
| `←` / `PgUp` | Previous slide |
| `0`–`9` | Jump to a specific tab |
| `Home` / `End` | First / last tab |
| `R` | Reset the demo (tab 04 only) |

These mirror PowerPoint's bindings, so the muscle memory from any recent
rehearsal still works.

---

## Prerequisites

| Tool | Required |
|---|:---:|
| Python 3.11+ | ✓ |
| `git` | ✓ |
| Chrome or Safari (recent) | ✓ |

`demo.sh` creates a `.venv` and installs FastAPI + uvicorn on first run. That's
it — no Node, no Docker, no TiDB cluster. The "data" for the interactive demo
is all in `booth_dashboard/static/app.js`; the story plays deterministically
so every run lands exactly where you rehearsed it.

---

## Pre-flight — day-of

Do these in order before the session starts:

1. `./demo.sh --open` on the laptop you'll present on.
2. Walk through all 10 tabs once. Click each demo customer once.
3. Press `F11` (Windows) or `Ctrl+Cmd+F` (Mac, Chrome) for fullscreen.
4. Set Chrome zoom to 110% if the projector is 1080p; 100% if 4K.
5. Confirm Google Fonts have cached — they have once the deck looks right.
   Once cached, you can yank wifi and the deck still renders.
6. Charge laptop to 100%. Bring the charger.
7. Bring a phone hotspot — venue wifi is unreliable everywhere.

---

## Modes

| Command | What it does |
|---|---|
| `./demo.sh` | Live run, default port 7001 |
| `./demo.sh --open` | Same thing, opens the browser automatically |
| `./demo.sh --port 8080` | Override the port |
| `./demo.sh --offline` | Cosmetic — this deck has no backend calls anyway |

To record a fallback screen capture for worst-case demos:

```bash
# macOS — one-liner
# Cmd+Shift+5 → Record Selected Portion → save as recordings/demo-fallback.mov
```

Drop it in `recordings/` and you've got a fallback if the laptop melts.

---

## Architecture

```
laptop
└── localhost:7001  (booth_dashboard: FastAPI + static HTML/CSS/JS)
      └── everything is static — no backend calls, no DB, no secrets

Google Fonts CDN (Cormorant Garamond, Manrope)
  └── cached after first page load — deck runs offline afterwards
```

Intentionally dumb. This is a deck, not a product.

---

## What's in this repo

| Path | Description |
|---|---|
| [`demo.sh`](./demo.sh) | Runner script — venv bootstrap + uvicorn launch |
| [`booth_dashboard/app.py`](./booth_dashboard/app.py) | Minimal FastAPI — serves static files |
| [`booth_dashboard/static/index.html`](./booth_dashboard/static/index.html) | 10-slide deck with embedded demo |
| [`booth_dashboard/static/styles.css`](./booth_dashboard/static/styles.css) | Navy / cream / gold editorial aesthetic |
| [`booth_dashboard/static/app.js`](./booth_dashboard/static/app.js) | Slide navigation + demo state machine |
| [`talk_track.md`](./talk_track.md) | 30-min speaker brief · the eight beats |
| [`queries.md`](./queries.md) | Operator cue card — what to click, what to say |

---

## Audience · the ask

Built for **VP / C-suite retail audiences** — apparel, furniture, wellness,
loyalty. People running AI pilots that aren't getting better over time.

Your job: name the pain, show the fix, hand them three questions they can
take to their team Monday morning. The deck handles the first two; your
delivery handles the last.

The deck is **brand-neutral by design** — works as a TiDB booth piece for
any retail conference, or as a 30-minute keynote inside a partner workshop.
Drop in event-specific framing (audience names, partner mentions) at the
title slide and Beat 07 if you want it; otherwise it stands alone.

---

## Non-goals

This repo is a talk, not a product. All heavy lifting — the actual agent
memory architecture, TiDB Cloud, the underlying mem9 reference — is upstream
and referenced. The numbers in the demo are deterministic; the story plays
exactly the same every time.

---

## License

Apache-2.0, matching upstream. See [LICENSE](./LICENSE).
