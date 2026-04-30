---
theme: default
title: Code Structure — Challenges with AI
info: |
  Code Structure: Challenges with AI.
  Working with AI without losing the discipline of software engineering.
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

<div class="text-6xl font-black mb-4 text-sky-400">+4,141 -5,449</div>

# Code Structure

<p class="text-2xl text-slate-300">Challenges with AI</p>

<div class="mt-12 text-slate-500 font-mono italic">
Working with AI without losing the discipline of software engineering.
</div>

---
layout: section
---

# The Story

<p class="text-section-sub mt-4">Three stages of letting AI drive.</p>

---

# Stage 1 — The Honeymoon

<div class="grid grid-cols-[auto_1fr] gap-12 items-center mt-4">

<div class="text-[10rem] leading-none">🍯</div>

<div>

- You tell the AI what you want
- It builds some huge PR with a lot of changes
- The code is sloppy
- But it fits your spec — and that's what matters!

</div>

</div>

---

# Stage 2 — The Fog

<div class="grid grid-cols-[auto_1fr] gap-12 items-center mt-4">

<div class="text-[10rem] leading-none">🌫️</div>

<div>

- The code grows
- You don't understand the code — only the AI does
- Bugs appear, so you task the AI with fixing them and writing tests
- The tests pass; you're not sure what they're really proving

</div>

</div>

---

# Stage 3 — The Wall

<div class="grid grid-cols-[auto_1fr] gap-12 items-center mt-4">

<div class="text-[10rem] leading-none">🧱</div>

<div>

- The codebase is huge
- You don't understand it, and the AI struggles to navigate it too
- Tests are a mess — many stubbed out because they don't work
- Adding a feature is painful: tests fail, the AI comments them out or rewrites their assumptions
- The bug list grows faster than it shrinks

</div>

</div>

---
layout: two-cols-header
---

# What's Happening?

::left::

<p class="text-lead mb-4">
AI is optimized for <strong class="text-sky-400">"make it work"</strong>, not <strong class="text-white">"make it good."</strong>
</p>

- College taught us this rhythm: write code that works just well enough to solve the problem — that's success.
- Then throw it away and move on.
- AI works the same way. It doesn't know how to maintain code over years.

::right::

<div class="flex justify-center items-center h-full">
  <div class="text-center p-8 bg-sky-500/10 rounded-full border-2 border-sky-500/20 w-64 h-64 flex flex-col justify-center">
    <span class="text-sm uppercase tracking-widest text-sky-400">AI Goal</span>
    <span class="text-3xl font-bold">"Make it Work"</span>
  </div>
</div>

---
layout: section
---

# But We Know This

<p class="text-section-sub mt-4">Software engineering is the discipline of building interfaces.</p>

---

# Do we know how to maintain code?

<div class="mt-4 space-y-6">

<p class="text-3xl font-bold text-white">Yes. (Mostly.)</p>

- That's what software engineering as a discipline <em>is</em>.
- It's about building <strong class="text-sky-400">interfaces</strong> — the boundaries that let humans collaborate on code over years.
- Types, modules, packages, filesystems, processes, protocols. We didn't always have these.

</div>

---

# A Thought Experiment

<div class="mt-4 space-y-6">

<p class="text-lead">
Imagine all we had was <strong class="text-white">assembly</strong> and <strong class="text-white">raw disks</strong>: read and write any address; move bytes between them.
</p>

<p class="text-lead">
Humans built <strong class="text-sky-400">programming languages</strong> with type systems, modules, and dependencies. We built <strong class="text-sky-400">filesystems</strong> with directories, extensions, ownership, and permissions.
</p>

<div class="accent-box">
  <p class="text-2xl font-semibold text-white italic">
    Would AI, starting from assembly and disks, have invented programming languages and filesystems?
  </p>
  <p class="text-lead mt-3">I don't think so.</p>
</div>

</div>

---

# What Is Good Code?

<p class="text-lead mb-6">Good code is <strong class="text-white">maintainable</strong> and <strong class="text-white">extendable</strong>. It encapsulates behavior in modules and types.</p>

