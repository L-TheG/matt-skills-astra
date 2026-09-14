# Design it twice

For a consequential interface choice, explore genuinely different designs against the same concrete use cases and constraints. Two useful alternatives beat a fixed quota of artificial ones.

Show each candidate's public surface, caller example, hidden responsibility, dependency strategy, and error/invariant contract. Compare depth, locality, migration cost, and extensibility actually required now. Recommend one and explain the trade-off.

Independent design passes can help when delegation is available and authorized. They are optional; the same comparison can be done locally. Do not add an approval pause before analysis or force subagents for routine interface edits.
