# Demo cue card · Tab 04 · Watch an Agent Learn

The operator script. What to click, when, and what to say over it.
Rehearse once the night before on the laptop you'll present on.

---

## Setup before you click anything

Say:
> *"One agent. A store like the brands in this room. Three customers in
> sequence. I'll click them one at a time. Watch the strip at the top —
> conversations handled, what the agent remembers, answer quality — and
> watch the memory shelf at the bottom fill up. That's the whole demo."*

The strip above the stage has **three cells**. Only three. Name them once so
the audience knows where to look, then don't reference them again by name.

---

## Customer 01 — Sarah · ~2 minutes

**Click.** Or press `1`.

As the animation plays:

1. (while customer card fades in) *"Sarah's new. VIP tier, first visit. The memory shelf is empty — the agent has nothing to go on."*
2. (when "thinking" box appears) *"Before answering, the agent checks the shelf. Nothing there yet."*
3. (when agent reply appears) *"Competent, generic — 'go with the 6 for a tailored fit.' That's a standard policy answer."*
4. (when shelf card lands) *"Here's the important part. Watch this card land on the shelf. That insight is now **permanent.** Available to every other agent, across every other session, globally."*

---

## Customer 02 — Jessica · ~2.5 minutes

**Click.** Or press `2`.

1. (intro) *"Jessica's also new. Different dress — the cotton shirt dress — but similar between-size question. Watch what's different this time."*
2. (when memory card on shelf highlights) *"Before answering, the agent checks the shelf. Finds Sarah's insight from three minutes ago. **Pulls it in.**"*
3. (when reply appears) *"Now look at the reply. 'Cotton relaxes like linen.' 'The 4 feels snug by week two.' That's not in any policy document. The agent **generalized** from Sarah's case."*
4. (when second card lands) *"Two data points on the shelf. The pattern is emerging."*

---

## Customer 03 — Emma · ~2.5 minutes

**Click.** Or press `3`.

1. (intro) *"Emma's our most complicated customer. She had a return last month. She's nervous."*
2. (when thinking box shows retrieval) *"Watch the retrieval. **Two insights pulled.** Plus — this is the quietly important part — Emma's return history joined in the same query, live, in the same database."*
3. (when reply appears) *"Now look at this reply. It diagnoses the **actual reason** for the return — it was the bias cut, not the size. It applies the between-size rule. It gives a confident recommendation and a safety net."*
4. (when last card shows *Consolidated* badge) *"And on the shelf — notice the card is now marked **Consolidated.** The agent didn't just add a third memory. It **refined the rule.** Straight cuts: size up. Bias cuts: different behaviour. That kind of nuance takes a great store associate months. This agent learned it in three conversations."*

---

## The reveal — 45 seconds

The black panel drops in automatically. Let it land.

Read the three numbers in order — left to right:

1. **0 humans** involved in making the agent smarter.
   *"No fine-tuning. No retraining. No engineering ticket."*
2. **$150K/month** saved at 100,000 daily customer conversations.
   *"The cost of forgetting, eliminated."*
3. **1 database** replacing four.
   *"And killing the sync jobs that made the agent forget in the first place."*

The last subtitle is the tee-up line — **say it out loud**, exactly as written:
> *"And on Azure Marketplace, 100% of this spend burns down your MACC
> commitment. Which brings me to why iSoftStone and Microsoft are in the room."*

→ Press `→` to advance to tab 05.

---

## Keyboard shortcuts on this tab

| Key | Does |
|---|---|
| `1` / `2` / `3` | Jump a customer (only if unlocked) |
| `R` | Reset the demo to start over |
| `→` | Advance to tab 05 (use **after** the reveal lands) |

---

## Fallback — if the demo stalls or animation glitches

1. Press `R` to reset. Try again.
2. If it still fails: refresh the browser. The deck has no backend state; a
   reload returns you to tab 04 in a clean state.
3. Worst case: pull up `recordings/demo-may8.mov` (if you recorded one during
   pre-flight) and walk the room through it as a video.

---

## Pre-flight checklist for this tab specifically

- [ ] Run the demo end-to-end twice on the presentation laptop
- [ ] Confirm the reveal panel actually shows at the end (scroll is automatic)
- [ ] Confirm fonts render correctly — Cormorant italics for customer names, Manrope for labels
- [ ] Confirm the memory cards have the gold/moss colors (not grey) — if grey, CSS didn't load, hard-refresh
- [ ] Time yourself — three customers should land in 7–8 minutes total if you narrate. Faster if you rush.

---

## What the numbers mean (if a technical person asks)

- **$150K/month** — derived from $10 per million tokens × 20 steps per agent workflow × 100K daily conversations × the Token Tax formula (step N re-sends N-1 prior steps). Realistic for a mid-size retailer's customer-service agent fleet.
- **The three memories on the shelf** — map to records in the open-source `fleet_memory` table in Bernard Kavanagh's EV-charger reference implementation, retail-domain-overlaid.
- **"Consolidated" badge on Emma's card** — the platform-level memory maintenance running inside a single ACID-compliant database. In the reference repo this is the "five custodial duties" — write control, dedup, reconciliation, confidence decay, compaction. The demo abstracts it as one badge; if a technical person asks, mention the full five.
