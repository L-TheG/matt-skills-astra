# Astra adaptation

This is an independent personal fork, not an official release by Matt Pocock or OpenAI. Original work remains MIT licensed.

Baseline: mattpocock/skills at 3cca18b368ae95cdbdebbff572ccafa662551015. Guidance: [Rethinking skills and prompts for GPT-6 Astra](https://developers.openai.com/blog/rethinking-skills-and-prompts-for-gpt-6-astra).

## Decisions

All 37 skill bodies were assessed. The 25 promoted skills are revised and shipped; seven additional optional/experimental skills are revised but not promoted. The three collaborative writing skills retain their intentional stepwise user interaction. The two explicitly Claude-only helpers retain their host-specific purpose and are excluded.

The edits keep Matt's interviews, domain modeling, deep modules, behavioral testing, and dependency-aware planning. They replace mandatory itineraries with task-scoped outcomes, remove redundant approval stops, narrow activation descriptions, scale verification to risk, and use actual host capabilities instead of assuming a Skill tool or Claude commands.

Invocation choices are preserved. The generated Codex SKILL.md files omit Claude-only frontmatter; agents/openai.yaml retains every explicit-only policy. The plugin does not select or force a model.

Relevant support references were revised too, including context handling, testing exceptions, optional prototypes and reports, safe tracker writes, and domain-document conventions.

## Maintenance

Edit skills/<bucket>/<name>, then run:

```sh
bun scripts/build-codex-plugin.mjs
bun scripts/build-codex-plugin.mjs --check
bun test scripts/build-codex-plugin.test.mjs
```

The checked-in plugin payload is generated, not a second source to maintain. Bump the version in plugins/matt-skills-astra/.codex-plugin/plugin.json whenever releasing changed payload. Commit and push to the fork, then refresh the marketplace and update the installed plugin through Codex.

Do not edit the installed plugin cache or copy skills into user-level folders. Upstream checking is separate from integration: inspect relevant changes, adapt selectively, validate, then advance upstream.json.

## Verification limits

Release 1.0.0 passed seven build/package regression tests, source-to-payload parity for all 25 shipped skills, the official plugin validator, and the official skill validator for each packaged skill. Markdown resource paths and unchanged invocation policies were checked.

Packaging checks validate payload parity, references, metadata, and invocation policy. Scenario-based checks can identify obvious workflow regressions; they are not a statistical proof that Astra performs better. No old-vs-new benchmark improvement is claimed.
