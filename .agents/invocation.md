# Invocation policy

The source tree retains Claude-compatible frontmatter and Codex agents/openai.yaml metadata.

Explicit-only skills pair disable-model-invocation: true with policy.allow_implicit_invocation: false. Other skills remain eligible for implicit invocation. Preserve this policy during content edits; changing model eligibility is a separate user choice.

The Codex build removes Claude-only disable-model-invocation and argument-hint fields from SKILL.md while retaining agents/openai.yaml. Validate that both sources express the same policy.

Use the current host's actual skill loading mechanism. Do not assume a tool literally named Skill exists. Routers can recommend explicit-only skills, but should not silently invoke them. Shared references must be packaged at paths that work after installation.
