# Dependency isolation

Prefer real in-process collaborators and existing fixtures when they keep tests fast and deterministic. Use controlled substitutes where needed for network services, time, randomness, storage, or expensive boundaries.

A test substitute should preserve relevant semantics, especially errors, retries, ordering, and persistence. A local database substitute is not proof of production database compatibility.

Use existing dependency injection or test seams before adding abstractions. A narrow domain-facing port can help; do not wrap an existing SDK solely because mocks seem easier. Mock an internal collaborator only when the test's purpose and isolation need justify it, and avoid asserting incidental call choreography.
