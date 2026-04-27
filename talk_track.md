# Talk track - 45-minute enterprise booth deck

45 minutes. Twelve slides. One interactive demo. **One primary thesis.**

**Audience:** senior enterprise technology leaders - CIOs, CTOs, VPs of Ecommerce,
VPs of AI/Data, transformation consultants. Companies like Amway, Bob's Discount
Furniture, Vineyard Vines, Icon Health, Tapestry, NYBC, Westcon. Most are early
in their AI journey, running pilots on raw LLM API calls, looking for the path
from pilot to production without rebuilding the data layer twice.

**Theme weighting: 70% simplification spine / 30% AI memory acceleration.**

The simplification of enterprise data infrastructure is the spine of this talk.
AI memory is the most urgent example - the thing that makes the existing problem
unsurvivable. Don't let the AI story dominate. Lead the audience to the
simplification realization first; AI proves the urgency.

---

## The one-sentence story (the primary thesis)

> **"Your data infrastructure already consumes 40-60% of your engineering
> team. AI is about to push that past 70%. TiDB is one database that
> eliminates complexity at any scale - so your engineers build the business
> instead of the plumbing."**

Source line we lean on: *"One database. Infinite scale. Zero complexity."*
(TiDB Cloud Technical Value Proposition, April 2026)

The simplification is the spine. AI memory is the proof point that the problem
is now urgent. Order: state the problem -> show the proof -> name the urgent
example -> demo the proof -> close the cost case -> walk out.

---

## The two ideas to repeat throughout the talk

> **1. "Your engineers should build the business, not the plumbing."**
> **2. "One database. Multiple workloads. One ACID boundary."**

Plant both early. The AI memory story is an *application* of #2 - one of the
workloads, not the only one. Land both in the closing.

---

## Arc at a glance (REWEIGHTED 70/30, convergence MOVED EARLIER)

| Min | Beat | Slide | Theme | Purpose |
|---:|---|---:|---|---|
| 0-2     | Cold open                | 00 · title         | SIMP | Engineering effort question first. AI is the trigger, not the story. |
| 2-3     | About me                 | 01 · about         | -    | 60 sec credibility. |
| 3-7     | About TiDB               | 02 · about-tidb    | SIMP | Scale-out without the engineering team. Logos prove the simplification. |
| 7-13    | The Simplification       | 03 · simplify      | SIMP | EXPANDED to 6 min. The spine. Where 40-60% of engineering goes today. |
| 13-19   | Customer Proof           | 04 · convergence   | SIMP | EXPANDED to 6 min. **MOVED EARLIER.** Pinterest 6→1, Flipkart 700→1, Plaid 26 weeks. AI labs come second. |
| 19-22   | The Urgent Example (AI)  | 05 · sarah         | AI   | 3 min. Reframed: AI is the symptom that the existing problem is now unsurvivable. |
| 22-25   | The Architecture (4→1)   | 06 · why           | AI/SIMP | 3 min. 9-12 systems collapse to 1. |
| 25-27   | Three Memories           | 07 · memories      | AI   | 2 min. Vocabulary plant. |
| 27-33   | Maya's Year (compressed) | 08 · maya          | AI/SIMP | 6 min. Day 22 dropped. Each beat = "1 query vs 4 systems." |
| 33-37   | Token Tax + Eng Reality  | 09 · librarian     | SIMP/AI | 4 min. Why teams don't curate at scale. |
| 37-41   | The AI-Native Threat     | 10 · manus         | SIMP | 4 min. They don't carry your debt. |
| 41-46   | Closing                  | 11 · whynow        | SIMP | 5 min. Engineers build the business. |

**Time budget by theme:**
- Simplification-dominant beats: ~30 min (65%)
- AI-dominant beats: ~13 min (28%)
- About me: 1 min (3%)
- Hybrid beats lean simplification

**Total: ~46 min.**

---

## Audience-specific relevance

