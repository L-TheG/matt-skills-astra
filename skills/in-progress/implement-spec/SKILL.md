---
name: implement-spec
description: "Implement a specification across its dependent work items through verification."
disable-model-invocation: true
---

# Implement spec

Read the specification, existing tickets if any, and relevant code. Treat blockers as a dependency graph, not an arbitrary ordered checklist. A small spec does not require a ticket graph.

Implement the authorized scope through relevant checks and a final diff review. Preserve settled decisions, use existing repository conventions, and ask only for consequential unknowns. Continue as dependencies become satisfied.

Use subagents only when available, allowed, and helpful for genuinely independent work. Give each a bounded contract and source pointers; choose isolation based on actual edit conflicts. A worktree, merger agent, or separate reviewer is not mandatory for each ticket.

Create branches, PRs, issue updates, or remote changes only when part of the user's requested workflow. Validate combined behavior before reporting completion or marking a requested PR ready. Preserve unrelated work and do not delete worktrees or branches with unmerged user changes.
