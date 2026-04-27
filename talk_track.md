# Talk track - 45-minute enterprise booth deck

45 minutes. Eleven slides. One interactive demo. One promise.

**Audience:** senior enterprise technology leaders - CIOs, CTOs, VPs of Ecommerce,
VPs of AI/Data, transformation consultants. Companies like Amway, Bob's Discount
Furniture, Vineyard Vines, Icon Health, Tapestry, NYBC, Westcon. Most are early
in their AI journey, running pilots on raw LLM API calls, looking for the path
from pilot to production without rebuilding the data layer twice.

This deck is **not** a frontier-AI talk. AI-native companies (Manus, Dify, two
labs we work with under NDA) appear as proof that production AI workloads are
real - not as the centerpiece.

---

## The one-sentence story

> **"AI agents in production are not chat windows - they're stateful systems
> acting on customer, order, inventory, and workflow data. Pilot stacks fragment
> that state across four or five systems, and that fragmentation is what kills
> the move to production. TiDB is a MySQL-compatible operational data layer that
> consolidates the agent's transactional, retrieval, and analytical workloads
> into one system you can already operate, secure, and audit."**

The empowerment promise on slide 0 compresses that into the question the
audience will walk out able to ask: *"Where, exactly, does our agent's
memory live? Show me the database."*

---

## The one idea to repeat throughout the talk

> **"Agent memory is operational data."**

Say it on Sarah. Say it on Three Memories. Say it on Maya. Say it on Closing.
This is the reframe that turns "memory" from a new vendor category into a
problem the audience already knows how to evaluate.

---

## Arc at a glance

| Min | Beat | Slide | Purpose |
|---:|---|---:|---|
| 0-2     | Empowerment promise        | 00 · title        | Cold open. Earn the next 44 minutes. |
| 2-3     | About me                   | 01 · about        | Earn the mic. 60 seconds. |
| 3-6     | About TiDB                 | 02 · about-tidb   | Lead with consolidation, not logos. |
| 6-11    | The Hook                   | 03 · sarah        | Two micro-vignettes. Three failure modes. |
| 11-16   | The Answer                 | 04 · why          | Stitched stack vs operational data layer. |
| 16-19   | Convergence                | 05 · convergence  | Enterprise first. AI-native second. |
| 19-24   | Three Memories             | 06 · memories     | Episodic · semantic · procedural. Enterprise examples. |
| 24-34   | Maya's Year (interactive)  | 07 · maya         | 6 days of compounding intelligence. Plus a 30-sec ops sidebar. |
| 34-39   | Token Tax                  | 08 · librarian    | Curation, not capacity. Per-query × seat count. |
| 39-43   | Manus Math                 | 09 · manus        | Public proof of unit economics every enterprise will face. |
| 43-46   | Closing                    | 10 · whynow       | Triad + Monday question + QR. |

**Total: ~46 min** with 1 minute of slack for transitions and reactions.

---

## Audience-specific relevance

| Leader / Company | Likely concern | Message that will land | Example to use |
|---|---|---|---|
| Paul Wu - Amway GCR CIO | Global IT modernization, data residency, cost across 80+ markets | "One MySQL-compatible operational data layer that runs in every region your distributors do business" | Distributor calling support in Taipei and Shanghai - one customer, not two |
| Harrison Guo - Amway Taiwan IT | Practical execution, regional latency, local compliance | "Same database your team already operates - MySQL wire protocol, no app rewrites" | Distributor commission queries that need both transactional correctness and analytical speed |
| Gu Li - Bob's VP Ecommerce | Conversion, recommendations, inventory accuracy | "When the customer asks 'is the sectional in stock for delivery,' the agent needs ATP, customer history, and warranty data in one ACID call" | Furniture is high-AOV, low-frequency - re-engagement memory matters more than for fast fashion |
| Sanjay Patel - Bob's VP AI/Data | Moving 20 pilots into production without rebuilding the data layer | "Your pilot stack works for one agent; the production stack has to serve fifty - sprawl is what kills the migration" | Pilot stack vs production stack diagram |
| Peter Winter - Vineyard Vines CIO | Brand voice, loyalty, returns, peak-event performance | "Every Black Friday your top customer should be remembered, not re-introduced" | Sarah/Maya as written - this audience IS the audience for that story |
| Mark Tully - Icon Health CTO | Device data, operational reliability, regulated environments | "Episodic memory IS your audit trail - replay any agent decision for any patient context, ninety days later" | Connected-fitness session history + clinician escalation |
| Jim Cramer - Tapestry Sr Director | Multi-brand, global, omnichannel CX | "One memory layer across Coach, Kate Spade, Stuart Weitzman - same customer, three brands, one ACID boundary" | Cross-brand loyalty - one customer identity across brands |
| Adam Kuta - NYBC Consultant | Mission-critical data, governance, donor and patient flow | "Auditable by default - every read, every write, every retrieval, in one transactional system" | Donor scheduling and eligibility - permissions and traceability matter more than raw speed |
| Dwight Peter - Westcon CIO | Distribution scale, partner systems, supply chain visibility | "Inventory visibility, partner state, and quote workflow in one operational layer your reps and your agents both read" | A reseller agent answering "what can I ship from any warehouse this week" |

