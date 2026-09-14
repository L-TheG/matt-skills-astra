---
name: retro
description: "Review a session for evidence-backed improvements to agent guidance and tooling."
disable-model-invocation: true
---

# Retrospective

Inspect the requested session, defaulting to this conversation. Limit log access to relevant evidence and avoid exposing secrets or unrelated personal history.

Look for repeated friction: missing navigation pointers, checks that could prevent observed mistakes, redundant instructions, tool overhead, and unavailable information. Distinguish a demonstrated pattern from one awkward turn.

Recommend the smallest useful changes in order of impact, with examples from the session. Existing standards apply during implementation and review; do not shift correctness entirely to a hypothetical reviewer.

Use writing-for-agents guidance if proposing instruction edits. An audit is not permission to change global instructions, install tools, or grant access. Apply only changes the user requested, and verify them proportionately.
