# Talk track - 45-minute booth deck

45 minutes. Eleven slides. One interactive demo. One promise.

Optimized for a retail / CPG / health-exec audience early in their AI journey -
mostly still wiring raw LLM API calls together.

---

## The one-sentence story

> **"Your AI agents forget every customer they meet - by design. That's not
> a model problem, it's an architecture problem. Fix the architecture and
> every conversation makes the next one better. Don't, and you're paying
> to rediscover the same customer every session."**

The empowerment promise on slide 0 compresses that into the question the
audience will walk out able to ask: *"Where, exactly, does our agent's
memory live? Show me the database."*

---

## Arc at a glance

| Min | Beat | Slide | Purpose |
|---:|---|---:|---|
| 0-2     | Empowerment promise         | 00 · title        | The cold open. Earn the next 44 minutes. |
| 2-3     | About me - one spoken line  | 01 · about        | Earn the mic. 60 seconds. Don't dwell. |
| 3-6     | About TiDB                  | 02 · about-tidb   | Receipts before pain. 11+ years. Real logos. |
| 6-11    | Sarah - the Black Friday VIP | 03 · sarah       | Name the pain. Three failure modes. |
| 11-16   | The Answer                  | 04 · why          | Frankenstack vs one ACID boundary. |
| 16-19   | Convergence                 | 05 · convergence  | LinkedIn quote + 4 labs. Same conclusion. |
| 19-24   | Three Memories              | 06 · memories     | Episodic · semantic · procedural - vocabulary for the demo. |
| 24-34   | Maya's Year (interactive)   | 07 · maya         | 6 days of compounding intelligence in 6 clicks. |
| 34-39   | Token Tax                   | 08 · librarian    | The cost ladder. Curation, not capacity. |
| 39-43   | Manus Math                  | 09 · manus        | $5/user/month is arithmetic - and impossible on standard DBs. |
| 43-46   | Closing - promise kept      | 10 · whynow       | The model forgets. The platform remembers. The human decides. |

**Total target: ~46 minutes.** Built in 1-minute slack for transitions and audience reactions.

---

## Beat 00 - Empowerment promise (0:00 - 2:00) · Slide `title`

Open cold. Don't say hello. Don't thank anyone. Read the subtitle line as your opening sentence.

**Verbatim opening:**

> "By the end of the next 45 minutes, you'll be able to walk into your Monday
> staff meeting and ask the one question that tells you whether your AI is
> compounding customer value - or paying to rediscover the same customer every
> session.
>
> That matters because the next few years in retail won't be won by the company
> with the flashiest model. They'll be won by the company whose AI actually
> gets smarter from every customer interaction.
>
> Right now, most teams are still wiring raw LLM calls together. So every new
> session starts over. Same customer. Same preferences. Same mistakes. Same
> token bill.
>
> That is not a model problem. It is an architecture problem.
>
> For the next 45 minutes, I'm going to show you what that failure looks like
> in a retail moment everyone here will recognize - and the architecture
> pattern that turns AI from a cost center that resets into an asset that
> compounds."

Then About.

---

## Beat 01 - About me (2:00 - 3:00) · Slide `about`

One spoken line. Don't read the slide; the slide is the receipt for the line you spoke.

> "Quick context on me - Naval Academy NLP work on 580 million tweets, infantry
> officer in the Marines, then open-source databases at Percona, in-house LLMs
> at Sosivio before there was an API to call, AI tooling for the US Government
> at BabelStreet. Which is to say: I've watched four versions of this exact
> mistake. Now I run Solution Engineering at TiDB."

45-60 seconds. Don't dwell on the cards.

---

## Beat 02 - About TiDB (3:00 - 6:00) · Slide `about-tidb`

Credibility moment. Sets the table before the pain hits, so the audience
trusts the vendor before they hear the problem.

