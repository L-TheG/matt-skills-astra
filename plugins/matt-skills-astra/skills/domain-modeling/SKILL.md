---
name: domain-modeling
description: "Clarify domain terminology, invariants, and decisions while updating the project's domain documentation."
---

# Domain modeling

Use during active domain design, not merely because a task reads a glossary.

Locate the project's canonical glossary, context map, and relevant decisions from its instructions and existing documentation. Respect its paths and document purposes; a file named CONTEXT.md may be a narrative, not a glossary to replace.

Ground ambiguous terms in concrete scenarios and counterexamples. Identify ownership, invariants, lifecycle transitions, and distinctions that affect behavior. Reuse established terms; ask about unresolved choices with real consequences instead of inventing product decisions.

When documentation changes are part of the request, record agreed definitions and decisions in the existing structure. Keep proposals distinguishable from accepted decisions. Batch related updates when useful; do not require a file write after every sentence.

For a new glossary with no existing convention, use [CONTEXT-FORMAT.md](CONTEXT-FORMAT.md). For a consequential, non-obvious decision worth preserving, use [ADR-FORMAT.md](ADR-FORMAT.md). Do not create an ADR for every implementation choice.
