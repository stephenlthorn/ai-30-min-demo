# Talk track — 30-minute booth deck

30 minutes. Eight beats. Brand-neutral — drops into any TiDB booth or
30-minute retail-AI keynote.

---

## The one-sentence story

> **"Your AI agents forget every customer they meet. The fix — a proper memory
> layer — saves you a fortune AND makes your agents get smarter every day, the
> way your best store associate does. The companies actually building AI
> figured this out. Stop running four systems."**

Every word below serves that sentence.

---

## Arc at a glance

| Min | Beat | Tab | Purpose |
|---:|---|---:|---|
| 0–1   | Title + promise          | 00 | Empowerment promise — what they'll walk away knowing |
| 1–4   | The Sarah moment         | 01 | Name the pain with a retail story every exec recognizes |
| 4–8   | Why this happens         | 02 | Frankenstack vs. TiDB Unified — the architectural answer |
| 8–12  | The convergence          | 03 | Kimi · DeepSeek · Dify · Manus — all chose this architecture |
| 12–22 | The demo                 | 04 | Watch an agent learn across three customers — **the WOW** |
| 22–24 | Your category            | 05 | Same architecture, your customer — apparel/furniture/wellness/loyalty |
| 24–26 | Production proof         | 06 | Rakuten · Pinterest · Flipkart — already in retail |
| 26–29 | Why now                  | 07 | 36-month decision window · procurement, security, migration solved |
| 29–30 | Close · promise kept     | 08 | Walked-in vs. walk-out + three questions for Monday |

Q&A appendix is tab 09 — reference only; don't walk through it.

---

## Beat 00 — Title + promise (0:00 – 1:00) · Tab 00

**Establish the empowerment promise in the first 60 seconds.** Don't open
with a joke. Don't open with thanks. Don't open with a bio.

Walk to the front. Read the promise. Then drop the slogan.

> *"In the next 30 minutes, you'll know exactly why most AI pilots stall,
> the architecture the labs that actually build AI all chose, and three
> questions to ask your team Monday morning to find out where your stack
> stands. Let me start with someone you know."*

→ Press `→`.

---

## Beat 01 — The Sarah moment (1:00 – 4:00) · Tab 01

**No narration from the slide.** Walk to the front. Tell it as a story.

Bones to hit:
- It's Black Friday. Your top-1% VIP is in a digital channel.
- Your AI handled her brilliantly three weeks ago. $4,800 basket closed.
- Tonight she's back. Different session. Same AI. Same brand.
- **It has no idea who she is.** Not the dress, not the size, not the return she flagged.
- Your Madison Avenue associate has already solved this conversation forty times.
- *The model is brilliant. The model has amnesia.*

Close the beat with the bridge:
> *"That gap is where every AI investment in this room is leaking value
> right now. Let's look at why."*

---

## Beat 02 — Why this happens (4:00 – 8:00) · Tab 02

Two ideas, one architectural answer.

**Idea 1 — The model has no memory by design.** Every LLM is a next-word
predictor trained on frozen data. When the chat ends, everything is gone.
There is no "remember Sarah" button inside the model. Memory has to come
from *outside*.

**Idea 2 — The somewhere-else is a mess.** Most retail AI is held together
with four databases and duct tape. Orders in Aurora. Vectors in Pinecone.
Analytics in Snowflake. Sessions in Redis. Every change has to propagate
across all four. **That sync breaks. Often. At 3 AM.** Your agent reasons
on four different realities.

**The answer (point at the After panel):** One cluster. Four planes — rows,
embeddings, search, analytics — in one transaction boundary. **One source
of truth.** Your apps keep talking MySQL, so nothing above the database has
to change.