---

## Beat 00 - Empowerment promise (0:00 - 2:00) · Slide `title`

Open cold. Don't say hello. Don't thank anyone.

**Verbatim:**

> "By the end of the next 45 minutes you'll be able to walk into your Monday
> staff meeting and ask one question that tells you whether your AI roadmap is
> built to compound value - or built to repay it every session.
>
> *(pause)*
>
> The next few years in enterprise AI won't be decided by which model you pick.
> They'll be decided by where your agents put what they remember.
>
> *(slow down)*
>
> Right now, most teams are wiring raw LLM calls together. Every session starts
> over. Same customer. Same product question. Same return. Same token bill.
>
> That is not a model problem. It's an architecture problem. And it's the same
> architecture problem your enterprise has solved before - just for a new kind
> of workload."

**Cue:** Open cold. The first sentence is your hello.

---

## Beat 01 - About me (2:00 - 3:00) · Slide `about`

One spoken line. Don't read the slide.

> "Quick context - Naval Academy NLP work on 580 million tweets, infantry
> officer in the Marines, then open-source databases at Percona, in-house LLMs
> at Sosivio before there was an API to call, AI tooling for the US Government
> at BabelStreet. I've watched four versions of this exact mistake. Now I run
> Solution Engineering at TiDB."

**Cue:** 60 seconds, then move. The slide is the receipt for the line.

---

## Beat 02 - About TiDB (3:00 - 6:00) · Slide `about-tidb`

**Lead with consolidation. Logos are backup.**

> "Before we get to the pain - one frame. TiDB is a distributed,
> MySQL-compatible operational data layer from PingCAP. Founded in 2015,
> drawing on Google's Spanner and F1 papers. Pinterest consolidated six
> systems onto it - 1.3M+ QPS, ~80% infrastructure reduction. LinkedIn
> runs it at scale. Square, Plaid, Flipkart, Shopee, Bolt.
>
> *(point at AI logos)*
>
> And the AI-native companies - Manus, Dify, two labs we work with under NDA -
> found their way to it from a different direction.
>
> *(this is the key point)*
>
> Same architecture, two workloads. Same operational data layer that already
> runs your transactional systems, now running your agents. Your apps don't
> change wire protocol - MySQL stays MySQL."

**Cue:** Tie this to CIO concern. "You don't migrate; you consolidate."

**Bridge:** "Now let me show you the moment your AI roadmap is leaking value
through right now."

---

## Beat 03 - The Hook (6:00 - 11:00) · Slide `sarah`

**Open with two micro-vignettes - same failure, two industries.**

> "Two ways the same failure looks.
>
> *(slow down)*
>
> First - retail. Black Friday. Sarah is your top-1% customer; she spent $4,800
> three weeks ago. Tonight she's back asking about her return. The agent has no
> idea who she is.
>
> Second - operations. A distributor calls support in Taipei in the morning,
> again in Shanghai in the afternoon. Same person. Same open ticket. The agent
> treats her like two strangers.
>
> *(pause)*
>
> Same failure mode. Different industry. Different revenue at risk. This is
> happening every hour, in every AI pilot in this room."

**Three failure modes - read each:**
- **NEVER WRITTEN** - the agent had context, didn't persist it.
- **NOT FINDABLE** - it's in the database somewhere, can't retrieve it.
- **CONTEXT ROT** - it's there, but it's stale or contradictory.

**Land:**
> "This is how LLMs work. No memory - by design. *(this is the key point)* And
> it's not a model problem - it's a data architecture problem. Your enterprise
> has solved data architecture problems before."

