# Talk track - 45-minute enterprise booth deck

45 minutes. Twelve slides. One interactive demo. One unified thesis.

**Audience:** senior enterprise technology leaders - CIOs, CTOs, VPs of Ecommerce,
VPs of AI/Data, transformation consultants. Companies like Amway, Bob's Discount
Furniture, Vineyard Vines, Icon Health, Tapestry, NYBC, Westcon. Most are early
in their AI journey, running pilots on raw LLM API calls, looking for the path
from pilot to production without rebuilding the data layer twice.

This deck is **not** a frontier-AI talk. AI-native companies (Manus, Dify, two
labs we work with under NDA) appear as both proof and threat - proof that
production AI workloads are real, and threat that AI-native startups are
winning because they don't carry the audience's infrastructure debt.

---

## The one-sentence story (the dual thesis)

> **"Your data infrastructure has scaled into complexity that consumes half
> your engineering effort - and AI is about to double that. TiDB collapses
> both layers into one operational data layer, so your engineers can build
> the business instead of the plumbing."**

The simplification message is the spine. AI memory is the most urgent example
of the problem - not a separate problem.

The empowerment promise on slide 0 compresses that into the two questions
the audience will walk out able to ask:

1. *"Where, exactly, does our agent's memory live? Show me the database."*
2. *"How much of our engineering team's calendar this quarter is data
   plumbing instead of business product?"*

---

## The two ideas to repeat throughout the talk

> **1. "Agent memory is operational data."**
> **2. "Your engineers should build the business, not the plumbing."**

Plant both early. Repeat both at every beat. Land both in the closing triad.

---

## Arc at a glance

| Min | Beat | Slide | Purpose |
|---:|---|---:|---|
| 0-2     | Empowerment promise        | 00 · title         | Cold open. Dual question - memory + engineering effort. |
| 2-3     | About me                   | 01 · about         | Earn the mic. 60 seconds. |
| 3-6     | About TiDB                 | 02 · about-tidb    | Lead with simplification. Logos prove engineers got freed. |
| 6-8     | The Simplification         | 03 · simplify      | NEW. Where does engineering time actually go? |
| 8-12    | The Hook                   | 04 · sarah         | Three victims: customer, ops, engineering. |
| 12-17   | The Answer                 | 05 · why           | Compounding complexity. Existing stack + AI = 9-12 systems. |
| 17-20   | Convergence                | 06 · convergence   | Pinterest didn't consolidate; they freed engineers. |
| 20-24   | Three Memories             | 07 · memories      | Three types. One database. Not three more systems to operate. |
| 24-34   | Maya's Year (interactive)  | 08 · maya          | Agents as users. Same data layer for apps + agents. |
| 34-39   | Token Tax                  | 09 · librarian     | Why teams don't curate at scale - engineering reality. |
| 39-43   | Manus Math                 | 10 · manus         | The AI-native threat. They don't carry your debt. |
| 43-46   | Closing                    | 11 · whynow        | Fourth pillar: engineers build the business. |

**Total: ~46 min** with 1 minute of slack for transitions and reactions.

---

## Audience-specific relevance

