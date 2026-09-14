---
name: writing-for-agents
description: "Write or revise skill instructions and repository agent guidance."
---

# Writing for agents

Write for a capable model that can choose its own approach. Include the knowledge it cannot reliably infer: local conventions, non-obvious constraints, tool contracts, artifact formats, failure modes, and evidence-based judgment calls.

A skill's description is a compact routing decision: say what distinct task activates it and exclude a nearby misleading trigger when needed. Avoid keyword lists and broad claims that make it fire for unrelated work.

State the desired outcome and boundaries. Prescribe ordering only for real dependencies, safety, or a workflow the user explicitly wants. Do not add mandatory planning, interviews, delegation, context resets, or approval checkpoints to routine work. Completion should be observable and scoped, with verification proportionate to risk.

Use progressive disclosure when there are distinct branches or substantial optional reference material. Name what a linked file contains and when to read it. A short single-purpose skill can stay in one file; extra routers are not inherently better.

Keep stable facts near their constraints, and one authoritative source for repeated guidance. Look up discoverable environment details instead of copying them into permanent instructions. Preserve existing repository conventions and user-selected invocation policy.

For skill frontmatter, Codex invocation metadata, and packaging boundaries, read [SKILL-MECHANICS.md](SKILL-MECHANICS.md). After editing, validate structure and test representative behaviors, including a nearby task that should not trigger the skill. Do not claim behavioral improvement from token reduction alone.
