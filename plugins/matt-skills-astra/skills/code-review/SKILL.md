---
name: code-review
description: "Review a code diff for actionable defects, contract gaps, and consequential design problems."
---

# Code review

Review the requested artifact without changing it. Resolve whether the target is working-tree, staged, commit, branch, or PR changes. Include untracked files when in scope; do not substitute a branch diff for a working-tree review. Establish the correct comparison base from repository or PR metadata; ask only if materially ambiguous.

Read the changed paths and enough callers, tests, contracts, and relevant project standards to establish impact. Use an available spec as evidence; its absence is a limitation, not a setup blocker.

Evaluate two lenses together:

- **Contract:** correctness, acceptance criteria, error paths, regressions, and missing behavior.
- **Design:** complexity that causes a concrete maintenance or correctness problem, particularly leakage across module boundaries, repeated domain decisions, and tests coupled to implementation details.

Trace each candidate to evidence. Report actionable findings by severity with a precise location, failing scenario, consequence, and suggested direction. Distinguish confirmed defects from uncertain risks; omit speculative style objections. Deduplicate overlapping findings. If there are none, say so and identify material coverage gaps.

Run safe focused checks when they can settle uncertainty. Independent reviews are optional for broad or risky diffs when delegation is available and allowed; reconcile their evidence yourself. Review completion does not authorize edits, commits, or posting comments.