**Bridge:** "Here's the architectural answer - one place for memory instead of four."

---

## Beat 04 - The Answer (11:00 - 16:00) · Slide `why`

> "Here's what most pilot stacks look like *(point at left)*. Four systems
> duct-taped together: a transactional database, a vector store, an analytics
> warehouse, a search index. Glue code in the middle. Sync jobs at night. The
> agent at the top is asking the only question that matters: *which version of
> reality is correct?*
>
> *(avoid overclaiming here)*
>
> This is not a TiDB pitch yet. This is just the architecture problem. Data and
> context need one ACID boundary. If outcome and reasoning don't commit
> together, you can't audit either.
>
> *(point at right)*
>
> Consolidated, the same four capabilities live in one operational data layer.
> Same MySQL wire protocol your apps already speak. One transaction. One audit
> log. One place your security team has to certify."

**Land - read both lines, each on its own beat:**
> *"Infrastructure designed for legacy transactional purposes, not for compound knowledge."*
>
> **"Memory is infrastructure - not a feature you bolt on."**

**Bridge:** "And it's not just us saying this - here's who's already picked
this architecture."

---

## Beat 05 - Convergence (16:00 - 19:00) · Slide `convergence`

**Reorder: enterprise first, AI-native second.**

> "When LinkedIn's engineering team wrote about agent memory in March, they put
> it like this:
>
> *(read quote on screen)*
>
> *'Memory stops being incidental context and becomes a first-class primitive
> with explicit read/write semantics and lifecycle management.'*
>
> LinkedIn is one of the largest publicly disclosed TiDB users in the world,
> per their own engineering blog. Pinterest consolidated six systems onto it.
> Plaid eliminated 104 minutes of downtime and 26 engineer-weeks of toil.
>
> *(then pivot to AI-native)*
>
> And the AI-native companies converged on the same answer from a different
> direction. Dify - 500K+ containers consolidated to one TiDB system, 90%
> operational reduction. Manus - millions of agent branches on one cluster.
> Two top-tier AI labs we work with under NDA.
>
> *(this is the key point)*
>
> Two different journeys, one architecture. Enterprise teams arrived from data
> platform consolidation. AI teams arrived from cost-of-state. They met in the
> same place."

---

## Beat 06 - Three Memories (19:00 - 24:00) · Slide `memories`

**Plant the vocabulary. Each card gets one enterprise example.**

> "Three kinds of memory every enterprise agent needs. Same vocabulary
> cognitive science uses; same vocabulary your data team will use Monday morning.
>
> **Episodic - what happened.** Per customer, per order, per session, per
> ticket. Time-stamped, auditable. *(retail)* Maya returned a size 4 wrap dress
> on April 21. *(supply chain)* Warehouse 14 missed the cutoff for SKU 8821 on
> March 3. Same shape, different domain.
>
> **Semantic - what we learned.** Cross-customer, cross-order. *(retail)*
> Bias-cut linen runs small - +1 size for relaxed weaves. *(operations)*
> Tuesday afternoon dispatches from this carrier are 40% likely to slip.
>
> *(this is the key point)*
>
> One customer pays the cost of the lesson; every customer benefits.
>
> **Procedural - what works.** The investigative strategy itself. The next
> layer on the roadmap. *(operations)* When inventory shows zero but receipts
> show inbound, check the receiving queue before escalating."

**Land:**
> "Three kinds of memory. One operational data layer. Auditable by default."

**Bridge:** "Now watch all three fire in real time. Twelve months of one
customer, in six clicks."

---

## Beat 07 - Maya's Year (24:00 - 34:00) · Slide `maya`

**This is the demo.** Interactive. Click the stepper on the left to walk the
6 days. Always read the "Why TiDB wins" bullets out loud - they ARE the
punchline. The gauge shows steps-to-answer: TiDB always 1, Frankenstack always 4+.

**Open:**
> "Let's look at your application now running on TiDB. This is your new
> customer, Maya. Watch what the agent knows - and when - compared to a
> stitched stack trying to do the same thing."

---

**DAY 1 - First contact.**

> "Maya is brand new. The agent has never seen her. But the agent's data layer
> has 1.2 million lessons from every customer who came before her - fit
> patterns, return reasons, size preferences, brand affinities. All of that is
> warm, in one cluster, available in a single query before Maya finishes her
> first sentence."

