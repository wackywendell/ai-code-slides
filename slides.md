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

# Software Engineering Today

<!--

# AI is Amazing / Terrible
-->

<div class="grid grid-cols-2 gap-8 mt-12">

<v-click>
<div>

<h2 class="momentum-accent">AI Is Amazing</h2>

- Knows *all* the languages, idioms, libraries
- Explains unfamiliar code better than I do
- Generates working code quickly
- Kinda feels like it can do my job?

</div>
</v-click>

<!--
### And Yet. And Yet.
 -->

<v-click>
<div>

<h2 class="ai-accent">AI Slop Is Terrible</h2>

- Huge diffs nobody wants to review
- Code that works but is full of workarounds
- Tests that prove less than they claim
- OSS Maintainers pushing back

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

<!--
# AI and Software Engineering
-->

<h1><span class="ai-accent">AI</span> and <span class="eng-accent">Software Engineering</span></h1>

<div class="grid grid-cols-2 items-center gap-8">

<div>

<Callout>What are <span class="eng-accent">engineers</span> doing when <span class="ai-accent">AI</span> writes code?</Callout>

</div>

<v-click>
<img
  src="/images/what-would-you-say.webp"
  alt="Office Space meme: so what would you say you do here?"
  class="w-full rounded border border-slate-700 shadow-lg"
/>
</v-click>

</div>

<!--
- Personal setup: AI is incredibly powerful.
- It writes, explains, fixes, tests, and keeps momentum going.
- But sometimes it is powerful and still misguided.
- It can compile, pass tests, and satisfy the request while missing the shape.
- The joke lands because there is a real version of the question.
- If AI can write the code, what is my role?
- The answer depends on what we mean by software engineering.
- And on whether "good code" was always about more than making the program run.
-->

---

# Table of Contents

- Fragile code
- Code structure and why we care
- Steering AI toward durable code

---
layout: section
---

# Fragile Code

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
- Tests are stubbed out
- It doesn't get merged.

</div>

</v-click>

</div>

<v-click>

<Callout class="text-center !mt-12">What happened?</Callout>

</v-click>

---

# What Happened?

<div class="grid items-start gap-8" style="grid-template-columns: minmax(0, 1.45fr) minmax(14rem, 0.75fr);">

<div>

<p class="text-lead">AI is great at writing code.<br>It's not great at <em>living with</em> it.</p>

<ul>
  <li>School: solve it, move on</li>
  <li>AI Training: make it work, move on</li>
  <li>
    <v-switch>
      <template #0>Maintenance: a problem for later</template>
      <template #1>Maintenance: a problem for <strong>you</strong> later 😬</template>
    </v-switch>
  </li>
</ul>

</div>

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

</div>

<!--
- "In school" is broad on purpose: CS assignments, interviews, weekend projects.
- My version: physics scripts, get the result, throw it away.
- A lot of training data has that disposable-code shape.
- First say the disposable-code version: maintenance is a problem for later.
- Then click: later means you.
- Land the beat: AI does not maintain this in a year. **You do**.
-->

---
layout: section
---

# Code Structure

<p class="text-section-sub">Software engineering is the discipline of building interfaces.</p>

---

# Do we know how to maintain code?

<div class="grid grid-cols-2 items-start gap-8">

<div>

<Callout class="mt-10"><strong>Yes.</strong> (Mostly.)</Callout>

- Software engineering is about building <strong>interfaces</strong>

</div>

<img
  src="/images/building-blocks.webp"
  alt="Stack of building blocks labeled File systems, Linux, the web, Arrow, DataFusion, and our services and libraries"
  class="max-h-[390px] ml-auto rounded bg-white"
/>

</div>

<!--
- This is not new.
- Decades of software engineering gave us better and better ways to build on previous work.
- Types, modules, packages, filesystems, processes, protocols: all interfaces.
- The point is not "interfaces" as API endpoints only.
- The point is building blocks on top of building blocks.
- Good interfaces let later work take earlier work for granted.
-->

---

# A Thought Experiment

<div class="grid grid-cols-[minmax(0,1.1fr)_minmax(16rem,0.9fr)] items-center gap-8 min-h-[390px]">

<div>

<p>
Imagine <strong class="text-white">DataFusion</strong>, but all we had was <strong class="text-white">assembly</strong>.
</p>

<v-click>

<Callout>Could AI make a useful change?</Callout>

