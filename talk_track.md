# Talk track — iSoftStone × TiDB × Microsoft · NYC · May 8 2026

30 minutes. Five beats. **You open the workshop.**

---

## The one-sentence story

> **"Your AI agents forget every customer they meet. The fix — a proper memory layer — saves you a fortune AND makes your agents get smarter every day, the way your best store associate does. The companies actually building AI figured this out. On Azure, the economics are already in your favor."**

Every word below serves that sentence.

---

## Arc at a glance

| Min | Beat | Tab | Purpose |
|---:|---|---:|---|
| 0–4  | The Sarah moment | 01 | Name the pain with a retail story every exec recognizes |
| 4–8  | Why this happens | 02 | Model has no memory. Four-database duct tape can't fix it. |
| 8–12 | The convergence | 03 | Kimi · DeepSeek · Dify · Manus — all arrived at the same answer |
| 12–22 | The demo | 04 | Watch an agent learn across three customers — **the WOW** |
| 22–28 | Why now · Microsoft · hand-off | 05 → 06 | Proof · MACC · BYOC · iSoftStone · 36-month window |
| 28–30 | Hand-off | 06 | Introduce Shirley and Jason, take questions |

Q&A appendix is tab 07 — reference only; don't walk through it.

---

## Beat 01 — The Sarah moment (0:00 – 4:00) · Tab 01

**No narration from the slide.** Walk to the front. Tell it as a story.

Bones to hit:
- It's Black Friday. Your top-1% VIP is in a digital channel.
- Your AI handled her brilliantly three weeks ago. $4,800 basket closed.
- Tonight she's back. Different session. Same AI. Same brand.
- **It has no idea who she is.** Not the dress, not the size, not the return she flagged.
- Your Madison Avenue associate has already solved this conversation forty times.
- *The model is brilliant. The model has amnesia.*

Close the beat with the promise:
> *"I'm going to spend 30 minutes on that gap. Why it exists. Why Microsoft's frontier models alone won't close it. What the AI-native companies did about it. And I'm going to show you, live, what closing it looks like."*

---

## Beat 02 — Why this happens (4:00 – 8:00) · Tab 02

Two ideas. That's it.

**Idea 1 — The model has no memory by design.** Every LLM is a next-word predictor
trained on frozen data. When the chat ends, everything is gone. There is no
"remember Sarah" button inside the model. Memory has to come from *outside*.

**Idea 2 — The outside is a mess.** Most retail AI is held together with four
databases and duct tape. Orders in Aurora. Vectors in Pinecone. Analytics in
Snowflake. Sessions in Redis. Every change has to propagate across all four.
**That sync breaks. Often. At 3 AM.** Your agent reasons on four different realities.

**Land the beat:**
> *"This is not a model problem. You can't prompt your way out of it. You can't
> fine-tune your way out of it. A bigger context window won't fix it. It's an
> architecture problem — and it needs an architecture answer."*

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
> *"These are the companies building AI. When the labs themselves chose this architecture for their own agent workloads — that's the signal. The database stopped being a storage layer. It became the substrate their agent thinks against."*

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
Let the three numbers land:
- **0 humans** involved in making the agent smarter
- **$150K/month** saved at 100K daily conversations
- **1 database** instead of four

Close with the gold line on the right:
> *"And on Azure Marketplace, 100% of this spend burns down your MACC
> commitment. Which brings me to why iSoftStone and Microsoft are in the room."*

→ Press `→` to advance to tab 05.

---

## Beat 05 — Proof (22:00 – 24:00) · Tab 05

30 seconds per card. Don't read the bullets.

- **Rakuten** — loyalty platform modernized. Real-time analytics on live data.
  *"Exactly what Bob's Discount or Amway would do with customer rewards and reactivation."*
- **Pinterest** — replaced legacy graph service. Million+ QPS, sub-5ms p95.
  *"For discovery graphs — Tapestry, Vineyard Vines — this is the ceiling."*
- **Flipkart** — 700+ MySQL clusters → one. Zero-downtime holiday spikes.
  *"The reference architecture for Black Friday and Cyber Monday."*

Close:
> *"You haven't read about this in a pitch deck. You've watched competitors run on it for two years already."*

→ Press `→`.

---

## Beat 06 — Microsoft · Why Now · Hand-off (24:00 – 28:00) · Tab 06

Three cards. 90 seconds.

1. **Azure Marketplace · MACC.** 100% of this spend burns down your Microsoft Azure Consumption Commitment. It's not net-new; it's retiring an obligation you've already made.
2. **BYOC · your Azure tenant.** Runs inside your Azure VPC. Data never leaves. Your CISO keeps IAM, keys, security groups. PrivateLink only.
3. **iSoftStone.** One procurement path, one vendor accountability. Aurora → TiDB is a weekend with two engineers. Jason's team has done this before.

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
> *That's the decision window. That's why we're here."*

### Hand-off — 30 seconds
> *"I'm going to hand over to Shirley Zhou, our Cloud Alliance Manager, who
> works directly with Microsoft and iSoftStone. Shirley will walk you through
> the commercials — Marketplace, MACC, the co-sell motion — and Jason is here
> to talk about how iSoftStone's consulting practice fits alongside our team
> for your pilots.*
>
> *Jason — over to you. And I'll take technical questions throughout the day."*

---

## Tab 07 — Q&A appendix (reference, don't walk through)

Eight anticipated questions with plain-English answers. Pull up if needed;
otherwise leave on the shelf.

---

## Source material

- Bernard Kavanagh's Stockholm "Memory Class" deck (TiDB Data Innovation Summit 2026)
- Bernard's Medium post, *The Database as Cognitive Foundation* (April 9 2026)
- TiDB Master Pitch playbook (April 2026, v1)
- TiDB Memory Class 60-min speaker script
- Gmail thread "TiDB + iSoftStone | Microsoft Partnership" — confirmed audience, MACC/ACR commercials