| Leader / Company | Likely concern | Message that will land | Example to use |
|---|---|---|---|
| Paul Wu - Amway GCR CIO | Global IT modernization, data residency, cost across 80+ markets | "One operational data layer your team operates instead of nine - in every region your distributors do business" | Distributor calling support in Taipei and Shanghai - one customer, not two |
| Harrison Guo - Amway Taiwan IT | Practical execution, regional latency, local compliance | "Same MySQL wire protocol your team already operates - no new sharding expertise to hire" | Distributor commission queries that need both transactional correctness and analytical speed |
| Gu Li - Bob's VP Ecommerce | Conversion, recommendations, inventory accuracy | "When the customer asks 'is the sectional in stock for delivery,' the agent needs ATP, customer history, and warranty data in one ACID call - not glue code across four systems" | Furniture is high-AOV, low-frequency - re-engagement memory matters more than for fast fashion |
| Sanjay Patel - Bob's VP AI/Data | Moving 20 pilots into production without rebuilding the data layer | "Your pilot stack works for one agent; the production stack has to serve fifty - sprawl is what kills the migration AND the engineering team that has to operate it" | Pilot stack vs production stack diagram |
| Peter Winter - Vineyard Vines CIO | Brand voice, loyalty, returns, peak-event performance | "Every Black Friday your top customer should be remembered, not re-introduced - and your engineers should be building features, not maintaining sync jobs" | Sarah/Maya as written |
| Mark Tully - Icon Health CTO | Device data, operational reliability, regulated environments | "One audit trail in one transactional system - not four retention policies that don't agree" | Connected-fitness session history + clinician escalation |
| Jim Cramer - Tapestry Sr Director | Multi-brand, global, omnichannel CX | "One memory layer across Coach, Kate Spade, Stuart Weitzman - operated by one team, not three" | Cross-brand loyalty - one customer identity across brands |
| Adam Kuta - NYBC Consultant | Mission-critical data, governance, donor and patient flow | "Auditable by default - every read, every write, every retrieval, in one transactional system your engineers actually understand end to end" | Donor scheduling and eligibility |
| Dwight Peter - Westcon CIO | Distribution scale, partner systems, supply chain visibility | "Inventory visibility, partner state, and quote workflow in one operational layer your reps and your agents both read - one system to operate, not five" | Reseller agent answering "what can I ship from any warehouse this week" |

---

## Beat 00 - Empowerment promise (0:00 - 2:00) · Slide `title`

Open cold. Don't say hello. Don't thank anyone.

**Verbatim:**

> "By the end of the next 45 minutes you'll be able to walk into your Monday
> staff meeting and ask **two** questions that tell you whether your AI roadmap
> is built to compound value - or built to repay it every session.
>
> First: *where, exactly, does our agent's memory live?*
> Second: *how much of our engineering team's time goes to data plumbing
> instead of building product?*
>
> *(pause)*
>
> The next few years in enterprise AI won't be decided by which model you pick.
> They'll be decided by where your agents put what they remember - and how
> much of your engineering team is free to build the business instead of
> maintaining the plumbing underneath it.
>
> *(slow down)*
>
> Right now, most teams are wiring raw LLM calls together. Every session
> starts over. Same customer. Same product question. Same return. Same token
> bill. And underneath that, half your engineering team is already maintaining
> sharded MySQL, replication topology, sync jobs that broke at 3 AM. AI is
> about to double that load.
>
> That is not a model problem. It is an architecture problem - the same one
> your enterprise has been solving for a decade. AI just made it urgent."

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

**Lead with simplification, not consolidation. Logos prove engineers got freed.**

> "Before we get to the AI pain - one frame about what TiDB actually is, and
> why it matters now.
>
> If you've ever scaled MySQL or Postgres, you know the moment. You hit a wall.
> Suddenly you need sharding strategies, multi-reader single-writer topology,
> replication lag monitoring, manual failover runbooks. You hire engineers
> who specialize in keeping that working. They become a team. That team
> becomes a budget line.
>
> *(this is the key point)*
>
> TiDB does that scale-out automatically. MySQL wire protocol on top,
> distributed SQL underneath. Built from the Google Spanner papers in 2015.
> Eleven years in production.
>
> Pinterest didn't just consolidate six systems onto TiDB. They freed the
> engineers who were maintaining those six systems. LinkedIn runs it at
> scale because at LinkedIn's scale, hiring more sharding experts isn't a
> viable answer. Plaid eliminated 26 engineer-weeks of toil in one quarter.
>
> *(then add AI)*
>
> And the AI-native companies - Manus, Dify, two labs we work with under NDA -
> found their way to it from a different direction. They never had a sharded
> MySQL fleet. They architected for simplicity from day one. They picked
> TiDB so they wouldn't have to hire your infrastructure team.
>
> *(land it)*
>
> Same architecture, two journeys. Enterprise teams arrived from data platform
> consolidation. AI teams arrived because they couldn't afford the
> infrastructure team in the first place."

