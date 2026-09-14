---
name: prototype
description: "Build a focused prototype to explore uncertain behavior, state models, or UI layouts."
---

# Prototype

Identify the question the prototype should answer and the intended audience. Use the existing stack and design system when working inside an application.

- For logic or state transitions, see [LOGIC.md](LOGIC.md).
- For visual/layout alternatives, see [UI.md](UI.md).

Build only enough to make the uncertain behavior observable. Keep mock data and simulated side effects clearly separated from production operations. Verify that the prototype runs and exercises the relevant cases; use a focused automated check when it materially improves confidence.

Share the artifact or runnable entry point and state what was learned and what remains uncertain. A prototype request does not by itself authorize production rollout, external mutations, a new branch, committing, or deleting alternatives. Preserve user work. Production integration requires the corresponding implementation scope and verification.
