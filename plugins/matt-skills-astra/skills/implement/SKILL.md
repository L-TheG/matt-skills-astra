---
name: implement
description: "Implement a requested change, specification, or selected tickets through verification."
---

# Implement

Read the request and relevant existing code, contracts, project instructions, and acceptance criteria. A formal spec, ticket series, or prior interface interview is not required for a well-specified change.

Implement the smallest complete solution using the repository's conventions. Resolve discoverable details yourself; ask only for missing choices that materially affect the result or require new authority.

Use a test-first loop when requested or useful for the behavior at hand. Prefer existing checks that cover the change. Add focused regression coverage where it protects meaningful behavior; documentation-only changes need no invented test suite.

Continue through implementation, relevant checks, and correction of failures caused by the change. Review the resulting diff for missed requirements and unintended scope. Scale checks to risk and obey the repository's validation rules.

Report what changed, verification actually performed, and unresolved risks. Commit, push, publish, or update tickets only when authorized by the user's workflow.