- <strong class="text-sky-400">Make invalid states impossible</strong> where you can; comment clearly where you can't.
- Each type and module is understandable from <strong class="text-sky-400">type structures, signatures, and docstrings</strong> alone.
- <strong class="text-sky-400">Easy to use right, hard to do wrong.</strong>
- You shouldn't need to read the whole codebase to add one feature — only the code relevant to your feature, plus the interfaces of its neighbors.

---

# Do we need this with AI?

<div class="mt-4 space-y-6">

<p class="text-section-sub italic">"AI can read everything. Aren't abstractions less important now?"</p>

<p class="text-3xl font-bold text-white">No — they matter more.</p>

- AI lets you get further with a sloppy codebase than humans alone could. For a while.
- But AI also has a finite context window. And tokens cost money.
- Better abstractions help <strong class="text-sky-400">both humans and AI</strong> do better work.

</div>

---

# The Scope of the Argument

<div class="grid grid-cols-2 gap-8 mt-4">

<div class="p-8 border border-slate-700 rounded-lg">
  <h3 class="text-2xl font-bold text-slate-400 mb-4">Disposable Code</h3>
  <p class="text-lg text-slate-500 mb-4">Prototypes, internal scripts, vibe-coding, 1-week shelf life.</p>
  <div class="text-sky-400 font-bold">Let AI run wild.</div>
</div>

<div class="p-8 border border-sky-500/50 rounded-lg bg-sky-500/5">
  <h3 class="text-2xl font-bold text-sky-400 mb-4">Durable Code</h3>
  <p class="text-lg mb-4">Product logic, libraries, collaborative repos, 1-year+ shelf life.</p>
  <div class="text-white font-bold">Engineering is required.</div>
</div>

</div>

<p class="mt-6 text-slate-400">The rest of this talk is about <strong class="text-white">durable code</strong>.</p>

---
layout: section
---

# The Toolbox

<p class="text-section-sub mt-4">How to keep your hands on the wheel.</p>

---

# Ask the AI About Code

<p class="text-lead mb-6">AI is very good at <strong class="text-white">understanding and explaining</strong> code. Use it.</p>

- I used to ask <em>"what is this doing? Why do we need this?"</em> in code reviews.
- Now I just ask the AI. It can usually tell me — and faster than the author can.
- Use it while writing, while reviewing, while debugging.

<div class="accent-box mt-6">
  <p class="text-lg italic">This is the easy win. AI is a force multiplier for understanding code that already exists.</p>
</div>

---

# Review the Code

<p class="text-lead mb-4">As you work, look at the abstractions you're building. AI doesn't <em>build</em> good structure by default — but it can <strong class="text-white">talk about it fluently</strong>.</p>

<p class="text-lg text-slate-400 mb-3">Ask it to evaluate against named principles:</p>

- <strong class="text-sky-400">Make Invalid States Unrepresentable</strong> — encode rules in types.
- <strong class="text-sky-400">Parse, Don't Validate</strong> — turn strings into structured values once, at the edge.
- <strong class="text-sky-400">Functional Core, Imperative Shell</strong> — keep logic pure; isolate side effects.
- <strong class="text-sky-400">Co-locate Decisions with Data</strong> — the code that decides should sit next to what it decides about.
- <strong class="text-sky-400">Separation of Concerns</strong> — one module, one reason to change.

<p class="text-sm text-slate-500 mt-4 italic">AI has read the whole internet. It knows what these mean. It just needs to be told to apply them.</p>

---

# Beat 1 — "Make the text bigger"

<p class="text-section-sub mb-6">I asked for a feature.</p>

<div class="prompt-quote mb-6">
"Perhaps we should make the text sizes larger, and some more space between header and content"
</div>

<p class="text-lg text-slate-400 mb-2">What Claude delivered:</p>

```css
/* style.css */
.slidev-layout    { font-size: 1.35rem }
.slidev-layout p  { font-size: 1.4rem }
.slidev-layout li { font-size: 1.4rem }
```

<div class="accent-box mt-6">
  <strong class="text-white">Stage 1 — The Honeymoon, in real time.</strong>
  <p class="text-aside mt-1">It works. Until it doesn't.</p>
</div>

---

# Beat 2 — "What is `text-xl` doing?"

<p class="text-section-sub mb-6">I asked about the code.</p>

<div class="prompt-quote mb-3">
"this line; what are all those class things doing? The text seems to be the same size as the list items"
</div>