</v-click>

<v-click>

<p>
Maybe. But it would have to rediscover everything.
</p>

<p>
Good interfaces let us take previous work for granted.
</p>

</v-click>

<v-click at="3">

<Callout class="text-left">That is the point of the layers.</Callout>

</v-click>

</div>

<div class="flex items-center justify-center min-h-[330px]">

<v-click at="3">

<img
  src="/images/building-blocks.webp"
  alt="Stack of building blocks labeled File systems, Linux, the web, Arrow, DataFusion, and our services and libraries"
  class="max-h-[310px] rounded bg-white"
/>

</v-click>

</div>

</div>

<!--
- This is a deliberately absurd version of the question.
- No filesystem: just addresses or blocks.
- No directories, names, permissions, formats.
- No Rust types/modules, no Arrow arrays, no SQL plan structures.
- Yes, AI might grind through some of it.
- But every change would require rediscovering basic structure.
- Over decades, we built layers: languages, filesystems, HTTP, RPC.
- Each layer gave the next layer a smaller surface to understand.
- The next layer can use the old one without rereading all of it.
- This is what interfaces do: they let us stand on previous work without reloading all of it.
- That is how humans build on old work. It is also how AI can.
- That happens at every level: structs, modules, packages, services, protocols.
- "Take for granted" is the point.
- We take for granted that files have names, directories, and permissions.
- We take for granted that functions have signatures and types.
- We take for granted that HTTP gives us methods, headers, and status codes.
- Good interfaces make that safe.
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

<div class="grid grid-cols-2">

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
    <li>Constrained constructors</li>
  </ul>
</div>

</div>

<!--
- Read less: interfaces, modules, APIs give you local reasoning.
- Remember less: types and constructors carry the rules.
- Type systems are the obvious example: annoying upfront, fewer surprises later.
- Good structure moves work earlier so later changes are simpler.
-->

---

# Do we need this with AI?

<Prompt>AI can read everything. Aren't abstractions less important now?</Prompt>

<v-click>
<Callout>I think they matter more.</Callout>

Imagine DataFusion as one giant assembly program.

- No types
- No modules
- No Rust standard library
- No query plans

<Callout>Interfaces tell AI what to rely on, and what to preserve.</Callout>

</v-click>


---

# The Scope of the Argument

<div class="grid grid-cols-2 gap-8 mt-4">

<div class="p-8 border-2 ai-border ai-bg rounded-lg">
  <h3 class="text-2xl font-bold ai-accent mb-4">Disposable Code</h3>
  <p class="text-lg text-slate-300 mb-4">Prototypes, internal scripts, days to weeks of shelf life.</p>
  <div class="ai-accent font-bold">Vibe-code away!</div>
</div>

<div class="p-8 border-2 eng-border eng-bg rounded-lg">
  <h3 class="text-2xl font-bold eng-accent mb-4">Durable Code</h3>
  <p class="text-lg text-slate-300 mb-4">Product logic, libraries, collaborative repos, open-source, years of shelf life.</p>
  <div class="eng-accent font-bold"><em>Engineering required.</em></div>
</div>

</div>

<p class="text-slate-400">The rest of this talk is about <strong>durable code</strong>.</p>

---
layout: section
---

# Steering AI<br>Toward Durable Code

<p class="text-section-sub">What <strong>we</strong> bring to the table</p>

---

# You Have Context

<p class="text-lead">Tell the agent what kind of code this is.</p>

- Prototype or production?
- Reliability or velocity?
- Cost of breaking it?
- What happened last time?

<p class="text-slate-500 mt-6 italic">Sidenote: Friction often means you have context the agent does not.</p>

<!--
- Third reason humans are still in the loop.
- First two: AI does not apply structure by default; context is finite.
- This one is judgment: does this code matter?
- Only you know whether to be careful or fast.
- How many pages did we get last month? For what?
- Same prompt, different right answer depending on team, codebase, stage.
-->

---

# Ask the AI About Code

<p class="text-lead">I use AI when I would otherwise interrupt someone.</p>

- What is this doing?
- What problem is it solving?
- Why would the author do it that way?
- What breaks if this changes?
- This function has a complex signature. What boundary is it crossing?
  - Can we structure it better? Options?

