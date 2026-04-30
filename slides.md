---
theme: default
title: Engineering for Durability
info: |
  Engineering for Durability: Why Structure Still Matters with AI.
author: Wendell Smith
colorSchema: dark
aspectRatio: 16/9
canvasWidth: 980
transition: fade
fonts:
  sans: Inter
  serif: Inter
  mono: Fira Code
themeConfig:
  primary: '#38bdf8'
defaults:
  layout: default
class: flex flex-col justify-center

---

<div class="text-4xl font-mono font-semibold mb-6 tracking-tight">
  <span class="text-green-400">+5,449</span>
  <span class="text-red-400 ml-3">-4,141</span>
</div>

# Engineering for Durability

<p class="text-2xl text-slate-400">Why Structure Still Matters with AI</p>

---
layout: section
---

# How It Goes

---
layout: stage
emoji: 🏎️
---

# Stage 1: The Rush

- I tell the AI what I want
- It builds a huge PR. Hundreds of changes.
- The code is sloppy
- But it fits the spec. And that's what matters.

---
layout: stage
emoji: 🌊
---

# Stage 2: The Code Pulls Away

- The codebase grows. Doubles. Triples.
- I don't understand it anymore. Only the AI does.
- Bugs appear. I have the AI fix them and write tests.
- The tests pass. I'm not sure what they're really proving.

---
layout: stage
emoji: 🕸️
---

# Stage 3: Getting Stuck

- The codebase is bigger than any context window
- I don't understand it. The AI struggles to navigate it too.
- The tests are a mess; many are stubbed out because they don't work
- Adding a feature is painful: tests fail, and the AI comments them out or rewrites their assumptions
- The bug list grows faster than it shrinks

---
layout: two-cols
---

# What's Happening?

<p class="text-lead">
AI is great at writing code. It's not great at <em>living with</em> it.
</p>

- We learned to write code this way in school: solve the problem just well enough. Move on.
- AI is trained the same way. Make it work. Move on.
- It doesn't have to maintain the codebase three years later.

::right::

<div class="flex flex-col justify-center items-center h-full gap-4">
  <div class="text-center p-6 ai-bg rounded-full border-2 ai-border w-44 h-44 flex flex-col justify-center">
    <span class="text-xs uppercase tracking-widest ai-accent">AI Goal</span>
    <span class="text-2xl font-bold text-white mt-1">"Make it Work"</span>
  </div>
  <div class="text-center p-6 eng-bg rounded-full border-2 eng-border w-44 h-44 flex flex-col justify-center">
    <span class="text-xs uppercase tracking-widest eng-accent">Your Goal</span>
    <span class="text-2xl font-bold text-white mt-1">"Make it Good"</span>
  </div>
</div>

<!--
"In school" is intentionally broad. Talk about it: college CS assignments,
LeetCode-style interview prep, weekend projects. I came from physics — data
analysis scripts, write-once-get-the-result, throw it away. That's where most
of AI's training data comes from. The internet is mostly disposable code.

The punchline lives at the end of the third bullet. It doesn't have to
maintain the codebase three years later — but **you do**. Land that beat.
-->

---
layout: section
---

# But We Know This

<p class="text-section-sub mt-4">Software engineering is the discipline of building interfaces.</p>

---

# Do we know how to maintain code?

<Callout><strong>Yes.</strong> (Mostly.)</Callout>

- That's what software engineering _is_ as a discipline: building **interfaces**.
- The boundaries that let humans collaborate on code over years.
- Types, modules, packages, filesystems, processes, protocols. We didn't always have these.


---

# A Thought Experiment

<p class="text-lead">
Imagine all we had was <strong class="text-white">assembly</strong> and <strong class="text-white">raw disks</strong>. Read bytes from memory. Write bytes to disk. That's it.
</p>

<p class="text-lead">
Over decades, we built <strong>programming languages</strong> with type systems and modules. And <strong>filesystems</strong> with directories, ownership, and permissions.
</p>

<v-click>

<div class="accent-box mt-4">
  <p class="text-2xl italic">
    Would AI, starting from assembly and disks, have invented programming languages and filesystems?
  </p>
</div>

</v-click>

<v-click>

<Callout class="text-center"><span class="!ai-accent">I don't think so.</span></Callout>

</v-click>

---


# What Is Good Code?

<p class="text-lead">Good code is <strong>maintainable</strong> and <strong>extendable</strong>.</p>

<Callout>Good code lets you change one thing without reading everything.</Callout>

---

# Do we need this with AI?

<Prompt>"AI can read everything. Aren't abstractions less important now?"</Prompt>

<Callout>No. I think they matter more.</Callout>

