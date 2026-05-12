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
  primary: "#38bdf8"
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
- Opening question: deliberately grandiose
- Uncertainty around engineering + AI
- Reflection, not prediction
- Thread: judgment, structure, ownership
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

- Knows _all_ the languages, idioms, libraries
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
- Click 1: real capability, real speed
- Click 2: real slop, real maintenance cost
- Same tool, different outcomes
- Transition: how can both be true?
-->

---

<!--
# AI and Software Engineering
-->

<h1><span class="ai-accent">AI</span> and <span class="eng-accent">Software Engineering</span></h1>

<div class="grid grid-cols-2 items-center gap-8">

<div>

<Callout>When <span class="ai-accent">AI</span> is writing all the code...<br><br>What are <span class="eng-accent">engineers</span> doing?</Callout>

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
- That's the question I'm looking at today
- _Meme_
- What is it we do here?
-->

---

# Table of Contents

- Fragile code
- Code Structure
- Steering AI

<!--
- Challenges that come up with AI
- What we know about software engineering
- How we do something about it
-->

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

<!--
- General story, many of us may have been through at some point
  - if you haven't, try it!
- Day 1: speed, momentum, working demo
- Day 2: edge cases, context debt; AI pushes through
- Day 3: Start sticking in the mud: huge diff, tests you don't trust, no review path

- Transition: This started feeling good; where did it go off the rails?
-->

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
    <span class="text-2xl font-bold text-white mt-1">Make it Work</span>
  </div>
  <div class="text-center p-6 eng-bg rounded-full border-2 eng-border w-44 h-44 flex flex-col justify-center">
    <span class="text-xs uppercase tracking-widest eng-accent">Your Goal</span>
    <span class="text-2xl font-bold text-white mt-1">Make it Good</span>
  </div>
</div>

</div>

<!--
- AI writes code well, but doesn't live with it
- This is probably familiar: Disposable-code shape
  - school, scripts, weekend projects, LeetCode
- My version: physics scripts, get result, throw away
- Training data bias: make it work, move on
- First beat: The challenge here is maintenance
  - Come back to it, and work with it
- Click: later means you
  - We are going to have to build on it, extend it, debug it
-->

---
layout: section
---

# Code Structure

<p class="text-section-sub">Making Code Livable</p>

<!--
- That was the problem as I understand it
- Code we could not confidently maintain.
- So the next question is: what makes code livable?
- My answer: structure, especially interfaces.
-->

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
- Not new
- Decades of software engineering
- Lesson we keep learning in new ways: how to build good interfaces
- Types, modules, packages, filesystems, processes, protocols
- "Interface" broader than service API
- Building blocks on building blocks
- Later work takes earlier work for granted
  - When you're working with Datafusion, how much are you thinking about which
  addresses on the hard drive you need to write to? Or which sockets to open?
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
Maybe. But it would have to rediscover everything, and probably make a mess.
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
- Deliberately absurd
- No filesystem: addresses / blocks only
- No directories, names, permissions, formats
- No Rust types/modules, Arrow arrays, SQL plans
- AI might grind; trust would be hard
- Every change: rediscover structure
- Layers: languages, filesystems, HTTP, RPC
- Smaller surface for next layer
- Interfaces let humans and AI take prior work for granted
- Every level: structs, modules, packages, services, protocols
- Examples: files, function signatures, HTTP methods/status
-->

---

# Why do Interfaces Matter?

<p class="text-lead">Good interfaces are <strong>maintainable</strong> and <strong>extendable</strong>.</p>

<v-click><Callout>Good interfaces reduce how much you have to <strong>read</strong> and <strong>remember</strong>.</Callout></v-click>

<!--
- Many definitions of "good code" or "good interfaces"
- For this talk: two useful properties
- Read less: reduce context needed for change
- Remember less: rules live in structure
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
- Read less: interfaces, modules, APIs
- Remember less: types, constructors, invariants
- Type systems: more upfront thought, fewer surprises
- Structure moves work earlier
- Later changes get simpler
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

</v-click>

<Callout>
<v-switch at="1">
<template #1>Interfaces tell us what to rely on, and what to preserve.</template>
<template #2>Interfaces tell <span class="ai-accent">AI</span> what to rely on, and what to preserve.</template>
</v-switch>
</Callout>

<!--
- Tempting objection: AI can read everything
- Context is not the same as structure
- Giant assembly DataFusion: possible, not trustworthy
- Interfaces tell AI what is stable
- Preserve boundaries, do not rediscover them
- Abstractions matter more when changes are faster
-->

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

<!--
- Disposable: don't need to worry about building on top
- Different standards for different consequences
- Rest of talk: durable code
-->

---
layout: section
---

# Steering AI<br>Toward Durable Code

<p class="text-section-sub">What <strong>we</strong> bring to the table</p>

<!--
- Let's talk about what we can do about it
- What's our role in this
-->

---

# We Have Context

- Prototype or production?
- Reliability or velocity?
- Cost of breaking it?
- What happened last time?

<p><i>Friction often means you have context the agent does not.</i></p>

<p>Tell the agent what kind of code this is - what the expectations are.</p>


<!--
- Human role: context + stakes
- Prototype vs production changes the right answer
- Reliability vs velocity
- Cost of breaking it
- Team memory: pages, incidents, prior pain
- Same prompt, different codebase, different answer
-->

---

# Ask the AI About Code

<p class="text-lead">Understand the structure.</p>

- What is this doing?
- What problem is it solving?
- Why would the author do it that way?
- What breaks if this changes?
- This function has a complex signature. What boundary is it crossing?
  - Can we structure it better? Options?

