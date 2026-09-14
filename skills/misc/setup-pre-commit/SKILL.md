---
name: setup-pre-commit
description: "Set up requested Git pre-commit checks using the repository's existing tooling."
---

# Setup pre-commit

Inspect current hooks, formatting, test scripts, package manager, and CI. Reuse suitable tooling; avoid layering a second hook manager or formatter on an existing system.

When Husky and lint-staged are the requested fit, verify their current installed or official usage and add only missing development dependencies. Merge scripts and configuration without replacing unrelated hooks or prepare steps.

Use staged-file formatting where supported. Choose additional checks according to repository policy and commit-time cost; running the entire suite on every commit is not a universal default. Preserve partially staged work and warn before a check may rewrite unrelated content.

Verify hook installation and safe representative checks without creating a commit solely as a smoke test. Report the commands, what will run on commit, and any checks omitted because the repository does not have them. Commit only when requested.