- AI lets you get further with a sloppy codebase than humans alone could. For a while.
- But AI also has a finite context window, and tokens cost money.
- Better abstractions help **both humans and AI** do their best work.

---

# The Scope of the Argument

<div class="grid grid-cols-2 gap-8 mt-4">

<div class="p-8 border-2 ai-border ai-bg rounded-lg">
  <h3 class="text-2xl font-bold ai-accent mb-4">Disposable Code</h3>
  <p class="text-lg text-slate-300 mb-4">Prototypes, internal scripts, vibe-coding, days to weeks of shelf life.</p>
  <div class="ai-accent font-bold">Let AI run wild.</div>
</div>

<div class="p-8 border-2 eng-border eng-bg rounded-lg">
  <h3 class="text-2xl font-bold eng-accent mb-4">Durable Code</h3>
  <p class="text-lg text-slate-300 mb-4">Product logic, libraries, collaborative repos, open-source, years of shelf life.</p>
  <div class="eng-accent font-bold">Engineering is required.</div>
</div>

</div>

<p class="mt-6 text-slate-400">The rest of this talk is about <strong>durable code</strong>.</p>

---
layout: section
---

# What To Do

---

# What You Bring

<p class="text-lead">Business context and experience.</p>

- What does the business need?
- Is this a prototype, or production?
- Reliability, or velocity?
- What's the cost of a breaking change?
- How many pages did we get last month? For what?

<Callout>No LLM has access to that.</Callout>

<!--
This is the third reason humans are still in the loop, and it's the deepest one.
The first two (AI doesn't apply structure by default; AI's context window is
finite) are about AI's limits as a coder. This one is about AI's limits as a
judgment-maker. Even if AI perfectly applied every principle, it still wouldn't
know whether this code matters.

Lean into it: only you know whether to be careful or fast. The same prompt
deserves different answers in different teams, codebases, and stages.
-->

---

# Your Role

- **Ensure it's Good Code.**
  - PR reviews exist for a reason.
  - OSS projects are rejecting AI-driven PRs.
- **Choose the right abstractions.**
  - Humans invented programming languages and filesystems.
  - Your codebase needs the same kind of thinking.
- **Live with the consequences.**
  - The 8-argument function. The leaky abstraction. The workaround.
  - AI won't have to debug these in three months. You will.

---

# When You're Fighting the AI

<p class="text-lead">Friction means <strong class="text-white">you know something the AI doesn't.</strong></p>

- AI avoids breaking changes. It's a greenfield project.
- AI expands scope. You want a reviewable PR.
- AI writes cavalier code. This is sensitive prod.

<Callout>Explicit is better than implicit.</Callout>

---

# Ask the AI About Code

<p class="text-lead">AI is very good at <strong class="text-white">understanding and explaining</strong> code. I lean on this constantly.</p>

- I used to ask <em>"what is this doing? Why do we need this?"</em> in code reviews.
- Now I just ask the AI. Usually it's faster than asking the author.
- I do this while writing, while reviewing, while debugging.

<div class="accent-box">
  <p class="text-lg italic">This is the easy win. AI is a force multiplier for understanding code that already exists.</p>
</div>

---

# Review the Code

<p class="text-lead">As you work, look at the abstractions you're building. AI doesn't <em>build</em> good structure by default. But it can <strong class="text-white">talk about it fluently</strong>.</p>

<p class="text-lg text-slate-400">I ask it to evaluate against named principles:</p>

- **Make Invalid States Unrepresentable**: encode rules in types.
- **Parse, Don't Validate**: turn strings into structured values once, at the edge.
- **Functional Core, Imperative Shell**: keep logic pure; isolate side effects.
- **Co-locate Decisions with Data**: the code that decides should sit next to what it decides about.
- **Separation of Concerns**: one module, one reason to change.

<p class="text-sm text-slate-500 mt-4 italic">AI has read the whole internet. It knows what these mean. It just needs to be told to apply them.</p>

<!--
The gap is application, not knowledge. AI knows these principles theoretically —
it can define them, give examples, even cite the books. It even helped me write
this list (and most of this deck). But it hasn't been trained to *apply* them
by default. Knowledge ≠ habit. Asking the right question is the human's job.
-->

---

# I Asked for a Feature

<p class="text-section-sub mb-6">"Make the text bigger."</p>

<Prompt class="mb-6">Perhaps we should make the text sizes larger, and some more space between header and content</Prompt>

<p class="text-lg text-slate-400 mb-2">What Claude delivered:</p>

```css
/* style.css */
.slidev-layout    { font-size: 1.35rem }
.slidev-layout p  { font-size: 1.4rem }
.slidev-layout li { font-size: 1.4rem }
```

