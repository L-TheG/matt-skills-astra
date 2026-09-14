# Astra fork distributed as a managed Codex plugin

This personal MIT-licensed fork adapts Matt Pocock's skills for GPT-6 Astra. It supersedes ADR 0002's decision to defer Codex packaging and ADR 0001's mandatory setup gate for drafting and read-only work.

The bucketed source tree remains the editing and upstream comparison surface. A deterministic build flattens the 25 promoted engineering/productivity skills into plugins/matt-skills-astra/skills, including their resources and invocation metadata. The generated payload is committed so Git-based plugin installation needs no build step or symlinks. Build --check detects drift; edit sources, not cache or generated copies.

The repository marketplace installs a skills-only plugin with no hooks, MCP servers, credentials, or model override. Codex installation and updates remain managed by its plugin system. The fork is the maintained source, not the installed cache.

Twelve optional/experimental skills remain outside the release. Interactive writing keeps its intentional collaboration; Claude-only helpers remain Claude-only and are not represented as Astra capabilities.

The initial upstream baseline is tracked in upstream.json. An external projectless Luna-low automation checks for relevant upstream changes every three days and reports proposals without merging. Only reviewed integration advances the baseline and plugin version.
