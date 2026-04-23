# isoftstone-may8-demo

The **30-minute booth deck** for the iSoftStone × TiDB × Microsoft AI Workshop
— New York City, **May 8 2026**.

Runs as a local FastAPI server at `localhost:7001`. Eight tabs, matching the
five beats of the talk plus a title, a proof slide, and a Q&A appendix. The
interactive "watch an agent learn" demo is embedded on tab 04.

Mirrors the layout of [stephenlthorn/mem9-demo](https://github.com/stephenlthorn/mem9-demo)
so the on-booth habits (pre-flight checks, tab order, talk-track cue card)
carry straight over.

---

## Just want to run it?

```bash
./demo.sh
```

Open **http://localhost:7001** in Chrome. Press `→` to advance. That's it.

The deck has **no network dependencies once Google Fonts have cached once** —
safe to run on conference wifi or a phone hotspot.

---

## The five beats (and what's on each tab)

| Tab | Title | Length | What it does |
|---:|---|---:|---|
| 00 | **Title** | — | Stephen, TiDB, iSoftStone, NYC May 8 |
| 01 | **The Hook** | 4 min | The Sarah story · your VIP comes back and the AI forgets her |
| 02 | **Why** | 4 min | Two problems: model has no memory, and the 4-database stack is broken |
| 03 | **Convergence** | 4 min | Kimi · DeepSeek · Dify · Manus — the labs building AI all chose this |
| 04 | **Demo** | 10 min | **Live.** Three customers. Watch the memory shelf fill up. |
| 05 | **Proof** | 2 min | Rakuten · Pinterest · Flipkart — running in retail today |
| 06 | **Microsoft** | 4 min | MACC · BYOC in Azure · iSoftStone · the 36-month window |
| 07 | **Q&A** | — | Reference card for the anticipated questions |

Full pacing and speaker notes: [`talk_track.md`](./talk_track.md).
Operator cue card for the demo: [`queries.md`](./queries.md).

---

## Keyboard shortcuts on the deck

| Key | Does |
|---|---|
| `→` / `PgDn` | Next slide |
| `←` / `PgUp` | Previous slide |
| `0`–`7` | Jump to a specific tab |
| `Home` / `End` | First / last tab |
| `R` | Reset the demo (tab 04 only) |

Good news: these mirror PowerPoint's bindings, so the muscle memory from
any recent rehearsal still works.

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
2. Walk through all 8 tabs once. Click each demo customer once.
3. Press `F11` (Windows) or `Ctrl+Cmd+F` (Mac, Chrome) for fullscreen.
4. Set Chrome zoom to 110% if the projector is 1080p; 100% if 4K.
5. Confirm Google Fonts have cached — they have once the deck looks right.
   Once cached, you can yank wifi and the deck still renders.
6. Charge laptop to 100%. Bring the charger.
7. Get Shirley's phone number — hotspot fallback if the venue wifi is unreliable.

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
# Cmd+Shift+5 → Record Selected Portion → save as recordings/demo-may8.mov
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
| [`booth_dashboard/static/index.html`](./booth_dashboard/static/index.html) | 8-slide deck with embedded demo |
| [`booth_dashboard/static/styles.css`](./booth_dashboard/static/styles.css) | Navy / cream / gold editorial aesthetic |
| [`booth_dashboard/static/app.js`](./booth_dashboard/static/app.js) | Slide navigation + demo state machine |
| [`talk_track.md`](./talk_track.md) | 30-min speaker brief · the five beats |
| [`queries.md`](./queries.md) | Operator cue card — what to click, what to say |
| [`docs/superpowers/specs/2026-04-22-isoftstone-may8-design.md`](./docs/superpowers/specs/2026-04-22-isoftstone-may8-design.md) | Design spec |

---

## The audience · the ask

Confirmed on the May 8 invite list:
**Amway · Bob's Discount Furniture · Tapestry (Coach / Kate Spade / Stuart Weitzman) · Vineyard Vines.**
VPs and C-suite. All running Microsoft AI pilots. All frustrated their agents don't get better.

Your job: name the pain, show the fix, tee up Shirley on the commercials. The deck
does three of those four things; your delivery handles the fourth.

---

## Non-goals

This repo is a talk, not a product. All heavy lifting — the actual agent
memory architecture, TiDB Cloud Zero, mnemo-server — is upstream and referenced.
The numbers in the demo are calibrated to match the open-source
[EV-charger reference architecture](https://github.com/bernard-kavanagh/ev_charger_anomaly_detection)
that Bernard Kavanagh shipped with his Stockholm Data Innovation Summit talk.

---

## License

Apache-2.0, matching upstream. See [LICENSE](./LICENSE).
