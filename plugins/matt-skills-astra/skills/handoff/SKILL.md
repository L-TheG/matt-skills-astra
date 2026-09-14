---
name: handoff
description: "Write portable continuation notes for another agent or session."
---

# Handoff

Write a concise handoff with the objective, current state, settled decisions and rationale, changed artifacts, verification, unresolved blockers, and the next useful action. Distinguish completed work from plans.

Reference specs, issues, commits, and files instead of repeating their content. Use resolvable paths or URLs and identify the host or repository when necessary. Name relevant skills as suggestions, not assumed tool calls.

Exclude credentials and unnecessary personal data. Save to the user's requested destination, otherwise an available OS temporary or artifact directory outside the project. Report the exact path and warn when a temporary file may not survive cleanup.

Creating a document does not start a new task, change directories, or transfer work automatically.
