---
name: diagnosing-bugs
description: "Investigate a reported bug or flaky failure and establish its cause from evidence."
---

# Diagnosing bugs

Start from observed versus expected behavior, environment, and the requested scope: diagnosis alone or diagnosis plus a fix. A diagnosis request is read-only apart from safe disposable diagnostic artifacts.

Find the smallest useful reproduction or focused test. Prefer an existing failing case. For flaky behavior, record conditions and observed failure frequency; use bounded repetitions that discriminate hypotheses, not an arbitrary iteration quota.

Trace the relevant code and runtime evidence. Form plausible hypotheses, then choose checks that distinguish them. Record which observations support or eliminate each explanation. A failing test is strong evidence, but lack of runtime access does not forbid useful static diagnosis; label confidence and missing evidence accurately.

If the request includes a fix, address the established cause, add or adjust a regression check when meaningful, observe failure before and success after when feasible, and run the relevant surrounding checks. Preserve unrelated behavior. Do not keep changing code to fit an unverified guess.

Report the cause, evidence, affected scope, and remaining uncertainty. For diagnosis-only work, explain the proposed fix without implementing it.

When reproduction truly requires human interaction, use a tight evidence-gathering loop. The optional [Bash loop template](scripts/hitl-loop.template.sh) is only for hosts with Bash; otherwise use the host's native mechanism. Keep logs bounded and redact secrets.
