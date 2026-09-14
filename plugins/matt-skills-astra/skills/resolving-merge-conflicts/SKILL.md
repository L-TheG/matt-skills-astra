---
name: resolving-merge-conflicts
description: "Resolve Git merge or rebase conflicts while preserving both intended changes and unrelated work."
---

# Resolving merge conflicts

Inspect Git status and the operation in progress. Read both sides, their intended changes, and relevant callers or tests before choosing a resolution. Preserve unrelated working-tree and staged changes.

Resolve semantics, not just conflict markers. Prefer a combined result that meets both changes' intent; ask when a consequential conflict cannot be decided from evidence.

Verify the affected behavior and confirm no unresolved entries remain. Stage only the resolved files within scope. Continue or complete the Git operation when that is part of the user's request and requires no new decision. Never stage unrelated files, force-push, or discard a side merely to make the operation succeed.

Respect an explicit request to abort; first explain any risk to current work and use the appropriate recoverable operation.