*Why this matters - say it:*
> "On a Frankenstack, that fleet knowledge is split across a vector store, an
> analytics warehouse, and a search index. To answer 'what does the fleet know
> that's relevant to a first-time customer like Maya,' the agent has to query
> three systems, merge the results in application code, and hope nothing
> fails in between. Every system starts cold - every time. On TiDB, the fleet
> wisdom was never split. It's warm because it was never fragmented."

---

**DAY 14 - Returns + reasons.**

> "Maya returns two dresses. The agent captures the outcome - the return - and
> the reason - fit issue, wrong size. Those two facts have to commit together.
> If the return lands in the transactional database and the reason lands in a
> separate vector store, you now have a sync problem. TiDB does it in one ACID
> transaction. Frankenstack hopes nothing fails between call 2 and call 3."

---

**DAY 21 - Fleet learns.**

> "Nobody is shopping right now. But the fleet just processed 2,847 fit
> reviews overnight and learned that bias-cut linen runs small. That insight is
> immediately available to every agent on every customer query - because it
> lives in the same cluster. Most analytics warehouses deliver this on a
> refresh cadence measured in minutes to hours - even with streaming ingest,
> the embedding pipeline still adds lag. Either way, the fleet learning is
> not at the agent's request cadence. On TiDB, it is."

---

**DAY 22 - Stranger benefits.**

> "Lena is brand new. She's never interacted with this brand. But the fleet
> knows something about customers with her profile - and the size-up nudge
> Maya's return taught the system fires immediately. Maya never met Lena.
> Maya's data helped her anyway."

