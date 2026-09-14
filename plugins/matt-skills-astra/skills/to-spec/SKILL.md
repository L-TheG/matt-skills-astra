---
name: to-spec
description: "Turn an agreed idea into a concise, implementation-ready specification."
---

# To spec

Use the conversation, supplied artifacts, and relevant code to write a specification. Preserve settled decisions; do not restart an interview or require tracker setup.

Include what an implementer needs: the problem and desired outcome, scope and exclusions, behavioral requirements, checkable acceptance criteria, important interfaces or constraints, and unresolved decisions. Omit sections that add no information. Use paths or source links as useful navigation hints, not brittle implementation mandates.

Resolve discoverable facts yourself. Ask only about consequential missing product choices; otherwise mark bounded assumptions and proceed with the draft. Do not invent requirements to make the document exhaustive.

Use the user's selected destination. If publishing to an issue tracker is requested, follow its existing guidance, verify the target and result, and apply only authorized metadata. If no publication is requested or no tracker is configured, return a Markdown draft or save it to the requested local destination. Drafting does not authorize external publication.

A finished spec has enough detail to implement and verify its scoped behavior, not the maximum number of user stories.