| Leader / Company | Likely concern | Message that will land | Example to use |
|---|---|---|---|
| Paul Wu - Amway GCR CIO | Global IT modernization, data residency, cost across 80+ markets | "One database your team operates instead of nine - in every region your distributors do business" | Distributor calling support in Taipei and Shanghai - one customer, not two |
| Harrison Guo - Amway Taiwan IT | Practical execution, regional latency, local compliance | "Same MySQL wire protocol your team already operates - no new sharding expertise to hire" | Distributor commission queries that need both transactional correctness and analytical speed |
| Gu Li - Bob's VP Ecommerce | Conversion, recommendations, inventory accuracy | "When the customer asks 'is the sectional in stock for delivery,' the agent needs ATP, customer history, and warranty data in one ACID call - not glue code across four systems" | Furniture is high-AOV - re-engagement memory matters more than fast fashion |
| Sanjay Patel - Bob's VP AI/Data | Moving 20 pilots into production without rebuilding the data layer | "Your pilot stack works for one agent; production has to serve fifty - sprawl is what kills the migration AND the team that has to operate it" | Pilot stack vs production stack diagram |
| Peter Winter - Vineyard Vines CIO | Brand voice, loyalty, returns, peak-event performance | "Every Black Friday your top customer should be remembered - and your engineers should be building features, not maintaining sync jobs" | Sarah/Maya as written |
| Mark Tully - Icon Health CTO | Device data, operational reliability, regulated environments | "One audit trail in one transactional system - not four retention policies that don't agree" | Connected-fitness session history + clinician escalation |
| Jim Cramer - Tapestry Sr Director | Multi-brand, global, omnichannel CX | "One memory layer across Coach, Kate Spade, Stuart Weitzman - operated by one team, not three" | Cross-brand loyalty - one customer identity across brands |
| Adam Kuta - NYBC Consultant | Mission-critical data, governance, donor and patient flow | "Auditable by default - in one transactional system your engineers actually understand end to end" | Donor scheduling and eligibility |
| Dwight Peter - Westcon CIO | Distribution scale, partner systems, supply chain visibility | "Inventory visibility, partner state, and quote workflow in one data layer your reps and your agents both read" | Reseller agent answering "what can I ship from any warehouse this week" |

---

## Beat 00 - Cold open (0:00 - 2:00) · Slide `title`

Open cold. Don't say hello. Don't thank anyone.
**The first question is about engineering effort. AI is the trigger.**

**Verbatim:**

> "By the end of the next 45 minutes you'll be able to walk into your Monday
> staff meeting and ask the **one question** that tells you whether your
> data infrastructure is building your business - or being maintained by it.
>
> *(pause)*
>
> *How much of our engineering team's calendar this quarter is data
> infrastructure plumbing instead of building product?*
>
> *(pause)*
>
> Industry surveys say the answer at most enterprises is 40 to 60 percent.
> Sharding strategies. Replication topology. Sync jobs that broke at 3 AM.
> Schema migrations across a dozen services. Warehouse ETL. Vector store
> reindexing.
>
> Not building product. Plumbing.
>
> *(slow down)*
>
> And here's the trigger that brought us into this room - AI is about to
> double that load. Every AI pilot you've seen in the last twelve months
> adds another four systems on top of what you already have. The same
> architectural sprawl that's been quietly draining your team for a
> decade is about to compound.
>
> The companies winning aren't doing it with smarter AI. They're doing it
> with simpler infrastructure. The architecture they picked is the same
> one you can pick - it just consolidates the layer you've been bleeding
> engineers to maintain.
>
> Your engineers should build the business. Not the plumbing."

**Cue:** First sentence is your hello. Don't read the slide.

---

## Beat 01 - About me (2:00 - 3:00) · Slide `about`

One spoken line. Don't read the slide.

> "Quick context - Naval Academy NLP work on 580 million tweets, infantry
> officer in the Marines, then open-source databases at Percona, in-house LLMs
> at Sosivio before there was an API to call, AI tooling for the US Government
> at BabelStreet. I've watched four versions of this exact mistake. Now I run
> Solution Engineering at TiDB."

**Cue:** 60 seconds, then move.

---

## Beat 02 - About TiDB (3:00 - 7:00) · Slide `about-tidb`

**Lead with simplification. Logos = engineering teams that got freed.**

