---
name: codebase-design
description: "Design or review module boundaries, public interfaces, and encapsulation in an existing codebase."
---

# Codebase design

A deep module hides substantial complexity behind a small, useful interface. Depth is leverage for callers, not line count or a requirement to merge everything.

Use these distinctions when they clarify the design, while retaining the project's established vocabulary:

- **Module:** cohesive responsibility and its hidden implementation.
- **Interface:** caller-visible operations, data, invariants, ordering, and errors.
- **Seam:** a boundary at which responsibilities or dependencies meet.
- **Adapter:** translates across a seam.
- **Locality:** a change stays near the responsibility that owns it.

Prefer fewer concepts callers must learn, clear ownership, and stable observable contracts. Watch for pass-through layers, callers coordinating internals, and the same domain rule scattered across modules. An abstraction earns its cost by reducing current complexity or protecting a real boundary, not by anticipating hypothetical consumers.

Keep internal details private where practical. Test meaningful behavior through stable interfaces; focused tests of complex internals can still be valuable. Avoid exposing production API solely to make tests convenient.

For a concrete deepening/refactor proposal, consult [DEEPENING.md](DEEPENING.md). For consequential interface choices with genuinely different trade-offs, consult [DESIGN-IT-TWICE.md](DESIGN-IT-TWICE.md). Routine edits need neither exercise.