**Bridge:** "Before I show you the AI failure mode, let's look at where your
engineering team actually spends its time today."

---

## Beat 03 - The Simplification (6:00 - 8:00) · Slide `simplify` (NEW)

**This beat sells the spine of the talk.** It's where the audience realizes
the AI problem isn't separate from the problem they already have.

> "Quick reality check before we get to AI specifically.
>
> Industry data says somewhere between 40 and 60 percent of senior engineering
> effort at most enterprises goes to data infrastructure. Sharding decisions.
> Replication topology. Sync jobs that broke at 3 AM. Schema migrations across
> 12 services. Vector store reindexing. Warehouse ETL pipelines.
>
> Not building product. Not building features your customers can see. Plumbing.
>
> *(slow down)*
>
> Your customers don't care about your replication topology. Your competitors
> aren't beating you with better sharding. The AI-native startup eating your
> lunch isn't winning because their engineers are smarter - they're winning
> because their engineers spend their time on the business, not on the
> plumbing underneath it.
>
> *(this is the key point)*
>
> AI is about to make this worse. The pilot stack you'll see in two slides
> adds four more systems on top of what you already have. That's not 50
> percent of engineering on plumbing - that's 70.
>
> The question isn't whether you can afford another four systems. It's whether
> you can afford to keep the ones you already have."

**Bridge:** "Let me show you what that looks like in a customer interaction
your audience cares about."

---

## Beat 04 - The Hook (8:00 - 12:00) · Slide `sarah`

**Three victims of the same failure: customer, operations, engineering.**

> "Three ways the same failure looks.
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
> Third - your engineering team. They wanted to ship the AI agent that solves
> Sarah's problem in one sprint. Instead they spent six weeks wiring a vector
> store to your transactional database, building a sync job, debugging
> consistency bugs at 3 AM, and arguing about which system is the source of
> truth. The agent shipped in week eight. Half of it doesn't work.
>
> *(pause)*
>
> Same failure mode. Three different victims. Customer experience, operational
> reality, engineering velocity. All three are bleeding."

**Three failure modes - read each:**
- **NEVER WRITTEN** - the agent had context, didn't persist it.
- **NOT FINDABLE** - it's in the database somewhere, can't retrieve it.
- **CONTEXT ROT** - it's there, but it's stale or contradictory.

**Land:**
> "This is how LLMs work. No memory - by design. *(this is the key point)* And
> it's not a model problem - it's a data architecture problem. Your enterprise
> has solved data architecture problems before."

**Bridge:** "Here's what the architectural answer looks like - and why your
existing complexity is part of the answer, not a separate problem."

---

## Beat 05 - The Answer (12:00 - 17:00) · Slide `why`

**Show the compounding, not just one stack.**

> "Here's what most pilot stacks look like *(point at left)*. Four systems
> duct-taped together: a transactional database, a vector store, an analytics
> warehouse, a search index. Glue code in the middle. Sync jobs at night. The
> agent at the top is asking the only question that matters: *which version of
> reality is correct?*
>
> *(then escalate)*
>
> But this isn't the whole picture. This four-system AI stack is going on top
> of what you already have. Your transactional database is probably already
> sharded across 5 to 10 instances. You probably already have read replicas.
> You probably already have an analytics warehouse with its own ETL pipeline.
> Now you're adding a vector store, a search index, and orchestration code on
> top of that.
>
> Count the systems. You're not at four. You're at nine or twelve. Each one
> needs an engineer who knows it cold. Each one fails differently. Each one
> has its own consistency model. Each one is a 3 AM page.
>
> *(point at right)*
>
> Consolidated, the same capabilities live in one operational data layer.
> Not just AI memory - your transactional state, your analytics, your search,
> your vectors, all in one MySQL-compatible cluster. One audit log. One
> scaling story. One team that operates one system instead of nine."