> "Before we get to the failure mode, one frame about what TiDB actually is,
> and why it shows up at the moment your team starts asking these questions.
>
> If you've ever scaled MySQL or Postgres, you know the moment. You hit a
> wall. Suddenly you need sharding strategies, multi-reader/single-writer
> topology, replication lag monitoring, manual failover runbooks. You hire
> engineers who specialize in keeping that working. They become a team.
> That team becomes a budget line.
>
> *(this is the key point)*
>
> TiDB does that scale-out automatically. MySQL wire protocol on top,
> distributed SQL underneath. Built from the Google Spanner papers in 2015.
> Eleven years in production. Pinterest, Flipkart, LinkedIn, Plaid, Square,
> Bolt, Atlassian.
>
> *(then the AI second-arrival)*
>
> And the AI-native companies - Manus, Dify, two top-10 labs we work with
> under NDA - found their way to it from a different direction. They never
> had a sharded MySQL fleet. They architected for simplicity from day one
> because they couldn't afford to hire your infrastructure team.
>
> *(land it)*
>
> Same architecture, two journeys. Enterprise teams arrived from data
> platform consolidation. AI teams arrived because their headcount wouldn't
> allow anything else. They met in the same place: one database that
> eliminates complexity at any scale."

**Bridge:** "Let me show you where engineering time actually goes today -
because that's the bigger number you're going to want to ask about Monday."

---

## Beat 03 - The Simplification (7:00 - 13:00) · Slide `simplify`

**EXPANDED to 6 minutes. THE SPINE OF THE TALK.** Sell it hard.
Plant the proof points the convergence slide will then dwell on.

> "Quick reality check before we go further.
>
> *(slow down - this is the slide everything else hangs on)*
>
> Industry surveys say between 40 and 60 percent of senior engineering effort
> at most enterprises goes to data infrastructure. Not feature work. Not
> customer-facing product. Plumbing.
>
> Specifically: sharding decisions. Replication topology. Read-replica
> rebalancing. Failover runbooks. Sync jobs between transactional and
> analytics. Schema migrations across a dozen services. Warehouse ETL
> pipelines. Vector store reindexing.
>
> Count the systems your team operates today. The typical enterprise has
> a sharded transactional fleet of 5 to 10 instances. Read replicas. An
> analytics warehouse with its own ETL. A search index. A cache cluster.
> That's already 5 to 12 separate operational systems before you put a
> single AI workload on top.
>
> *(this is the key point)*
>
> Your customers don't care about your replication topology. Your
> competitors aren't beating you with better sharding. The AI-native
> startup eating your lunch isn't winning because their engineers are
> smarter - they're winning because their engineers spend their time on
> the business, not on the plumbing underneath it.
>
> *(then escalate to the AI compounding)*
>
> AI is the trigger that makes this unsurvivable. Every AI pilot you've
> seen adds four more systems on top: a vector store, a search index, an
> embedding pipeline, and orchestration glue code. That's not 50 percent
> of engineering on plumbing - that's 70.
>
> *(pause)*
>
> Here's what I want you to hold in your head for the rest of the talk.
> The companies who collapsed those layers - I'm going to walk you through
> the proof in two minutes - didn't do it because they wanted a fancier
> database. They did it because they ran out of engineers willing to
> maintain six systems. Pinterest collapsed six systems into one. Flipkart
> replaced 700 MySQL clusters with one. Plaid eliminated 26 engineer-weeks
> of toil in a single quarter. Dify went from 500,000 containers to one
> system.
>
> The question isn't whether you can afford another four systems for AI.
> It's whether you can afford the ones you already have."

**Bridge:** "Let me show you the math on those four customers - and what
their engineering teams went back to building."

---

## Beat 04 - Customer Proof (13:00 - 19:00) · Slide `convergence`

**MOVED UP. EXPANDED to 6 minutes.** This is the proof of the spine -
not just proof of the AI story. Lead with non-AI consolidation; AI labs
come last.

