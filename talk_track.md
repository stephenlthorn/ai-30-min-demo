# Talk track — 30-minute booth deck

30 minutes. Fifteen slides. Two demos. One promise.

Optimized for a retail / CPG / health-exec audience (Tapestry, Vineyard Vines,
Bob's Discount Furniture, Amway, Icon Health, NYBC, Westcon) — early in their
AI journey, mostly still on raw LLM API calls.

---

## The one-sentence story

> **"Your AI agents forget every customer they meet — by design. That's not
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
| 0–1       | Empowerment promise          | 00 · title        | The Winston opening. Earn the next 29 minutes. |
| 1–4       | Sarah — the Black Friday VIP | 01 · sarah        | Name the pain with a retail story every exec recognizes |
| 4:00–4:15 | About — one spoken line      | A  · about        | Earn the mic. 15 seconds. Don't dwell. |
| 4–8       | Why — memory belongs in one place | 02 · why    | Frankenstack diagnosis + the ACID-boundary answer |
| 8–11      | Convergence                  | 03 · convergence  | The labs that build AI all chose this architecture |
| 11–13     | Three memories               | 4a · memories     | Episodic · semantic · procedural — the vocabulary |
| 13–14     | Five duties (CMA)            | 4b · cma          | What makes the architecture production-grade |
| 14–15     | Two products                 | 4c · products     | TiDB X for CIOs · mem9 for VP AI/Data |
| 15–19     | Live demo                    | 05 · demo         | Two-window VV chat — same Maya, two architectures |
| 19–23     | Maya's Year                  | 5b · maya         | 6-step compounding demo · Sarah's failure modes resolved |
| 23–25     | Manus math                   | 06 · manus        | $5/user/month is arithmetic — and impossible on Aurora |
| 25–26     | Your category                | 07 · category     | Same architecture, your customer |
| 26–27     | Eleven years                 | 08 · lineage      | Enterprise-battle-tested — not a startup pivoting to AI |
| 27–29     | Why now                      | 09 · whynow       | The 36-month decision window |
| 29–30     | Close · promise kept         | 10 · close        | The one question for Monday |

Q&A appendix is the final slide — reference only; don't walk through it.

---

## Beat 00 — Empowerment promise (0:00 – 1:00) · Slide `title`

**Open on the empowerment promise. Don't say hello. Don't thank anyone.
Don't introduce yourself yet — that comes after Sarah.**

Walk to the front. Read the subtitle line on the slide, slowly, as your
opening sentence. Then keep going.

### Verbatim opening (~70 seconds):

> *"By the end of these 30 minutes, you'll be able to walk into your Monday
> staff meeting and ask the one question that tells you whether your AI is
> compounding customer value — or paying to rediscover the same customer
> every session.*
>
> *That matters because the next 36 months in retail won't be won by the
> company with the flashiest model. They'll be won by the company whose
> AI actually gets smarter from every customer interaction.*
>
> *Right now, most teams are still wiring raw LLM calls together. So every
> new session starts over. Same customer. Same preferences. Same mistakes.
> Same token bill.*
>
> *That is not a model problem. It is an architecture problem.*
>
> *For the next 30 minutes, I'm going to show you what that failure looks
> like in a retail moment everyone in this room will recognize — and the
> architecture pattern that turns AI from a cost center that resets into
> an asset that compounds."*

Then straight to Sarah. No throat-clearing.

---

## Beat 01 — Sarah, the Black Friday VIP (1:00 – 4:00) · Slide `sarah`

**Slow this story down.** Let the silence land after *"It has no idea who she is."*

### The story

- It's Black Friday. Your top-1% VIP is back in a digital channel.
- Your AI handled her brilliantly three weeks ago. $4,800 basket closed. Madison Avenue note about bold prints on file. Open return on a black sheath dress.
- Tonight she's back. Different session. Same AI. Same brand.
- **It has no idea who she is.** Not the dress. Not the size. Not the return.
- Your Madison Avenue associate has already solved this conversation forty times.

### Key lines

- *"The model is brilliant. The model has amnesia."*
- *"Agents do not have memory — not by accident, by design."*
- *"That gap is the token tax — every AI investment in this room is leaking value through it right now."*

Don't apologize for the discomfort. They paid to feel it.

### Land on the three failure modes

Read each label out loud:

1. **01 · Never written down.** Sarah told Tuesday's agent her preferences. Session ended. Gone.
2. **02 · Written but not findable.** Fraud flag is in Pinecone. Retention agent is querying Postgres.
3. **03 · Context rot.** After 40 tool calls the agent is drowning in stale state. Quality collapses.

> *"These aren't prompt bugs. They're architecture bugs. You can't prompt
> your way out of an architecture problem."*

### Bridge forward (the spine of Act 2)

Point at the gold bridge line on the slide:

> *"Watch these three resolve, one by one, in six clicks."*

That promise is the spine of the whole next act. Maya's Year (slide 5b) is the receipt.

Then go straight to About — let it interrupt the architecture talk for
15 seconds before you earn it back.

---

## Beat 01.5 — About (4:00 – 4:15) · Slide `about`

**ONE spoken line. The slide is the receipt for the line you spoke — don't read the cards.**

> *"Quick context on me — I've been doing AI work since before it had a
> name. USNA capstone on 580 million tweets, EACL 2012. In-house LLMs at
> Sosivio when there was no API to call. Which is to say: I've watched
> four versions of this exact mistake. Now let's look at the architecture
> that ends it."*

10-15 seconds total. Move.

---

## Beat 02 — Why agents forget (4:15 – 8:00) · Slide `why`

**Two halves.**

### Half 1 — The diagnosis (Memory Wall)

Three failure modes at the architectural level:

- **Token debt** — every token you reload every session is a token you pay for twice.
- **Context amnesia** — the model is stateless. When the chat ends, everything is gone.
- **Memory decay** — even when you try to store context, it rots without active maintenance.

**The trap:**

> *"Model providers will sell you a 1M-token context window as the answer.
> It benefits THEM, not you. Every token you load, you pay for. A bigger
> window is a bigger meter — it is not memory."*

### Half 2 — The cure (Cognitive Foundation)

**Frankenstack vs. one cluster.** Point at the diagram:

- Orders in Azure SQL. Vectors in Pinecone. Analytics in Snowflake. Full-text in Elasticsearch.
- Four consistency models. Sync breaks at 3 AM. The agent reasons on four versions of reality.
- *"The agent's data plane and context plane have to share an ACID boundary. Not a TiDB claim — an architectural necessity."*

**Librarian analogy** (the mental model that makes the next three beats click):

> *"Every session, assemble_context() picks the right books off the shelf —
> ranked by relevance, fitted to budget. The model never sees 10,000 books
> it won't use."*

### Land

> *"Memory is infrastructure. Not a feature you bolt on. Stop running four systems."*

---

## Beat 03 — Convergence (8:00 – 11:00) · Slide `convergence`

**Open with the framing:**

> *"These four are illustrative — not the full list. We have many more AI
> customers. But pick any four building frontier AI and look at where
> their memory actually lives."*

Four use cases. Different problems. Same architecture. **That's not a coincidence — that's convergence.**

Note on anonymization: Two of these labs are top-5 frontier AI globally —
one long-context, one open-source. Name them in 1:1s under NDA.

### Punchline

> *"The database stopped being a storage layer. It became the substrate
> the agent thinks against."*

### Bridge to Memories

> *"So what IS that architecture? Three named memory types — let me show you."*

---

## Beat 04a — Three memories (11:00 – 13:00) · Slide `memories`

**This is the intellectual backbone. Plant the vocabulary HERE so the
audience has labels for what they're about to watch in the demos.**

- **Episodic** (`agent_reasoning`) — *what happened.* Per-customer, time-stamped, auditable. Watch for: recognizing Maya in the live demo, and replaying her reasoning at Day 90 in the year demo.
- **Semantic** (`fleet_memory`) — *what we learned.* Cross-customer, deduplicated, compacted. Watch for: the size-up rule firing for both Maya AND a stranger she never met.
- **Procedural** — *what works.* The missing layer. Strategy memory. The roadmap.

### Credit line

> *"Cognitive science named the types. We built the maintenance layer.
> The Cognitive Foundation is both."*

### The librarian (re-cite)

> *"Every session, assemble_context() picks the right books off the shelf —
> ranked by relevance, fitted to budget. The model never sees 10,000 books
> it won't use."*

---

## Beat 04b — Five duties (13:00 – 14:00) · Slide `cma`

**The CMA — Cognitive Memory Architecture. Five duties. This is what makes
the architecture production-grade, not just theoretically sound.**

- **Write control** — only confirmed outcomes persist. Hallucinated reasoning stays ephemeral.
- **Deduplication** — cosine similarity merge. One strong memory, not ten weak ones.
- **Reconciliation** — new evidence supersedes stale conclusions automatically.
- **Confidence decay** — 5% monthly decay. Below 0.30, auto-deprecated.
- **Compaction** — weekly re-clustering. Evidence counts consolidated.

### Field signal

Practitioners now say episodic memory and audit trails aren't nice-to-haves —
they're the only way to control context bloat without retraining.

### Land

> *"Session state is not memory. CMA is the Cognitive Foundation.
> We know how to build it. Here's how it's built."*

---

## Beat 04c — Two products (14:00 – 15:00) · Slide `products`

**Two products. Two audiences. Read the room and lean into whichever buyer
profile is in front of you.**

### For platform CIOs / CTOs (Amway, Vineyard Vines, Icon Health, Westcon, Tapestry CIO)

→ **TiDB X.** The substrate. Replaces 4 of 5 data systems. ACID across rows + vectors + analytics. Copy-on-write branches. GA on every cloud. BYOC for regulated workloads.

### For VP AI / Data and engineering leads (Bob's Sanjay, NYBC engineering, Tapestry senior director)

→ **mem9.** The memory API, built on TiDB. One line of install. No schema. Cross-agent, cross-session memory. Apache-2.0. Self-hostable when compliance asks.

### Land

> *"You don't have to become a database team to give your agents memory.
> mem9 is the API. TiDB X is the substrate. Pick the entry point that
> fits your org."*

**Footer pills on the slide preempt the regulated-buyer objection:**
BYOC · Self-hostable · Audit-ready · RTBF/GDPR. Let them see it. You don't have to narrate it.

### Bridge to demo

> *"Now let me show you what either of those gives you in practice."*

---

## Beat 05 — Live demo (15:00 – 19:00) · Slide `demo`

**Two windows, side by side. Same customer — Maya. Same brand. Same chatbot UI. The only thing different is the memory architecture.**

Let it play. Press `▶ Play` and **don't narrate over the animation.**

Watch for:

- **Episodic memory** recognizing Maya
- **Semantic memory** applying the size-up rule
- **Procedural memory** deciding the order of operations

### After both windows finish

> *"Same customer — Maya. Same brand. Same chatbot UI. The only thing
> different is the memory architecture. One left without buying. One
> checked out for $172 in four turns. That delta — across 10 million
> customers, every day — is the whole game."*

### Bridge to Maya's Year

> *"You just saw ONE moment of Maya's relationship with the brand. Now
> watch the same Maya across twelve months — and the architecture that
> makes every moment after this one better than the last."*

---

## Beat 05b — Maya's Year (19:00 – 23:00) · Slide `maya` · **THE ARCHITECTURAL WOW**

**Interactive. Click the stepper at top — or Prev/Next at bottom — to walk
the audience through the 6 days.** The chat is the hero; the sidebar shows
TiDB winning the metric at every single step.

**ALWAYS read the "Why TiDB wins this step" callout out loud — it's the punchline for each beat.**

The always-visible Sarah recap strip above the stepper shows the three
failure modes so no one has to remember — if the audience zoned out in Sarah,
they still catch the payoff.

### Day 1 — First contact

> *"Cold start for Maya. But the fleet is already warm with 1.2M lessons.
> Frankenstack can't show you that — every system starts cold."*

### Day 14 — Returns + reasons · resolves failure mode 01

> *"Order outcome AND the reasoning behind it have to commit together.
> TiDB does it in one ACID transaction. Frankenstack hopes nothing fails
> between calls 2 and 3."*

### Day 21 — Fleet auto-learns · resolves 01 at fleet scale

> *"No user is even talking. The fleet just got smarter. Snowflake gets
> this insight in next quarter's batch. We got it to every agent in
> 60 seconds."*

### Day 22 — Stranger benefits · resolves failure mode 02

> *"Maya never met Lena. THIS is what semantic memory actually buys you.
> Pinecone alone cannot do this."*

### Day 60 — ★ Compounding payoff · resolves failure mode 03

Read the agent's reply out loud, slowly. End on the emphasized line:

> *"Nothing on this list is something you'd return."*

Then point at the metrics:

> *"One query. Four modalities. 38ms. Versus 5 calls, 47 lines of glue,
> 2.4 seconds — and one stale Snowflake field that would have killed the
> gala recommendation. 63× faster, atomically consistent."*

### Day 90 — The audit · bonus capability

> *"Episodic memory IS your audit trail. Try replaying this from a
> Pinecone namespace overwritten 200 times since April. Lawyer's nightmare."*

### Final line before Manus

> *"You just watched twelve months of compounding intelligence in six
> clicks. Now let's look at what twelve months of THIS, across ten
> million customers, costs."*

**Note:** A footer under the nav reminds the audience: *"Numbers are representative of a workload of this shape."* If anyone fact-checks in real time, that framing is the answer.

---

## Beat 06 — Manus math (23:00 – 25:00) · Slide `manus`

**You just showed the architecture working — now show what it costs.
The math IS the punchline. Walk the numbers slowly.**

- Cheapest managed DB available: ~$6/month per database.
- Manus has 1,000,000+ databases.
- That's $6M/month on any standard managed DB.
- Manus charges $5/month per user.
- On TiDB Serverless: most databases are idle and cost ~$0.

### Land

> *"You can't price an AI product without solving the database problem
> first. Every AI company eventually discovers this math."*

### Bridge to category

> *"And it's not just AI labs. This architecture lands in YOUR category too."*

---

## Beat 07 — Your category (25:00 – 26:00) · Slide `category`

**Pick the two cards that match your room.** 25 seconds each. Don't read all four.

- **Apparel / accessories / luxury** → *Fit memory.* Cross-brand, cross-channel, cross-session.
- **Furniture / home / big-ticket** → *Decision memory.* Multi-visit, financing-aware, household-level.
- **Wellness / beauty / CPG** → *Regimen memory.* Side-effect aware, rep-empowering, subscription-native.
- **Loyalty / gifting / advisory** → *Relationship memory.* Occasion-aware, tier-aware, associate-grade.

### Land

> *"Maya's story is specific. The architecture underneath it isn't.
> Whatever your customers come back for is what your agent has to remember."*

---

## Beat 08 — Eleven years (26:00 – 27:00) · Slide `lineage`

**Enterprise battle-tested in production. Not a startup pivoting to AI —
the database the AI labs are pivoting onto.**

Three eras:

- 2015 — internet scale (Flipkart)
- 2019 — HTAP / real-time (banks, fraud detection)
- 2023 — agent memory (Manus, Kimi)

Enterprise logos on the slide: Uber · Pinterest · Airbnb · Atlassian · Plaid. 11 years of production.

### Land (handoff line)

> *"Three eras. The fourth one is being decided right now."*

---

## Beat 09 — Why now (27:00 – 29:00) · Slide `whynow`

**The 36-month window. Deliver this as the urgency close — don't rush it.**

> *"The window is now. The decision window is 36 months — but the
> compounding starts the day you migrate, not the day you finish the
> RFP. The competitor who picks the architecture this quarter has
> 36 months of compounding agent intelligence on you by the next
> earnings cycle. Not a model gap. An architecture gap. Architecture
> gaps don't close."*

---

## Beat 10 — Close · promise kept (29:00 – 30:00) · Slide `close`

**PROMISE KEPT.** Open by referencing the empowerment promise from slide 0 verbatim:

> *"Thirty minutes ago I promised you ONE question. Here it is."*

Then read the on-screen question **slowly**:

> *"Where, exactly, does our agent's memory live? Show me the database."*

Then the tell, slower:

> *"If the answer involves four systems and a sync job, you're paying
> to rediscover every customer, every session."*

**Let that land. Don't fill the silence.**

### Only if the room is engaged — the two backup probes

> *"If they hand-wave the first answer, two more probes. Transactional
> boundary: do outcome and reasoning commit together? Audit ownership:
> who reconstructs a 90-day-old decision? Either of those exposes the
> architecture too."*

The ONE question is the deliverable. The two probes are insurance, not headline.

### Concrete CTA

Point at the email on the slide:

> *"Find me at the booth or email me. The next step is a 30-minute
> working session — we map your current memory architecture together.
> What's where, what's stale, what's at risk. No pitch. Diagnostic only."*

### Final line

> *"Memory isn't stored. It's maintained. The memory wall has an
> architecture on the other side — and you now know the one question
> that gets you to it."*

### Open the floor

Stay on this slide during Q&A — don't replace it with "thank you."

---

## Slide Q — Q&A appendix (reference, don't walk through)

Eight anticipated questions with plain-English answers. Pull up if asked.
Tap the card that matches; walk through it conversationally.

- "We already have Postgres / MySQL / Aurora. Why another database?"
- "Our data cannot leave our tenant."
- "What about Copilot / Bedrock / Vertex agents?"
- "How is this different from pgvector on Postgres?"
- "What does migration from Aurora / MySQL look like?"
- "Pinecone benchmarks better on vector recall."
- "We're evaluating CockroachDB / YugabyteDB / PlanetScale."
- "What's the compliance story — CCPA, GDPR, EU exposure?"

---

## Slogan repetition map

Per Patrick Winston's Star framework, the slogan must hit at least three times.
Currently in the deck:

1. **Beat 01 (Sarah):** *"The model is brilliant. The model has amnesia."* — the frame that survives into their Monday hallway.
2. **Beat 02 (Why) land:** *"Memory is infrastructure. Not a feature you bolt on. Stop running four systems."*
3. **Beat 10 (Close) CTA:** *"Memory isn't stored. It's maintained."*

If you want a fourth hit, drop *"stop running four systems"* into the
Beat 03 punchline: *"…the same architectural answer. They stopped running
four systems. So can you."*

---

## Sarah → Maya closed-loop map

The three failure modes in Sarah map one-to-one onto Maya's day chips.
The audience sees the resolution happen in real time — this is the
deck's main narrative arc.

| Sarah failure mode | Resolved on Maya Day | What happens |
|---|---|---|
| 01 · Never written down | Day 14 | Return outcome + reasoning commit in one ACID txn |
| 01 · At fleet scale | Day 21 | Fleet memory written — propagates in 60s |
| 02 · Written but not findable | Day 22 | Lena finds Maya's lesson cross-tenant in 12ms |
| 03 · Context rot | Day 60 | One query, 4 modalities, 38ms — no fan-out |
| Bonus: audit defensibility | Day 90 | Episodic memory IS the audit trail |

---

## Tone notes

- **Audience stage:** early in their AI journey. They've heard "agents" but mostly haven't shipped. Speak outcomes before architecture.
- **Anti-frames — do NOT use:** "Your AI has amnesia" (too forward). Pitching to AI labs (these are retail execs). Heavy DB jargon up front.
- **Keep the protagonist count at 2:** Sarah for the cold open (the wound), Maya for both demos (the resolution).
- **Speaker notes are canonical.** The slide visuals are the receipts. Press `N` in the deck to toggle them on any slide.

---

## Source material

- Bernard Kavanagh's Stockholm "Memory Class" deck (TiDB Data Innovation Summit 2026)
- Bernard's Medium post, *The Database as Cognitive Foundation* (April 9 2026)
- TiDB Master Pitch playbook (April 2026, v1)
- TiDB Memory Class 60-min speaker script
- Patrick Winston's *How to Speak* — MIT lecture on empowerment promise and the Star framework