**Land - read both lines, each on its own beat:**
> *"Infrastructure designed for legacy transactional purposes, not for compound knowledge."*
>
> **"Memory is infrastructure - not a feature you bolt on. And neither is the
> infrastructure underneath it."**

**Bridge:** "And it's not just us saying this - here's who's already picked
this architecture, and what it bought them."

---

## Beat 06 - Convergence (17:00 - 20:00) · Slide `convergence`

**Lead with engineering effort, not QPS.**

> "The companies on this slide didn't pick TiDB to handle more queries. They
> picked it to free their engineers.
>
> Pinterest consolidated six systems onto TiDB. The headline metric is 80%
> infrastructure reduction. The story behind that metric is that the team
> operating those six systems went from a database operations function to a
> small one - those engineers went back to building product.
>
> Plaid eliminated 26 engineer-weeks of toil in one quarter. That's two
> engineers freed up for an entire quarter to do something other than fight
> infrastructure fires.
>
> LinkedIn runs it at scale - they wrote in March that memory in their agent
> systems 'stops being incidental context and becomes a first-class primitive
> with explicit read/write semantics and lifecycle management.' That's the
> language of operating an infrastructure layer, not bolting on a feature.
>
> *(then pivot to AI-native)*
>
> The AI-native companies converged on the same answer because they couldn't
> afford the engineering team in the first place. Dify - 500K+ containers
> consolidated to one TiDB system, 90% operational reduction. Manus - millions
> of agent branches on one cluster, $5/month per user pricing. Two top-tier
> AI labs we work with under NDA.
>
> *(this is the key point)*
>
> Two different journeys, one architecture. Enterprise teams arrived from
> data platform consolidation. AI teams arrived because their headcount
> wouldn't allow anything else. They met in the same place."

---

## Beat 07 - Three Memories (20:00 - 24:00) · Slide `memories`

**Plant the vocabulary. Reinforce: one database, not three more systems.**

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
> "Three kinds of memory. Three access patterns. *(slow down)* One database,
> or three more systems for your team to operate. That's the decision."

**Bridge:** "Now watch all three fire in real time. Twelve months of one
customer, in six clicks - and one engineering team, not three."

---

## Beat 08 - Maya's Year (24:00 - 34:00) · Slide `maya`

**This is the demo.** Interactive. Click the stepper on the left to walk the
6 days. Always read the "Why TiDB wins" bullets out loud - they ARE the
punchline. The gauge shows steps-to-answer: TiDB always 1, Frankenstack always 4+.

**Open with "agents as users" frame:**
> "Before I walk through Maya's year, one frame.
>
> Maya is a customer of yours. She's a user of your application. The AI agent
> that serves her is also a user - a user of your data infrastructure. It
> reads, it writes, it queries, it joins.
>
> Two kinds of users, same data layer. Your apps and your agents both need
> transactional state, both need retrieval, both need to scale, both need to
> be auditable. If you're building a separate stack for the agents, you're
> now operating two infrastructures. Your engineers are now experts in two
> systems instead of one.
>
> TiDB serves both kinds of users from the same operational data layer."

---

**DAY 1 - First contact.**

> "Maya is brand new. The agent has never seen her. But the agent's data layer
> has 1.2 million lessons from every customer who came before her - fit
> patterns, return reasons, size preferences, brand affinities. All of that is
> warm, in one cluster, available in a single query before Maya finishes her
> first sentence."

*Why this matters - say it:*
> "On a fragmented stack, that fleet knowledge is split across a vector store, an
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
> transaction. Fragmented stack hopes nothing fails between call 2 and call 3."

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