> "Six customers. Two journeys. One architecture.
>
> *(start with enterprise consolidation - lead here)*
>
> **Pinterest** - the headline metric is 80 percent infrastructure cost
> reduction. The story behind that metric is the team that used to operate
> six different data systems is now operating one. Those engineers went back
> to building product. They also got 3-to-5x p99 latency improvement and now
> sustain 1.3 million QPS, but the latency was the side effect. The
> consolidation was the point.
>
> **Flipkart** - 700-plus MySQL clusters replaced by a single TiDB
> deployment. P95 latency under 5 milliseconds at over a million QPS. The
> team operating that fleet went from a database operations function to a
> handful of engineers. Same workload, an order of magnitude less to
> operate.
>
> **Plaid** - eliminated 104 minutes of downtime *and* 26 engineer-weeks of
> toil in one quarter. That's two engineers freed up for an entire quarter
> to do something other than fight infrastructure fires.
>
> **Bolt** - storage compression alone delivered 3x reduction. Different
> lever, same theme: less infrastructure to operate.
>
> **GMGN** - migrated to TiDB Cloud in two weeks, cut cost 50 percent.
>
> *(pause - then the LinkedIn quote on screen)*
>
> And LinkedIn - one of the largest publicly disclosed TiDB users - wrote
> in March that memory in their agent systems 'stops being incidental
> context and becomes a first-class primitive with explicit read/write
> semantics and lifecycle management.' That's the language of operating an
> infrastructure layer. Not bolting on a feature.
>
> *(then the AI-native arrivals - SECONDARY)*
>
> The AI-native companies converged on the same architecture from the other
> direction. Dify - 500,000-plus containers consolidated to one TiDB
> system, 90 percent operational reduction. Manus - millions of agent
> branches on one cluster, $5-per-month-per-user pricing because their
> per-database cost scales to zero when idle. Two top-10 AI labs we work
> with under NDA picked the same architecture for the same reason.
>
> *(land - this is the convergence story)*
>
> Two journeys. One architecture. Enterprise teams arrived from data
> platform consolidation - they had too many systems, too few engineers,
> too many 3 AM pages. AI teams arrived because their headcount wouldn't
> allow anything else - they could not afford to hire your infrastructure
> team. They met in the same place: one database that eliminates complexity
> at any scale.
>
> *(reinforce the spine)*
>
> Notice what every customer story has in common. The headline is never
> 'we got more QPS.' The headline is *'we freed our engineers.'* That's the
> question I want you to ask Monday. That's what this whole talk is about."

**Bridge:** "Now - to be clear, you don't have a Pinterest-scale problem
yet. But there's one workload that's about to put you there faster than
anything else has. Let me show you the most urgent example."

---

## Beat 05 - The Urgent Example: AI (19:00 - 22:00) · Slide `sarah`

**Compressed to 3 minutes.** Reframed: AI is the SYMPTOM that proves the
existing complexity is now unsurvivable. Pick ONE vignette - retail.

> "AI is the workload that makes the simplification unavoidable. Here's why.
>
> *(walk the chat tabs)*
>
> Black Friday. Sarah is your top-1% customer; she spent $4,800 three weeks
> ago. Tonight she's back asking about her return. The agent has no idea who
> she is. Same script. Same stranger.
>
> Three things just bled at once. Customer experience - your VIP got treated
> like a stranger. Operational reality - your support team is going to
> handle the escalation. And engineering velocity - the team that wanted to
> ship this agent in one sprint instead spent six weeks wiring a vector
> store to your transactional database, building a sync job, debugging
> consistency bugs at 3 AM, and arguing about which system is the source
> of truth.
>
> *(read the failure modes on screen)*
>
> Three failure modes - never written, not findable, context rot. All three
> are the same architecture problem your team has solved before. The agent
> doesn't have a memory feature missing. Its memory layer is fragmented
> across systems that don't share a transaction.
>
> *(land)*
>
> No memory - by design. This is not a model problem. It's a data
> architecture problem. Your enterprise has solved data architecture
> problems before. The companies on the previous slide solved this exact
> one - they just solved it before AI made it urgent."

**Bridge:** "Here's what the consolidated answer actually looks like."

---

## Beat 06 - The Architecture (22:00 - 25:00) · Slide `why`

**Compressed to 3 min.** Show the 9-12 → 1 collapse.

> "On the left - what most pilot stacks look like. Four systems duct-taped
> together: a transactional database, a vector store, an analytics
> warehouse, a search index. Glue code in the middle. The agent at the top
> asking 'which version of reality is correct?'
>
> But this isn't the whole picture. This four-system AI stack is going on
> top of what you already have. Your transactional database is probably
> already sharded across 5 to 10 instances. You probably have read
> replicas. You probably have an analytics warehouse with its own ETL
> pipeline. Now you're adding a vector store, a search index, and
> orchestration glue.
>
> Count the systems. You're not at four. You're at nine or twelve.
>
> *(point right)*
>
> Consolidated, the same capabilities live in one operational data layer.
> Not just AI memory - your transactional state, your analytics, your
> search, your vectors, all in one MySQL-compatible cluster. One audit
> log. One scaling story. One team operates one system.
>
> *(land)*
>
> Memory is infrastructure. So is the data layer underneath it. Neither
> belongs in nine systems."

