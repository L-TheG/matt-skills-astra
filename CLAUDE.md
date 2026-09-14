# Working on Matt Skills Astra

This is L-TheG's personal fork of mattpocock/skills. Follow the user's requested scope and preserve existing user work.

- Edit bucketed skill sources. Engineering and productivity are promoted; misc and in-progress are source-only.
- Read .agents/invocation.md before changing invocation metadata. Preserve existing explicit-only choices unless requested otherwise.
- Use .agents/writing-docs.md for documentation changes. Keep docs aligned with behavior.
- Build the Codex plugin with bun scripts/build-codex-plugin.mjs. Check it with --check and bun test scripts/build-codex-plugin.test.mjs.
- Do not hand-edit generated plugin skills or the installed cache. Bump the Codex plugin manifest version for payload releases.
- Read docs/ASTRA.md and .agents/adr/0003-astra-codex-plugin.md before changing distribution or upstream integration.
- The upstream package.json and Claude release workflow are retained historical compatibility tooling; they do not release this Codex plugin.
- Use concise prose and existing project vocabulary. Context-dependent guidance beats universal workflow quotas.