*(30-sec sidebar for non-retail rooms)*

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
> performance story. That's a correctness story.
>
> *(then add the engineering tag)*
>
> And it's an engineering-effort story. The 47 lines of glue code aren't
> free. Somebody wrote them. Somebody maintains them. Somebody gets paged
> when they break."

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
> a compliance gap *and* a six-week engineering project to reconcile."

---

**Final line:**
> "Twelve months of compounding intelligence in six clicks. One engineering
> team, not three. Now let's look at what running this actually costs."

---

## Beat 09 - Token Tax (34:00 - 39:00) · Slide `librarian`

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
> *(bring this back to engineering)*
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
> same time. Your engineering team becomes a database operations team.
>
> So instead of curating harder, the industry sells you bigger context windows.
> Gemini's at two million tokens. That's not a retrieval strategy. That's a
> bigger bill - paid in tokens *and* in engineering effort.
>
> Every internal agent your team deploys will face this math. Multiply
> per-query cost by seat count. Then by query rate. That's the bill your CFO
> will be reading by Q3 - on top of the engineering team your CTO is already
> paying."

**Then the comparison block** - fragmented stack vs TiDB on curation:
- On a fragmented stack: those three systems are real, the sync problem is
  real, the consistency bugs surface exactly when you scale, and the
  engineering team that operates them is real and expensive.
- On TiDB: one `assemble_context()` call, rows + vectors + search + analytics
  in one ACID query, one round trip. The complexity that breaks at scale
  never gets built in the first place. The team you'd hire to maintain it
  gets to build something else.

**Land:**
> "Curation is the lever. TiDB makes curation a single ACID query - so the
> architecture that works at POC is the same one that works at a million queries
> a day, operated by the team you already have."

**Bridge:** "That's per-query economics. Now let's zoom out to the AI-native
threat - and why they're winning."

---

## Beat 10 - Manus Math (39:00 - 43:00) · Slide `manus`

**Reframe Manus as the AI-native competitive threat - not just unit economics.**

> "One last data point on cost - and this one's about competitive threat.
>
> Manus is a public proof of what AI unit economics actually look like. They
> charge $5 a month per user. The cheapest hosted database anywhere is $6 a
> month. That's negative gross margin before anyone runs an inference.
>
> *(pause)*
>
> They make it work because their per-database cost on TiDB scales to zero
> when the agent is idle. No infrastructure team. No replication topology to
> maintain. No sync jobs at 3 AM.
>
> *(this is the key point)*
>
> Manus isn't winning because their AI is better than yours. They're winning
> because they don't carry your infrastructure debt. They architected for
> simplicity from day one. Their engineers spend their time on the AI itself,
> not on the database team that operates the database team's databases.
>
> Every internal agent your team deploys will face a version of this math.
> The internal copilot serving 10,000 distributors. The store-ops agent
> serving 600 stores. The supply-chain agent running every hour against your
> WMS.
>
> Per-query cost × seat count is your model bill. Per-tenant infrastructure
> cost × tenant count is your cloud bill. Engineering effort × headcount is
> the third bill - the one nobody talks about. All three have to be defensible.
>
> *(avoid overclaiming here)*
>
> TiDB is what made all three defensible for Manus. Same lever exists for you.
> Different scale, same math."

**Bridge:** "The architecture is real. The labs converged. The enterprise
stack converged. The economics work. The competitive threat is here. Here's
what you walk out with."

---

## Beat 11 - Closing (43:00 - 46:00) · Slide `whynow`

**Four pillars, not three.**