**Bridge:** "Three named patterns to watch for in the demo."

---

## Beat 07 - Three Memories (25:00 - 27:00) · Slide `memories`

**Compressed to 2 min.** Pure vocabulary plant.

> "Three kinds of memory every enterprise agent needs.
>
> **Episodic** - what happened. Per customer, time-stamped, auditable.
> Maya returned a size 4 wrap dress on April 21.
>
> **Semantic** - what we learned. Cross-customer, compounding. Bias-cut
> linen runs small - +1 size for relaxed weaves. **One pays the cost; all
> benefit.**
>
> **Procedural** - what works. The strategy itself. Check returns first,
> then confirm size, then suggest fit alternatives.
>
> Three patterns. Three access shapes. One database - because in TiDB
> they're three queries against the same ACID boundary, not three more
> systems for your team to operate."

**Bridge:** "Now watch all three fire in real time."

---

## Beat 08 - Maya's Year (27:00 - 33:00) · Slide `maya`

**COMPRESSED to 6 minutes.** Drop Day 22 (stranger benefits). Frame every
beat as **"one ACID query vs four systems your engineering team would have
to maintain."** The demo is now proof of the simplification spine, not a
standalone AI memory pitch.

**Open with simp framing:**
> "Maya is a customer of yours. She's also a user of your data
> infrastructure. The agent serving her reads and writes the same
> operational data your apps do. **Two kinds of users, one data layer.**
> If you're standing up a separate stack for the agent, you're now
> operating two infrastructures and your engineering team is now expert
> in two systems instead of one."

---

**DAY 1 - First contact.**

> "The agent has never seen Maya. But the data layer has 1.2 million
> lessons from every customer who came before her. All of that is warm,
> in one cluster, one query.
>
> On a fragmented stack, that fleet knowledge is split across a vector
> store, an analytics warehouse, and a search index. Three systems. Three
> connection pools. Three failure modes. Three engineers who know each one
> cold. **One query on TiDB. Three systems on the alternative.** Same
> answer to Maya. Very different team operating it."

---

**DAY 14 - Returns + reasons.**

> "Maya returns two dresses. The outcome - the return - and the reason -
> fit issue, wrong size - have to commit together. If they don't, your
> agent's recommendation engine is reading from a different reality than
> your audit trail.
>
> TiDB does it in one ACID transaction. Fragmented stack hopes nothing
> fails between call 2 and call 3. **One transaction on TiDB. Two systems
> hoping they stayed in sync on the alternative.** Multiply that by every
> agent operation you ever ship."

---

*(skip Day 21 if running short. Skip Day 22 entirely - cut from the
demo.)*

---

**DAY 60 (★ PAYOFF) - Read the agent reply slowly.**

> "I picked five for you. The Coach satchel - brand you've kept twice. The
> dress - runs true on you. The blazer - for the March gala, sized up for
> brand X. Nothing on this list is something you'd return.
>
> *(pause)*
>
> One query. Four modalities - relational rows, vector similarity,
> full-text BM25, and columnar analytics - all in one ACID transaction.
> 38 milliseconds. On the fragmented stack: five microservice calls, 47
> lines of glue code, 2,410 milliseconds, and one stale field that would
> have killed the gala recommendation entirely.
>
> *(this is the spine)*
>
> The 47 lines of glue aren't free. Somebody wrote them. Somebody
> maintains them. Somebody gets paged when they break. **That's the
> engineering tax line item. The headline isn't faster - it's nobody on
> your team has to operate it.**"

---

**DAY 90 - The audit.**

> "Compliance asks why the agent recommended a product to this customer
> on this date. On TiDB, that's a query. Episodic memory IS the audit
> trail.
>
> Try replaying that across four systems where retention policies
> disagree, where the vector store was overwritten 200 times since April,
> where the warehouse snapshot is from a different timestamp than the
> transactional record. **That's a six-week engineering reconciliation
> project on the alternative. One query on TiDB.**"

---

**Final line:**
> "Twelve months of compounding intelligence in six clicks. **One
> engineering team, not three.** That's the line that should land. Now
> let's look at what running this costs."

