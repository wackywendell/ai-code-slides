# Quality Review Lens

Review code changes for design quality: whether the code is as simple as possible but no simpler, easy for humans and AI to understand with local context, and moving the codebase toward fewer edge cases.

This is not primarily a bug hunt or style check. Mention bugs or style only when they reveal a design quality problem.

## What To Evaluate

### Types and functions

Check whether types match the behavior they represent. Prefer designs where valid values carry guarantees in their shape, and distinguish real guarantees from naming conventions that callers still have to verify manually. Function names, arguments, and return types should make behavior clear. Watch for arguments that only make sense in certain combinations, since they often mean one function is doing too many things.

### Code structure and modularity

Check whether module interfaces explain what the module does without forcing readers into the implementation. Look for coupling across natural boundaries, such as utility modules importing domain modules, or modules that can only be understood together.

### Naming and clarity

Names should communicate intent. Flag names that mislead, are too vague, or hide important distinctions. Call out magic values when a reader would have to guess their meaning or when the same concept appears in multiple places.

### Control flow

Prefer straightforward execution paths. Look for deep nesting, long stateful functions, convoluted branching, and conditions that would be clearer as guard clauses or separate helpers.

### Testing

Tests should read like a specification of the behavior. Look for meaningful edge cases, clear happy paths, orthogonal tests, and unnecessary boilerplate that does not increase confidence.

### Documentation

Docs and comments should clarify behavior, invariants, edge cases, or reasons that are not obvious from signatures and names. Do not penalize self-explanatory code for lacking comments.

### Error handling

Errors should be structured enough for callers to handle and should describe the situation from the caller's point of view. Avoid vague fallbacks such as returning empty strings, zero values, or `null` when an explicit unsupported/error path would be clearer.

### Interface honesty

Interfaces should honestly communicate capabilities and limitations through types, explicit errors, or documentation. A function that cannot handle a case should make that visible rather than silently defaulting.

## Output Format

### Narrative assessment

Start with what is working well, then discuss areas for improvement. Group related observations instead of walking dimension by dimension mechanically.

### Suggestions and verdict

Give an ordered list of concrete suggestions. Use severities:

- **High**: will cause real problems; address before merging.
- **Medium**: meaningful improvement; safe to defer if necessary.
- **Low**: polish.

For each suggestion, explain why it matters and what to change.

End with a **Bottom line** that rates the old and new code when applicable:

- **Poor**: actively harmful to understanding.
- **Weak**: functional but hard to reason about.
- **Moderate**: competent, understandable with some effort.
- **Good**: clear and well-reasoned; types and interfaces communicate intent.
- **Excellent**: code reads almost like a specification.