> "Four sentences. *(read the quartet)*
>
> The model forgets.
> The platform remembers.
> The human decides.
> **The engineers build the business.**
>
> *(walk each one)*
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
> **The engineers build the business** because they're not maintaining nine
> systems anymore. They're not the database operations team. They're shipping
> product.
>
> *(slow down)*
>
> Two questions for Monday.
>
> First: *Where, exactly, does our agent's memory live? Show me the database.*
> Second: *How much of our engineering team's calendar this quarter is data
> infrastructure plumbing instead of business product?*
>
> Ask both of your team. Ask both of every AI vendor pitching you next quarter.
>
> If the first answer is four systems and a sync job, you don't have a memory
> layer - you have a roadmap risk.
>
> If the second answer is more than 30 percent, you have an engineering
> capacity problem that AI is about to compound. The AI-native startup
> threatening you doesn't have it. They architected around it from day one.
> You can too.
>
> Memory isn't stored. It's maintained.
> Engineering is where you spend it.
>
> *(point at QR)*
>
> Find me at the booth - happy to map your current data architecture and
> tell you what consolidating it would free up. No pitch. Diagnostic only."

---

## Sarah → Maya closed-loop map

The deck's main narrative arc: Sarah names the failure modes; Maya resolves
each one in the demo.

| Sarah failure mode | Where Maya resolves it |
|---|---|
| **Never written** - agent had context, didn't persist it | Day 14: outcome + reasoning commit together in one ACID transaction |
| **Not findable** - it's in the database somewhere | Day 60: one query across four modalities |
| **Context rot** - it's there, but stale or contradictory | Day 21 & 22: fleet auto-learns; Day 90: episodic memory IS the audit trail |
| **Engineering bleed** - team spent six weeks on plumbing | Day 60: 47 lines of glue replaced by one query; Beat 03 names it |

---

## Best lines to use

1. "Agent memory is operational data."
2. "Your engineers should build the business, not the plumbing."
3. "The next few years in enterprise AI won't be decided by which model you pick. They'll be decided by where your agents put what they remember - and how much of your engineering team is free to build the business."
4. "Bigger context window is a bigger meter, not a better answer."
5. "Architectural sprawl is the silent killer of enterprise AI - and the loudest cost on your engineering budget."
6. "One customer pays the cost of the lesson; every customer benefits."
7. "Memory is infrastructure - not a feature you bolt on. And neither is the infrastructure underneath it."
8. "If outcome and reasoning don't commit together, you can't audit either."
9. "AI-native startups aren't winning on smarter AI - they're winning on lighter infrastructure debt."
10. "Pinterest didn't consolidate six systems. They freed the engineers."
11. "Two kinds of users: your apps and your agents. One data layer."
12. "Count the systems. You're not at four. You're at nine."
13. "The model forgets. The platform remembers. The human decides. The engineers build."
14. "Where, exactly, does our agent's memory live? Show me the database."
15. "How much of our engineering team's calendar is plumbing instead of product?"

---

## Audience objections