---

## Beat 09 - Token Tax + Engineering Reality (33:00 - 37:00) · Slide `librarian`

**4 minutes. Hammer the engineering-reality angle harder.**

> "Three tiers. Naive RAG, 100K tokens, no caching - rough order, $0.31 per
> query, $310K a day at a million queries. Cached RAG, the current best
> practice, $0.04 per query, $40K a day. Curated context, 580 tokens through
> one ACID query - one cent per query, $9,500 a day.
>
> Even RAG done right is 4x more than curated. Bigger context window is a
> bigger meter, not a better answer.
>
> *(this is the engineering-reality bridge)*
>
> So why doesn't every team curate aggressively? Because the production
> reference architecture - what Anthropic, LangChain, AWS all describe -
> needs three things working together: vector search, keyword search with
> BM25, and your relational state. Synced. Consistent. Queried together.
>
> On a fragmented stack, that's three systems your team builds and
> maintains. They build it in stages. Vector store first. Keyword search
> bolted on later. Relational joins stitched in by the application. Works
> as a POC. Then scale arrives - and with AI, scale arrives fast - and
> suddenly you're paying for three systems, syncing them, debugging
> consistency bugs across them, and your team has become a database
> operations team instead of an AI team.
>
> *(land)*
>
> So instead of curating harder, the industry sells you bigger context
> windows. Gemini's at two million tokens. That's not a retrieval
> strategy. That's a bigger bill - paid in tokens *and* in engineering
> effort.
>
> On TiDB it's one assemble_context() call. Rows + vectors + search +
> analytics in one ACID query. The complexity that breaks at scale never
> gets built in the first place. **The team you'd have hired to maintain
> it gets to build something else.**"

**Bridge:** "Last data point - and it's about competitive threat."

---

## Beat 10 - The AI-Native Threat (37:00 - 41:00) · Slide `manus`

**4 minutes.** Reframe Manus as the AI-native competitive threat that's
winning on lighter infrastructure debt - not just the unit-economics proof.

