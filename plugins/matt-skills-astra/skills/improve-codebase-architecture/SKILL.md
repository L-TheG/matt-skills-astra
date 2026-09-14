---
name: improve-codebase-architecture
description: "Assess architectural friction and propose concrete improvements with evidence and trade-offs."
---

# Improve codebase architecture

Inspect the requested scope, relevant callers, domain vocabulary, and existing architectural decisions. Find specific sources of change amplification: leaking internals, distributed domain rules, shallow pass-through layers, or awkward ownership.

For each worthwhile candidate, explain the evidence, a possible new interface or ownership arrangement, what it would hide, migration cost, and risks. Use the available codebase-design guidance when it adds useful depth. Distinguish compelling improvements from speculative opportunities.

Prioritize by actual leverage, not by how many files could be consolidated. Recommend the smallest worthwhile change and explain any conflict with an accepted decision.

An architecture assessment is read-only unless implementation was requested. It can include concrete designs without an extra approval round. Use a short comparison or diagram only when it clarifies the proposal. For an explicitly requested HTML report, see [HTML-REPORT.md](HTML-REPORT.md); an HTML artifact is not mandatory.
