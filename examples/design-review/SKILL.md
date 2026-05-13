---
name: design-review
description: Review code or code changes for design quality and structural quality. Use when the user asks for a design review, quality review, structure review, code review focused on clarity/simplicity/types/modularity, or analysis using principles like Parse Don't Validate, invalid states, functional core/imperative shell, immutability, and co-locating decisions with data.
metadata:
  short-description: Review code design and structure
---

# Design Review

Review code through one or both lenses:

- **Quality**: clarity, simplicity, naming, types, modularity, control flow, tests, docs, error handling, interface honesty.
- **Structure**: invalid states, Parse Don't Validate, functional core / imperative shell, decision ownership, immutability, input/output shape, coupling.

Use the quality lens when the user asks for a quality review or general design review. Use the structure lens when the user asks for structural analysis, type design feedback, architectural tensions, or one of the named principles above. Use both lenses when the user asks for a broad design review.

## Workflow

1. Determine the review target.
   - Accept a git/jj diff command, PR URL or number, staged/unstaged changes, specific files, or a natural language description.
   - If the target is unclear, ask one concise question.

2. Gather the changed code and surrounding context.
   - Prefer `rg`, `rg --files`, `git diff`, `jj diff`, and direct file reads.
   - Read callers, adjacent modules, imports, and tests where they affect the review.
   - For code changes, compare the new code to what it replaced and to nearby conventions.

3. Load the Required Lens.
   - For any broad design review, structure review, quality review, or combined review, read the relevant reference files before producing findings:
     - For quality review details, read [references/quality.md](references/quality.md).
     - For structural review details, read [references/structure.md](references/structure.md).
     - For combined reviews, gather context once, then apply both lenses.

4. Review with the codebase's language and idioms in mind.
   - Distinguish "non-idiomatic and harmful" from "non-idiomatic but justified here."
   - Do not penalize code for failing an abstract principle when the local framework or API imposes the shape.
   - Flag pre-existing issues only when they materially affect the reviewed change or are natural follow-up work.

5. Report findings concisely.
   - Lead with the most useful assessment, not a mechanical checklist.
   - Be specific: name files, functions, types, and behaviors.
   - Prefer concrete next actions over vague advice.
   - Include severity when recommending changes.

## Output Modes

### Combined Design Review

Use this format when applying both lenses:

```markdown
## Overall Assessment

<Short narrative covering the design direction, what improved, and the biggest remaining tension.>

## What's Working

- <0-3 concrete strengths worth preserving.>

## Findings

1. **[High|Medium|Low] Finding title**
   <What is happening, where it appears, why it matters, and the concrete change to make.>

## Structural Tensions

1. **Tension title**
   <What design principle is involved, whether the path forward is clear or tradeoff-heavy, and the concrete option(s).>

## Bottom Line

<Rate old and new code when applicable: Poor, Weak, Moderate, Good, Excellent. State net direction.>
```

Omit empty sections. If there are no meaningful issues, say so directly and call out residual test or validation risk.

### Quality-Only Review

Use the format from [references/quality.md](references/quality.md): narrative assessment, ordered suggestions with severity, and bottom-line rating.

### Structure-Only Review

Use the format from [references/structure.md](references/structure.md): opening, what's working well, clear path forward, tradeoffs, and constraints.