*(30-sec sidebar for non-retail rooms - use if Amway, Westcon, Bob's ops people are in the front row)*

> "Same pattern, no consumer in sight. Your store-ops agent learns from one
> warehouse exception - every store gets the updated playbook by morning. Your
> reseller agent learns from one quote that closed - every rep benefits on the
> next call. Same architecture, different domain."

---

**DAY 60 (★ PAYOFF) - Read the agent reply out loud, slowly.**

> "I picked five for you. The Coach satchel - brand you've kept twice. The
> dress - runs true on you. The blazer - for the March gala, sized up for
> brand X. Nothing on this list is something you'd return."

*(pause - let that land)*

> "One query. Four modalities - relational rows, vector similarity,
> full-text BM25, and columnar analytics - all in one ACID transaction.
> 38 milliseconds. On the fragmented stack: five microservice calls,
> 47 lines of glue code, 2,410 milliseconds - and one stale field that
> would have killed the gala recommendation entirely. That's not a
> performance story. That's a correctness story."

---

**DAY 90 - The audit.**

> "Compliance asks why the agent recommended a product to this customer on
> this date. On TiDB, that's a query. The episodic memory is the audit trail -
> every decision, with the reasoning that drove it, in the same transactional
> system. *(slow down)* Try that across four systems where retention policies
> don't agree, where the vector store was overwritten 200 times since April,
> where the warehouse snapshot is from a different timestamp than the
> transactional record. That's not a technical inconvenience. For NYBC,
> Icon Health, Amway operating across twenty-something jurisdictions - that's
> a compliance gap."

---

**Final line:**
> "Twelve months of compounding intelligence in six clicks. Now let's look at
> what running this actually costs."

---

## Beat 08 - Token Tax (34:00 - 39:00) · Slide `librarian`

> "The demo just landed. Now what does it cost?
>
> Three tiers. *(walk the ladder)* Naive RAG, 100K tokens, no caching - rough
> order, $0.31 per query, $310K a day at a million queries. Cached RAG - the
> current best practice - $0.04 per query, $40K a day. Curated context, 580
> tokens through one ACID query - one cent per query, $9,500 a day.
>
> *(this is the key point)*
>
> Even RAG done right - with caching - is 4× more than curated memory. Model
> providers will sell you a million-token context window as the answer. Bigger
> window equals bigger meter.
>
> *(slow down)*
>
> The win is curation, not capacity.
>
> *(bring this back to operations)*
>
> So why doesn't every team curate aggressively?
>
> Anthropic, LangChain, AWS - their production reference architectures all say
> the same thing. You need vector search, keyword search with BM25 reranking,
> and your relational state. All three, kept in sync, queried together, with
> consistent results. That's several systems wired together before you write
> your first agent query.
>
> Here's how it actually plays out. Teams don't build all of that on day one -
> they build it in stages. Vector store first. Keyword search bolted on later.
> Relational joins stitched in by the application. It works as a POC. It works
> at small scale.
>
> *(pause)*
>
> Then scale arrives - and with AI, scale arrives fast. Suddenly you're paying
> for three systems, syncing data between them, debugging consistency bugs
> across them, and your latency budget is gone. Cost and complexity hit at the
> same time.
>
> So instead of curating harder, the industry sells you bigger context windows.
> Gemini's at two million tokens. That's not a retrieval strategy. That's a
> bigger bill.
>
> Every internal agent your team deploys will face this math. Multiply
> per-query cost by seat count. Then by query rate. That's the bill your CFO
> will be reading by Q3."

**Then the comparison block** - frankenstack vs TiDB on curation:
- On a fragmented stack: those three systems are real, the sync problem is
  real, and the consistency bugs surface exactly when you scale.
- On TiDB: one `assemble_context()` call, rows + vectors + search + analytics
  in one ACID query, one round trip. The complexity that breaks at scale never
  gets built in the first place.

**Land:**
> "Curation is the lever. TiDB makes curation a single ACID query - so the
> architecture that works at POC is the same one that works at a million queries
> a day."

**Bridge:** "That's per-query economics. Now let's zoom out to a real
production agent business."

---

## Beat 09 - Manus Math (39:00 - 43:00) · Slide `manus`

**Reframe Manus as enterprise unit-economics proof.**

> "One last data point on cost. Manus is a public proof of what AI unit
> economics actually look like. They charge $5 a month per user. Cheapest
> hosted database anywhere is $6 a month.
>
> *(pause)*
>
> That's negative gross margin before anyone runs an inference.
>
> *(this is the key point)*
>
> Every enterprise agent your team deploys will run a version of this math.
> The internal copilot serving 10,000 distributors. The store-ops agent serving
> 600 stores. The supply-chain agent running every hour against your WMS.
>
> *(avoid overclaiming here)*
>
> Manus made it work because their per-database cost on TiDB scales to zero
> when the agent is idle. Same lever exists for you. Different scale, same
> math."

**Bridge:** "The architecture is real. The labs converged. The enterprise
stack converged. The economics work. Here's what you walk out with."

---

## Beat 10 - Closing (43:00 - 46:00) · Slide `whynow`

> "Three sentences. *(read the triad)*
>
> The model forgets. The platform remembers. The human decides.
>
> The model forgets because it's stateless by design. Don't try to fix that
> with a bigger context window - that's the bigger meter, not the better answer.
>
> The platform remembers because the operational data layer is where state
> lives. Three memories - episodic, semantic, procedural - in one ACID
> boundary, MySQL-compatible, auditable by default.
>
> The human decides because your engineers will stop digging through logs and
> start curating the playbooks the agents learn from.
>
> *(slow down)*
>
> One question for Monday.
>
> *Where, exactly, does our agent's memory live? Show me the database.*
>
> Ask it of your team. Ask it of every AI vendor pitching you next quarter. If
> the answer is four systems and a sync job, you don't have a memory layer -
> you have a roadmap risk.
>
> Memory isn't stored. It's maintained.
>
> *(point at QR)*
>
> Find me at the booth - happy to map your current memory architecture with
> you. No pitch. Diagnostic only."

---

## Sarah → Maya closed-loop map

The deck's main narrative arc: Sarah names the failure modes; Maya resolves
each one in the demo.

| Sarah failure mode | Where Maya resolves it |
|---|---|
| **Never written** - agent had context, didn't persist it | Day 14: outcome + reasoning commit together in one ACID transaction |
| **Not findable** - it's in the database somewhere | Day 60: one query across four modalities |
| **Context rot** - it's there, but stale or contradictory | Day 21 & 22: fleet auto-learns; Day 90: episodic memory IS the audit trail |

---

## Best lines to use

1. "Agent memory is operational data."
2. "The next few years in enterprise AI won't be decided by which model you pick. They'll be decided by where your agents put what they remember."
3. "Bigger context window is a bigger meter, not a better answer."
4. "Architectural sprawl is the silent killer of enterprise AI."
5. "One customer pays the cost of the lesson; every customer benefits."
6. "Memory is infrastructure - not a feature you bolt on."
7. "If outcome and reasoning don't commit together, you can't audit either."
8. "The model forgets. The platform remembers. The human decides."
9. "Where, exactly, does our agent's memory live? Show me the database."
10. "Memory isn't stored. It's maintained."

---

## Audience objections

| Likely objection | Response |
|---|---|
| "We already have Postgres / Aurora / SQL Server. Why another database?" | "TiDB is MySQL-wire compatible - you don't move off your operational stack, you consolidate the workloads that today live across four systems. The question is sprawl, not replacement." |
| "Vector search isn't memory. We use Pinecone for that already." | "Vectors are part of memory - the retrieval index. Memory also includes the customer record, the order, the audit trail. The fragility is when those four live in four systems and have to commit together." |
| "We're a SQL Server / Oracle shop. Migration risk is too high." | "Most enterprise customers start with one workload - typically the agent's operational state - and run TiDB alongside the existing system. We're not asking you to migrate Oracle; we're asking where you're going to put the new workload." |
| "How is this different from MongoDB / DynamoDB / NoSQL?" | "Strong consistency, distributed ACID, MySQL compatibility, native analytical access. NoSQL stores trade consistency for scale; agents need both." |
| "Data residency / sovereignty - we operate in 80+ countries." | "TiDB Cloud runs in every major region; for regulated workloads we offer BYOC - the cluster runs inside your AWS / Azure / GCP account, your IAM, your CISO's certification." |
| "Compliance - HIPAA / PCI / SOX." | "SOC 2 Type II, HIPAA-eligible deployments, audit logs as a first-class capability. Episodic memory IS your audit trail by design." |
| "Show me a non-AI customer at scale." | "Eleven years in production. LinkedIn, Pinterest, Square, Plaid, Flipkart. AI is one workload pattern among many - we'd be relevant even if you weren't building agents." |
| "How long until we have a working POC?" | "Free serverless tier today. A working agent-memory POC in days, not quarters. We bring the integration patterns - LangChain, LlamaIndex, MCP - so you're not building from scratch." |
| "What's the failure mode when TiDB goes down?" | "Distributed by design. Raft consensus, multi-AZ, multi-region. The mode that kills your agent isn't TiDB going down - it's the sync job between your four systems failing at 3 AM. That's exactly what consolidation removes." |
| "We're committed to Snowflake / Databricks. Where do they fit?" | "TiDB is operational - the live state your agent reads and writes. Snowflake / Databricks are analytical - the warehouse your data team queries. Different workloads. The fragmentation problem is across operational systems, not between operational and analytical." |

---

## Pacing & risk management

- **The 10-minute Maya demo is the load-bearing beat.** If the room is cold or
  the demo is slow, drop Day 22 (stranger benefits). Days 1, 14, 60, 90 are
  non-negotiable.
- **If running long:** trim Beat 03 (Sarah) by skipping the second vignette
  and going straight to the three failure modes. Saves ~90 seconds.
- **If running short:** expand Beat 05 (Convergence) with Pinterest's 6-system
  consolidation story or Plaud AI's audio-to-memory pipeline.
- **Q&A:** held at the booth, not on the clock. Don't open Q&A from the stage
  - it kills the closing.

---

## Claim discipline

Three claims to source on stage or hedge:

| Claim | How to land it |
|---|---|
| "LinkedIn TiDB scale" | Always frame as "one of the largest publicly disclosed TiDB users, per their March 2026 engineering blog" |
| "1.4M Manus databases" | Say "publicly disclosed by Manus - over a million databases, one cluster" |
| Cost-ladder math | Always say "rough order; your numbers will vary by model and provider" |

Two phrases to retire:

- "The database is the agent's brain" → "The database is the agent's persistent state"
- "Pinecone alone cannot do this" → "A vector store alone has the embeddings, but not the order, not the customer record, not the audit trail"

---

## Final 30-second talk track

Use this if you have to summarize the whole talk in 30 seconds:

> "AI agents in production aren't chat windows - they're stateful systems that
> act on customer, order, inventory, and workflow data. Pilot stacks fragment
> that state across four or five systems, and that fragmentation is what kills
> the move to production. TiDB is a MySQL-compatible operational data layer
> that brings transactional, retrieval, and analytical workloads into one
> system - so your agents share one source of truth, one audit boundary, and
> one cost curve. The question to ask Monday: where, exactly, does our agent's
> memory live? If the answer is four systems and a sync job, you don't have a
> memory layer - you have a roadmap risk."
