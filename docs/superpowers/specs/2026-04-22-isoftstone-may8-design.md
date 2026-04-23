# Design spec · isoftstone-may8-demo

**Author:** Stephen Thorn
**Date:** 2026-04-22
**Event:** iSoftStone × TiDB × Microsoft AI Workshop · NYC · May 8 2026
**Status:** Ready to present

---

## Background

Shirley Zhou (Cloud Alliance Manager, PingCAP) co-hosts a Microsoft-focused
AI workshop in NYC with iSoftStone on May 8 2026. Stephen presents **first**
(day-trip constraint). The room is VPs/C-suite from four retail brands —
Amway, Bob's Discount Furniture, Tapestry, Vineyard Vines — all running
Microsoft AI pilots, all quietly frustrated their agents don't get better over time.

See: Gmail thread *"TiDB + iSoftStone | Microsoft Partnership"* for confirmed
audience, MACC/ACR commercial framing, and Jason Kui's original invite
(the invite locked retail case studies already shared: Rakuten, Pinterest,
Plaid, Flipkart — incorporated here).

The predecessor to this deck was a pair of long-form Markdown files plus a
single-page HTML demo. Audience feedback on the draft: *"hard to follow."*
Root cause: four competing narratives (Token Tax + consistency + compound
intelligence + Microsoft) fighting for screen time.

## Design goal

**One story, told once:** *your AI agents forget every customer; watch this one
actually learn.* Everything else (Token Tax math, five custodial duties, ACID
semantics, HTAP, MCP) becomes supporting detail that's *mentioned*, never foreground.

## Product shape

A single-command booth deck at `localhost:7001`, matching the shape of
[stephenlthorn/mem9-demo](https://github.com/stephenlthorn/mem9-demo) so
Stephen's operational muscle memory carries over:

- FastAPI server serves static HTML/CSS/JS
- `demo.sh` bootstraps venv and launches uvicorn
- `talk_track.md` + `queries.md` are the on-booth cue cards
- No backend state, no database, no secrets — deterministic demo only
- Apache-2.0 license (upstream parity)

## Slide structure — eight tabs

The talk is **30 minutes, five beats**. The deck is **eight tabs** because
we need (a) a title card, (b) an appendix for Q&A, and we split beat 5
("why now + Microsoft") into its own proof-points slide and its own
Microsoft/hand-off slide for clearer pacing.

| Tab | Beat | Why it exists |
|---:|---|---|
| 00 | Title | Projector-friendly landing state; speaker attribution |
| 01 | The hook | The Sarah story · name the pain |
| 02 | Why this happens | The 4-database architecture diagram |
| 03 | The convergence | Kimi · DeepSeek · Dify · Manus |
| 04 | **The demo (WOW)** | Interactive: watch three customers, watch memory shelf fill |
| 05 | Proof | Rakuten · Pinterest · Flipkart stat cards |
| 06 | Microsoft + 36-month window | MACC · BYOC · iSoftStone · decision window |
| 07 | Q&A appendix | 8 anticipated questions, plain-English answers |

Keyboard navigation is first-class: `→`/`←` advance, `0`–`7` jump, `R`
resets the demo. Matches PowerPoint bindings so muscle memory from any
recent rehearsal still works.

## The demo on tab 04 — design decisions

### What this demo is
Three sequential customer conversations in a simulated retailer
(modelled on Tapestry/Vineyard Vines aesthetics — linen dresses, between-size
questions, VIP tier, returns). Each conversation shows the agent
(a) **retrieving** from memory before answering, (b) **answering**, and
(c) **writing** what it learned to a visible shelf.

### What this demo is NOT
- Not a split-screen Frankenstack vs. TiDB comparison. That was the
  predecessor's design — it forced the audience to track two stacks in
  parallel. Single focal point instead.
- Not a realtime agent. Every answer, every token count, every memory
  write is deterministic. The demo is a **guided visualization**, not
  a live inference.
- Not a vector-dot animation, cosine-distance readout, or SQL-console flyby.
  Those were in the v1 draft. Cut. The central metaphor is
  **a physical shelf that fills with cards.** Everything else got pruned.

### Why the shelf works
It's a tangible object the presenter can literally point at: *"there's
what the agent just learned — it's on the shelf now, forever, available
to every agent in every session globally."* Retail execs don't need
`fleet_memory` tables or cosine thresholds — they need a mental model
they can re-explain to their CTO when they get back to the office.

### The "Consolidated" moment in customer 3
The only clever moment in the demo. On Emma (customer 3), the
agent doesn't add a third card to the shelf — it **refines the second
card** and marks it *Consolidated*. This is the visible surface of the
platform-level memory maintenance that would otherwise require
explaining the five custodial duties. One badge. One narrative beat.
Lands.

## Visual design

- **Palette:** deep navy (`#0A1F3D`) on warm paper (`#F4EDE0`), muted gold accent (`#C9A96E`).
  Chosen to read as editorial/luxury retail, not "generic tech dashboard."
- **Typography:** Cormorant Garamond italic (serif, display) + Manrope (sans, UI).
  Distinctive without being precious.
- **Motion:** minimal. Fade-up for slide transitions; 120ms card stagger on
  shelf appends. No parallax, no particle effects, no auto-scrolling.
- **Responsive:** three breakpoints — 1400px+ (venue projector), 1100px+
  (standard laptop), 900px+ (backup screen).

## Out of scope

- **Live TiDB connection.** The predecessor attempted an embedded TiDB MCP
  connection. Cut. The audience doesn't need a live connection to believe
  the story, and a failed API call mid-pitch kills the room.
- **Dark mode.** Venue lighting is uncontrolled; the high-contrast
  cream-on-navy-and-gold palette renders well in any lighting. One theme only.
- **A CMS or slide editor.** This is a static deck; slide content lives in
  `index.html`. Edits are Git-tracked, which is what we want.

## Success criteria

1. Stephen can deliver the full 30 minutes from the deck without notes.
2. The demo runs end-to-end without glitching on a mid-range laptop
   with conference wifi, including fallback to offline-cached fonts.
3. The three-number reveal lands cleanly and tees up Shirley on Microsoft
   commercials without Stephen needing to bridge manually.
4. At least one audience member asks a question from tab 07's Q&A list,
   meaning we named their real question before they had to.

## Related work

- Upstream: [stephenlthorn/mem9-demo](https://github.com/stephenlthorn/mem9-demo) — structural parent
- Source material: Bernard Kavanagh's Stockholm "Memory Class" deck
- Source material: *The Database as Cognitive Foundation* (Medium, April 9 2026)
- Source material: EV-charger reference implementation at
  [bernard-kavanagh/ev_charger_anomaly_detection](https://github.com/bernard-kavanagh/ev_charger_anomaly_detection)
