---
name: to-tickets
description: "Split a specification into independently understandable tickets with real dependencies."
---

# To tickets

Read the supplied spec and relevant implementation constraints. Produce the smallest useful set of tickets; a single coherent change may need only one.

Prefer vertical slices that deliver observable progress. Include only layers actually involved. A prerequisite refactor is justified when it removes a demonstrated blocker, not as a default first ticket. Use expand/contract when compatibility or staged deployment requires it; an atomic change may be better in an early-WIP codebase.

Each ticket should state its purpose, scoped behavior, acceptance criteria, relevant context pointers, and genuine blockers. Separate unresolved human decisions from agent-executable work. Avoid invented ordering between independent tickets.

Check the dependency graph for cycles and acceptance-criteria coverage. Do not mutate the parent spec merely to match your breakdown.

Produce drafts unless the user asked to create tickets. For authorized publication, use the configured tracker and labels, link dependencies with its supported representation, verify the created records, and report links. Missing tracker setup does not block local drafts.