**Key points:**
- 11+ years in production. Shipped 2015. Not a startup pivoting to AI.
- Millions of tables per cluster. 4M+ QPS per cluster. Hybrid workloads native.
- **Enterprise scale:** LinkedIn (largest TiDB community user in the world),
  Uber, Pinterest, Airbnb, Atlassian, Plaid, Flipkart, Square, Shopee,
  Databricks, Bolt.
- **Agentic AI:** Meta's Manus, two top-10 global AI labs, Dify, Plaud AI, GMGN.

**Land:**
> "Same architecture - new workload. The labs that build AI run what already
> scales commerce."

**Bridge to Sarah:**
> "Now let me show you the moment your AI investment is leaking value through
> right now."

---

## Beat 03 - Sarah, the Black Friday VIP (6:00 - 11:00) · Slide `sarah`

Slow this story down. Let the silence land between Session 1 and Session 2.

**Walk the tabs:**
- **Session 1 (3 weeks ago):** Sarah is a $4,800 VIP. The agent helped her -
  she bought, she returned, she came back.
- **Session 2 (Tonight):** Same Sarah. Black Friday. The agent has no idea
  who she is. Top 1% customer. Treated like a stranger.

**Key lines:**
- "The model is brilliant. The model has no memory - by design."
- "That gap is every AI investment in this room leaking value through it
  right now."

Don't apologize for the discomfort. They paid to feel it.

**Three failure modes** - read each label out loud:
- **NEVER WRITTEN** - the agent had context, didn't persist it.
- **NOT FINDABLE** - it's in the database somewhere, can't retrieve it.
- **CONTEXT ROT** - it's there, but it's stale or contradictory.

**Land:**
> "This is how LLMs work. No memory - by design."

That's the architecture problem the rest of the deck solves.

**Bridge to The Answer:**
> "And here's the architectural answer - one place for memory instead of four."

---

## Beat 04 - The Answer (11:00 - 16:00) · Slide `why`

Show the contrast. Frankenstack on the left, TiDB unified on the right.

**LEFT (Frankenstack):**
- Four systems duct-taped together: SQL DB, Vector DB, Analytics DB, Search DB.
- The agent at the top is asking *"which version of reality is correct?"*
- Real-world sync issues: "Sync broke overnight," "Recommendations gone stale,"
  "Customer delete missed."
- Land: *"Data and context need one ACID boundary."*

**RIGHT (TiDB):**
- Same four capabilities. One database. One transaction. Apps keep talking MySQL.
- The repetition of "TiDB" four times **is** the punchline - say it out loud
  as you point.

**Land - read both lines, each on its own beat:**
> *"Infrastructure designed for legacy transactional purposes, not for
> compound knowledge."*
>
> **"Memory is infrastructure - not a feature you bolt on."**

**Bridge to Convergence:**
> "And it's not just us saying this - here's who's already picked this
> architecture."

---

## Beat 05 - Convergence (16:00 - 19:00) · Slide `convergence`

Open with the LinkedIn quote on screen. Read it verbatim. LinkedIn is the
largest TiDB community user in the world; this isn't marketing copy, it's
their engineering blog from March 2026.

> "Memory stops being incidental context and becomes a first-class primitive
> with explicit read/write semantics and lifecycle management."
> — LinkedIn Engineering, March 2026

Then the four cards:

> "These are illustrative - not the full list. We have many more AI customers.
> But pick any four building frontier AI and look at where their memory lives."

- Two top-10 AI labs (anonymized under NDA - one long-context, one main chat platform)
- **Dify:** 500K+ databases consolidated to one TiDB cluster, 80% cost reduction
- **Meta (Manus):** millions of agent branches on one cluster

**Land:**
> "Same answer, every time. The database is the agent's brain."

**Bridge to Memories:**
> "So what IS that architecture? Three named memory types - let me show you."

---

## Beat 06 - Three Memories (19:00 - 24:00) · Slide `memories`