**Land the beat (slogan rep #1):**
> *"You can't prompt your way out of an architecture problem. Bigger context
> windows won't fix it. **Stop running four systems.**"*

---

## Beat 03 — The convergence (8:00 – 12:00) · Tab 03

Core line (memorize it):
> *"When independent teams, in different countries, solving different problems,
> independently arrive at the same architectural answer — that's not a
> coincidence. That's convergence. And convergence is how a new category gets named."*

Name the four — 30 seconds each:

- **Kimi** (Moonshot) — top-4 Chinese LLM. Frontier long-context models.
- **DeepSeek** — the open-source lab that shook the frontier with R1. Top-4 globally.
- **Dify** — AI app platform. Consolidated 500K+ containers onto one cluster.
- **Manus** — 2M waitlist in three weeks. **10 million databases, 95% created by agents.** Migrated in two weeks.

Punchline:
> *"These are the companies building AI. When the labs themselves chose this
> architecture for their own agent workloads — that's the signal. The database
> stopped being a storage layer. It became the substrate their agent thinks against."*

Transition:
> *"Enough slides. Let me show you what that actually looks like."*

---

## Beat 04 — The demo (12:00 – 22:00) · Tab 04 · **THE WOW**

See [`queries.md`](./queries.md) for the full cue card. Executive summary:

### Setup — 30 seconds before the first click
> *"One agent. A store like the brands in this room. Three customers in sequence.
> I click them one at a time. Watch the strip at the top — conversations,
> what the agent remembers, answer quality — and watch the memory shelf at the
> bottom fill up."*

### Click SARAH — ~2 minutes
Narrate over it:
- *"Sarah is new. Memory shelf is empty. The agent has nothing to go on."*
- *"Competent but generic reply. 'Go with the 6 for a tailored fit.'"*
- *"Here's the important part — watch this card land on the shelf. That's now permanent, available to every other agent globally."*

### Click JESSICA — ~2.5 minutes
- *"New customer. Different dress, similar question. Watch what's different."*
- (point at highlighted memory card) *"Before answering, the agent checks the shelf. Finds Sarah's insight. Pulls it in."*
- *"Now look at the reply. 'Cotton relaxes like linen.' 'The 4 feels snug by week two.' That's not in a policy doc — the agent **generalized** from Sarah's case."*

### Click EMMA — ~2.5 minutes
- *"Most complicated customer. She had a return. She's nervous."*
- *"Watch — two memories pulled. Plus Emma's return history joined in the same query."*
- *"Reply diagnoses the **actual** reason for the return. Bias cut, not size. Applies the pattern. Confident recommendation, safety net."*
- *"On the shelf — notice the card marked *Consolidated*. The agent didn't just add a third memory. It **refined the rule.** Straight cuts size up; bias cuts are different. That kind of nuance takes a great associate months. This agent learned it in three conversations."*

### Reveal — 1 minute
Let the three numbers land (slogan rep #2 lives in the third stat):
- **0 humans** involved in making the agent smarter
- **$150K/month** saved at 100K daily conversations
- **1 database** — *stop running four systems · that's the whole argument*

→ Press `→`.

---

## Beat 05 — Your category (22:00 – 24:00) · Tab 05

The demo is dress sizing. The mechanism is identical for every retail vertical.
Walk the four cards in 25 seconds each — pick the two that match your room.

- **Apparel · accessories · luxury** → *Fit memory.* Cross-brand, cross-channel, cross-session.
- **Furniture · home · big-ticket** → *Decision memory.* Multi-visit, financing-aware, household-level.
- **Wellness · beauty · CPG** → *Regimen memory.* Side-effect aware, rep-empowering, subscription-native.
- **Loyalty · gifting · advisory** → *Relationship memory.* Occasion-aware, tier-aware, associate-grade.

Land the beat:
> *"The dress in the demo is interchangeable. The architecture isn't."*

→ Press `→`.

---

## Beat 06 — Production proof (24:00 – 26:00) · Tab 06

30 seconds per card. Don't read the bullets.

- **Rakuten** — loyalty platform modernized. Real-time analytics on live data.
  *"For any retailer building a customer rewards or reactivation engine."*
- **Pinterest** — replaced legacy graph service. Million+ QPS, sub-5ms p95.
  *"For product-discovery graphs at scale — this is the ceiling."*
- **Flipkart** — 700+ MySQL clusters → one. Zero-downtime holiday spikes.
  *"The reference architecture for Black Friday and Cyber Monday."*

Close:
> *"You haven't read about this in a pitch deck. You've watched competitors
> run on it for two years already."*

→ Press `→`.

---

## Beat 07 — Why now (26:00 – 29:00) · Tab 07

The 36-month window — 60 seconds:
> *"The retail brands that will dominate AI-native experiences in 2028 are
> making their database choices right now. About 36 months. After that,
> patterns calcify and switching costs become prohibitive. You saw this
> curve with cloud between 2012 and 2015.*
>
> *The teams who decide their memory architecture this year, pilot in Q3,
> in production by year-end — those teams will have measurably smarter
> agents than their competitors by Black Friday 2027.*
>
> *That's the decision window."*

The friction-removed cards — 30 seconds each:

1. **Procurement is solved.** On every major cloud marketplace. Burns down your existing cloud commit. Procurement path your team already knows.
2. **Security is solved.** BYOC — your own cloud tenant. Customer data never leaves. Your CISO keeps IAM, keys, security groups.
3. **Migration is solved.** MySQL-compatible — apps don't change. Aurora to TiDB is a weekend with two engineers.

→ Press `→`.

---

## Beat 08 — Close · promise kept (29:00 – 30:00) · Tab 08

Mirror the opening promise. Three columns. Stay on this slide during Q&A —
don't replace it with "thank you."

Walk it 20 seconds per column:

- **What you walked in not knowing** — why brilliant LLMs still produce dumb agent experiences, why bigger models won't fix it, why competitors' AI feels like it's compounding.
- **What you walk out knowing** — memory is what makes agents learn, one database beats four, the labs actually building AI all chose this.
- **Three questions for Monday morning** — *Where does our agent's memory live? Could a single query join customer history + conversation memory + live inventory? What would change for our customer if our agents could learn between conversations?*

Land it (slogan rep #3):
> ***"Stop running four systems. That's the whole argument."***

Open the floor:
> *"I'll take questions for the rest of the time. The Q&A reference card on
> tab 09 has answers to the eight things people usually ask first."*

---

## Tab 09 — Q&A appendix (reference, don't walk through)

Eight anticipated questions with plain-English answers:
- "We already have Postgres / MySQL / Aurora. Why another database?"
- "Our data cannot leave our tenant."
- "What about Copilot / Bedrock / Vertex agents?"
- "How is this different from pgvector on Postgres?"
- "What does migration from Aurora / MySQL look like?"
- "Pinecone benchmarks better on vector recall."
- "We're evaluating CockroachDB / YugabyteDB / PlanetScale."
- "What's the compliance story — CCPA, GDPR, EU exposure?"

Pull up if needed; otherwise leave on the shelf.

---

## Slogan repetition map

Per Patrick Winston's Star framework, the slogan must hit at least three times.
Currently in the deck:

1. **Beat 02 land:** *"Stop running four systems."* (after the After panel)
2. **Beat 04 reveal stat 3:** *"stop running four systems · that's the whole argument"*
3. **Beat 08 close:** *"Stop running four systems. That's the whole argument."*

If you want a fourth hit, drop it into the Beat 03 punchline:
> *"…the same architectural answer. They stopped running four systems. So can you."*

---

## Source material

- Bernard Kavanagh's Stockholm "Memory Class" deck (TiDB Data Innovation Summit 2026)
- Bernard's Medium post, *The Database as Cognitive Foundation* (April 9 2026)
- TiDB Master Pitch playbook (April 2026, v1)
- TiDB Memory Class 60-min speaker script