| Likely objection | Response |
|---|---|
| "We already have Postgres / Aurora / SQL Server. Why another database?" | "TiDB is MySQL-wire compatible - you don't move off your operational stack, you consolidate the workloads that today live across four systems plus your sharded fleet. The question is sprawl, not replacement - and how much engineering time it's costing you." |
| "Vector search isn't memory. We use Pinecone for that already." | "Vectors are part of memory - the retrieval index. Memory also includes the customer record, the order, the audit trail. The fragility is when those four live in four systems and have to commit together - and the engineers who maintain that consistency are expensive." |
| "We're a SQL Server / Oracle shop. Migration risk is too high." | "Most enterprise customers start with one workload - typically the agent's operational state - and run TiDB alongside the existing system. We're not asking you to migrate Oracle; we're asking where you're going to put the new workload, and whether you want to staff a separate team to operate it." |
| "How is this different from MongoDB / DynamoDB / NoSQL?" | "Strong consistency, distributed ACID, MySQL compatibility, native analytical access. NoSQL stores trade consistency for scale; agents need both - and your engineers need fewer specialty skills, not more." |
| "Data residency / sovereignty - we operate in 80+ countries." | "TiDB Cloud runs in every major region; for regulated workloads we offer BYOC - the cluster runs inside your AWS / Azure / GCP account, your IAM, your CISO's certification." |
| "Compliance - HIPAA / PCI / SOX." | "SOC 2 Type II, HIPAA-eligible deployments, audit logs as a first-class capability. Episodic memory IS your audit trail by design - one retention policy, not four that disagree." |
| "Show me a non-AI customer at scale." | "Eleven years in production. LinkedIn, Pinterest, Square, Plaid, Flipkart. Pinterest's headline isn't 1.3M QPS - it's that they freed the team that was operating six systems. AI is one workload pattern among many." |
| "How long until we have a working POC?" | "Free serverless tier today. A working agent-memory POC in days, not quarters. We bring the integration patterns - LangChain, LlamaIndex, MCP - so you're not building from scratch *or* hiring a sharding expert." |
| "What's the failure mode when TiDB goes down?" | "Distributed by design. Raft consensus, multi-AZ, multi-region. The mode that kills your agent isn't TiDB going down - it's the sync job between your four systems failing at 3 AM. That's exactly what consolidation removes - and that's the on-call rotation your engineers stop carrying." |
| "We're committed to Snowflake / Databricks. Where do they fit?" | "TiDB is operational - the live state your agent reads and writes. Snowflake / Databricks are analytical - the warehouse your data team queries. Different workloads. The fragmentation problem is across operational systems, not between operational and analytical." |
| "We don't have an engineering capacity problem." | "Then you're an outlier. The companies who quantified it - Plaid, Pinterest, Dify - all found 20-90% of an engineering team's time going to data infrastructure plumbing. Worth measuring before you add four more systems for AI." |

---

## Pacing & risk management

- **The 10-minute Maya demo is the load-bearing beat.** If the room is cold or
  the demo is slow, drop Day 22 (stranger benefits). Days 1, 14, 60, 90 are
  non-negotiable.
- **If running long:** trim Beat 04 (Sarah) by skipping the second vignette
  (the distributor) and going straight from retail to engineering. Saves ~60s.
- **If running short:** expand Beat 06 (Convergence) with Pinterest's 6-system
  consolidation story or Plaud AI's audio-to-memory pipeline.
- **Q&A:** held at the booth, not on the clock. Don't open Q&A from the stage
  - it kills the closing.
- **If audience is heavily AI-skeptical:** front-load Beat 03 (Simplification)
  and treat Beat 02 (About TiDB) as the "we already won at the previous
  problem" frame. Demo becomes proof, not premise.

---

## Claim discipline

Three claims to source on stage or hedge:

| Claim | How to land it |
|---|---|
| "LinkedIn TiDB scale" | Always frame as "one of the largest publicly disclosed TiDB users, per their March 2026 engineering blog" |
| "1.4M Manus databases" | Say "publicly disclosed by Manus - over a million databases, one cluster" |
| Cost-ladder math | Always say "rough order; your numbers will vary by model and provider" |
| "40-60% engineering on data plumbing" | Frame as "industry surveys" or "what enterprises tell us when they measure it" - don't cite a specific report you can't name |

Two phrases to retire:

- "The database is the agent's brain" → "The database is the agent's persistent state"
- "Pinecone alone cannot do this" → "A vector store alone has the embeddings, but not the order, not the customer record, not the audit trail"

---

## Final 30-second talk track

Use this if you have to summarize the whole talk in 30 seconds:

> "Your data infrastructure has scaled into complexity that consumes half your
> engineering team. AI is about to double that load - four more systems on top
> of what you already have. TiDB is a MySQL-compatible operational data layer
> that consolidates transactional, retrieval, and analytical workloads into
> one system - so your agents share one source of truth, your engineers operate
> one infrastructure, and your business gets the headcount that used to maintain
> sync jobs. Two questions to ask Monday: where does our agent's memory live,
> and how much of our engineering team's calendar is plumbing instead of
> product? If the answers are 'four systems and a sync job' and 'more than 30
> percent,' you have a roadmap risk that AI is about to compound."