<div class="prompt-quote mb-6">
"What is a rem?"
</div>

<p class="text-lg text-slate-400 mb-2">What Claude explained:</p>

- `text-xl` → `1.25rem`. `text-slate-300` → a color. `mb-4` → a margin.
- `.slidev-layout p { … }` has <strong class="text-sky-400">higher specificity</strong> than `.text-xl` — so the global rule silently wins.
- `1rem` = the root element's font-size. UnoCSS scales the whole utility set off that single root.

<div class="accent-box mt-6">
  <strong class="text-white">"Ask the AI About Code," in the wild.</strong>
  <p class="text-aside mt-1">The easy win — AI as code explainer.</p>
</div>

---

# Beat 3 — "What's the idiomatic way?"

<p class="text-section-sub mb-6">I asked about the design.</p>

<div class="prompt-quote mb-6">
"What's the idiomatic way of managing this?"
</div>

<p class="text-lg text-slate-400 mb-2">What Claude proposed:</p>

- **Tune the canvas, not individual sizes.** `canvasWidth` rescales the whole slide proportionally.
- **Use utilities inline for emphasis.** Don't override base element rules.
- **Define UnoCSS shortcuts.** Promote repeated combos to <strong class="text-sky-400">named concepts</strong> — `text-lead`, `text-section-sub`, `prompt-quote`.

<div class="accent-box mt-6">
  <strong class="text-white">"Review the Code," in the wild.</strong>
  <p class="text-aside mt-1">Architecture, not patches.</p>
</div>

---
layout: two-cols-header
---

# The "Primitive Trap"

::left::

<div class="text-xs uppercase text-slate-500 mb-2 font-mono">AI Default — Sloppy</div>

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

<div class="flex items-center gap-8">
  <div class="w-12 h-12 rounded-full bg-sky-500 flex items-center justify-center font-bold text-white shrink-0">1</div>
  <div>
    <h3 class="text-2xl font-bold text-white">Identify Tensions</h3>
    <p class="text-lg text-slate-400">Ask AI: "Where does this code violate Parse-Don't-Validate?"</p>
  </div>
</div>

<div class="flex items-center gap-8">
  <div class="w-12 h-12 rounded-full bg-sky-500 flex items-center justify-center font-bold text-white shrink-0">2</div>
  <div>
    <h3 class="text-2xl font-bold text-white">Explore Options</h3>
    <p class="text-lg text-slate-400">Ask for two different ways to refactor the module boundary.</p>
  </div>
</div>

<div class="flex items-center gap-8">
  <div class="w-12 h-12 rounded-full bg-sky-500 flex items-center justify-center font-bold text-white shrink-0">3</div>
  <div>
    <h3 class="text-2xl font-bold text-white">Execute Refactor</h3>
    <p class="text-lg text-slate-400">You pick the path. AI handles the tedious bulk changes.</p>
  </div>
</div>

</div>

---

# I Have a Claude Skill for This

<p class="text-lead mb-6">A <strong class="text-sky-400">Structural Code Analysis</strong> skill that bundles these prompts.</p>

- It walks the AI through the principles and asks it to evaluate the current branch.
- It surfaces the tensions, suggests options, and lets you pick the refactor.
- <strong class="text-white">It can help. It can't do everything.</strong>

<div class="accent-box mt-6">
  <p class="text-lg italic">The skill is a checklist. The judgment is still yours.</p>
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
- <strong class="text-white text-xl">Human Context:</strong> "I chose this because…" — not "the AI did it."
- <strong class="text-white text-xl">Auditable PR:</strong> small enough that a human can actually review it.

</div>

---
layout: center
class: text-center
---

<p class="text-3xl text-slate-300 italic max-w-3xl mx-auto leading-relaxed">
"AI is a powerful engine. You are the steering wheel."
</p>

<p class="text-xl text-slate-500 mt-8 max-w-2xl mx-auto">
If you let go of the wheel to go faster, you're just accelerating toward a wall.
</p>

<p class="text-aside mt-12 max-w-2xl mx-auto">
P.S. This entire deck was built with Claude. The CSS slide is real.
</p>

<p class="mt-12 text-sky-400 font-bold text-2xl">Questions?</p>
