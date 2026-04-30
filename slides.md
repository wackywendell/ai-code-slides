---
theme: default
title: The Maintainability Trap
info: |
  Building Durable Code in the Age of AI.
  Velocity today is a loan. Architecture is the interest rate.
author: Wendell Smith
colorSchema: dark
aspectRatio: 16/9
canvasWidth: 1280
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

# The Maintainability Trap

<p class="text-2xl text-slate-300">Building Durable Code in the Age of AI</p>

<div class="mt-12 text-slate-500 font-mono italic">
Velocity today is a loan. Architecture is the interest rate.
</div>

---
layout: two-cols-header
---

# The FOMO Paradox

::left::

<p class="text-xl mb-8 text-slate-300">"If I don't use AI for everything, I'm falling behind."</p>

- The pressure to be "10x productive"
- The anxiety of the 5,000-line PR
- The "Skeptic vs. Shipper" tension

::right::

<div class="accent-box ml-8">
  <h3 class="text-xl font-bold text-sky-400 mb-2">The Real Risk</h3>
  <p class="text-lg">Trading long-term understandability for short-term "green tests."</p>
</div>

---

# The 3 Stages of AI Decay

<div class="grid grid-cols-3 gap-6 mt-8">

<div class="p-6 bg-slate-800/50 rounded-xl border border-slate-700">
  <div class="text-4xl mb-4">🍯</div>
  <h3 class="text-xl font-bold mb-2">1. The Honeymoon</h3>
  <p class="text-base text-slate-400">Spec → Prompt → PR. It works! The code is sloppy, but who cares? We're flying.</p>
</div>

<div class="p-6 bg-slate-800/50 rounded-xl border border-slate-700">
  <div class="text-4xl mb-4">🌫️</div>
  <h3 class="text-xl font-bold mb-2">2. The Fog</h3>
  <p class="text-base text-slate-400">Bugs emerge. You task the AI to fix them. It writes "Circular Tests" that pass its own misconceptions.</p>
</div>

<div class="p-6 bg-slate-800/50 rounded-xl border border-slate-700">
  <div class="text-4xl mb-4">🧱</div>
  <h3 class="text-xl font-bold mb-2">3. The Wall</h3>
  <p class="text-base text-slate-400">The codebase exceeds the AI's reliable context window. Adding features is now a "whack-a-mole" nightmare.</p>
</div>

</div>

---
layout: two-cols-header
---

# Why AI Gets This Wrong

::left::

- <strong class="text-sky-400">RL Bias:</strong> Rewarded for immediate "correctness," not long-term elegance.
- <strong class="text-sky-400">The Median Trap:</strong> Trained on the average quality of the web (mostly disposable code).
- <strong class="text-sky-400">The Missing Loop:</strong> AI has never had to maintain a 5-year-old system. It doesn't suffer; <strong>you do.</strong>

::right::

<div class="flex justify-center items-center h-full">
  <div class="text-center p-8 bg-sky-500/10 rounded-full border-2 border-sky-500/20 w-64 h-64 flex flex-col justify-center">
    <span class="text-sm uppercase tracking-widest text-sky-400">AI Goal</span>
    <span class="text-3xl font-bold">"Make it Work"</span>
  </div>
</div>

---

# "Good" Code in the AI Era

<div class="accent-box mb-8">
  <p class="text-2xl font-semibold text-white italic">"Good code lets you change one thing without reading everything."</p>
</div>

- <strong>Abstraction as Compression:</strong> Interfaces hide complexity from the AI's context window.
- <strong>Bounded Context:</strong> You shouldn't need a map to find the light switch.

---

# The Scope of the Argument

<div class="grid grid-cols-2 gap-8 mt-4">

<div class="p-8 border border-slate-700 rounded-lg">
  <h3 class="text-2xl font-bold text-slate-400 mb-4">Disposable Code</h3>
  <p class="text-lg text-slate-500 mb-4">Prototypes, internal scripts, vibe-coding, 1-week shelf life.</p>
  <div class="text-sky-400 font-bold">Conclusion: Let AI run wild.</div>
</div>

<div class="p-8 border border-sky-500/50 rounded-lg bg-sky-500/5">
  <h3 class="text-2xl font-bold text-sky-400 mb-4">Durable Code</h3>
  <p class="text-lg mb-4">Product logic, libraries, collaborative repos, 1-year+ shelf life.</p>
  <div class="text-white font-bold">Conclusion: Engineering is required.</div>
</div>

</div>

---
layout: two-cols-header
---

# The "Primitive Trap" (SKILL Demo)

::left::

<div class="text-xs uppercase text-slate-500 mb-2 font-mono">Stage 1: AI Default (Sloppy)</div>

```ts
function processOrder(
  id: string,
  qty: number,
  status: string,
  price: number,
) {
  if (status === 'pending') { /* ... */ }
  if (status === 'cancelled') { /* ... */ }
  // Logic leaks everywhere
}
```

::right::

<div class="text-xs uppercase text-sky-400 mb-2 font-mono">Stage 2: After Structural Review</div>

```ts
type OrderState =
  | PendingOrder
  | ShippedOrder
  | CancelledOrder

function processOrder(order: OrderState) {
  // Invalid states are impossible.
  // The type handles the logic.
}
```

::bottom::

<div class="mt-6 text-slate-400">
  <strong>Structural Code Analysis Skill:</strong> AI identified "Primitive Obsession" and suggested Algebraic Data Types (ADTs).
</div>

---

# The 3-Step AI Review Cycle

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
    <p class="text-lg text-slate-400">Ask AI for two different ways to refactor the module boundary.</p>
  </div>
</div>

<div class="flex items-center gap-8">
  <div class="w-12 h-12 rounded-full bg-sky-500 flex items-center justify-center font-bold text-white shrink-0">3</div>
  <div>
    <h3 class="text-2xl font-bold text-white">Execute Refactor</h3>
    <p class="text-lg text-slate-400">Pick the path. Let AI handle the tedious bulk changes.</p>
  </div>
</div>

</div>

---

# New Definition of Done

<div class="accent-box">

- <strong class="text-white text-xl">Self-Documenting:</strong> The interface tells the story, not the comments.
- <strong class="text-white text-xl">Durable Structure:</strong> Can I change a business rule without touching 10 files?
- <strong class="text-white text-xl">Human Context:</strong> "I chose this because..." (not "The AI did it").

</div>

<p class="mt-12 text-center text-sky-400 font-bold text-3xl">Don't be a proofreader. Be an architect.</p>
