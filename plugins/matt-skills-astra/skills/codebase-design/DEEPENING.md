# Deepening

Assess a cluster by responsibilities and caller burden, not merely by file count. Consolidation is worthwhile when it hides complexity and improves locality without merging distinct ownership.

Choose dependency handling to match the actual boundary:

- In-process logic can often be tested directly through a cohesive interface.
- Local substitutes can make persistence or filesystem tests practical; check semantic differences from production.
- Owned remote services may benefit from a narrow port and transport adapter.
- Third-party services usually need controlled boundary tests and realistic failure behavior.

A port is justified by a concrete boundary or testing/operational need, even with one production adapter. Multiple hypothetical adapters do not justify an abstraction on their own. Keep test-only seams private when possible.

Preserve useful existing tests during a refactor. Replace tests coupled to superseded internals only after meaningful behavior remains protected. Narrow algorithm tests may coexist with public-interface tests; test deletion is not an automatic reward for deepening.
