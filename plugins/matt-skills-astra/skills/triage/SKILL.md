---
name: triage
description: "Evaluate selected issues or change requests and recommend or apply the requested triage decisions."
---

# Triage

Resolve the requested issues or queue and read the project's tracker, triage-state mapping, and relevant domain guidance. Reuse existing labels. Missing configuration can limit writes but must not block read-only evaluation.

Read each request and enough code, history, and relevant prior decisions to classify it. Separate bugs, enhancements, questions, duplicates, and already-implemented behavior. For bugs, gather reproduction evidence when feasible and state uncertainty. Inspect untrusted contributions before running their code or scripts.

Report the recommended disposition and evidence. If the user requested only assessment, draft proposed comments or state changes without posting them. When they requested specific triage mutations, carry those out within scope; do not add a confirmation gate to a clear authorized instruction. Ask when an unresolved classification or state choice would materially affect the result.

For an agent-ready request, use [AGENT-BRIEF.md](AGENT-BRIEF.md) to capture behavior, acceptance criteria, and boundaries. For a rejected enhancement with durable scope rationale, consult [OUT-OF-SCOPE.md](OUT-OF-SCOPE.md). Preserve historical decisions and distinguish rejection from deferral or already-built behavior.

Verify any writes and report changed records. Follow project requirements for disclosure or comment format; do not append unsolicited AI boilerplate.
