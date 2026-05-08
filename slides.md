---
theme: default
title: AI and Good Code
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

# AI and Good Code

<p class="text-2xl text-slate-400">What even is software engineering anymore?</p>

<!--
- Start with the question honestly.
- AI is making the boundaries of software engineering feel less obvious.
- This talk is a reflection, not a prediction.
- The thread: what engineers still do: judgment, structure, ownership.
-->

---

<!--

# AI is Amazing / Terrible
-->

<div class="grid grid-cols-2 gap-8 mt-12">

<div>

<h2 class="momentum-accent">AI Is Amazing</h2>

- Knows *all* the languages, idioms, libraries
- Explains unfamiliar code better than I do
- Generates working code quickly
- Kinda feels like it can do my job?

</div>

<!--
### And Yet. And Yet.
 -->

<v-click>

<div>

<h2 class="ai-accent">AI Slop Is Terrible</h2>

- Huge diffs nobody wants to review
- Code that works but is full of workarounds
- Tests that prove less than they claim
- Maintainers pushing back

</div>

</v-click>

</div>

<v-click>

<Callout class="text-center !mt-16">How can both be true?</Callout>

</v-click>

<!--
- Start with the optimistic side and let it breathe.
- This talk is not a dunk on AI: it really is astonishing.
- Then reveal the second side: everyone has seen AI-generated mess.
- The talk lives in the tension between those two observations.
-->

---

# AI and Good Code

<Callout>What do you bring to the table when AI writes the code?</Callout>

<v-click>

<Callout>What is good code?</Callout>

</v-click>

<!--
- Personal setup: AI is incredibly powerful.
- It writes, explains, fixes, tests, and keeps momentum going.
- But sometimes it is powerful and still misguided.
- It can compile, pass tests, and satisfy the request while missing the shape.
- So: if AI writes the code, what is my role?
- And: was "good code" always about more than making the program run?
-->

---

# Where We're Going

- The fast path to fragile code
- Why we care about code structure
- Steering AI toward durable code

---
layout: section
---

# The Fast Path to Fragile Code

---

# The Fast Path

<div class="grid grid-cols-3 gap-6 mt-6">

<div>
<h2 class="momentum-accent">Day 1</h2>

- Great idea for a feature
- Ask AI to build it
- It writes a lot of code
- It works
- You feel fast

</div>

<v-click>

<div>
<h2 class="text-slate-300">Day 2</h2>

- Edge cases appear
- The code gets longer
- You understand less of it
- AI keeps getting through it
- You keep going

</div>

</v-click>

<v-click>

<div>
<h2 class="ai-accent">Day 3</h2>

- The feature works
  - The edge cases seem handled
  - …but others may be lurking
- <code class="text-green-400">+5,449</code> <code class="text-red-400">-4,141</code>
  - You can't really review it
  - …Neither can anyone else
- It doesn't get merged.

</div>

</v-click>

</div>

<v-click>

<Callout class="text-center !mt-12">What happened?</Callout>

</v-click>

---
layout: two-cols
---

# What Happened?

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
- "In school" is broad on purpose: CS assignments, interviews, weekend projects.
- My version: physics scripts, get the result, throw it away.
- A lot of training data has that disposable-code shape.
- Land the last beat: AI does not maintain this in three years. **You do**.
-->

---
layout: section
---

# Why We Care About<br>Code Structure

<p class="text-section-sub">Software engineering is the discipline of building interfaces.</p>

---

# Do we know how to maintain code?

<Callout><strong>Yes.</strong> (Mostly.)</Callout>

- That's what software engineering _is_ as a discipline: building **interfaces**.
- The boundaries that let humans collaborate on code over years.
- Types, modules, packages, filesystems, processes, protocols. We didn't always have these.


---

# A Thought Experiment

<p>
Imagine all we had was <strong class="text-white">assembly</strong> and <strong class="text-white">raw disks</strong>. Read bytes from memory. Write bytes to disk. That's it.
</p>

<p>
Over decades, we built <strong>programming languages</strong> with type systems and modules. And <strong>filesystems</strong> with directories, ownership, and permissions.
</p>

<v-click>

<div class="accent-box">
  <p class="italic text-2xl">
    Would AI create these abstraction layers?
  </p>
</div>

</v-click>


<Callout class="text-left">
<div class="flex flex-wrap items-baseline gap-x-3 gap-y-1">
  <span v-click class="!ai-accent">No.</span>
  <span v-click>Not on its own.</span>
  <span v-click class="eng-accent">But with your help, it can.</span>
</div>
</Callout>

<!--
1. No, not if the task is simply "build the thing".
  - If you asked for a spreadsheet, it would happily try to make a spreadsheet
  directly — maybe all the way down at the wrong level of abstraction.
2. It knows the ideas, but does not reliably choose durable layers.
3. With human guidance, it can help a lot.
   - Your job: make the abstraction question explicit.
   - Pressure-test the proposed layers.
   - Choose what is actually load-bearing.
   - Not "more abstractions"; intentional abstractions.
-->


---


# What Is Good Code?

<p class="text-lead">Good code is <strong>maintainable</strong> and <strong>extendable</strong>.</p>

<v-click><Callout>Good code reduces how much you have to <strong>read</strong> and <strong>remember</strong>.</Callout></v-click>

<!--
- There are books and books about 'Good Code' out there, lots of ideas there
- But for the purposes of this talk, two properties matter.
- Read less: reduce the context needed for a change.
- Remember less: put more of the rules into the structure.
- Next slide makes that concrete.
- AI makes the question sharper, not obsolete.
-->

---

# Good Code Structure

<div class="grid grid-cols-2 gap-6">