<Takeaway title="Stage 1, in this deck.">Looked great. Wasn't right underneath.</Takeaway>

---

# I Asked About the Code

<p class="text-section-sub mb-6">"What is `text-xl` doing?"</p>

<Prompt class="mb-3">this line; what are all those class things doing? The text seems to be the same size as the list items</Prompt>

<Prompt class="mb-6">What is a rem?</Prompt>

<p class="text-lg text-slate-400 mb-2">What Claude explained:</p>

- `text-xl` → `1.25rem`. `text-slate-300` → a color. `mb-4` → a margin.
- `.slidev-layout p { … }` has **higher specificity** than `.text-xl`, so the global rule silently wins.
- `1rem` = the root element's font-size. UnoCSS scales the whole utility set off that single root.

<Takeaway title='"Ask the AI About Code," in this deck.'>The easy win.</Takeaway>

---

# I Asked About the Design

<p class="text-section-sub mb-6">"What's the idiomatic way?"</p>

<Prompt class="mb-6">What's the idiomatic way of managing this?</Prompt>

<p class="text-lg text-slate-400 mb-2">What Claude proposed:</p>

- **Tune the canvas, not individual sizes.** `canvasWidth` rescales the whole slide proportionally.
- **Use utilities inline for emphasis.** Don't override base element rules.
- **Define UnoCSS shortcuts.** Promote repeated combos to **named concepts**: `text-lead`, `text-section-sub`, `prompt-quote`.

<Takeaway title='"Review the Code," in this deck.'>Better questions, better refactors.</Takeaway>

---
layout: two-cols-header
---

# The "Primitive Trap"

::left::

<div class="text-xs uppercase ai-accent mb-2 font-mono">AI Default — Sloppy</div>

```html
<p class="text-xl text-slate-300 mb-4">…</p>
<p class="text-xl text-slate-300 mb-6">…</p>
<p class="text-xl text-slate-300">…</p>
<p class="text-xl text-slate-300 mb-6">…</p>
<!-- repeated 8× across the deck -->
```

```css
/* style.css — silently wins on specificity */
.slidev-layout p { font-size: 1.4rem }
```

::right::

<div class="text-xs uppercase text-sky-400 mb-2 font-mono">After Structural Review</div>

```ts
// uno.config.ts
shortcuts: {
  'text-lead': 'text-2xl text-slate-300',
}
```

```html
<p class="text-lead mb-6">…</p>
```

::bottom::

<div class="mt-6 text-slate-400">
  <strong>Primitive Obsession</strong> → <strong>Named Abstraction</strong>. The fix wasn't more CSS; it was understanding and using the abstractions.
</div>

---

# The 3-Step Review Cycle

<div class="space-y-10 mt-8">

<StepRow :number="1" title="Identify Tensions">
Ask AI: "Where does this code violate Parse-Don't-Validate?"
</StepRow>

<StepRow :number="2" title="Explore Options">
Ask for two different ways to refactor the module boundary.
</StepRow>

<StepRow :number="3" title="Execute Refactor">
I pick the path. AI handles the tedious bulk changes.
</StepRow>

</div>

---

# I Have a Claude Skill for This

<p class="text-lead mb-6">A <strong>Structural Code Analysis</strong> skill that bundles these prompts.</p>

- It walks the AI through the principles and asks it to evaluate the current branch.
- It surfaces the tensions, suggests options, and lets me pick the refactor.
- <strong class="text-white">It helps. It doesn't decide.</strong>

<div class="accent-box mt-6">
  <p class="text-lg italic">A checklist, not a substitute for thinking.</p>
</div>

---
layout: section
---

# Closing

---

# A New Definition of Done

<div class="accent-box">

- <strong class="text-white text-xl">Self-Documenting:</strong> the interface tells the story, not the comments.
- <strong class="text-white text-xl">Durable Structure:</strong> can I change a business rule without touching ten files?
- <strong class="text-white text-xl">Human Context:</strong> "I chose this because…", not "the AI did it."
- <strong class="text-white text-xl">Auditable PR:</strong> small enough that a human can actually review it.

</div>

---
layout: center
class: text-center
---

<p class="text-4xl font-bold text-white">
You're still the engineer.
</p>

<p class="text-xl text-slate-400 mt-6">
AI is fast. The discipline is yours.
</p>

<p class="text-aside mt-12 max-w-2xl mx-auto">
P.S. This entire deck was built with Claude. The CSS slide is real.
</p>

<p class="mt-12 text-sky-400 font-bold text-2xl">Questions?</p>