<!--
- Work with AI to get more context
- Practical daily workflow
- Review/debug moment: "wait, what is this?"
- Ask AI before interrupting author
- Faster context handoff
- Still review the answer
- Bridge: context problem -> workflow
-->

---

# Think About the Interface

<p class="text-lead">What are the layers?</p>

- What concerns can be separate?
  - Struct, module, service, workflow
- What is leaking across the boundary?
  - Does the caller really need that?
- What should the code enforce?
  - Types, constructors, validation, ownership

Ask yourself

Ask the AI

<!-- <Callout>Make the next change need less context.</Callout> -->

<!--
- Interfaces at every level
- Structs, modules, packages, services, workflows
- Exposes something, hides something
- Smaller surface for human + next AI session
- Target: lower required context
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

<p class="text-sm text-slate-500 mt-4 italic">Examples: Local Reasoning, Parse Don't Validate, Functional Core / Imperative Shell, Correct by Construction</p>

<!--
- Once you understand, you can guide
- Before implementation, not only after
- Planning lens: local reasoning, invalid states, functional core
- Here's some terms, the AI knows them
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
.slidev-layout {
  font-size: 1.35rem;
}
.slidev-layout p {
  font-size: 1.4rem;
}
.slidev-layout li {
  font-size: 1.4rem;
}
```

</div>

</div>

<div class="grid grid-cols-2">

<div class="flex flex-col items-center">
  <div class="speaker-label !text-slate-500">What I checked</div>
  <div class="border border-slate-700 rounded bg-slate-900 p-2 overflow-hidden" style="aspect-ratio: 16/9; width: 300px;">
    <div class="font-extrabold text-slate-100" style="font-size: 1.5rem; line-height: 1;">Slide Title</div>
    <div class="text-slate-300" style="font-size: 1.3rem; line-height: 1.3;">→ Bullet one</div>
    <div class="text-slate-300" style="font-size: 1.3rem; line-height: 1.3;">→ Bullet two</div>
    <div class="text-slate-300" style="font-size: 1.3rem; line-height: 1.3;">→ Bullet three</div>
  </div>

  <p class="text-slate-500"><i>What I wanted:</i> change the scale of <em>all</em> the text.</p>
</div>

<div class="flex flex-col items-center">
  <div class="speaker-label !text-slate-500">Elsewhere</div>
  <div class="border border-slate-700 rounded bg-slate-900 p-2 overflow-hidden" style="aspect-ratio: 16/9; width: 300px;">
    <div class="font-extrabold text-slate-100" style="font-size: 1.5rem; line-height: 1;">Slide Title</div>
    <div class="text-slate-400" style="font-size: 1.05rem; line-height: 1;">A subheader smaller than the bullets</div>
    <div class="text-slate-300" style="font-size: 1.3rem; line-height: 1.3;">→ Body text bigger</div>
    <div class="text-slate-300" style="font-size: 1.3rem; line-height: 1.3;">→ Than its own subheader</div>
  </div>
  <p class="text-slate-500"><i>What I got:</i> manual tweaks on some paragraphs.</p>
</div>

</div>

<!--
- Let's walk through an example - one from making these slides
- Reasonable request
- First result: not obviously absurd
- <i>What I wanted:</i> change the scale of <em>all</em> the text.
- <i>What I got:</i> manual tweaks on some paragraphs.
- Local symptom: paragraphs / list items
- Actual goal: deck-level text + spacing scale
- Mismatch: outcome prompt, wrong structural lever
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
- I don't know much about CSS and HTML, much less this framework
  - So I asked it
  - Helped me understand structures + boundaries
- Concrete leak: global paragraph rules vs inline utilities
- `rem` question: follow the thread
- If rem controls scale, what controls rem?
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
- Once you start to understand, ask what to do
  - Discuss, think about it, don't take the easy answer
- Three layers here
- Canvas sizing
- CSS styling
- HTML content
- Base size -> canvas lever
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
- I do not know much about styling
- Ask AI to widen the search
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
- Example made concrete
- CSS as interface: writer <-> visual system
- Writing text: no font sizes, colors, specificity
- Use normal slide structure
- Trust deck styles
- Changing CSS: no need to inspect every slide
- Read less / remember less, local example
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
- Roles: people, layers, modules, responsibilities
- Slide example: content vs styling
- Boundaries are not obvious
- Discover them through leakage
- Leakage options: hide detail, move boundary
- AI help at each step
- Separate concerns: jobs in the code
- Boundaries: options + tradeoffs
- Leakage: knowledge crossing interface
- Human still chooses boundary
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
- Answer to opening question
- Not: inspect every generated character
- Value: ownership
- Decide what matters
- Decide where boundaries belong
- Decide what each layer exposes / hides
- Decide what future readers/operators know locally
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

# References

- John Ousterhout, _A Philosophy of Software Design_
  - [Talks at Google](https://www.youtube.com/watch?v=bmSAYlu0NcY)
  - [Book](https://web.stanford.edu/~ouster/cgi-bin/book.php)
- Mario Zechner, _Building pi in a World of Slop_
  - [AI Engineer talk](https://www.youtube.com/watch?v=RjfbvDXpFls)

<!--
- Keep this sparse.
- References I would actually point people to
- Ousterhout: design / complexity management
- Zechner: AI agents / slow down / human judgment
-->

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

<Callout>It gives the AI a goal and a vocabulary</Callout>

<!--
- Skill does not make AI correct
- Better opening move
- More structured, more specific, less vibe-based
- Start of design discussion
- Ask options
- Choose tradeoff
- Make code match decision
-->
