---
name: loop-me
description: "Interview the user to specify a recurring workflow and its decision points."
disable-model-invocation: true
argument-hint: "A workflow to design, or nothing to go find one"
---

# Loop me

Explore a recurring activity the user wants to understand or delegate. Produce a workflow specification, not a running automation unless they also requested one.

A loop is the recurring activity; a workflow describes how one run should work. Define only relevant elements: trigger, inputs, outcome, authority, useful human checkpoints, failure handling, and notification rules. Some workflows need no AI or schedule.

Use concrete examples from the user's life or work. Ask about consequential unknowns and retrieve facts available from connected tools. Defer human checkpoints until useful evidence is ready, while preserving required authorization.

Reuse the workspace's existing notes and workflows. Save the spec in the requested location or workflows/<topic>.md. Keep settled decisions distinct from assumptions, and preserve superseded work rather than deleting it silently.

Done means the scoped workflow is clear enough to implement, with remaining decisions or dependencies identified. It does not require eliminating all imaginable uncertainty.