<!--
- This is one of the most practical changes in my day-to-day workflow.
- In reviews, I used to ask the author "what is this doing?" or "why do we need this?"
- Now I often ask AI first.
- Usually that is faster, and it keeps the review from starting with a basic context handoff.
- But the answer is still something to review, not something to accept.
- This is where the talk starts turning the context problem into a workflow.
-->

---

# Think About the Interface

<p class="text-lead">Now decide what future work should need to know.</p>

- What concerns are mixed together?
  - Struct, module, service, workflow
- What is leaking across the boundary?
  - Does the caller really need that?
- What should the code enforce?
  - Types, constructors, validation, ownership

<Callout>Make the next change need less context.</Callout>

<!--
- This is the non-AI version of the same point.
- Do not start with "what prompt should I write?"
- Start with the engineering question: what interface would make the next change smaller?
- Ask yourself first. Ask AI too, if that helps.
- Interfaces are not only APIs between services.
- Every struct, module, package, service, and workflow exposes something and hides something.
- The next human reader and the next AI session both benefit from a smaller surface.
- The target is not prettier code; it is lower required context for future work.
-->

---

# Guide the Structure

<p class="text-lead">Give the agent a design lens before it commits to a shape.</p>

- Planning
  - What structure would make this easy to change?
- Building
  - Keep the boundary clear while implementing.
- Reviewing
  - What structural tensions do you see?

<p class="text-sm text-slate-500 mt-4 italic">Examples: Local Reasoning, Parse Don't Validate, Functional Core / Imperative Shell</p>

<!--
- I do this before implementation, not only after.
- Ask it to plan with a lens: local reasoning, invalid states, functional core.
- Then keep that lens in the loop while it builds.
- In review, I will ask: based on the code-structure lens, what tensions do you see?
- The useful part is not that AI knows the words.
- The useful part is making the structural target explicit.
-->

---

# Asking for an Outcome

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
  <div class="border border-slate-700 rounded bg-slate-900 p-2 overflow-hidden" style="aspect-ratio: 16/9; width: 320px;">
    <div class="font-extrabold text-slate-100" style="font-size: 1.5rem; line-height: 1;">Slide Title</div>
    <div class="text-slate-300" style="font-size: 1.3rem; line-height: 1.3;">→ Bullet one</div>
    <div class="text-slate-300" style="font-size: 1.3rem; line-height: 1.3;">→ Bullet two</div>
    <div class="text-slate-300" style="font-size: 1.3rem; line-height: 1.3;">→ Bullet three</div>
  </div>

  <p class="text-slate-500"><i>What I wanted:</i> change the scale of <em>all</em> the text.</p>
</div>

<div class="flex flex-col items-center">
  <div class="speaker-label !text-slate-500">Elsewhere</div>
  <div class="border border-slate-700 rounded bg-slate-900 p-2 overflow-hidden" style="aspect-ratio: 16/9; width: 320px;">
    <div class="font-extrabold text-slate-100" style="font-size: 1.5rem; line-height: 1;">Slide Title</div>
    <div class="text-slate-400" style="font-size: 1.05rem; line-height: 1;">A subheader smaller than the bullets</div>
    <div class="text-slate-300" style="font-size: 1.3rem; line-height: 1.3;">→ Body text bigger</div>
    <div class="text-slate-300" style="font-size: 1.3rem; line-height: 1.3;">→ Than its own subheader</div>
  </div>
  <p class="text-slate-500"><i>What I got:</i> manual tweaks on some paragraphs.</p>
</div>

</div>

<!--
- This is a reasonable request, and the first result is not obviously absurd.
- It made the slide I was looking at better.
- But it solved the local symptom: paragraphs and list items here.
- What I actually wanted was a deck-level change: all text and spacing should scale together.
- The mismatch is the point: outcome prompt, wrong structural lever.
-->

---

# Asking the AI

<p class="text-lead !mt-0">Understanding the Structure</p>

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

**This is a self-inflicted wound from how I wrote the CSS.**

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

<!--
- When I'm looking to understand what the structures and boundaries are, the AI can help.
- It can tell me what the conventions are, and their intended boundaries.
- Understanding the CSS detail is important to see the leak concretely: global paragraph rules and inline utility classes are fighting.
- The `rem` question is me following the thread: if the text scale is based on some sort of base `rem` scale, what controls that?
-->

---

# Finding the Layers

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