THE architecture slide. Plant the vocabulary HERE so the audience has labels
for what they're about to watch in the demo.

**Walk each card slowly:**
- **EPISODIC** - what happened. Per-customer, time-stamped, auditable.
  Example: Maya returned a size 4 wrap dress on April 21.
- **SEMANTIC** - what we learned. Cross-customer, compounding.
  Example: bias-cut linen runs small - +1 size for relaxed weaves.
  *One pays the cost. All benefit.*
- **PROCEDURAL** - what works. Strategy memory. The next layer on the
  roadmap. Example: check returns, confirm size, suggest fit alternatives.

**Land:**
> "Cognitive science named the types. TiDB is the maintenance layer."

**Bridge to Maya:**
> "Now watch all three fire in real time. Twelve months of one customer,
> in six clicks."

---

## Beat 07 - Maya's Year - the demo (24:00 - 34:00) · Slide `maya`

**This is the demo.** Interactive. Click the stepper on the left to walk the
6 days. Always read the "Why TiDB wins" bullets out loud - they ARE the
punchline for each beat. The gauge shows steps-to-answer: TiDB always 1,
Frankenstack always 4+.

**Open:**
> "You just saw the architecture named. Now watch it run. Same customer -
> Maya - across her year on a brand that uses memory architecture."

**DAY 1 - First contact.** Cold start for Maya, but the fleet is already warm
with 1.2M lessons. *Frankenstack can't show you that - every system starts cold.*

**DAY 14 - Returns + reasons.** Order outcome AND the reasoning have to commit
together. *TiDB does it in one ACID transaction. Frankenstack hopes nothing
fails between calls 2 and 3.*

**DAY 21 - Fleet learns.** No user is even talking. The fleet just got smarter
from 2,847 fit reviews. *Snowflake delivers this insight in next quarter's
batch. We got it to every agent in 60 seconds.*

**DAY 22 - Stranger benefits.** Lena, a brand-new customer, gets the size-up
nudge Maya's data taught the fleet. *Maya never met Lena. THIS is what
semantic memory buys you. Pinecone alone cannot do this.*

**DAY 60 (★ PAYOFF).** Read the agent's reply out loud, slowly. End on
*"Nothing on this list is something you'd return."* Then point at the
metrics: one query, four modalities. Versus five calls, lines of glue, and
one stale field that would have killed the recommendation. ACID-consistent.

**DAY 90 - The audit.** Compliance asks why. *Episodic memory IS your audit
trail. Try replaying this from a Pinecone namespace overwritten 200 times
since April. Lawyer's nightmare.*

**Final line:**
> "You just watched twelve months of compounding intelligence in six clicks.
> Now let's look at what running this actually costs."

---

## Beat 08 - Token Tax (34:00 - 39:00) · Slide `librarian`

**Money slide #1.** The demo just landed - now show what it costs. Walk the
cost ladder slowly. Real model pricing - bring receipts.

**Three tiers:**
- **Naive RAG** (100K tokens, no cache): ~$0.31 / query.
  At 1M queries/day, **~$310K / day**.
- **Cached RAG** (best practice today): ~$0.04 / query. **~$40K / day**.
- **Curated context** (~580 tokens via `assemble_context()`): ~$0.0095 / query.
  **~$9.5K / day**. **32x vs naive, 4x vs cached.**

**Key lines:**
- "Even RAG done right - with prompt caching - costs you 4x more than curated memory."
- "Model providers will sell you a 1M-token window as the answer. Bigger window
  = bigger meter. The win is curation, not capacity."

**Then the comparison block** - this is the TiDB-specific answer:

| On a Frankenstack | On TiDB |
|---|---|
| Pull from SQL DB, vector DB, search DB, analytics DB | One `assemble_context()` call |
| Merge + rank in app code | Rows + vectors + search + analytics in one ACID query |
| 4 round trips · partial-failure surface | 1 round trip · no partial-failure risk |

