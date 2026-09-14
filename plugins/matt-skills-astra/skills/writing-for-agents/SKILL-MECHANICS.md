# Skill mechanics

A skill has a SKILL.md with YAML name and description, plus optional scripts, assets, references, and agents/openai.yaml UI metadata. Follow the target host's current schema; do not assume a tool literally named Skill exists.

Keep descriptions short and discriminating. Put workflow detail in the body and substantial optional branches behind clear pointers. Reference files are data/instructions to load when needed, not automatically active skills.

Preserve invocation policy when editing existing skills. In this repository, explicit-only skills pair disable-model-invocation: true for Claude compatibility with policy.allow_implicit_invocation: false in agents/openai.yaml for Codex. Other skills remain eligible for implicit invocation. Do not change that policy merely to reduce context.

A router recommends appropriate workflows without turning explicit-only skills into automatic dependencies. For eligible skills, use the host's actual discovery and loading mechanism. All bundled references must remain reachable in the installed package, not only in the source checkout.

Validate metadata, paths, packaging, and representative behavior after changes. A skill can guide Astra without forcing a model selection; the host and user choose the model.