<!--
- So then, once you start to understand the layers, you can start thinking about - *and asking about* - what to do about it.
- In this case, we have three layers: the base canvas sizing; the the CSS styling; and the HTML content.
- If I want to tweak the base size... clearly, changing the canvas size is the way to do it.
-->

---

# Following Through

<p class="text-lead">Where else are the styling abstractions leaking?</p>

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

<!--
- The first leak was text sizing.
- Once we found that, the next question was whether the same boundary was leaking elsewhere.
- I do not know much about styling, so I asked AI
-->

---

# The Interface We Wanted

<div class="grid grid-cols-2">

<div class="accent-box lens-read-card">
  <h3 class="lens-read-accent">Writing Slides</h3>
  <ul>
    <li>Need: headings, paragraphs, lists</li>
    <li>Should not need: font sizes, colors</li>
  </ul>
</div>

<div class="accent-box lens-remember-card">
  <h3 class="lens-remember-accent">Styling the Deck</h3>
  <ul>
    <li>Need: rhythm and scale</li>
    <li>Should not need: every slide detail</li>
  </ul>
</div>

</div>

<Callout class="!mt-12"><span class="lens-read-accent">Content</span> and <span class="lens-remember-accent">Styles</span> are separate <strong>Layers</strong></Callout>

<!--
- This is the example made concrete.
- CSS is an interface between the writer and the visual system.
- When writing text, I should not need to know `text-xl`, `text-slate-300`, or specificity.
- I should be able to use normal slide structure and trust the deck styles.
- When changing CSS, I should not have to inspect every slide for accidental overrides.
- That is read less / remember less in a tiny local example.
-->

---

# Thinking about Interfaces

<div class="grid grid-cols-3 gap-8 items-center">

<div class="col-span-2 flex flex-col gap-7">

<v-click>
<StepRow :number="1" title="Separate the Concerns">
<ul>
<li>What jobs is this code doing?</li>
<li>Which ones can be independent?</li>
</ul>

</StepRow>
</v-click>

<v-click>
<StepRow :number="2" title="Work Out the Boundaries">
<ul>
<li>What should each role rely on?</li>
<li>What should stay hidden?</li>
</ul>
</StepRow>
</v-click>

<v-click>
<StepRow :number="3" title="Look for Leakage">
<ul>
<li>What does someone have to know to use this component?</li>
<li>Should that be their concern?</li>
</ul>
</StepRow>
</v-click>

</div>

<v-click>
<div class="flex justify-center">
  <div class="font-handwritten text-orange-300" style="font-size: 1.5rem; line-height: 1.1;">
    You're not alone!<br>Ask AI for help!
  </div>
</div>
</v-click>

</div>

<!--
- Roles are not just people.
- They can be layers, modules, modes of change, or responsibilities.
- In the slide example: writing content and styling the deck should vary independently.
- Boundaries are not obvious.
- You often discover them by seeing where knowledge leaks.
- Leakage can mean remove the detail, or move the boundary.
- AI can help at each step.
- Separate concerns: ask what jobs the code is doing.
- Boundaries: ask for options and tradeoffs.
- Leakage: ask what knowledge is leaking across the interface.
- But you still choose the boundary.
-->

---

# Our Role

- **Ensure it's Good Code.**
  - "It passes tests" is not the same as "we can maintain it."
  - PR reviews exist because code still needs ownership.
- **Choose the boundaries.**
  - What should the next layer have to know?
  - What should this layer remember for them?
- **Live with the consequences.**
  - AI will generate 8-argument functions, leaky abstractions, workarounds.
  - That AI session won't be debugging this in three months. You will.

<!--
- This is the answer to the opening question.
- Not: inspect every character AI writes.
- The value is ownership.
- Decide what matters.
- Decide where boundaries belong.
- Decide what each layer exposes and hides.
- Decide what future readers/operators should understand locally.
-->

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

# References

- John Ousterhout, _A Philosophy of Software Design_
  - [Talks at Google](https://www.youtube.com/watch?v=bmSAYlu0NcY)
  - [Book](https://web.stanford.edu/~ouster/cgi-bin/book.php)
- Mario Zechner, _Building pi in a World of Slop_
  - [AI Engineer talk](https://www.youtube.com/watch?v=RjfbvDXpFls)

<!--
- Keep this sparse.
- These are the references I would actually point people to after the talk.
- Ousterhout is the deeper software-design / complexity-management thread.
- Zechner is the sharper current AI-agent / slow down / human judgment thread.
-->