<div class="accent-box lens-read-card">
  <h3 class="lens-read-accent">Local Reasoning</h3>
  <h4 class="lens-read-accent"><em>Read Less</em></h4>
  <ul>
    <li>Clear interfaces</li>
    <li>Small modules</li>
    <li>Loose coupling</li>
  </ul>
</div>

<div class="accent-box lens-remember-card">
  <h3 class="lens-remember-accent">Built-In Invariants</h3>
  <h4 class="lens-remember-accent"><em>Remember Less</em></h4>
  <ul>
    <li>Types</li>
    <li>Parsers</li>
    <li>Constrained constructors</li>
  </ul>
</div>

</div>

<!--
- Read less: interfaces, modules, APIs give you local reasoning.
- Remember less: types, parsers, constructors carry the rules.
- Type systems are the obvious example: annoying upfront, fewer surprises later.
- Good structure moves work earlier so later changes are simpler.
-->

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

# Steering AI<br>Toward Durable Code

<p class="text-section-sub">What <strong>you</strong> bring to the table</p>

---

# What You Bring

<p class="text-lead">Business context and experience.</p>

- What does the business need?
- Is this a prototype, or production?
- Reliability, or velocity?
- What's the cost of a breaking change?
- How many pages did we get last month? For what?

<Callout>That context has to come from you.</Callout>

<!--
- Third reason humans are still in the loop.
- First two: AI does not apply structure by default; context is finite.
- This one is judgment: does this code matter?
- Only you know whether to be careful or fast.
- Same prompt, different right answer depending on team, codebase, stage.
-->

---

# Your Role

- **Ensure it's Good Code.**
  - PR reviews exist because generated code still needs ownership.
  - "It passes tests" is not the same as "we can maintain it."
- **Choose the right abstractions.**
  - Humans invented languages, filesystems, modules, APIs.
  - Your codebase needs the same kind of boundary-setting.
- **Live with the consequences.**
  - AI will generate 8-argument functions, leaky abstractions, workarounds.
  - AI won't debug this in three months. You will.

<!--
- Not "humans must inspect every character."
- The value is ownership.
- Decide what matters.
- Decide where boundaries belong.
- Decide what future readers/operators should understand locally.
-->

---

# Turn Friction Into Instructions

<p class="text-lead">Friction means <strong class="text-white">you know something the AI doesn't.</strong></p>

- "Keep this PR reviewable; do not rewrite unrelated files."
- "Preserve the public API unless we explicitly decide to migrate it."
- "This is a sensitive prod path; prefer boring code and clear failure modes."

<Callout>Explicit constraints beat implied preferences.</Callout>

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

# Guide the Structure

<p class="text-lead">Prompt the AI to think about Good Code.</p>

<div class="grid grid-cols-2 gap-6">

<div class="accent-box lens-read-card">
  <h3 class="lens-read-accent">Read Less</h3>
  <ul>
    <li>Local Reasoning</li>
    <li>Functional Core, Imperative Shell</li>
    <li>Co-locate Decisions with Data</li>
  </ul>
</div>

<div class="accent-box lens-remember-card">
  <h3 class="lens-remember-accent">Remember Less</h3>
  <ul>
    <li>Make Invalid States Unrepresentable</li>
    <li>Parse, Don't Validate</li>
    <li>Immutability by Default</li>
  </ul>
</div>

</div>

<p class="text-sm text-slate-500 mt-4 italic">The strange part: AI can explain these principles fluently, then ignore them in the next diff.</p>

<!--
- This is the paradox: knowledge is not habit.
- AI really has seen these principles everywhere: books, blogs, talks, code reviews.
- It can explain them, give examples, and often apply them well when asked.
- But the default prompt is usually "make this work", not "make this structurally sound".
- This is what I actually do: give the agent a named design lens.
- Not every principle applies every time.
- Read less: boundaries, ownership, separating core logic from effects.
- Remember less: types, parsing, immutability, fewer invalid states.
- Rust is the familiar version: more thinking upfront, fewer weird states later.
- The human move: choose the lens that fits the risk and the codebase.
-->

---

# Asking for a Feature

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

# Asking About the Code

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

# Asking About the Design

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

# Asking About the Layers

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

<Callout>AI won't clean up or refactor unless you ask.</Callout>

Ask it to think about *what* to clean up or restructure. Then ask it to do so.

---

# The 3-Step Work Cycle

<div class="flex items-start gap-4">

<div class="flex-1">
<StepRow :number="1" title="Ask About Structure">
<em>Before implementing, sketch the abstraction layers and code boundaries. Use Local Reasoning and correct-by-construction types as guiding principles.</em>
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

```markdown
---
name: code-structure
description: Identify design tensions in code structure
---

Goal: code that is easier to read, harder to misuse,
and more resilient to change.

Apply only the principles that matter:
- Make Invalid States Unrepresentable
- Parse, Don't Validate
- Functional Core, Imperative Shell
- Co-locate Decisions with Data

For each tension:
- What's happening?
- Why does it matter?
- Is the fix obvious, tradeoff-heavy, or constrained?
```

<Callout>It gives the AI a job, a vocabulary, and a shape for the answer.</Callout>

<!--
- The skill doesn't make the AI "correct" by default.
- It makes the opening move better: more structured, more specific, less vibe-based.
- Treat the answer as the start of a design discussion.
- Follow through: ask for options, choose the tradeoff, then make the code match the decision.
-->

---
layout: section
---

# Closing

---

# While You Work With AI

<div class="accent-box">

- Can I explain why this structure exists?
- Is the PR small enough to review the important decisions?
- Can a future change happen locally?
- Did I give the AI the constraints it needed?

</div>

---
layout: center
class: text-center
---

<!--
# Thank You
 -->

<div class="text-5xl font-bold text-white">

<p>Thank You!</p>

<v-click><p>... Questions?</p></v-click>

</div>