> "Manus is the public proof of what AI unit economics actually look like.
> They charge $5 a month per user. The cheapest hosted database anywhere
> is $6 a month. That's negative gross margin before anyone runs an
> inference.
>
> *(pause)*
>
> They make it work because their per-database cost on TiDB scales to zero
> when the agent is idle. No infrastructure team. No replication topology
> to maintain. No sync jobs at 3 AM.
>
> *(this is the key point - say it slowly)*
>
> Manus isn't winning because their AI is better than yours. They're
> winning because they don't carry your infrastructure debt. They
> architected for simplicity from day one. Their engineers spend their
> time on the AI itself - not on the database team that operates the
> database team's databases.
>
> Every internal agent your team deploys will face a version of this
> math. The internal copilot serving 10,000 distributors. The store-ops
> agent serving 600 stores. The supply-chain agent running every hour
> against your WMS.
>
> Per-query cost x seat count is your model bill. Per-tenant
> infrastructure cost x tenant count is your cloud bill. Engineering
> effort x headcount is the third bill - the one nobody talks about. All
> three have to be defensible.
>
> *(don't overclaim)*
>
> TiDB is what made all three defensible for Manus. Same lever exists for
> you. Different scale, same math."

**Bridge:** "Here's what you walk out with."

---

## Beat 11 - Closing (41:00 - 46:00) · Slide `whynow`

**5 minutes.** Four pillars. Two Monday questions, but lead with the
engineering one.

> "Four sentences.
>
> The model forgets.
> The platform remembers.
> The human decides.
> **The engineers build the business.**
>
> *(walk each one)*
>
> The model forgets because it's stateless by design. Don't try to fix that
> with a bigger context window - that's the bigger meter, not the better
> answer.
>
> The platform remembers because the operational data layer is where state
> lives. Three memories - episodic, semantic, procedural - in one ACID
> boundary, MySQL-compatible, auditable by default.
>
> The human decides because your engineers will stop digging through logs
> and start curating the playbooks the agents learn from.
>
> **The engineers build the business** because they're not maintaining
> nine systems anymore. They're not the database operations team. They're
> shipping product.
>
> *(slow down)*
>
> Two questions for Monday. **Lead with the second one - it's the one
> this whole talk is about.**
>
> First: *How much of our engineering team's calendar this quarter is
> data infrastructure plumbing instead of business product?*
>
> If the answer is more than 30 percent, you have an engineering capacity
> problem - and AI is about to compound it. The AI-native startup
> threatening you doesn't have it. They architected around it from day
> one. You can too. Pinterest did. Flipkart did. Plaid did. Dify did.
>
> Second: *Where, exactly, does our agent's memory live? Show me the
> database.*
>
> If the answer is four systems and a sync job, you don't have a memory
> layer - you have a roadmap risk. And it's the same architecture problem
> the first answer warned you about.
>
> *(land)*
>
> One database. Multiple workloads. One ACID boundary.
> Engineers building the business, not the plumbing.
>
> *(point at QR)*
>
> Find me at the booth. Happy to map your current data architecture and
> tell you what consolidating it would free up. No pitch. Diagnostic only."

---

## Sarah → Maya closed-loop map

The deck's main narrative arc: Sarah names the failure modes; Maya resolves
each one in the demo - and every resolution doubles as proof of the
simplification spine.

| Sarah failure mode | Where Maya resolves it | Simplification proof |
|---|---|---|
| **Never written** | Day 14: outcome + reasoning commit together in one ACID transaction | One commit on TiDB, two systems on the alternative |
| **Not findable** | Day 60: one query across four modalities | One query, four modalities; vs five microservice calls |
| **Context rot** | Day 90: episodic memory IS the audit trail | One retention policy, not four that disagree |
| **Engineering bleed** | Day 60: 47 lines of glue replaced by one query | Beat 03 names it, Convergence proves it, Maya demos it |

---

## Best lines to use

1. "Your engineers should build the business, not the plumbing."
2. "One database. Infinite scale. Zero complexity."
3. "How much of our engineering team's calendar is plumbing instead of product?"
4. "Pinterest didn't pick TiDB for more QPS. They picked it to free their engineers."
5. "Same architecture, two journeys. Enterprise from consolidation. AI from headcount constraint. Same place."
6. "Bigger context window is a bigger meter, not a better answer."
7. "The headline is never 'we got more QPS.' The headline is 'we freed our engineers.'"
8. "Architectural sprawl is the silent killer of enterprise AI - and the loudest line on your engineering budget."
9. "AI-native startups aren't winning on smarter AI - they're winning on lighter infrastructure debt."
10. "One pays the cost. All benefit." (semantic memory)
11. "Two kinds of users: your apps and your agents. One data layer."
12. "Count the systems. You're not at four. You're at nine."
13. "Memory is infrastructure. So is the data layer underneath it. Neither belongs in nine systems."
14. "The complexity that breaks at scale never gets built in the first place."
15. "The model forgets. The platform remembers. The human decides. The engineers build."

---

## Audience objections

| Likely objection | Response |
|---|---|
| "We already have Postgres / Aurora / SQL Server. Why another database?" | "TiDB is MySQL-wire compatible - you don't move off your operational stack, you consolidate the workloads that today live across four systems plus your sharded fleet. The question is sprawl, not replacement - and how much engineering time it's costing you." |
| "Vector search isn't memory. We use Pinecone for that already." | "Vectors are part of memory - the retrieval index. Memory also includes the customer record, the order, the audit trail. The fragility is when those four live in four systems and have to commit together - and the engineers who maintain that consistency are expensive." |
| "We're a SQL Server / Oracle shop. Migration risk is too high." | "Most enterprise customers start with one workload - typically the agent's operational state - and run TiDB alongside the existing system. We're not asking you to migrate Oracle; we're asking where you're going to put the new workload, and whether you want to staff a separate team to operate it." |
| "How is this different from MongoDB / DynamoDB / NoSQL?" | "Strong consistency, distributed ACID, MySQL compatibility, native analytical access. NoSQL stores trade consistency for scale; agents need both - and your engineers need fewer specialty skills, not more." |
| "Data residency / sovereignty - we operate in 80+ countries." | "TiDB Cloud runs in every major region; for regulated workloads we offer BYOC - the cluster runs inside your AWS / Azure / GCP account, your IAM, your CISO's certification. Deploys in 3-4 hours." |
| "Compliance - HIPAA / PCI / SOX." | "SOC 2 Type II, HIPAA-eligible deployments, audit logs as a first-class capability. Episodic memory IS your audit trail by design - one retention policy, not four that disagree." |
| "Show me a non-AI customer at scale." | "Eleven years in production. LinkedIn, Pinterest, Square, Plaid, Flipkart, Bolt, Atlassian. Pinterest's headline isn't 1.3M QPS - it's that they freed the team that was operating six systems. AI is one workload pattern among many." |
| "How long until we have a working POC?" | "Free serverless tier today. A working POC in days, not quarters. We bring the integration patterns - LangChain, LlamaIndex, MCP - so you're not building from scratch *or* hiring a sharding expert." |
| "What's the failure mode when TiDB goes down?" | "Distributed by design. Raft consensus, multi-AZ, multi-region. The mode that kills your agent isn't TiDB going down - it's the sync job between your four systems failing at 3 AM. That's exactly what consolidation removes - and that's the on-call rotation your engineers stop carrying." |
| "We're committed to Snowflake / Databricks. Where do they fit?" | "TiDB is operational - the live state your agent reads and writes. Snowflake / Databricks are analytical - the warehouse your data team queries. Different workloads. The fragmentation problem is across operational systems, not between operational and analytical." |
| "We don't have an engineering capacity problem." | "Then you're an outlier. The companies who quantified it - Plaid, Pinterest, Dify, Flipkart - all found 20-90% of an engineering team's time going to data infrastructure plumbing. Worth measuring before you add four more systems for AI." |

---

## Pacing & risk management

- **Hero slides (do NOT cut):** Simplify (03), Convergence (04), Maya Day 60 (08), Closing (11). These carry the spine.
- **First to cut if running long:** Maya Day 21 (fleet learns) and Day 90 (audit) are skippable. Day 22 (stranger benefits) is already cut from the talk track.
- **Demo timing:** the new compressed Maya is 4 days (1, 14, 60, 90). 6 minutes total. If room is hot, walk all 4. If cold, do 1 + 60.
- **If audience is heavily AI-skeptical:** spend more time on Beat 03 (Simplification) and Beat 04 (Convergence). Skip Sarah (Beat 05) entirely and bridge from Convergence directly to the architecture (Beat 06). The simplification spine is the talk; AI is one workload that proved it.
- **If audience is AI-native / startup:** flip emphasis - lead Beat 04 with Manus + Dify, then circle back to Pinterest. Same beats, different opening.
- **Q&A:** held at the booth, not on the clock. Don't open Q&A from the stage.

---

## Claim discipline

| Claim | How to land it |
|---|---|
| "40-60% engineering on data plumbing" | "Industry surveys" or "what enterprises tell us when they measure it." Don't cite a specific report you can't name. |
| "Pinterest 6→1, 80% reduction, 3-5x p99, 1.3M QPS" | All public. From PingCAP Technical Value Proposition (April 2026). |
| "Flipkart 700+ MySQL → 1, 1M+ QPS, P95 <5ms" | Public. Same source. |
| "Plaid 104 min downtime + 26 engineer-weeks eliminated" | Public. Same source. |
| "Dify 500K+ containers → 1, 90% ops reduction" | Public. Same source. |
| "GMGN 2 weeks, 50% cost reduction" | Public. Same source. |
| "Bolt 3x compression" | Public. Same source. |
| "LinkedIn quote on memory primitives" | Always frame as "LinkedIn Engineering, March 2026" |
| "1.4M Manus databases" | Say "publicly disclosed by Manus - over a million databases on one cluster" |
| Cost-ladder math | "Rough order; your numbers will vary by model and provider" |
| "95% of new TiDB Cloud clusters created by AI agents" | Internal stat from PingCAP. Frame as "our internal data shows" |

---

## The 30-second version

Use this if you have to summarize the whole talk in 30 seconds:

> "Your data infrastructure already consumes 40 to 60 percent of your
> engineering team. AI is about to push that to 70. The companies who
> got out of that trap - Pinterest, Flipkart, Plaid, Dify - did it by
> consolidating onto one database that handles SQL, vectors, and search
> in one ACID boundary. That database is TiDB. Two questions to ask
> Monday: how much of our engineering team is plumbing instead of
> product, and where does our agent's memory live? If the first answer
> is over 30 percent and the second is four systems and a sync job, you
> have one problem - not two - and the architecture to solve it already
> exists."