**Land:**
> "The win is curation - and TiDB is what makes curation a single ACID query
> instead of glue code across four systems."

**Bridge to Manus:**
> "That's per-query economics. Now let's zoom out to a real production agent business."

---

## Beat 09 - Manus Math (39:00 - 43:00) · Slide `manus`

**Money slide #2.** The math IS the punchline. Walk the numbers slowly.

**The number on screen:** 1.4M databases live on TiDB Cloud today, powering Manus.

**Left column (any standard managed DB):**
- Manus charges users $5 / month.
- Cheapest hosted database anywhere: $6 / month.
- **Loss per user: $1+ / month.**
- The business is dead before it starts.

**Right column (with TiDB):**
- Idle database cost: ~$0 / month (scales to zero).
- ~90% reduction vs standard DB.
- **Business model: possible.**

**Key line:**
> "Manus prices at $5/month because TiDB scales to zero. You can't price an
> AI product without solving the database problem first. Every AI company
> eventually discovers this math."

**Bridge to Closing:**
> "So the architecture is real, the labs converged, and the economics work.
> Here's what you walk out with."

---

## Beat 10 - Closing - promise kept (43:00 - 46:00) · Slide `whynow`

**Read the title triad on screen, slowly:**
> "The model forgets. The platform remembers. The human decides."

**Walk the three columns:**
- **THE MODEL forgets** - stateless by design, every session starts from zero.
- **THE PLATFORM remembers** - three memories, one cluster, one ACID transaction.
- **THE HUMAN decides** - engineers stop digging through logs, they curate the
  playbooks the agents learn from.

**Then the recap card** - point at the two bullets:
- Agents fail because LLMs are stateless and stacks are fragmented.
- The labs that build production AI converged on one architecture. **TiDB.**

**Then the Monday question** (this is the headline deliverable - read SLOWLY):
> *"Where, exactly, does our agent's memory live? Show me the database."*

Then the tell:
> "If the answer involves four systems and a sync job, you're paying to
> rediscover every customer, every session."

Let that land. Don't fill the silence.

**Final line:**
> "Memory isn't stored. It's maintained. You now know the one question that
> tells you whether your stack is built to compound - or built to forget."

Then point at the QR code:
> "Scan to learn more. Find me at the booth - happy to map your current
> memory architecture with you. No pitch. Diagnostic only."

---

## Sarah → Maya closed-loop map

The deck's main narrative arc: Sarah names the failure modes; Maya resolves
each one in the demo. Use this map for Q&A or to remind the audience what
they just watched.

| Sarah failure mode | Where Maya resolves it |
|---|---|
| **Never written** - agent had context, didn't persist it | Day 14: outcome + reasoning commit together in one ACID transaction |
| **Not findable** - it's in the database somewhere | Day 60: one query across four modalities, 38ms |
| **Context rot** - it's there, but stale or contradictory | Day 21 & 22: fleet auto-learns; Day 90: episodic memory IS the audit trail |

---

## Pacing & risk management

- **The 10-minute Maya demo is the load-bearing beat.** If the room is
  cold or the demo is slow, drop Day 22 (stranger benefits) - it's the
  most cuttable. Days 1, 14, 60, 90 are non-negotiable.
- **If running long:** trim Beat 03 (Sarah) by skipping Session 1 and
  jumping straight to Session 2 with the line "she's been here before."
  Saves ~2 min.
- **If running short:** expand Beat 05 (Convergence) with Pinterest's
  6-system consolidation story or Plaud AI's audio-to-memory pipeline.
- **Q&A:** held at the booth, not on the clock. Don't open Q&A from the
  stage - it kills the closing.

---

## Speaker-notes panel

Press **N** on any slide to open the speaker-notes panel. Each note opens
with a `[~N min]` budget so you can pace from the panel itself. Notes are
the abbreviated version of this document - same content, condensed to
glanceable bullets.
