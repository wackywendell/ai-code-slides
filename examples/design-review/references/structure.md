# Structure Review Lens

Identify design tensions in code so it becomes easier to read, harder to misuse, and more resilient to change. First describe what is happening and why it matters, then assess whether the solution is obvious, tradeoff-heavy, or constrained.

## Principles

### Make invalid states unrepresentable

Reshape types so illegal combinations cannot exist where practical. Boundary validation and some runtime checks are still necessary, but core code should not repeatedly defend against states its own types could rule out.

Distinguish encoded constraints from named conventions. A type, helper, trait, or boundary can improve readability, documentation, trait coherence, or public API shape without actually forbidding any state. Credit those benefits under the right heading rather than as correct-by-construction design.

Use the substance test: what can a caller know, skip checking, or be prevented from doing because this structure exists? If the answer is "nothing beyond the name," treat it as a convention or tradeoff, not a structural constraint.

Look for fields that only make sense in certain combinations, boolean flags that form implicit state machines, nullable fields that are conditionally required, parallel collections that must stay in sync, strings or integers that should be enums/unions/newtypes, and structures whose names imply guarantees their implementations do not enforce.

### Parse, Don't Validate

Transform unstructured input into typed values at the boundary, then pass the typed value downstream. Look for repeated validation, raw strings/maps/objects flowing through business logic, or assertions deep inside code that could have been enforced earlier.

### Functional core, imperative shell

Push I/O and side effects to the edges. Keep core decisions as pure data-in/data-out transformations where possible. Watch for business logic interleaved with database calls, HTTP requests, file reads, or writes.

### Co-locate decisions with data

Decision logic should live near the data or module that owns the relevant invariant. Watch for callers reaching into internals, getter-heavy objects with logic in callers, feature envy, or repeated pattern matches that could be encapsulated by the defining module.

### Immutability by default

Prefer returning new values over mutating shared input unless the language or performance profile makes mutation the idiomatic choice. Look for temporal coupling, reset/reinitialize patterns, and objects mutated across multiple functions.

### Postel's law

Accept flexible input at public boundaries where useful, then parse it quickly and emit strict, consistent output. Internals should usually be stricter than public ingress points. Watch for outputs that vary shape by context, APIs returning unrelated types under different conditions, or boundary validation that rejects reasonable caller representations before parsing them into the internal shape.

### Secondary lenses

Use these when they are more relevant than the primary principles: separation of concerns, command-query separation, dependency inversion, fail fast, least surprise.

## Output Format

### Opening

One or two sentences on the overall structural character of the code.

### What's Working Well (0-3)

Call out tensions already resolved by structure: places where a type, module, or boundary actively prevents a class of error or preserves a load-bearing API property. Name the mechanism, not just the pattern. If you cannot name the constraint or concrete benefit, move the observation to Tradeoffs or omit it.

### Clear Path Forward (0-5)

Use this for tensions with an obvious, idiomatic resolution:

```markdown
**N. One-line name for the tension**

Describe what is happening in the code, where it shows up, and why it matters. Name the relevant principle and concrete problem.

> **Fix:** Specific, concrete action.
```

### Tradeoffs (0-3)

Use this when multiple viable approaches exist:

```markdown
**N. One-line name for the tension**

Describe what is happening and why it matters.

> **Option A:** Approach and cost.
> **Option B:** Approach and cost.
```

### Constraints (0-2)

Use this for tensions with no clear resolution because of library APIs, framework conventions, backwards compatibility, or other constraints. Name the constraint and why it prevents a cleaner shape.

Omit empty sections.

## Review Discipline

Test the pattern before crediting an instance. When new code extends an existing convention, the credit it deserves is whatever the convention deserves — no more. If you find yourself praising symmetry, confirm the symmetry is around something load-bearing; propagating a weak local pattern can entrench the weakness.
