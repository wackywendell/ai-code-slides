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
  - AI will happily generate 8-argument functions, leaky abstractions, workarounds.
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

<div class="grid grid-cols-2">

<div>
<div class="speaker-label eng-accent">Me</div>

<Prompt>Perhaps we should make the text sizes larger, and some more space between header and content</Prompt>

</div>

<div>
<div class="speaker-label ai-accent">Claude</div>

```css
/* style.css */
.slidev-layout    { font-size: 1.35rem }
.slidev-layout p  { font-size: 1.4rem }
.slidev-layout li { font-size: 1.4rem }
```

</div>

</div>

<div class="grid grid-cols-2">

<div class="flex flex-col items-center">
  <div class="speaker-label !text-slate-500">What I checked</div>
  <div class="border border-slate-700 rounded bg-slate-900 p-2 overflow-hidden" style="aspect-ratio: 16/9; width: 240px;">
    <div class="font-extrabold text-slate-100" style="font-size: 1rem; line-height: 1;">Slide Title</div>
    <div class="text-slate-300" style="font-size: 0.95rem; line-height: 1.3;">→ Bullet one</div>
    <div class="text-slate-300" style="font-size: 0.95rem; line-height: 1.3;">→ Bullet two</div>
    <div class="text-slate-300" style="font-size: 0.95rem; line-height: 1.3;">→ Bullet three</div>
  </div>
</div>

<div class="flex flex-col items-center">
  <div class="speaker-label !text-slate-500">Elsewhere</div>
  <div class="border border-slate-700 rounded bg-slate-900 p-2 overflow-hidden" style="aspect-ratio: 16/9; width: 240px;">
    <div class="font-extrabold text-slate-100" style="font-size: 1rem; line-height: 1;">Slide Title</div>
    <div class="text-slate-500" style="font-size: 0.55rem; line-height: 1;">A subheader smaller than the bullets</div>
    <div class="text-slate-300" style="font-size: 0.95rem; line-height: 1.3;">→ Body text bigger</div>
    <div class="text-slate-300" style="font-size: 0.95rem; line-height: 1.3;">→ Than its own subheader</div>
  </div>
</div>

</div>

---

# I Asked About the Code

<div class="grid grid-cols-2">

<div>
<div class="speaker-label eng-accent">Me</div>

<Prompt>

<code>class="text-xl text-slate-300 mb-4"</code>

What are all those class things doing? The text seems to be the same size as the list items.

</Prompt>

</div>

<div>
<div class="speaker-label ai-accent">Claude</div>

<Claude>

Those are UnoCSS utility classes:

- `text-xl` → `1.25rem`
- `text-slate-300` → light gray
- `mb-4` → `margin-bottom: 1rem`

`.slidev-layout p` has specificity `(0,1,1)`. `.text-xl` is `(0,1,0)`. The global rule wins; `text-xl` silently loses.

This is a self-inflicted wound from how I wrote the CSS.

</Claude>

</div>

</div>

<div class="grid grid-cols-2">

<div>

<Prompt>

What is a rem?

</Prompt>

</div>

<div>

<Claude>

`rem` = "root em". Relative to the root element's font-size. By default `1rem = 16px`. UnoCSS's whole text scale is multiples of that root.

</Claude>

</div>

</div>

---

# I Asked About the Design

<div class="grid grid-cols-2">

<div>
<div class="speaker-label eng-accent">Me</div>

<Prompt>

What's the idiomatic way of managing this?

</Prompt>

</div>

<div>
<div class="speaker-label ai-accent">Claude</div>

<Claude>

The idiomatic slidev pattern has three layers:

1. **Tune the canvas, not individual sizes.** `canvasWidth` rescales everything proportionally. The lever I should have reached for first.
2. **Use utilities inline for emphasis.** Don't override base element rules.
3. **Define UnoCSS shortcuts** for repeated patterns: `text-lead`, `text-section-sub`.

</Claude>

</div>

</div>

<div class="flex justify-center items-center">

```diff
- canvasWidth: 1280
+ canvasWidth: 980
```

<svg viewBox="0 0 80 40" class="w-20 h-12 flex-none mx-3" stroke="#fb923c" stroke-width="1.8" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path d="M 75 20 Q 45 30, 8 18" />
  <path d="M 8 18 L 17 13" />
  <path d="M 8 18 L 16 24" />
</svg>

<div class="font-handwritten text-orange-300" style="font-size: 1.4rem; line-height: 1.1; max-width: 220px;">
Smaller canvas, everything else is bigger!
</div>

</div>

---

# I Asked About the Layers

<div class="grid grid-cols-2">

<div>
<div class="speaker-label eng-accent">Me</div>

<Prompt>

Have we balanced well across UnoCSS, style.css, and `:where` setups? Where are they working, where are they fighting, where are they at the wrong level?

</Prompt>

</div>

<div>
<div class="speaker-label ai-accent">Claude</div>

<Claude>

A few frictions:

1. `.font-handwritten` lives in CSS but should be a UnoCSS shortcut.
2. Speech-bubble shortcuts duplicate everything except border color. DRY them.
3. Redundant `color` on nested `<li>` — dead since unifying body color.

<em>… 80 lines …</em>

</Claude>

</div>

</div>

<Callout>AI won't clean up or refactor on its own.</Callout>

Ask it to think about *what* to clean up or restructure. Then ask it to do so.

---

# The 3-Step Review Cycle

<div class="flex items-start gap-4">

<div class="flex-1">
<StepRow :number="1" title="Audit Against Principles">
<em>Review this diff with a focus on Local Reasoning - good interfaces and code boundaries, 'correct-by-construction' types. Consider the following principles: …</em>
</StepRow>
</div>

<v-click>
<div class="flex items-center self-start mt-12">
  <svg viewBox="0 0 60 30" class="w-14 h-9 flex-none" stroke="#fb923c" stroke-width="1.8" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path d="M 55 15 Q 30 15, 8 18" />
    <path d="M 8 18 L 15 13" />
    <path d="M 8 18 L 14 23" />
  </svg>
  <div class="font-handwritten text-orange-300" style="font-size: 1.1rem; line-height: 1.1; max-width: 140px;">
    Perhaps...<br>a Claude Skill?
  </div>
</div>
</v-click>

</div>

<StepRow :number="2" title="Ask for Options">
<em>The <code>foo_bar_baz</code> function has a lot of arguments, mostly primitives. What are some ways we could refactor that to produce better code structure?</em>
</StepRow>

<StepRow :number="3" title="Pick, Then Delegate">
<em>Let's go with (b), but create a newtype for <code>Baz</code> to encapsulate its behavior.</em>
</StepRow>


---

# I Have a Claude Skill for This

````markdown
---
name: code-structure
description: Identify design tensions in code structure
---

### Make Invalid States Unrepresentable

Reshape types so illegal combinations can't exist.

**What to look for:**
- Groups of fields that only make sense in certain combinations
- Boolean flags creating an implicit state machine with impossible states
- Parallel arrays that must be kept in sync
````

<Callout>The AI will make a good first pass - but bring your own judgment!</Callout>

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
