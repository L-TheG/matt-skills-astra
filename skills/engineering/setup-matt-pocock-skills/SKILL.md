---
name: setup-matt-pocock-skills
description: "Configure this project's issue-tracker, triage, and domain-documentation conventions."
disable-model-invocation: true
---

# Setup Matt Pocock skills

Inspect existing project instructions, tracker connections, and domain documentation first. Reuse established conventions. These skills can work without setup for code changes, reviews, research, and local drafts.

Configure only the missing conventions needed by the user's request:

- Tracker: use [GitHub](issue-tracker-github.md), [GitLab](issue-tracker-gitlab.md), or [local Markdown](issue-tracker-local.md) as an optional starting point. For another tracker, use its actual connected tools and project documentation.
- Triage: map canonical roles to existing labels or states using [triage-labels.md](triage-labels.md); creating remote labels requires authorization.
- Domain docs: adapt [domain.md](domain.md) to the actual glossary, context map, and ADR locations.

Ask only for choices that cannot be inferred safely, such as which of multiple trackers owns this effort. A missing tracker must not block a local specification draft.

Write concise project-specific guidance under the repository's established agent-docs location. Add narrow pointers from its applicable instructions, preferring AGENTS.md for Codex while respecting existing cross-host conventions. Merge with current guidance; do not replace unrelated instructions or overwrite user choices.

Verify pointers and configured commands against the actual environment. Summarize what was configured and any external setup still needed.
