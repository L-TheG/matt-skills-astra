---
name: tdd
description: "Use a test-first red-green-refactor loop for requested TDD or a focused behavioral regression."
---

# TDD

Work in small vertical slices of observable behavior: one failing expectation, the implementation that satisfies it, then simplification under green tests.

Use the existing test framework and stable public behavior where practical. Agree consequential unknown behavior or interfaces with the user; do not require a new interface-approval round when the request and code already settle them.

Run the focused test and confirm it fails for the intended reason before changing behavior when feasible. A setup error is not the desired red. Implement enough to satisfy the behavior, rerun, and refactor when useful while preserving passing tests. Continue across the requested scope rather than stopping after the first green test.

Choose regression and surrounding checks in proportion to risk and repository instructions. Prefer existing coverage; avoid duplicate tests or tests of implementation trivia.

For examples and pitfalls, consult [tests.md](tests.md). For external dependency isolation, consult [mocking.md](mocking.md).
