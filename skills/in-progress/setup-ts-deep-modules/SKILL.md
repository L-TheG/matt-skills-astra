---
name: setup-ts-deep-modules
description: "Configure TypeScript dependency-boundary checks for an agreed deep-module layout."
disable-model-invocation: true
---

# Setup TS deep modules

Inspect existing package boundaries, exports, linter configuration, and package manager. Agree material architecture changes; do not impose src/packages or move existing code merely to fit a template.

The bundled [dependency-cruiser.config.cjs](dependency-cruiser.config.cjs) targets flat packages whose root files are public and subfolders private. Use it only when that model matches the requested layout, otherwise adapt rules to the actual exports. Verify the installed dependency-cruiser API before integrating.

Merge boundary rules into existing checks: outside callers use public entry points, package internals can collaborate, tests prefer stable behavior, and unwanted cycles are rejected. Keep legitimate existing test seams explicit rather than silently breaking them.

Prove enforcement with an isolated, disposable positive and negative fixture: allowed imports pass, an intended forbidden import fails, and the restored state passes. Remove only the fixture you created; a permanent example package is not required.

Document the agreed boundary and check command near the packages, with a narrow pointer from applicable agent instructions. Report any existing violations separately from changes caused by setup. Do not commit or migrate architecture without the corresponding request.
