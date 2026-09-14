---
name: migrate-to-shoehorn
description: "Migrate selected TypeScript test fixtures to @total-typescript/shoehorn when requested."
---

# Migrate to Shoehorn

Inspect the selected tests, existing fixture helpers, package manager, and installed library version. Add @total-typescript/shoehorn as a development dependency only if needed for the requested migration.

Use the current library documentation or installed types to verify its API:

- fromPartial for deliberately incomplete, otherwise correctly typed test data.
- fromAny for intentionally invalid data exercising a failure path.
- fromExact when the whole input should satisfy the type.

Keep these helpers in tests. They do not make missing runtime properties safe. Preserve data required by the behavior under test and retain assertions that express meaningful type intent rather than blindly replacing every TypeScript assertion.

Use existing package scripts and migrate only in scope. Run focused tests and type checking, fixing failures introduced by the migration. Report coverage and any intentionally retained assertions.
